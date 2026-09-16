import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import GlowButton from "../components/GlowButton";
import FAQ from "../components/FAQ";
import {
  BrainCircuit,
  MessageSquare,
  TrendingUp,
  Cog,
  PlugZap,
  Eye,
  Check,
  ChevronDown,
  LineChart,
  ShieldCheck,
  Bot
} from "lucide-react";

import HeroBg from "../assets/AI.webp";

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
    icon: MessageSquare,
    number: "01",
    title: "AI Chatbot Development",
    text: "Smart chatbots for websites, WhatsApp, and apps that answer questions, capture leads, and support customers 24/7 in any time zone.",
  },
  {
    icon: TrendingUp,
    number: "02",
    title: "Machine Learning Services",
    text: "Predictive models for sales forecasting, customer behaviour, pricing, and demand planning.",
  },
  {
    icon: Cog,
    number: "03",
    title: "Business Automation with AI",
    text: "Automating data entry, document processing, email handling, and repetitive workflows.",
  },
  {
    icon: PlugZap,
    number: "04",
    title: "AI Integration Services",
    text: "Connecting leading AI models with your existing website, CRM, or business software.",
  },
  {
    icon: BrainCircuit,
    number: "05",
    title: "Custom AI Solutions",
    text: "Tailored AI tools built for your specific industry and business needs.",
  },
  {
    icon: Eye,
    number: "06",
    title: "Computer Vision and NLP",
    text: "Image recognition, text analysis, sentiment analysis, and document understanding.",
  },
];

const process = [
  {
    number: "01",
    title: "Consultation",
    text: "We understand your goals and find the best AI opportunities.",
  },
  {
    number: "02",
    title: "Data Review",
    text: "We assess the quality and availability of your data.",
  },
  {
    number: "03",
    title: "Solution Design",
    text: "We choose the right models, tools, and architecture.",
  },
  {
    number: "04",
    title: "Development and Training",
    text: "We build and train the AI system.",
  },
  {
    number: "05",
    title: "Testing",
    text: "We measure accuracy, reliability, and safety before launch.",
  },
  {
    number: "06",
    title: "Deployment and Monitoring",
    text: "We launch the solution and keep improving it.",
  },
];

const whyChooseUs = [
  "A practical, business-focused approach to AI.",
  "Experience with modern AI models and machine learning frameworks.",
  "A strong focus on data privacy and security, including Bahawalpur standards.",
  "Solutions that integrate with your existing tools.",
  "Clear explanations with no confusing jargon.",
  "Ongoing support and continuous model improvement.",
];

const faqs = [
  {
    question: "Is AI affordable for small businesses?",
    answer: "Yes. Many AI tools, especially chatbots and automation, can be implemented at a reasonable cost and often pay for themselves through time saved and extra sales.",
  },
  {
    question: "Can your AI chatbot understand multiple languages?",
    answer: "Yes, we can build chatbots that understand and respond in English and other languages your customers use, wherever they are located.",
  },
  {
    question: "Do you work with businesses in the Bahawalpur?",
    answer: "Yes. We serve clients as an AI development company in Bahawalpur founders trust for practical, well-documented AI projects, with communication scheduled around Bahawalpur time zones.",
  },
  {
    question: "Is my business data kept safe?",
    answer: "We follow strict data security practices and design solutions that keep sensitive information protected at every stage, in line with international data-handling standards.",
  },
];

const AIMachineLearning = () => {
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
    name: "AI & Machine Learning Services",
    serviceType: "Artificial Intelligence Development",
    description: "Custom AI solutions, AI chatbot development, machine learning services and AI integration for businesses in Bahawalpur, from NEFFTO IT Solution.",
    provider: {
      "@type": "Organization",
      name: "Neffto Solution",
      url: "https://nefftosolution.com/",
    },
    areaServed: {
      "@type": "City",
      name: "Bahawalpur",
    },
    url: "https://nefftosolution.com/services/ai-machine-learning",
  };

  return (
    <>
                        <SEO
        title="AI Development Company in Pakistan | AI & ML | NEFFTO"
        description="Custom AI solutions, AI chatbot development, machine learning services and AI business automation from NEFFTO, an AI development company in Pakistan."
        canonical="https://nefftosolution.com/services/python-ml-ai"
        ogTitle="AI Development Company in Pakistan | AI & ML | NEFFTO"
        ogDescription="Custom AI solutions, AI chatbot development, machine learning services and AI business automation from NEFFTO, an AI development company in Pakistan."
        schema={JSON.stringify([serviceSchema, faqSchema])}
        keywords="AI development company in Pakistan, machine learning services, AI chatbot development, custom AI solutions, business automation with AI, AI integration services"
      />

      <main className="bg-main-bg min-h-screen text-slate-200 selection:bg-rose-500/30 selection:text-rose-200 font-sans pt-20">
        
        {/* HERO SECTION */}
        
        {/* UNIQUE HERO: AI & MACHINE LEARNING (Neural Network Particles Style) */}
        <section className="relative flex items-center py-20 overflow-hidden bg-main-bg">
          <div className="absolute top-0 right-0 w-150 h-150 bg-[#5482b4] opacity-20 blur-[150px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={stagger} initial="hidden" animate="visible" className="">
                <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#5482b4]/20 border border-[#5482b4]/30 text-secondary text-sm font-bold tracking-wide uppercase mb-6">
                  <BrainCircuit className="w-4 h-4" />
                  <span>AI & Machine Learning</span>
                </motion.div>
                
                <motion.h1 variants={fadeUp} className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white leading-tight mb-6">
                  AI Development Company Delivering Smart AI and Machine Learning Solutions Bahawalpur
                </motion.h1>
                
                <motion.p variants={fadeUp} className="text-sm sm:text-base md:text-lg text-zinc-300 font-sans mb-10 leading-relaxed">
                  Artificial intelligence is no longer something only tech giants can afford. Businesses of every size, in every country, are using AI to answer customer questions instantly, predict sales, automate repetitive work, and make smarter decisions from their data.
                </motion.p>

                <motion.div variants={fadeUp}>
                  <GlowButton name="Get a Free Quote" to="/contact" className="bg-surface text-white border-2 border-surface" hover="hover:text-surface" layerHover="bg-white" />
                </motion.div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative flex justify-center items-center mt-10 lg:mt-0">
                 <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                    <div className="absolute inset-0 border-2 border-[#5482b4]/30 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
                    <div className="absolute inset-4 border border-[#c3e9fe]/20 rounded-full animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-12 bg-[#042558] rounded-full shadow-[0_0_50px_rgba(84,130,180,0.5)] flex items-center justify-center border border-[#5482b4]/50">
                       <BrainCircuit className="w-24 h-24 lg:w-32 lg:h-32 text-[#00e5ff] animate-pulse drop-shadow-[0_0_15px_rgba(0,229,255,0.8)]" strokeWidth={1} />
                       
                       {/* Floating Related Icons */}
                       <div className="absolute -top-4 -left-4 w-12 h-12 bg-surface rounded-full flex items-center justify-center border border-white/10 animate-[bounce_3s_ease-in-out_infinite] shadow-[0_0_20px_rgba(255,0,255,0.4)]">
                         <Bot className="w-6 h-6 text-[#ff00ff]" />
                       </div>
                       <div className="absolute top-10 -right-6 w-14 h-14 bg-surface rounded-full flex items-center justify-center border border-white/10 animate-[bounce_4s_ease-in-out_infinite] shadow-[0_0_20px_rgba(0,255,128,0.4)]">
                         <LineChart className="w-7 h-7 text-[#00ff80]" />
                       </div>
                       <div className="absolute -bottom-6 left-10 w-10 h-10 bg-surface rounded-full flex items-center justify-center border border-white/10 animate-[bounce_5s_ease-in-out_infinite] shadow-[0_0_20px_rgba(255,165,0,0.4)]">
                         <Cog className="w-5 h-5 text-[#ffa500]" />
                       </div>
                    </div>
                 </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* WHY YOUR BUSINESS NEEDS SECTION */}
        <section className="sm:py-16 py-10 relative border-t border-white/5">
          <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">How AI and Machine Learning Help Your Business</h2>
              <p className="text-sm sm:text-base text-zinc-300 font-sans mb-6 leading-relaxed">
                NEFFTO IT Solution is an AI development company that helps businesses put these technologies to work in practical, affordable ways.
              </p>
              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                As an AI development company in Bahawalpur teams increasingly partner with for cost-effective delivery, we design and build custom AI solutions that solve real problems, save time, and create new opportunities for growth, wherever your team is based.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative">
               <div className="absolute inset-0 bg-secondary/20 blur-[100px] rounded-full" />
               <div className="relative bg-white/5 glass border border-white/10 rounded-3xl p-8 backdrop-blur-sm grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center text-center gap-3">
                     <Bot className="w-10 h-10 text-secondary" />
                     <span className="font-semibold text-white">Smart Automation</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                     <LineChart className="w-10 h-10 text-secondary" />
                     <span className="font-semibold text-white">Data Insights</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                     <MessageSquare className="w-10 h-10 text-secondary" />
                     <span className="font-semibold text-white">24/7 Support</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3">
                     <ShieldCheck className="w-10 h-10 text-secondary" />
                     <span className="font-semibold text-white">Secure Systems</span>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* OUR SERVICES GRID */}
        <section className="sm:py-16 py-10 relative bg-surface/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10">
            <div className="mb-16 max-w-3xl text-center mx-auto">
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Our AI and Machine Learning Services</h2>
              <p className="text-zinc-300 text-sm font-sans">We offer a full range of AI services, from quick wins to advanced, long-term projects:</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="group relative p-8 rounded-3xl bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/10 hover:border-rose-500/50 transition-all duration-500">
                  <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/5 group-hover:text-rose-500/10 transition-colors duration-500 pointer-events-none select-none">
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
            
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/5 p-8 rounded-3xl">
              <div className="md:col-span-8">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">AI Chatbot Development for 24/7 Customer Support</h2>
                <p className="text-sm sm:text-base text-zinc-300 font-sans mb-6 leading-relaxed">
                  Customers expect fast answers, often outside normal business hours, regardless of where they live. Our <strong className="text-secondary font-bold">AI chatbot development</strong> service creates intelligent assistants that understand natural questions, respond in a friendly and accurate way, and hand complex issues over to your human team when needed.
                </p>
                <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                  Chatbots can be deployed on your{" "}
                  <Link
                    to="/services/web-development"
                    className="text-secondary underline decoration-secondary/50 underline-offset-4 hover:text-white transition-colors font-medium"
                  >
                    website
                  </Link>
                  ,{" "}
                  <Link
                    to="/services/app-development"
                    className="text-secondary underline decoration-secondary/50 underline-offset-4 hover:text-white transition-colors font-medium"
                  >
                    mobile app
                  </Link>
                  , or WhatsApp, and can support multiple languages, including English and others your customers use.
                </p>
              </div>
              <div className="md:col-span-4 flex justify-center">
                 <MessageSquare size={120} className="text-primary" />
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/5 p-8 rounded-3xl">
               <div className="md:col-span-4 hidden md:flex justify-center">
                 <LineChart size={120} className="text-primary" />
              </div>
              <div className="md:col-span-8">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Machine Learning Services That Turn Data Into Decisions</h2>
                <p className="text-sm sm:text-base text-zinc-300 font-sans mb-6 leading-relaxed">
                  Most businesses sit on valuable data in spreadsheets, sales records, and customer systems, but rarely use it to its full potential. Our <strong className="text-secondary font-bold">machine learning services</strong> help you unlock that value, from forecasting monthly sales to predicting which customers are likely to leave and identifying unusual transactions that may signal fraud.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/5 p-8 rounded-3xl col-span-1 md:col-span-3">
                  <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-white mb-4">Business Automation with AI</h2>
                  <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                     Repetitive tasks drain time and energy from your team. With <strong className="text-secondary font-bold">business automation with AI</strong>, we can automate processes such as reading invoices, extracting information from documents, sorting and replying to emails, generating reports, and updating records across systems. Automation reduces human error, speeds up operations, and lets your employees spend their time on work that truly needs a human touch, such as building relationships and solving problems.
                  </p>
               </div>
               
               <div className="bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/5 p-8 rounded-3xl md:col-span-1">
                  <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white mb-4">AI Integration Services for Your Existing Systems</h2>
                  <p className="text-zinc-300 text-sm font-sans leading-relaxed">
                     You don't always need to build AI from scratch. Our <strong className="text-secondary font-bold">AI integration services</strong> connect powerful existing AI models with the tools you already use, such as your website, e-commerce store, CRM, or internal software. We handle the technical setup, API connections, prompt design, data security, and testing.
                  </p>
               </div>
               
               <div className="bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/5 p-8 rounded-3xl md:col-span-1">
                  <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white mb-4">Custom AI Solutions Built Around Your Goals</h2>
                  <p className="text-zinc-300 text-sm font-sans leading-relaxed">
                     Every business is unique, and so are its challenges. Our <strong className="text-secondary font-bold">custom AI solutions</strong> are designed for your specific industry, whether you work in retail, healthcare, education, real estate, logistics, or finance, anywhere in Bahawalpur. We work with Python, TensorFlow, PyTorch, scikit-learn, and leading AI platforms.
                  </p>
               </div>
               
               <div className="bg-white/5 glass backdrop-blur-md hover:bg-white/10 border border-white/5 p-8 rounded-3xl md:col-span-1">
                  <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white mb-4">Responsible and Transparent AI</h2>
                  <p className="text-zinc-300 text-sm font-sans leading-relaxed">
                     We build AI systems that you can trust. That means testing for accuracy, keeping humans in control of important decisions, protecting personal data, and explaining clearly what each system can and cannot do, so there are no surprises after launch.
                  </p>
               </div>
            </div>

          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="sm:py-16 py-10 relative bg-surface/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto sm:px-6 px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-white mb-6">Our AI Development Process</h2>
              <p className="text-xl text-zinc-300 font-sans">We follow a structured process that keeps projects focused, measurable, and safe:</p>
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
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">Why Choose NEFFTO as Your AI Development Company</h2>
              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                We believe AI should be useful, understandable, and worth the investment. Here's what sets us apart:
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
              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed italic border-l-4 border-rose-500/50 pl-6 py-2">
                Because our AI specialists work alongside our{" "}
                <Link
                  to="/services/web-development"
                  className="text-secondary underline decoration-secondary/50 underline-offset-4 hover:text-white transition-colors font-medium not-italic"
                >
                  web developers
                </Link>{" "}
                and{" "}
                <Link
                  to="/services/app-development"
                  className="text-secondary underline decoration-secondary/50 underline-offset-4 hover:text-white transition-colors font-medium not-italic"
                >
                  app developers
                </Link>
                , we can deliver complete solutions, from the AI model itself to the dashboard, website, or app your users interact with.
              </p>
            </div>
          </div>
        </section>

        {/* FAQS */}
        <FAQ faqs={faqs} />


        {/* CTA SECTION */}
        <section className="sm:py-16 py-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary-navy z-0" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-8">Bring AI Into Your Business Today</h2>
              <p className="text-zinc-300 text-sm font-sans mb-10 leading-relaxed">
                The businesses that adopt AI thoughtfully today will lead their markets tomorrow. Let NEFFTO IT Solution, your <strong className="text-secondary font-bold">AI development company</strong> of choice, help you take the first step with custom AI solutions designed around your goals. Contact us for a free consultation.
              </p>
              <GlowButton name="Get a Free Quote" to="/contact" className="bg-surface text-white border-2 border-surface" hover="hover:text-surface" layerHover="bg-white" />
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default AIMachineLearning;