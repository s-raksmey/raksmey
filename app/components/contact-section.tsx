"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-10 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)]/70 p-8"
    >
      <div className="flex flex-col gap-3">
        <span className="text-sm font-semibold uppercase tracking-[0.4em] text-[color:var(--accent)]">
          Collaborations
        </span>
        <h2 className="text-3xl font-semibold text-[color:var(--foreground)] sm:text-4xl">
          Ready to craft something remarkable together?
        </h2>
        <p className="max-w-2xl text-base text-[color:var(--muted-foreground)]">
          Share your ambitions and we’ll map the journey—from framing the opportunity to shipping polished, measurable experiences.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-start">
        <form className="grid gap-4 text-sm text-[color:var(--foreground)]">
          <label className="grid gap-2">
            <span className="uppercase tracking-[0.3em] text-[0.7rem] text-[color:var(--accent)]">
              Name
            </span>
            <input
              type="text"
              placeholder="Your full name"
              className="input-field"
            />
          </label>
          <label className="grid gap-2">
            <span className="uppercase tracking-[0.3em] text-[0.7rem] text-[color:var(--accent)]">
              Email
            </span>
            <input
              type="email"
              placeholder="you@example.com"
              className="input-field"
            />
          </label>
          <label className="grid gap-2">
            <span className="uppercase tracking-[0.3em] text-[0.7rem] text-[color:var(--accent)]">
              Project details
            </span>
            <textarea
              rows={4}
              placeholder="Share your vision, timeline, and any specifics."
              className="input-field resize-y"
            />
          </label>
          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--accent-foreground)] shadow-[var(--shadow-accent)] transition-transform hover:-translate-y-0.5"
          >
            Send message
            <span aria-hidden>→</span>
          </motion.button>
        </form>
        <div className="space-y-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)]/70 p-6 text-sm text-[color:var(--muted-foreground)]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">
              Email
            </p>
            <a
              href="mailto:hello@raksmey.design"
              className="accent-link mt-2 inline-block text-base font-semibold text-[color:var(--foreground)]"
            >
              hello@raksmey.design
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">
              Social
            </p>
            <ul className="mt-3 space-y-2 text-[color:var(--foreground)]">
              <li>
                <a className="accent-link" style={{ color: "inherit" }} href="https://github.com/raksmey" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a className="accent-link" style={{ color: "inherit" }} href="https://linkedin.com/in/raksmey" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="accent-link" style={{ color: "inherit" }} href="https://dribbble.com" target="_blank" rel="noreferrer">
                  Dribbble
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">
              Location
            </p>
            <p className="mt-2 text-base text-[color:var(--foreground)]">
              Phnom Penh, Cambodia · Remote friendly
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
