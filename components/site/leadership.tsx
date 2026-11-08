"use client"

import { motion } from "framer-motion"
import { SectionLabel } from "./section-label"
import { Icon3D } from "./icon-3d"

const roles = [
  {
    icon: "handshake",
    title: "Client handling",
    text: "Own the client relationship end to end: scoping, demos, timelines and delivery updates, so what ships is what was promised.",
  },
  {
    icon: "busts_in_silhouette",
    title: "Team leadership",
    text: "Lead the engineering team: plan sprints, review code, unblock people and keep quality high across every product.",
  },
  {
    icon: "graduation_cap",
    title: "Training new hires",
    text: "Onboard and train new team members on our stack, codebase and workflow until they ship confidently on their own.",
  },
  {
    icon: "clipboard",
    title: "ISO 27001",
    text: "Write and maintain ISO/IEC 27001 documentation: ISMS policies, risk procedures and records that keep us audit-ready.",
  },
]

export function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-[1400px] px-4 py-28 md:px-8 md:py-40">
      <SectionLabel>Beyond code</SectionLabel>
      <h2 className="max-w-4xl font-display text-5xl font-extrabold leading-[0.9] tracking-tighter md:text-8xl">
        Leading people, <span className="text-outline-lime">not just</span> projects
      </h2>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {roles.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-3xl border border-line bg-ink-2/70 p-6 backdrop-blur-xl transition-colors hover:border-lime/50 md:p-8"
          >
            <Icon3D
              name={r.icon}
              className="w-16 transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-12 group-hover:scale-125 md:w-20"
            />
            <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">{r.title}</h3>
            <p className="mt-3 leading-relaxed text-paper-dim">{r.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
