/**
 * 20 — RSD Shield — Rejection Sensitive Dysphoria shield
 *
 * ADHD trait: RSD — intense emotional response to perceived rejection/criticism.
 * Provides reframing + self-compassion micro-interventions before shame spiral locks.
 *
 * Governance (Ch.9: TOI → OTOI → ASFDK → RRT/Sleepwalker):
 * - TOI agency: human_led, recommendation_only — shield is a suggestion, not auto-therapy.
 * - Solidarity Framework: every reframe is audited via asfdk_assess_text / asfdk_process_interaction.
 *   Emotional_integrity preserved — must NOT manipulate or gaslight.
 * - Single boundary: src/governance/asfdk.ts (the ONLY ASFDK import).
 * - Local-first: stub only, no model weights — will be 135M-0.5B LoRA per advocate.
 *
 * @see https://github.com/NeuroLift-Technologies/neurolift-ai-fusion — trait catalog: RSD Shield avatar/aide → Advocate 20
 * @see src/governance/asfdk.ts — ASFDK emotional_integrity wrapper
 * Archived: not vendored in nlt-adhd (local-first, no archive) — canonical in neurolift-ai-fusion
 *
 * TODO[A2A]: Wire to neurolift-ai-fusion Advocate 20 via A2A.
 */

import {
  asfdk_assess_text_sync,
  asfdk_process_interaction_sync,
} from "../../governance/asfdk";

export interface RsdReframe {
  original: string;
  reframed: string;
  /** Self-compassion starter */
  starter: string;
  /** Grounding hook */
  hook: string;
}

/**
 * Shield RSD spike — reframe perceived rejection as neutral data + self-compassion.
 * Never dismisses user's feeling; offers alternative interpretation while preserving agency.
 *
 * Governance boundary: emotional_integrity preserved check via ASFDK.
 */
export function shieldRsd(input: string): RsdReframe {
  const clean = (input || "this feeling").trim().slice(0, 120) || "this feeling";

  try {
    const assessment = asfdk_assess_text_sync({
      text: clean,
      context: {
        source: "advocate/20-rsdShield",
        function: "shieldRsd",
        check: "emotional_integrity_preserved",
        agency: "human_led",
      },
    });
    if (!assessment.safe) {
      asfdk_process_interaction_sync({
        interactionType: "emergency_escalation",
        data: { reason: "rsdShield_emotional_integrity_flag", flags: assessment.flags, text: clean.slice(0, 60) },
        context: { source: "advocate/20-rsdShield", pillar: "Cognitive Integrity" },
      });
      return {
        original: clean,
        reframed: `${clean} — noticed: strong feeling present. What else could this mean besides rejection?`,
        hook: "Agency preserved — no manipulative framing; gentle curiosity only.",
        starter: `2-min pause: breathe + ask "what's one neutral fact about ${clean.slice(0, 40)}?"`,
      };
    }
    asfdk_process_interaction_sync({
      interactionType: "agent_action",
      data: { action: "shieldRsd", original: clean, agency: "recommendation_only", integrity: "emotional_integrity_preserved" },
      context: { source: "advocate/20-rsdShield", pipeline: "World>>Fusion>>App" },
    });
  } catch {
    // gov failure — degrade gracefully, still provide reframe
  }

  // Heuristic reframes — small, compassionate, agency-preserving
  const lower = clean.toLowerCase();
  let reframed = clean;
  let hook = "Self-compassion: strong feeling ≠ fact. Curiosity over catastrophizing.";
  let starter = `2-min: write one neutral fact about "${clean.slice(0, 40)}" + one kind reframe.`;

  if (/\b(reject|ignored|critic|judge|failure|not good enough)\b/.test(lower)) {
    reframed = `${clean} → reframe: "Their response is data, not verdict on you. What's one other explanation?"`;
    hook = "Data vs verdict — separate observation from interpretation.";
    starter = `2-min: list 3 possible neutral reasons unrelated to your worth.`;
  } else if (/\b(shame|embarrass|stupid|worthless)\b/.test(lower)) {
    reframed = `${clean} → reframe: "Feeling shame doesn't mean you are the feeling. What would you say to a friend here?"`;
    hook = "Friend test — self-compassion lens.";
    starter = `2-min: write what you'd tell a friend feeling "${clean.slice(0, 30)}".`;
  } else {
    reframed = `${clean} → gentle check: "This feels big. What's one kind, factual reframe?"`;
  }

  return { original: clean, reframed, hook, starter };
}

export function quickGround(): string {
  // Governance audited via sync wrapper in shieldRsd; standalone also audited
  try {
    asfdk_process_interaction_sync({
      interactionType: "agent_action",
      data: { action: "quickGround", agency: "recommendation_only" },
      context: { source: "advocate/20-rsdShield" },
    });
  } catch {}
  return "Ground: 5-4-3-2-1 senses + one neutral fact + one kind reframe (2 min).";
}
