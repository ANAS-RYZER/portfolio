import type { ReactNode } from "react"

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-paper-dim">
      <span className="h-2 w-2 rounded-full bg-lime" />
      {children}
    </div>
  )
}
