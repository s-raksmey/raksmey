"use client";

import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * index, duration: 0.6, ease: [0.33, 1, 0.68, 1] },
  }),
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
      className="grid gap-12 rounded-3xl border p-8 shadow-xl backdrop-blur-sm md:grid-cols-[1.2fr_1fr] md:items-center"
      style={{
        backgroundColor: "var(--surface-elevated)",
        borderColor: "var(--border)",
        boxShadow: "0 25px 70px rgba(0, 0, 0, 0.45)",
      }}
    >
      <div className="space-y-8">
        <span
          className="inline-flex w-fit items-center gap-2 rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em]"
          style={{
            borderColor: "var(--accent)",
            backgroundColor: "var(--accent)",
            color: "var(--accent-foreground)",
          }}
        >
          Portfolio
        </span>
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl" style={{ color: "var(--foreground)" }}>
            Crafting poetic interfaces where clarity and delight move in sync.
          </h1>
          <p className="max-w-xl text-lg" style={{ color: "var(--muted-foreground)" }}>
            I’m Raksmey, an experience designer who codes. I help purposeful brands turn complex
            systems into elegant journeys—balancing strategy, inclusive storytelling, and tactile
            execution.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-1"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--accent-foreground)",
              boxShadow: "var(--shadow-accent)",
            }}
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
      <div
        className="space-y-6 rounded-3xl border p-6 shadow-inner"
        style={{
          backgroundColor: "var(--surface-muted)",
          borderColor: "var(--border)",
          boxShadow: "inset 0 0 35px rgba(39, 245, 60, 0.12)",
        }}
      >
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em]" style={{ color: "var(--accent)" }}>
            Current focus
          </p>
          <h2 className="text-2xl font-semibold" style={{ color: "var(--foreground)" }}>
            Design Systems &amp; Frontend Orchestration
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
            Elevating teams with accessible component libraries and high fidelity prototypes that
            translate seamlessly into production.
          </p>
        </div>
        <div className="grid gap-4">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.label}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              className="group relative overflow-hidden rounded-2xl border p-4"
              style={{
                background: "linear-gradient(135deg, rgba(39, 245, 60, 0.16), rgba(39, 245, 60, 0.02))",
                borderColor: "var(--border)",
              }}
            >
              <div className="flex items-baseline justify-between">
                <span className="text-4xl font-semibold" style={{ color: "var(--accent)" }}>
                  {highlight.value}
                </span>
                <span className="text-xs uppercase tracking-[0.3em]" style={{ color: "var(--muted-foreground)" }}>
                  {highlight.label}
                </span>
              </div>
              <p className="mt-3 text-sm" style={{ color: "var(--muted-foreground)" }}>
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
