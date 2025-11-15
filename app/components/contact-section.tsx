export function ContactSection() {
  return (
    <section id="contact" className="space-y-6 rounded-xl border border-[color:var(--border)] bg-(--surface-muted) p-6">
      <div className="space-y-3 text-center sm:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">Contact</p>
        <h2 className="text-3xl font-semibold text-[color:var(--foreground)]">Let’s start a conversation</h2>
        <p className="text-base text-[color:var(--muted-foreground)]">
          Share a quick note about your project or idea. I’ll respond within a couple of days with a time to connect.
        </p>
      </div>
      <form className="grid gap-4 text-sm text-[color:var(--foreground)]">
        <label className="grid gap-2">
          <span className="uppercase tracking-[0.2em] text-[0.65rem] text-[color:var(--accent)]">Name</span>
          <input type="text" name="name" placeholder="Your full name" className="input-field" />
        </label>
        <label className="grid gap-2">
          <span className="uppercase tracking-[0.2em] text-[0.65rem] text-[color:var(--accent)]">Email</span>
          <input type="email" name="email" placeholder="you@example.com" className="input-field" />
        </label>
        <label className="grid gap-2">
          <span className="uppercase tracking-[0.2em] text-[0.65rem] text-[color:var(--accent)]">Project details</span>
          <textarea
            name="details"
            rows={4}
            placeholder="A short description of what you’re looking for"
            className="input-field resize-y"
          />
        </label>
        <button
          type="submit"
          className="inline-flex w-fit items-center justify-center rounded-full bg-(--accent) px-5 py-2 text-sm font-semibold text-[color:var(--accent-foreground)]"
        >
          Send message
        </button>
      </form>
      <div className="space-y-2 text-sm text-[color:var(--muted-foreground)]">
        <p>
          Prefer email? Reach me at <a className="text-[color:var(--accent)]" href="mailto:hello@raksmey.design">hello@raksmey.design</a>.
        </p>
        <p>Currently based in Phnom Penh and happy to work remotely.</p>
      </div>
    </section>
  );
}
