import React, { useEffect, useRef } from "react";
import SEO from "../components/SEO";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  Cpu,
  Zap,
  Globe,
  Code2,
  BrainCircuit,
  Megaphone,
  Palette,
  Smartphone,
  Search,
  Users,
} from "lucide-react";
import GlowButton from "../components/GlowButton";
import CEO from "../assets/CEO.jpeg";
import CTO from "../assets/cto.png";
import CoFounder from "../assets/Ameerhamza.webp";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

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
            alt={`${name} - ${title} at Neffto Solution executive team`}
            style={{ objectPosition: imagePosition }}
            className="h-full w-full object-cover"
            title="Expert Software Developers & Designers Team - Neffto Solution"
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

/* =========================
   DEPARTMENT DATA
========================= */

const departmentData = [
  {
    id: 1,
    slug: "full-stack-web",
    category: "DEPARTMENT 01",
    title: "WEB DEVELOPMENT",
    description:
      "Building modern, scalable, secure, and high-performance web applications from frontend to backend.",
    icon: Code2,
    head: "Ahad Dahir",
  },
  {
    id: 2,
    slug: "app-development",
    category: "DEPARTMENT 02",
    title: "APP DEVELOPMENT",
    description:
      "Creating modern cross-platform mobile applications with smooth experiences and scalable architecture.",
    icon: Smartphone,
    head: "Wahaj Sajid",
  },
  {
    id: 3,
    slug: "python-machine-learning",
    category: "DEPARTMENT 03",
    title: "PYTHON & MACHINE LEARNING",
    description:
      "Developing intelligent AI systems, machine learning models, automation solutions, and data-driven applications.",
    icon: BrainCircuit,
    head: "Ruhul Hussain",
  },
  {
    id: 4,
    slug: "graphic-design",
    category: "DEPARTMENT 04",
    title: "GRAPHIC DESIGN",
    description:
      "Creating strong visual identities, creative designs, marketing materials, and engaging digital experiences.",
    icon: Palette,
    head: "Muhammad Fassih-ud-Din Abbasi",
  },
  {
    id: 5,
    slug: "digital-marketing",
    category: "DEPARTMENT 05",
    title: "DIGITAL MARKETING",
    description:
      "Driving brand growth through strategic marketing, social media campaigns, and online engagement.",
    icon: Megaphone,
    head: "Ameer Hamza",
  },
  {
    id: 6,
    slug: "search-engine-optimization",
    category: "DEPARTMENT 06",
    title: "SEARCH ENGINE OPTIMIZATION (SEO)",
    description:
      "Growing online visibility through technical SEO, content strategy, search optimization, and business development.",
    icon: Search,
    head: "Saira",
  },
  {
    id: 7,
    slug: "ai-automation",
    category: "DEPARTMENT 07",
    title: "AI & AUTOMATION",
    description:
      "Developing intelligent automation solutions and AI-powered systems to streamline processes and enhance efficiency.",
    icon: BrainCircuit,
    head: "Muhammad Hamza",
  },
  {
    id: 8,
    slug: "ghl-automation",
    category: "DEPARTMENT 08",
    title: "GHL AUTOMATION",
    description:
      "Implementing advanced automation workflows and systems using GoHighLevel (GHL) to optimize business processes.",
    icon: Zap,
    head: "Muhammad Mubeen",
  },
  {
    id: 9,
    slug: "client-hunting",
    category: "DEPARTMENT 09",
    title: "CLIENT HUNTING",
    description:
      "Our client acquisition team focuses on identifying potential clients, building relationships, and generating business opportunities for growth.",
    icon: Users,
    head: "Zeeshan Zahid",
  }
];

/* =========================
   DEPARTMENT CARD
========================= */

const DepartmentCard = ({ department, index }) => {
  const navigate = useNavigate();

  const Icon = department.icon;

  const handleClick = () => {
    navigate(`/team/department/${department.slug}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.05,
      }}
      onClick={handleClick}
      className={`
        group relative h-112.5 w-[320px] sm:w-95 shrink-0
        overflow-hidden rounded-[30px] lg:rounded-[40px]
        bg-[#020617]/80
        border border-white/10
        backdrop-blur-xl
        shadow-2xl cursor-pointer
        ${index % 2 === 0 ? "lg:mt-20" : "lg:mb-20"}
        mx-auto lg:mx-0
      `}
    >
      {/* Background Glow */}

      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl transition-all duration-700 group-hover:bg-primary/20 group-hover:scale-125" />

      <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl transition-all duration-700 group-hover:bg-blue-500/20 group-hover:scale-125" />

      {/* Main Content */}

      <div className="relative flex h-full flex-col justify-between p-7 lg:p-10">
        {/* TOP */}

        <div className="flex items-start justify-between">
          {/* Department Number */}

          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              {department.category}
            </span>
          </div>

          {/* Icon */}

          <div
            className="
              flex h-14 w-14
              items-center justify-center
              rounded-2xl
              border border-white/10
              bg-white/5
              text-primary
              backdrop-blur-md
              transition-all duration-500
              group-hover:scale-110
              group-hover:rotate-6
              group-hover:border-primary/40
              group-hover:bg-primary/10
            "
          >
            <Icon
              size={28}
              strokeWidth={1.5}
              className="transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* CENTER */}

        <div className="relative">
          <h3
            className="
              text-xl lg:text-3xl
              font-black italic
              tracking-tighter
              text-white uppercase
              leading-[0.9]
            "
          >
            {department.title}
          </h3>

          {/* Description */}
          <div
            className="
              mt-5
              overflow-hidden
              translate-y-3
              transition-all
              duration-500 max-h-32
            "
          >
            <p
              className="
                border-l
                border-primary
                pl-3
                text-sm
                font-light
                italic
                leading-snug
                text-zinc-400
              "
            >
              {department.description}
            </p>
          </div>
        </div>

        {/* BOTTOM */}

        <div className="flex items-end justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">
              Department Head
            </p>

            <p className="mt-1 text-sm font-semibold text-zinc-300">
              {department.head}
            </p>
          </div>

          {/* VIEW TEAM */}

          <div
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-full
              border border-white/10
              bg-white/5
              text-white
              transition-all duration-500
              group-hover:border-primary
              group-hover:bg-primary
              group-hover:text-black
            "
          >
            <ArrowUpRight
              size={19}
              strokeWidth={1.8}
              className="
                transition-transform
                duration-500
                group-hover:rotate-45
              "
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* =========================
   MAIN TEAM GRID
========================= */

const TeamGrid = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useSpring(
    useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-72%"]),
    {
      stiffness: 50,
      damping: 20,
    },
  );

  return (
    <div className="relative" ref={targetRef}>
      {/* =========================
          DESKTOP
      ========================= */}

      <section className="hidden lg:block h-[430vh]">
        <div className="sticky top-10 flex h-screen items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-16 px-[5vw] items-center"
          >
            {/* HEADER */}

            <div className="flex w-110 shrink-0 flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-primary" />

                <span className="text-primary font-bold tracking-widest text-sm uppercase">
                  Our Departments
                </span>
              </div>

              <h2 className="text-6xl font-black italic text-white leading-[0.8] tracking-tighter uppercase">
                EXPLORE THE
                <br />
                <span className="text-transparent stroke-text-white">
                  DEPARTMENTS.
                </span>
              </h2>

              <p className="mt-8 text-zinc-400 text-base font-light italic leading-relaxed max-w-sm">
                Meet the specialized teams behind our digital solutions. Explore
                each department and discover the people building what's next.
              </p>
            </div>

            {/* DEPARTMENT CARDS */}

            {departmentData.map((department, index) => (
              <DepartmentCard
                key={department.id}
                department={department}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================
          MOBILE / TABLET
      ========================= */}

      <section className="lg:hidden px-6 py-20">
        <div className="mb-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-primary" />

            <span className="text-primary font-bold tracking-widest text-xs uppercase">
              Our Departments
            </span>

            <span className="h-px w-8 bg-primary" />
          </div>

          <h2 className="text-5xl sm:text-6xl font-black italic text-white uppercase leading-none tracking-tighter">
            EXPLORE THE
            <br />
            <span className="text-transparent stroke-text-white">
              DEPARTMENTS.
            </span>
          </h2>

          <p className="text-zinc-500 italic mt-5 max-w-md mx-auto">
            Explore our specialized departments and meet the teams behind every
            digital solution.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {departmentData.map((department, index) => (
            <DepartmentCard
              key={department.id}
              department={department}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* =========================
          STYLES
      ========================= */}

      <style>{`
        .stroke-text-white {
          -webkit-text-stroke: 1px white;
        }
      `}</style>
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
        schema={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Expert Developers & Designers Team - Neffto Solution",
          description:
            "Meet the talented and passionate team behind Neffto Solution.",
          url: "https://nefftosolution.com/team",
        })}
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
          <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 items-center justify-between">
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
                "The innovators, creators, and dreamers architecting the digital{" "}
                <br />
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
          title="Neffto Solution Software Agency Background"
          role="img"
          aria-label="Neffto Solution Software Agency Background"
          className="relative sm:py-16 py-10 bg-fixed bg-cover bg-center text-center overflow-hidden"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')`,
          }}
        >
          {/* overlays */}
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 sm:space-y-8 space-y-4 z-10 text-white">
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
              We’re assembling a high-performance engineering team focused on{" "}
              <Link
                to="/services/python-ml-ai"
                className="text-white decoration-accent-blue underline underline-offset-4"
              >
                AI
              </Link>
              , distributed systems, and next-generation products. If you think
              in systems and build with precision, you’ll fit right in.
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
