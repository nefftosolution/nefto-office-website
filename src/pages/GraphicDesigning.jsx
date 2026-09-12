import React from "react";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import GlowButton from "../components/GlowButton";
import FAQ from "../components/FAQ";
import {
  PenTool,
  Image,
  Layout,
  Share2,
  Printer,
  Megaphone,
  Check,
  ChevronDown,
  Wand2,
  Brush,
  Monitor,
  Sparkles,
  Palette
} from "lucide-react";

import HeroBg from "../assets/graphic.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// --- DATA FROM PDF ---

const services = [
  {
    icon: PenTool,
    number: "01",
    title: "Logo Design",
    text: "Unique, memorable logos that capture your brand's identity.",
  },
  {
    icon: Wand2,
    number: "02",
    title: "Brand Identity Design",
    text: "Complete branding kits including colour palettes, typography, and brand guidelines.",
  },
  {
    icon: Layout,
    number: "03",
    title: "UI/UX Design Services",
    text: "User-friendly website and app interfaces designed for great experiences.",
  },
  {
    icon: Share2,
    number: "04",
    title: "Social Media Post Design",
    text: "Eye-catching posts, stories, banners, and ad creatives.",
  },
  {
    icon: Printer,
    number: "05",
    title: "Print Design",
    text: "Business cards, brochures, flyers, letterheads, and packaging.",
  },
  {
    icon: Megaphone,
    number: "06",
    title: "Marketing Materials",
    text: "Presentations, infographics, posters, and promotional graphics.",
  },
];

const process = [
  {
    number: "01",
    title: "Brief",
    text: "We learn about your business, audience, and design needs.",
  },
  {
    number: "02",
    title: "Research",
    text: "We study your industry and competitors for inspiration and differentiation.",
  },
  {
    number: "03",
    title: "Concepts",
    text: "Our designers create initial ideas and creative directions.",
  },
  {
    number: "04",
    title: "Feedback and Revisions",
    text: "We refine the designs based on your input.",
  },
  {
    number: "05",
    title: "Final Delivery",
    text: "You receive high-quality files in all required formats.",
  },
];

const whyChooseUs = [
  "Every project is handled by an experienced, professional graphic designer.",
  "Designs built around your business goals, not just passing trends.",
  "Fast turnaround with reasonable revision rounds.",
  "Affordable packages for startups and small businesses.",
  "Full ownership of your final design files.",
  "Seamless collaboration with our web, app, and marketing teams.",
];

const faqs = [
  {
    question: "How long does logo design take?",
    answer: "Most logo projects take five to ten working days, depending on the number of concepts and revision rounds required.",
  },
  {
    question: "Will I own the rights to my designs?",
    answer: "Yes. Once the project is complete and paid for, you receive full ownership of the final design files.",
  },
  {
    question: "Do you offer monthly social media post design packages?",
    answer: "Yes, we offer monthly design packages for businesses that need a regular flow of fresh social media content.",
  },
  {
    question: "Can you redesign my existing logo?",
    answer: "Absolutely. We can refresh your current logo while keeping the recognition you've already built with your customers.",
  },
];

const GraphicDesigning = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Graphic Design Services",
    serviceType: "Design and Branding",
    description: "Graphic design services in Pakistan: logo design, brand identity, UI/UX and social media post design by NEFFTO in Bahawalpur.",
    provider: {
      "@type": "Organization",
      name: "Neffto Solution",
      url: "https://nefftosolution.com/",
    },
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    url: "https://nefftosolution.com/services/graphic-designing",
  };

  return (
    <>
      <SEO
        title="Graphic Design Services in Pakistan | Logo & Branding"
        description="Graphic design services in Pakistan: logo design, brand identity, UI/UX and social media post design by NEFFTO in Bahawalpur. Get a free quote today."
        canonical="https://nefftosolution.com/services/graphic-designing"
        ogTitle="Graphic Design Services in Pakistan | Logo & Branding"
        ogDescription="Graphic design services in Pakistan: logo design, brand identity, UI/UX and social media post design by NEFFTO in Bahawalpur. Get a free quote today."
        schema={JSON.stringify([serviceSchema, faqSchema])}
        keywords="graphic design services in Pakistan, logo design company in Bahawalpur, brand identity design, UI/UX design services, social media post design, professional graphic designer"
      />

      <main className="bg-main-bg min-h-screen text-slate-200 selection:bg-amber-500/30 selection:text-amber-200 font-sans pt-20">
        
        {/* HERO SECTION */}
        
        {/* UNIQUE HERO: GRAPHIC DESIGN (Creative Masonry / Abstract Shapes) */}
        <section className="relative flex items-center py-20 overflow-hidden bg-main-bg">
          <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#5482b4]/30 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="sm:text-center max-w-4xl mx-auto mb-16">
              <motion.div variants={fadeUp} initial="hidden" animate="visible" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-secondary text-sm font-bold tracking-wide uppercase mb-6">
                <Palette className="w-4 h-4" />
                <span>Graphic Design</span>
              </motion.div>
              
              <motion.h1 variants={fadeUp} initial="hidden" animate="visible" className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white leading-tight mb-6">
                Graphic Design Services in Pakistan: Creative Designs That Build Strong Brands
              </motion.h1>
              
              <motion.p variants={fadeUp} initial="hidden" animate="visible" className="text-sm sm:text-base md:text-lg text-zinc-300 font-sans mb-10 leading-relaxed">
                People judge a business by how it looks before they read a single word. A sharp logo, consistent colours, and professional marketing visuals can make a small company look established and trustworthy. NEFFTO IT Solution offers creative <strong className="text-secondary font-bold">graphic design services in Pakistan</strong> that help businesses stand out and communicate clearly.
              </motion.p>

              <motion.div variants={fadeUp} initial="hidden" animate="visible">
                <GlowButton name="Get a Free Quote" to="/contact" className="bg-surface text-white border-2 border-surface" hover="hover:text-surface" layerHover="bg-white" />
              </motion.div>
            </div>

            <div className="hidden lg:grid grid-cols-4 gap-4 h-64">
               <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[#042558] rounded-2xl border border-white/10 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent,rgba(255,255,255,0.1),transparent)] -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <div className="w-full h-full flex items-center justify-center"><PenTool className="w-12 h-12 text-[#5482b4]" /></div>
               </motion.div>
               <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="col-span-2 bg-[#5482b4]/20 rounded-2xl border border-[#5482b4]/30 backdrop-blur-sm overflow-hidden relative group">
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                     <span className="text-2xl font-black uppercase tracking-widest text-secondary">Creative</span>
                     <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">Excellence</span>
                  </div>
               </motion.div>
               <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-[#042558] rounded-2xl border border-white/10 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent,rgba(255,255,255,0.1),transparent)] -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <div className="w-full h-full flex items-center justify-center"><Monitor className="w-12 h-12 text-[#c3e9fe]" /></div>
               </motion.div>
            </div>
          </div>
        </section>


        {/* WHY YOUR BUSINESS NEEDS SECTION */}
        <section className="sm:py-16 py-10 relative border-t border-white/5">
          <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10 flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="w-full md:w-1/2 relative">
               <div className="absolute inset-0 bg-secondary/20 blur-[100px] rounded-full" />
               <div className="relative bg-white/5 glass backdrop-blur-md border border-white/10 rounded-3xl p-8 backdrop-blur-sm grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center text-center gap-3">
                     <Brush className="w-10 h-10 text-secondary" />
                     <span className="font-semibold text-white">Visual Impact</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                     <Sparkles className="w-10 h-10 text-secondary" />
                     <span className="font-semibold text-white">Brand Trust</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                     <Monitor className="w-10 h-10 text-secondary" />
                     <span className="font-semibold text-white">Clear UI/UX</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                     <Image className="w-10 h-10 text-secondary" />
                     <span className="font-semibold text-white">Social Growth</span>
                  </div>
               </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Why Professional Graphic Design Matters</h2>
              <p className="text-sm sm:text-base text-zinc-300 font-sans mb-6 leading-relaxed">
                Good design is about much more than looking nice. It shapes how people feel about your brand, guides their attention to the most important information, and encourages them to take action. Consistent branding across your website, social media, packaging, and printed materials builds recognition, and recognition builds trust.
              </p>
              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                Working with a <strong className="text-secondary font-bold">professional graphic designer</strong> ensures every piece of content reflects your brand personality and speaks directly to your target audience, whether you're launching a new business or refreshing an existing one. Professional design also saves money in the long run, because you avoid costly reprints and rebrands caused by rushed, inconsistent work.
              </p>
            </div>
          </div>
        </section>

        {/* OUR SERVICES GRID */}
        <section className="sm:py-16 py-10 relative bg-surface/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Our Graphic Design Services</h2>
              <p className="text-zinc-300 text-sm font-sans">We offer a complete set of creative services under one roof:</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="group relative p-8 rounded-3xl bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/10 hover:border-amber-500/50 hover:bg-white/[0.04] transition-all duration-500">
                  <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/5 group-hover:text-amber-500/10 transition-colors duration-500 pointer-events-none select-none">
                    {service.number}
                  </div>
                  <div className="mb-6 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(90deg, #5482b4, #c3e9fe)' }}>
                    <service.icon size={32} className="text-[#020e24]" />
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-white mb-4">{service.title}</h3>
                  <p className="text-zinc-400 text-sm font-sans leading-relaxed">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEEP DIVE SECTIONS */}
        <section className="sm:py-16 py-10 relative">
          <div className="max-w-7xl mx-auto sm:px-6 px-4 space-y-16 relative z-10">
            
            <div className="max-w-5xl text-left">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Logo Design That Makes Your Brand Memorable</h2>
              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                Your logo is the face of your business. As a trusted <strong className="text-secondary font-bold">logo design company in Bahawalpur</strong>, we create logos that are simple, distinctive, and versatile enough to work everywhere, from a tiny mobile app icon to a large shop signboard. We start by learning about your business, audience, and competitors, then develop several concepts for you to review. You share your feedback, and we refine the design until it feels exactly right. You receive final files in every format needed for both print and digital use.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
               <div className="bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/5 p-8 rounded-3xl">
                 <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-6">Brand Identity Design for Consistent, Professional Branding</h2>
                 <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                   A logo alone isn't a brand. <strong className="text-secondary font-bold">Brand identity design</strong> brings together every visual element that represents your business, including colours, fonts, imagery style, icons, and layout rules. We create a complete brand guideline document so your team, printers, and partners can use your brand consistently. This consistency makes your business instantly recognisable and helps it look professional at every customer touchpoint, online and offline.
                 </p>
               </div>
               
               <div className="bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/5 p-8 rounded-3xl">
                 <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-6">UI/UX Design Services for Websites and Apps</h2>
                 <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                   A website or app can have powerful features and still fail if users find it confusing. Our <strong className="text-secondary font-bold">UI/UX design services</strong> focus on making digital products easy, enjoyable, and effective to use. We research user needs, map customer journeys, create wireframes, and design polished interfaces in tools like Figma. Because NEFFTO also offers web and app development, our designs move smoothly into development without costly gaps or misunderstandings between designers and developers.
                 </p>
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
               <div className="bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/5 p-8 rounded-3xl">
                 <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-6">Social Media Post Design That Stops the Scroll</h2>
                 <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                   Social media is crowded, and you only have a second or two to catch someone's attention. Our <strong className="text-secondary font-bold">social media post design</strong> service creates bold, on-brand graphics for Facebook, Instagram, LinkedIn, TikTok, and X. We design regular content posts, carousels, stories, cover images, and paid ad creatives that are sized and styled correctly for each platform. Consistent, high-quality visuals help grow your followers, increase engagement, and support your wider digital marketing campaigns.
                 </p>
               </div>
               
               <div className="bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/5 p-8 rounded-3xl">
                 <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-6">Print Design and Marketing Materials</h2>
                 <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                   Despite the rise of digital channels, printed materials still play an important role for many businesses. We design business cards, brochures, flyers, product labels, packaging, banners, and stationery that carry your brand identity into the physical world. Every file is prepared to print-ready standards, with correct colour settings and bleed, so your materials look sharp and professional every time.
                 </p>
               </div>
            </div>

            <div className="max-w-5xl text-left">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Design for Every Stage of Your Business</h2>
              <p className="text-sm sm:text-base text-zinc-300 font-sans mb-6 leading-relaxed">
                Our graphic design services adapt to where your business is today. New startups often need a logo, business cards, and launch graphics to get off the ground quickly. Established businesses may need a brand refresh, a full set of brand guidelines, or a steady supply of marketing creatives for campaigns and seasonal promotions. Whatever stage you're at, a <strong className="text-secondary font-bold">professional graphic designer</strong> from our team will recommend the design work that will make the biggest impact for your budget.
              </p>
              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                Local businesses in particular benefit from working with a <strong className="text-secondary font-bold">logo design company in Bahawalpur</strong> that understands the local market, culture, and customer expectations, while still delivering designs that stand up to international standards. We regularly create branding for shops, restaurants, schools, clinics, and online sellers who want to look professional and trustworthy from day one.
              </p>
            </div>

          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="sm:py-16 py-10 relative bg-surface/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Our Graphic Design Process</h2>
              <p className="text-sm text-zinc-300 font-sans">Our simple, collaborative process keeps you involved from the first idea to the final file:</p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-6.75 top-4 bottom-4 w-px bg-linear-to-b from-primary/50 via-secondary/10 to-transparent md:left-1/2 md:-ml-px" />
              
              <div className="space-y-12">
                {process.map((step, index) => (
                  <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-main-bg border-4 border-secondary/20 flex items-center justify-center translate-x-0 md:-translate-x-1/2 text-secondary font-bold z-10">
                      {step.number}
                    </div>
                    <div className={`pl-20 md:pl-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                      <div className="p-8 rounded-3xl bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/10 hover:border-secondary/30 transition-colors">
                        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white mb-4">{step.title}</h3>
                        <p className="text-zinc-400 text-sm font-sans leading-relaxed">{step.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="sm:py-16 py-10 relative">
          <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10">
            <div className="max-w-3xl mb-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Why Choose NEFFTO for Graphic Design</h2>
              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                Here's why businesses trust our creative team with their brand:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {whyChooseUs.map((point, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/5">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <p className="text-zinc-300 text-sm font-sans leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
            
            <div className="max-w-3xl">
              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed italic border-l-4 border-amber-500/50 pl-6 py-2">
                Choosing NEFFTO means working with a team that understands both creativity and business, so your designs look great and deliver real results. Our <strong className="text-secondary font-bold">graphic design services in Pakistan</strong> are built to give growing businesses the kind of polished branding that was once available only to large companies.
              </p>
            </div>
          </div>
        </section>

        {/* FAQS */}
        <FAQ faqs={faqs} />


        {/* CTA SECTION */}
        <section className="sm:py-16 py-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary-navy z-0" />
          <div className="max-w-4xl mx-auto sm:px-6 px-4 relative z-10 text-center">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-8">Let's Design Something Remarkable</h2>
            <p className="text-zinc-300 text-sm font-sans mb-10 leading-relaxed">
              Your brand deserves visuals that match the quality of your work. Whether you need a new logo, a complete brand identity, a user-friendly app interface, or eye-catching social media graphics, NEFFTO's <strong className="text-secondary font-bold">graphic design services in Pakistan</strong> are here to help. Contact us today to discuss your project and get a free quote.
            </p>
            <GlowButton name="Get a Free Quote" to="/contact" className="bg-surface text-white border-2 border-surface" hover="hover:text-surface" layerHover="bg-white" />
          </div>
        </section>

      </main>
    </>
  );
};

export default GraphicDesigning;