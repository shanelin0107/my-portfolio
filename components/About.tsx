"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "6+", label: "ML Projects" },
  { value: "3", label: "Cloud Platforms" },
  { value: "8 yrs", label: "Volleyball" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#38bdf8] text-sm font-mono mb-2 tracking-widest">01. about me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-[#8b949e] leading-relaxed"
          >
            <p>
              I&apos;m a data analyst and data engineer currently pursuing my{" "}
              <span className="text-[#e6edf3]">Master of Science in Business Analytics at Boston University</span>.
              My work sits at the intersection of engineering and insight — I care about
              building systems that actually work, not just demos.
            </p>
            <p>
              At <span className="text-[#e6edf3]">TSMC</span>, I developed an LLM-based cybersecurity
              tool to detect unregistered SaaS applications, eliminating approximately{" "}
              <span className="text-[#38bdf8] font-medium">200 business days</span> of manual review effort.
              That experience shaped how I think about AI: it should solve real operational problems at scale.
            </p>
            <p>
              Outside of data, I&apos;ve spent 8 years competing in volleyball — including captaining
              a team. The sport taught me how to read patterns under pressure and lead when it counts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 text-center"
                >
                  <p className="text-2xl font-bold text-[#38bdf8]">{value}</p>
                  <p className="text-[#8b949e] text-sm mt-1">{label}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <p className="text-[#8b949e] text-sm font-mono mb-3 text-[#38bdf8]">Currently interested in</p>
              <ul className="space-y-2 text-[#8b949e] text-sm">
                {[
                  "Time series & demand forecasting",
                  "LLM applications in enterprise",
                  "Cloud-native data pipelines",
                  "Sports analytics",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-[#38bdf8]">▸</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
