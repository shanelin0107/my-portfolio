"use client";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "SQL (MySQL)", "TypeScript", "R", "PHP"],
  },
  {
    category: "ML / AI",
    skills: ["pandas", "NumPy", "Scikit-learn", "TensorFlow", "LightGBM", "Google Gemini API"],
  },
  {
    category: "BI & Analytics",
    skills: ["Tableau (Salesforce Certified)", "Power BI", "Looker Studio", "Apache Superset", "Streamlit"],
  },
  {
    category: "Data Engineering",
    skills: ["Apache Airflow", "dbt", "ETL / Pipeline Development", "Snowflake", "MotherDuck", "Docker"],
  },
  {
    category: "Cloud & Databases",
    skills: ["Google Cloud Platform", "BigQuery", "AWS", "MySQL", "PostgreSQL"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-[#161b22]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#38bdf8] text-sm font-mono mb-2 tracking-widest">02. skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Tech Stack</h2>
        </motion.div>

        <div className="space-y-8">
          {skillGroups.map(({ category, skills }, groupIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
            >
              <p className="text-[#8b949e] text-xs font-mono uppercase tracking-widest mb-3">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-[#0d1117] border border-[#30363d] text-[#e6edf3] text-sm rounded-md hover:border-[#38bdf8]/50 hover:text-[#38bdf8] transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
