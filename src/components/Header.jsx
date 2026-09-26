import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  Menu,
  X,
  Laptop,
  ShoppingCart,
  BrainCircuit,
  Palette,
  Video,
  Globe,
} from "lucide-react";
import GlowButton from "./GlowButton";

const logo = "/logo.png";

const servicesData = [
  {
    slug: "web-development",
    title: "Web Development",
    desc: "Custom web development services in Bahawalpur.",
    icon: Laptop,
  },
  {
    slug: "app-development",
    title: "App Development",
    desc: "Top-tier mobile app development company.",
    icon: ShoppingCart,
  },
  {
    slug: "python-ml-ai",
    title: "AI & Machine Learning",
    desc: "Python, ML, and AI solutions.",
    icon: BrainCircuit,
  },
  {
    slug: "graphic-design",
    title: "Graphic Designing",
    desc: "Professional graphic designing services.",
    icon: Palette,
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    desc: "Result-driven digital marketing agency.",
    icon: Video,
  },
  {
    slug: "seo",
    title: "SEO",
    desc: "SEO services in Bahawalpur.",
    icon: Globe,
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenServices(false);
  }, [location.pathname]);

  // Lock background scroll when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenServices(false);
  };

  const services = servicesData
    .filter((s) => s.slug)
    .map((service) => ({
      title: service.title,
      to: `/services/${service.slug}`,
      desc: service.desc,
      icon: service.icon,
      slug: service.slug,
    }));

  const navLinksFirst = [{ name: "Home", to: "/" }];
  const navLinksSec = [
    { name: "About", to: "/about" },
    { name: "Team", to: "/team" },
    { name: "Blogs", to: "/blogs" },
    { name: "Contact Us", to: "/contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { when: "beforeChildren", staggerChildren: 0.06 },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <header className="fixed top-0 left-0 z-99999 w-full border-b border-white/30 bg-[#042558]/30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img
            src={logo}
            alt="Neffto Solution software development and digital marketing agency official company logo"
            className="w-20 -translate-x-6 sm:-translate-x-6"
            title="Neffto Solution software development and digital marketing agency official company logo"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-2">
          {navLinksFirst.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative mx-4 py-2 text-[13px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                  isActive ? "text-primary" : "text-white hover:text-primary"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                  />
                )}
              </Link>
            );
          })}

          {/* SERVICES MEGA MENU */}
          <div className="relative group">
            <Link
              to="/services"
              className="flex items-center gap-1 px-5 py-2 text-[13px] font-bold uppercase tracking-wider text-white group-hover:text-primary transition-colors cursor-pointer"
            >
              Services{" "}
              <ChevronDown
                size={14}
                className="group-hover:rotate-180 transition-transform duration-300"
              />
            </Link>

            {/* Dropdown Card */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white border border-gray-200 shadow-2xl w-60 overflow-hidden">
                <div className="p-2 grid grid-cols-1 gap-1">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.to}
                      className="group/item flex items-start gap-4 p-3 hover:bg-surface text-gray-900 hover:text-white transition-all duration-300 border border-gray-300 hover:border-black/10"
                    >
                      <div className="flex-1">
                        <h4 className="text-[14px] font-bold uppercase tracking-wide">
                          {service.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {navLinksSec.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative mx-4 py-2 text-[13px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                  isActive ? "text-primary" : "text-white hover:text-primary"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="hidden lg:flex items-center gap-4">
          <GlowButton
            to={"/contact"}
            name={"Get Started"}
            className="bg-white text-surface border-2 border-primary"
            hover="hover:text-white"
            layerHover="bg-primary"
          />
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden p-2 text-white hover:text-primary transition ease-in-out duration-300 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-full left-0 w-full bg-main-bg border-t border-white/10 overflow-hidden lg:hidden shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-2 max-h-[calc(100vh-80px)] overflow-y-auto">
              {navLinksFirst.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <motion.div key={link.to} variants={itemVariants}>
                    <Link
                      to={link.to}
                      onClick={closeMenu}
                      className={`block py-3 text-lg font-bold uppercase tracking-tight border-b border-white/10 ${
                        isActive ? "text-primary" : "text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              {/* MOBILE SERVICES ACCORDION */}
              <motion.div
                variants={itemVariants}
                className="border-b border-white/10"
              >
                <div className="w-full flex items-center justify-between py-3">
                  <Link
                    to="/services"
                    onClick={closeMenu}
                    className={`text-lg font-bold uppercase tracking-tight ${
                      location.pathname.startsWith("/services")
                        ? "text-primary"
                        : "text-white"
                    }`}
                  >
                    Services
                  </Link>
                  <button
                    onClick={() => setOpenServices(!openServices)}
                    className="p-1 text-primary cursor-pointer focus:outline-none"
                    aria-label="Toggle services list"
                  >
                    <motion.div animate={{ rotate: openServices ? 180 : 0 }}>
                      <ChevronDown size={22} />
                    </motion.div>
                  </button>
                </div>

                <AnimatePresence>
                  {openServices && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden flex flex-col gap-3 pl-4 border-l-2 border-primary mb-4 mt-1"
                    >
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.to}
                          onClick={closeMenu}
                          className="text-gray-200 py-1 text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors duration-200"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {navLinksSec.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <motion.div key={link.to} variants={itemVariants}>
                    <Link
                      to={link.to}
                      onClick={closeMenu}
                      className={`block py-3 text-lg font-bold uppercase tracking-tight border-b border-white/10 ${
                        isActive ? "text-primary" : "text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                variants={itemVariants}
                className="pt-6 pb-4 flex justify-center items-center"
              >
                <div onClick={closeMenu} className="w-full flex justify-center">
                  <GlowButton
                    name="Get a Quote"
                    to="/contact"
                    className="bg-white text-surface border-2 border-primary w-full text-center"
                    hover="hover:text-white"
                    layerHover="bg-primary"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;