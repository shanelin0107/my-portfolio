"use client";
import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/shanelin0107",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chinghsuanlin/",
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: "mailto:schlin590@gmail.com",
    icon: Mail,
  },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#30363d_1px,transparent_1px),linear-gradient(to_bottom,#30363d_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.15]" />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-[#38bdf8]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-[#818cf8]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#38bdf8] text-xs sm:text-sm font-mono mb-5 tracking-widest uppercase"
        >
          Data Analyst · Data Engineer · Data Scientist
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05]"
        >
          Turning messy data into
          <br className="hidden sm:block" />{" "}
          <span className="bg-gradient-to-r from-[#38bdf8] to-[#818cf8] bg-clip-text text-transparent">
            decisions people act on
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#8b949e] text-base md:text-lg max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          I build data pipelines, train predictive models, and turn the results
          into dashboards and tools that people use at work. Recent projects
          include an LLM classification workflow at TSMC and a real-time Kafka
          stack.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[#8b949e] text-sm mb-12"
        >
          Ching-Hsuan &ldquo;Shawn&rdquo; Lin · MSBA candidate, Boston University
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-8"
        >
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#8b949e] hover:text-[#38bdf8] transition-colors duration-200 group"
            >
              <Icon size={18} />
              <span className="text-sm">{label}</span>
            </a>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 text-[#8b949e] hover:text-[#38bdf8] transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
