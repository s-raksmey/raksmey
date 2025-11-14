export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/10 pt-10 text-sm text-neutral-400">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-neutral-300">
          © {new Date().getFullYear()} Raksmey. Crafted with intention in Phnom Penh.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-white">
          <a className="hover:text-[#27F53C]" href="#projects">
            Projects
          </a>
          <a className="hover:text-[#27F53C]" href="#skills">
            Skills
          </a>
          <a className="hover:text-[#27F53C]" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
