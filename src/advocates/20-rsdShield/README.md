# 20 — RSD Shield — Rejection Sensitive Dysphoria Shield

> **Trait:** RSD — intense response to perceived rejection/criticism.
> **System:** Cross-cutting — supports all 3 systems (START, TIME, TOP3) when shame/RSD blocks activation.

Provides **reframing + self-compassion micro-interventions** before shame spiral locks. Preserves agency — offers alternative interpretations, never gaslights or dismisses feeling.

- **Stub:** `shieldRsd(input) => RsdReframe { reframed, hook, starter }`, `quickGround()`
- **Upstream trait catalog:** [neurolift-ai-fusion](https://github.com/NeuroLift-Technologies/neurolift-ai-fusion) — `src/advocates/20-rsdShield` (canonical — not vendored here)
- **Governance:** every reframe via `src/governance/asfdk.ts` (`asfdk_assess_text_sync` + `asfdk_process_interaction_sync`), `emotional_integrity_preserved` check, `human_led` / `recommendation_only`
- **Local-first:** stub only, no model weights — will be 135M–0.5B LoRA per advocate, on-device
- **TODO[A2A]:** Wire to Advocate 20 inference via A2A (neurolift-ai-fusion)

Minimal stub only — no model weights. No `archive/` in nlt-adhd (fresh repo).

- **Developer builder** is NOT here — see `src/orchestrator/developer/` (orchestrator tool, not trait #20).
