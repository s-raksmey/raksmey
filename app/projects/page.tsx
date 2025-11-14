import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "../components/site-footer";
import { projects } from "../data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse the full archive of projects crafted by Raksmey.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-12 sm:px-8 md:px-10">
        <header className="space-y-6 border-b border-[color:var(--border)] pb-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h1 className="text-4xl font-semibold text-[color:var(--foreground)]">Project archive</h1>
            <Link
              href="/"
              className="text-sm font-semibold text-[color:var(--accent)] transition-transform hover:-translate-x-1"
            >
              ← Back to portfolio
            </Link>
          </div>
          <p className="max-w-2xl text-base text-[color:var(--muted-foreground)]">
            A growing collection of product partnerships, spanning discovery, delivery, and design systems leadership.
          </p>
        </header>
        <div className="grid gap-6">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="space-y-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)]/70 p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.3em] text-[color:var(--muted-foreground)]">
                <span>{project.year}</span>
                <span className="text-[color:var(--accent)]">{project.role}</span>
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">{project.title}</h2>
                <p className="text-sm text-[color:var(--muted-foreground)]">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-[color:var(--muted-foreground)]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[color:var(--border)] bg-[color:var(--background)]/70 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <SiteFooter />
      </div>
    </div>
  );
}
