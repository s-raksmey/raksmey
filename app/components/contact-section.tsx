export function ContactSection() {
  return (
    <section
      id="contact"
      className="space-y-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 p-8"
    >
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#27F53C]">
          Collaborations
        </span>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Ready to craft something remarkable together?
        </h2>
      </div>
      <p className="max-w-2xl text-base text-neutral-200">
        I partner with teams to launch new products, scale design systems, and refine digital
        experiences. Share a bit about your goals and I’ll follow up with next steps within two
        business days.
      </p>
      <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-start">
        <form className="grid gap-4 text-sm text-white">
          <label className="grid gap-2">
            <span className="uppercase tracking-[0.2em] text-[#27F53C]">Name</span>
            <input
              type="text"
              placeholder="Your full name"
              className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-[#27F53C] focus:outline-none"
            />
          </label>
          <label className="grid gap-2">
            <span className="uppercase tracking-[0.2em] text-[#27F53C]">Email</span>
            <input
              type="email"
              placeholder="you@example.com"
              className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-[#27F53C] focus:outline-none"
            />
          </label>
          <label className="grid gap-2">
            <span className="uppercase tracking-[0.2em] text-[#27F53C]">Project details</span>
            <textarea
              rows={4}
              placeholder="Share your vision, timeline, and any specifics."
              className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-[#27F53C] focus:outline-none"
            />
          </label>
          <button
            type="submit"
            className="inline-flex w-fit items-center justify-center rounded-full bg-[#27F53C] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#1ed636]"
          >
            Send message
          </button>
        </form>
        <div className="space-y-6 rounded-3xl border border-white/10 bg-black/60 p-6 text-sm text-neutral-300">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#27F53C]">Email</p>
            <a
              href="mailto:hello@raksmey.design"
              className="mt-2 inline-block text-base font-semibold text-white hover:text-[#27F53C]"
            >
              hello@raksmey.design
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#27F53C]">Social</p>
            <ul className="mt-3 space-y-2 text-white">
              <li>
                <a className="hover:text-[#27F53C]" href="https://github.com/raksmey" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a className="hover:text-[#27F53C]" href="https://linkedin.com/in/raksmey" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="hover:text-[#27F53C]" href="https://dribbble.com" target="_blank" rel="noreferrer">
                  Dribbble
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#27F53C]">Location</p>
            <p className="mt-2 text-base text-white">Phnom Penh, Cambodia · Remote friendly</p>
          </div>
        </div>
      </div>
    </section>
  );
}
