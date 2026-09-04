"use client";

import * as React from "react";

export interface DumpBarProps {
  onCapture?: (text: string) => void;
  placeholder?: string;
}

/**
 * DumpBar — MemoryMate external dump — "I'll remember later"
 * Minimal stub — capture bar that externalizes working memory.
 * See src/advocates/05-memoryMate (captureDump) — ASFDK-wrapped, encrypted_storage, session-only.
 */
export function DumpBar({ onCapture, placeholder = "Capture idea you'll lose — brain dump before you forget…" }: DumpBarProps) {
  const [text, setText] = React.useState("");
  return (
    <div className="rounded-xl border p-4 shadow-sm bg-card">
      <h3 className="font-semibold">DUMP — MemoryMate</h3>
      <p className="mt-1 text-xs text-muted-foreground">Externalize working memory — supports START, TIME, TOP3</p>
      <div className="mt-3 flex gap-2">
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder={placeholder} className="flex-1 rounded-md border px-3 py-2 text-sm" />
        <button
          onClick={() => {
            if (!text.trim()) return;
            onCapture?.(text.trim());
            setText("");
          }}
          className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
        >
          Capture
        </button>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">ASFDK encrypted_storage • session-only • local-first</p>
    </div>
  );
}
