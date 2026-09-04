# CLAUDE.md — nlt-adhd

You are working in a NeuroLift Technologies repository.

**Repository:** `NeuroLift-Technologies/nlt-adhd` — App Delivery Layer (1 orchestrator + 20 advocates)
**Governance:** ORG-DEV-OTOI-1.0.3 | Solidarity Framework | HAIEF | https://elevaitionfoundation.org
**Authority:** Joshua W. Dorsey, Sr. — Final authority. Escalate. Do not guess.

---

## Mandatory reading (in order)

1. Org-level governance (private, primary):
   https://github.com/NeuroLift-Technologies/.github-private/blob/main/NLT-DEV-OTOI.md
   Public mirror (if the link above returns 404):
   https://github.com/NeuroLift-Technologies/.github/blob/main/governance/NLT-DEV-OTOI.md
2. Canonical review format (private, primary):
   https://github.com/NeuroLift-Technologies/.github-private/blob/main/REVIEW.md
3. Internal gateway (private, primary):
   https://github.com/NeuroLift-Technologies/.github-private/blob/main/AGENTS.md
   Public mirror (if the link above returns 404):
   https://github.com/NeuroLift-Technologies/.github/blob/main/governance/AGENTS.md
4. Project context: `README.md` (this repo) + `docs/whitepaper-v1.0-NeuroLift-ADHD.md`
5. Enabler Protocol: `enabler-protocol/README.md` (local enforcement — no Cloudflare, local SQLite/KV, OS confirm)
6. Active threads: `docs/active-threads.md` (this repo — do not duplicate)
7. Governance index: `.nltotoi/index/governance-files.md`

**Non-negotiable:** Joshua W. Dorsey, Sr. is final authority on all architectural, deployment, UX, and strategic decisions. Escalate. Do not guess.
**Governed by:** Solidarity Framework | HAIEF | https://elevaitionfoundation.org
**OTOI Version:** ORG-DEV-OTOI-1.0.3

---

## What This Repository Is

`nlt-adhd` is the **delivery repo** for NeuroLift ADHD — the personalized, governed Advocate that works *with* you. It is the `App` in the `World >> Fusion >> App` pipeline:

```text
nlt-world-engine (UE 5.8, embodied simulation)
        >> neurolift-ai-fusion (trains 1 orchestrator + 20 advocates)
        >> nlt-adhd (this repo — runs the personalized 1:20 runtime, local-first)
```

- **This repo runs the runtime.** It does NOT vendor World/Fusion code (no `archive/`). Stubs in `src/` will be wired via machine JSON to the upstream trait catalog in `neurolift-ai-fusion`.
- **Orchestrator ↔ user:** natural language ("I'm stuck." → classify)
- **Orchestrator ↔ advocates:** machine JSON (AdvocateId routing, micro-step contracts)
- **Every AI gets Harness + MCP + ASFDK:** `asfdk-dev` progression `CRISIS_ONLY → DEVELOPMENT → UNIFIED`, per-agent isolation, single governance boundary `src/governance/asfdk.ts`
- **Local-first, no Cloudflare:** local SQLite/KV, OS confirm dialog, smallest capable 135M–0.5B LoRA per advocate (not giant monolith), on-device where possible.
- **Enabler Protocol:** local enforcement in `enabler-protocol/README.md` — no Cloudflare, hardened middleware, not guardrail.
- **No archive/:** fresh repo — you fixed README to remove it; do not create `archive/`. Validation fails if it exists.

Full thesis: [`docs/whitepaper-v1.0-NeuroLift-ADHD.md`](docs/whitepaper-v1.0-NeuroLift-ADHD.md). Product summary: [`README.md`](README.md).

---

## Repository Structure (app-only, no archive)

```
nlt-adhd/
├── app/                          # Next.js minimal wrapper — MVP v0.1 composes 4 surfaces
│   ├── layout.tsx
│   ├── page.tsx
│   └── README.md                 # web via Next.js, mobile via Android Studio
├── src/
│   ├── orchestrator/             # 1 orchestrator — classifier + Developer builder
│   │   ├── classifier.ts         # classifyStuckState → AdvocateId via heuristic, ASFDK-wrapped
│   │   ├── index.ts              # Orchestrator exports (re-exports classifier)
│   │   └── developer/            # Developer builder — orchestrator tool, NOT trait #20
│   │       ├── index.ts          # buildForUser() with asfdk_review_tool_call before writes
│   │       └── README.md
│   ├── advocates/                # 20 Advocate stubs (01 StayAlert → 20 RSD Shield)
│   │   ├── 01-stayAlert/         # Interest injection — MVP, ASFDK-wrapped
│   │   ├── 02-impulseGuard/      # stub TODO
│   │   ├── 03-focusFlow/         # stub TODO
│   │   ├── 04-timely/            # Time visibility — MVP, ASFDK-wrapped
│   │   ├── 05-memoryMate/        # External dump — MVP, ASFDK-wrapped
│   │   ├── 06-moodEase/          # stub TODO
│   │   ├── 07-taskKickstart/     # Activation bridge — MVP, ASFDK-wrapped
│   │   ├── 08-calmCore/          # stub TODO
│   │   ├── 09-plannerPro/        # Top 3 — MVP, ASFDK-wrapped
│   │   ├── 10-stressShield/      # stub TODO
│   │   ├── 11-smoothSwitch/      # stub TODO
│   │   ├── 12-sensoryBalance/    # stub TODO
│   │   ├── 13-awareMate/         # stub TODO
│   │   ├── 14-steadyMind/        # stub TODO
│   │   ├── 15-socialSync/        # stub TODO
│   │   ├── 16-focusRecharge/     # stub TODO
│   │   ├── 17-sensorySeeker/     # stub TODO
│   │   ├── 18-effortAlign/       # stub TODO
│   │   ├── 19-confidenceCoach/   # stub TODO
│   │   └── 20-rsdShield/         # RSD Shield — MVP, ASFDK-wrapped (trait #20, not Developer)
│   ├── governance/
│   │   ├── asfdk.ts              # SINGLE ASFDK boundary — every AI imports here, never direct harness
│   │   └── README.md
│   ├── surfaces/                 # 4 MVP surfaces — StartView, TimeBar, Top3View, DumpBar
│   │   ├── README.md
│   │   ├── StartView.tsx
│   │   ├── TimeBar.tsx
│   │   ├── Top3View.tsx
│   │   └── DumpBar.tsx
│   ├── index.ts                  # Re-exports orchestrator + advocates + governance
│   └── __init__.py               # Python package marker (if needed for tooling)
├── enabler-protocol/
│   └── README.md                 # Enabler Protocol — local enforcement version
├── docs/
│   ├── whitepaper-v1.0-NeuroLift-ADHD.md
│   ├── active-threads.md
│   └── agent-log/
│       ├── registrations/
│       └── handoffs/
├── .nltotoi/                     # Governance namespace (validate-governance.sh = 39 checks)
├── .claude/                      # Claude Code session template (synced from .github-private)
├── templates/                    # agent-registration.json, handoff-record.json, etc.
├── SOPs/                         # onboarding, repo-governance-setup, incident-response
├── ISSUE_TEMPLATE/               # agent-escalation, governance-proposal
├── PULL_REQUEST_TEMPLATE/        # agent-contribution
├── file-structure.md             # This layout (ADR)
├── links.md                      # Related repos — World >> Fusion >> App
├── tsconfig.json                 # jsx react-jsx, dom, exclude archive
└── package.json                  # name nlt-adhd, private true, @neurolift-technologies/asfdk ^0.2.2
```

Do NOT create `archive/` — fresh repo, reversible, docs + stubs only.

---

## App Scaffold Principles (1:20 + surfaces)

1. **Do not vendor World/Fusion code.** `src/` stubs link to `neurolift-ai-fusion` trait catalog via README + TODO/A2A comment. No `from src.fusion` / `src.simulation` imports — App Decoupling check fails if found.
2. **Machine JSON between orchestrator and advocates.** `classifier.ts` returns `AdvocateId` enum; advocates return typed contracts (`MicroStep`, `TimeEstimate`, `Top3Result`, etc.). No natural language between them at runtime.
3. **ASFDK in every AI.** Every advocate and the orchestrator imports from `src/governance/asfdk.ts` only — never `from "@neurolift-technologies/asfdk"` directly. That file re-exports `asfdk_status`, `asfdk_assess_text`, `asfdk_process_interaction`, `asfdk_review_tool_call` with stub fallback (keeps `tsc --noEmit` green and 39/39).
4. **Harness per AI, mode progression:** each advocate + orchestrator gets its own `asfdk-harness` instance with `asfdk-dev` mode chain `CRISIS_ONLY → DEVELOPMENT → UNIFIED`. CRISIS_ONLY first (RRT only), then DEVELOPMENT (all guards but permissive), then UNIFIED (full Solidarity Framework).
5. **Local-first, no Cloudflare.** No `wrangler`, no `Workers`, no `D1` binding at this layer — local SQLite/KV, `localStorage` for MVP, OS confirm dialog for sensitive actions.
6. **Smallest capable 135M–0.5B LoRA.** Each advocate is a tiny LoRA adapter, not a giant model. Orchestrator classifier is heuristic MVP → LoRA later. No model weights in repo (stubs only).
7. **Surfaces are thin.** `src/surfaces/*.tsx` are minimal Tailwind + React stubs wired to `app/` — will be composed in `app/page.tsx` for MVP v0.1. Web via Next.js, mobile via Android Studio (see `app/README.md`).

---

## Commands

```bash
# Governance validation — must be 39/39
bash .nltotoi/scripts/validate-governance.sh
bash .nltotoi/scripts/validate-governance.sh --strict

# Type check — must pass
npx tsc --noEmit

# Validate nltotoi.json is valid JSON
python3 -m json.tool nltotoi.json > /dev/null && echo "JSON OK"

# Slash commands in Claude Code session (if .claude/ present)
# /register-session   — file agent self-registration (OTOI §3)
# /handoff            — write session handoff record (OTOI §5)
# /escalate <topic>   — file escalation (OTOI §4.3)
# /intent-log <topic> — log intent before significant action (OTOI §7)
# /governance-check   — run validate-governance.sh
```

---

## Guardrails (OTOI §4.4, non-negotiable)

- No LLM provider lock-in — no hardcoded provider in `src/` or `app/`
- No architecture decisions without Joshua W. Dorsey, Sr. sign-off
- No production deployments without approval
- No credential storage in code or VCS
- No external integrations without approval
- PR-only workflow — never push directly to `main`
- No OTOI self-amendment — file `governance-proposal` issue instead

---

## Escalation

When in doubt, escalate to **Joshua W. Dorsey, Sr.** (`info@neuroliftsolutions.com`) using `templates/escalation.md` or `ISSUE_TEMPLATE/agent-escalation.md`. See OTOI §4.3.

*Governed by — NeuroLift Technologies | ORG-DEV-OTOI-1.0.3*
