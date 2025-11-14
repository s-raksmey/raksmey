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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-10"
    >
      <div className="flex flex-col gap-3">
        <span
          className="text-sm font-semibold uppercase tracking-[0.4em]"
          style={{ color: "var(--accent)" }}
        >
          Expertise
        </span>
        <h2
          className="text-3xl font-semibold sm:text-4xl"
          style={{ color: "var(--foreground)" }}
        >
          Bridging research, design, and technology for cohesive products.
        </h2>
        <p className="max-w-2xl text-base" style={{ color: "var(--muted-foreground)" }}>
          Modular thinking meets storytelling craft—equipping teams with processes, rituals, and
          component systems that amplify velocity.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.65, ease: [0.33, 1, 0.68, 1] }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative overflow-hidden rounded-3xl border p-6 shadow-lg"
            style={{
              background: "linear-gradient(160deg, rgba(39, 245, 60, 0.16), rgba(39, 245, 60, 0.02))",
              borderColor: "var(--border)",
              boxShadow: "0 25px 70px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div
              className="absolute right-4 top-4 h-14 w-14 rounded-full opacity-30"
              style={{ background: "radial-gradient(circle at center, var(--accent) 0%, transparent 70%)" }}
            />
            <h3 className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>
              {group.title}
            </h3>
            <ul className="mt-5 space-y-3 text-sm" style={{ color: "var(--muted-foreground)" }}>
              {group.items.map((skill) => (
                <li key={skill} className="flex items-center gap-3">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
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
