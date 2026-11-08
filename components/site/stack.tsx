"use client"

import { skills } from "@/lib/data"
import { Marquee } from "./marquee"
import { SectionLabel } from "./section-label"
import { Icon3D } from "./icon-3d"

const rowA = [...skills.frontend, ...skills.backend].map((s) => s.name)
const rowB = [...skills.databases, ...skills.devops, ...skills.tools].map((s) => s.name)

function Pill({ label, filled }: { label: string; filled?: boolean }) {
  return (
    <span
      className={`mx-2 inline-flex items-center rounded-full border px-6 py-3 font-display text-2xl font-bold tracking-tight md:mx-3 md:px-9 md:py-5 md:text-5xl ${
        filled ? "border-lime bg-lime text-ink" : "border-line text-paper"
      }`}
    >
      {label}
    </span>
  )
}

export function Stack() {
  return (
    <section id="stack" className="py-28 md:py-40">
      <div className="mx-auto mb-16 max-w-[1400px] px-4 md:px-8">
        <SectionLabel>Tech stack</SectionLabel>
        <h2 className="flex items-end gap-4 font-display text-5xl font-extrabold leading-[0.9] tracking-tighter md:text-8xl">
          <span>Tools of the <span className="text-outline-lime">trade</span></span>
          <Icon3D name="hammer_and_wrench" float className="w-14 md:w-24" />
        </h2>
      </div>

      <div className="flex flex-col gap-4 md:gap-6">
        <Marquee baseVelocity={-2.5}>
          {rowA.map((s, i) => (
            <Pill key={s} label={s} filled={i % 4 === 0} />
          ))}
        </Marquee>
        <Marquee baseVelocity={2.5}>
          {rowB.map((s, i) => (
            <Pill key={s} label={s} filled={i % 4 === 2} />
          ))}
        </Marquee>
      </div>

    </section>
  )
}
