"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { personalInfo } from "@/lib/data"
import { Marquee } from "./marquee"

export function Footer() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] })
  // Footer content rises from beneath the page as you reach the end.
  const y = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"])

  const socials = [
    { icon: Github, href: personalInfo.social.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ]

  return (
    <footer ref={ref} className="relative overflow-hidden bg-lime text-ink">
      <motion.div style={{ y }}>
        <Marquee baseVelocity={4} className="border-b border-ink/15 py-8 md:py-12">
          <span className="flex items-center font-display text-6xl font-extrabold tracking-tighter md:text-[10rem]">
            <span className="px-6 md:px-10">Let&apos;s work together</span>
            <span className="text-5xl md:text-8xl">✦</span>
          </span>
        </Marquee>

        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <a href={`mailto:${personalInfo.email}`} className="font-display text-2xl font-bold underline-offset-4 hover:underline md:text-3xl">
            {personalInfo.email}
          </a>
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/25 transition-colors hover:bg-ink hover:text-lime"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-lime transition-transform hover:scale-105"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1400px] justify-between px-4 pb-6 text-xs uppercase tracking-[0.2em] text-ink/60 md:px-8">
          <span>© {new Date().getFullYear()} {personalInfo.name}</span>
          <a href="#top" className="hover:text-ink">Back to top ↑</a>
        </div>
      </motion.div>
    </footer>
  )
}
