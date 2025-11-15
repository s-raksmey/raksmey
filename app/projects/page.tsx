import type { Metadata } from "next";

import { SiteFooter } from "../components/site-footer";

const projectArchive = [
  {
    title: "Aurora Marketing Suite",
    year: "2024",
    summary: "A modular marketing platform with a simplified editing flow for global teams.",
  },
  {
    title: "Lumen Analytics",
    year: "2023",
    summary: "A focused analytics dashboard that keeps sustainability metrics easy to understand.",
  },
  {
    title: "Atlas Knowledge Hub",
    year: "2022",
    summary: "An onboarding guide and resource center that shortens the learning curve for volunteers.",
  },
];

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse a simple overview of projects crafted by Raksmey.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-12 sm:px-8">
        <header className="space-y-3">
          <h1 className="text-4xl font-semibold text-[color:var(--foreground)]">Project archive</h1>
          <p className="text-base text-[color:var(--muted-foreground)]">
            A calm overview of selected collaborations. Each project pairs clear goals with accessible design
            decisions.
          </p>
        </header>
        <div className="space-y-4">
          {projectArchive.map((project) => (
            <article key={project.title} className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
                <span>{project.year}</span>
              </div>
              <h2 className="mt-2 text-2xl font-semibold text-[color:var(--foreground)]">{project.title}</h2>
              <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{project.summary}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl px-6 pb-12 sm:px-8">
        <SiteFooter />
      </div>
    </div>
  );
}
