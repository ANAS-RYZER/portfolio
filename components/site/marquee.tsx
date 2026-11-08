"use client"

import { useRef, type ReactNode } from "react"
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion"
import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: ReactNode
  /** Base speed in % of one copy per second. Negative = scroll right. */
  baseVelocity?: number
  className?: string
  /** How many copies to render so the track always overflows the viewport. */
  copies?: number
}

/**
 * Infinite looping marquee. It drifts on its own and speeds up / flips
 * direction with the page's scroll velocity.
 */
export function Marquee({ children, baseVelocity = 3, className, copies = 4 }: MarqueeProps) {
  const reduce = useReducedMotion()
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false })
  const direction = useRef(1)

  // One copy is (100 / copies)% of the track, so wrapping over that range is seamless.
  const span = 100 / copies
  const x = useTransform(baseX, (v) => `${wrap(-span, 0, v)}%`)

  useAnimationFrame((_, delta) => {
    if (reduce) return
    let moveBy = direction.current * baseVelocity * (delta / 1000) * (span / 100) * 4
    const vf = velocityFactor.get()
    if (vf < 0) direction.current = -1
    else if (vf > 0) direction.current = 1
    moveBy += direction.current * moveBy * vf
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <motion.div className="flex w-max flex-nowrap" style={{ x }}>
        {Array.from({ length: copies }).map((_, i) => (
          <div key={i} className="flex shrink-0 items-center" aria-hidden={i > 0}>
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
