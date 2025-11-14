import { ContactSection } from "./components/contact-section";
import { HomeSection } from "./components/home-section";
import { ProjectsSection } from "./components/projects-section";
import { SiteFooter } from "./components/site-footer";
import { SkillsSection } from "./components/skills-section";
import { SiteHeader } from "./components/site-header";

export default function Home() {
  return (
    <div
      id="top"
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-[-10%] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full blur-3xl"
          style={{ backgroundColor: "var(--surface-subtle)" }}
        />
        <div
          className="absolute right-[5%] top-1/3 h-[18rem] w-[18rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle at top, var(--accent) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-[-15%] left-[8%] h-[28rem] w-[28rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle at bottom, var(--accent) 0%, transparent 70%)" }}
        />
      </div>
      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-12 sm:px-10 md:px-16 lg:px-20">
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
