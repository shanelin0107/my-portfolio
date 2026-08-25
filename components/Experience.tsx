"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
  video?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Autism Today Foundation",
    role: "Digital Marketing Analyst",
    period: "Mar 2026 – Present",
    location: "United States",
    bullets: [
      "Automated weekly executive reporting by translating stakeholder requirements into a technical KPI framework using interactive Tableau dashboards.",
      "Reallocated campaign budgets by 15% after analyzing 50,000+ search query records using Python and SQL to identify key conversion trends and performance opportunities.",
      "Increased conversion rates from 2.1% to 3.4% and boosted impression share by ~18% over four months by presenting data-driven insights and strategy recommendations to leadership.",
    ],
    tags: ["Tableau", "Python", "SQL", "Marketing Analytics", "KPI Reporting"],
  },
  {
    company: "MuckRock | BU Spark!",
    role: "Student Data Analyst",
    period: "Sep 2025 – Dec 2025",
    location: "Boston, MA",
    bullets: [
      "Built reproducible Python and SQL data pipelines across 14+ unstructured financial reports, standardizing complex datasets into a unified schema for self-service querying.",
      "Delivered an interactive cloud dashboard displaying $400M+ in multi-year (FY2016–FY2024) program revenue metrics on cloud-based infrastructure, enabling seamless public and stakeholder access.",
    ],
    tags: ["Python", "SQL", "Datasette", "Data Pipelines", "Cloud Dashboard"],
  },
  {
    company: "Taiwan Semiconductor Manufacturing Corporation (TSMC)",
    role: "IT Data Analyst Intern",
    period: "Jul 2025 – Aug 2025",
    location: "Hsinchu, Taiwan",
    bullets: [
      "Optimized 8,600+ compliance records and saved 280 business days of processing time by gathering requirements from security stakeholders and designing a Python-based AI and LLM assisted classification workflow.",
      "Standardized data governance guidelines across multiple TSMC sites by collaborating cross-functionally to translate business requirements into technical data rules.",
      "Delivered real-time visibility into AI resource consumption and cost metrics by building interactive Superset dashboards for cross-functional leaders.",
    ],
    tags: ["Python", "Gemini API", "LLM", "Superset", "Data Governance"],
    video: "/tsmc_workflow.mp4",
  },
  {
    company: "Taiwan Institute for Sustainable Energy",
    role: "Data & Operations Analyst",
    period: "May 2024 – Aug 2024",
    location: "Taipei, Taiwan",
    bullets: [
      "Maintained 100% data integrity across high-volume customer registration records by establishing structured validation checks and verification protocols.",
      "Reduced stakeholder inquiry turnaround time from 30 to 10 minutes across 20–30+ requests per event by designing structured triage workflows and escalation pathways using Excel and Power BI.",
    ],
    tags: ["Excel", "Power BI", "Data Validation", "Operations"],
  },
];

function VideoModal({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-[#8b949e] hover:text-white transition-colors flex items-center gap-1.5 text-sm"
          >
            <X size={16} /> Close
          </button>
          <video
            src={src}
            controls
            autoPlay
            className="w-full rounded-xl border border-[#30363d]"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function VideoPreview({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Thumbnail strip — natural aspect ratio, click to open modal */}
      <div
        className="mt-5 rounded-lg overflow-hidden border border-[#30363d] cursor-pointer group/video relative"
        onClick={() => setOpen(true)}
      >
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          className="w-full"
          onMouseEnter={() => videoRef.current?.play().catch(() => {})}
          onMouseLeave={() => {
            if (videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
            }
          }}
        />
        <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <span className="flex items-center gap-2 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full group-hover/video:bg-[#38bdf8]/20 group-hover/video:text-[#38bdf8] transition-all duration-200">
            <span>▶</span> Click to watch full video
          </span>
        </div>
      </div>

      {open && <VideoModal src={src} onClose={() => setOpen(false)} />}
    </>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#38bdf8] text-sm font-mono mb-2 tracking-widest">03. experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Work History</h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 hover:border-[#38bdf8]/30 transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-white text-xl font-semibold">{exp.role}</h3>
                  <p className="text-[#38bdf8] font-medium mt-0.5">{exp.company}</p>
                </div>
                <div className="sm:text-right flex-shrink-0">
                  <p className="text-[#8b949e] text-sm">{exp.period}</p>
                  <p className="text-[#8b949e] text-sm">{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-[#8b949e] text-sm leading-relaxed">
                    <span className="text-[#38bdf8] mt-0.5 flex-shrink-0">▸</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-[#38bdf8]/10 text-[#38bdf8] text-xs rounded-full border border-[#38bdf8]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {exp.video && <VideoPreview src={exp.video} />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
