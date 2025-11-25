"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HeroData } from "@/types";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface HeroProps {
  data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = data.titles[titleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayedText === currentTitle) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % data.titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentTitle.substring(0, displayedText.length - 1)
          : currentTitle.substring(0, displayedText.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, titleIndex, data.titles]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        {/* Greeting */}
        <motion.p
          variants={fadeInUp}
          className="text-[--accent-cyan] text-lg md:text-xl mb-4 font-medium"
        >
          {data.greeting}
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="text-gradient">{data.name}</span>
        </motion.h1>

        {/* Animated Titles */}
        <motion.div
          variants={fadeInUp}
          className="h-12 md:h-16 mb-8 flex items-center justify-center"
        >
          <span className="text-2xl md:text-4xl font-medium text-[--text-secondary]">
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="text-[--accent-purple]"
            >
              |
            </motion.span>
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-[--text-secondary] max-w-2xl mx-auto mb-12"
        >
          {data.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href={data.ctaPrimary.href}
            className="group relative px-8 py-4 rounded-full font-medium text-white overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Gradient background */}
            <span className="absolute inset-0 bg-gradient-to-r from-[--accent-cyan] via-[--accent-purple] to-[--accent-pink]" />
            {/* Shine effect on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative">{data.ctaPrimary.text}</span>
          </motion.a>

          <motion.a
            href={data.ctaSecondary.href}
            className="px-8 py-4 rounded-full font-medium text-white border border-white/20 hover:border-[--accent-cyan]/50 hover:bg-white/5 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {data.ctaSecondary.text}
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-[--text-muted] hover:text-[--accent-cyan] transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-[--accent-cyan] animate-pulse" />
      <div className="absolute top-1/3 right-20 w-3 h-3 rounded-full bg-[--accent-purple] animate-pulse" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-[--accent-pink] animate-pulse" style={{ animationDelay: "1s" }} />
    </section>
  );
}
