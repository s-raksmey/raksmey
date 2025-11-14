const projects = [
  {
    title: "Aurora Marketing Suite",
    description:
      "Data-driven campaign platform with modular components, empowering teams to ship brand-consistent stories across the globe.",
    year: "2024",
    role: "Product Design · Frontend",
  },
  {
    title: "Lumen Analytics",
    description:
      "High-contrast dashboard for monitoring sustainability metrics with real-time collaboration and custom insight tooling.",
    year: "2023",
    role: "Design Systems",
  },
  {
    title: "Atlas Knowledge Hub",
    description:
      "Content-rich knowledge base with immersive onboarding, AI assisted search, and world-class accessibility compliance.",
    year: "2022",
    role: "Experience Strategy",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-8">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#27F53C]">
          Featured Projects
        </span>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          A selection of collaborations that balance aesthetics and performance.
        </h2>
      </div>
      <div className="grid gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-[#27F53C]/60 hover:bg-white/10 sm:p-8"
          >
            <div className="flex flex-col justify-between gap-6 md:flex-row">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="max-w-2xl text-base text-neutral-300">{project.description}</p>
                <p className="text-sm font-medium text-[#27F53C]">{project.role}</p>
              </div>
              <div className="flex flex-col items-start gap-3 text-sm text-neutral-300 md:items-end">
                <span className="rounded-full border border-[#27F53C]/40 bg-[#27F53C]/10 px-4 py-1 font-semibold text-[#27F53C]">
                  {project.year}
                </span>
                <span className="inline-flex items-center gap-2 text-white">
                  View case study
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L12 4M12 4H6M12 4V10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#27F53C] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </article>
        ))}
      </div>
    </section>
  );
}
