# Governance File Index — NeuroLift Technologies `nlt-adhd`

**Last updated:** 2026-09-04
**Maintained by:** `.nltotoi/` namespace tooling
**Scope:** `NeuroLift-Technologies/nlt-adhd`
**OTOI Version:** ORG-DEV-OTOI-1.0.3

---

## Core Governance Files

| File | Type | Purpose | Required |
|---|---|---|---|
| `NLT-DEV-OTOI.md` | Contract | Org-level coding agent contract (ORG-DEV-OTOI-1.0.3) | ✅ |
| `AGENTS.md` | Gateway | Internal agent coordination gateway | ✅ |
| `nltotoi.json` | Manifest | Machine-readable discovery manifest (nlt-adhd, public-app-delivery) | ✅ |
| `README.md` | Overview | Repository overview and purpose (App delivery layer) | ✅ |
| `file-structure.md` | ADR | Architecture decision record — nlt-adhd app-only structure (no archive) | ✅ |
| `CLAUDE.md` | Instructions | Agent session instructions and plan (nlt-adhd app delivery) | ✅ |
| `REVIEW.md` | Review | Canonical agent-conducted review format (code/content/governance/security) | ✅ |
| `links.md` | Reference | Agent reference links — World >> Fusion >> App pipeline (app-only) | ✅ |

---

## .nltotoi Namespace

| File | Purpose | Required |
|---|---|---|
| `.nltotoi/README.md` | Namespace overview | ✅ |
| `.nltotoi/index/governance-files.md` | This file — governance registry | ✅ |
| `.nltotoi/contracts/README.md` | Contract namespace and versioning | ✅ |
| `.nltotoi/scripts/validate-governance.sh` | Automated compliance validation (incl. App Decoupling + No Archive) | ✅ |
| `.nltotoi/proposals/validation-roadmap.md` | Planned validation improvements | ✅ |

---

## Claude Code Template (`.claude/`)

Canonical Claude Code session configuration. Propagated to every NLT repo by `governance-auto-propagate.yml`. Edit upstream; downstream copies are overwritten on next sync.

| File | Purpose | Required |
|---|---|---|
| `.claude/README.md` | Template overview and editing policy | ✅ |
| `.claude/settings.json` | SessionStart hook wiring, permissions, env | ✅ |
| `.claude/hooks/session-start.sh` | Prints OTOI reading order + validates governance files at session start | ✅ |
| `.claude/hooks/README.md` | Hook lifecycle documentation | ✅ |
| `.claude/agents/nlt-governance-steward.md` | Subagent — OTOI compliance enforcement | ✅ |
| `.claude/agents/nlt-code-reviewer.md` | Subagent — NLT code review | ✅ |
| `.claude/agents/swe-agent.md` | Subagent — implementation tasks | ✅ |
| `.claude/skills/nlt-otoi/SKILL.md` | Skill — OTOI reference | ✅ |
| `.claude/skills/nlt-agent-registration/SKILL.md` | Skill — OTOI §3 self-registration | ✅ |
| `.claude/skills/nlt-handoff-record/SKILL.md` | Skill — OTOI §5 handoff | ✅ |
| `.claude/skills/nlt-escalation/SKILL.md` | Skill — OTOI §4.3 escalation | ✅ |
| `.claude/skills/nlt-intent-log/SKILL.md` | Skill — OTOI §7 intent logging | ✅ |
| `.claude/skills/nlt-commit-format/SKILL.md` | Skill — OTOI §4.2 commit format | ✅ |
| `.claude/skills/nlt-incident-response/SKILL.md` | Skill — SOP-NLT-003 incident response | ✅ |
| `.claude/commands/register-session.md` | Slash command — file an agent self-registration | ✅ |
| `.claude/commands/handoff.md` | Slash command — write session handoff | ✅ |
| `.claude/commands/escalate.md` | Slash command — file an escalation | ✅ |
| `.claude/commands/intent-log.md` | Slash command — log intent before significant action | ✅ |
| `.claude/commands/governance-check.md` | Slash command — run validate-governance.sh | ✅ |

---

## Templates

| File | Purpose | Source |
|---|---|---|
| `templates/agent-registration.json` | Agent self-registration format | OTOI Section 3 |
| `templates/handoff-record.json` | Session handoff format | OTOI Section 5 |
| `templates/escalation.md` | Escalation record format | OTOI Section 4.3 |
| `templates/intent-log.md` | Intent logging before action | OTOI Section 7 |
| `templates/commit-message.md` | Commit message format reference | OTOI Section 4.2, SOP-NLT-001 Step 7 |
| `templates/review-record.md` | Fillable review record template | `REVIEW.md`, OTOI Section 4 |

---

## GitHub Templates

| File | Purpose |
|---|---|
| `ISSUE_TEMPLATE/agent-escalation.md` | GitHub issue form for agent escalations |
| `ISSUE_TEMPLATE/governance-proposal.md` | GitHub issue form for OTOI amendment proposals |
| `PULL_REQUEST_TEMPLATE/agent-contribution.md` | Agent PR checklist with governance requirements |

---

## CI Workflows

| File | Purpose | Trigger | SOP |
|---|---|---|---|
| `.github/workflows/validate-governance.yml` | Governance validation (runs validate-governance.sh, 39 checks incl. App Decoupling) | push, pull_request | SOP-NLT-002 |

---

## SOPs (Standard Operating Procedures)

| File | Purpose |
|---|---|
| `SOPs/new-agent-onboarding.md` | How to onboard a new coding agent |
| `SOPs/repo-governance-setup.md` | How to add governance stubs (incl. `.claude/`) to a new NLT repo |
| `SOPs/incident-response.md` | What to do when an agent goes off-rails |

---

## App Delivery Layer (nlt-adhd, local-first, no Cloudflare)

| Path | Purpose | Notes |
|---|---|---|
| `src/orchestrator/` | Orchestrator — classifier + Developer builder | orchestrator↔user natural language, orchestrator↔advocates machine JSON |
| `src/orchestrator/classifier.ts` | classifyStuckState heuristic | ASFDK-wrapped via src/governance/asfdk.ts |
| `src/orchestrator/developer/` | Developer builder (orchestrator tool, not trait #20) | asfdk_review_tool_call before writes |
| `src/advocates/01-stayAlert` .. `20-rsdShield` | 20 Advocate stubs (19 domain + RSD Shield #20) | Every AI gets Harness+MCP+ASFDK (CRISIS_ONLY→DEVELOPMENT→UNIFIED) |
| `src/governance/asfdk.ts` | Single ASFDK boundary | re-exports asfdk_status/assess_text/process_interaction/review_tool_call |
| `src/surfaces/` | 4 MVP surfaces — StartView, TimeBar, Top3View, DumpBar | wired to app/ Next.js |
| `src/index.ts` | App entry re-exports |  |
| `app/` | Next.js minimal wrapper (MVP v0.1) | composes 4 surfaces; mobile via Android Studio |
| `enabler-protocol/README.md` | Enabler Protocol — local enforcement | no Cloudflare, local SQLite/KV, OS confirm |
| `docs/whitepaper-v1.0-NeuroLift-ADHD.md` | Canonical whitepaper |  |
| `docs/active-threads.md` | Active work tracking |  |
| `docs/agent-log/` | Registrations + handoffs |  |

Pipeline: `nlt-world-engine (UE 5.8) >> neurolift-ai-fusion (1:20 training) >> nlt-adhd (1:20 runtime, local-first, 135M-0.5B LoRA, no Cloudflare)` — no archive vendoring.

---

*Generated from `.nltotoi/index/governance-files.md` | NeuroLift Technologies | ORG-DEV-OTOI-1.0.3*
