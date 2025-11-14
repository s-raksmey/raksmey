export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  year: string;
  role: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "aurora-marketing-suite",
    title: "Aurora Marketing Suite",
    summary: "Global campaign platform supporting modular storytelling and analytics.",
    description:
      "A modular campaign platform built for marketing teams rolling out creative across markets. I led the design system refresh, prototyped the experience in React, and embedded accessibility checks into the build pipeline.",
    year: "2024",
    role: "Product Design · Frontend",
    tags: ["Design Systems", "Next.js", "Accessibility"],
  },
  {
    slug: "lumen-analytics",
    title: "Lumen Analytics",
    summary: "High-contrast dashboard for sustainability metrics with realtime collaboration.",
    description:
      "Working alongside data scientists, I introduced a streamlined navigation model, real-time annotations, and light/dark themes. The result improved task completion by 34% and helped the team standardize charting components.",
    year: "2023",
    role: "Design Strategy",
    tags: ["Design Research", "Product Strategy", "Design Ops"],
  },
  {
    slug: "atlas-knowledge-hub",
    title: "Atlas Knowledge Hub",
    summary: "Immersive onboarding and AI-assisted knowledge base for a global nonprofit.",
    description:
      "I collaborated with subject-matter experts to map the information architecture, prototyped guided onboarding flows, and paired with engineers to ensure WCAG AA compliance across the new help center.",
    year: "2022",
    role: "Experience Strategy",
    tags: ["IA", "Content Design", "WCAG"],
  },
  {
    slug: "orbit-ops-center",
    title: "Orbit Ops Center",
    summary: "Operational dashboard aligning logistics, supply chains, and finance teams.",
    description:
      "Introduced role-based workspaces, improved alerting semantics, and championed a shared component library. Helped the org cut duplicate tooling and speed up feature delivery.",
    year: "2021",
    role: "Product Design",
    tags: ["Dashboards", "Design Systems", "Design Tokens"],
  },
  {
    slug: "sonar-support",
    title: "Sonar Support",
    summary: "Support tooling that surfaces insights from conversations and issue trackers.",
    description:
      "Partnered with CX leadership to connect product telemetry with help desk tooling. Delivered a set of reusable interface primitives and drove the pilot across two support regions.",
    year: "2020",
    role: "Product Designer",
    tags: ["Service Design", "Research", "Prototyping"],
  },
];

export const featuredProjects = projects.slice(0, 3);
