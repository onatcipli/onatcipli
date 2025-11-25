"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Star, Apple, Smartphone } from "lucide-react";
import { MergedAppData } from "@/types";
import { fadeInUp, staggerContainer, cardHover } from "@/lib/animations";
import Image from "next/image";

interface PortfolioProps {
  apps: MergedAppData[];
}

export default function Portfolio({ apps }: PortfolioProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filteredApps = filter === "featured"
    ? apps.filter(app => app.featured)
    : apps;

  return (
    <section id="portfolio" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-[--accent-cyan] mb-2">
            Portfolio
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">
            Apps I&apos;ve Built
          </h3>
          <p className="text-[--text-secondary] max-w-2xl mx-auto">
            A collection of mobile applications I&apos;ve developed, from concept to App Store.
          </p>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-2 mt-8">
            {(["all", "featured"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === tab
                    ? "bg-gradient-to-r from-[--accent-cyan] to-[--accent-purple] text-white"
                    : "text-[--text-secondary] hover:text-white border border-white/10 hover:border-[--accent-cyan]/30"
                }`}
              >
                {tab === "all" ? "All Apps" : "Featured"}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Apps Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredApps.map((app, index) => (
            <AppCard key={app.appId} app={app} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AppCard({ app, index }: { app: MergedAppData; index: number }) {
  const storeData = app.storeData;

  return (
    <motion.div
      variants={fadeInUp}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group"
    >
      <motion.div
        variants={cardHover}
        className="gradient-border p-6 h-full flex flex-col"
      >
        {/* App Header */}
        <div className="flex items-start gap-4 mb-4">
          {/* App Icon */}
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-[--accent-cyan]/20 to-[--accent-purple]/20 flex-shrink-0 group-hover:shadow-lg group-hover:shadow-[--accent-cyan]/20 transition-shadow">
            {storeData?.artworkUrl100 ? (
              <Image
                src={storeData.artworkUrl100}
                alt={storeData.trackName}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-[--accent-cyan]" />
              </div>
            )}
          </div>

          {/* App Info */}
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-lg truncate group-hover:text-[--accent-cyan] transition-colors">
              {storeData?.trackName || `App ${app.appId}`}
            </h4>
            {storeData && (
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={14} fill="currentColor" />
                  <span className="text-sm">
                    {storeData.averageUserRating?.toFixed(1) || "N/A"}
                  </span>
                </div>
                <span className="text-[--text-muted] text-sm">
                  ({formatNumber(storeData.userRatingCount)} reviews)
                </span>
              </div>
            )}
          </div>

          {/* Platform Badge */}
          <div className="flex-shrink-0">
            {app.platform === "ios" || app.platform === "both" ? (
              <Apple size={20} className="text-[--text-muted]" />
            ) : (
              <Smartphone size={20} className="text-[--text-muted]" />
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-[--text-secondary] text-sm line-clamp-2 mb-4 flex-1">
          {storeData?.description || "Mobile application"}
        </p>

        {/* Role & Category */}
        <div className="flex flex-wrap gap-2 mb-4">
          {app.role && (
            <span className="px-3 py-1 rounded-full text-xs bg-[--accent-cyan]/10 text-[--accent-cyan] border border-[--accent-cyan]/20">
              {app.role}
            </span>
          )}
          {storeData?.primaryGenreName && (
            <span className="px-3 py-1 rounded-full text-xs bg-[--accent-purple]/10 text-[--accent-purple] border border-[--accent-purple]/20">
              {storeData.primaryGenreName}
            </span>
          )}
          {storeData?.formattedPrice && (
            <span className="px-3 py-1 rounded-full text-xs bg-white/5 text-[--text-secondary] border border-white/10">
              {storeData.formattedPrice}
            </span>
          )}
        </div>

        {/* Technologies */}
        {app.technologies && app.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {app.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-xs text-[--text-muted] bg-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Highlights */}
        {app.highlights && app.highlights.length > 0 && (
          <div className="space-y-1 mb-4">
            {app.highlights.slice(0, 2).map((highlight, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-[--text-secondary]">
                <span className="w-1 h-1 rounded-full bg-[--accent-cyan]" />
                {highlight}
              </div>
            ))}
          </div>
        )}

        {/* App Store Link */}
        {storeData?.trackViewUrl && (
          <a
            href={storeData.trackViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 hover:bg-[--accent-cyan]/10 border border-white/10 hover:border-[--accent-cyan]/30 transition-all text-sm font-medium group/link"
          >
            <Apple size={16} />
            View on App Store
            <ExternalLink
              size={14}
              className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all"
            />
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}

function formatNumber(num: number): string {
  if (!num) return "0";
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
}
