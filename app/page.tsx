import { ContactSection } from "./components/contact-section";
import { HomeSection } from "./components/home-section";
import { ProjectsSection } from "./components/projects-section";
import { SiteFooter } from "./components/site-footer";
import { SkillsSection } from "./components/skills-section";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="mx-auto h-full w-full max-w-6xl bg-[radial-gradient(circle_at_top,_rgba(244,201,125,0.12),_transparent_60%)]" />
      </div>
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-24 px-6 py-16 sm:px-10 lg:px-12">
        <HomeSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <div className="mx-auto w-full max-w-5xl px-6 pb-12 sm:px-10 lg:px-12">
        <SiteFooter />
      </div>
    </div>
  );
}
