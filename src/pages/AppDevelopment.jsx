import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import GlowButton from "../components/GlowButton";
import FAQ from "../components/FAQ";
import {
  Smartphone,
  Apple,
  Layers,
  Code2,
  Palette,
  Wrench,
  Check,
  ChevronDown,
  ShieldCheck,
  Zap,
  ShoppingBag,
  Utensils,
  CalendarDays,
  BookOpen,
  Home,
  Briefcase
} from "lucide-react";

import HeroBg from "../assets/app.webp";

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
    icon: Smartphone,
    number: "01",
    title: "Android App Development",
    text: "Native and hybrid Android apps built for the wide range of devices used in Bahawalpur.",
  },
  {
    icon: Apple,
    number: "02",
    title: "iOS App Development",
    text: "Smooth, secure iPhone and iPad apps designed to meet Apple's quality standards and App Store guidelines.",
  },
  {
    icon: Layers,
    number: "03",
    title: "Cross-Platform App Development",
    text: "One codebase for Android and iOS using Flutter or React Native, saving both time and cost.",
  },
  {
    icon: Code2,
    number: "04",
    title: "Custom Mobile App Development",
    text: "Apps built from scratch around your unique business processes and user needs.",
  },
  {
    icon: Palette,
    number: "05",
    title: "App UI/UX Design",
    text: "Intuitive screens, clear user journeys, and modern visual design.",
  },
  {
    icon: Wrench,
    number: "06",
    title: "App Maintenance and Support",
    text: "Updates, bug fixes, performance improvements, and new features after launch.",
  },
];

const industries = [
  { icon: ShoppingBag, text: "E-commerce apps." },
  { icon: Utensils, text: "Food delivery apps." },
  { icon: CalendarDays, text: "Booking and appointments apps." },
  { icon: BookOpen, text: "Education apps." },
  { icon: Home, text: "Real estate apps." },
  { icon: Briefcase, text: "Business management tools." },
];

const process = [
  {
    number: "01",
    title: "Idea and Research",
    text: "We understand your idea, target users, and competitors.",
  },
  {
    number: "02",
    title: "Planning and Features",
    text: "We define core features, user flows, and a realistic roadmap.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    text: "We design clickable prototypes so you can see and feel the app before development starts.",
  },
  {
    number: "04",
    title: "Development",
    text: "Our developers build the app in stages, with regular demos for your feedback.",
  },
  {
    number: "05",
    title: "Quality Testing",
    text: "We test on real devices for bugs, speed, and security.",
  },
  {
    number: "06",
    title: "Launch",
    text: "We publish your app on Google Play and the Apple App Store.",
  },
  {
    number: "07",
    title: "Growth and Support",
    text: "We monitor performance and add new features as you grow.",
  },
];

const whyChooseUs = [
  "An experienced team skilled in Android, iOS, and cross-platform frameworks.",
  "User-focused design that keeps people coming back, in any market.",
  "Clean, scalable code that is ready for future features.",
  "Transparent communication and regular progress updates across time zones.",
  "Fair, clear pricing suited to startups and small businesses in Bahawalpur.",
  "Ongoing support and maintenance after launch.",
];

const faqs = [
  {
    question: "How much does it cost to build a mobile app?",
    answer: "Cost depends on features, design complexity, and the platforms you need. Share your idea with us and we'll provide a detailed, no-obligation quote in your currency.",
  },
  {
    question: "Should I choose native or cross-platform app development?",
    answer: "Cross-platform app development is ideal for most startups and businesses because it covers both platforms with one codebase. Native development is better for apps that need heavy device-level performance.",
  },
  {
    question: "Do you build apps for clients in Bahawalpur?",
    answer: "Yes. We work as a mobile app development company in Bahawalpur founders can reach easily, with support for Bahawalpur App Store and Play Store publishing, Bahawalpur payment gateways, and Bahawalpur business hours.",
  },
  {
    question: "Will you publish my app on the Play Store and App Store?",
    answer: "Yes, we handle the complete publishing process for both stores, including listings, screenshots, and compliance checks, for any target country.",
  },
];

const AppDevelopment = () => {
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
    name: "App Development Services",
    serviceType: "Mobile App Development",
    description: "Android, iOS and cross-platform app development services for clients in Bahawalpur and across Bahawalpur. NEFFTO builds custom mobile apps that users love.",
    provider: {
      "@type": "Organization",
      name: "Neffto Solution",
      url: "https://nefftosolution.com/",
    },
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    url: "https://nefftosolution.com/services/app-development",
  };

  return (
    <>
                        <SEO
        title="Mobile App Development Company in Pakistan | NEFFTO"
        description="Android, iOS and cross-platform app development services in Bahawalpur and Pakistan. NEFFTO builds custom mobile apps that users love. Get a free quote."
        canonical="https://nefftosolution.com/services/app-development"
        ogTitle="Mobile App Development Company in Pakistan | NEFFTO"
        ogDescription="Android, iOS and cross-platform app development services in Bahawalpur and Pakistan. NEFFTO builds custom mobile apps that users love. Get a free quote."
        schema={JSON.stringify([serviceSchema, faqSchema])}
        keywords="mobile app development company in Pakistan, app development services in Bahawalpur, Android app development, iOS app development, cross-platform app development, custom mobile app development"
      />

      <main className="bg-main-bg min-h-screen text-slate-200 selection:bg-purple-500/30 selection:text-purple-200 font-sans pt-20">
        
        {/* HERO SECTION */}
        
        {/* UNIQUE HERO: APP DEVELOPMENT (Central Hub / Orbit Design) */}
        <section className="relative flex items-center justify-center py-20 overflow-hidden bg-main-bg">
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-150 h-150 rounded-full border border-white/5 animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-200 h-200 rounded-full border border-[#5482b4]/20 animate-[spin_60s_linear_reverse_infinite]" />
            <div className="absolute w-100 h-100 bg-[#042558] rounded-full blur-[100px]" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 w-full sm:text-center">
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-secondary text-sm font-bold tracking-wide uppercase mb-6">
                <Smartphone className="w-4 h-4" />
                <span>Mobile App Development</span>
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white leading-tight mb-6">
                Mobile App Development Company for Android and iOS Apps Bahawalpur
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-sm sm:text-base text-zinc-300 font-sans mb-10 leading-relaxed max-w-3xl mx-auto">
                Your customers live on their phones, whether they are in Bahawalpur, Bahawalpur, Toronto, or anywhere else. They shop, book, learn, bank, and communicate through mobile apps every single day. NEFFTO IT Solution is a <strong className="text-secondary font-bold">mobile app development company</strong> that designs and builds user-friendly, high-performance apps for startups, small businesses, and established brands across Bahawalpur.
                <br/><br/>
                As a mobile app development company in Bahawalpur founders regularly choose for its blend of quality and value, we help clients turn app ideas into polished products that people genuinely enjoy using, backed by clear communication in Bahawalpur business hours.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap sm:justify-center gap-4">
                <GlowButton name="Get a Free Quote" to="/contact" className="bg-surface text-white border-2 border-surface" hover="hover:text-surface" layerHover="bg-white" />
                <div className="px-6 py-3 rounded-full border border-white/10 flex items-center gap-3 bg-white/5 backdrop-blur-md">
                   <Apple className="w-5 h-5 text-zinc-300" />
                   <div className="w-px h-4 bg-white/20" />
                   <Smartphone className="w-5 h-5 text-zinc-300" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>


        {/* WHY YOUR BUSINESS NEEDS SECTION */}
        <section className="sm:py-16 py-10 relative border-t border-white/5">
          <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Why Your Business Needs a Mobile App</h2>
              <p className="text-sm sm:text-base text-zinc-300 font-sans mb-6 leading-relaxed">
                Your customers live on their phones, whether they are in Bahawalpur, Bahawalpur, Toronto, or anywhere else. They shop, book, learn, bank, and communicate through mobile apps every single day. NEFFTO IT Solution is a mobile app development company that designs and builds user-friendly, high-performance apps for startups, small businesses, and established brands across Bahawalpur.
              </p>
              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                As a mobile app development company in Bahawalpur founders regularly choose for its blend of quality and value, we help clients turn app ideas into polished products that people genuinely enjoy using, backed by clear communication in Bahawalpur business hours.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative">
               <div className="absolute inset-0 bg-secondary/20 blur-[100px] rounded-full" />
               <div className="relative bg-white/5 glass backdrop-blur-md border border-white/10 rounded-3xl p-8">
                  <div className="flex gap-4 items-center mb-6">
                     <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary">
                        <Zap size={24} />
                     </div>
                     <h3 className="text-lg font-black uppercase tracking-tight text-white">Faster Engagement</h3>
                  </div>
                  <div className="flex gap-4 items-center mb-6">
                     <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary">
                        <ShieldCheck size={24} />
                     </div>
                     <h3 className="text-lg font-black uppercase tracking-tight text-white">Secure Data</h3>
                  </div>
                  <div className="flex gap-4 items-center">
                     <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary">
                        <Layers size={24} />
                     </div>
                     <h3 className="text-lg font-black uppercase tracking-tight text-white">Seamless UI/UX</h3>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* OUR SERVICES GRID */}
        <section className="sm:py-16 py-10 relative bg-surface/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Our App Development Services</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="group relative p-8 rounded-3xl bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all duration-500">
                  <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/5 group-hover:text-purple-500/10 transition-colors duration-500 pointer-events-none select-none">
                    {service.number}
                  </div>
                  <div className="mb-6 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(90deg, #5482b4, #c3e9fe)' }}>
                    <service.icon size={32} className="text-[#020e24]" />
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-white mb-4">
                    {service.title === "App UI/UX Design" ? (
                      <Link
                        to="/services/graphic-designing"
                        className="hover:text-secondary underline decoration-secondary/50 underline-offset-4 transition-colors"
                      >
                        {service.title}
                      </Link>
                    ) : (
                      service.title
                    )}
                  </h3>
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
                <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Android App Development</h2>
                <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                  Android holds a huge share of smartphone users across many Bahawalpur markets, which makes <strong className="text-secondary font-bold">Android app development</strong> a smart starting point for most businesses. Our developers build apps that run smoothly across different screen sizes, device brands, and Android versions. We handle the full Google Play Store publishing process for you, from preparing the store listing to meeting policy requirements.
                </p>
              </div>
              <div className="hidden md:flex justify-end">
                 <div className="w-48 h-48 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                    <Smartphone size={80} className="text-green-500/50" />
                 </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="hidden md:flex justify-start">
                 <div className="w-48 h-48 rounded-full bg-slate-500/10 border border-slate-500/20 flex items-center justify-center animate-[bounce_5s_ease-in-out_infinite]">
                    <Apple size={80} className="text-zinc-400 text-sm font-sans/50" />
                 </div>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">iOS App Development</h2>
                <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                  If your audience includes iPhone users, especially in markets such as Bahawalpur, the UK, and the Gulf, a strong iOS presence is essential. Our <strong className="text-secondary font-bold">iOS app development</strong> team builds apps using Swift and trusted cross-platform frameworks, focusing on smooth animations, strong security, and a clean interface that feels natural on Apple devices. We also guide you through App Store submission and review.
                </p>
              </div>
            </div>

            <div className="max-w-4xl text-left">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Cross-Platform App Development to Save Time and Budget</h2>
              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                Building two separate native apps can double your cost and development time. With <strong className="text-secondary font-bold">cross-platform app development</strong> using Flutter or React Native, we write one shared codebase that runs on both Android and iOS. You get a consistent experience on both platforms, faster updates, and lower maintenance costs - ideal for startups reaching a Bahawalpur user base.
              </p>
            </div>

            <div className="bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/5 rounded-3xl p-8 md:p-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6 text-center">Custom Mobile App Development for Every Industry</h2>
              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed text-center mb-10 max-w-3xl mx-auto">
                Every business works differently, so we don't believe in one-size-fits-all apps. Our <strong className="text-secondary font-bold">custom mobile app development</strong> service covers a wide range of industries and use cases, including:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                 {industries.map((ind, i) => (
                    <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-white/5 glass backdrop-blur-md">
                       <ind.icon className="w-6 h-6 text-secondary shrink-0 mt-1" />
                       <span className="text-zinc-300 text-sm font-sans leading-relaxed">{ind.text}</span>
                    </div>
                 ))}
              </div>
              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed text-center max-w-3xl mx-auto italic">
                We can also connect your app with Bahawalpur and Bahawalpur payment gateways, maps, in-app chat, and AI features built in. Want AI features in your app, like a chatbot or recommendations? Explore our{" "}
                <Link
                  to="/services/ai-machine-learning"
                  className="text-secondary underline decoration-secondary/50 underline-offset-4 hover:text-white transition-colors font-medium not-italic"
                >
                  AI & Machine Learning
                </Link>{" "}
                services.
              </p>
            </div>

            <div className="max-w-4xl">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Secure, Scalable Backends and Admin Panels</h2>
              <p className="text-sm sm:text-base text-zinc-300 font-sans mb-6 leading-relaxed">
                A great app needs a reliable engine behind it. Alongside the mobile app itself, we build{" "}
                <Link
                  to="/services/web-development"
                  className="text-secondary underline decoration-secondary/50 underline-offset-4 hover:text-white transition-colors font-medium"
                >
                  secure backends, APIs, and easy-to-use admin panels
                </Link>{" "}
                that let you manage users, orders, content, and notifications. Your data stays protected, and your app is ready to handle growth from a few hundred users to many thousands.
              </p>
              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                We also integrate analytics tools so you can see how people use your app and make smarter decisions about future updates.
              </p>
            </div>

          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="sm:py-16 py-10 relative bg-surface/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Our App Development Process</h2>
              <p className="text-sm text-zinc-300 font-sans">A clear process keeps your project on schedule and removes guesswork at every step:</p>
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
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Why Choose NEFFTO for App Development</h2>
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
            
          </div>
        </section>

        {/* FAQS */}
        <FAQ faqs={faqs} />


        {/* CTA SECTION */}
        <section className="sm:py-16 py-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary-navy z-0" />
          <div className="max-w-4xl mx-auto sm:px-6 px-4 relative z-10 text-center">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-8">Turn Your App Idea Into Reality</h2>
            <p className="text-zinc-300 text-sm font-sans mb-10 leading-relaxed">
              Have an app idea you've been thinking about for a while? Let's make it happen. NEFFTO IT Solution provides reliable <strong className="text-secondary font-bold">mobile app development company services</strong> for clients Bahawalpur. Check out our{" "}
              <Link to="/blogs" className="text-secondary underline decoration-secondary/50 underline-offset-4 hover:text-white transition-colors font-medium">
                development blog
              </Link>{" "}
              or contact us today for a free consultation and quote, and take the first step towards launching your app.
            </p>
            <GlowButton name="Get a Free Quote" to="/contact" className="bg-surface text-white border-2 border-surface" hover="hover:text-surface" layerHover="bg-white" />
          </div>
        </section>

      </main>
    </>
  );
};

export default AppDevelopment;