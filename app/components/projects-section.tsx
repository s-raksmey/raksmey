"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { featuredProjects } from "../data/projects";

export function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-10"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-[color:var(--accent)]">
            Featured Projects
          </span>
          <h2 className="text-3xl font-semibold text-[color:var(--foreground)] sm:text-4xl">
            Designing ecosystems that feel calm under pressure.
          </h2>
          <p className="max-w-2xl text-base text-[color:var(--muted-foreground)]">
            A selection of collaborations spanning product strategy, interface systems, and hands-on front-end builds.
          </p>
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)] transition-transform hover:translate-x-1"
        >
          View all projects
          <span aria-hidden>→</span>
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex h-full flex-col gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)]/80 p-5"
          >
            <div className="flex items-baseline justify-between text-xs uppercase tracking-[0.3em] text-[color:var(--muted-foreground)]">
              <span>{project.year}</span>
              <span className="text-[color:var(--accent)]">{project.role}</span>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[color:var(--foreground)]">
                {project.title}
              </h3>
              <p className="text-sm text-[color:var(--muted-foreground)]">{project.summary}</p>
            </div>
            <div className="mt-auto flex flex-wrap gap-2 text-xs text-[color:var(--muted-foreground)]">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[color:var(--border)] bg-[color:var(--background)]/70 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
