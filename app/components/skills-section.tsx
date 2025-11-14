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
    <section id="skills" className="space-y-8">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#27F53C]">
          Expertise
        </span>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Bridging research, design, and technology for cohesive products.
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-300">
              {group.items.map((skill) => (
                <li key={skill} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#27F53C]" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
