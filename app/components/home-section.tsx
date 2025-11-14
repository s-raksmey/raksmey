"use client";

import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const highlights = [
  {
    label: "Years crafting experiences",
    value: "08",
    description: "Bridging research, design, and engineering within high-impact teams.",
  },
  {
    label: "Products launched",
    value: "36",
    description: "Design systems, analytics platforms, and immersive brand touchpoints.",
  },
  {
    label: "Workshops facilitated",
    value: "24",
    description: "Guiding founders and product orgs through discovery to delivery.",
  },
];

export function HomeSection() {
  return (
    <motion.section
      variants={heroVariants}
      initial="hidden"
      animate="show"
      className="grid gap-12 rounded-2xl border border-[color:var(--border)] bg-[color:var(--muted)]/80 p-8 md:grid-cols-[1.1fr_1fr] md:items-start"
    >
      <div className="space-y-8">
        <span
          className="inline-flex w-fit items-center gap-2 rounded-full bg-[color:var(--accent)]/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-[color:var(--accent)]"
        >
          Portfolio
        </span>
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold leading-tight text-[color:var(--foreground)] sm:text-5xl lg:text-6xl">
            Crafting considered digital products with clarity and warmth.
          </h1>
          <p className="max-w-xl text-lg text-[color:var(--muted-foreground)]">
            I’m Raksmey, an experience designer who codes. I help purposeful brands transform complex
            flows into calm, inclusive journeys that perform.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--accent-foreground)] shadow-[var(--shadow-accent)] transition-transform hover:-translate-y-0.5"
          >
            View featured work
            <span aria-hidden>↗</span>
          </a>
          <a
            href="#contact"
            className="button-secondary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
          >
            Let’s collaborate
          </a>
        </div>
      </div>
      <div className="space-y-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">
            Current focus
          </p>
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            Design Systems &amp; Frontend Orchestration
          </h2>
          <p className="text-sm leading-relaxed text-[color:var(--muted-foreground)]">
            Elevating teams with accessible component libraries and high fidelity prototypes that
            translate seamlessly into production.
          </p>
        </div>
        <div className="grid gap-4">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 + 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl border border-[color:var(--border)] bg-[color:var(--background)]/60 p-4"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-4xl font-semibold text-[color:var(--accent)]">
                  {highlight.value}
                </span>
                <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted-foreground)]">
                  {highlight.label}
                </span>
              </div>
              <p className="mt-3 text-sm text-[color:var(--muted-foreground)]">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
