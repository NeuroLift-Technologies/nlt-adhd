/**
 * nlt-adhd — App Delivery Layer entry
 * 1 orchestrator + 20 advocates (20th RSD Shield) + 4 surfaces, local-first.
 * Pipeline: World >> Fusion >> nlt-adhd (machine JSON orchestrator↔advocates, natural language orchestrator↔user)
 * Every AI gets Harness+MCP+ASFDK via src/governance/asfdk.ts (CRISIS_ONLY→DEVELOPMENT→UNIFIED).
 */

// Orchestrator (classifier + Developer builder)
export * from "./orchestrator/classifier";
export * from "./orchestrator/index";
export * from "./orchestrator/developer/index";

// Governance boundary (single import point)
export * from "./governance/asfdk";

// Advocates — MVP wired (01,04,05,07,09,20) + 14 stubs (see src/advocates/*)
export * from "./advocates/01-stayAlert/index";
export * from "./advocates/04-timely/index";
export * from "./advocates/05-memoryMate/index";
export * from "./advocates/07-taskKickstart/index";
export * from "./advocates/09-plannerPro/index";
export * from "./advocates/20-rsdShield/index";

// Surfaces
export * from "./surfaces/StartView";
export * from "./surfaces/TimeBar";
export * from "./surfaces/Top3View";
export * from "./surfaces/DumpBar";
