"use client"

import { useState, type FormEvent } from "react"
import { ArrowUpRight, Loader2 } from "lucide-react"
import { personalInfo } from "@/lib/data"
import { SectionLabel } from "./section-label"
import { Icon3D } from "./icon-3d"

type Status = "idle" | "sending" | "sent" | "error"

export function Contact() {
  const [status, setStatus] = useState<Status>("idle")

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Request failed")
      form.reset()
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  const field =
    "w-full border-b border-line bg-transparent py-4 text-lg outline-none transition-colors placeholder:text-paper-dim/60 focus:border-lime"

  return (
    <section id="contact" className="mx-auto max-w-[1400px] px-4 py-28 md:px-8 md:py-40">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="font-display text-5xl font-extrabold leading-[0.9] tracking-tighter md:text-8xl">
            Have a project
            <br />
            <span className="text-lime">in mind?</span>
          </h2>
          <div className="mt-8 flex gap-4">
            <Icon3D name="handshake" float className="w-16 md:w-24" />
            <Icon3D name="envelope_with_arrow" float className="w-16 [animation-delay:-3s] md:w-24" />
          </div>
          <div className="mt-12 space-y-3 text-paper-dim">
            <a href={`mailto:${personalInfo.email}`} className="block text-xl text-paper transition-colors hover:text-lime md:text-2xl">
              {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone.replace(/\s/g, "")}`} className="block transition-colors hover:text-lime">
              {personalInfo.phone}
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-2">
          <div className="grid gap-2 sm:grid-cols-2 sm:gap-8">
            <input name="name" required placeholder="Your name" className={field} aria-label="Your name" />
            <input name="email" type="email" required placeholder="Email address" className={field} aria-label="Email address" />
          </div>
          <input name="subject" required placeholder="Subject" className={field} aria-label="Subject" />
          <textarea name="message" required rows={4} placeholder="Tell me about it…" className={`${field} resize-none`} aria-label="Message" />

          <button
            type="submit"
            disabled={status === "sending"}
            className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-lime px-8 py-4 font-semibold text-ink transition-transform hover:scale-[1.03] disabled:opacity-60"
          >
            {status === "sending" ? <Loader2 className="h-5 w-5 animate-spin" /> : null}
            {status === "sending" ? "Sending" : "Send message"}
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
          <p role="status" className="min-h-6 text-sm">
            {status === "sent" && <span className="text-lime">Thanks — I&apos;ll get back to you soon.</span>}
            {status === "error" && <span className="text-destructive">Something went wrong. Email me directly instead.</span>}
          </p>
        </form>
      </div>
    </section>
  )
}
