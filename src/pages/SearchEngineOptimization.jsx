import React from "react";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import GlowButton from "../components/GlowButton";
import FAQ from "../components/FAQ";
import {
  Search,
  BarChart,
  FileText,
  MapPin,
  Link,
  ShoppingCart,
  Check,
  ChevronDown,
  Globe2,
  TrendingUp,
  Activity,
  Award
} from "lucide-react";

import HeroBg from "../assets/seo.jpg";

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
    icon: Activity,
    number: "01",
    title: "SEO Audit",
    text: "A detailed review of your website's technical health, content, and backlinks.",
  },
  {
    icon: Search,
    number: "02",
    title: "Keyword Research",
    text: "Finding the search terms your customers actually use, in your target market.",
  },
  {
    icon: Globe2,
    number: "03",
    title: "On-Page and Technical SEO",
    text: "Optimising content, meta tags, site speed, structure, and indexing.",
  },
  {
    icon: MapPin,
    number: "04",
    title: "Local SEO Services",
    text: "Google Business Profile optimisation and local citations to win nearby customers.",
  },
  {
    icon: FileText,
    number: "05",
    title: "Content Writing",
    text: "SEO-friendly service pages, blogs, and product descriptions.",
  },
  {
    icon: Link,
    number: "06",
    title: "Link Building",
    text: "Earning quality backlinks from relevant, trustworthy websites.",
  },
];

const process = [
  {
    number: "01",
    title: "Audit",
    text: "We analyse your website, rankings, competitors, and backlink profile.",
  },
  {
    number: "02",
    title: "Strategy",
    text: "We choose target keywords and create a custom SEO roadmap.",
  },
  {
    number: "03",
    title: "Optimisation",
    text: "We fix technical issues and optimise on-page elements.",
  },
  {
    number: "04",
    title: "Content",
    text: "We create and improve content that targets valuable searches.",
  },
  {
    number: "05",
    title: "Authority Building",
    text: "We earn quality backlinks and local citations.",
  },
  {
    number: "06",
    title: "Tracking and Reporting",
    text: "We monitor rankings, traffic, and conversions and report monthly.",
  },
];

const whyChooseUs = [
  "100% white-hat SEO techniques that follow Google's guidelines.",
  "Custom strategies instead of generic, one-size-fits-all packages.",
  "Transparent monthly reporting on rankings, traffic, and leads.",
  "In-house developers to fix technical SEO issues quickly.",
  "Experience with local SEO, e-commerce SEO, and Shopify SEO in multiple markets.",
  "Honest timelines with no fake ranking guarantees.",
];

const faqs = [
  {
    question: "How long does SEO take to show results?",
    answer: "Most websites begin to see noticeable improvements within three to six months, depending on competition, the current condition of the website, and the amount of work required.",
  },
  {
    question: "Do you guarantee first-page rankings?",
    answer: "No honest SEO company can guarantee specific rankings, because Google controls its algorithm. What we do guarantee is transparent, high-quality work based on proven best practices.",
  },
  {
    question: "Do you provide SEO services for businesses in the Bahawalpur?",
    answer: "Yes. We work as an SEO company in Bahawalpur businesses hire for competitively priced, high-quality SEO, alongside our work with clients internationally.",
  },
  {
    question: "What is included in your affordable SEO packages?",
    answer: "Packages typically include keyword research, on-page and technical SEO, content optimisation, local SEO, link building, and monthly reporting.",
  },
];

const SearchEngineOptimization = () => {
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
    name: "SEO Services",
    serviceType: "Search Engine Optimization",
    description: "Rank higher on Google in Bahawalpur with NEFFTO's SEO services: local SEO, on-page and technical SEO, keyword research and affordable SEO packages for Bahawalpur and beyond.",
    provider: {
      "@type": "Organization",
      name: "Neffto Solution",
      url: "https://nefftosolution.com/",
    },
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    url: "https://nefftosolution.com/services/seo",
  };

  return (
    <>
            <SEO
        title="SEO Services in Pakistan | SEO Company in Bahawalpur"
        description="Rank higher on Google with NEFFTO's SEO services in Pakistan: local SEO, on-page and technical SEO, keyword research and affordable SEO packages."
        canonical="https://nefftosolution.com/services/seo"
        ogTitle="SEO Services in Pakistan | SEO Company in Bahawalpur"
        ogDescription="Rank higher on Google with NEFFTO's SEO services in Pakistan: local SEO, on-page and technical SEO, keyword research and affordable SEO packages."
        schema={JSON.stringify([serviceSchema, faqSchema])}
        keywords="SEO services in Pakistan, SEO company in Bahawalpur, local SEO services, on-page and technical SEO, affordable SEO packages, keyword research"
      />

      <main className="bg-main-bg min-h-screen text-slate-200 selection:bg-indigo-500/30 selection:text-indigo-200 font-sans pt-20">
        
        {/* HERO SECTION */}
        
        {/* UNIQUE HERO: SEO (Search Bar Design) */}
        <section className="relative flex items-center py-20 overflow-hidden bg-main-bg">
          <div className="absolute inset-0 z-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-[#042558] rounded-full blur-[150px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full sm:text-center">
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-secondary text-sm font-bold tracking-wide uppercase mb-8">
                <Search className="w-4 h-4" />
                <span>Search Engine Optimization</span>
              </motion.div>
              
              <motion.div variants={fadeUp} className="relative max-w-3xl mx-auto mb-10">
                 <div className="w-full bg-white border-2 border-[#5482b4] rounded-full h-12 sm:h-20 flex items-center px-6 sm:px-8 shadow-[0_0_40px_rgba(84,130,180,0.3)]">
                    <Search className="w-6 h-6 sm:w-8 sm:h-8 text-zinc-400 shrink-0" />
                    <div className="ml-4 w-px h-8 bg-zinc-200 shrink-0" />
                    <h1 className="text-xs sm:text-xl font-black uppercase tracking-tighter text-[#020e24] leading-tight ml-4 truncate">
                      SEO Services That Help You Rank Higher on Google
                    </h1>
                 </div>
              </motion.div>
              
              <motion.p variants={fadeUp} className="text-sm sm:text-base md:text-lg text-zinc-300 font-sans mb-10 leading-relaxed bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                When customers need a product or service, the first thing most of them do is search on Google, no matter where they live. If your business doesn't appear on the first page, those customers will find your competitors instead. NEFFTO IT Solution provides professional <strong className="text-secondary font-bold">SEO services</strong> that help businesses climb search rankings, attract qualified organic traffic, and generate consistent leads without paying for every click.
              </motion.p>

              <motion.div variants={fadeUp}>
                <GlowButton name="Get a Free Quote" to="/contact" className="bg-surface text-white border-2 border-surface" hover="hover:text-surface" layerHover="bg-white" />
              </motion.div>
            </motion.div>
          </div>
        </section>


        {/* WHY YOUR BUSINESS NEEDS SECTION */}
        <section className="sm:py-16 py-10 relative border-t border-white/5">
          <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10 flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="w-full md:w-1/2 relative">
               <div className="absolute inset-0 bg-secondary/20 blur-[100px] rounded-full" />
               <div className="relative bg-white/5 glass backdrop-blur-md border border-white/10 rounded-3xl p-8 grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center text-center gap-3">
                     <TrendingUp className="w-10 h-10 text-secondary" />
                     <span className="font-semibold text-white">Organic Traffic</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                     <Award className="w-10 h-10 text-secondary" />
                     <span className="font-semibold text-white">Brand Trust</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                     <BarChart className="w-10 h-10 text-secondary" />
                     <span className="font-semibold text-white">High ROI</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                     <Globe2 className="w-10 h-10 text-secondary" />
                     <span className="font-semibold text-white">Long-term Growth</span>
                  </div>
               </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Why SEO Is a Smart Long-Term Investment</h2>
              <p className="text-sm sm:text-base text-zinc-300 font-sans mb-6 leading-relaxed">
                As an SEO company in Bahawalpur agencies and business owners increasingly work with for its combination of quality and value, we serve clients across Bahawalpur, using ethical, white-hat techniques combined with clear reporting.
              </p>
            </div>
          </div>
        </section>

        {/* OUR SERVICES GRID */}
        <section className="sm:py-16 py-10 relative bg-surface/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Our SEO Services</h2>
              <p className="text-zinc-300 text-sm font-sans">We provide complete SEO support, covering every factor that influences your rankings:</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              {services.map((service, index) => (
                <div key={index} className={`group relative p-8 rounded-3xl bg-white/5 glass backdrop-blur-md border border-white/10 hover:border-indigo-500/50 hover:bg-white/4 transition-all duration-500 ${index === 6 ? 'lg:col-start-2' : ''}`}>
                  <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/5 group-hover:text-indigo-500/10 transition-colors duration-500 pointer-events-none select-none">
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
            
            <div className="grid md:grid-cols-2 gap-12">
               <div className="bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/5 p-8 rounded-3xl">
                 <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-6">On-Page and Technical SEO</h2>
                 <p className="text-sm sm:text-base text-zinc-300 font-sans mb-6 leading-relaxed">
                   Strong rankings start with a solid foundation. Our <strong className="text-secondary font-bold">on-page and technical SEO</strong> work makes sure search engines can crawl, understand, and trust your website, wherever it is hosted or targeted. We improve page speed, fix broken links and crawl errors, strengthen mobile usability, set up XML sitemaps and robots.txt, add schema markup, and improve Core Web Vitals.
                 </p>
               </div>
               
               <div className="flex flex-col gap-12">
                  <div className="bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/5 p-8 rounded-3xl grow">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-6">Local SEO Services to Win Customers Near You</h2>
                    <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                      If your business serves a specific city or region, anywhere in Bahawalpur, <strong className="text-secondary font-bold">local SEO services</strong> are essential. When someone searches for a service "near me", Google shows a map pack of local businesses above most other results. We optimise your Google Business Profile, build consistent local citations, encourage genuine customer reviews, and create location-focused content.
                    </p>
                  </div>
               </div>
            </div>

            <div className="max-w-4xl mx-auto text-center bg-indigo-950/20 border border-secondary/20 p-10 rounded-3xl">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Keyword Research and SEO Content</h2>
              <p className="text-sm sm:text-base text-zinc-300 font-sans mb-6 leading-relaxed">
                Effective SEO begins with understanding exactly what your customers are searching for, in their own language and market. Our <strong className="text-secondary font-bold">keyword research</strong> looks at search volume, competition, and buying intent, and then we build a content plan around the terms most likely to bring you paying customers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/5 p-8 rounded-3xl md:col-span-1">
                  <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white mb-4">Affordable SEO Packages for Every Business</h2>
                  <p className="text-zinc-300 text-sm font-sans leading-relaxed">
                     SEO shouldn't be out of reach for small and growing businesses anywhere. We offer <strong className="text-secondary font-bold">affordable SEO packages</strong> designed for different goals and budgets, from local businesses targeting their own city to e-commerce stores competing across Bahawalpur.
                  </p>
               </div>
               
               <div className="bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/5 p-8 rounded-3xl md:col-span-1">
                  <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white mb-4">E-commerce and Shopify SEO</h2>
                  <p className="text-zinc-300 text-sm font-sans leading-relaxed">
                     Online stores face unique SEO challenges, such as duplicate product pages, thin descriptions, and slow loading category pages. Our e-commerce SEO service fixes these issues and optimises your product and collection pages so they appear when shoppers search for what you sell. For Shopify stores, we improve site structure, apps, speed, and structured data so your products can show rich results like prices and ratings in Google.
                  </p>
               </div>
               
               <div className="bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/5 p-8 rounded-3xl md:col-span-1">
                  <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white mb-4">Transparent Reporting You Can Understand</h2>
                  <p className="text-zinc-300 text-sm font-sans leading-relaxed">
                     SEO shouldn't feel like a mystery. Every month you'll receive a clear report showing keyword rankings, organic traffic, leads, and the work completed, along with our plan for the next month. As your <strong className="text-secondary font-bold">SEO company in Bahawalpur</strong>, we're always available to explain results and answer your questions in plain language.
                  </p>
               </div>
            </div>

          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="sm:py-16 py-10 relative bg-surface/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Our SEO Process</h2>
              <p className="text-zinc-300 text-sm font-sans">We follow a structured, transparent process that builds rankings step by step:</p>
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
            <div className="max-w-3xl mb-12 mx-auto text-center">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Why Choose NEFFTO as Your SEO Company</h2>
              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                Here's what makes our SEO service different:
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {whyChooseUs.map((point, index) => (
                <div key={index} className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/5 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Check className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="text-zinc-300 text-sm font-sans leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
            
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed italic border-x-4 border-indigo-500/50 px-6 py-2 rounded-xl bg-white/1">
                We believe in building long-term, sustainable growth. That means no shortcuts or risky tactics that could harm your website in the future.
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
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-8">Get Found on Google Today</h2>
            <p className="text-zinc-300 text-sm font-sans mb-10 leading-relaxed">
              Every day your website isn't ranking, potential customers are going to your competitors, wherever they are. Let NEFFTO IT Solution's <strong className="text-secondary font-bold">SEO services</strong> put your business in front of the people who are already searching for you. Contact us today for a free SEO audit.
            </p>
            <GlowButton name="Get a Free Quote" to="/contact" className="bg-surface text-white border-2 border-surface" hover="hover:text-surface" layerHover="bg-white" />
          </div>
        </section>

      </main>
    </>
  );
};

export default SearchEngineOptimization;