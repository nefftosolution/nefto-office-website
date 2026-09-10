
import React from "react";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import GlowButton from "../components/GlowButton";
import { Check, Target, Server, Code, Layers, Zap } from "lucide-react";
import HeroBg from "../assets/DigitalMarketing.jpg";

const DigitalMarketing = () => {
  return (
    <>
      <SEO
        title="Result-Driven Digital Marketing | Neffto Solution"
        description="Result-driven digital marketing agency in Bahawalpur specializing in Meta Ads, Google Ads, and SMM. Maximize your ROI and grow your online presence."
        canonical="https://nefftosolution.com/services/digital-marketing"
        ogTitle="Result-Driven Digital Marketing | Neffto Solution"
        ogDescription="Result-driven digital marketing agency in Bahawalpur specializing in Meta Ads, Google Ads, and SMM. Maximize your ROI and grow your online presence."
      
        schema={JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Data-Driven Digital Marketing & Social Media Management","provider":{"@id":"https://nefftosolution.com/#organization"},"areaServed":"Worldwide","description":"Result-oriented digital marketing and social media campaigns.","url":"https://nefftosolution.com/services/digital-marketing"})}
      />
      <div className="min-h-screen bg-main-bg text-white selection:bg-surface selection:text-white pb-20">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/80 z-10" />
            <img
              src={HeroBg}
              alt="Result-Driven Digital Marketing"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold uppercase tracking-[0.2em] bg-white/10 text-white backdrop-blur-md rounded-full border border-white/20">
                Premium Services
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                Result-Driven Digital Marketing
              </h1>
              <p className="max-w-3xl mx-auto text-lg md:text-xl text-zinc-300 leading-relaxed mb-10">
                Result-driven digital marketing agency in Bahawalpur specializing in Meta Ads, Google Ads, and SMM. Maximize your ROI and grow your online presence.
              </p>
              <GlowButton
                to="/contact"
                name="Start Your Project"
                className="bg-white text-surface border-2 border-white mx-auto"
                hover="hover:text-white"
                layerHover="bg-surface"
              />
            </motion.div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight">Our Expertise</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Check className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Social Media Management</h3>
                <p className="text-zinc-400 leading-relaxed">Strategic content creation and community management across all major platforms.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Check className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Pay-Per-Click Advertising</h3>
                <p className="text-zinc-400 leading-relaxed">Highly targeted Google and Meta ad campaigns optimized for conversions.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Check className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Content Marketing</h3>
                <p className="text-zinc-400 leading-relaxed">Engaging blog posts, videos, and infographics to attract and retain your audience.</p>
              </motion.div>
              
            </div>
          </div>
        </section>

        {/* ROADMAP SECTION */}
        <section className="py-20 bg-surface/30 relative z-10 border-y border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight">Our Process</h2>
              <p className="text-zinc-400">A structured approach to ensure perfect delivery.</p>
            </div>
            <div className="space-y-8">
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <span className="font-bold text-primary">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Market Research</h3>
                  <p className="text-zinc-400">Analyzing competitors and identifying target audience demographics.</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <span className="font-bold text-primary">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Strategy Formulation</h3>
                  <p className="text-zinc-400">Creating a comprehensive marketing plan with clear KPIs.</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <span className="font-bold text-primary">03</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Campaign Execution</h3>
                  <p className="text-zinc-400">Launching multi-channel marketing campaigns.</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.30000000000000004 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <span className="font-bold text-primary">04</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Analytics & Optimization</h3>
                  <p className="text-zinc-400">Continuously monitoring performance and tweaking strategies for better ROI.</p>
                </div>
              </motion.div>
              
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default DigitalMarketing;
