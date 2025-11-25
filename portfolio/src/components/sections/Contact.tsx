"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Calendar, Github, Linkedin, Twitter, Copy, Check } from "lucide-react";
import { ContactData } from "@/types";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

interface ContactProps {
  data: ContactData;
}

export default function Contact({ data }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(data.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormState({ name: "", email: "", message: "" });
    alert("Message sent! (Demo mode - configure form endpoint for real submissions)");
  };

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-[--accent-cyan]/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-[--accent-cyan] mb-2">
            Contact
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">
            {data.cta?.title || "Get In Touch"}
          </h3>
          <p className="text-[--text-secondary] max-w-2xl mx-auto">
            {data.cta?.description || "Have a project in mind? Let's talk about it."}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Left - Contact Info */}
          <motion.div variants={fadeInLeft} className="space-y-8">
            {/* Email Card */}
            <div className="gradient-border p-6 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[--accent-cyan]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[--accent-cyan]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <p className="text-[--text-secondary] break-all">{data.email}</p>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                  title="Copy email"
                >
                  {copied ? (
                    <Check size={18} className="text-green-500" />
                  ) : (
                    <Copy size={18} className="text-[--text-muted]" />
                  )}
                </button>
              </div>
            </div>

            {/* Calendar Card */}
            {data.calendlyUrl && (
              <div className="gradient-border p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[--accent-purple]/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-[--accent-purple]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">Schedule a Call</h4>
                    <p className="text-[--text-secondary] text-sm mb-3">
                      Book a 30-minute intro call
                    </p>
                    <a
                      href={data.calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[--accent-purple] hover:text-[--accent-cyan] transition-colors"
                    >
                      Open Calendar
                      <span className="text-xs">→</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Social Links */}
            <div>
              <h4 className="text-sm uppercase tracking-widest text-[--text-muted] mb-4">
                Follow Me
              </h4>
              <div className="flex gap-3">
                {Object.entries(data.socials).map(([platform, url]) => {
                  if (!url) return null;
                  const Icon = socialIcons[platform as keyof typeof socialIcons];
                  if (!Icon) return null;

                  return (
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-[--text-muted] hover:text-white hover:border-[--accent-cyan]/50 hover:bg-[--accent-cyan]/10 transition-all"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div variants={fadeInRight}>
            <form onSubmit={handleSubmit} className="gradient-border p-6 md:p-8 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[--text-secondary] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[--text-muted] focus:outline-none focus:border-[--accent-cyan]/50 focus:bg-white/[0.07] transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[--text-secondary] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[--text-muted] focus:outline-none focus:border-[--accent-cyan]/50 focus:bg-white/[0.07] transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[--text-secondary] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[--text-muted] focus:outline-none focus:border-[--accent-cyan]/50 focus:bg-white/[0.07] transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-medium text-white bg-gradient-to-r from-[--accent-cyan] to-[--accent-purple] hover:shadow-lg hover:shadow-[--accent-cyan]/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
