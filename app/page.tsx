import { ContactSection } from "./components/contact-section";
import { HomeSection } from "./components/home-section";
import { ProjectsSection } from "./components/projects-section";
import { SiteFooter } from "./components/site-footer";
import { SkillsSection } from "./components/skills-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-(--background) text-[color:var(--foreground)]">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-16 px-6 py-12 sm:px-8">
        <HomeSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <div className="mx-auto w-full max-w-3xl px-6 pb-12 sm:px-8">
        <SiteFooter />
      </div>
    </div>
  );
}
