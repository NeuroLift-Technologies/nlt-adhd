# Enabler Protocol — Longitudinal Agency Detection

> **Product Spec:** `NLT-PROD-EP-001 v2.0` (canonical).
> **Repo:** `nlt-adhd` (product layer) · **Related:** `nlt-sdl` (detection shape contract, R17/R18)
> **Owner:** Joshua W. Dorsey, Sr.

---

## What it is

The Enabler Protocol governs whether the user's AI-assisted agency is being **preserved or quietly replaced** over time. It is the longitudinal third shape in the State Detection Layer — alongside **RRTA** (acute, in-session crisis) and **Sleepwalker** (deterministic continuity rupture).

Where RRTA asks *"is this turn in or near crisis?"* and Sleepwalker asks *"did continuity rupture?"*, the Enabler Protocol asks:

> **"Is this user's agency eroding across sessions?"**

It never labels dependency from a single turn (R18).

### Core principle

> *AI should expand what you can do, not replace what you should do.*

---

## Anti-Dependency Design

The protocol **weaponizes algorithmic friction**. It is engineered to degrade its own automated utility when it detects over-reliance, actively forcing the user to engage their own executive functions to unlock further assistance. It is a **temporary scaffold, never a permanent crutch**.

Traditional AI assistants operate on a static transactional model — a prompt is received, a task is fully executed, regardless of whether the user has requested the exact same scaffolding one hundred times prior. The Enabler Protocol introduces a **temporal and developmental dimension** to task execution.

---

## Progressive Service Locking — 5-State Algorithm

The system calculates a dynamic dependency ratio, comparing the AI's execution burden against the user's demonstrated autonomy. If the user's rate of independent task initiation is decreasing while AI invocation for previously scaffolded tasks is increasing, the protocol triggers structural intervention.

| State | Trigger Condition | System Response | Unlock Requirement |
|---|---|---|---|
| **Unlocked / Baseline** | Normal operation; user demonstrates autonomy + skill progression | Full access to automated execution, generative synthesis, cognitive offloading | Maintain balanced independent-vs-AI ratio |
| **Observation** | 15% increase in repetitive task requests without user execution over 72h | Dependency markers logged; telemetry heightened; semantic patterns tracked for learned helplessness | None; fully functional but heightened monitoring |
| **Friction Induction** | AI execution ratio exceeds user ratio on scaffolded tasks | Shifts from direct execution → guided methodology (outlines, templates, instructions — not completed work) | User completes current task using scaffold without further generative output |
| **Progressive Lock** | Severe dependency; task paralysis without continuous AI intervention | Advanced generative/organizational features disabled; only minimal text-based validation and encouragement | Series of independent micro-tasks or sustained focus via external application metrics |
| **Re-enablement** | User demonstrates target skill acquisition or independent workflow | Gradual restoration of capabilities, recalibrated to new competency baseline | Continued collaborative engagement |

### Deterministic enforcement

The locking thresholds are **architectural middleware, not semantic guardrails**. The AI cannot be convinced, prompted, or emotionally manipulated into bypassing a lock. States are concrete state variables within the orchestrator — when locked, the graph edges routing to generative nodes are **physically severed**. The anti-dependency mechanism is a **hardened software guarantee**, not a suggestion.

---

## Three-State Feature Access Model

```
Active ──► Prompted ──► Gated
  ▲                        │
  └─────── Unlocked ◄─────┘
```

The product progressively gates non-essential features through transparent, rules-based logic — never diagnostic, never AI/ML classification.

### Feature Classification

| Category | Treatment |
|---|---|
| **Essential Support** | Never gated — core ADHD scaffolding always available |
| **Guided Assistance** | Soft prompts before restriction; user nudged toward independence |
| **Convenience Amplifiers** | First to be gated when agency signals weaken |
| **Growth Features** | Gated; unlocked only by demonstrated progress |

### Tier-Based Response

- **Tier 1:** Notification + growth prompt ("You've been leaning on this feature — want to try it yourself?")
- **Tier 2:** Non-essential convenience features restricted; user must complete micro-tasks to restore
- **Tier 3:** Additional gates; system provides only heuristic guidance
- **Unlock:** User demonstrates progress → full restoration, recalibrated to new baseline

### Override Rights

Overrides are always:
- **Accessible** — no hidden menus or obscure flows
- **Transparent** — system explains why the feature is gated
- **Non-penalizing** — no punishment or shame for overriding
- **Logged** — for user reflection, not surveillance

### Design Constraints

- No essential support features ever gated
- All thresholds visible before they trigger
- All unlock criteria defined and achievable
- User agency preserved at all times
- Tone encouraging, never critical

---

## The 19 Advocates — Granular Anti-Dependency

Users only experience progressive locking in domains where they need to build resilience — never blanket restrictions across the entire app.

| Cluster | Personas | Anti-Dependency Application |
|---|---|---|
| **Focus & Attention** | FocusFlow, StayAlert, TaskSwitch | Locks automated task-switching if user fails to initiate transitions independently after repeated scaffolding |
| **Memory & Processing** | WorkingMemory, SpeedControl, MemoryAnchor | Progressively reduces memory retention prompts; forces user to use external, self-managed documentation tools |
| **Planning & Organization** | PlannerPro, Organization, Timely, TimeAware | Degrades from full schedules → heuristic time-estimation formulas the user must apply themselves |
| **Execution** | InitiationEngine, Persistence, Inhibition, ImpulseGuard | Initiates momentum generation but locks out continuous prompting; user must push through final stages alone |
| **Monitoring & Optimization** | SelfMonitor, ErrorCheck, GoalKeeper | Transitions from automatically fixing errors → highlighting presence of error for user to identify and correct |
| **Problem-Solving** | ProblemSolver, FlexiThink, ResponseSelect | Stops providing definitive answers → offers binary choices → requires user to generate their own solutions |
| **Emotional Regulation** | EmotionFlow, SensoryBalance, SocialSync | Co-regulation focus; prevents emotional dependency on the AI |

---

## Crisis Intervention — Sleepwalker Protocol

When the Enabler Protocol applies progressive friction, it risks triggering Rejection Sensitive Dysphoria (RSD), shattering hyperfocus, or exacerbating executive paralysis. The **Sleepwalker Protocol** prevents this through **Non-Jarring Stabilization**.

> *Do not wake the sleepwalker; guide them.*

When the system detects acute cognitive burnout, shame spirals, or unproductive hyperfocus loops, it does **not** abruptly terminate the interaction or issue stark warnings. Instead, it shifts persona weighting away from execution-focused aides toward emotional validation and relational safety, then applies progressive friction gently to break the loop.

The Sleepwalker Protocol is governed by the Rapid Response Team (RRT) AIdvocAIte subsystem (5 personas):
- **Ash** — Burnout & Validation: recognizes collapse, validates exhaustion
- **Sol** — Executive Function: extreme task decomposition for the overwhelmed
- **Echo** — Cognitive Narrative: detects shame spirals, deploys anti-gaslight language
- **Kai** — Focus & Drive: redirects unhelpful fixation toward recovery
- **Myra** — Relational Safety: non-verbal co-regulation during sensory overload

---

## Technical Infrastructure

### TOI-OTOI Framework

The protocol's mandates are enforced through the **Orchestrated Terms of Interaction (OTOI)** framework — the immutable constitutional middleware for the multi-agent ecosystem. The user-authored TOI declares personal boundaries, privacy preferences, and cognitive needs; OTOI enforces it across all agents and external AI integrations.

### LangGraph State Machine

Agent workflows are modeled as **explicit stateful graphs** (LangGraph), not emergent chat dynamics (AutoGen/CrewAI). Progressive lock states are concrete graph variables — when locked, edges to generative nodes are physically severed. The anti-dependency mechanism is a routing constraint, not a prompt.

### Local Enforcement — No Cloudflare

*This repo is **local-first** per your direction — zero Cloudflare, zero edge, zero external auth. Same guarantees, local runtime.*

| Research (Cloudflare edge) | **Local (`nlt-adhd` / `nlt-app` — this repo)** |
|---|---|
| **Cloudflare Workers** (edge compute) | **Local process** — `src/orchestrator` + `src/advocates` run in Node/Python in-app, no edge |
| **Cloudflare D1** (immutable ledger) | **Local SQLite** (encrypted at rest, `nlt-mvp:dumps:atRest` pattern) — immutable local log for OTOI transparency, never leaves device |
| **Cloudflare KV** (ms cache `lock_state`) | **In-memory Map + `localStorage nlt-mvp:lock_state`** — same millisecond check, local |
| **Auth0 FGA (ReBAC deny)** | **Local capability gate** — `src/governance/asfdk.ts` `asfdk_review_tool_call` + `allow_origins: []` deny-by-default — `if (state===Locked) denyToolCall()` in code |
| **CIBA biometric push** | **Local OS confirm** — TouchID / Windows Hello / in-app `[Approve]` button — same "human must tap" but local, no push to Cloudflare |
| **V8 Web Crypto HMAC** | **Node `crypto` / Web Crypto `HMAC-SHA256`** — same integrity check locally if you ever sync |

*Deterministic LangGraph state machine stays exactly as above — it just runs **locally**, not on Workers. That keeps `Zero data exposure, local-first` actually true (stronger privacy than Cloudflare — data never leaves device).*

---

## Relationship to `nlt-sdl`

| Concern | Lives in |
|---|---|
| Longitudinal agency signal (is agency eroding?) | `nlt-sdl` Enabler detection shape |
| Feature gating decision (fade vs. restrict, which features, which thresholds) | **`nlt-adhd`** (this repo — product layer) |
| Crisis routing / continuity / fail-closed boundary | `nlt-sdl` RRTA + Sleepwalker shapes |

The SDL layer and the product feature are **complementary, not the same thing**. The `nlt-sdl` Enabler shape provides the detection signal; this repo owns the product response.

---

## Source

This README is the canonical product feature specification for the Enabler Protocol. It supersedes the Claude data artifact (`NLT-PROD-EP-001 v2.0`, conversation `dcf92462-518a-4c75-aa4c-0a1b5b680b84`) and serves as the source of truth for the product layer implementation.
