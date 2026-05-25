"use client";
import { motion } from "framer-motion";

const education = [
  {
    school: "Boston University, Questrom School of Business",
    degree: "M.S. in Business Analytics",
    period: "Sep 2024 – Jan 2026",
    highlights: [
      "Predictive modeling, machine learning, and statistical analysis",
      "Cloud data architecture — AWS, GCP, Snowflake",
      "Data engineering with Airflow, dbt, and BI tooling",
    ],
    accent: "#38bdf8",
  },
  {
    school: "Baruch College, Zicklin School of Business",
    degree: "B.B.A. in Computer Information Systems  ·  Minor: Economics",
    period: "Aug 2019 – May 2023",
    highlights: [
      "Systems analysis, database design, and software development",
      "Business intelligence and information management",
      "Economics foundations for data-driven decision-making",
    ],
    accent: "#818cf8",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#38bdf8] text-sm font-mono mb-2 tracking-widest">05. education</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Background</h2>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 transition-colors duration-300"
              style={{ ["--accent" as string]: edu.accent }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                <div>
                  <h3 className="text-white text-xl font-semibold">{edu.school}</h3>
                  <p className="font-medium mt-0.5" style={{ color: edu.accent }}>
                    {edu.degree}
                  </p>
                </div>
                <p className="text-[#8b949e] text-sm sm:text-right flex-shrink-0">{edu.period}</p>
              </div>

              <ul className="space-y-2">
                {edu.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-[#8b949e] text-sm">
                    <span style={{ color: edu.accent }} className="flex-shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
