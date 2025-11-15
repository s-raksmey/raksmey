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
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(244,201,125,0.1),_transparent_55%)]" />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 py-16 sm:px-10 lg:px-12">
        <header className="space-y-6">
          <p className="section-eyebrow text-accent">Project archive</p>
          <h1 className="section-heading text-4xl text-foreground sm:text-5xl">A record of thoughtful, enduring collaborations</h1>
          <p className="max-w-3xl text-base text-muted-foreground sm:text-lg">
            Each engagement pairs deliberate discovery with crafted delivery. Explore a curated list of projects that
            balance human narratives with measurable product outcomes.
          </p>
        </header>
        <div className="space-y-6">
          {projectArchive.map((project) => (
            <article
              key={project.title}
              className="relative overflow-hidden rounded-3xl border border-[color:rgba(247,245,239,0.14)] bg-(--surface-elevated) p-6 transition-transform duration-300 hover:-translate-y-0.5 hover:border-[color:rgba(244,201,125,0.7)] hover:shadow-[0_24px_70px_rgba(0,0,0,0.55)] sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.35em] text-[color:rgba(247,245,239,0.55)]">
                <span>{project.year}</span>
                <span>Case study</span>
              </div>
              <h2 className="mt-4 section-heading text-3xl text-foreground">{project.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">{project.summary}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="mx-auto w-full max-w-5xl px-6 pb-12 sm:px-10 lg:px-12">
        <SiteFooter />
      </div>
    </div>
  );
}
