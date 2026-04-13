import { motion } from "framer-motion";
import { Brain, Database, LineChart, Code2 } from "lucide-react";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "30+", label: "Projects Delivered" },
  { value: "12", label: "Publications" },
  { value: "98%", label: "Model Accuracy" },
];

const highlights = [
  { icon: Brain, title: "Machine Learning", desc: "Deep learning, NLP, computer vision, and reinforcement learning" },
  { icon: Database, title: "Data Engineering", desc: "ETL pipelines, data warehousing, and real-time streaming" },
  { icon: LineChart, title: "Analytics", desc: "Statistical modeling, A/B testing, and causal inference" },
  { icon: Code2, title: "MLOps", desc: "Model deployment, monitoring, and CI/CD for ML systems" },
];

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">// ABOUT ME</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Turning data into <span className="text-gradient">decisions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            With a PhD in Computer Science and years of industry experience, I specialize in 
            building end-to-end machine learning solutions — from exploratory analysis to 
            production deployment at scale.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card/50 text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 gap-5">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl border border-border bg-card/30 hover:bg-card/60 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:glow-primary transition-shadow">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
