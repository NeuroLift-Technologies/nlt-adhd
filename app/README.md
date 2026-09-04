# app/ — Next.js Minimal Wrapper (nlt-adhd MVP v0.1)

> **Web via Next.js, mobile via Android Studio** — local-first, no Cloudflare.

This directory is the **Next.js app router** wrapper that composes the 4 MVP surfaces from `src/surfaces/` for delivery:

- `StartView.tsx` — System 1 START (TaskKickstart, orchestrator→advocate machine JSON)
- `TimeBar.tsx` — System 2 TIME (Timely)
- `Top3View.tsx` — System 3 TOP3 (PlannerPro + EffortAlign)
- `DumpBar.tsx` — MemoryMate (supports all 3 systems)

## Web (Next.js)

```bash
npm install
npm run dev      # Next.js dev server at http://localhost:3000
npm run build    # production build
npx tsc --noEmit # type check (must pass)
```

`app/layout.tsx` provides the shell + metadata, `app/page.tsx` composes the surfaces with local-state MVP logic (no external API — local SQLite/KV, OS confirm for sensitive actions).

## Mobile (Android Studio)

Mobile will be built via **Android Studio** (native Android), not Expo/Cloudflare. This repo's `src/` is shared — surfaces are React, but mobile will consume the same orchestrator + advocate contracts via `src/` and render natively (or via React Native bridge) with local-first storage.

- Web first (Next.js `app/`) → iterate surfaces + orchestrator
- Mobile next (Android Studio) → reuse `src/orchestrator/`, `src/advocates/`, `src/governance/asfdk.ts`
- No Cloudflare bindings in this repo — `src/governance/asfdk.ts` stub handles ASFDK locally; future LoRA adapters are 135M–0.5B per advocate, on-device

## Governance

Every surface action routes through `src/governance/asfdk.ts` (single ASFDK boundary, `human_led` / `recommendation_only`). Developer builder at `src/orchestrator/developer/` requires `asfdk_review_tool_call` + human `[Approve]`.

## File Map

```
app/
├── layout.tsx  # root layout — metadata, html/body, imports globals.css if present
├── page.tsx    # MVP v0.1 — composes StartView + TimeBar + Top3View + DumpBar with local state
└── README.md   # this file
```

No `archive/` — fresh repo, stubs only. See `file-structure.md` for full layout.

*Local-first, no Cloudflare, smallest capable 135M–0.5B LoRA | NeuroLift Technologies | ORG-DEV-OTOI-1.0.3*
