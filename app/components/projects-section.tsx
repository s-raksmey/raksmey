"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Aurora Marketing Suite",
    description:
      "Data-driven campaign platform with modular components, empowering teams to ship brand-consistent stories across the globe.",
    year: "2024",
    role: "Product Design · Frontend",
  },
  {
    title: "Lumen Analytics",
    description:
      "High-contrast dashboard for monitoring sustainability metrics with real-time collaboration and custom insight tooling.",
    year: "2023",
    role: "Design Systems",
  },
  {
    title: "Atlas Knowledge Hub",
    description:
      "Content-rich knowledge base with immersive onboarding, AI assisted search, and world-class accessibility compliance.",
    year: "2022",
    role: "Experience Strategy",
  },
];

export function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-10"
    >
      <div className="flex flex-col gap-3">
        <span
          className="text-sm font-semibold uppercase tracking-[0.4em]"
          style={{ color: "var(--accent)" }}
        >
          Featured Projects
        </span>
        <h2
          className="text-3xl font-semibold sm:text-4xl"
          style={{ color: "var(--foreground)" }}
        >
          Designing product ecosystems that scale with ambition.
        </h2>
        <p className="max-w-3xl text-base" style={{ color: "var(--muted-foreground)" }}>
          Multi-disciplinary partnerships with founders, SaaS teams, and global organizations to
          orchestrate expressive yet resilient experiences.
        </p>
      </div>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="group relative overflow-hidden rounded-3xl border p-8 shadow-lg transition-transform hover:-translate-y-2"
            style={{ backgroundColor: "var(--surface-elevated)" }}
          >
            <div className="flex flex-col justify-between gap-6 md:flex-row">
              <div className="space-y-4">
                <div
                  className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em]"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                  <span>{project.year}</span>
                  <span style={{ color: "var(--accent)" }}>{project.role}</span>
                </div>
                <h3
                  className="text-2xl font-semibold sm:text-3xl"
                  style={{ color: "var(--foreground)" }}
                >
                  {project.title}
                </h3>
                <p className="max-w-2xl text-base" style={{ color: "var(--muted-foreground)" }}>
                  {project.description}
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 md:items-end">
                <div
                  className="rounded-2xl border px-5 py-3 text-sm font-medium"
                  style={{ backgroundColor: "var(--surface-muted)", color: "var(--foreground)" }}
                >
                  {project.role}
                </div>
                <a
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-transform group-hover:translate-x-1"
                  style={{ color: "var(--accent)" }}
                  href="#contact"
                >
                  Request the case study
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L12 4M12 4H6M12 4V10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div
                className="absolute inset-x-6 bottom-4 h-1 rounded-full bg-gradient-to-r from-transparent to-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
              />
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
