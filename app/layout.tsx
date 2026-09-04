import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeuroLift ADHD — App Delivery Layer",
  description: "1 orchestrator + 20 advocates (20th RSD Shield) — local-first, 135M–0.5B LoRA, every AI gets Harness+MCP+ASFDK",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <div className="mx-auto max-w-5xl p-4 md:p-6">{children}</div>
      </body>
    </html>
  );
}
