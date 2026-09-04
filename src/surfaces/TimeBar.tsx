"use client";

import * as React from "react";

export interface TimeBarProps {
  estimatedSec?: number;
  startedAt?: number | null;
  onTick?: (remainingSec: number) => void;
}

/**
 * TimeBar — System 2 TIME (Timely)
 * Minimal stub — live countdown bar + estimate vs actual + Hyperfocus Guard.
 * See src/advocates/04-timely for getTimeVisibility etc. (ASFDK-wrapped).
 */
export function TimeBar({ estimatedSec = 120, startedAt = null, onTick }: TimeBarProps) {
  const [now, setNow] = React.useState(() => Date.now());
  React.useEffect(() => {
    if (startedAt === null) return;
    const id = setInterval(() => {
      const n = Date.now();
      setNow(n);
      if (onTick) {
        const elapsed = Math.floor((n - (startedAt ?? n)) / 1000);
        onTick(Math.max(0, estimatedSec - elapsed));
      }
    }, 1000);
    return () => clearInterval(id);
  }, [startedAt, estimatedSec, onTick]);

  const elapsed = startedAt ? Math.floor((now - startedAt) / 1000) : 0;
  const remaining = Math.max(0, estimatedSec - elapsed);
  const pct = Math.min(100, Math.max(0, (elapsed / estimatedSec) * 100));
  const mm = Math.floor(remaining / 60).toString().padStart(2, "0");
  const ss = (remaining % 60).toString().padStart(2, "0");

  return (
    <div className="rounded-xl border p-4 shadow-sm bg-card">
      <h3 className="font-semibold">TIME — Timely</h3>
      <p className="mt-1 text-xs text-muted-foreground">estimate vs actual • transition buffer • Hyperfocus Guard (pairs with StayAlert)</p>
      <div className="mt-3 h-2 w-full rounded bg-muted">
        <div className="h-2 rounded bg-primary" style={{ width: `${pct}%` }} />
      </div>
      <div className="mt-2 flex justify-between text-sm">
        <span>Remaining: {mm}:{ss}</span>
        <span className="text-muted-foreground">est {Math.floor(estimatedSec/60)}m vs act {Math.floor(elapsed/60)}m</span>
      </div>
    </div>
  );
}
