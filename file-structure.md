# nlt-adhd — File Structure (app-only, 2026-09-04)

> **Pipeline:** `World Engine >> AI-Fusion >> nlt-adhd (1:20)` — This repo is the **app-only delivery layer**. It runs the personalized 1:20 runtime (1 orchestrator + 20 advocates, orchestrator↔user natural language, orchestrator↔advocates machine JSON, every AI gets Harness+MCP+ASFDK per `asfdk-dev` `CRISIS_ONLY→DEVELOPMENT→UNIFIED`, local-first no Cloudflare, smallest capable 135M–0.5B LoRA per advocate). World/Fusion code lives in upstream repos and is **not vendored** here. No `archive/` (fresh repo, per user direction — you fixed README to remove it).

## Related Repos — World >> Fusion >> App

- **World Engine**: [NeuroLift-Technologies/nlt-world-engine](https://github.com/NeuroLift-Technologies/nlt-world-engine) — embodied UE 5.8 simulation — ECS, `world_map`, simulation environment, NPCs
- **AI-Fusion**: [NeuroLift-Technologies/neurolift-ai-fusion](https://github.com/NeuroLift-Technologies/neurolift-ai-fusion) — trains the 1 orchestrator + 20 advocates — `SessionOrchestrator`, `FusionEngine`, `ReadinessAssessor`, avatars/aides/trait catalog (canonical)
- **Governance (private)**: [NeuroLift-Technologies/.github-private](https://github.com/NeuroLift-Technologies/.github-private) — canonical OTOI contracts (see public mirror: [.github](https://github.com/NeuroLift-Technologies/.github))
- **This repo (nlt-adhd)**: [NeuroLift-Technologies/nlt-adhd](https://github.com/NeuroLift-Technologies/nlt-adhd) — runs the personalized 1:20 runtime; Enabler Protocol is local enforcement (no Cloudflare, local SQLite/KV, OS confirm)

```
World Engine (nlt-world-engine, UE 5.8) ──>> AI-Fusion (neurolift-ai-fusion, trains 1:20) ──>> nlt-adhd (this repo, runs 1:20 runtime, local-first)
     ECS / world simulation                     avatar-aide-adocate training                  1 orchestrator : 20 advocates (20th = RSD Shield per trait catalog; Developer is orchestrator tool)
                                              Do NOT re-vendor: reference & link via machine JSON. No archive vendoring.
```

## Current Minimal App-Only Layout

```
nlt-adhd/
├── NLT-DEV-OTOI.md               # Org-level coding agent contract (ORG-DEV-OTOI-1.0.3)
├── AGENTS.md                     # Internal gateway (extends private .github-private)
├── REVIEW.md                     # Canonical agent review format
├── CLAUDE.md                     # Agent session directive — nlt-adhd app delivery context
├── nltotoi.json                  # Discovery manifest — name NeuroLift-Technologies/nlt-adhd, purpose App delivery layer, visibility public, audience public-app-delivery, document_id 1.0.3
├── file-structure.md             # This file — ADR for nlt-adhd app-only structure (no archive)
├── links.md                      # Related repos — World >> Fusion >> App (app-only references)
├── tsconfig.json                 # jsx react-jsx, dom, exclude archive, src + app
├── package.json                  # name nlt-adhd, private true, @neurolift-technologies/asfdk ^0.2.2
├── README.md                     # Generated from whitepaper v1.0 — App Delivery Layer
│
├── .nltotoi/
│   ├── README.md
│   ├── index/governance-files.md
│   ├── contracts/README.md
│   ├── scripts/validate-governance.sh   # 39 checks incl. App Decoupling + No Archive
│   └── proposals/validation-roadmap.md
├── .claude/
│   ├── README.md
│   ├── settings.json             # SessionStart hook, OTOI 1.0.3
│   ├── hooks/session-start.sh
│   ├── hooks/README.md
│   ├── agents/                   # nlt-governance-steward, nlt-code-reviewer, swe-agent
│   ├── skills/                   # nlt-otoi, nlt-agent-registration, nlt-handoff-record, nlt-escalation, nlt-intent-log, nlt-commit-format, nlt-incident-response
│   └── commands/                 # register-session, handoff, escalate, intent-log, governance-check
├── templates/
│   ├── agent-registration.json
│   ├── handoff-record.json
│   ├── escalation.md
│   ├── intent-log.md
│   ├── commit-message.md
│   └── review-record.md
├── SOPs/
│   ├── new-agent-onboarding.md
│   ├── repo-governance-setup.md
│   └── incident-response.md
├── ISSUE_TEMPLATE/
│   ├── agent-escalation.md
│   └── governance-proposal.md
├── PULL_REQUEST_TEMPLATE/
│   └── agent-contribution.md
├── .github/workflows/
│   └── validate-governance.yml
│
├── app/                          # Next.js minimal wrapper — MVP v0.1
│   ├── layout.tsx                # composes 4 surfaces
│   ├── page.tsx                  # MVP v0.1 — StartView + TimeBar + Top3View + DumpBar
│   └── README.md                 # web via Next.js, mobile via Android Studio
│
├── src/
│   ├── orchestrator/             # 1 orchestrator — classifier + Developer builder
│   │   ├── classifier.ts         # classifyStuckState → AdvocateId via heuristic, ASFDK via src/governance/asfdk.ts
│   │   ├── index.ts              # re-exports classifier + Orchestrator types
│   │   └── developer/            # Developer builder — orchestrator tool, NOT trait #20
│   │       ├── index.ts          # buildForUser(req) with asfdk_review_tool_call before writes
│   │       └── README.md
│   ├── advocates/                # 20 advocates — 01 StayAlert → 20 RSD Shield
│   │   ├── 01-stayAlert/         # Interest injection — MVP, ASFDK-wrapped, links to fusion trait catalog
│   │   │   ├── index.ts
│   │   │   ├── README.md
│   │   │   └── __init__.py
│   │   ├── 02-impulseGuard/      # stub — TODO, all 20 present
│   │   ├── 03-focusFlow/
│   │   ├── 04-timely/            # Time visibility — MVP
│   │   ├── 05-memoryMate/        # External dump — MVP
│   │   ├── 06-moodEase/
│   │   ├── 07-taskKickstart/     # Activation bridge — MVP
│   │   ├── 08-calmCore/
│   │   ├── 09-plannerPro/        # Top 3 — MVP
│   │   ├── 10-stressShield/
│   │   ├── 11-smoothSwitch/
│   │   ├── 12-sensoryBalance/
│   │   ├── 13-awareMate/
│   │   ├── 14-steadyMind/
│   │   ├── 15-socialSync/
│   │   ├── 16-focusRecharge/
│   │   ├── 17-sensorySeeker/
│   │   ├── 18-effortAlign/
│   │   ├── 19-confidenceCoach/
│   │   └── 20-rsdShield/         # RSD Shield — MVP (trait #20, not Developer)
│   ├── governance/
│   │   ├── asfdk.ts              # SINGLE ASFDK boundary — re-exports status/assess_text/process_interaction/review_tool_call with stub fallback
│   │   └── README.md
│   ├── surfaces/
│   │   ├── README.md
│   │   ├── StartView.tsx         # System 1 START — ONE micro-step + [Done]/[Stuck] → reclassify
│   │   ├── TimeBar.tsx           # System 2 TIME — countdown + estimate vs actual + guard
│   │   ├── Top3View.tsx          # System 3 TOP3 — 3 cards + [Defer] + effort×time
│   │   └── DumpBar.tsx           # MemoryMate capture — "I'll remember later"
│   ├── index.ts                  # Barrel — re-exports orchestrator + surfaces
│   └── __init__.py
│
├── enabler-protocol/
│   └── README.md                 # Enabler Protocol — local enforcement (no Cloudflare, local SQLite/KV, OS confirm)
│
└── docs/
    ├── whitepaper-v1.0-NeuroLift-ADHD.md  # Canonical whitepaper
    ├── active-threads.md         # Thread tracking — THREAD for this scaffold (open, 1:20 + governance populate)
    └── agent-log/
        ├── README.md
        ├── registrations/        # agent-registration.json per session
        └── handoffs/             # handoff-record.json per session end
```

## What Lives Elsewhere (Referenced, Not Vendored — No archive/ Here)

| Concern | Canonical Repo | Key Files |
|---|---|---|
| Simulation ECS, world_map, time/relationships/scenario, NPCs, WorldEngine | [nlt-world-engine](https://github.com/NeuroLift-Technologies/nlt-world-engine) | `src/simulation/*`, `src/ecs.ts`, `src/world_map.ts` |
| Avatar/Aide/Advocate training, fusion, readiness, Python simulation SDK, trait catalog (19→20) | [neurolift-ai-fusion](https://github.com/NeuroLift-Technologies/neurolift-ai-fusion) | `src/advocates/*`, `src/aides/*`, `src/avatars/*`, `src/fusion/*`, `src/core/*` |
| Governance contracts, SOPs, templates — canonical source | [.github-private](https://github.com/NeuroLift-Technologies/.github-private) | `NLT-DEV-OTOI.md`, `SOPs/*`, `templates/*`, `.nltotoi/*`, `.claude/*` |

To inspect upstream trait catalog for nlt-adhd advocates (canonical, not vendored):

```bash
# Example — stayAlert trait in fusion repo (not here)
# See: https://github.com/NeuroLift-Technologies/neurolift-ai-fusion/tree/main/src/advocates
```

## Architecture Decision: App-Only, Local-First (No Archive)

nlt-adhd is **fresh, app-only, no archive/** per user direction. The prior `nlt-app` repo used `archive/pre-1-20-fullstack-.../` to preserve vendored history; nlt-adhd deliberately does NOT — it starts clean with stubs + docs only, smallest capable 135M–0.5B LoRA per advocate, local-first.

- **World >> Fusion >> App boundary:** `src/` never imports `src.fusion`, `src.simulation`, `src.avatars`, etc. Validation enforces `DECOUPLED: src/ does not import archived src` plus `NO ARCHIVE: archive/ correctly absent`.
- **Orchestrator topology:** `src/orchestrator/classifier.ts` is the only router (heuristic MVP → LoRA later). Developer builder lives under `src/orchestrator/developer/`, not `src/advocates/20-developer/`, because trait #20 is RSD Shield per catalog.
- **Every AI gets Harness+MCP+ASFDK:** imported only via `src/governance/asfdk.ts`. Mode chain `CRISIS_ONLY → DEVELOPMENT → UNIFIED` (asfdk-dev).
- **Surfaces:** `src/surfaces/` stubs → `app/` Next.js wrapper. Mobile via Android Studio (see `app/README.md`). No Cloudflare binding in this repo.

## Previous Content (preserved for governance history)

Prior `.github-private` internal file structure (from `nlt-business-agents`) is preserved in git history of that repo:

```bash
git -C /home/joshd/Desktop/nlt-repos/.github-private show main:file-structure.md | head -n 100
```

Governance file index remains at `.nltotoi/index/governance-files.md`.

*Fresh repo — minimal, reversible, docs + stubs only, no model weights, keep local-first (no Cloudflare), keep orchestrator↔advocates machine JSON.*
