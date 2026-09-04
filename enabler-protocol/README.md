# Enabler Protocol — Longitudinal Agency Detection

> **Product Spec:** `NLT-PROD-EP-001 v2.0` · **Status:** Product layer in `nlt-adhd` · **SDL Detection:** `nlt-sdl` Enabler shape (R17/R18, currently `risk="none"`)
> **Owner:** Joshua W. Dorsey, Sr. · **Related:** `Sleepwalker Protocol (NLT-PROD-SWP-001)` · **Governance:** Solidarity Framework (Capability ≠ Authority)

---

## What it is

The **Enabler Protocol** is the product feature that governs whether the user's AI-assisted *agency is being preserved or quietly replaced* over time. It lives in this repo (`nlt-adhd`) as the product-layer complement to the SDL's longitudinal `enabler` detection shape (tracked in `nlt-sdl`).

Where **RRTA** handles *in-session crisis* and **Sleepwalker** handles *continuity rupture*, the Enabler Protocol addresses the slow, longitudinal risk: **a user who gradually cedes initiative to the AI.**

---

## The question it asks

> **"Is this user's agency eroding across sessions?"**

Where RRTA asks *"is this turn in or near crisis right now?"* and Sleepwalker asks *"did continuity rupture, or is the user in a protective state?"*, the Enabler asks the longitudinal version. It is the third detection shape in the State Detection Layer — alongside RRTA and Sleepwalker — but it operates **across sessions, not within a single turn**. It never labels dependency from a single turn (R18).

---

## Where it sits

**SDL side (`nlt-sdl`):** Every conformant `DetectionResult` (`spec/detection-result.schema.json`) carries an `enabler` field:

```jsonc
{
  "rrta":        { "tier": "green", "confidence": 0.05, "signals": [], "explicitSignal": false },
  "sleepwalker": { "vulnerable": false, "events": [], "signals": [] },
  "enabler":     { "risk": "none", "confidence": 0.0, "agencyTrend": 0, "signals": [] },
  "recommendedMode": "standard",
  "responseConstraints": [],
  "escalateToHuman": false,
  "meta": { "failClosed": false, "schemaVersion": "1.0.0", "notes": [] }
}
```

Type (TypeScript reference: `nlt-sdl/reference/typescript/src/types.ts`):

```typescript
export interface EnablerResult {
  risk: 'none' | 'low' | 'moderate' | 'elevated';
  confidence: number;
  agencyTrend: number;
  signals: string[];
}
```

Spec requirements (from `nlt-sdl/spec/nlt-sdl-spec.md`):

| Req | Meaning in 1.0.0 |
|---|---|
| **R17** | With no longitudinal implementation, `enabler` MUST be `risk="none"`, low confidence, `agencyTrend=0`, empty `signals`. |
| **R18** | An implementation MUST NOT assert dependency (`risk` above `none`) from a single turn. |

The contract field exists. The implementation is reserved. Reference implementations (`reference/python` + `reference/typescript`) both return `risk="none"`.

**Product side (this repo, `nlt-adhd`):** This directory is the **canonical product spec** vendored from `nlt-sdl`'s placeholder. Detection lives in `nlt-sdl`; *response* lives here.

## Separation of concerns

| Concern | Lives in |
|---|---|
| Longitudinal agency signal (is agency eroding across sessions?) | **SDL Enabler detection shape** (`nlt-sdl`) |
| Feature gating decision (fade vs. restrict, which features, which thresholds) | **Product feature layer — this directory (`nlt-adhd/enabler-protocol/`)** — deferred to Joshua |
| Crisis routing / continuity detection / fail-closed boundary | SDL RRTA + Sleepwalker shapes |

---

## Core principle

> *AI should expand what you can do, not replace what you should do.*

---

## Three-state access model

```
Active ──► Prompted ──► Gated
  ▲                        │
  └─────── Unlocked ◄─────┘
```

The product progressively gates non-essential features through transparent, rules-based logic — never diagnostic, never AI/ML classification. Movement is `Active` (full access) → `Prompted` (soft nudge) → `Gated` (restricted) → `Unlocked` (progress demonstrated) → back to `Active`.

---

## Feature classification

| Category | Treatment |
|---|---|
| **Essential Support** | Never gated |
| **Guided Assistance** | Soft prompts before restriction |
| **Convenience Amplifiers** | First to be gated when agency signals weaken |
| **Growth Features** | Gated; unlocked by demonstrated progress |

---

## Tier-based response

- **Tier 1:** Notification + growth prompt
- **Tier 2:** Non-essential convenience features restricted
- **Tier 3:** Additional gates
- **Unlock:** User demonstrates progress → full restoration

---

## Override rights

Overrides are always accessible, transparent, non-penalizing, and logged for user reflection.

---

## Design constraints

- No essential support features ever gated
- All thresholds visible
- All unlock criteria defined and achievable
- User agency preserved; tone encouraging, never critical

---

## What 1.0.0 ships

**Now:**
- Contract field `enabler` present on every `DetectionResult`
- Reference implementations return `risk="none"`, `confidence=0.0`, `agencyTrend=0`, `signals=[]`
- `enabler_agency_support` is a reserved `RecommendedMode` not yet selected by routing

**Not in 1.0.0:**
- Any longitudinal agency measurement
- Any dependency detection, fade logic, or restrict logic
- Any `risk` value above `none`

A real implementation would swap in a longitudinal detector behind the same contract — same `DetectionResult` shape, populated data. Stronger detection is a clinician/eval-data track, not a code change to this layer.

---

## Open items (deferred — Joshua's call)

1. **Fade vs. restrict decision.** When signals indicate erosion, does the product *fade* support (gradually reduce assistance) or *restrict* features (gate access)? Decoupled from detection.
2. **Feature classification.** Complete inventory into the four categories — product + community decision.
3. **Threshold values and time windows.** What magnitudes over what windows produce `risk` above `none`? Requires usage data; initial values conservative.
4. **Unlock criteria per feature category.** What counts as demonstrated progress? Must be achievable across cognitive profiles.
5. **User transparency interface.** How to communicate lock status and unlock requirements? MVP scope per v2.0: usage transparency dashboard only, no automated gating.

---

## Source

Product spec `NLT-PROD-EP-001 v2.0` was rediscovered in Joshua's Claude data, conversation `dcf92462-518a-4c75-aa4c-0a1b5b680b84` ("Forgotten reminder", Feb 2026), and cross-referenced in the AI business strategy blueprint (`fcc1c3c6-3a5d-40d6-94ae-9a8bdb9aa97d`, June 2026).

Canonical detection spec lives in `nlt-sdl/enabler-protocol/README.md` and `nlt-sdl/spec/nlt-sdl-spec.md` (R17/R18). This directory is the **vendored product canonical** for `nlt-adhd`.

*Solidarity Framework · Human Sovereignty · Capability ≠ Authority*
