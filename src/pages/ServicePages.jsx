// ================= ServicePages.jsx (Fixed) =================

import React, { useState } from "react";
import SEO from "../components/SEO";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom"; // Add Link import
import GlowButton from "../components/GlowButton";
import {
  Cloud,
  Server,
  Layers,
  Zap,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Terminal,
  ShieldCheck,
  Binary,
  Database,
  Infinity as InfinityIcon,
  Activity,
  Contact,
  Check,
  Calendar,
  TrendingUp,
  Code,
  Palette,
  Film,
  ShoppingCart,
  Search,
  BarChart,
  Settings,
  Rocket,
  Target,
  Eye,
  Globe,
  Cpu,
  Brain,
  Sparkles,
} from "lucide-react";
import { LineChart, Microscope, Bot, DatabaseZap, Network } from "lucide-react";
import CircularTestimonials from "../components/CircularTestimonials";
import FAQ from "../components/FAQ";
import BlogCard from "../components/BlogCard";
import { servicesData } from "../data/serviceData";
import BlogBg from "../assets/blog-bg.jpg";

// Enhanced Project Slider - FIXED navigation
const ProjectSlider = ({ projects, parentSlug }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((p) => (p + 1) % projects.length);
  const prev = () =>
    setIndex((p) => (p - 1 + projects.length) % projects.length);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 backdrop-blur-xl">
      <div className="grid lg:grid-cols-2">
        <div className="h-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={projects[index].image}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full object-cover object-left transition-all duration-1000"
            />
          </AnimatePresence>
        </div>

        <div className="sm:p-8 p-4 flex flex-col justify-center space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="sm:text-4xl text-xl font-black uppercase tracking-tighter text-white">
                {projects[index].title}
              </h3>
              <p className="text-zinc-400 sm:text-lg text-sm leading-relaxed italic">
                "{projects[index].desc}"
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {projects[index].tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] font-bold rounded-full text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="pt-6">
                <GlowButton
                  to={`/services/${parentSlug}/${projects[index].slug}`}
                  name="View Detail"
                  className="bg-black text-white border-2 border-black"
                  hover="hover:text-surface"
                  layerHover="bg-white"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-4 pt-10">
            <button
              onClick={prev}
              className="p-4 rounded-full border border-white/10 hover:bg-primary transition-all text-white cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="p-4 rounded-full border border-white/10 hover:bg-primary transition-all text-white cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Roadmap Component
const RoadmapSection = ({ roadmap }) => {
  return (
    <section className="py-20 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto sm:px-6 px-4">
        <div className="text-center sm:mb-16 mb-10">
          <h2 className="text-xl sm:text-3xl md:text-5xl font-black mb-4">
            {roadmap?.title || "Our Process Roadmap"}
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto sm:text-lg text-sm">
            {roadmap?.description ||
              "A structured approach to deliver excellence"}
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-[#4a7fa7] to-[#b4d0e6] hidden lg:block" />
          <div className="space-y-12">
            {roadmap?.steps?.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="lg:w-1/2 w-full">
                  <div className="glass w-full border border-white/20 sm:p-6 p-4 backdrop-blur-sm hover:border-surface hover:bg-secondary transition-all mx-px">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[linear-gradient(90deg,#4a7fa7,#b4d0e6)] flex items-center justify-center">
                        {React.createElement(step.icon, {
                          size: 24,
                          className: "text-white",
                        })}
                      </div>
                      <div>
                        <span className="text-secondary text-sm font-mono">
                          Step 0{idx + 1}
                        </span>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-zinc-300">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Next Steps Component
const NextStepsSection = ({ nextSteps }) => {
  return (
    <section className="sm:py-16 py-10 bg-main-bg relative overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-150 h-150 bg-[#042558] blur-[140px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-150 h-150 bg-[#042558] blur-[140px]" />
      <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10">
        <div className="text-center sm:mb-16 mb-10">
          <h2 className="text-xl sm:text-3xl md:text-5xl font-black mb-4">
            {nextSteps?.title || "Ready to Get Started?"}
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto sm:text-lg text-sm">
            {nextSteps?.description ||
              "Follow these simple steps to begin your journey with us"}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {nextSteps?.steps?.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="sm:w-20 sm:h-20 w-16 h-16 mx-auto mb-6 rounded-full bg-linear-to-br from-[#4a7fa7] to-[#b4d0e6] flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl font-black">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-zinc-400 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <GlowButton
            name={nextSteps?.buttonText || "Start Your Project"}
            to={nextSteps?.buttonLink || "/contact"}
            className="bg-surface text-white border-2 border-surface"
            hover="hover:text-surface"
            layerHover="bg-white"
          />
        </div>
      </div>
    </section>
  );
};

const ServicePages = () => {
  const { slug } = useParams();
  const service = servicesData.find(
    (s) => s.slug.toLowerCase() === slug?.toLowerCase(),
  );
  const [active, setActive] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);

  if (!service) {
    return (
      <div className="min-h-screen bg-main-bg text-white flex items-center justify-center">
        Service Not Found
      </div>
    );
  }

  const tabs = service.tabs || [];
  const projects = service.showcase?.projects || [];
  const yourData = service.testimonials || [];
  const faqs = service.faqs || [];
  const capabilities = service.capabilities || [];
  const processFeatures = service.processFeatures || [];
  const roadmap = service.roadmap || {};
  const nextSteps = service.nextSteps || {};
  const blogPosts = service.blogPosts || [];

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    show: (i = 1) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <SEO 
        title={service.metaTitle || `${service.sectionTitle} - Neffto Solutions`} 
        description={service.metaDescription || service.sectionDesc}
        canonical={service.canonical}
        ogTitle={service.ogTitle}
        ogDescription={service.ogDescription}
        ogUrl={service.ogUrl}
        keywords={service.keywords}
      />
      <div className="bg-main-bg text-white selection:bg-main-bg selection:text-black">
      {/* NAVBAR SPACER */}
      <div className="h-20" />

      <main>
        {/* SECTION 1: HERO */}
        <section
          className="relative w-full bg-cover bg-center before:absolute before:inset-0 before:content-[''] before:bg-[linear-gradient(to_right,#071524_35%,rgba(7,21,36,0.85)_55%,rgba(7,21,36,0.3)_75%,transparent_100%)] before:pointer-events-none flex items-center sm:py-20 py-16 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 1, 12, 0.95) 0%, rgba(240, 240, 240, 0) 100%), url(${service.heroImage})`,
          }}
        >
          <div className="absolute top-[-20%] left-[-10%] w-150 h-150 bg-[#042558] blur-[140px]" />
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-main-bg[#042558]/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          <div className="z-10 max-w-7xl mx-auto sm:px-6 px-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="font-sans text-white text-2xl md:text-4xl lg:text-5xl font-black leading-tight">
                {service.heroTitle}
              </h1>
              <p className="sm:mt-6 mt-4 text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl font-sans">
                {service.heroDesc}
              </p>
            </motion.div>

            {/* Enhanced Form */}
            <div className="mt-10">
              <GlowButton
                name={"Get a Quote"}
                to={"/contact"}
                className="bg-surface text-white border-2 border-surface"
                hover="hover:text-surface"
                layerHover="bg-white"
              />
            </div>
          </div>
        </section>

        {/* SECTION 2: TABS / FEATURES */}
        <section className="bg-main-bg text-white sm:py-16 py-10 relative overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-150 h-150 bg-[#042558] blur-[140px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-150 h-150 bg-[#042558] blur-[140px]" />
          <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10">
            <div className="flex lg:flex-row flex-col lg:gap-12 mb-16 justify-between">
              <div className="mb-10 lg:mb-0 lg:w-1/2">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-black mb-6">
                  {service.sectionTitle}
                </h2>
                <p className="text-zinc-400 max-w-xl">{service.sectionDesc}</p>
              </div>
              <div className="ml-auto">
                <img
                  src={service.sectionImage}
                  alt={service.title}
                  className="rounded w-100 h-50 object-cover transition-all duration-1000"
                />
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10">
            <div className="grid lg:grid-cols-3 grid-cols-1 border border-white/10 overflow-hidden">
              <div className="flex flex-col">
                {tabs.map((tab, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`text-left px-6 py-5 cursor-pointer border transition-all duration-300 hover:bg-secondary/50
                    ${
                      active === i
                        ? "bg-[#042558] text-white border-secondary"
                        : "bg-white/5 border-white/10 hover:border-secondary"
                    }
                    `}
                  >
                    <span className="font-bold tracking-wide uppercase text-sm">
                      {tab.title}
                    </span>
                  </button>
                ))}
              </div>

              <div className="relative lg:col-span-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="p-4 md:p-8 h-full"
                  >
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white">
                      {tabs[active]?.content?.heading}
                    </h3>
                    <p className="text-zinc-400 mb-6 text-sm sm:text-base">
                      {tabs[active]?.content?.desc}
                    </p>
                    <ul className="space-y-3">
                      {tabs[active]?.content?.points?.map((p, i) => (
                        <li
                          key={i}
                          className="flex justify-start items-center gap-3 sm:text-sm text-xs text-zinc-50"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: CAPABILITIES GRID */}
        <section
          className="relative sm:py-16 py-10 bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: `url(${service.capabilitiesBg})`,
          }}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10">
            <div className="text-center space-y-4 sm:mb-20 mb-10">
              <h2 className="text-2xl md:text-6xl font-black tracking-tighter uppercase leading-none text-white">
                {service.capabilitiesTitle} <br />
                <span className="highlight italic">
                  {service.capabilitiesHighlight}
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {capabilities.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="p-8 glass rounded-2xl border border-white/10 backdrop-blur-md group hover:border-secondary transition-all"
                >
                  {s.icon && (
                    <s.icon
                      className="p-3 mb-4 text-white shadow-lg backdrop-blur-xl rounded-xl transition-transform duration-500"
                      style={{
                        background: `linear-gradient(90deg, #5878a0, #b4c6d8)`,
                      }}
                      size={50}
                    />
                  )}
                  <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-white">
                    {s.title}
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: PROCESS */}
        <section className="sm:py-16 py-10 bg-main-bg relative overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-150 h-150 bg-[#042558] blur-[140px]" />

          <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10 flex flex-col lg:flex-row gap-20 lg:items-center text-white border-b border-white/10 pb-20">
            <div className="lg:w-1/2 space-y-2">
              <h3 className="text-sm text-primary font-black">
                {service.processSubTitle}
              </h3>
              <h2 className="md:text-5xl sm:text-3xl text-xl font-black italic uppercase tracking-tighter leading-tight mb-8">
                {service.processTitle} <br />
                <span className="text-primary font-serif">
                  {service.processHighlight}
                </span>
              </h2>
              <p className="text-zinc-400 sm:text-lg text-sm leading-relaxed italic border-l border-white/10 pl-4">
                {service.processDesc}
              </p>
              <ul className="mt-6 md:mt-8 pl-2 flex flex-col gap-4 md:gap-6 max-w-full">
                {processFeatures.map((text, i) => (
                  <motion.li
                    key={i}
                    variants={fadeLeft}
                    custom={i + 1}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex items-center gap-3 md:gap-4"
                  >
                    <Check size={24} className="text-primary shrink-0" />
                    <span className="text-sm sm:text-base md:text-xl font-bold leading-tight">
                      {text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="relative p-1 bg-primary rounded-2xl">
                <img
                  src={service.processImage}
                  className="h-100 w-full object-cover transition-all duration-1000 rounded-2xl"
                  alt={service.title}
                />
              </div>
            </div>
          </div>
          <RoadmapSection roadmap={roadmap} />
          <div className="absolute bottom-[-20%] right-[-10%] w-150 h-150 bg-[#042558] blur-[140px]" />
        </section>

        {/* SECTION 6: PROJECTS SHOWCASE */}
        {projects.length > 0 && (
          <section
            className="relative sm:py-16 py-10 bg-fixed bg-cover bg-center"
            style={{
              backgroundImage: `url(${service.showcase?.bgImage})`,
            }}
          >
            <div className="absolute inset-0 bg-black/85 backdrop-blur-xl" />
            <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10">
              <h2 className="sm:text-4xl text-xl font-black text-center sm:mb-16 mb-10 tracking-widest uppercase italic text-white">
                {service.showcase?.title}
              </h2>
              {/* FIXED: Pass parentSlug to ProjectSlider */}
              <ProjectSlider projects={projects} parentSlug={service.slug} />
            </div>
          </section>
        )}

        {/* SECTION 7: NEXT STEPS */}
        {nextSteps?.steps?.length > 0 && (
          <NextStepsSection nextSteps={nextSteps} />
        )}

        {/* SECTION 8: FINAL CTA */}
        <section
          className="relative sm:py-16 py-10 bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: `url(${service.ctaBg})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />
          <div className="max-w-7xl mx-auto sm:px-6 px-4 text-center space-y-12 relative z-10">
            <div className="space-y-8">
              <div className="flex justify-center items-center bg-white/10 backdrop-blur-xl border border-white/30 sm:w-24 sm:h-24 w-20 h-20 rounded-full mx-auto mb-4">
                <Rocket className="text-primary" size={40} />
              </div>
              <h3 className="text-lg sm:text-3xl md:text-5xl font-black sm:tracking-tighter uppercase">
                {service.ctaTitle}
              </h3>
              <GlowButton
                name={service.ctaButton}
                to={service.ctaLink}
                className="bg-surface text-white border-2 border-surface"
                hover="hover:text-surface"
                layerHover="bg-white"
              />
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%]" />
        </section>

        {/* SECTION 9: TESTIMONIALS */}
        {yourData.length > 0 && (
          <section className="bg-main-bg relative overflow-hidden">
            <div className="absolute top-[-20%] left-[-10%] w-150 h-150 bg-[#042558] blur-[140px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-150 h-150 bg-[#042558] blur-[140px]" />
            <CircularTestimonials
              testimonials={yourData}
              autoplay={true}
              colors={{
                arrowBackground: "#f6fafd",
                arrowHoverBackground: "#4a7fa7",
              }}
            />
          </section>
        )}

        {/* SECTION 10: BLOG */}
        {blogPosts.length > 0 && (
          <section
            className="relative bg-fixed bg-cover bg-center"
            style={{
              backgroundImage: `url(${BlogBg})`,
            }}
          >
            <div className="absolute inset-0 bg-black/80 w-full h-full" />
            <div className="max-w-7xl mx-auto relative z-10">
              <BlogCard
                title={service.blogTitle || "Latest Insights"}
                description={
                  service.blogDescription ||
                  "Explore our latest thoughts, ideas, and innovations shaping the future."
                }
                posts={blogPosts}
                onPostClick={setSelectedPost}
              />
            </div>
          </section>
        )}

        {/* SECTION 11: FAQ */}
        {faqs.length > 0 && <FAQ faqs={faqs} />}
      </main>

      {/* Blog Modal Popup */}
      {selectedPost && (
        <div className="fixed inset-0 z-1999 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface border border-white/10 shadow-2xl">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-black hover:bg-black border border-black cursor-pointer hover:text-white transition flex items-center justify-center z-10"
            >
              ✕
            </button>
            <div
              className="h-72 md:h-96 bg-cover bg-center"
              style={{ backgroundImage: `url(${selectedPost.imageUrl})` }}
            />
            <div className="p-6 md:p-10 space-y-6 text-white">
              <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-full">
                {selectedPost.category}
              </span>
              <h2 className="text-2xl md:text-4xl font-black leading-tight">
                {selectedPost.title}
              </h2>
              <div className="flex flex-wrap gap-4 text-xs text-white/60">
                <span>{selectedPost.views || "1.2k"} views</span>
                <span>{selectedPost.readTime} min read</span>
                <span>Author: {selectedPost.author || "NEFFTO"}</span>
              </div>
              <p className="text-white/70 leading-relaxed text-sm md:text-base">
                {selectedPost.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes shine-wave {
          0% {
            left: -100%;
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }
        .group-hover\\/btn\\:animate-shine-wave {
          animation: shine-wave 0.8s ease-in-out forwards;
        }
      `}</style>
    </div>
    </>
  );
};

export default ServicePages;