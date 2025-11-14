"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { ThemeToggle } from "./theme-toggle";

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Expertise", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-6 rounded-3xl border p-6 backdrop-blur-sm md:flex-row md:items-center md:justify-between"
      style={{ backgroundColor: "var(--surface-elevated)" }}
    >
      <div className="flex flex-col gap-2">
        <Link href="#top" className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>
          Raksmey Sok · Digital Product Designer
        </Link>
        <p className="max-w-lg text-sm" style={{ color: "var(--muted-foreground)" }}>
          Partnering with ambitious teams to choreograph meaningful interactions across product ecosystems.
        </p>
      </div>
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <nav
          className="flex items-center gap-3 rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.3em]"
          style={{ backgroundColor: "var(--surface-muted)", color: "var(--muted-foreground)" }}
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="accent-link">
              {item.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </motion.header>
  );
}
