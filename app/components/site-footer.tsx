"use client";

import { motion } from "framer-motion";

export function SiteFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true, amount: 0.3 }}
      className="mt-16 rounded-3xl border px-6 py-6 text-sm shadow-md"
      style={{ backgroundColor: "var(--surface-elevated)", color: "var(--muted-foreground)" }}
    >
      <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p style={{ color: "var(--foreground)" }}>
          © {new Date().getFullYear()} Raksmey Sok. Crafted with intention in Phnom Penh.
        </p>
        <p>
          Available for select collaborations · <span style={{ color: "var(--accent)" }}>hello@raksmey.design</span>
        </p>
      </div>
    </motion.footer>
  );
}
