# nlt-adhd — NeuroLift ADHD

**AI-Fusion Cognitive Support System for ADHD — Governed Advocate**

*NeuroLift Technologies LLC · Version 1.0 — September 2026 · Solidarity Framework · AI-Fusion Framework*

> **People with ADHD do not need another system that tells them what they should do. They need an intelligent system that can understand where they are getting stuck and help them move forward without taking control away from them.**

`nlt-adhd` is the **delivery repo** for the NeuroLift ADHD product — the personalized, governed Advocate that works *with* you. It is the `App` in the `World >> Fusion >> App` pipeline.

```text
nlt-world-engine (UE 5.8, embodied simulation) 
        >> neurolift-ai-fusion (trains 1 orchestrator + 20 advocates) 
        >> nlt-adhd (this repo — runs the personalized 1:20 runtime)
```

* **World** builds the consequence-bearing environment where Avatars learn.
* **Fusion** trains the intelligence.
* **This repo** delivers it — with Human Sovereignty preserved at runtime.

Full thesis: [`docs/whitepaper-v1.0-NeuroLift-ADHD.md`](docs/whitepaper-v1.0-NeuroLift-ADHD.md) (canonical).

---

## The Problem

ADHD is not a productivity problem. A person can understand exactly what needs to be done and still be unable to initiate. Traditional apps expect the user to operate the system. NeuroLift reverses it: **the system attempts to understand the user's current cognitive state and determine what form of assistance is most useful.**

Intention vs. initiation, attention vs. demands, working memory vs. complexity, time perception vs. deadlines — that mismatch is the target, not "lack of information" (Whitepaper §1).

## Product Vision — "I'm stuck."

The user's primary interaction is not a dashboard of tools. It is a single utterance:

> **"I'm stuck."**

The Advocate's job is to determine what "stuck" means *in context* — initiation difficulty, overwhelm, distraction, prioritization failure, time blindness, decision paralysis, hyperfocus, loss of context, etc. — and respond to the situation rather than forcing a predetermined workflow (§2).

## The Advocate Model

The Advocate is the user-facing intelligence that combines (§3):

1. Persistent user context 2. Specialized ADHD capabilities 3. Situational reasoning 4. Intervention selection 5. User feedback 6. Governance enforcement 7. Safety mechanisms 8. Continuity

It is a **cognitive-support system, not a clinician**, whose purpose is to reduce friction between what the user intends to do and their ability to act on that intention.

## 19 Advocates, One Orchestrator

ADHD is not one condition but interacting cognitive challenges. The architecture therefore fields **19 Advocates representing 16 ADHD traits** (§4) — plus the orchestrator and the small **Developer builder** (#20) that remakes the app per user:

*Task initiation, sustained attention, distraction, prioritization, working memory, time awareness, task switching, planning, execution, procrastination, decision paralysis, emotional regulation, hyperfocus, overwhelm, etc.*

The user never picks the Advocate. **The orchestrator determines which capability is relevant.**

At runtime this repo runs **1 orchestrator : 20 advocates** (19 traits + Developer). Upstream, each Advocate is the fused result of **Avatar (lives the struggle) >> Aide (PhD + lived-expert coaching) >> Advocate** trained in the embodied simulation.

Original persona catalog: `neurolift-ai-fusion` (canonical 20: StayAlert → RSD Shield).

## From Advice to Scaffolding

Instead of `Clean the house`, the Advocate may establish `Stand up. → Get a trash bag. → Pick up five pieces of trash.` — an **executable bridge** between intention and action, with intensity adapting as the user moves (§5):

```text
Intent → Cognitive Friction → Assessment → Appropriate Support → User Action → Feedback → Reassessment
```

## Personalization

Two people can say "I can't start this project" for entirely different reasons (uncertainty, fear, scope, boredom, overload...). The Advocate maintains contextual understanding and learns which interventions are effective, which create friction, preferred communication patterns, and appropriate intensity — and the **Developer advocate can propose app remakes** (e.g., simplified view when overwhelmed) subject to human approval (§6, §20).

## The AI-Fusion Training Environment

Advocates are not prompt-engineered alone. **AI agents are trained and evaluated in the simulated embodied world** (`nlt-world-engine`) containing avatars, environments, tasks, obstacles, Aides, and measurable outcomes — so the system learns how an intervention *behaves* in context, not just how to describe it (§7-8).

## Governance — The AI is not the authority

This is the foundation. The intelligence layer operates inside an explicit governance boundary (§9):

```
                    HUMAN AUTHORITY
                           │
                           ▼
                    ┌─────────────┐
                    │     TOI     │  Interaction Contract (human-sourced)
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │     OTOI    │  Operational Enforcement
                    └──────┬──────┘
                           │
                           ▼
                 ┌───────────────────┐
                 │      ASFDK        │  Runtime / Deployment Boundary
                 └────────┬──────────┘
                          │
             ┌────────────┼────────────┐
             ▼            ▼            ▼
          ADVOCATE       RRT       SLEEPWALKER
             │            │            │
             └────────────┼────────────┘
                          ▼
                   AI-FUSION SYSTEM
```

* **TOI** — human/entity-sourced interaction contract.
* **OTOI** — enforcement across multi-agent workflows.
* **ASFDK** — runtime governance between capability and effects (installed in *every* AI here — see `src/governance/asfdk.ts` pattern in `nlt-app`).
* **RRT Advocate** — separate safety pathway, not the chat agent's own emergency authority.
* **Sleepwalker Protocol** — continuity across interruptions without surrendering control.
* **Provenance defense** — `user_input` vs `tool_result` vs `model_output` vs `system` vs `unknown`; *information is not authority* (§12).

> **Governance must exist where actions occur.** Capability does not create authority (§10-11).

## User Experience — Simple on Top, Sophisticated Underneath

The user should not need to understand TOI/OTOI/ASFDK (§16):

**Talk** · **Plan** · **Focus** · **Start** · **Recover** · **Reflect** · **Continue**

Example (§17): `I have to finish this report tonight and I haven't started.` → Advocate may establish `Open the document. → Write the title. → Tell me what the report needs to accomplish.` — intensity decreases as the user moves.

## Repository Structure (App Delivery Layer)

```
nlt-adhd/
├── README.md               # This file — product charter summary
├── docs/
│   └── whitepaper-v1.0-NeuroLift-ADHD.md  # Canonical whitepaper (§1-23)
├── app/ | src/             # To be scaffolded — 1 orchestrator + 20 advocates (Developer = #20) + surfaces
│   ├── orchestrator/       # Classifies "I'm stuck" → advocate
│   ├── advocates/          # 19 trait specialists + Developer builder (small coder, proposes diffs, requires [Approve])
│   ├── governance/         # ASFDK boundary — capability ≠ authority
│   └── surfaces/           # Talk/Plan/Focus/Start/Recover/Reflect/Continue
├── .nltotoi/               # Governance validation (when added)
└── archive/                # Reversible history
```

Upstream code lives elsewhere and is **referenced, not vendored**:
* **World Engine:** https://github.com/NeuroLift-Technologies/nlt-world-engine
* **AI-Fusion:** https://github.com/NeuroLift-Technologies/neurolift-ai-fusion
* **Governance canonical:** https://github.com/NeuroLift-Technologies/.github-private

## Pipeline — World >> Fusion >> App

```text
              ┌─────────────────────────┐
              │          HUMAN          │
              │   Intent • Agency •     │
              │        Authority       │
              └────────────┬────────────┘
                           │
              ┌────────────▼────────────┐
              │       GOVERNANCE        │
              │ TOI • OTOI • ASFDK      │
              └────────────┬────────────┘
                           │
              ┌────────────▼────────────┐
              │       AI-FUSION         │
              │ Advocates • Agents •    │
              │ Adaptive Intelligence   │
              └────────────┬────────────┘
                           │
             ┌─────────────┴─────────────┐
             │                           │
      ┌──────▼──────┐             ┌──────▼──────┐
      │     RRT     │             │ SLEEPWALKER │
      │    SAFETY   │             │  CONTINUITY │
      └──────┬──────┘             └──────┬──────┘
             │                           │
             └─────────────┬─────────────┘
                           │
              ┌────────────▼────────────┐
              │   EMBODIED SIMULATION   │
              │ Train • Test • Evaluate │
              └────────────┬────────────┘
                           │
                           ▼
                 REAL-WORLD ASSISTANCE
```

## What This Repo Is Not

Not a replacement for human judgment, not a diagnostic tool, not a clinician, not a generic productivity chatbot, not an autonomous agent without governance, not a claim to have solved AI governance generally (§20).

## Thesis

> **AI should increase a person's ability to exercise their own agency, not quietly replace it.** (§22)

For ADHD: convert intention into action. For architecture: separate intelligence from authority. For governance: make rules enforceable. For safety: dedicated pathways. For the user: an Advocate that works **with** them.

*Tech that gets you. Empowering Minds. Changing Lives.*

---

## Quick Start (next)

```bash
# web — Next.js (to be scaffolded here, you own mobile via Android Studio)
pnpm install
pnpm dev      # → http://localhost:3000  (Talk / Start / Top3 / DumpBar)
```

When ready to publish:
```bash
gh repo create NeuroLift-Technologies/nlt-adhd --private --source=. --remote=origin --push
# Vercel: Root Directory = app/ or . — separate from nlt-app (World) and neurolift-ai-fusion (Fusion)
```

## Links

* Whitepaper full: [`docs/whitepaper-v1.0-NeuroLift-ADHD.md`](docs/whitepaper-v1.0-NeuroLift-ADHD.md)
* World Engine: https://github.com/NeuroLift-Technologies/nlt-world-engine
* AI-Fusion: https://github.com/NeuroLift-Technologies/neurolift-ai-fusion
* Governance: https://github.com/NeuroLift-Technologies/.github-private

*NeuroLift Technologies LLC · Solidarity Framework · HAIEF · ORG-DEV-OTOI-1.0.3*
