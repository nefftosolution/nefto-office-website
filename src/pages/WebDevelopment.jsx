import React from "react";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import GlowButton from "../components/GlowButton";
import FAQ from "../components/FAQ";
import {
  ArrowRight,
  Check,
  Code2,
  Globe2,
  ShoppingCart,
  Smartphone,
  Search,
  Zap,
  ChevronDown,
  MonitorSmartphone,
  Layers3,
  Server,
  ShieldCheck,
  Palette,
  Workflow,
} from "lucide-react";

import HeroBg from "../assets/web.avif";

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
    icon: Globe2,
    number: "01",
    title: "Custom Website Development",
    text: "Unique websites built around your brand, content, and business objectives, with clean code and a scalable structure.",
  },
  {
    icon: Server,
    number: "02",
    title: "Full Stack Web Development",
    text: "Front-end interfaces and back-end systems built together, including databases, APIs, admin dashboards, and user accounts.",
  },
  {
    icon: Palette,
    number: "03",
    title: "Shopify Custom Theme Development",
    text: "Tailor-made Shopify stores and custom themes that reflect your brand and make shopping easy for customers in Bahawalpur.",
  },
  {
    icon: ShoppingCart,
    number: "04",
    title: "E-commerce Development",
    text: "Online stores with secure checkout, multi-currency support, payment gateway integration, and order tracking.",
  },
  {
    icon: Smartphone,
    number: "05",
    title: "Responsive Website Design",
    text: "Layouts that adapt perfectly to mobiles, tablets, laptops, and large desktop screens.",
  },
  {
    icon: Workflow,
    number: "06",
    title: "Website Redesign and Maintenance",
    text: "Refreshing outdated websites, fixing performance issues, and keeping your site secure and up to date.",
  },
];

const process = [
  {
    number: "01",
    title: "Discovery",
    text: "We learn about your business, target audience, competitors, and goals.",
  },
  {
    number: "02",
    title: "Planning",
    text: "We map out the site structure, features, and timeline.",
  },
  {
    number: "03",
    title: "Design",
    text: "We create wireframes and visual designs for your approval.",
  },
  {
    number: "04",
    title: "Development",
    text: "Our developers build the website with clean, well-documented code.",
  },
  {
    number: "05",
    title: "Testing",
    text: "We check speed, security, responsiveness, and functionality across browsers and devices.",
  },
  {
    number: "06",
    title: "Launch and Support",
    text: "We launch your site and provide ongoing support and maintenance.",
  },
];

const whyChooseUs = [
  "Custom solutions rather than recycled templates.",
  "Experienced developers skilled in modern frameworks and platforms.",
  "Transparent pricing with no hidden costs, quoted in your local currency.",
  "Regular progress updates and open communication in Bahawalpur.",
  "Websites optimised for speed, security, and search engines in Bahawalpur.",
  "Reliable after-launch support whenever you need it.",
];

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "A standard business website usually takes two to four weeks, while larger e-commerce stores or custom web applications can take longer depending on features. We give you a clear timeline before any work begins, no matter your location.",
  },
  {
    question: "Do you offer custom website development or templates?",
    answer:
      "We focus on custom website development built around your brand and goals. If your budget is limited, we can also customise a premium theme to suit your needs.",
  },
  {
    question: "Will my website work properly on mobile phones?",
    answer:
      "Yes. Every project includes responsive website design, so your site looks and works perfectly on all devices.",
  },
  {
    question: "Do you work with clients in the Bahawalpur?",
    answer:
      "Yes. As a web development company in Bahawalpur clients already trust, we support Bahawalpur business hours, Bahawalpur payment gateways, and compliance requirements such as ADA-friendly accessibility.",
  },
];

const WebDevelopment = () => {
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
    name: "Web Development Services",
    serviceType: "Web Development",
    description:
      "NEFFTO is a web development company serving clients in Bahawalpur, offering custom website development, full stack and Shopify development.",
    provider: {
      "@type": "Organization",
      name: "Neffto Solution",
      url: "https://nefftosolution.com/",
    },
    areaServed: {
      "@type": "City",
      name: "Bahawalpur",
    },
    url: "https://nefftosolution.com/services/web-development",
  };

  return (
    <>
                  <SEO
        title="Web Development Company in Pakistan | NEFFTO IT Solution"
        description="NEFFTO is a web development company in Pakistan offering custom website development, full stack and Shopify development in Bahawalpur. Get a free quote."
        canonical="https://nefftosolution.com/services/web-development"
        ogTitle="Web Development Company in Pakistan | NEFFTO IT Solution"
        ogDescription="NEFFTO is a web development company in Pakistan offering custom website development, full stack and Shopify development in Bahawalpur. Get a free quote."
        schema={JSON.stringify([serviceSchema, faqSchema])}
        keywords="web development company in Pakistan, web development services in Bahawalpur, custom website development, full stack web development, Shopify custom theme development, responsive website design"
      />

      <main className="bg-main-bg text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans pt-20">
        {/* HERO SECTION */}

        {/* UNIQUE HERO: WEB DEVELOPMENT (Split Screen with Code Animation) */}
        <section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden bg-main-bg">
          <div className="absolute top-[-20%] left-[-10%] w-125 h-125 bg-[#042558] blur-[140px] pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[-10%] w-125 h-125 bg-[#5482b4] opacity-20 blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="max-w-2xl"
              >
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-secondary text-sm font-bold tracking-wide uppercase mb-6"
                >
                  <Globe2 className="w-4 h-4" />
                  <span>Web Development</span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white leading-tight mb-6"
                >
                  Web Development Company Building Websites That Grow Businesses
                  in Bahawalpur
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="text-sm sm:text-base text-zinc-300 font-sans mb-10 leading-relaxed"
                >
                  Your website is often the first conversation a customer has
                  with your brand, wherever they happen to be searching from. If
                  it loads slowly, looks outdated on a phone, or makes it hard
                  to find what people need, that conversation ends in seconds.
                  NEFFTO IT Solution is a{" "}
                  <strong className="text-secondary font-bold">
                    web development company
                  </strong>{" "}
                  that builds fast, secure, and conversion-focused websites for
                  startups, local businesses, and growing brands in Bahawalpur.
                  <br />
                  <br />
                  We work with clients across Bahawalpur, turning ideas into
                  websites that look great and actually bring in leads and
                  sales. As a web development company in Bahawalpur clients rely
                  on for round-the-clock communication and business-hours
                  support, we combine a delivery team with the responsiveness of
                  a local partner.
                  <br />
                  <br />
                  Whether you need a simple business website, a powerful web
                  application, or an online store, our team delivers custom
                  website development tailored to your goals, your audience, and
                  your budget. We don't use cookie-cutter templates and call it
                  a day. We plan, design, build, test, and launch with care, so
                  your website becomes a real business asset rather than just an
                  online brochure - no matter where your customers are in
                  Bahawalpur.
                </motion.p>

                <motion.div variants={fadeUp}>
                  <GlowButton
                    name="Get a Free Quote"
                    to="/contact"
                    className="bg-surface text-white border-2 border-surface"
                    hover="hover:text-surface"
                    layerHover="bg-white"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="hidden lg:block relative"
              >
                <div className="relative w-full h-112.5 bg-[#020e24] rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col">
                  <div className="h-10 bg-[#042558] flex items-center px-4 gap-2 border-b border-white/10 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="ml-4 px-3 py-1 rounded bg-black/30 text-xs text-zinc-400 font-mono">
                      nefftosolution.com
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col gap-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                    <div className="w-1/3 h-8 bg-white/5 rounded-lg animate-pulse" />
                    <div className="w-2/3 h-4 bg-white/5 rounded-lg animate-pulse delay-75" />
                    <div className="w-1/2 h-4 bg-white/5 rounded-lg animate-pulse delay-150" />

                    <div className="mt-8 grid grid-cols-2 gap-4">
                      <div className="h-24 bg-[#5482b4]/20 rounded-xl border border-[#5482b4]/30 backdrop-blur" />
                      <div className="h-24 bg-[#c3e9fe]/10 rounded-xl border border-[#c3e9fe]/20 backdrop-blur" />
                    </div>

                    <div className="mt-auto h-32 bg-white/5 rounded-xl border border-white/5" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHY YOUR BUSINESS NEEDS SECTION */}
        <section className="sm:py-16 py-10 relative border-t border-white/5">
          <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10 space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">
                  Full Stack Web Development for Complete Solutions
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 font-sans mb-6 leading-relaxed">
                  Some projects need more than a good-looking front end. If
                  you're planning a booking system, customer portal, learning
                  platform, or internal business tool, you need{" "}
                  <strong className="text-secondary font-bold">
                    full stack web development
                  </strong>{" "}
                  that connects every layer of the application. Our developers
                  work with modern technologies such as React, Next.js, Node.js,
                  Laravel, and PHP, along with reliable databases like MySQL and
                  MongoDB, to build web applications that are fast, secure, and
                  ready to scale as your business grows in Bahawalpur.
                </p>
              </div>
              <div className="hidden md:flex justify-end relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full" />
                <div className="w-48 h-48 rounded-3xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center animate-[pulse_4s_ease-in-out_infinite] rotate-12">
                  <Layers3 size={80} className="text-blue-400" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="hidden md:flex justify-start relative order-2 md:order-1">
                <div className="absolute inset-0 bg-emerald-500/20 blur-[80px] rounded-full" />
                <div className="w-48 h-48 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center animate-[bounce_4s_ease-in-out_infinite]">
                  <ShoppingCart size={80} className="text-emerald-400" />
                </div>
              </div>
              <div className="order-1 md:order-2 md:text-left">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">
                  Shopify Custom Theme Development for E-commerce Brands
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 font-sans mb-6 leading-relaxed">
                  Shopify is one of the most popular platforms for selling
                  online across Bahawalpur, but a generic theme can make your
                  store look like thousands of others. Our{" "}
                  <strong className="text-secondary font-bold">
                    Shopify custom theme development
                  </strong>{" "}
                  service gives your store a distinct identity and a shopping
                  experience built around your products. We create custom
                  sections, product page layouts, collection filters, and
                  checkout-friendly designs that help turn browsers into buyers.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">
                  Responsive Website Design That Works on Every Device
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                  Most of your visitors will reach your website from a
                  smartphone, regardless of where they live in Bahawalpur.
                  Google also uses mobile-first indexing, which means the mobile
                  version of your site directly affects your search rankings in
                  Bahawalpur. That's why{" "}
                  <strong className="text-secondary font-bold">
                    responsive website design
                  </strong>{" "}
                  is at the core of every project we deliver.
                </p>
              </div>
              <div className="hidden md:flex justify-end relative">
                <div className="absolute inset-0 bg-purple-500/20 blur-[80px] rounded-full" />
                <div className="w-48 h-48 rounded-4xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                  <MonitorSmartphone size={80} className="text-purple-400" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="hidden md:flex justify-start relative order-2 md:order-1">
                <div className="absolute inset-0 bg-orange-500/20 blur-[80px] rounded-full" />
                <div className="w-48 h-48 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center -rotate-12 hover:rotate-12 transition-transform duration-700">
                  <Search size={80} className="text-orange-400 animate-pulse" />
                </div>
              </div>
              <div className="order-1 md:order-2 md:text-left">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">
                  SEO-Friendly Development From Day One
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 font-sans mb-6 leading-relaxed">
                  A beautiful website is of little use if nobody can find it.
                  Every site we build follows SEO best practices from the start:
                  clean URL structures, a proper heading hierarchy, optimised
                  images, fast loading speed, schema markup, XML sitemaps, and
                  meta tags ready for your keywords, in any target region or
                  language.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="sm:py-16 py-10 relative bg-surface/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">
                Our Web Development Process
              </h2>
              <p className="text-zinc-300 text-sm font-sans">
                We follow a clear, transparent process so you always know what's
                happening with your project:
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-6.75 top-4 bottom-4 w-px bg-linear-to-b from-primary/50 via-secondary/10 to-transparent md:left-1/2 md:-ml-px" />

              <div className="space-y-12">
                {process.map((step, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-main-bg border-4 border-secondary/20 flex items-center justify-center translate-x-0 md:-translate-x-1/2 text-secondary font-bold z-10">
                      {step.number}
                    </div>
                    <div
                      className={`pl-20 md:pl-0 w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16 md:text-right"}`}
                    >
                      <div className="p-8 rounded-3xl bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/10 hover:border-secondary/30 transition-colors">
                        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white mb-4">
                          {step.title}
                        </h3>
                        <p className="text-zinc-400 text-sm font-sans leading-relaxed">
                          {step.text}
                        </p>
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
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">
                Why Choose NEFFTO as Your Web Development Partner
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                Choosing the right partner makes a real difference to the
                success of your project. Here's what clients value most about
                working with us:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {whyChooseUs.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/5"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <p className="text-zinc-300 text-sm font-sans leading-relaxed">
                    {point}
                  </p>
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
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-8">
              Start Your Web Development Project Today
            </h2>
            <p className="text-zinc-300 text-sm font-sans mb-10 leading-relaxed">
              Ready to build a website that works as hard as you do, wherever
              your customers are in Bahawalpur? Whether you need a fresh
              business website, a custom web application, or a high-converting
              Shopify store, NEFFTO IT Solution is here to help. Contact our web
              development company team today, share your idea, and get a free
              quote for your project.
            </p>
            <GlowButton
              name="Get a Free Quote"
              to="/contact"
              className="bg-surface text-white border-2 border-surface"
              hover="hover:text-surface"
              layerHover="bg-white"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default WebDevelopment;
