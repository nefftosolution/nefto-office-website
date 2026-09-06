import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import { useState } from "react";
import GlowButton from "../components/GlowButton";
import { Star, Zap, ExternalLink } from "lucide-react";
import WebDevImg from "../assets/web-dev.png";
import DigitalMarketingImg from "../assets/digital-marketing.png";
import TiktokImg from "../assets/tiktok.png";
import YoutubeImg from "../assets/youtube.png";
import VideoEditing from "../assets/video-editing.png";
import Amazon from "../assets/amazon.png";
import { servicesData } from "../data/serviceData";
import { Link } from "react-router-dom";

// Background for even sections
const fixedBgStyle = {
  backgroundImage: `url('https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects =
    activeFilter === "All"
      ? servicesData
      : servicesData.filter((p) => p.title === activeFilter);

  const categories = ["All", ...new Set(servicesData.map((s) => s.title))];

  const logos = [
    WebDevImg,
    DigitalMarketingImg,
    TiktokImg,
    YoutubeImg,
    VideoEditing,
    Amazon,
  ];
  const duplicatedLogos = Array(5).fill(logos).flat();

  return (
    <>
      <SEO
        title="NEFFTO Case Studies | Digital Projects & Solutions"
        description="Explore NEFFTO's digital projects across web development, applications, AI, design, SEO, and digital marketing."
        canonical="https://nefftosolution.com/casestudies"
        ogTitle="NEFFTO Case Studies | Digital Projects & Solutions"
        ogDescription="See selected NEFFTO projects across web development, applications, AI, design, SEO, and digital marketing."
        ogUrl="https://nefftosolution.com/casestudies"
        keywords="digital projects, web development projects, app development projects, AI projects, design projects, SEO projects, client projects"
      />
      <main className="selection:bg-surface selection:text-white">
        {/* SECTION 1: HERO (ODD - #00042A) */}
        <section className="relative sm:pt-40 pt-30 sm:pb-20 pb-10 bg-main-bg text-white flex items-center overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-150 h-150 bg-[#042558] blur-[140px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-150 h-150 bg-[#042558] blur-[140px]" />
          <div className="max-w-7xl mx-auto sm:px-6 px-4 w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
            {/* ================= LEFT CONTENT ================= */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4"
              >
                <span className="sm:w-8 w-6 h-0.5 bg-primary" />
                <p className="uppercase tracking-[0.4em] text-primary sm:text-xs text-[11px] font-bold">
                  What We Do
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.8]"
              >
                OUR DIGITAL PROJECTS & <span className="highlight">CASE STUDIES</span>
              </motion.h1>

              <p className="text-zinc-400 sm:text-lg text-sm max-w-md leading-relaxed">
                From modern websites and scalable web applications to AI powered
                automation and branding, we create technology solutions tailored
                to your business goals.
              </p>

              <div className="pt-4">
                <GlowButton
                  name="Explore More"
                  to="/contact"
                  className="bg-surface text-white border-2 border-surface"
                  hover="hover:text-surface"
                  layerHover="bg-white"
                />
              </div>
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="relative group rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Hero Visual"
                  className="w-full h-110 object-cover scale-105 group-hover:scale-110 transition duration-700"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-main-bg via-transparent to-transparent" />

                {/* floating stats */}
                <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10">
                  <p className="text-xs text-secondary">Support Available</p>
                  <p className="text-xl font-bold">24/7</p>
                </div>

                <div className="absolute top-6 right-6 bg-surface text-white border border-white/20 px-4 py-2 text-xs font-semibold rounded-full">
                  NEFFTO IT SOLUTION
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* SECTION 2 SLIDER */}
        <section className="py-8 relative bg-primary overflow-hidden">
          {/* The Wrapper with Faded Edges */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex flex-none gap-16 items-center"
              animate={{
                x: ["0%", "-20%"], // Move from start to half (since it's duplicated)
              }}
              transition={{
                ease: "linear",
                duration: 10, // Adjust speed here (higher = slower)
                repeat: Infinity,
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-none w-25 flex justify-center items-center"
                >
                  <img
                    src={logo}
                    alt={`Client Logo ${index}`}
                    className="h-16 w-full object-contain scale-80 hover:scale-100 transition-all duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* SECTION 3: SERVICE CARDS (ODD - #00042A) */}
        <section className="bg-main-bg text-white sm:pt-16 pt-8 sm:pb-24 pb-14 relative overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-150 h-150 bg-[#042558] blur-[140px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-300 h-300 bg-[#042558] blur-[140px]" />
          {/* Sticky Filter */}
          <div className="relative z-10 border-b border-white/10">
            <div className="max-w-7xl mx-auto sm:px-6 px-4 sm:py-6 py-4 flex flex-col justify-between md:gap-10 gap-6">
              <div className="flex items-center gap-3 text-white">
                <span className="sm:text-4xl text-xl uppercase font-bold tracking-widest">
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

          <div className="max-w-7xl mx-auto sm:px-6 px-4 sm:pt-24 pt-10">
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
                          alt={project.title}
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

export default CaseStudies;
