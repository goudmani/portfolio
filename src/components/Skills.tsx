import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "R", level: 80 },
      { name: "SQL", level: 90 },
      { name: "Julia", level: 60 },
    ],
  },
  {
    title: "ML / DL",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "Scikit-learn", level: 95 },
      { name: "Hugging Face", level: 80 },
    ],
  },
  {
    title: "Data & Cloud",
    skills: [
      { name: "Spark", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Docker", level: 85 },
      { name: "Airflow", level: 75 },
    ],
  },
  {
    title: "Visualization",
    skills: [
      { name: "Matplotlib", level: 90 },
      { name: "Plotly", level: 85 },
      { name: "Tableau", level: 75 },
      { name: "D3.js", level: 65 },
    ],
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

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card/30"
            >
              <h3 className="font-mono text-sm text-primary mb-6 tracking-wider">{cat.title}</h3>
              <div className="space-y-5">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: ci * 0.1 + si * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
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
