import Link from "next/link";

import { siteConfig } from "@/config/site";

export default function Home() {
  const { links } = siteConfig;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-24 px-6 py-24 sm:px-12 lg:px-20">
        <section className="grid gap-6">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Portfolio Configuration
          </p>
          <div className="grid gap-4">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={links.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:opacity-90"
            >
              View résumé
            </Link>
            <Link
              href={links.email}
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Get in touch
            </Link>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-border bg-muted/40 p-8 backdrop-blur">
          <h2 className="text-xl font-semibold text-foreground">Site metadata</h2>
          <dl className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
            <div className="space-y-1">
              <dt className="font-medium text-foreground">Canonical URL</dt>
              <dd className="truncate" title={siteConfig.url}>
                {siteConfig.url}
              </dd>
            </div>
            <div className="space-y-1">
              <dt className="font-medium text-foreground">Open Graph image</dt>
              <dd className="truncate" title={siteConfig.ogImage}>
                {siteConfig.ogImage}
              </dd>
            </div>
            <div className="space-y-1 sm:col-span-2">
              <dt className="font-medium text-foreground">Keywords</dt>
              <dd className="flex flex-wrap gap-2">
                {siteConfig.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                  >
                    {keyword}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </section>

        <section className="grid gap-4">
          <h2 className="text-xl font-semibold text-foreground">Stay connected</h2>
          <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <Link
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-border bg-muted/20 px-5 py-4 transition-colors hover:bg-muted"
            >
              <span>GitHub</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-foreground">
                /raksmey
              </span>
            </Link>
            <Link
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-border bg-muted/20 px-5 py-4 transition-colors hover:bg-muted"
            >
              <span>LinkedIn</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-foreground">
                /in/raksmey
              </span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
