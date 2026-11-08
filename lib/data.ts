export const personalInfo = {
  name: "Mohamad Anas",
  title: "CTO at Ryzer X & Co-founder of Lumo",
  avatar: "/avatar.webp",
  taglines: ["CTO @ Ryzer X", "Co-founder @ Lumo", "Full Stack Engineer", "AI Products", "Realtime Systems"],
  about:
    "CTO at Ryzer X. I lead engineering and build AI-powered products end to end — from grounded LLM search over real-estate data to multi-tenant platforms used by schools.",
  email: "anasmohamad369@gmail.com",
  phone: "+91 9110334346",
  location: "Remote",
  social: {
    github: "https://github.com/anasmohamad369",
    linkedin: "https://www.linkedin.com/in/anas-mohamad369/",
    twitter: "https://twitter.com/anasmohamad369",
  },
}

export const experiences = [
  {
    id: 1,
    role: "CTO",
    company: "Ryzer X",
    period: "Jun 2026 — Present",
    description:
      "Leading engineering and product architecture. Owning the stack end to end: AI services, APIs, web apps, infrastructure and deployment.",
    achievements: [
      "Set the technical direction and architecture across RyzerX, ACOT and Zuno Pay",
      "Built ACOT: AI property intelligence plus a lead-scoring CRM for brokers",
      "Leading Zuno Pay, a cross-border payments platform",
      "Handle clients directly, from scoping and demos to delivery",
      "Lead and train the engineering team, including onboarding new hires",
      "Own ISO/IEC 27001 documentation: ISMS policies, procedures and audit records",
      "Built and run cloud deployments with Docker and Cloud Build pipelines",
      "Load-tested and tuned services for production traffic",
    ],
    technologies: ["Next.js", "NestJS", "Python", "FastAPI", "PostgreSQL", "Docker", "GCP"],
  },
  {
    id: 4,
    role: "Co-founder",
    company: "Lumo",
    period: "Present",
    description:
      "Co-founded Lumo (lumokido.in), a learning platform for schools. Lumo books link to quizzes, games and labs through QR codes, with leaderboards for students and dashboards for schools.",
    achievements: [
      "Built Lumo OS: multi-tenant school platform with per-school data isolation",
      "Shipped Spell Bee, science labs, quizzes and a Creative Studio for students",
      "Run product and engineering alongside the founding team",
    ],
    technologies: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Redis"],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Ryzer",
    period: "2024 — 2026",
    description:
      "Built the user and admin platforms for real estate tokenization with the MERN stack and Next.js, including a reusable form architecture.",
    achievements: [
      "Developed the user-facing asset investment platform with complex filtering and search",
      "Built the admin dashboard for asset, user and KYC management",
      "Implemented a reusable form config system using React Hook Form",
      "Integrated real-time data updates and analytics dashboards",
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "Socket.io"],
  },
  {
    id: 3,
    role: "Freelance Developer (MVP)",
    company: "1xFinance",
    period: "2025",
    description:
      "Built the user-facing MVP for a fintech lending platform with loan application flows against various asset types.",
    achievements: [
      "Delivered the complete user flow for the loan application platform",
      "Built multi-step loan application flows for different asset types",
      "Integrated with NBFC partners for rate comparison",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
]

export const projects = [
  {
    id: 1,
    name: "ACOT AI",
    description:
      "AI property intelligence for the Dubai market. Ask in plain language and get grounded answers: project and area comparisons, rental search, investment summaries and brochure Q&A, backed by PostgreSQL, vector search and validated read-only tools.",
    image: "/acot-ai.png",
    technologies: ["Python", "FastAPI", "LLM + RAG", "PostgreSQL", "Next.js"],
    category: "AI",
    github: "",
    live: "",
    role: "CTO",
    comingsoon: false,
  },
  {
    id: 2,
    name: "ACOT CRM",
    description:
      "The agent side of ACOT. AI-scored leads (hot, warm, plain) are offered to brokers by plan tier, claimed with credits, and worked in a drag-and-drop deals pipeline with an AI Autopilot that drafts follow-ups for one-click approval.",
    image: "/acot-crm.png",
    technologies: ["NestJS", "Next.js", "PostgreSQL", "AI Autopilot", "Cloud Run"],
    category: "CRM",
    github: "",
    live: "",
    role: "CTO",
    comingsoon: false,
  },
  {
    id: 3,
    name: "RyzerX",
    description:
      "RWA fractional investment platform regulated by VARA, Dubai. Users own fractions of premium real estate and 24K gold backed by insured vaults, with blockchain-backed tokens they can trade anytime.",
    image: "/ryzerx-platform.png",
    technologies: ["Next.js", "Node.js", "Blockchain", "TypeScript", "Tailwind CSS"],
    category: "Fintech",
    github: "",
    live: "https://user.ryzer.app",
    role: "CTO at Ryzer X",
    comingsoon: false,
  },
  {
    id: 4,
    name: "Zuno Pay",
    description: "Cross-border payments platform for moving money between countries fast and at low cost.",
    image: "/zuno-cover.png",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Payments APIs"],
    category: "Payments",
    github: "",
    live: "",
    role: "CTO",
    comingsoon: true,
  },
  {
    id: 6,
    name: "Yozo Club",
    description: "Booking app for clubs, events and experiences.",
    image: "/yozo-cover.png",
    technologies: ["React Native", "Next.js", "Node.js"],
    category: "Booking",
    github: "",
    live: "",
    role: "Full Stack",
    comingsoon: true,
  },
]

export const skills = {
  frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Framer Motion", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "NestJS", level: 85 },
    { name: "Python", level: 80 },
    { name: "FastAPI", level: 80 },
    { name: "LLM / RAG", level: 80 },
    { name: "Socket.IO", level: 85 },
  ],
  databases: [
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 90 },
    { name: "Prisma", level: 85 },
    { name: "Redis", level: 75 },
  ],
  devops: [
    { name: "Docker", level: 80 },
    { name: "GCP / Cloud Run", level: 75 },
    { name: "CI/CD", level: 80 },
    { name: "Vercel", level: 90 },
    { name: "Git", level: 95 },
  ],
  tools: [
    { name: "Claude Code", level: 95 },
    { name: "Turborepo", level: 80 },
    { name: "k6", level: 70 },
    { name: "Postman", level: 90 },
    { name: "Figma", level: 75 },
  ],
}

export const techLogos = [
  { name: "Next.js", icon: "nextjs" },
  { name: "React", icon: "react" },
  { name: "Node.js", icon: "nodejs" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Socket.IO", icon: "socketio" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "Stripe", icon: "stripe" },
]
