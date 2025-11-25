"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { Testimonial } from "@/types";
import { fadeInUp } from "@/lib/animations";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-[--accent-cyan] mb-2">
            Testimonials
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">
            What People Say
          </h3>
          <p className="text-[--text-secondary] max-w-2xl mx-auto">
            Feedback from colleagues and clients I&apos;ve had the pleasure to work with.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Quote icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-10">
            <Quote size={120} className="text-[--accent-cyan]" />
          </div>

          {/* Carousel container */}
          <div className="relative h-[400px] md:h-[320px] glass-card p-8 md:p-12">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-8 md:inset-12 flex flex-col justify-center"
              >
                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-center text-[--text-secondary] leading-relaxed mb-8">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center gap-3">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[--accent-cyan] to-[--accent-purple] p-0.5">
                    <div className="w-full h-full rounded-full bg-[--bg-secondary] flex items-center justify-center">
                      <span className="text-xl font-bold text-gradient">
                        {testimonials[current].author.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <p className="font-semibold text-white">
                        {testimonials[current].author}
                      </p>
                      {testimonials[current].linkedIn && (
                        <a
                          href={testimonials[current].linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[--text-muted] hover:text-[--accent-cyan] transition-colors"
                        >
                          <Linkedin size={16} />
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-[--text-muted]">
                      {testimonials[current].title} at {testimonials[current].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-white/10 hover:border-[--accent-cyan]/50 hover:bg-[--accent-cyan]/10 transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-gradient-to-r from-[--accent-cyan] to-[--accent-purple]"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full border border-white/10 hover:border-[--accent-cyan]/50 hover:bg-[--accent-cyan]/10 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
