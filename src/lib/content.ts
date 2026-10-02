export const contact = {
  email: "mauriminio96@gmail.com",
  github: "https://github.com/maurim96",
  linkedin: "https://www.linkedin.com/in/maurim96/",
  resume:
    "https://docs.google.com/document/d/1SaJaLF93-_sKsc5UGep-4_N_8lyVBt6rhQqD1FP0Pv0/edit?tab=t.0",
};

export const projects = [
  {
    id: "bask" as const,
    name: "Bask Health",
    category: "HEALTHCARE · PLATFORM",
    headline: "Better care starts with better software.",
    description:
      "Frontend architecture and product engineering for a platform that helps healthcare businesses deliver care.",
    role: "Lead Software Engineer",
    context:
      "Bask brings the tools for running a telehealth business into one platform. My work connects product thinking, frontend architecture, and the details that make complex workflows feel clear.",
    contributions: [
      "Frontend architecture and development of the platform’s next generation.",
      "Working directly with the CEO and designers to turn product ideas into shipped features.",
      "Technical leadership and frontend engineering interviews.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Product architecture"],
    url: "https://bask.health",
    linkLabel: "Visit Bask Health",
    period: "2024 — NOW",
  },
  {
    id: "breeze" as const,
    name: "Breeze",
    category: "HEALTHCARE · WEB & MOBILE",
    headline: "Less friction. More reasons to smile.",
    description:
      "A connected dental booking experience, bringing patient journeys across web and mobile together.",
    role: "Senior Software Engineer at Nolte",
    context:
      "Breeze makes dental care easier to access through patient onboarding, appointment booking, and a connected digital experience. I contributed to the product as part of the Nolte engineering team.",
    contributions: [
      "Engineering for the appointment booking web experience.",
      "Work across a Next.js frontend and NestJS / GraphQL services.",
      "Contributions to the React Native mobile product.",
    ],
    stack: ["Next.js", "React Native", "NestJS", "GraphQL", "AWS"],
    url: "https://nolte.io/work/breeze-oral-care",
    linkLabel: "Read the Breeze case study",
    period: "AT NOLTE",
  },
  {
    id: "pilou" as const,
    name: "Pilou",
    category: "FINTECH · WEB PLATFORM",
    headline: "Making the first investment feel simpler.",
    description:
      "Modern web engineering for a financial platform, from onboarding to connected services.",
    role: "Senior Software Engineer at Nolte",
    context:
      "Pilou is an investment platform for the Mexican market. The product brings investor onboarding, identity checks, and financial services into a more approachable experience.",
    contributions: [
      "Full-stack engineering with Next.js and NestJS.",
      "GraphQL services and data access with Prisma and PostgreSQL.",
      "Contributions to a modern product layer connected to an existing platform.",
    ],
    stack: ["Next.js", "NestJS", "GraphQL", "Prisma", "PostgreSQL", "AWS"],
    url: "https://nolte.io/work/pilou",
    linkLabel: "Read the Pilou case study",
    period: "AT NOLTE",
  },
];

export type Project = (typeof projects)[number];

export const experience = [
  {
    company: "Bask Health",
    role: "Lead Software Engineer",
    period: "SEP 2024 — PRESENT",
    description:
      "Leading frontend architecture, shaping the product with founders and designers, and helping build the engineering team.",
    current: true,
  },
  {
    company: "Nolte",
    role: "Senior Software Engineer",
    period: "MAR 2022 — OCT 2024",
    description:
      "Taking web and mobile products from idea to launch. Technical direction, client collaboration, and engineer mentorship.",
    current: false,
  },
  {
    company: "Applica",
    role: "Frontend Developer",
    period: "MAY 2019 — MAR 2022",
    description:
      "Building and modernizing administrative and healthcare systems, with real user feedback guiding the work.",
    current: false,
  },
  {
    company: "The foundations",
    role: "Full Stack Developer",
    period: "JUN 2018 — MAY 2019",
    description:
      "ERP, anti-fraud, and custom systems across Ms. Tech, Chess Desarrollos Informáticos, and freelance projects.",
    current: false,
  },
];

export const toolkit = [
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "NestJS",
  "GraphQL",
  "PostgreSQL",
  "Prisma",
  "Drizzle",
  "AWS",
  "CI/CD",
];
