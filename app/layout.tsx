import type React from "react"
import type { Metadata } from "next"
import { Inter, Syne } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const body = Inter({ subsets: ["latin"], variable: "--font-body" })
const display = Syne({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display-face" })

export const metadata: Metadata = {
  title: "Mohamad Anas | CTO at Ryzer X",
  description: "Full Stack Developer specializing in MERN Stack, Next.js, real-time applications, and API integrations",
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body className="grain font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
