"use client";

import { motion } from "framer-motion";

export function SiteFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className="mt-12 border-t border-[color:var(--border)] pt-6 text-sm text-[color:var(--muted-foreground)]"
    >
      <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="text-[color:var(--foreground)]">
          © {new Date().getFullYear()} Raksmey Sok. Crafted with intention in Phnom Penh.
        </p>
        <p>
          Available for select collaborations · <span className="text-[color:var(--accent)]">hello@raksmey.design</span>
        </p>
      </div>
    </motion.footer>
  );
}
