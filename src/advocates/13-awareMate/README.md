# 13-awareMate — AwareMate — Self-Monitoring

> **Trait:** AwareMate — Self-Monitoring
> **Status:** Stub — TODO (all 20 present, 6 MVP are fully wired; 14 are stubs)

- **Stub:** `src/advocates/13-awareMate/index.ts` — empty with TODO, no model weights
- **Upstream trait catalog:** [neurolift-ai-fusion](https://github.com/NeuroLift-Technologies/neurolift-ai-fusion) — `src/advocates/13-awareMate` (canonical — not vendored here)
- **Governance:** when implemented, every call via `src/governance/asfdk.ts` (`asfdk_assess_text_sync` + `asfdk_process_interaction_sync`), `human_led` / `recommendation_only`
- **Local-first:** stub only — will be 135M–0.5B LoRA per advocate, on-device
- **TODO[A2A]:** Wire to Advocate via A2A + orchestrator `classifier.ts` routing

Minimal stub only — no model weights. No `archive/` in nlt-adhd (fresh repo).
