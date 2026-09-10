import React from "react";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import GlowButton from "../components/GlowButton";
import {
  ArrowRight,
  Check,
  Code2,
  Database,
  Gauge,
  Globe2,
  Layers3,
  LockKeyhole,
  MonitorSmartphone,
  Palette,
  Search,
  Server,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  Workflow,
  Zap,
  ChevronDown,
} from "lucide-react";

import HeroBg from "../assets/web.avif";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const services = [
  {
    icon: Globe2,
    number: "01",
    title: "Business Websites",
    text: "Professional websites designed around your business, customers, services and conversion goals. Ideal for companies that need a credible online presence without unnecessary complexity.",
    points: [
      "Business and corporate websites",
      "Service-based company websites",
      "Lead generation landing pages",
      "About, services and contact sections",
    ],
  },
  {
    icon: ShoppingCart,
    number: "02",
    title: "E-commerce Development",
    text: "Online stores built around a smooth shopping experience, clear product presentation and practical management. We focus on making it easy for customers to browse, trust and purchase.",
    points: [
      "Product and category management",
      "Shopping cart and checkout",
      "Payment gateway integration",
      "Order and customer workflows",
    ],
  },
  {
    icon: Code2,
    number: "03",
    title: "Custom Web Applications",
    text: "When a normal website is not enough, we develop custom web applications around your actual workflow, data and business requirements.",
    points: [
      "Custom dashboards",
      "Customer portals",
      "Admin panels",
      "API-driven applications",
    ],
  },
  {
    icon: Smartphone,
    number: "04",
    title: "Responsive Web Development",
    text: "Your website should work naturally across phones, tablets, laptops and large screens. Every layout is planned with different screen sizes and interaction patterns in mind.",
    points: [
      "Mobile-first layouts",
      "Tablet optimization",
      "Desktop experiences",
      "Touch-friendly interactions",
    ],
  },
  {
    icon: Gauge,
    number: "05",
    title: "Website Performance",
    text: "A beautiful website is not enough if it feels slow. We build with performance in mind by keeping interfaces efficient, assets controlled and unnecessary code to a minimum.",
    points: [
      "Efficient frontend architecture",
      "Image and asset optimization",
      "Reduced layout shifting",
      "Performance-focused implementation",
    ],
  },
  {
    icon: Search,
    number: "06",
    title: "SEO-Friendly Development",
    text: "We create technically sound website foundations that make your content easier for search engines to crawl, understand and index.",
    points: [
      "Semantic HTML structure",
      "Search-friendly page architecture",
      "Metadata and canonical URLs",
      "Structured data where appropriate",
    ],
  },
];

const technologies = [
  "React",
  "JavaScript",
  "Node.js",
  "REST APIs",
  "Tailwind CSS",
  "MySQL",
  "MongoDB",
  "Git",
];

const process = [
  {
    number: "01",
    title: "Discovery & Requirements",
    text: "We start by understanding what your business actually needs. We discuss your audience, services, competitors, required features, content, goals and technical requirements before development begins.",
  },
  {
    number: "02",
    title: "Structure & User Experience",
    text: "We organize the website around real user journeys. Navigation, page hierarchy, calls to action and content sections are planned before we move into detailed development.",
  },
  {
    number: "03",
    title: "UI Design",
    text: "Your visual identity is translated into a consistent interface with thoughtful spacing, typography, components, responsive layouts and interaction details.",
  },
  {
    number: "04",
    title: "Development",
    text: "The approved design is turned into a working website or application using maintainable components and modern development practices.",
  },
  {
    number: "05",
    title: "Testing & Refinement",
    text: "We review layouts, navigation, forms, responsiveness, interactions and important user flows across different screen sizes before launch.",
  },
  {
    number: "06",
    title: "Launch & Support",
    text: "Once everything is ready, the website is deployed to its production environment. We can also help with post-launch improvements, maintenance and future development.",
  },
];

const faqs = [
  {
    question: "How much does web development cost in Bahawalpur?",
    answer:
      "The cost depends on the type of website, number of pages, design requirements, integrations and custom functionality. A small business website and a custom web application have very different development requirements, so we prefer to scope the project before providing a final quotation.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the project's size and complexity. A straightforward business website can be completed much faster than an e-commerce platform or custom web application. During the initial discussion, we can define the required pages, features and expected delivery stages.",
  },
  {
    question: "Do you build mobile-friendly websites?",
    answer:
      "Yes. Responsive behavior is considered during development rather than added as an afterthought. Websites are designed to provide a practical experience across mobile phones, tablets, laptops and desktop screens.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We can work with an existing website when the business needs a visual redesign, better responsiveness, improved structure, new functionality or a more maintainable technical foundation.",
  },
  {
    question: "Can you build an online store?",
    answer:
      "Yes. We develop e-commerce websites with product catalogs, categories, cart and checkout experiences, payment integrations and other business-specific functionality depending on the project.",
  },
  {
    question: "Do you provide SEO-friendly web development?",
    answer:
      "Yes. We build the technical foundation with search visibility in mind, including semantic structure, appropriate metadata, crawlable navigation, responsive layouts, performance considerations and structured data where it makes sense. SEO rankings themselves depend on many factors beyond website development.",
  },
  {
    question: "Can you maintain the website after launch?",
    answer:
      "Yes. Website development does not have to end at launch. Depending on your requirements, we can help with updates, new features, technical improvements, content changes and ongoing maintenance.",
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
      "Custom web development services for businesses, e-commerce stores and web applications in Bahawalpur, Pakistan.",
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
        title="Web Development Services in Bahawalpur | Neffto Solution"
        description="Neffto Solution provides custom web development in Bahawalpur, including business websites, e-commerce stores and web applications built for performance, usability and search visibility."
        canonical="https://nefftosolution.com/services/web-development"
        ogTitle="Web Development Services in Bahawalpur | Neffto Solution"
        ogDescription="Custom websites, e-commerce stores and web applications designed and developed by Neffto Solution."
      
        schema={JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Custom Web Development & SaaS Solutions","provider":{"@id":"https://nefftosolution.com/#organization"},"areaServed":"Worldwide","description":"Custom web development services. We build fast, secure, and scalable websites, SaaS applications, and e-commerce platforms.","url":"https://nefftosolution.com/services/web-development"})}
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="min-h-screen overflow-hidden bg-main-bg text-white selection:bg-primary selection:text-white">

        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative isolate min-h-[720px] overflow-hidden pt-28 md:pt-32">
          {/* Background */}
          <div className="absolute inset-0 -z-20">
            <img
              src={HeroBg}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/75" />

            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-main-bg/70 to-main-bg" />
          </div>

          {/* Decorative grid */}
          <div className="absolute inset-0 -z-10 opacity-[0.08]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
                backgroundSize: "70px 70px",
              }}
            />
          </div>

          {/* Floating lights */}
          <motion.div
            animate={{
              y: [0, -25, 0],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[8%] top-[28%] h-32 w-32 rounded-full bg-primary/20 blur-3xl"
          />

          <motion.div
            animate={{
              y: [0, 30, 0],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[10%] top-[18%] h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl"
          />

          <div className="mx-auto flex min-h-[590px] max-w-7xl items-center px-4 pb-24 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-5xl"
            >
              <motion.div variants={fadeUp}>
                <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-200 backdrop-blur-xl">
                  <Sparkles size={14} className="text-primary" />
                  Web Development
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[88px]"
              >
                Websites that look
                <span className="block text-primary">serious about business.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg md:text-xl"
              >
                We design and develop fast, responsive and purpose-built
                websites for businesses in Bahawalpur and beyond — from
                professional company websites to e-commerce stores and custom
                web applications.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <GlowButton
                  to="/contact"
                  name="Discuss Your Project"
                  className="border-2 border-white bg-white text-surface"
                  hover="hover:text-white"
                  layerHover="bg-surface"
                />

                <a
                  href="#services"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-white/30 hover:bg-white/[0.08]"
                >
                  Explore Services
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-zinc-400"
              >
                <span className="flex items-center gap-2">
                  <Check size={16} className="text-primary" />
                  Responsive by design
                </span>

                <span className="flex items-center gap-2">
                  <Check size={16} className="text-primary" />
                  SEO-friendly structure
                </span>

                <span className="flex items-center gap-2">
                  <Check size={16} className="text-primary" />
                  Built around your goals
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom visual anchor */}
          <div className="absolute bottom-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </section>

        {/* =========================================================
            INTRO
        ========================================================= */}
        <section className="relative py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_.75fr] lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                More than a website
              </span>

              <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
                Your website should have a job.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
                A business website should do more than sit online. It should
                explain what you offer, make your company look credible,
                answer important questions and guide visitors toward taking
                the next step.
              </p>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
                That is how we approach web development at Neffto Solution.
                Before choosing technologies or writing components, we look at
                the business behind the website. Who are your customers? What
                are they looking for? What action should they take? What needs
                to happen after they submit a form or place an order?
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative"
            >
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-9">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      A better starting point
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">
                      Business → User → Technology
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Target size={21} />
                  </div>
                </div>

                <div className="space-y-5">
                  {[
                    ["01", "Understand the business", "Goals, audience, offer"],
                    ["02", "Plan the experience", "Pages, journeys, actions"],
                    ["03", "Build the system", "Design, code, integrations"],
                    ["04", "Refine the details", "Testing, performance, launch"],
                  ].map(([number, title, text]) => (
                    <div
                      key={number}
                      className="flex gap-4 rounded-2xl border border-white/5 bg-black/10 p-4"
                    >
                      <span className="font-mono text-sm text-primary">
                        {number}
                      </span>

                      <div>
                        <h3 className="font-semibold text-white">{title}</h3>
                        <p className="mt-1 text-sm text-zinc-500">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            SERVICES
        ========================================================= */}
        <section
          id="services"
          className="relative border-y border-white/5 bg-white/[0.015] py-24 md:py-32"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                What we build
              </span>

              <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
                Web development for different stages of business.
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Not every business needs the same website. Some need a strong
                digital presence. Others need an online store, customer portal
                or a completely custom system. We choose the approach around
                the problem rather than forcing every project into the same
                template.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
              variants={stagger}
              className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            >
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <motion.article
                    key={service.number}
                    variants={fadeUp}
                    className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.025] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045]"
                  >
                    <div className="absolute right-5 top-5 font-mono text-xs text-white/20">
                      {service.number}
                    </div>

                    <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-primary transition duration-500 group-hover:border-primary/30 group-hover:bg-primary/10">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-xl font-bold">{service.title}</h3>

                    <p className="mt-4 text-sm leading-7 text-zinc-400">
                      {service.text}
                    </p>

                    <ul className="mt-7 space-y-3">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm text-zinc-300"
                        >
                          <Check
                            size={16}
                            className="mt-0.5 shrink-0 text-primary"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            WHY US / OUTCOMES
        ========================================================= */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  Why the approach matters
                </span>

                <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                  Good development is about decisions, not just code.
                </h2>

                <p className="mt-6 text-lg leading-8 text-zinc-400">
                  Frameworks and programming languages are tools. The real
                  value comes from knowing what to build, what not to build,
                  how users should move through the site and how the website
                  will support the business after launch.
                </p>

                <div className="mt-8">
                  <GlowButton
                    to="/contact"
                    name="Plan Your Website"
                    className="border border-white/10 bg-white text-surface"
                    hover="hover:text-white"
                    layerHover="bg-surface"
                  />
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="grid gap-4 sm:grid-cols-2"
              >
                {[
                  {
                    icon: Target,
                    title: "Business-first",
                    text: "Pages and features are connected to real business goals.",
                  },
                  {
                    icon: MonitorSmartphone,
                    title: "Responsive",
                    text: "Layouts adapt to the devices people actually use.",
                  },
                  {
                    icon: Zap,
                    title: "Performance-minded",
                    text: "We avoid unnecessary complexity that can slow a website down.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Security-aware",
                    text: "Forms, integrations and application logic are developed with security considerations in mind.",
                  },
                  {
                    icon: Layers3,
                    title: "Scalable structure",
                    text: "The project can evolve as your business and requirements change.",
                  },
                  {
                    icon: Workflow,
                    title: "Clear workflow",
                    text: "You know what is being planned, designed, developed and reviewed.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      variants={fadeUp}
                      className="rounded-3xl border border-white/10 bg-white/[0.025] p-6"
                    >
                      <Icon className="text-primary" size={22} />

                      <h3 className="mt-5 font-bold">{item.title}</h3>

                      <p className="mt-2 text-sm leading-6 text-zinc-500">
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            TECHNOLOGY
        ========================================================= */}
        <section className="border-y border-white/5 bg-surface/20 py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  Technology
                </span>

                <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                  Modern tools. Practical implementation.
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
                  We use technologies according to the requirements of the
                  project. The goal is not to use the newest tool simply
                  because it is new. The goal is to create something reliable,
                  maintainable and appropriate for the business.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {technologies.map((technology) => (
                  <div
                    key={technology}
                    className="flex min-h-24 items-center justify-center rounded-2xl border border-white/10 bg-black/10 px-4 text-center text-sm font-semibold text-zinc-300 transition hover:border-primary/30 hover:bg-primary/5 hover:text-white"
                  >
                    {technology}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            INCLUDED
        ========================================================= */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                What goes into the build
              </span>

              <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
                The details behind a professional website.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                A polished website is the result of many small decisions.
                These are some of the areas we consider throughout a typical
                development project.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Palette,
                  title: "Visual consistency",
                  text: "Typography, spacing, colors, buttons, cards and other components follow a coherent visual system.",
                },
                {
                  icon: Smartphone,
                  title: "Responsive behavior",
                  text: "Important layouts and interactions are considered across mobile, tablet and desktop screens.",
                },
                {
                  icon: Search,
                  title: "Search foundations",
                  text: "Clean page structure, metadata, headings, links and other technical foundations support discoverability.",
                },
                {
                  icon: Gauge,
                  title: "Performance",
                  text: "We consider image sizes, component complexity, asset loading and other factors that affect the experience.",
                },
                {
                  icon: LockKeyhole,
                  title: "Security considerations",
                  text: "Application logic, forms, authentication and third-party integrations are handled with appropriate security practices.",
                },
                {
                  icon: Server,
                  title: "Deployment",
                  text: "The finished project can be prepared for a suitable production hosting and deployment environment.",
                },
                {
                  icon: Database,
                  title: "Data & integrations",
                  text: "Where required, websites can connect with APIs, databases, forms, payment services and other systems.",
                },
                {
                  icon: Code2,
                  title: "Maintainable code",
                  text: "Reusable components and clear structure make future changes easier to manage.",
                },
                {
                  icon: ShieldCheck,
                  title: "Quality review",
                  text: "Important pages, interactions and user journeys are reviewed before the final launch.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.025] p-6"
                  >
                    <Icon size={21} className="text-primary" />

                    <h3 className="mt-5 font-bold">{item.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-500">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            PROCESS
        ========================================================= */}
        <section className="border-y border-white/5 bg-white/[0.015] py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Our process
              </span>

              <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
                From first conversation to launch.
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Good projects become easier when the process is clear. Our
                workflow gives the project a direction before development
                becomes expensive or difficult to change.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute bottom-0 left-[23px] top-0 hidden w-px bg-gradient-to-b from-primary/50 via-white/10 to-transparent md:block" />

              <div className="space-y-5">
                {process.map((step) => (
                  <motion.article
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="relative grid gap-6 rounded-[1.7rem] border border-white/10 bg-white/[0.025] p-6 md:grid-cols-[48px_180px_1fr] md:items-start md:p-8"
                  >
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-main-bg font-mono text-sm font-bold text-primary">
                      {step.number}
                    </div>

                    <h3 className="pt-2 text-xl font-bold">
                      {step.title}
                    </h3>

                    <p className="text-sm leading-7 text-zinc-400 md:pt-2">
                      {step.text}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            LOCAL SEO / BAHWALPUR
        ========================================================= */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.015] p-8 md:p-12 lg:p-16">
              <div className="grid gap-12 lg:grid-cols-[1fr_.7fr] lg:items-center">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    Serving Bahawalpur
                  </span>

                  <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                    Web development in Bahawalpur, built around real businesses.
                  </h2>

                  <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                    If your business is based in Bahawalpur and you need a
                    website that feels professional, works properly on mobile
                    and gives customers a clear way to understand your
                    services, we can help turn that requirement into a
                    practical digital product.
                  </p>

                  <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
                    We also work with businesses outside Bahawalpur. The
                    development process can be handled remotely, with project
                    requirements, design decisions and progress discussed
                    online.
                  </p>

                  <div className="mt-8">
                    <GlowButton
                      to="/contact"
                      name="Talk About Your Project"
                      className="border border-white bg-white text-surface"
                      hover="hover:text-white"
                      layerHover="bg-surface"
                    />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {[
                    "Business websites",
                    "Corporate websites",
                    "E-commerce websites",
                    "Custom web applications",
                    "Landing pages",
                    "Website redesigns",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/10 px-5 py-4 text-sm text-zinc-300"
                    >
                      <Check size={17} className="text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ
        ========================================================= */}
        <section className="border-t border-white/5 py-24 md:py-32">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Frequently asked questions
              </span>

              <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                Before we start.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
                A few practical answers to common questions about website
                development, pricing, timelines and SEO.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-white/10 bg-white/[0.025] transition hover:border-white/20"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 font-semibold text-white [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>

                    <ChevronDown
                      size={20}
                      className="shrink-0 text-zinc-500 transition-transform duration-300 group-open:rotate-180"
                    />
                  </summary>

                  <div className="border-t border-white/5 px-6 pb-6 pt-5 text-sm leading-7 text-zinc-400">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.04] to-primary/[0.08]" />

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]"
          />

          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-300">
              <Sparkles size={14} className="text-primary" />
              Ready when you are
            </span>

            <h2 className="mt-7 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              Have a website idea?
              <span className="block text-primary">
                Let's turn it into something useful.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Tell us what you are trying to build, what your business needs
              and where you want to take it. We can start by understanding the
              project before deciding what should be built.
            </p>

            <div className="mt-9 flex justify-center">
              <GlowButton
                to="/contact"
                name="Start a Conversation"
                className="border-2 border-white bg-white text-surface"
                hover="hover:text-white"
                layerHover="bg-surface"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WebDevelopment;