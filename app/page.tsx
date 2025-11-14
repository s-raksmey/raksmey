import { ContactSection } from "./components/contact-section";
import { HomeSection } from "./components/home-section";
import { ProjectsSection } from "./components/projects-section";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { SkillsSection } from "./components/skills-section";

export default function Home() {
  return (
    <div
      id="top"
      className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]"
    >
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-12 sm:px-8 md:px-10">
        <SiteHeader />
        <HomeSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <SiteFooter />
      </main>
    </div>
  );
}
