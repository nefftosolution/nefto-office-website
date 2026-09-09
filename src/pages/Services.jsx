import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import { useState } from "react";
import GlowButton from "../components/GlowButton";
import { Star, Zap, ExternalLink } from "lucide-react";
import { servicesData } from "../data/serviceData";
import { Link } from "react-router-dom";

// Background for even sections
const fixedBgStyle = {
  backgroundImage: `url('https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Services = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects =
    activeFilter === "All"
      ? servicesData
      : servicesData.filter((p) => p.title === activeFilter);

  const categories = ["All", ...new Set(servicesData.map((s) => s.title))];

  return (
    <>
      <SEO
        title="Software Development Services | Neffto Solution"
        description="See how Neffto Solution delivered fintech, security and AI platforms for clients worldwide. Real projects and real outcomes. Browse the case studies."
        canonical="https://nefftosolution.com/services"
        ogTitle="Software Development Services | Neffto Solution"
        ogDescription="See how Neffto Solution delivered fintech, security and AI platforms for clients worldwide. Real projects and real outcomes. Browse the case studies."
        ogUrl="https://nefftosolution.com/services"
        keywords="software development case studies, Neffto Solution case studies, software projects, fintech projects, AI projects, security platforms"
      />
      <main className="selection:bg-surface selection:text-white">
        {/* SECTION 3: SERVICE CARDS (ODD - #00042A) */}
        <section className="bg-main-bg text-white pt-20 sm:pb-24 pb-14 relative overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-150 h-150 bg-[#042558] blur-[140px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-300 h-300 bg-[#042558] blur-[140px]" />
          {/* Sticky Filter */}
          <div className="relative z-10 border-b border-white/10">
            <div className="max-w-7xl mx-auto sm:px-6 px-4 sm:py-6 py-4 flex flex-col justify-between md:gap-10 gap-6">
              <div className="flex items-center gap-3 text-white">
                <span className="text-4xl uppercase font-bold tracking-widest">
                  Services
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-6 py-2 text-[10px] cursor-pointer uppercase font-bold tracking-widest rounded-full border transition-all duration-500 ${
                      activeFilter === cat
                        ? "bg-surface text-off-white border-off-white shadow-[0_0_10px_rgba(239,239,242,0.5)]"
                        : "bg-transparent text-zinc-400 border-white/10 hover:border-white/40"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto sm:px-6 px-4 sm:pt-16 pt-10">
            <motion.div
              layout
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-10"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                  >
                    <Link
                      to={`/services/${project.slug}`}
                      className="group relative block overflow-hidden border border-white/10 bg-surface/30 backdrop-blur-xl"
                    >
                      {/* Image */}
                      <div className="relative aspect-4/5 overflow-hidden">
                        <img
                          src={project.heroImage}
                          alt={project.imageAlt || project.title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent transition duration-500" />
                      </div>
                      <div className="absolute inset-0 p-7">
                        <div className="flex flex-wrap gap-2">
                          {project.tabs?.map((tab) => (
                            <span
                              key={tab.title}
                              className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-text backdrop-blur-md"
                            >
                              {tab.title}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-7">
                        {/* Title */}
                        <h3 className="text-2xl font-bold text-off-white transition-all duration-500">
                          {project.sectionTitle}
                        </h3>

                        {/* Hover Content */}
                        <div className="mt-0 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:mt-4 group-hover:max-h-40 group-hover:opacity-100">
                          <p className="text-sm leading-7 text-zinc-200">
                            {project.sectionDesc}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
        {/* SECTION 4: CTA (EVEN - FIXED BG) */}
        <section
          style={fixedBgStyle}
          className="relative sm:py-16 py-10 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/60" />{" "}
          {/* Dark Overlay for high impact */}
          <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10 text-white">
            <div className="max-w-4xl mx-auto sm:space-y-8 space-y-4">
              <h2 className="sm:text-4xl text-3xl md:text-6xl font-black tracking-tighter uppercase leading-[0.85]">
                Ready to{" "}
                <span className="text-transparent stroke-text-white italic">
                  Innovate?
                </span>
              </h2>

              <p className="text-zinc-300 sm:text-lg text-sm font-light max-w-lg mx-auto">
                Currently accepting high-impact projects for 2024. Let’s build
                something that moves the needle.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center pt-4">
                <GlowButton
                  name="Start Project"
                  to="/contact"
                  className="bg-surface text-white border-2 border-surface"
                  hover="hover:text-surface"
                  layerHover="bg-white"
                />
              </div>
            </div>
          </div>
        </section>

        <style>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px white;
        }
        .stroke-text-white {
          -webkit-text-stroke: 1.5px #efeff2;
        }
      `}</style>
      </main>
    </>
  );
};

export default Services;
