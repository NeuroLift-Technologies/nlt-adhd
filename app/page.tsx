"use client";

import * as React from "react";
import { StartView } from "../src/surfaces/StartView";
import { TimeBar } from "../src/surfaces/TimeBar";
import { Top3View, type Top3Task } from "../src/surfaces/Top3View";
import { DumpBar } from "../src/surfaces/DumpBar";
import { classifyStuckStateSync } from "../src/orchestrator/classifier";
import type { AdvocateId } from "../src/orchestrator/classifier";

const DEMO_TOP3: Top3Task[] = [
  { id: "1", title: "Draft 2-min ugly version of report", effort: 2, time_min: 30 },
  { id: "2", title: "Set timer + do first sentence", effort: 1, time_min: 15 },
  { id: "3", title: "Capture intrusive ideas to Dump", effort: 1, time_min: 10 },
];
const DEMO_LATER: Top3Task[] = [
  { id: "l1", title: "Reorganize entire workspace (deferred)", effort: 5, time_min: 120 },
  { id: "l2", title: "Research perfect template (deferred)", effort: 4, time_min: 60 },
];

/**
 * MVP v0.1 — composes 4 surfaces for Personal OS.
 * Local-first, no Cloudflare, stubs only — orchestrator↔user natural language, orchestrator↔advocates machine JSON.
 * Every AI gets Harness+MCP+ASFDK via src/governance/asfdk.ts (CRISIS_ONLY→DEVELOPMENT→UNIFIED).
 */
export default function Page() {
  const [intent] = React.useState("I'm stuck — can't start this boring report");
  const [startedAt] = React.useState<number | null>(() => Date.now());
  const [top3, setTop3] = React.useState(DEMO_TOP3);
  const [later, setLater] = React.useState(DEMO_LATER);
  const [activeAdvocate, setActiveAdvocate] = React.useState<AdvocateId | null>(null);
  const [dumps, setDumps] = React.useState<string[]>([]);

  const handleStuck = (reason: string) => {
    const id = classifyStuckStateSync(reason || intent);
    setActiveAdvocate(id);
  };

  const handleDefer = (t: Top3Task) => {
    setTop3((prev) => prev.filter((x) => x.id !== t.id));
    setLater((prev) => [...prev, t]);
  };

  const handleSelect = (t: Top3Task) => {
    // In MVP, selecting a Top3 task sets intent for START (machine JSON)
    // For demo, just highlight
    setActiveAdvocate("07-taskKickstart");
    void t;
  };

  return (
    <main className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">NeuroLift ADHD — nlt-adhd</h1>
        <p className="text-sm text-muted-foreground">
          App Delivery Layer • 1 orchestrator + 20 advocates (20th RSD Shield) • Developer is orchestrator tool • local-first • 135M–0.5B LoRA
        </p>
        <p className="text-xs text-muted-foreground">
          Pipeline: World Engine (UE 5.8) &gt;&gt; AI-Fusion (1:20 training) &gt;&gt; nlt-adhd (1:20 runtime) • orchestrator↔user natural language, orchestrator↔advocates machine JSON • every AI: Harness+MCP+ASFDK
        </p>
        {activeAdvocate && <p className="text-xs rounded bg-muted px-2 py-1">Active advocate: {activeAdvocate} (via classifier.ts → ASFDK src/governance/asfdk.ts)</p>}
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <StartView intent={intent} onStuck={handleStuck} onDone={() => setActiveAdvocate(null)} />
        <TimeBar startedAt={startedAt} estimatedSec={120} />
      </section>

      <Top3View top3={top3} later={later} onSelect={handleSelect} onDefer={handleDefer} />

      <DumpBar onCapture={(text) => setDumps((prev) => [...prev, text])} />

      {dumps.length > 0 && (
        <div className="rounded-xl border p-4">
          <h4 className="text-sm font-semibold">Captured Dumps (local, session-only)</h4>
          <ul className="mt-2 list-disc pl-5 text-sm">
            {dumps.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      )}

      <footer className="pt-4 text-xs text-muted-foreground">
        Governance: ORG-DEV-OTOI-1.0.3 • ASFDK single boundary src/governance/asfdk.ts • No archive (fresh repo) • Validate: bash .nltotoi/scripts/validate-governance.sh (39 checks)
      </footer>
    </main>
  );
}
