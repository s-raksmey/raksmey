export function SiteFooter() {
  return (
    <footer className="border-t border-border pt-6 text-sm text-muted-foreground">
      <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="text-foreground">
          © {new Date().getFullYear()} Raksmey Sok. Crafted in Phnom Penh.
        </p>
        <p>
          Email{" "}
          <a className="text-accent" href="mailto:hello@raksmey.design">
            hello@raksmey.design
          </a>
        </p>
      </div>
    </footer>
  );
}