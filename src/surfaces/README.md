# src/surfaces — App Surfaces Registry (nlt-adhd, local-first)

Registry of delivery surfaces that the **Developer builder** (`src/orchestrator/developer/`) can patch per user:

- `app/` — Next.js minimal wrapper (MVP v0.1 composes 4 surfaces)
- Mobile — via Android Studio (see `app/README.md`) — local-first, no Expo Cloud

## MVP v0.1 Surfaces — Personal OS (1:20)

4 surfaces in `src/surfaces/` (minimal React + Tailwind stubs — no external deps beyond Next.js):

- `StartView.tsx` — **System 1 START** (TaskKickstart) — ONE 2-min micro-step + `[Done]/[Stuck]` → reclassify via `src/orchestrator/classifier.ts` (machine JSON)
- `TimeBar.tsx` — **System 2 TIME** (Timely) — live countdown bar + estimate vs actual + `Hyperfocus Guard / Exit Ramp` (pairs with StayAlert)
- `Top3View.tsx` — **System 3 TOP3** (PlannerPro + EffortAlign) — 3 cards + `[Defer to Later]` + effort×time check
- `DumpBar.tsx` — **MemoryMate** — capture bar "I'll remember later" → externalizes working memory (supports all 3 systems)

Each is scaffold stub with `TODO` wiring to `neurolift-ai-fusion` trait catalog (not vendored). Minimal — no model weights.

Surfaces do NOT contain simulation or fusion logic. That code lives in:

- **World Engine**: https://github.com/NeuroLift-Technologies/nlt-world-engine
- **AI-Fusion**: https://github.com/NeuroLift-Technologies/neurolift-ai-fusion

No `archive/` in nlt-adhd (fresh repo) — canonical lives upstream.

## Governance

Developer builder patches require `[Approve]` via ASFDK — see `src/governance/README.md`. Every surface action is `human_led` / `recommendation_only`.

## Wiring to app/

`app/page.tsx` composes the 4 surfaces for MVP v0.1. See `app/README.md`.

*Local-first, no Cloudflare, smallest capable 135M–0.5B LoRA | nlt-adhd*
