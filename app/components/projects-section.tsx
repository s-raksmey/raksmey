const highlightedProjects = [
  {
    title: "Aurora Marketing Suite",
    description:
      "A refreshed modular campaign hub with clearer navigation and practical analytics for busy marketing teams.",
  },
  {
    title: "Lumen Analytics",
    description:
      "A lightweight dashboard that turns sustainability data into everyday decisions for cross-functional groups.",
  },
  {
    title: "Atlas Knowledge Hub",
    description:
      "A friendly knowledge base and onboarding path that helps global teams find answers without the noise.",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-6">
      <div className="space-y-3 text-center sm:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
          Selected work
        </p>
        <h2 className="text-3xl font-semibold text-[color:var(--foreground)]">Simple, steady project highlights</h2>
        <p className="text-base text-[color:var(--muted-foreground)]">
          A short collection of collaborations that balance clear structure with a calm presentation style.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {highlightedProjects.map((project) => (
          <article
            key={project.title}
            className="space-y-2 rounded-xl border border-[color:var(--border)] bg-(--surface-muted) p-4"
          >
            <h3 className="text-xl font-semibold text-[color:var(--foreground)]">{project.title}</h3>
            <p className="text-sm text-[color:var(--muted-foreground)]">{project.description}</p>
          </article>
        ))}
      </div>
      <a href="/projects" className="inline-block text-sm font-semibold text-[color:var(--accent)]">
        See the full list of projects
      </a>
    </section>
  );
}
