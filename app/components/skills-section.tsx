export function SkillsSection() {
  return (
    <section id="skills" className="space-y-6">
      <div className="space-y-3 text-center sm:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">Skills</p>
        <h2 className="text-3xl font-semibold text-[color:var(--foreground)]">Practical tools I lean on</h2>
        <p className="text-base text-[color:var(--muted-foreground)]">
          A compact list of the research, design, and development practices that keep my work grounded and easy to maintain.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4">
          <h3 className="text-lg font-semibold text-[color:var(--foreground)]">Strategy</h3>
          <ul className="space-y-1 text-sm text-[color:var(--muted-foreground)]">
            <li>Product discovery</li>
            <li>Workshop facilitation</li>
            <li>Stakeholder alignment</li>
          </ul>
        </div>
        <div className="space-y-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4">
          <h3 className="text-lg font-semibold text-[color:var(--foreground)]">Design</h3>
          <ul className="space-y-1 text-sm text-[color:var(--muted-foreground)]">
            <li>Interface systems</li>
            <li>Rapid prototyping</li>
            <li>Inclusive writing</li>
          </ul>
        </div>
        <div className="space-y-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4">
          <h3 className="text-lg font-semibold text-[color:var(--foreground)]">Development</h3>
          <ul className="space-y-1 text-sm text-[color:var(--muted-foreground)]">
            <li>React &amp; Next.js</li>
            <li>TypeScript foundations</li>
            <li>Accessibility reviews</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
