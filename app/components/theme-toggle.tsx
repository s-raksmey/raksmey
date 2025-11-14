"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileTap={{ scale: 0.96 }}
      className="theme-toggle group relative inline-flex items-center gap-3 rounded-full px-5 py-2 text-sm font-medium shadow-sm"
      aria-label="Toggle color theme"
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="absolute text-base"
          >
            {isDark ? "🌙" : "🌞"}
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="theme-toggle-label font-semibold uppercase tracking-[0.2em] text-[0.65rem]">
        {isDark ? "Dark" : "Light"}
      </span>
    </motion.button>
  );
}
