# NeuroLift Technologies — Agent Reference Links — nlt-adhd (App Delivery Layer)

> **Pipeline:** `World Engine >> AI-Fusion >> nlt-adhd` — This repo (`nlt-adhd`) is the **app-only delivery layer** (1 orchestrator + 20 advocates, orchestrator↔user natural language, orchestrator↔advocates machine JSON, every AI gets Harness+MCP+ASFDK per `asfdk-dev` `CRISIS_ONLY→DEVELOPMENT→UNIFIED`, local-first no Cloudflare, smallest capable 135M–0.5B LoRA). It **references and links** to the other two repos and does **not** vendor their code — no `archive/` in this repo (fresh, per user direction).

## Related Repos — World >> Fusion >> App

- **World Engine**: [NeuroLift-Technologies/nlt-world-engine](https://github.com/NeuroLift-Technologies/nlt-world-engine) — embodied UE 5.8 simulation — ECS, `world_map`, simulation environment, NPCs, `WorldEngineDO` Durable Object (upstream, not vendored here)
- **AI-Fusion**: [NeuroLift-Technologies/neurolift-ai-fusion](https://github.com/NeuroLift-Technologies/neurolift-ai-fusion) — trains the 1 orchestrator + 20 advocates — `SessionOrchestrator`, `FusionEngine`, `ReadinessAssessor`, avatars/aides/trait catalog (canonical for `src/advocates/*` stubs)
- **Governance (private)**: [NeuroLift-Technologies/.github-private](https://github.com/NeuroLift-Technologies/.github-private) — canonical OTOI contracts, SOPs, templates, agent registration (see also public mirror: [NeuroLift-Technologies/.github](https://github.com/NeuroLift-Technologies/.github))
- **This repo (nlt-adhd)**: [NeuroLift-Technologies/nlt-adhd](https://github.com/NeuroLift-Technologies/nlt-adhd) — runs the personalized 1:20 runtime where orchestrator↔advocates is machine JSON, orchestrator↔user is natural language; Enabler Protocol is local enforcement (local SQLite/KV, OS confirm, no Cloudflare); every AI gets `src/governance/asfdk.ts` boundary

No git submodules — links above are sufficient. No `archive/` vendoring in this repo (see `file-structure.md`).

---

## Trait Catalog — Canonical Source for Advocates

All 20 advocate stubs in `src/advocates/` link to the canonical trait catalog in `neurolift-ai-fusion`:

| # | Advocate (nlt-adhd stub) | Trait | Catalog (not vendored) |
|---|---|---|---|
| 01 | StayAlert | Interest-Based Nervous System | `neurolift-ai-fusion/src/advocates/01-stayAlert` |
| 02 | ImpulseGuard | Impulsivity / Inhibition | `neurolift-ai-fusion/src/advocates/02-impulseGuard` |
| 03 | FocusFlow | Sustained Attention / Distractibility | `neurolift-ai-fusion/src/advocates/03-focusFlow` |
| 04 | Timely | Time Blindness | `neurolift-ai-fusion/src/advocates/04-timely` |
| 05 | MemoryMate | Working Memory | `neurolift-ai-fusion/src/advocates/05-memoryMate` |
| 06 | MoodEase | Emotional Dysregulation | `neurolift-ai-fusion/src/advocates/06-moodEase` |
| 07 | TaskKickstart | Task Initiation / Activation | `neurolift-ai-fusion/src/advocates/07-taskKickstart` |
| 08 | CalmCore | Anxiety / Overwhelm | `neurolift-ai-fusion/src/advocates/08-calmCore` |
| 09 | PlannerPro | Executive Function / Prioritization | `neurolift-ai-fusion/src/advocates/09-plannerPro` |
| 10 | StressShield | Stress Resilience | `neurolift-ai-fusion/src/advocates/10-stressShield` |
| 11 | SmoothSwitch | Task Switching / Transition | `neurolift-ai-fusion/src/advocates/11-smoothSwitch` |
| 12 | SensoryBalance | Sensory Regulation | `neurolift-ai-fusion/src/advocates/12-sensoryBalance` |
| 13 | AwareMate | Self-Monitoring / Metacognition | `neurolift-ai-fusion/src/advocates/13-awareMate` |
| 14 | SteadyMind | Consistency / Persistence | `neurolift-ai-fusion/src/advocates/14-steadyMind` |
| 15 | SocialSync | Social Cognition / Sync | `neurolift-ai-fusion/src/advocates/15-socialSync` |
| 16 | FocusRecharge | Energy / Focus Replenishment | `neurolift-ai-fusion/src/advocates/16-focusRecharge` |
| 17 | SensorySeeker | Sensory Seeking | `neurolift-ai-fusion/src/advocates/17-sensorySeeker` |
| 18 | EffortAlign | Effort / Motivation | `neurolift-ai-fusion/src/advocates/18-effortAlign` |
| 19 | ConfidenceCoach | Self-Efficacy | `neurolift-ai-fusion/src/advocates/19-confidenceCoach` |
| 20 | RSD Shield | Rejection Sensitive Dysphoria | `neurolift-ai-fusion/src/advocates/20-rsdShield` |

> **Developer builder** is NOT trait #20 — it lives at `src/orchestrator/developer/` as an orchestrator tool that remakes the app per user (gated by `asfdk_review_tool_call`). See `src/orchestrator/developer/README.md`.

---

## Governance (ORG-DEV-OTOI-1.0.3)

- **ASFDK boundary:** `src/governance/asfdk.ts` — single import point for every AI (`asfdk_status`, `asfdk_assess_text`, `asfdk_process_interaction`, `asfdk_review_tool_call` with stub fallback). Direct `@neurolift-technologies/asfdk` imports in advocates/orchestrator are forbidden.
- **Mode progression per AI:** `CRISIS_ONLY → DEVELOPMENT → UNIFIED` via `asfdk-dev` harness (`asfdk-harness` repo). Each advocate + orchestrator gets isolated harness.
- **Enabler Protocol:** `enabler-protocol/README.md` — local enforcement, deterministic middleware, not semantic guardrail. Related: `nlt-sdl` detection shape contract (R17/R18).
- **Validation:** `bash .nltotoi/scripts/validate-governance.sh` — 39 checks (incl. App Decoupling + No Archive).

---

This file is a curated reference for coding agents working on NeuroLift Technologies org repos.
Use these repositories for skills, tools, documentation, and starter patterns when building on
the application delivery platform (local-first).

---

## Cloudflare Platform Tools — Not Used In This Repo (Local-First)

`nlt-adhd` is **local-first, no Cloudflare** per user direction. The Cloudflare skill table below is preserved from the org template for reference when working in other NLT repos (e.g., `nlt-world-engine`, `nlt-app`), but **do not add Cloudflare bindings to `nlt-adhd`** — use local SQLite/KV and OS confirm.

### skills — <https://github.com/NeuroLift-Technologies/skills>

Collection of Agent Skills. For `nlt-adhd`, relevant skills are the NLT governance skills (OTOI, onboarding, registration, escalation, handoff, commit-format, etc.) in `.claude/skills/`.

For Cloudflare-specific work in other repos, see `.github-private/links.md` for the full Cloudflare skill matrix.

### mcp-server-cloudflare — <https://github.com/NeuroLift-Technologies/mcp-server-cloudflare>

Remote MCP servers exposing Cloudflare platform capabilities. **Not used in `nlt-adhd`** (local-first). Referenced only for cross-repo context.

---

## Documentation

### nlt-adhd Delivery Docs

- `README.md` — App Delivery Layer overview (from whitepaper v1.0)
- `docs/whitepaper-v1.0-NeuroLift-ADHD.md` — Canonical product & technical whitepaper
- `enabler-protocol/README.md` — Longitudinal agency detection (local enforcement)
- `file-structure.md` — ADR for app-only structure (no archive)
- `src/governance/README.md` — ASFDK boundary docs
- `src/surfaces/README.md` — Surfaces registry
- `app/README.md` — Web via Next.js, mobile via Android Studio

### Governance

- `NLT-DEV-OTOI.md` — ORG-DEV-OTOI-1.0.3 canonical contract
- `.nltotoi/index/governance-files.md` — Governance file registry (nlt-adhd scope)
- `SOPs/repo-governance-setup.md` — How governance was populated here

*Local-first, no Cloudflare, smallest capable 135M–0.5B LoRA | NeuroLift Technologies | ORG-DEV-OTOI-1.0.3*
