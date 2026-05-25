"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const links = [
  {
    label: "schlin590@gmail.com",
    href: "mailto:schlin590@gmail.com",
    icon: Mail,
    description: "Drop me an email",
  },
  {
    label: "github.com/shanelin0107",
    href: "https://github.com/shanelin0107",
    icon: GithubIcon,
    description: "Check out my code",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chinghsuanlin/",
    icon: LinkedinIcon,
    description: "Connect professionally",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-[#161b22]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#38bdf8] text-sm font-mono mb-2 tracking-widest">06. contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-[#8b949e] text-base mb-12 leading-relaxed">
            I&apos;m currently open to full-time roles and internships in data analytics,
            data engineering, and data science. Feel free to reach out — I&apos;ll get back to you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-3 gap-4"
        >
          {links.map(({ label, href, icon: Icon, description }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 bg-[#0d1117] border border-[#30363d] rounded-xl p-6 hover:border-[#38bdf8]/40 hover:bg-[#0d1117]/80 transition-all duration-300 group"
            >
              <Icon
                size={24}
                className="text-[#8b949e] group-hover:text-[#38bdf8] transition-colors duration-200"
              />
              <p className="text-[#e6edf3] text-sm font-medium">{description}</p>
              <p className="text-[#8b949e] text-xs truncate max-w-full">{label}</p>
            </a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[#8b949e] text-xs mt-16"
        >
          Built with Next.js &amp; Tailwind CSS · Deployed on Vercel
        </motion.p>
      </div>
    </section>
  );
}
