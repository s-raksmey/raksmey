export function HomeSection() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-[color:rgba(247,245,239,0.14)] bg-(--surface-muted) px-6 py-12 text-left shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(244,201,125,0.18),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-[linear-gradient(180deg,transparent,rgba(244,201,125,0.6),transparent)]" />
      <div className="relative flex flex-col gap-12 lg:flex-row lg:items-start">
        <div className="flex-1 space-y-6">
          <p className="section-eyebrow text-accent">Portfolio of Raksmey Sok</p>
          <h1 className="section-heading text-4xl leading-[1.15] text-foreground sm:text-5xl lg:text-6xl">
            Crafting serene digital products for teams who value clarity and calm.
          </h1>
          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
            I translate complex problems into composed interfaces and enduring design systems. From discovery
            workshops to polished product journeys, I help teams tell their story with restraint and purpose.
          </p>
          <div className="flex flex-col gap-4 text-sm font-semibold sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-(--accent) px-6 py-3 text-(--accent-foreground) transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(244,201,125,0.35)]"
            >
              Explore highlighted work
            </a>
            <a
              href="#contact"
              className="button-secondary inline-flex items-center justify-center rounded-full px-6 py-3"
            >
              Schedule a conversation
            </a>
          </div>
        </div>
        <div className="flex w-full flex-col gap-6 rounded-3xl border border-[color:rgba(247,245,239,0.16)] bg-(--surface-elevated) p-6 text-sm text-muted-foreground shadow-inner lg:max-w-sm">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:rgba(244,201,125,0.7)]">Focus</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-(--accent)" />
                <span>Product strategy rooted in human stories and measurable outcomes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-(--accent)" />
                <span>Interfaces that balance typographic elegance with practical accessibility.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-(--accent)" />
                <span>Collaborative rituals that keep teams aligned across discovery and delivery.</span>
              </li>
            </ul>
          </div>
          <div className="divider-line" />
          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.2em] text-[color:rgba(247,245,239,0.6)]">
            <div>
              <p className="text-3xl font-semibold text-foreground">12+</p>
              <p>Years crafting products</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-foreground">28</p>
              <p>Collaborative teams</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-foreground">5</p>
              <p>Countries supported</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
