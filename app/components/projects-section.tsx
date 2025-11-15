const highlightedProjects = [
  {
    title: "Aurora Marketing Suite",
    description:
      "A modular marketing platform refined with purposeful typography and thoughtful permission states for global teams.",
    impact: "32% faster campaign launches",
  },
  {
    title: "Lumen Analytics",
    description:
      "A sustainability dashboard distilled into elegant narratives that keep cross-functional partners aligned every week.",
    impact: "Company-wide climate reporting cadence",
  },
  {
    title: "Atlas Knowledge Hub",
    description:
      "An onboarding atlas that curates resources and rituals, blending storytelling with structured enablement.",
    impact: "Onboarding time reduced by half",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-4">
          <p className="section-eyebrow text-accent">Selected collaborations</p>
          <h2 className="section-heading text-3xl text-foreground sm:text-4xl">
            Composed product journeys shaped with long-term partners
          </h2>
        </div>
        <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
          Each collaboration honors a calm cadence of discovery, prototyping, and delivery. These highlights blend
          quiet aesthetics with decisive outcomes for teams working across borders.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {highlightedProjects.map((project) => (
          <article
            key={project.title}
            className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-[color:rgba(247,245,239,0.14)] bg-(--surface-elevated) p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-[color:rgba(244,201,125,0.75)] hover:shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
          >
            <span className="h-px w-12 bg-[linear-gradient(90deg,rgba(244,201,125,0.7),transparent)]" />
            <h3 className="section-heading text-2xl text-foreground">{project.title}</h3>
            <p className="text-sm text-muted-foreground">{project.description}</p>
            <div className="mt-auto text-xs uppercase tracking-[0.2em] text-[color:rgba(244,201,125,0.7)]">
              {project.impact}
            </div>
          </article>
        ))}
      </div>
      <div className="space-y-6 rounded-[2rem] border border-[color:rgba(247,245,239,0.12)] bg-(--surface-muted) p-6 sm:p-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="section-heading text-2xl text-foreground">An archive of enduring partnerships</h3>
          <a
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground"
          >
            View full project index
            <span aria-hidden className="text-base">→</span>
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[color:rgba(247,245,239,0.12)] bg-black/30 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:rgba(247,245,239,0.58)]">Practices</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Inclusive research, narrative mapping, and systems thinking translated into interface foundations.
            </p>
          </div>
          <div className="rounded-2xl border border-[color:rgba(247,245,239,0.12)] bg-black/30 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:rgba(247,245,239,0.58)]">Deliverables</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Service blueprints, multi-platform design libraries, and implementation guidance for teams.
            </p>
          </div>
          <div className="rounded-2xl border border-[color:rgba(247,245,239,0.12)] bg-black/30 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:rgba(247,245,239,0.58)]">Collaboration</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Embedded with product, engineering, and content partners to steward calm, measurable change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
