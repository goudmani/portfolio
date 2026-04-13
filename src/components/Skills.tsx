import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    icon: "⟨/⟩",
    skills: ["Python", "R", "SQL", "Julia", "Bash"],
  },
  {
    title: "ML / Deep Learning",
    icon: "🧠",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "XGBoost"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "BigQuery"],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Airflow"],
  },
  {
    title: "Data Engineering",
    icon: "⚙️",
    skills: ["Spark", "Kafka", "dbt", "Pandas", "Polars"],
  },
  {
    title: "Visualization",
    icon: "📊",
    skills: ["Matplotlib", "Plotly", "Tableau", "D3.js", "Streamlit"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">// TECH STACK</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & <span className="text-gradient">Tools</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              className="group p-6 rounded-2xl border border-border bg-card/30 hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-mono text-sm text-primary tracking-wider">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: ci * 0.08 + si * 0.05 }}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary/80 text-foreground border border-border hover:border-primary/40 hover:bg-primary/10 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
