/**
 * nlt-adhd orchestrator stub — app-only, local-first + Personal OS v0.1 (Joshd profile).
 *
 * Full training lives in neurolift-ai-fusion (SessionOrchestrator, FusionEngine) — not vendored.
 * Full world simulation lives in nlt-world-engine (WorldEngineDO, Registry, GridManager) — not vendored.
 * This stub only orchestrates the personalized 1:20 runtime via machine JSON.
 * Every AI gets Harness+MCP+ASFDK per asfdk-dev CRISIS_ONLY→DEVELOPMENT→UNIFIED (isolated harness).
 * Local-first: no Cloudflare, smallest capable 135M–0.5B LoRA per advocate.
 *
 * MVP v0.1 Systems: START (TaskKickstart+PlannerPro), TIME (Timely), TOP3 (PlannerPro+EffortAlign)
 * plus MemoryMate + StayAlert + Hyperfocus Guard/Exit Ramp + RSD Shield (#20). See src/orchestrator/classifier.ts.
 * Pipeline: World >> Fusion >> nlt-adhd (20th is RSD Shield per trait catalog; Developer is orchestrator tool at src/orchestrator/developer).
 *
 * Orchestrator↔user: natural language ("I'm stuck." → classify)
 * Orchestrator↔advocates: machine JSON (AdvocateId, MicroStep, TimeEstimate, Top3Result)
 *
 * @see https://github.com/NeuroLift-Technologies/nlt-world-engine
 * @see https://github.com/NeuroLift-Technologies/neurolift-ai-fusion
 * No archive in nlt-adhd (fresh repo) — canonical lives upstream.
 */

// Personal OS v0.1 — re-export classifier + advocate stubs for A2A wiring
// TODO: wire to neurolift-ai-fusion via A2A (SessionOrchestrator/FusionEngine) — see classifier.ts
export { classifyStuckState } from "./classifier";
export type { AdvocateId, StuckContext } from "./classifier";

// TODO: replace with A2A client to nlt-world-engine and neurolift-ai-fusion.
// Previous imports like `import { Registry } from "../simulation/..."` were
// vendored and are now archived. Use remote agent calls instead.
//
// Example (placeholder):
//   import { worldEngineClient } from "./clients/worldEngine";
//   import { fusionClient } from "./clients/fusion";

export interface OrchestratorConfig {
  worldEngineUrl: string; // e.g. https://nlt-world-engine.workers.dev
  fusionUrl: string; // e.g. https://neurolift-ai-fusion.workers.dev
  userId: string;
}

export interface AdvocateHandle {
  id: string;
  role: string; // 01 StayAlert → 20 RSD Shield (per trait catalog); Developer is src/orchestrator/developer
  endpoint: string;
}

export class AppOrchestrator {
  constructor(private readonly config: OrchestratorConfig) {}

  /** List 20 advocates for this user (01 StayAlert → 20 RSD Shield). */
  async listAdvocates(): Promise<AdvocateHandle[]> {
    // TODO: fetch from AI-Fusion via A2A (machine JSON)
    // Canonical: neurolift-ai-fusion/src/advocates/* (20 personas, not vendored here)
    throw new Error("AppOrchestrator.listAdvocates: wire to neurolift-ai-fusion via A2A (machine JSON)");
  }

  /** Tick world simulation for this user's session (local-first stub). */
  async tickWorld(sessionId: string, intent: unknown): Promise<unknown> {
    // TODO: forward to nlt-world-engine via A2A if needed (local-first, no Cloudflare)
    // Canonical: nlt-world-engine (WorldEngineDO) — not vendored in nlt-adhd
    throw new Error("AppOrchestrator.tickWorld: wire to nlt-world-engine via A2A (local-first)");
  }
}
