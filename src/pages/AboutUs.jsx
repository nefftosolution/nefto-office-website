import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <>
      <SEO title="About Us" description="Learn more about Neffto Solutions, our mission, and our team." />
      <div className="bg-main-bg text-white min-h-screen">
        {/* HERO SECTION */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden flex items-center justify-center min-h-[60vh]">
          <div className="absolute top-[-20%] left-[-10%] w-150 h-150 bg-[#042558] blur-[140px] pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[-10%] w-150 h-150 bg-[#042558] blur-[140px] pointer-events-none" />
          
          <div className="relative z-10 max-w-7xl mx-auto sm:px-6 px-4 text-left space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black uppercase tracking-tight"
            >
              Who We <span className="text-primary italic">Are</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed "
            >
              Neffto Solutions is a premier digital agency focused on delivering cutting-edge technology and design. We build digital experiences that elevate brands and drive growth.
            </motion.p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto sm:px-6 px-4 grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide">Our Mission</h2>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
              <p className="text-zinc-300 leading-relaxed text-lg">
                We believe in the power of innovation. Our mission is to transform ideas into robust digital solutions that empower businesses to thrive in a competitive landscape. Through a combination of strategic thinking, creative design, and technical excellence, we help our clients achieve their highest potential.
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Whether it is web development, mobile apps, or digital marketing, our team of experts is dedicated to delivering results that exceed expectations.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-white/10 group"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop" 
                alt="Our Team" 
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-main-bg to-transparent opacity-80"></div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
