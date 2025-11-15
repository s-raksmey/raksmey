export function HomeSection() {
  return (
    <section className="space-y-6 text-center sm:text-left">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
        Hello, I'm Raksmey
      </p>
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold leading-tight text-[color:var(--foreground)] sm:text-5xl">
          Designing thoughtful digital products with a calm and simple touch.
        </h1>
        <p className="text-base text-[color:var(--muted-foreground)]">
          I help teams shape clear product experiences by focusing on what matters—useful content,
          approachable interactions, and accessible interfaces. This portfolio shares a snapshot of the
          work I enjoy the most.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
        <a
          href="#projects"
          className="rounded-full bg-[color:var(--accent)] px-5 py-2 text-sm font-semibold text-[color:var(--accent-foreground)]"
        >
          View projects
        </a>
        <a href="#contact" className="text-sm font-semibold text-[color:var(--foreground)] underline decoration-[color:var(--accent)]">
          Get in touch
        </a>
      </div>
    </section>
  );
}
