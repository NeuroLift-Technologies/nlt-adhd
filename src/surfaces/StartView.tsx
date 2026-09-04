"use client";

import * as React from "react";

export interface MicroStep {
  next_action: string;
  duration_min: number;
  id: string;
  reclassify: (reason: string) => MicroStep;
}

export interface StartViewProps {
  intent?: string;
  step?: MicroStep | null;
  onDone?: () => void;
  onStuck?: (reason: string) => void;
}

/**
 * StartView — System 1 START (Activation Bridge)
 * Minimal stub — shows ONE 2-min micro-step + [Done]/[Stuck].
 * Wired to src/advocates/07-taskKickstart + src/orchestrator/classifier via props in MVP v0.1.
 * See src/orchestrator/classifier.ts for routing (AdvocateId machine JSON).
 */
export function StartView({ intent = "I'm stuck", step, onDone, onStuck }: StartViewProps) {
  const [reason, setReason] = React.useState("");
  const action = step?.next_action ?? `2-min micro-step for: ${intent.slice(0, 60)}`;
  return (
    <div className="rounded-xl border p-4 shadow-sm bg-card">
      <h3 className="font-semibold">START — Activation Bridge</h3>
      <p className="mt-2 text-sm text-muted-foreground">One 2-min step — orchestrator↔advocates machine JSON, orchestrator↔user natural language. Every AI gets Harness+MCP+ASFDK.</p>
      <div className="mt-3 rounded-lg border bg-muted p-3">
        <p className="text-sm font-medium">{action}</p>
        <p className="text-xs text-muted-foreground">duration: {step?.duration_min ?? 2} min • id: {step?.id ?? "stub"}</p>
      </div>
      <div className="mt-3 flex gap-2">
        <button onClick={() => onDone?.()} className="rounded-md bg-primary px-3 py-1 text-sm text-primary-foreground">Done</button>
        <input value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Why stuck? (bored/overwhelm/time...)" className="flex-1 rounded-md border px-2 py-1 text-sm" />
        <button onClick={() => onStuck?.(reason || "stuck")} className="rounded-md border px-3 py-1 text-sm">Stuck</button>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">ASFDK via src/governance/asfdk.ts • local-first • 135M–0.5B LoRA</p>
    </div>
  );
}
