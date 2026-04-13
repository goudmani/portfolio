import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Neural Style Transfer Engine",
    desc: "Real-time artistic style transfer using adaptive instance normalization. Achieved 60fps on consumer GPUs with custom CUDA kernels.",
    tags: ["PyTorch", "CUDA", "FastAPI", "React"],
    category: "Deep Learning",
    color: "primary",
  },
  {
    title: "Fraud Detection Pipeline",
    desc: "End-to-end ML pipeline detecting fraudulent transactions with 99.2% precision. Processes 10M+ events daily with sub-second latency.",
    tags: ["XGBoost", "Spark", "Kafka", "AWS"],
    category: "MLOps",
    color: "accent",
  },
  {
    title: "Clinical NLP System",
    desc: "Transformer-based system extracting medical entities from clinical notes. Deployed across 3 hospital networks serving 500+ clinicians.",
    tags: ["Transformers", "spaCy", "Docker", "GCP"],
    category: "NLP",
    color: "primary",
  },
  {
    title: "Supply Chain Optimizer",
    desc: "Reinforcement learning agent optimizing logistics routes, reducing delivery costs by 23% and carbon emissions by 15%.",
    tags: ["Ray RLlib", "Python", "PostgreSQL", "Grafana"],
    category: "Reinforcement Learning",
    color: "accent",
  },
  {
    title: "Time Series Forecasting Platform",
    desc: "AutoML platform for multivariate time series forecasting. Supports 50+ models with automatic feature engineering and hyperparameter tuning.",
    tags: ["Prophet", "LSTM", "Streamlit", "MLflow"],
    category: "Analytics",
    color: "primary",
  },
  {
    title: "Satellite Image Segmentation",
    desc: "U-Net based model for land use classification from satellite imagery. Achieves 94% IoU across 12 land cover classes.",
    tags: ["PyTorch", "Rasterio", "GDAL", "AWS S3"],
    category: "Computer Vision",
    color: "accent",
  },
];

const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">// PORTFOLIO</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative p-6 rounded-2xl border border-border bg-card/30 hover:bg-card/60 hover:border-primary/20 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="font-mono text-xs">
                    {project.category}
                  </Badge>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.button whileHover={{ scale: 1.1 }} className="p-1.5 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="w-4 h-4" />
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} className="p-1.5 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors flex items-center gap-1">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{project.desc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-secondary/60 text-xs font-mono text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
