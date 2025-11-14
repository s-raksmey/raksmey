import { ContactSection } from "./components/contact-section";
import { HomeSection } from "./components/home-section";
import { ProjectsSection } from "./components/projects-section";
import { SiteFooter } from "./components/site-footer";
import { SkillsSection } from "./components/skills-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 py-16 sm:px-10 md:px-16 lg:px-20">
        <HomeSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <SiteFooter />
      </main>
    </div>
  );
}
