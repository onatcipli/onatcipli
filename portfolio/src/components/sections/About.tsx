"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Download } from "lucide-react";
import { AboutData } from "@/types";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

interface AboutProps {
  data: AboutData;
}

export default function About({ data }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left - Avatar & Stats */}
          <motion.div variants={fadeInLeft} className="space-y-8">
            {/* Avatar */}
            <div className="relative w-64 h-64 mx-auto md:mx-0">
              {/* Gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[--accent-cyan] via-[--accent-purple] to-[--accent-pink] p-1 animate-spin-slow" style={{ animationDuration: "8s" }}>
                <div className="w-full h-full rounded-full bg-[--bg-primary]" />
              </div>
              {/* Avatar placeholder */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[--accent-cyan]/20 to-[--accent-purple]/20 flex items-center justify-center">
                <span className="text-6xl font-bold text-gradient">
                  {data.bio.charAt(0)}
                </span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {data.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="glass-card p-4 text-center group hover:border-[--accent-cyan]/30 transition-colors"
                >
                  <div className="text-3xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[--text-muted]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div variants={fadeInRight} className="space-y-6">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-[--accent-cyan] mb-2">
                About Me
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Crafting Digital Experiences
              </h3>
            </div>

            <p className="text-[--text-secondary] text-lg leading-relaxed">
              {data.bio}
            </p>

            {data.bioExtended && (
              <p className="text-[--text-muted] leading-relaxed">
                {data.bioExtended}
              </p>
            )}

            {/* Location & Availability */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-[--text-secondary]">
                <MapPin size={18} className="text-[--accent-cyan]" />
                {data.location}
              </div>
              {data.availability && (
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-400 text-sm">{data.availability}</span>
                </div>
              )}
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <h4 className="text-sm uppercase tracking-widest text-[--text-muted]">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {data.techStack.map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="px-4 py-2 rounded-full text-sm font-medium glass-card hover:border-[--accent-cyan]/30 transition-all cursor-default"
                    style={{
                      borderColor: tech.color ? `${tech.color}30` : undefined,
                    }}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Resume Button */}
            {data.resumeUrl && (
              <motion.a
                href={data.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white border border-[--accent-cyan]/30 hover:bg-[--accent-cyan]/10 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={18} className="group-hover:animate-bounce" />
                Download Resume
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
