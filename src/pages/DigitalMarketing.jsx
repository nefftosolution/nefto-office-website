import React from "react";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import GlowButton from "../components/GlowButton";
import FAQ from "../components/FAQ";
import {
  LineChart,
  Megaphone,
  MousePointerClick,
  FileText,
  Mail,
  BarChart,
  Check,
  ChevronDown,
  Target,
  Users,
  Search,
  MapPin,
  TrendingUp,
  Smartphone
} from "lucide-react";

import HeroBg from "../assets/DigitalMarketing.jpg";

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
    icon: Users,
    number: "01",
    title: "Social Media Marketing",
    text: "Strategy, content, and community management for Facebook, Instagram, LinkedIn, and TikTok.",
  },
  {
    icon: Search,
    number: "02",
    title: "Google Ads Management",
    text: "Search, display, shopping, and YouTube campaigns that target high-intent customers.",
  },
  {
    icon: MousePointerClick,
    number: "03",
    title: "Facebook Ads Services",
    text: "Targeted Meta ad campaigns across Facebook and Instagram to generate leads and sales.",
  },
  {
    icon: FileText,
    number: "04",
    title: "Content Marketing",
    text: "Blogs, videos, and creative content that attract and educate your audience.",
  },
  {
    icon: Mail,
    number: "05",
    title: "Email Marketing",
    text: "Newsletters and automated email sequences that nurture leads and bring back past customers.",
  },
  {
    icon: BarChart,
    number: "06",
    title: "Analytics and Reporting",
    text: "Clear monthly reports showing traffic, leads, conversions, and return on ad spend.",
  },
];

const process = [
  {
    number: "01",
    title: "Audit and Research",
    text: "We analyse your current presence, competitors, and target audience.",
  },
  {
    number: "02",
    title: "Strategy",
    text: "We create a clear plan with goals, channels, budget, and timeline.",
  },
  {
    number: "03",
    title: "Creative and Setup",
    text: "We produce content and ads and set up accurate tracking.",
  },
  {
    number: "04",
    title: "Launch",
    text: "We launch your campaigns and monitor them closely.",
  },
  {
    number: "05",
    title: "Optimise",
    text: "We test, measure, and improve performance continuously.",
  },
  {
    number: "06",
    title: "Report",
    text: "We share transparent reports and recommendations every month.",
  },
];

const whyChooseUs = [
  "Data-driven strategies focused on leads and sales, not just likes.",
  "In-house design, video, and web teams for faster execution.",
  "Transparent reporting with clear, easy-to-understand results.",
  "Flexible packages for startups, small businesses, and growing brands.",
  "Close collaboration with our SEO team for complete online growth.",
  "Honest advice about what will and won't work for your business.",
];

const faqs = [
  {
    question: "How soon will I see results from digital marketing?",
    answer: "Paid campaigns like Google Ads and Facebook ads can start generating enquiries within days, while social media growth and content marketing build momentum over a few months.",
  },
  {
    question: "What budget do I need for Facebook ads services?",
    answer: "You can start with a modest daily budget. We'll recommend a suitable budget based on your goals, industry, and level of competition.",
  },
  {
    question: "Do you manage both Google Ads and social media marketing?",
    answer: "Yes, we manage all major channels and can combine them into one coordinated strategy for stronger results.",
  },
  {
    question: "Will I receive regular reports?",
    answer: "Yes, you'll receive clear reports showing performance, spending, and results, along with our recommendations for the next month.",
  },
];

const DigitalMarketing = () => {
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
    name: "Digital Marketing Services",
    serviceType: "Digital Marketing",
    description: "Grow leads and sales with NEFFTO, a digital marketing agency in Pakistan offering social media marketing, Google Ads and Facebook ads services.",
    provider: {
      "@type": "Organization",
      name: "Neffto Solution",
      url: "https://nefftosolution.com/",
    },
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    url: "https://nefftosolution.com/services/digital-marketing",
  };

  return (
    <>
      <SEO
        title="Digital Marketing Agency in Pakistan | NEFFTO IT Solution"
        description="Grow leads and sales with NEFFTO, a digital marketing agency in Pakistan offering social media marketing, Google Ads and Facebook ads services."
        canonical="https://nefftosolution.com/services/digital-marketing"
        ogTitle="Digital Marketing Agency in Pakistan | NEFFTO IT Solution"
        ogDescription="Grow leads and sales with NEFFTO, a digital marketing agency in Pakistan offering social media marketing, Google Ads and Facebook ads services."
        schema={JSON.stringify([serviceSchema, faqSchema])}
        keywords="digital marketing agency in Pakistan, digital marketing services in Bahawalpur, social media marketing, Google Ads management, Facebook ads services, online marketing for small business"
      />

      <main className="bg-main-bg min-h-screen text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200 font-sans pt-20">
        
        {/* HERO SECTION */}
        
        {/* UNIQUE HERO: DIGITAL MARKETING (Charts & Metrics Layout) */}
        <section className="relative flex items-center py-20 overflow-hidden bg-main-bg">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#042558] skew-x-[-20deg] translate-x-32 hidden lg:block opacity-50" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-2xl">
                <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-secondary text-sm font-bold tracking-wide uppercase mb-6">
                  <Target className="w-4 h-4" />
                  <span>Digital Marketing</span>
                </motion.div>
                
                <motion.h1 variants={fadeUp} className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white leading-tight mb-6">
                  Digital Marketing Agency in Pakistan: Grow Your Leads, Sales and Brand Online
                </motion.h1>
                
                <motion.p variants={fadeUp} className="text-sm sm:text-base md:text-lg text-zinc-300 font-sans mb-10 leading-relaxed">
                  Having a great product or service is only half the battle. The other half is making sure the right people know about it. NEFFTO IT Solution is a results-focused <strong className="text-secondary font-bold">digital marketing agency in Pakistan</strong> that helps businesses reach new customers, build strong online brands, and turn clicks into real sales.
                </motion.p>

                <motion.div variants={fadeUp}>
                  <GlowButton name="Get a Free Quote" to="/contact" className="bg-surface text-white border-2 border-surface" hover="hover:text-surface" layerHover="bg-white" />
                </motion.div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="hidden lg:flex flex-col gap-6 relative">
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-2xl ml-12">
                    <div className="flex justify-between items-end mb-4">
                       <div className="text-zinc-400 text-sm font-bold uppercase">Total Reach</div>
                       <div className="text-green-400 text-sm font-bold flex items-center gap-1"><TrendingUp className="w-4 h-4" /> +145%</div>
                    </div>
                    <div className="text-4xl font-black text-white mb-6">845.2K</div>
                    <div className="flex items-end gap-2 h-20">
                       {[30, 50, 40, 70, 60, 90, 80].map((h, i) => (
                          <div key={i} className="flex-1 bg-[#5482b4] rounded-t-sm" style={{ height: `${h}%` }} />
                       ))}
                    </div>
                 </div>
                 
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-2xl mr-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><Target size={100} /></div>
                    <div className="text-zinc-400 text-sm font-bold uppercase mb-2">Conversion Rate</div>
                    <div className="text-3xl font-black text-secondary">4.8%</div>
                 </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* WHY YOUR BUSINESS NEEDS SECTION */}
        <section className="sm:py-16 py-10 relative border-t border-white/5">
          <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <Megaphone className="w-12 h-12 text-secondary mb-4" />
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Why Digital Marketing Is Essential for Your Business</h2>
              <p className="text-sm sm:text-base text-zinc-300 font-sans mb-6 leading-relaxed">
                Your customers are online every day, scrolling social media, searching on Google, and watching videos. Digital marketing lets you reach them exactly where they spend their time, with messages tailored to their interests, location, and buying intent. Unlike traditional advertising, every rupee spent online can be measured, so you know exactly what's working and where to invest more.
              </p>
              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                For small and medium businesses, <strong className="text-secondary font-bold">online marketing for small business</strong> is one of the most cost-effective ways to compete with bigger brands. With the right strategy, even a modest budget can generate a steady flow of enquiries and sales, and those results can be scaled up as your business grows.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative">
               <div className="absolute inset-0 bg-secondary/20 blur-[100px] rounded-full" />
               <div className="relative bg-white/5 glass backdrop-blur-md border border-white/10 rounded-3xl p-8 grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center text-center gap-3">
                     <Target className="w-10 h-10 text-secondary" />
                     <span className="font-semibold text-white">Precise Targeting</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                     <TrendingUp className="w-10 h-10 text-secondary" />
                     <span className="font-semibold text-white">Measurable ROI</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                     <Users className="w-10 h-10 text-secondary" />
                     <span className="font-semibold text-white">Global Reach</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                     <Megaphone className="w-10 h-10 text-secondary" />
                     <span className="font-semibold text-white">Brand Awareness</span>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* OUR SERVICES GRID */}
        <section className="sm:py-16 py-10 relative bg-surface/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Our Digital Marketing Services</h2>
              <p className="text-zinc-300 text-sm font-sans">We offer a full set of online marketing services that work together to grow your business:</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="group relative p-8 rounded-3xl bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/10 hover:border-emerald-500/50 transition-all duration-500">
                  <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/5 group-hover:text-emerald-500/10 transition-colors duration-500 pointer-events-none select-none">
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
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Social Media Marketing That Builds Real Engagement</h2>
                <p className="text-sm sm:text-base text-zinc-300 font-sans mb-6 leading-relaxed">
                  Social media is where many customers first discover and connect with brands. Our <strong className="text-secondary font-bold">social media marketing</strong> service helps you build a consistent, professional presence that grows your audience and keeps them engaged. We create content calendars, design on-brand posts, write engaging captions, and respond to comments and messages to build a genuine community around your business.
                </p>
                <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                  We tailor our approach to each platform, using short-form video and reels on Instagram and TikTok, professional thought leadership on LinkedIn, and community-driven content on Facebook. Every post has a purpose, whether that's building awareness, starting conversations, or driving people to your website.
                </p>
              </div>
              <div className="hidden md:flex justify-end">
                 <div className="w-48 h-48 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                    <Smartphone size={80} className="text-blue-500/50" />
                 </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="hidden md:flex justify-start">
                 <div className="w-48 h-48 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center animate-[bounce_5s_ease-in-out_infinite]">
                    <Search size={80} className="text-red-400/50" />
                 </div>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Google Ads Management for High-Intent Customers</h2>
                <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                  When someone searches for your product or service on Google, they're often ready to buy. Our <strong className="text-secondary font-bold">Google Ads management</strong> service puts your business at the top of search results for those valuable searches. We handle keyword research, ad copywriting, landing page recommendations, bid strategy, and conversion tracking. We regularly review search terms, remove wasted spend, and refine targeting so your budget works harder every single month.
                </p>
              </div>
            </div>

            <div className="max-w-5xl text-left">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Facebook Ads Services That Generate Leads and Sales</h2>
              <p className="text-sm sm:text-base text-zinc-300 font-sans mb-6 leading-relaxed">
                Facebook and Instagram offer some of the most detailed audience targeting available anywhere. Our <strong className="text-secondary font-bold">Facebook ads services</strong> use this power to put your offers in front of people based on their location, age, interests, and online behaviour. We design scroll-stopping creatives, write persuasive ad copy, set up the Meta Pixel for accurate tracking, and build retargeting campaigns that bring back visitors who didn't buy the first time.
              </p>
              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                Whether your goal is more WhatsApp enquiries, more online orders, or more sign-ups, we structure every campaign around the result that matters most to your business.
              </p>
              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                Our team also creates high-quality video ads and carousel creatives in-house, so your campaigns always have fresh content ready to test.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
               <div className="bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/5 p-8 rounded-3xl">
                 <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-6">Online Marketing for Small Business</h2>
                 <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                   We understand that small businesses need to see results without overspending. Our <strong className="text-secondary font-bold">online marketing for small business</strong> packages are designed to deliver maximum impact on a controlled budget. We focus on the channels most likely to bring you customers, whether that's local Facebook ads, Google search campaigns, or a strong organic social media presence, and we scale up as your results grow.
                 </p>
               </div>
               
               <div className="bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/5 p-8 rounded-3xl">
                 <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-6">Local Marketing for Businesses in Bahawalpur and Beyond</h2>
                 <p className="text-sm sm:text-base text-zinc-300 font-sans mb-6 leading-relaxed">
                   For businesses that serve a specific city or area, local targeting makes every rupee count. Our <strong className="text-secondary font-bold">digital marketing services in Bahawalpur</strong> help shops, restaurants, clinics, schools, and service providers reach people in their own neighbourhood, using location-based ads, local keywords, and Google Business Profile promotion. The same approach works for businesses in Lahore, Karachi, Islamabad, Multan, and any other city you want to target.
                 </p>
                 <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                   For e-commerce brands selling nationwide or overseas, we build broader campaigns with product catalogues, dynamic retargeting, and conversion tracking that shows exactly which ads are producing sales, so you can grow with confidence.
                 </p>
               </div>
            </div>

          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="sm:py-16 py-10 relative bg-surface/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Our Digital Marketing Process</h2>
              <p className="text-sm text-zinc-300 font-sans">Every campaign follows a proven process built around clear goals and continuous improvement:</p>
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
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Why Choose NEFFTO as Your Digital Marketing Agency in Pakistan</h2>
              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                Here's why businesses trust us with their marketing budgets:
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
              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed italic border-l-4 border-emerald-500/50 pl-6 py-2">
                Because we also build websites, design graphics, and handle SEO in-house, your marketing campaigns are supported by landing pages and creatives that are designed to convert.
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
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-8">Ready to Grow Your Business Online?</h2>
            <p className="text-zinc-300 text-sm font-sans mb-10 leading-relaxed">
              Stop guessing and start growing. Partner with NEFFTO IT Solution, the <strong className="text-secondary font-bold">digital marketing agency in Pakistan</strong> that focuses on real, measurable results. Contact us today for a free marketing audit and discover how we can help you attract more customers and increase your sales.
            </p>
            <GlowButton name="Get a Free Quote" to="/contact" className="bg-surface text-white border-2 border-surface" hover="hover:text-surface" layerHover="bg-white" />
          </div>
        </section>

      </main>
    </>
  );
};

export default DigitalMarketing;