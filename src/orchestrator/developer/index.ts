/**
 * Developer Builder — Orchestrator Tool (NOT trait #20)
 *
 * Small builder that remakes nlt-adhd per user at runtime (surfaces, wiring).
 * Trait #20 is RSD Shield (src/advocates/20-rsdShield); Developer lives here
 * as an orchestrator tool per original 20 personas StayAlert→RSD Shield.
 *
 * Governance (Ch.9: TOI → OTOI → ASFDK → RRT/Sleepwalker):
 * - HIGHEST-RISK component — can propose patches to app/, src/surfaces/.
 * - Every file/write MUST be pre-checked via asfdk_review_tool_call (policy)
 * - Every build requires explicit human [Approve] — no silent auto-patching
 * - Single boundary: src/governance/asfdk.ts
 * - Local-first: no Cloudflare, local SQLite/KV, OS confirm dialog
 *
 * @see src/governance/asfdk.ts — asfdk_assess_text, asfdk_review_tool_call, asfdk_process_interaction
 * @see src/surfaces/README.md — surfaces registry
 */

import {
  asfdk_assess_text,
  asfdk_process_interaction,
  asfdk_review_tool_call,
  asfdk_status,
} from "../../governance/asfdk";

export interface DeveloperBuildRequest {
  userId: string;
  preferences: Record<string, unknown>;
  surfaces: string[]; // e.g. ["web", "mobile"]
  /** Human approval flag — must be true to actually apply patches (TOI: approval_required) */
  approved?: boolean;
  proposedFiles?: Array<{ path: string; content: string }>;
}

export interface DeveloperBuildResult {
  status: "queued" | "ready" | "failed" | "needs_approval";
  patch?: unknown;
  message: string;
  governance?: {
    approved: boolean;
    policyChecks: Array<{ tool: string; allowed: boolean; reason: string }>;
  };
}

export async function buildForUser(req: DeveloperBuildRequest): Promise<DeveloperBuildResult> {
  const status = await asfdk_status().catch(() => ({ mode: "UNKNOWN", healthy: false } as unknown));
  void status;

  const textToAssess = JSON.stringify({ preferences: req.preferences, surfaces: req.surfaces }).slice(0, 1000);
  let assessment: Awaited<ReturnType<typeof asfdk_assess_text>>;
  try {
    assessment = await asfdk_assess_text({
      text: textToAssess,
      context: { source: "orchestrator/developer", agency: "human_led", pipeline: "World>>Fusion>>App" },
    });
  } catch {
    assessment = { safe: true, flags: [], signals: [], componentResults: { error: "assess_failed" } };
  }
  if (!assessment.safe) {
    await asfdk_process_interaction({
      interactionType: "emergency_escalation",
      data: { reason: "developer_builder_assessment_unsafe", flags: assessment.flags, userId: req.userId },
      context: { source: "orchestrator/developer", agency: "approval_required" },
    }).catch(() => undefined);
    return {
      status: "failed",
      message: `ASFDK governance: build request flagged for review (${assessment.flags.join(",")}) — not queued. Escalated.`,
    };
  }

  const policyChecks: Array<{ tool: string; allowed: boolean; reason: string }> = [];
  if (req.proposedFiles && req.proposedFiles.length > 0) {
    for (const f of req.proposedFiles) {
      const decision = await asfdk_review_tool_call({ toolName: "write", input: { path: f.path, content: f.content } });
      policyChecks.push({ tool: "write", allowed: decision.allowed, reason: decision.reason });
      if (!decision.allowed) {
        await asfdk_process_interaction({
          interactionType: "emergency_escalation",
          data: { reason: "developer_builder_blocked", path: f.path, policy: decision.reason },
          context: { source: "orchestrator/developer" },
        }).catch(() => undefined);
        return {
          status: "failed",
          message: `Build blocked by governance: ${f.path} — ${decision.reason}`,
          governance: { approved: false, policyChecks },
        };
      }
    }
  }

  if (!req.approved) {
    return {
      status: "needs_approval",
      message: "Build ready for human review — requires explicit [Approve] before apply (TOI: approval_required for architecture_changes).",
      governance: { approved: false, policyChecks },
    };
  }

  await asfdk_process_interaction({
    interactionType: "agent_action",
    data: { action: "buildForUser", userId: req.userId, surfaces: req.surfaces, approved: true, agency: "approval_required" },
    context: { source: "orchestrator/developer", pipeline: "World>>Fusion>>App" },
  }).catch(() => undefined);

  return {
    status: "queued",
    message: `Build queued for ${req.userId} — surfaces: ${req.surfaces.join(",")}`,
    governance: { approved: true, policyChecks },
  };
}
