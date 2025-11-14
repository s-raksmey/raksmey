export function HomeSection() {
  return (
    <section className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
      <div className="space-y-6">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#27F53C]/50 bg-[#27F53C]/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-[#27F53C]">
          Portfolio
        </span>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Crafting immersive digital experiences with clarity and purpose.
          </h1>
          <p className="max-w-xl text-lg text-neutral-300">
            I’m Raksmey, a multidisciplinary designer and developer focused on building polished,
            accessible web products that deliver real value. From concept to launch, I bring a
            meticulous eye for detail and a passion for thoughtful storytelling.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-[#27F53C] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#1ed636]"
          >
            View featured work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#27F53C] hover:text-[#27F53C]"
          >
            Let’s collaborate
          </a>
        </div>
      </div>
      <div className="relative hidden md:block">
        <div className="absolute inset-0 -z-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 blur-2xl" />
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-[#27F53C]">Latest focus</p>
              <h2 className="text-2xl font-semibold text-white">Design Systems & Frontend Architecture</h2>
            </div>
            <p className="text-sm leading-relaxed text-neutral-300">
              Building scalable component libraries and cohesive brand experiences with modern tooling
              and rigorous accessibility standards.
            </p>
            <div className="grid gap-3 text-sm text-neutral-200">
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/60 px-4 py-3">
                <span className="text-neutral-400">Currently exploring</span>
                <span className="font-medium text-white">Next.js App Router</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/60 px-4 py-3">
                <span className="text-neutral-400">Favorite toolkit</span>
                <span className="font-medium text-white">Tailwind CSS + Radix</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
