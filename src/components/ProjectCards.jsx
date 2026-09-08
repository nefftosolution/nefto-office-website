import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ProjectCards = ({ projects = [], setSelected }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
          onClick={() => setSelected(project)}
          className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 transition-all duration-500 bg-white/5"
        >

          {/* ================= IMAGE ================= */}
          <div className="h-80 overflow-hidden relative">

            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover scale-110 group-hover:scale-125 transition duration-700 ease-out"
            />

            {/* DARK GRADIENT */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
          </div>

          {/* ================= CONTENT ================= */}
          <div className="absolute bottom-0 w-full">

            <motion.div
              whileHover={{ y: -2 }}
              className="p-5 flex items-center justify-between gap-4"
            >
              {/* TEXT */}
              <div className="space-y-1">

                <p className="text-[10px] text-primary uppercase tracking-[0.25em]">
                  {project.category}
                </p>

                <h3 className="text-lg font-bold text-white leading-snug">
                  {project.title}
                </h3>

                <p className="text-white/50 text-xs line-clamp-1">
                  {project.desc || project.subtitle}
                </p>

              </div>

            </motion.div>
          </div>
        </motion.div>
      ))}

    </div>
  );
};

export default ProjectCards;
