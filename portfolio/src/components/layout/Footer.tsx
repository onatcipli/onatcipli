"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 border-t border-white/5">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[--bg-secondary] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-2xl font-bold text-gradient">JD</span>
            <p className="text-sm text-[--text-muted]">
              &copy; {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
          </div>

          {/* Built with */}
          <p className="text-sm text-[--text-muted] flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500" /> using Next.js & Framer Motion
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full border border-white/10 hover:border-[--accent-cyan]/50 hover:bg-[--accent-cyan]/10 transition-all group"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp
              size={20}
              className="text-[--text-muted] group-hover:text-[--accent-cyan] transition-colors"
            />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
