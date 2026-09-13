import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
const servicesData = [
  { slug: "seo", title: "SEO" },
  { slug: "digital-marketing", title: "Digital Marketing" },
  { slug: "app-development", title: "App Development" },
  { slug: "graphic-design", title: "Graphic Designing" },
  { slug: "web-development", title: "Web Development" },
  { slug: "python-ml-ai", title: "AI & Machine Learning" },
];
const logo = "/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const MotionLink = motion.create(Link);

  return (
    <footer className="relative w-full bg-main-bg pb-10 overflow-hidden">
      <div className="absolute bottom-[-20%] right-[-10%] w-150 h-150 bg-[#042558] blur-[140px]" />
      {/* ================= MARQUEE ================= */}
      <div className="relative border-y border-white/5 py-4 md:py-6 mb-10 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array(3)
            .fill("Partner with Us to Build Excellence • ")
            .map((text, i) => (
              <span
                key={i}
                className="text-[6vw] md:text-[5vw] lg:text-[3vw] font-black uppercase tracking-tighter text-transparent pr-4"
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.15)",
                }}
              >
                {text}
              </span>
            ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* ================= Location ================= */}
        <div className="space-y-4 sm:space-y-6 my-16">
          <h2 className="relative text-lg sm:text-xl font-bold text-white uppercase">
            Location
            <span className="absolute -bottom-1 left-0 h-0.75 w-26 rounded-full bg-linear-to-r from-[#5482b4] via-[#b4d0e6] to-transparent"></span>
          </h2>

          <div className="space-y-3 text-white/70 text-sm">
            <p>Faisal Colony, Bahawalpur, Pakistan</p>
            <div className="w-full h-48 sm:h-100 rounded overflow-hidden mt-4 border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d596.9740716689197!2d71.6961130040417!3d29.40105363811351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1788867393649!5m2!1sen!2s"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-16 items-start">
          {/* ================= LEFT ================= */}
          <div className="space-y-6 lg:col-span-2">
            <div className="">
              <Link to="/" className="inline-block">
                <img src={logo}
                  alt="Neffto Solution software development and digital marketing agency official company logo"
                  className="w-30 -translate-x-8" title="Neffto Solution software development and digital marketing agency official company logo" />
              </Link>

              <p className="max-w-sm text-white/70 text-xs sm:text-sm leading-relaxed">
                We take on a limited number of projects each year to ensure deep
                focus, precision, and premium quality execution.
              </p>
            </div>

           {/* SOCIAL LINKS */}
            <div className="flex flex-wrap gap-4">
              <a href="https://www.facebook.com/people/Neffto-It-Solutions/61591430441959/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition" title="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/nefftosolution/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition" title="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/144873914" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://www.pinterest.com/nefftosolution/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition" title="Pinterest">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.84-.13-2.13.03-3.05.15-.84 1-4.22 1-4.22s-.26-.52-.26-1.28c0-1.2.7-2.1 1.56-2.1.73 0 1.09.55 1.09 1.2 0 .74-.47 1.84-.71 2.87-.2.86.43 1.56 1.28 1.56 1.54 0 2.73-1.63 2.73-3.97 0-2.07-1.49-3.52-3.62-3.52-2.47 0-3.92 1.85-3.92 3.76 0 .74.29 1.54.64 1.97.07.08.08.16.06.24l-.2 .83c-.03.13-.1.15-.24.09-1.27-.6-1.85-2.22-1.85-3.58 0-2.91 2.12-5.59 6.1-5.59 3.2 0 5.68 2.28 5.68 5.33 0 3.19-2.01 5.75-4.79 5.75-.94 0-1.82-.49-2.12-1.06l-.58 2.2c-.21.8-.78 1.8-1.16 2.41A12 12 0 1 0 12 0z"/>
                </svg>
              </a>
              <a href="https://x.com/Nefftosolutions" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition" title="X (Twitter)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>
            </div>

            {/* CTA BUTTON */}
            <MotionLink
              to={"/contact"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group cursor-pointer w-fit flex items-center gap-3 sm:gap-5 bg-white text-black px-1 pr-5 sm:pr-8 py-1 rounded-full"
            >
              <div className="h-8 w-8 sm:h-10 sm:w-10 bg-primary ease-in-out rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition duration-500">
                <ArrowUpRight size={18} />
              </div>

              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest">
                Get In Touch
              </span>
            </MotionLink>
          </div>

          {/* ================= COMPANY ================= */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="relative inline-block text-lg font-bold uppercase text-white sm:text-xl">
              Company
              <span className="absolute -bottom-1 left-0 h-0.75 w-16 rounded-full bg-linear-to-r from-[#5482b4] via-[#b4d0e6] to-transparent"></span>
            </h2>

            <nav className="space-y-3 sm:space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "Team", path: "/team" },
                { name: "About Us", path: "/about" },
                { name: "Contact Us", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="group flex items-center w-fit gap-2 text-white/80 hover:text-primary transition"
                >
                  <span className="text-xs sm:text-sm group-hover:scale-110 transition-transform duration-300">
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
          {/* ================= SERVICES ================= */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="relative text-lg sm:text-xl font-bold text-white uppercase">
              Services
              <span className="absolute -bottom-1 left-0 h-0.75 w-22 rounded-full bg-linear-to-r from-[#5482b4] via-[#b4d0e6] to-transparent"></span>
            </h2>

            <nav className="space-y-3 sm:space-y-4">
              {servicesData.map((item) => (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  className="group flex items-center w-fit gap-2 text-white/80 hover:text-primary transition"
                >
                  <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300" />
                  <span className="text-xs sm:text-sm">{item.title}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* ================= NAV ================= */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="relative inline-block text-lg font-bold uppercase text-white sm:text-xl">
              Pages
              <span className="absolute -bottom-1 left-0 h-0.75 w-16 rounded-full bg-linear-to-r from-[#5482b4] via-[#b4d0e6] to-transparent"></span>
            </h2>

            <nav className="space-y-3 sm:space-y-4">
              {[
                { name: "Disclaimer", path: "/disclaimer" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Cookies Policy", path: "/cookies-policy" },
                { name: "Terms and Conditions", path: "/terms-and-conditions" },
                {
                  name: "Refund & Cancellation Policy",
                  path: "/refund-and-cancellation-policy",
                },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="group flex items-center w-fit gap-2 text-white/80 hover:text-primary transition"
                >
                  <span className="text-xs sm:text-sm group-hover:scale-110 transition-transform duration-300">
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-10 pt-6 md:pt-8 border-t border-white/5">
          <p className="text-center text-xs sm:text-sm text-white">
            &copy; {currentYear}{" "}
            <Link to={"/"} className="text-primary underline">
              NEFFTO
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>

      {/* ================= ANIMATION ================= */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
