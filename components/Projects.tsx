"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects, categories, type Category } from "@/data/projects";

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasMedia = !!(project.image || project.video);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-[#0d1117] border border-[#30363d] rounded-xl overflow-hidden flex flex-col hover:border-[#38bdf8]/40 transition-colors duration-300 group"
    >
      {/* Cover area */}
      <div className="relative w-full h-44 bg-[#161b22] overflow-hidden flex-shrink-0">

        {/* Static image — fades out on hover when a video is present */}
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={`object-cover object-top transition-all duration-500 ${
              project.video
                ? "group-hover:opacity-0"
                : "group-hover:scale-105"
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized={project.image.startsWith("http")}
          />
        )}

        {/* Video — always rendered when present; cross-fades with image on hover */}
        {project.video && (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              project.image ? "opacity-0 group-hover:opacity-100" : "opacity-100"
            }`}
          />
        )}

        {/* Tint — keeps light dashboards/diagrams from glaring against the dark theme; lifts on hover */}
        {hasMedia && (
          <div className="absolute inset-0 bg-[#0d1117]/45 group-hover:bg-[#0d1117]/10 transition-colors duration-500 pointer-events-none" />
        )}

        {/* Placeholder — shown only when neither image nor video is set */}
        {!hasMedia && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#1c2128_25%,#0d1117_50%,#1c2128_75%)]" />
            <div className="relative text-center px-4">
              <p className="text-[#30363d] text-xs font-mono mb-1">screenshot coming soon</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#38bdf8]/50 text-xs hover:text-[#38bdf8] transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                View on GitHub →
              </a>
            </div>
          </div>
        )}

        {/* "Hover to play" badge — visible only on cards with a video */}
        {project.video && (
          <div className="absolute top-2 left-2 z-10 group-hover:opacity-0 transition-opacity duration-300">
            <span className="flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-full">
              <span className="text-[#38bdf8]">▶</span> hover to play
            </span>
          </div>
        )}

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0d1117] to-transparent pointer-events-none" />
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="px-2.5 py-1 bg-[#38bdf8]/10 text-[#38bdf8] text-xs rounded-full border border-[#38bdf8]/20">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2.5 py-1 bg-[#818cf8]/10 text-[#818cf8] text-xs rounded-full border border-[#818cf8]/20">
                Featured
              </span>
            )}
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b949e] hover:text-[#38bdf8] transition-colors"
            aria-label="GitHub repository"
          >
            <GithubIcon size={17} />
          </a>
        </div>

        <h3 className="text-white font-semibold text-base mb-2 group-hover:text-[#38bdf8] transition-colors duration-200 leading-snug">
          {project.title}
        </h3>

        <p className="text-[#8b949e] text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-[#161b22] text-[#8b949e] text-xs rounded border border-[#30363d]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#38bdf8] text-sm hover:gap-2.5 transition-all duration-200"
          >
            View on GitHub <ExternalLink size={12} />
          </a>

          {project.demo && (
            <a
              href={project.demo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#818cf8] text-sm hover:gap-2.5 transition-all duration-200"
            >
              {project.demo.label} <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-28 px-6 bg-[#161b22]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#38bdf8] text-sm font-mono mb-2 tracking-widest">04. projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Things I&apos;ve Built</h2>
          <p className="text-[#8b949e] text-sm mb-8">
            {projects.length} projects across ML, analytics, and data engineering — every one of them shipped end to end.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-[#38bdf8] text-[#0d1117]"
                  : "bg-[#0d1117] border border-[#30363d] text-[#8b949e] hover:border-[#38bdf8]/50 hover:text-[#e6edf3]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/shanelin0107?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#8b949e] hover:text-[#38bdf8] text-sm transition-colors"
          >
            See all projects on GitHub <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
