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
  const showcaseCategories = [
    {
      title: "Fintech and Financial Platforms",
      projects: [
        { serviceSlug: "web-development", projectSlug: "fundbox" },
        { serviceSlug: "web-development", projectSlug: "offdeal" },
        { serviceSlug: "web-development", projectSlug: "human-interest" },
      ]
    },
    {
      title: "Healthcare and Communication",
      projects: [
        { serviceSlug: "web-development", projectSlug: "weave" },
      ]
    },
    {
      title: "Security and Internal Tools",
      projects: [
        { serviceSlug: "python-ml-ai", projectSlug: "firmware-security-platform" },
        { serviceSlug: "python-ml-ai", projectSlug: "ai-finance-audit-platform" },
      ]
    }
  ];

  const getProject = (serviceSlug, projectSlug) => {
    const service = servicesData.find((s) => s.slug === serviceSlug);
    return service?.showcase?.projects.find((p) => p.slug === projectSlug);
  };

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
        title="Software Development Case Studies | Neffto Solution"
        description="See how Neffto Solution delivered fintech, security and AI platforms for clients worldwide. Real projects and real outcomes. Browse the case studies."
        canonical="https://nefftosolution.com/casestudies"
        ogTitle="Software Development Case Studies | Neffto Solution"
        ogDescription="See how Neffto Solution delivered fintech, security and AI platforms for clients worldwide. Real projects and real outcomes. Browse the case studies."
        ogUrl="https://nefftosolution.com/casestudies"
        keywords="software development case studies, Neffto Solution case studies, software projects, fintech projects, AI projects, security platforms"
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
                className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.9]"
              >
                Software Development Case Studies
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
                  alt=""
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
                    alt=""
                    className="h-16 w-full object-contain scale-80 hover:scale-100 transition-all duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* SECTION 3: CASE STUDIES BY CATEGORY */}
        <section className="bg-main-bg text-white sm:pt-16 pt-8 sm:pb-24 pb-14 relative overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-150 h-150 bg-[#042558] blur-[140px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-300 h-300 bg-[#042558] blur-[140px]" />
          
          <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10 space-y-24">
            {showcaseCategories.map((cat, catIdx) => (
              <div key={catIdx} className="space-y-10">
                <h2 className="sm:text-4xl text-2xl font-bold tracking-wide uppercase border-b border-white/10 pb-4">
                  {cat.title}
                </h2>
                
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
                  {cat.projects.map((projMeta, idx) => {
                    const project = getProject(projMeta.serviceSlug, projMeta.projectSlug);
                    if (!project) return null;
                    return (
                      <motion.div
                        key={project.slug}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                      >
                        <Link
                          to={`/services/${projMeta.serviceSlug}/${project.slug}`}
                          className="group relative block overflow-hidden border border-white/10 bg-surface/30 backdrop-blur-xl h-full"
                        >
                          {/* Image */}
                          <div className="relative aspect-4/5 overflow-hidden">
                            <img
                              src={project.image}
                              alt=""
                              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent transition duration-500" />
                          </div>
                          
                          <div className="absolute inset-0 p-7">
                            <div className="flex flex-wrap gap-2">
                              {project.tech?.slice(0,3).map((t) => (
                                <span
                                  key={t}
                                  className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-text backdrop-blur-md"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="absolute inset-0 flex flex-col justify-end p-7">
                            <h3 className="text-2xl font-bold text-off-white transition-all duration-500">
                              {project.title}
                            </h3>
                            <div className="mt-0 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:mt-4 group-hover:max-h-40 group-hover:opacity-100">
                              <p className="text-sm leading-7 text-zinc-200 line-clamp-3">
                                {project.desc}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
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
