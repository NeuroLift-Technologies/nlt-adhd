"use client";

import * as React from "react";

export interface Top3Task {
  id: string;
  title: string;
  effort: number;
  time_min: number;
}

export interface Top3ViewProps {
  top3: Top3Task[];
  later: Top3Task[];
  onSelect: (task: Top3Task) => void;
  onDefer: (task: Top3Task) => void;
}

/**
 * Top3View — System 3 TOP3 (PlannerPro + EffortAlign)
 * Minimal stub — 3 cards + [Defer to Later] + effort×time check.
 * See src/advocates/09-plannerPro (getTop3, effortCheck) — ASFDK-wrapped.
 */
export function Top3View({ top3, later, onSelect, onDefer }: Top3ViewProps) {
  return (
    <div className="rounded-xl border p-4 shadow-sm bg-card">
      <h3 className="font-semibold">TOP 3 — PlannerPro</h3>
      <p className="mt-1 text-xs text-muted-foreground">Daily Top 3, not huge list • defer rest to Later • effort×time check</p>
      <div className="mt-3 grid gap-2">
        {top3.map((t) => (
          <div key={t.id} className="flex items-center justify-between rounded-lg border p-2">
            <div>
              <p className="text-sm font-medium">{t.title}</p>
              <p className="text-xs text-muted-foreground">effort {t.effort} • {t.time_min}m</p>
            </div>
            <div className="flex gap-1">
              <button onClick={() => onSelect(t)} className="rounded bg-primary px-2 py-1 text-xs text-primary-foreground">Start</button>
              <button onClick={() => onDefer(t)} className="rounded border px-2 py-1 text-xs">Defer</button>
            </div>
          </div>
        ))}
        {top3.length === 0 && <p className="text-sm text-muted-foreground">No Top 3 yet — add candidates (MVP local).</p>}
      </div>
      {later.length > 0 && (
        <div className="mt-3">
          <p className="text-xs font-medium">Later ({later.length})</p>
          <ul className="mt-1 list-disc pl-5 text-xs text-muted-foreground">
            {later.slice(0, 5).map((l) => <li key={l.id}>{l.title}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}
