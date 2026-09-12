import React from "react";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import {
  Rocket,
  Target,
  Users,
  Award,
  CheckCircle2,
  Zap,
  Code2,
  Sparkles,
  Globe,
} from "lucide-react";

const AboutUs = () => {

  // Core Values Data
  const values = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Full-Stack & Web Excellence",
      description:
        "We build high-performance web applications, responsive sites, and custom software that scale with your growing business.",
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Data-Driven Marketing",
      description:
        "From targeted SEO strategies to performance marketing, we ensure your brand reaches the right audience and drives conversions.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "AI & Machine Learning",
      description:
        "Leveraging Python and AI automation to transform raw data into intelligent business insights and automated workflows.",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Creative Visual Design",
      description:
        "Crafting intuitive user experiences, striking graphic designs, and engaging video edits that elevate your brand identity.",
    },
  ];

  // Workflow Steps
  const workflowSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      desc: "Understanding your vision, defining project architecture, and mapping out user journeys.",
    },
    {
      step: "02",
      title: "Design & Prototype",
      desc: "Crafting intuitive UX/UI mockups that elevate your brand identity and maximize conversions.",
    },
    {
      step: "03",
      title: "Agile Development",
      desc: "Building scalable front-end and back-end logic using cutting-edge technologies.",
    },
    {
      step: "04",
      title: "Testing & Launch",
      desc: "Thorough quality checks followed by seamless cloud deployment and post-launch support.",
    },
  ];

  return (
    <>
      {/* SEO SECTION - UNTOUCHED */}
      <SEO
        title="About Neffto Solution | Software Company in Pakistan"
        description="Learn how Neffto Solution grew into a full service software house in Bahawalpur serving clients across Pakistan and abroad. Read our story today."
        canonical="https://nefftosolution.com/about"
        ogTitle="About Neffto Solution | Software Company in Pakistan"
        ogDescription="Learn how Neffto Solution grew into a full service software house in Bahawalpur serving clients across Pakistan and abroad. Read our story today."
        ogUrl="https://nefftosolution.com/about"
        keywords="about software company Bahawalpur, Neffto Solution, software house Bahawalpur, software company Pakistan"
      
        schema={JSON.stringify({"@context":"https://schema.org","@type":"AboutPage","mainEntityOfPage":{"@type":"WebPage","@id":"https://nefftosolution.com/about"},"name":"About Neffto Solution - Leading Tech & Software Agency","description":"Learn more about Neffto Solution, our mission, vision, and the expert team driving digital transformation.","publisher":{"@id":"https://nefftosolution.com/#organization"}})}
      />

      <div className="bg-main-bg text-white min-h-screen font-sans selection:bg-primary selection:text-white">
        {/* ABOUT & STORY SECTION */}
        <section className="py-24 relative z-10 space-y-10">
          <div className="relative z-10 max-w-7xl mx-auto sm:px-6 px-4 text-center md:text-left pt-10">
            <div className="space-y-6 border-b pb-10 border-white/10">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
              >
                About Neffto Solution Best <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-400 to-indigo-400">
                  Software House in Bahawalpur
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base text-zinc-300 font-light leading-relaxed max-w-3xl"
              >
                Neffto Solution is a leading technology & digital marketing company. We
                engineer high-performance web applications, develop advanced AI & Python 
                automations, and execute data-driven SEO and marketing strategies that 
                empower modern businesses to scale effortlessly.
              </motion.p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto sm:px-6 px-4 grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-primary">
                  What We Build
                </h2>
                <p className="text-zinc-300 leading-normal text-base">
                  We believe in the power of continuous innovation. Our mission
                  is to transform complex business challenges into seamless,
                  robust digital solutions ranging from complex full-stack
                  web platforms to intelligent AI automation and high-converting marketing campaigns.
                </p>
              </div>

              <div className="space-y-3 border-t border-white/10 pt-6">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-primary">
                  How We Work
                </h2>
                <p className="text-zinc-300 leading-normal text-base">
                  Through a combination of strategic thinking, agile project
                  management, clean coding standards, and user-centered design,
                  we turn ambitious concepts into reliable technical realities.
                </p>
              </div>

              <div className="space-y-3 border-t border-white/10 pt-6">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-primary">
                  Why Clients in Pakistan Choose Us
                </h2>
                <p className="text-zinc-300 leading-normal text-base">
                  Whether you need custom web development, Python and Machine Learning solutions, 
                  strategic SEO, or comprehensive digital marketing, our
                  Bahawalpur-based expert team delivers enterprise-grade results tailored
                  to your specific budget and market requirements.
                </p>
              </div>

              {/* Bullet Highlights */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Full-Stack Web Development",
                  "AI Automation & Python",
                  "SEO & Digital Marketing",
                  "Graphic Design & Video Editing",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-zinc-200 text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Media Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-2 backdrop-blur-sm group"
            >
              <div className="relative rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Neffto Solution software development and marketing team collaborating in the Bahawalpur office"
                  className="w-full h-120 object-cover transition-transform duration-700 group-hover:scale-105" title="Neffto Solution software development and marketing team collaborating in the Bahawalpur office" />
                <div className="absolute inset-0 bg-linear-to-t from-main-bg via-main-bg/30 to-transparent opacity-90" />

              </div>
            </motion.div>
          </div>
        </section>

        {/* CORE VALUES SECTION */}
        <section className="py-20 bg-white/1 border-t border-white/10 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary">
                Our Core Principles
              </h2>
              <p className="text-zinc-400">
                We don't just build software; we engineer digital foundations
                that drive real business outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2"
                >
                  <div className="p-4 bg-primary/10 rounded-xl w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {val.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WORKFLOW / PROCESS SECTION */}
        <section className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-primary font-bold uppercase tracking-wider text-sm">
                Our Execution Strategy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                How We Deliver Results
              </h2>
              <p className="text-zinc-400">
                A structured developmental roadmap ensures quality,
                transparency, and timely delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflowSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <span className="text-4xl font-black text-primary/30 mb-4 block">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
