import React, { useEffect } from "react";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Zap, Globe } from "lucide-react";
import GlowButton from "../components/GlowButton";
import CEO from "../assets/CEO.jpeg";
import CTO from "../assets/cto.png";
import CoFounder from "../assets/Ameerhamza.webp";
import TeamGrid from "../components/TeamGrid";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const MainTeamCard = ({
  imageSrc,
  name,
  title,
  imagePosition = "center center",
}) => {
  return (
    <div className="group relative select-none shrink-0 overflow-hidden w-80 rounded-2xl sm:rounded-[28px] border border-white/10 bg-[#020617]/60 backdrop-blur-xl">
      {/* Image Container */}
      <div className="relative h-100 w-full overflow-hidden">
        {imageSrc ? (
          <img
            loading="lazy"
            src={imageSrc}
            alt={name}
            style={{ objectPosition: imagePosition }}
            className="h-full w-full object-cover"
          />
        ) : null}

        {/* Multi-stage Gradient Overlay for Perfect Text Contrast */}
        <div className="absolute inset-0 bg-linear-to-t from-black to-transparent opacity-90 transition-opacity duration-300" />

        {/* Role Badge - Responsive Sizing */}
        <div className="absolute left-3 top-3 sm:left-4 sm:top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 backdrop-blur-md shadow-lg">
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-accent-blue drop-shadow-sm">
            {title}
          </span>
        </div>

        {/* Card Content Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-7">
          <h3 className="text-lg sm:text-xl font-bold tracking-normal text-white transition-colors duration-300">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
};

/* ================= MAIN COMPONENT ================= */
const Team = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize for responsive logic
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const springTransition = {
    type: "spring",
    stiffness: 120,
    damping: 22,
    mass: 1,
  };

  const teamMembers = [
    {
      name: "Abdul Ahad Dahir",
      title: "Co-Founder",
      image: CEO,
      color: "bg-blue-600",
    },
    {
      name: "Ameer Hamza",
      title: "Co-Founder",
      image: CoFounder,
      color: "bg-indigo-600",
    },
    {
      name: "Muhammad Hunzilah",
      title: "CTO",
      image: CTO,
      color: "bg-purple-600",
    },
  ];

  return (
    <>
      <SEO
        title="Meet Our Software Development Team | Neffto Solution"
        description="Meet the developers, AI engineers and marketers behind Neffto Solution in Bahawalpur. See exactly who builds your project. Talk to the team today."
        canonical="https://nefftosolution.com/team"
        ogTitle="Meet Our Software Development Team | Neffto Solution"
        ogDescription="Meet the developers, AI engineers and marketers behind Neffto Solution in Bahawalpur. See exactly who builds your project. Talk to the team today."
        ogUrl="https://nefftosolution.com/team"
        keywords="software development team Pakistan, NEFFTO team, NEFFTO developers, web developers, software developers, AI specialists, designers, digital professionals"
      />
      <main className="bg-main-bg text-white selection:bg-surface selection:text-white pt-20">
        <section
          className="relative overflow-hidden px-6 py-20"
          // Hover only works on Desktop
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
          <div className="absolute top-[-20%] left-[-10%] w-150 h-150 bg-[#042558] blur-[140px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-150 h-150 bg-[#042558] blur-[140px]" />
          <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto items-center justify-between">
            {/* LEFT SIDE: TEXT CONTENT */}
            <motion.div
              animate={{
                // On desktop: Shrink to 0 width. On mobile: Stay full width.
                flexBasis: !isMobile && isHovered ? "0%" : "100%",
                opacity: !isMobile && isHovered ? 0 : 1,
                x: !isMobile && isHovered ? -200 : 0,
              }}
              transition={springTransition}
              className="min-w-0 overflow-hidden text-center lg:text-left z-50 lg:pr-10 mb-16 lg:mb-0"
            >
              <h1 className="text-5xl md:text-nowrap md:text-6xl lg:text-6xl font-black italic leading-[0.9] tracking-tighter uppercase text-white">
                MEET THE TEAM <br className="hidden md:block" />
                BEHIND{" "}
                <span className="text-transparent stroke-text font-serif">
                  NEFFTO.
                </span>
              </h1>
              <p className="text-zinc-400 md:text-nowrap text-base md:text-sm font-light max-w-md mt-6 italic mx-auto lg:mx-0">
                "The innovators, creators, and dreamers architecting the digital <br />
                backbone of the next century."
              </p>
            </motion.div>

            {/* RIGHT SIDE: INTERACTIVE CARDS GALLERY */}
            <motion.div
              animate={{
                flexBasis: !isMobile && isHovered ? "100%" : "50%",
              }}
              transition={springTransition}
              className="relative w-full shrink-0"
            >
              {/* 
              MOBILE: Grid layout (2 columns on tablet, 1 on mobile)
              DESKTOP: Stacked layout 
          */}
              <div className="flex items-center justify-center flex-wrap lg:block relative w-full gap-6 md:gap-10">
                {teamMembers.map((member, index) => {
                  const total = teamMembers.length;
                  const centerIndex = (total - 1) / 2;
                  const distanceFromCenter = index - centerIndex;

                  return (
                    <motion.div
                      key={index}
                      initial={false}
                      animate={
                        !isMobile
                          ? {
                              // DESKTOP ANIMATION
                              x: isHovered
                                ? distanceFromCenter * 340 // Horizontal spread
                                : distanceFromCenter * 25, // Tight stack

                              y: 0, // NO Y-AXIS MOVEMENT AS REQUESTED

                              rotate: isHovered ? 0 : distanceFromCenter * 4,

                              scale: isHovered ? 1 : 1 - index * 0.02,

                              zIndex: 100 - index, // First index on top
                            }
                          : {
                              // MOBILE: No animation, reset positions for grid
                              x: 0,
                              y: 0,
                              rotate: 0,
                              scale: 1,
                              zIndex: 1,
                            }
                      }
                      transition={springTransition}
                      // On Desktop it's absolute, on mobile it's relative to fill the grid
                      className={`${isMobile ? "relative" : "absolute inset-0 m-auto flex items-center justify-center"}`}
                    >
                      <div className="relative group">
                        <MainTeamCard
                          imageSrc={member.image}
                          name={member.name}
                          title={member.title}
                          imagePosition="center 0%"
                        />
                      </div>
                    </motion.div>
                  );
                })}

                {/* 
                This "Ghost" div ensures the section has height on Desktop 
                since the children are absolute.
            */}
                <div className="hidden lg:block invisible pointer-events-none">
                  <MainTeamCard imageSrc="" name="" title="" />
                </div>
              </div>
            </motion.div>
          </div>

          <style>{`
            .stroke-text {
              -webkit-text-stroke: 1px white;
            }
          `}</style>
        </section>

        <div className="relative">
          <TeamGrid />
        </div>

        {/* SECTION 5 (ODD): JOIN THE PIPELINE */}
        <section
          className="relative sm:py-16 py-10 px-4 bg-fixed bg-cover bg-center text-center overflow-hidden"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')`,
          }}
        >
          {/* overlays */}
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative max-w-5xl mx-auto sm:space-y-8 space-y-4 z-10 text-white">
            {/* small label */}
            <div className="flex justify-center items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-off-white font-bold">
              <span className="sm:w-10 w-4 h-px bg-off-white" />
              Join The Network
            </div>

            {/* heading */}
            <motion.div
              whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
                BUILD THE <br />
                <span className="text-transparent stroke-text">FUTURE.</span>
              </h2>
            </motion.div>

            {/* description */}
            <p className="text-zinc-200 text-sm sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              We’re assembling a high-performance engineering team focused on
              AI, distributed systems, and next-generation products. If you
              think in systems and build with precision, you’ll fit right in.
            </p>

            {/* actions */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <GlowButton
                name="Let's Connect"
                to="/contact"
                className="bg-surface text-white border-2 border-surface"
                hover="hover:text-surface"
                layerHover="bg-white"
              />
            </div>
          </div>
        </section>
        {/* stroke style */}
        <style>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px #efeff2;
          color: transparent;
        }
      `}</style>
      </main>
    </>
  );
};

export default Team;
