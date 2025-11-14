"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const headerVariants = {
  hidden: { opacity: 0, y: -16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
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
      className="flex flex-col gap-6 border-b border-[color:var(--border)] pb-8 md:flex-row md:items-end md:justify-between"
    >
      <div className="flex flex-col gap-2">
        <Link
          href="#top"
          className="text-xl font-semibold text-[color:var(--foreground)] transition-colors hover:text-[color:var(--accent)]"
        >
          Raksmey Sok · Digital Product Designer
        </Link>
        <p className="max-w-xl text-sm text-[color:var(--muted-foreground)]">
          Partnering with purposeful teams to shape clear, resilient product experiences.
        </p>
      </div>
      <nav className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="transition-colors hover:text-[color:var(--accent)]">
            {item.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
