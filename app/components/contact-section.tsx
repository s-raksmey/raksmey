export function ContactSection() {
  return (
    <section
      id="contact"
      className="rounded-[2.5rem] border border-[color:rgba(247,245,239,0.16)] bg-(--surface-elevated) px-6 py-10 shadow-[0_30px_80px_rgba(0,0,0,0.55)] sm:px-10 lg:px-14"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr,1.1fr] lg:items-start">
        <div className="space-y-6">
          <p className="section-eyebrow text-accent">Contact</p>
          <h2 className="section-heading text-3xl text-foreground sm:text-4xl">Let&rsquo;s create space for considered work</h2>
          <p className="text-base text-muted-foreground">
            Share a short note about your team, timeline, or the questions you&rsquo;re exploring. I reply within two business
            days to schedule a calm, focused conversation.
          </p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              Prefer email? Reach me at{" "}
              <a className="text-accent hover:text-foreground" href="mailto:hello@raksmey.design">
                hello@raksmey.design
              </a>
              .
            </p>
            <p>Based in Phnom Penh &mdash; collaborating with teams across time zones.</p>
            <div className="divider-line" />
            <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.25em] text-[color:rgba(247,245,239,0.6)]">
              <span>Discovery sprints</span>
              <span>Product design</span>
              <span>Design systems</span>
              <span>Team coaching</span>
            </div>
          </div>
        </div>
        <form className="space-y-5 text-sm text-foreground">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="section-eyebrow text-[0.6rem] tracking-[0.35em]">Name</span>
              <input type="text" name="name" placeholder="Your full name" className="input-field" />
            </label>
            <label className="grid gap-2">
              <span className="section-eyebrow text-[0.6rem] tracking-[0.35em]">Email</span>
              <input type="email" name="email" placeholder="you@example.com" className="input-field" />
            </label>
          </div>
          <label className="grid gap-2">
            <span className="section-eyebrow text-[0.6rem] tracking-[0.35em]">Project details</span>
            <textarea
              name="details"
              rows={5}
              placeholder="Tell me about your product goals, audience, or desired outcomes"
              className="input-field resize-y"
            />
          </label>
          <label className="grid gap-2">
            <span className="section-eyebrow text-[0.6rem] tracking-[0.35em]">Ideal timeline</span>
            <input type="text" name="timeline" placeholder="e.g. Discovery in July, launch by October" className="input-field" />
          </label>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-(--accent) px-6 py-3 text-sm font-semibold text-(--accent-foreground) transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(244,201,125,0.35)]"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}