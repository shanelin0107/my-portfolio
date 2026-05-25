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
          className="text-[#38bdf8] text-sm font-mono mb-4 tracking-widest uppercase"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight"
        >
          Shawn Lin
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium text-[#8b949e] mb-8"
        >
          Data Analyst · Data Engineer · Data Scientist
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[#8b949e] text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          MSBA candidate at Boston University. I build end-to-end data pipelines,
          train predictive models, and transform raw datasets into decisions that matter.
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
