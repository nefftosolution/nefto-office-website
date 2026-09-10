import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import { useState } from "react";
import GlowButton from "../components/GlowButton";
import { 
  Laptop, 
  ShoppingCart, 
  BrainCircuit, 
  Palette, 
  Video, 
  Globe,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const servicesData = [
  {
    slug: "web-development",
    title: "Web Development",
    desc: "We build fast, secure, and scalable websites for businesses of all sizes.",
    icon: Laptop,
    color: "from-blue-500 to-cyan-400",
    shadow: "shadow-blue-500/20",
    tags: ["React", "Node.js", "Full Stack"]
  },
  {
    slug: "app-development",
    title: "App Development",
    desc: "Top-tier mobile app development company creating custom iOS and Android apps.",
    icon: ShoppingCart,
    color: "from-emerald-400 to-teal-500",
    shadow: "shadow-emerald-500/20",
    tags: ["iOS", "Android", "React Native"]
  },
  {
    slug: "python-ml-ai",
    title: "AI & Machine Learning",
    desc: "Automate processes and gain actionable insights with predictive modeling.",
    icon: BrainCircuit,
    color: "from-purple-500 to-pink-500",
    shadow: "shadow-purple-500/20",
    tags: ["Python", "NLP", "Computer Vision"]
  },
  {
    slug: "graphic-design",
    title: "Graphic Designing",
    desc: "Professional graphic designing services for logos, branding, and UI/UX.",
    icon: Palette,
    color: "from-orange-400 to-red-500",
    shadow: "shadow-orange-500/20",
    tags: ["UI/UX", "Branding", "Figma"]
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    desc: "Result-driven digital marketing agency specializing in Meta Ads, Google Ads.",
    icon: Video,
    color: "from-yellow-400 to-orange-500",
    shadow: "shadow-yellow-500/20",
    tags: ["Google Ads", "Meta Ads", "SMM"]
  },
  {
    slug: "seo",
    title: "SEO",
    desc: "Advanced SEO services for technical audits, and high-quality link building.",
    icon: Globe,
    color: "from-indigo-400 to-blue-600",
    shadow: "shadow-indigo-500/20",
    tags: ["On-Page", "Off-Page", "Audits"]
  },
];

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
        description="See how Neffto Solution delivered fintech, security and AI platforms for clients worldwide. Browse our services."
        canonical="https://nefftosolution.com/services"
        ogTitle="Software Development Services | Neffto Solution"
        ogDescription="See how Neffto Solution delivered fintech, security and AI platforms for clients worldwide. Browse our services."
        ogUrl="https://nefftosolution.com/services"
        keywords="software development case studies, Neffto Solution case studies, software projects, fintech projects, AI projects, security platforms"
      
        schema={JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"Custom Software Development, AI & IT Services - Neffto Solution","description":"Explore our comprehensive suite of tech and digital services including Web, App, AI, Design, Marketing, and SEO.","url":"https://nefftosolution.com/services","hasPart":[{"@type":"WebPage","url":"https://nefftosolution.com/services/web-development","name":"Custom Web Development & SaaS Solutions"},{"@type":"WebPage","url":"https://nefftosolution.com/services/app-development","name":"Custom Mobile App Development (iOS & Android)"},{"@type":"WebPage","url":"https://nefftosolution.com/services/python-ml-ai","name":"Python AI, Machine Learning & Business Automation Services"},{"@type":"WebPage","url":"https://nefftosolution.com/services/graphic-design","name":"Professional UI/UX & Graphic Designing Services"},{"@type":"WebPage","url":"https://nefftosolution.com/services/digital-marketing","name":"Data-Driven Digital Marketing & Social Media Management"},{"@type":"WebPage","url":"https://nefftosolution.com/services/seo","name":"Advanced Search Engine Optimization (SEO) Services"}]})}
      />
      <main className="selection:bg-surface selection:text-white">
        {/* SECTION 3: SERVICE CARDS */}
        <section className="bg-main-bg text-white pt-20 sm:pb-24 pb-14 relative overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-150 h-150 bg-[#042558] blur-[140px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-300 h-300 bg-[#042558] blur-[140px]" />
          
          {/* Sticky Filter */}
          <div className="relative z-10 border-b border-white/10 mb-10">
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

          <div className="max-w-7xl mx-auto sm:px-6 px-4">
            <motion.div
              layout
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
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
                    className="h-full"
                  >
                    <Link
                      to={`/services/${project.slug}`}
                      className={`group relative flex flex-col justify-between h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ${project.shadow}`}
                    >
                      {/* Top Background Glow Effect */}
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-bl ${project.color} opacity-20 rounded-bl-full blur-2xl group-hover:opacity-40 transition-opacity duration-500`} />

                      {/* Icon */}
                      <div className="relative z-10 mb-8">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-linear-to-br ${project.color} bg-opacity-20 backdrop-blur-sm border border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                          <project.icon className="text-white w-8 h-8" strokeWidth={1.5} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 flex-grow">
                        <h3 className="text-2xl font-black tracking-tight text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-zinc-400 transition-all duration-500">
                          {project.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-zinc-400 mb-8 line-clamp-3">
                          {project.desc}
                        </p>
                      </div>

                      {/* Footer containing tags and arrow */}
                      <div className="relative z-10 mt-auto flex items-end justify-between border-t border-white/10 pt-6">
                        <div className="flex flex-col gap-2">
                          {project.tags?.map((tab) => (
                            <span
                              key={tab}
                              className="w-fit rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-300"
                            >
                              {tab}
                            </span>
                          ))}
                        </div>
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-white group-hover:text-black transition-all duration-300">
                          <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
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
