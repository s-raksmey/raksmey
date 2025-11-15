export function SkillsSection() {
  return (
    <section id="skills" className="space-y-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
        <div className="max-w-xl space-y-4">
          <p className="section-eyebrow text-accent">Disciplines</p>
          <h2 className="section-heading text-3xl text-foreground sm:text-4xl">Craft guided by research, typography, and code</h2>
          <p className="text-base text-muted-foreground">
            These are the rituals and tools that anchor my practice. Each discipline is woven together to keep products
            honest, legible, and adaptable across devices.
          </p>
        </div>
        <div className="flex-1 rounded-[2rem] border border-[color:rgba(247,245,239,0.12)] bg-(--surface-muted) p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-4">
              <h3 className="section-heading text-xl text-foreground">Research &amp; Strategy</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-(--accent)" />
                  Immersive discovery sprints and qualitative synthesis
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-(--accent)" />
                  Facilitation for alignment across remote teams
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-(--accent)" />
                  Journey mapping and service blueprints
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="section-heading text-xl text-foreground">Design Systems</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-(--accent)" />
                  Typographic scales optimized for readability
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-(--accent)" />
                  Pattern libraries for multi-platform experiences
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-(--accent)" />
                  Accessibility and inclusive content guidance
                </li>
              </ul>
            </div>
            <div className="space-y-4 sm:col-span-2">
              <h3 className="section-heading text-xl text-foreground">Delivery &amp; Development</h3>
              <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                <li className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-(--accent)" />
                  Next.js, TypeScript, and design-to-code handoff workflows
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-(--accent)" />
                  Component documentation and prototyping rituals
                </li>
                <li className="flex items-start gap-2 sm:col-span-2">
                  <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-(--accent)" />
                  Iterative validation with analytics, usability testing, and accessibility reviews
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {["Figma", "Storybook", "Notion", "Amplitude", "Hotjar", "Miro"].map((tool) => (
          <div
            key={tool}
            className="flex items-center justify-between rounded-2xl border border-[color:rgba(247,245,239,0.12)] bg-black/30 px-4 py-3 text-sm text-muted-foreground"
          >
            <span className="section-heading text-base text-foreground">{tool}</span>
            <span aria-hidden className="text-xs uppercase tracking-[0.3em] text-[color:rgba(247,245,239,0.5)]">Toolkit</span>
          </div>
        ))}
      </div>
    </section>
  );
}