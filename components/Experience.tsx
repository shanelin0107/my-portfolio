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
    location: "Remote",
    bullets: [
      "Maintain interactive reporting dashboards in Looker Studio, monitoring traffic, conversion, and engagement KPIs across 4 channels—delivering validated, analysis-ready data for operational decision-making.",
      "Translate business requirements into technical specifications for agency and CMS partners, automating reporting workflows to reduce manual data entry and align outputs across cross-functional stakeholder groups.",
      "Develop Social SEO and campaign strategy across 3 platforms (Instagram, TikTok, LinkedIn), driving a 5% increase in website traffic by analyzing user behavior signals and optimizing channel discoverability.",
    ],
    tags: ["Looker Studio", "SQL", "SEO", "Analytics", "Reporting"],
  },
  {
    company: "Taiwan Semiconductor Manufacturing Corporation (TSMC)",
    role: "IT Data Security Analyst Intern",
    period: "Jul 2025 – Aug 2025",
    location: "Hsinchu, Taiwan",
    bullets: [
      "Built an automated Python pipeline using the Google Gemini API to extract and classify 8,600+ internal URLs/IPs—detecting 220 anomalous endpoints and saving ~280 business days vs. manual review.",
      "Built Superset BI dashboards consolidating token usage, budget exposure, and follow-up priority data to monitor pipeline data quality and surface insights for stakeholder decision-making.",
      "Translated policy requirements into technical classification strategies for global security and compliance teams, enabling scalable analytics rollout across all TSMC foundry sites.",
      "Automated evidence extraction from vendor certificate documents using an LLM-based workflow, streamlining key data processing steps and reducing manual compliance review time for the security team.",
    ],
    tags: ["Python", "Gemini API", "LLM", "Superset", "BI Dashboard", "Security Analytics"],
    video: "/tsmc_workflow.mp4",
  },
  {
    company: "Taiwan Institute for Sustainable Energy",
    role: "Data & Operations Analyst",
    period: "May 2024 – Aug 2024",
    location: "Taipei, Taiwan",
    bullets: [
      "Consolidated multi-source registration, invoicing, and participant records into structured data trackers, replacing manual spreadsheet workflows and enabling accurate cross-functional follow-up with 50+ partners.",
      "Maintained backend data accuracy across customer and participant records for a 15-person team, applying data quality protocols to support reliable operational reporting cycles.",
      "Reduced inquiry resolution time from ~30 to ~10 mins across 20–30+ cases per event by implementing standardized triage workflows—streamlining ad-hoc processes into repeatable operational systems.",
    ],
    tags: ["Python", "SQL", "ETL", "Data Quality", "Operations"],
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
