"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Building2 } from "lucide-react";
import { ExperienceItem } from "@/types";
import { fadeInUp, fadeInLeft, staggerContainer } from "@/lib/animations";

interface ExperienceProps {
  experience: ExperienceItem[];
}

export default function Experience({ experience }: ExperienceProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[--accent-purple]/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-[--accent-cyan] mb-2">
            Experience
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">
            Where I&apos;ve Worked
          </h3>
          <p className="text-[--text-secondary] max-w-2xl mx-auto">
            My professional journey through the mobile development landscape.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-0 md:left-1/2 top-0 w-px bg-gradient-to-b from-[--accent-cyan] via-[--accent-purple] to-[--accent-pink] -translate-x-1/2"
          />

          {/* Timeline Items */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {experience.map((item, index) => (
              <TimelineItem
                key={`${item.company}-${item.role}`}
                item={item}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  item,
  index,
  isLeft,
}: {
  item: ExperienceItem;
  index: number;
  isLeft: boolean;
}) {
  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "Present";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  return (
    <motion.div
      variants={fadeInLeft}
      className={`relative flex flex-col md:flex-row items-start gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[--accent-cyan] to-[--accent-purple] -translate-x-1/2 z-10 shadow-lg shadow-[--accent-cyan]/30">
        <div className="absolute inset-1 rounded-full bg-[--bg-primary]" />
      </div>

      {/* Content */}
      <div className={`flex-1 pl-8 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
        <motion.div
          whileHover={{ y: -4 }}
          className="gradient-border p-6 hover:shadow-lg hover:shadow-[--accent-cyan]/10 transition-all duration-300"
        >
          {/* Header */}
          <div className={`flex items-start gap-4 mb-4 ${isLeft ? "md:flex-row-reverse" : ""}`}>
            {/* Company Icon */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[--accent-cyan]/20 to-[--accent-purple]/20 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-6 h-6 text-[--accent-cyan]" />
            </div>

            <div className={`flex-1 ${isLeft ? "md:text-right" : ""}`}>
              <h4 className="text-xl font-bold text-white">{item.role}</h4>
              <p className="text-[--accent-cyan] font-medium">{item.company}</p>
            </div>
          </div>

          {/* Meta info */}
          <div className={`flex flex-wrap gap-4 mb-4 text-sm text-[--text-muted] ${isLeft ? "md:justify-end" : ""}`}>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              {formatDate(item.duration.start)} - {formatDate(item.duration.end)}
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              {item.location}
            </div>
          </div>

          {/* Description */}
          <p className="text-[--text-secondary] mb-4">{item.description}</p>

          {/* Achievements */}
          {item.achievements && item.achievements.length > 0 && (
            <ul className={`space-y-2 mb-4 ${isLeft ? "md:text-right" : ""}`}>
              {item.achievements.map((achievement, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-2 text-sm text-[--text-secondary] ${
                    isLeft ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[--accent-cyan] mt-1.5 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          )}

          {/* Technologies */}
          {item.technologies && item.technologies.length > 0 && (
            <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs bg-white/5 text-[--text-muted] border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}
