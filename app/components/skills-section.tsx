"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Strategy",
    items: ["Product Discovery", "UX Research", "Design Sprints"],
  },
  {
    title: "Design",
    items: ["Design Systems", "Interface Design", "Prototyping"],
  },
  {
    title: "Development",
    items: ["React & Next.js", "TypeScript", "Accessibility"],
  },
];

export function SkillsSection() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-8"
    >
      <div className="flex flex-col gap-3">
        <span className="text-sm font-semibold uppercase tracking-[0.4em] text-[color:var(--accent)]">
          Expertise
        </span>
        <h2 className="text-3xl font-semibold text-[color:var(--foreground)] sm:text-4xl">
          Bridging research, design, and technology for cohesive products.
        </h2>
        <p className="max-w-2xl text-base text-[color:var(--muted-foreground)]">
          Modular thinking meets storytelling craft—equipping teams with processes, rituals, and component systems that amplify velocity.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.4 }}
            className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)]/80 p-6"
          >
            <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[color:var(--muted-foreground)]">
              {group.items.map((skill) => (
                <li key={skill} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
