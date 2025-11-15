export function SiteFooter() {
  return (
    <footer className="border-t border-[color:rgba(247,245,239,0.12)] pt-10 text-sm text-muted-foreground">
      <div className="grid gap-6 sm:grid-cols-2 sm:items-start">
        <div className="space-y-3">
          <p className="section-eyebrow text-accent">Raksmey Sok</p>
          <p className="text-base text-foreground">
            Designing calm, enduring digital experiences with teams across the globe.
          </p>
          <p>
            Email{" "}
            <a className="text-accent hover:text-foreground" href="mailto:hello@raksmey.design">
              hello@raksmey.design
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end sm:text-right">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:rgba(247,245,239,0.5)]">Stay connected</p>
          <div className="flex flex-wrap justify-start gap-3 sm:justify-end">
            <a className="button-secondary rounded-full px-4 py-2" href="https://www.linkedin.com" rel="noreferrer">
              LinkedIn
            </a>
            <a className="button-secondary rounded-full px-4 py-2" href="https://dribbble.com" rel="noreferrer">
              Dribbble
            </a>
            <a className="button-secondary rounded-full px-4 py-2" href="https://www.behance.net" rel="noreferrer">
              Behance
            </a>
          </div>
          <p className="text-xs text-[color:rgba(247,245,239,0.5)]">
            © {new Date().getFullYear()} Raksmey Sok. Based in Phnom Penh.
          </p>
        </div>
      </div>
    </footer>
  );
}