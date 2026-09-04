# src/orchestrator/developer — Developer Builder (Orchestrator Tool)

> **Not trait #20.** Trait #20 is RSD Shield (`src/advocates/20-rsdShield`). This builder is an **orchestrator tool** that remakes the app per user at runtime — per original 20 personas StayAlert→RSD Shield where Developer is the orchestrator's build capability, not a trait.

- **Input:** `DeveloperBuildRequest { userId, preferences, surfaces, approved?, proposedFiles? }`
- **Output:** `DeveloperBuildResult { status, message, governance }`
- **Governance:** every file/write via `src/governance/asfdk.ts` → `asfdk_review_tool_call` before any write; `needs_approval` until human `approved:true` / `[Approve]`; `emergency_escalation` on unsafe; `approval_required` for `architecture_changes`
- **Local-first:** no Cloudflare, no Workers — local SQLite/KV, OS confirm dialog
- **Single boundary:** `src/governance/asfdk.ts` (never import harness directly)
- **TODO[A2A]:** Wire to orchestrator A2A build queue (future).

Minimal stub — no model weights. See `src/advocates/20-rsdShield/` for trait #20.
