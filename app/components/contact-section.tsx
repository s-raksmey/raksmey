"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-10 rounded-3xl border p-8 shadow-xl"
      style={{ backgroundColor: "var(--surface-elevated)" }}
    >
      <div className="flex flex-col gap-3">
        <span
          className="text-sm font-semibold uppercase tracking-[0.4em]"
          style={{ color: "var(--accent)" }}
        >
          Collaborations
        </span>
        <h2
          className="text-3xl font-semibold sm:text-4xl"
          style={{ color: "var(--foreground)" }}
        >
          Ready to craft something remarkable together?
        </h2>
        <p className="max-w-2xl text-base" style={{ color: "var(--muted-foreground)" }}>
          Share your ambitions and we’ll map the journey—from framing the opportunity to shipping
          polished, measurable experiences.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-start">
        <form className="grid gap-4 text-sm" style={{ color: "var(--foreground)" }}>
          <label className="grid gap-2">
            <span
              className="uppercase tracking-[0.3em] text-[0.7rem]"
              style={{ color: "var(--accent)" }}
            >
              Name
            </span>
            <input
              type="text"
              placeholder="Your full name"
              className="input-field"
            />
          </label>
          <label className="grid gap-2">
            <span
              className="uppercase tracking-[0.3em] text-[0.7rem]"
              style={{ color: "var(--accent)" }}
            >
              Email
            </span>
            <input
              type="email"
              placeholder="you@example.com"
              className="input-field"
            />
          </label>
          <label className="grid gap-2">
            <span
              className="uppercase tracking-[0.3em] text-[0.7rem]"
              style={{ color: "var(--accent)" }}
            >
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
            className="inline-flex w-fit items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-1"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--accent-foreground)",
              boxShadow: "var(--shadow-accent)",
            }}
          >
            Send message
            <span aria-hidden>→</span>
          </motion.button>
        </form>
        <div
          className="space-y-6 rounded-3xl border p-6 text-sm"
          style={{ backgroundColor: "var(--surface-muted)", color: "var(--muted-foreground)" }}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em]" style={{ color: "var(--accent)" }}>
              Email
            </p>
            <a
              href="mailto:hello@raksmey.design"
              className="accent-link mt-2 inline-block text-base font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              hello@raksmey.design
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em]" style={{ color: "var(--accent)" }}>
              Social
            </p>
            <ul className="mt-3 space-y-2" style={{ color: "var(--foreground)" }}>
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
            <p className="text-xs uppercase tracking-[0.3em]" style={{ color: "var(--accent)" }}>
              Location
            </p>
            <p className="mt-2 text-base" style={{ color: "var(--foreground)" }}>
              Phnom Penh, Cambodia · Remote friendly
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
