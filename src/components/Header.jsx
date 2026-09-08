import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  Menu,
  X,
  Code,
  Cloud,
  Cpu,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import GlowButton from "./GlowButton";
const logo = "/logo.png";
import { servicesData } from "../data/serviceData";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const location = useLocation();

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
    { name: "About Us", to: "/about" },
    { name: "Team", to: "/team" },
  ];

  // Animation Variants
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { when: "beforeChildren", staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <header className="fixed top-0 left-0 z-1000 w-full border-b border-white/30 bg-[#042558]/30 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto sm:px-6 px-4 h-20 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-20 -translate-x-6" />
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
            <button className="flex items-center gap-1 px-5 py-2 text-[13px] font-bold uppercase tracking-wider text-white group-hover:text-primary transition-colors cursor-pointer">
              Services{" "}
              <ChevronDown
                size={14}
                className="group-hover:rotate-180 transition-transform duration-300"
              />
            </button>

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
                      {/* CONTENT */}
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
            className="absolute top-full left-0 w-full bg-surface border-t border-white/10 overflow-hidden lg:hidden shadow-2xl"
          >
            <div className="px-8 py-10 flex flex-col gap-2 overflow-y-auto max-h-[80vh]">
              {navLinksFirst.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <motion.div key={link.to} variants={itemVariants}>
                    <Link
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={`block py-4 text-xl font-bold uppercase tracking-tighter border-b border-white/10 mt-2 ${
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
                className=" border-b border-white/10 mt-2"
              >
                <button
                  onClick={() => setOpenServices(!openServices)}
                  className="w-full flex items-center justify-between py-6 text-xl font-bold uppercase tracking-tighter text-white"
                >
                  <span className={openServices ? "text-primary" : ""}>
                    Services
                  </span>
                  <motion.div animate={{ rotate: openServices ? 180 : 0 }}>
                    <ChevronDown size={24} className="text-primary" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openServices && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-4 pl-4 border-l-2 border-primary mb-6"
                    >
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.to}
                          onClick={() => setIsOpen(false)}
                          className="text-white py-1 text-sm font-bold uppercase tracking-widest hover:text-primary transition ease-in-out duration-300"
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
                      onClick={() => setIsOpen(false)}
                      className={`block py-4 text-xl font-bold uppercase tracking-tighter border-b border-white/10 mt-2 ${
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
                className="pt-6 flex justify-center items-center"
              >
                <GlowButton
                  name="Get a Quote"
                  to="/contact"
                  className="bg-white text-surface border-2 border-primary"
                  hover="hover:text-white"
                  layerHover="bg-primary"
                  onClick={() => setIsOpen(false)}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
