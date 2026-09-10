
import React from "react";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import GlowButton from "../components/GlowButton";
import { Check, Target, Server, Code, Layers, Zap } from "lucide-react";
import HeroBg from "../assets/AI.webp";

const AIMachineLearning = () => {
  return (
    <>
      <SEO
        title="AI & Machine Learning Solutions | Neffto Solution"
        description="Python, ML, and AI solutions from one of the best software houses in Pakistan. Automate processes and gain actionable insights with predictive modeling."
        canonical="https://nefftosolution.com/services/python-ml-ai"
        ogTitle="AI & Machine Learning Solutions | Neffto Solution"
        ogDescription="Python, ML, and AI solutions from one of the best software houses in Pakistan. Automate processes and gain actionable insights with predictive modeling."
      
        schema={JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Python AI, Machine Learning & Business Automation Services","provider":{"@id":"https://nefftosolution.com/#organization"},"areaServed":"Worldwide","description":"Advanced Artificial Intelligence and Machine Learning solutions.","url":"https://nefftosolution.com/services/python-ml-ai"})}
      />
      <div className="min-h-screen bg-main-bg text-white selection:bg-surface selection:text-white pb-20">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/80 z-10" />
            <img
              src={HeroBg}
              alt="AI & Machine Learning Solutions"
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
                AI & Machine Learning Solutions
              </h1>
              <p className="max-w-3xl mx-auto text-lg md:text-xl text-zinc-300 leading-relaxed mb-10">
                Python, ML, and AI solutions from one of the best software houses in Pakistan. Automate processes and gain actionable insights with predictive modeling.
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
                <h3 className="text-xl font-bold mb-4">Predictive Analytics</h3>
                <p className="text-zinc-400 leading-relaxed">Leverage historical data to forecast trends and make informed business decisions.</p>
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
                <h3 className="text-xl font-bold mb-4">Natural Language Processing</h3>
                <p className="text-zinc-400 leading-relaxed">Intelligent chatbots and text analysis tools for better customer engagement.</p>
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
                <h3 className="text-xl font-bold mb-4">Computer Vision</h3>
                <p className="text-zinc-400 leading-relaxed">Advanced image and video analysis systems for automated quality control and security.</p>
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
                  <h3 className="text-xl font-bold mb-2">Data Collection</h3>
                  <p className="text-zinc-400">Gathering and cleaning relevant datasets to train the AI models.</p>
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
                  <h3 className="text-xl font-bold mb-2">Model Selection</h3>
                  <p className="text-zinc-400">Choosing the right algorithms and neural network architectures.</p>
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
                  <h3 className="text-xl font-bold mb-2">Training & Validation</h3>
                  <p className="text-zinc-400">Iteratively training models to achieve high accuracy and reliability.</p>
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
                  <h3 className="text-xl font-bold mb-2">Integration</h3>
                  <p className="text-zinc-400">Seamlessly deploying AI capabilities into your existing software infrastructure.</p>
                </div>
              </motion.div>
              
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AIMachineLearning;
