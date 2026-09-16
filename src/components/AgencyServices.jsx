import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Laptop,
  ShoppingCart,
  Fingerprint,
  Search,
  RefreshCcw,
  Settings,
  BrainCircuit,
  Palette,
  Video,
  Globe,
} from "lucide-react";
import GlowButton from "./GlowButton";
import ServicesImage from "../assets/Explore-Services.png";
import { Link } from "react-router-dom";

const servicesData = [
  {
    slug: "web-development",
    title: "Web Development",
    desc: "Custom web development services in Bahawalpur. We build fast, secure, and scalable websites for businesses of all sizes.",
    icon: Laptop,
  },
  {
    slug: "app-development",
    title: "App Development",
    desc: "Top-tier mobile app development company creating custom iOS and Android applications.",
    icon: ShoppingCart, // Using available icon, or we could import Smartphone
  },
  {
    slug: "python-ml-ai",
    title: "AI & Machine Learning",
    desc: "Python, ML, and AI solutions from one of the best software houses in Pakistan.",
    icon: BrainCircuit,
  },
  {
    slug: "graphic-design",
    title: "Graphic Designing",
    desc: "Professional graphic designing services in Bahawalpur. Logos, branding, UI/UX, and marketing materials.",
    icon: Palette,
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    desc: "Result-driven digital marketing agency in Bahawalpur specializing in Meta Ads, Google Ads, and SMM.",
    icon: Video, // Or import Megaphone
  },
  {
    slug: "seo",
    title: "SEO",
    desc: "SEO services in Bahawalpur. On page SEO, technical audits, and link building that help you rank higher on Google.",
    icon: Globe,
  },
];

const AgencyServices = () => {
  return (
    <div className="relative max-w-7xl mx-auto sm:px-6 px-4 sm:py-16 py-10 z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE */}
        <div className="lg:sticky lg:top-32 self-start space-y-8">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[12px] font-black uppercase tracking-[0.4em] text-primary"
          >
            Why NEFFTO?
          </motion.span>

          <h2 className="text-3xl md:text-5xl font-black text-white leading-[0.95] tracking-tighter uppercase">
            We Create Powerful Digital Experiences For{" "}
            <span className="text-primary">Modern Brands</span>
          </h2>

          <div className="space-y-6 max-w-md text-white/80">
            <p className="sm:text-[14px] text-[11px]">
              At NEFFTO, we provide complete digital solutions including{" "}
              <Link
                to="/services/web-development"
                className="text-secondary hover:text-white underline decoration-secondary/40 underline-offset-4 transition-colors font-medium"
              >
                web development
              </Link>
              , e-commerce,{" "}
              <Link
                to="/services/digital-marketing"
                className="text-secondary hover:text-white underline decoration-secondary/40 underline-offset-4 transition-colors font-medium"
              >
                digital marketing
              </Link>
              ,{" "}
              <Link
                to="/services/ai-machine-learning"
                className="text-secondary hover:text-white underline decoration-secondary/40 underline-offset-4 transition-colors font-medium"
              >
                AI solutions
              </Link>
              , branding,{" "}
              <Link
                to="/services/graphic-designing"
                className="text-secondary hover:text-white underline decoration-secondary/40 underline-offset-4 transition-colors font-medium"
              >
                creative design
              </Link>
              , and content production — all focused on helping businesses grow faster in the digital world.
              <br />
              <br />
              We begin by understanding your business goals, target audience,
              and market opportunities. Using research-driven strategies, we
              create tailored digital experiences that combine modern design,
              performance, and business-focused functionality.
              <br />
              <br />
              From strategy and development to marketing and optimization, every
              project is handled in-house by our expert team to ensure quality,
              speed, and consistent results across every platform.
              <br />
              <br />
              Whether you need a{" "}
              <Link
                to="/services/web-development"
                className="text-secondary hover:text-white underline decoration-secondary/40 underline-offset-4 transition-colors font-medium"
              >
                high-converting website
              </Link>
              , a scalable online store,{" "}
              <Link
                to="/services/ai-machine-learning"
                className="text-secondary hover:text-white underline decoration-secondary/40 underline-offset-4 transition-colors font-medium"
              >
                AI-powered tools
              </Link>
              , or powerful{" "}
              <Link
                to="/services/digital-marketing"
                className="text-secondary hover:text-white underline decoration-secondary/40 underline-offset-4 transition-colors font-medium"
              >
                marketing campaigns
              </Link>
              , NEFFTO delivers innovative solutions designed to elevate your brand and drive measurable success.
            </p>
          </div>
          <img src={ServicesImage} alt="The six Neffto Solution services: web, app, AI, design, marketing and SEO" loading="lazy" decoding="async" className="w-full mt-4 pr-4" title="The six Neffto Solution services: web, app, AI, design, marketing and SEO" />
        </div>

        {/* RIGHT SIDE - GLASS CARDS */}
        <div className="flex flex-col gap-6">
          {servicesData.map((service, index) => (
            <Link
              key={index}
              to={`/services/${service.slug}`}
              className="block"
            >
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative group overflow-hidden p-10 
              glass rounded-2xl
              border border-white/10 
              hover:scale-[1.02] hover:border-white/20 
              transition-all duration-500 cursor-pointer"
              >
                {/* Glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, #0A131730, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 flex flex-col items-start gap-4">
                  {/* ICON */}
                  <div
                    className="p-4 mb-4 text-white shadow-lg rounded-2xl
                  backdrop-blur-xl transition-transform duration-500"
                    style={{
                      background: `linear-gradient(135deg, #5878a0, #b4c6d8)`,
                    }}
                  >
                    {service.icon && <service.icon size={32} />}
                  </div>

                  {/* TITLE */}
                  <h3 className="sm:text-xl text-[16px] font-bold text-white uppercase tracking-tight">
                    {service.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-white/70 leading-relaxed font-medium max-w-sm sm:text-sm text-[11px]">
                    {service.desc}
                  </p>

                  {/* CTA */}
                  <button className="flex cursor-pointer items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-all">
                    Explore Service
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-2"
                    />
                  </button>
                </div>

                {/* subtle top shine line */}
                <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/40 to-transparent opacity-20" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgencyServices;
