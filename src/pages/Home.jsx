import React, { useState } from "react";
import SEO from "../components/SEO";
import HeroBg from "../assets/hero-bg.jpeg";
import GlowButton from "../components/GlowButton";
import { motion, AnimatePresence } from "framer-motion";
import { Check, CheckIcon, ArrowUpRight, X } from "lucide-react";

import FeaturedWork from "../components/FeaturedWork";
import AgencyServices from "../components/AgencyServices";
import PartnerSection from "../components/PartnerSection";
import WhitepaperSection from "../components/WhitepaperSection";
import ProjectCards from "../components/ProjectCards";
import CircularTestimonials from "../components/CircularTestimonials";
import FAQ from "../components/FAQ";
import BlogCard from "../components/BlogCard";
import FeaturedProjectImg from "../assets/featured-project.webp";
import BlogBg from "../assets/blog-bg.jpg";
import Counter from "../components/Counter";
import ServicesImage from "../assets/Explore-Services.png";
import PerformanceImg from "../assets/performance-img.jpeg";
import { servicesData } from "../data/serviceData";

const Home = () => {
  const faqs = [
    {
      question:
        "1. What makes your agency’s approach different from individual freelancers? ",
      answer: `We operate as a multi-disciplinary team, meaning your project benefits from a collective of experts. While a freelancer might excel in one area, we provide a holistic "Strategy-to-Launch" workflow. This ensures that your design, functionality, and marketing strategy are perfectly synchronized for growth rather than being handled in isolation.`,
    },
    {
      question:
        "2. How do you ensure the project aligns with my specific brand vision?",
      answer: `Our process begins with a "Visionary Mapping" phase. We don't just start building; we conduct a deep dive into your business goals and market positioning. By establishing a clear strategic roadmap and providing conceptual models for your review, we guarantee the final product is a perfect reflection of your brand identity.`,
    },
    {
      question:
        "3. Will the final solution be easy for me to manage after delivery?",
      answer: `Absolutely. We prioritize "Clean Development" and user-centric architecture. Whether we are delivering a website or a custom tool, we ensure the backend is intuitive. We also provide a comprehensive handover and a brief walkthrough to ensure you feel confident managing and scaling your new digital asset.`,
    },
    {
      question: "4. How do you handle project timelines and communication?",
      answer: `Transparency is our standard. We follow a strict 4-step framework—Planning, Design, Development, and Testing—to keep the project on track. You will receive regular milestone updates, and we maintain open lines of communication to ensure feedback is integrated quickly and efficiently.`,
    },
    {
      question: "5. Do you offer post-launch support and optimization?",
      answer: `Yes. We believe a project’s success is measured by its performance after the debut. Our "Launch Excellence" phase includes rigorous testing to ensure everything is bug-free. Beyond delivery, we offer optimization support to help you analyze results and make data-driven adjustments for long-term scalability.`,
    },
  ];
  // Background for even sections
  const fixedBgStyle = {
    backgroundColor: "#071524",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const [quoteEmail, setQuoteEmail] = useState("");
  const [quoteMessage, setQuoteMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    if (!quoteEmail) return;

    setIsSubmitting(true);
    setQuoteMessage("");

    try {
      const response = await fetch(
        "https://neffto-solution-backend.vercel.app/api/quote",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: quoteEmail }),
        },
      );

      if (response.ok) {
        setQuoteMessage("Quote request sent!");
        setQuoteEmail("");
      } else {
        setQuoteMessage("Failed to send request.");
      }
    } catch (error) {
      console.error("Quote error:", error);
      setQuoteMessage("Connection error.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setQuoteMessage(""), 5000);
    }
  };

  return (
    <>
      <SEO
        title="Best Software House in Bahawalpur | Neffto Solution"
        description="Neffto Solution is a software house in Bahawalpur building websites, AI tools and SEO campaigns for businesses across Pakistan. Get a free quote today."
        canonical="https://nefftosolution.com/"
        ogTitle="Best Software House in Bahawalpur | Neffto Solution"
        ogDescription="Neffto Solution is a software house in Bahawalpur building websites, AI tools and SEO campaigns for businesses across Pakistan. Get a free quote today."
        ogUrl="https://nefftosolution.com/"
        keywords="software house in Bahawalpur, software company Bahawalpur, web development Pakistan, AI services Pakistan, SEO services Pakistan"
      />
      <section
        className="relative overflow-hidden w-full bg-cover bg-center before:absolute before:inset-0 before:content-[''] before:bg-[linear-gradient(to_right,#071524_35%,rgba(7,21,36,0.85)_55%,rgba(7,21,36,0.3)_75%,transparent_100%)] before:pointer-events-none flex items-center pt-35 pb-25 md:pt-45 md:pb-35"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="absolute top-[-20%] left-[-10%] w-180 h-180 bg-[#042558] blur-[140px]" />
        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl sm:px-6 px-4">
          <div className="w-full max-w-3xl lg:max-w-2xl xl:max-w-3xl">
            <h1 className="font-sans text-white text-2xl md:text-4xl lg:text-5xl font-black leading-tight flex flex-col justify-start">
              Digital Solutions for{" "}
              <span className="highlight">Modern Businesses</span>
            </h1>
            <p className="mt-4 text-gray-300 text-sm lg:max-w-xl max-w-sm font-sans">
              From stunning web experiences and high-end graphics to custom tool
              development and advanced machine learning models, we provide the
              full-stack solutions your business needs to scale in the digital
              age.
            </p>
            <form
              onSubmit={handleQuoteSubmit}
              className="relative flex flex-col group/form md:max-w-xl max-w-100 mt-8"
            >
              <div className="relative flex w-full bg-white border border-gray-200 shadow-xl overflow-hidden">
                {/* Email Icon */}
                <div className="flex items-center justify-center pl-2 text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                {/* Input Field */}
                <input
                  type="email"
                  value={quoteEmail}
                  onChange={(e) => setQuoteEmail(e.target.value)}
                  required
                  placeholder="Enter your business email"
                  className="w-full bg-transparent md:px-4 px-2 py-3 md:text-sm text-xs text-gray-900 outline-none placeholder:text-gray-400 font-medium"
                />

                {/* Modern Action Button */}
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="group/btn relative md:px-6 px-1 md:py-4 py-3 bg-black text-white text-[10px] md:text-xs md:font-black uppercase tracking-widest overflow-hidden transition-all duration-300 whitespace-nowrap cursor-pointer w-45 disabled:opacity-50"
                >
                  {/* 45-Degree Hover Layer (Violet) */}
                  <div className="absolute top-[-80%] left-[-80%] w-[200%] h-[300%] z-0 bg-surface rotate-45 translate-y-[150%] group-hover/btn:translate-y-[-30%] transition-transform duration-500 ease-out" />

                  {/* Shine Wave Animation */}
                  <div className="absolute inset-0 z-10 overflow-hidden">
                    <div className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-white/20 group-hover/btn:animate-shine-wave" />
                  </div>

                  {/* Button Text */}
                  <span className="relative z-20">
                    {isSubmitting ? "Sending..." : "Get a Quote"}
                  </span>
                </button>
              </div>

              {quoteMessage && (
                <div className="mt-3 text-sm font-bold text-primary">
                  {quoteMessage}
                </div>
              )}

              {/* CSS for Shine Wave */}
              <style>
                {`
                @keyframes shine-wave {
                  0% { left: -100%; opacity: 0; }
                  50% { opacity: 0.5; }
                  100% { left: 100%; opacity: 0; }
                }
                .group-hover\\/btn\\:animate-shine-wave {
                  animation: shine-wave 0.8s ease-in-out forwards;
                }
              `}
              </style>
            </form>
            <div className="mt-10 gap-4 flex flex-wrap">
              <GlowButton
                to={"/contact"}
                name={"Get Started"}
                className="text-white bg-surface"
                layerHover="bg-white"
                hover="hover:text-surface"
              />
              <GlowButton
                to={"/services"}
                name={"View Services"}
                className="bg-off-white text-surface"
                hover="hover:text-white"
                layerHover="bg-surface"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        style={fixedBgStyle}
        className="relative py-10 sm:px-6 px-4 overflow-hidden"
      >
        <div className="absolute top-[-20%] left-[-10%] w-150 h-150 bg-[#042558] blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-150 h-150 bg-[#042558] blur-[140px]" />
        {/* Light Overlay for text readability */}
        <div className="max-w-7xl mx-auto sm:px-6 px-4 flex flex-wrap items-center justify-between gap-12 relative z-10">
          <Counter value="20+" label="Systems Architected" light={false} />
          <Counter value="98%" label="Success Rate" light={false} />
          <Counter value="10+" label="Global Partners" light={false} />
          <Counter value="500+" label="Active Users" light={false} />
        </div>
      </section>
      <section
        className=" bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${FeaturedProjectImg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/90"></div>
        <AgencyServices />
      </section>
      <section className="bg-main-bg sm:py-16 py-10 overflow-hidden relative">
        <div className="absolute top-[-20%] left-[-10%] w-150 h-150 bg-[#042558] blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-150 h-150 bg-[#042558] blur-[140px]" />
        <div className="relative max-w-7xl mx-auto sm:px-6 px-4">
          <div className="">
            <p className="text-[14px] font-black uppercase tracking-[0.4em] text-primary">
              NEFFTO Performance
            </p>

            <h2 className="text-2xl md:text-4xl font-black text-white leading-[0.95] tracking-tighter uppercase mb-6">
              Trusted Digital Agency With{" "}
              <span className="text-primary">High Success Rates</span>
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed mb-12">
              NEFFTO is a results-driven digital agency dedicated to helping
              businesses build a strong online presence through innovative
              technology, creative strategies, and high-performance digital
              solutions. We specialize in web development, e-commerce solutions,
              AI & machine learning, digital marketing, custom tool development,
              graphic design, video editing, and professional WordPress websites
              tailored to modern business needs. Our team focuses on delivering
              visually engaging, scalable, and conversion-focused solutions that
              not only enhance brand identity but also improve customer
              experience, generate leads, and drive long-term business growth.
              From startups to established companies, NEFFTO combines
              creativity, strategy, and advanced technologies to transform ideas
              into impactful digital experiences with measurable success and
              outstanding client satisfaction.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* LEFT CONTENT */}
            <div className="space-y-8">
              {servicesData.map((item, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  {/* NUMBER */}
                  <div className="min-w-13.75 h-13.75 glass rounded-xl flex items-center justify-center text-white font-bold text-lg border border-white/5">
                    0{i + 1}
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h3 className="sm:text-xl text-md font-semibold text-white mb-1 group-hover:text-primary transition-all duration-300">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* RIGHT IMAGE */}
            <div className="relative">
              {/* MAIN IMAGE */}
              <div className="relative overflow-hidden border border-black/10">
                <img
                  src={PerformanceImg}
                  alt="NEFFTO Success"
                  className="w-full h-120 object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
              </div>

              {/* FLOATING STATS */}
              <div className="absolute top-px left-px bg-white/10 backdrop-blur-xl border border-black/10 px-4 py-2">
                <h3 className="text-2xl font-bold text-surface">99%</h3>
                <p className="text-surface text-xs">Client Satisfaction</p>
              </div>

              <div className="absolute bottom-px right-px bg-white/10 backdrop-blur-xl border border-white/10 px-4 py-2">
                <h3 className="text-2xl font-bold text-white">500+</h3>
                <p className="text-white text-xs">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeaturedWork />
      <PartnerSection />
      <WhitepaperSection />
      <FAQ faqs={faqs} />
    </>
  );
};

export default Home;
