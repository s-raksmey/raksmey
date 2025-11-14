"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
      style={{
        backgroundColor: "var(--surface-elevated)",
        borderColor: "var(--border)",
        boxShadow: "0 25px 70px rgba(0, 0, 0, 0.45)",
      }}
    >
      <div className="flex flex-col gap-2">
        <Link
          href="#top"
          className="text-lg font-semibold"
          style={{ color: "var(--accent)" }}
        >
          Raksmey Sok · Digital Product Designer
        </Link>
        <p className="max-w-lg text-sm" style={{ color: "var(--muted-foreground)" }}>
          Partnering with ambitious teams to choreograph meaningful interactions across product ecosystems.
        </p>
      </div>
      <div className="flex w-full flex-col items-start gap-4 sm:w-auto sm:flex-row sm:items-center">
        <nav
          className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-full border px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.3em] sm:w-auto"
          style={{
            backgroundColor: "var(--surface-muted)",
            color: "var(--muted-foreground)",
            borderColor: "var(--border)",
          }}
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="accent-link">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
