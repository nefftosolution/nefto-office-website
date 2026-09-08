import React, { useRef } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import Hamza from "../assets/hamza.png";
import Sabir from "../assets/sabir.png";
import Mubeen from "../assets/mubeen.png";
import Meer from "../assets/meer.png";
import Talha from "../assets/talha.png";
import Abeeha from "../assets/Abeeha.png";
import Wahaj from "../assets/Wahaj.png";
import Rahul from "../assets/rahul-team.png";
import Zeeshan from "../assets/Zeeshan.png";
import Ramish from "../assets/Ramish.png";
import Asim from "../assets/Asim.png";
import Zohaib from "../assets/Zohaib.png";

const cardData = [
  {
    id: 1,
    category: "FULL STACK WEB DEVELOPER",
    title: "Muhammad Hamza",
    description:
      "Develops high-performance web applications with secure architecture, clean code, and scalable frontend and backend solutions.",
    image: Hamza,
  },
  {
    id: 2,
    category: "PYTHON & MACHINE LEARNING ENGINEER",
    title: "Ruhul Hussain",
    description:
      "Builds intelligent AI solutions using Python, Machine Learning, Data Analysis, and automation to solve complex business challenges.",
    image: Rahul,
  },
  {
    id: 3,
    category: "PERFORMANCE MARKETING SPECIALIST",
    title: "Sabir Hussain",
    description:
      "Drives business growth through performance marketing, paid advertising, lead generation, and conversion optimization strategies.",
    image: Sabir,
  },
  {
    id: 4,
    category: "FRONTEND WEB DEVELOPER",
    title: "Muhammad Mubeen Amjad",
    description:
      "Creates responsive, interactive, and user-friendly web interfaces using React, Tailwind CSS, and modern frontend technologies.",
    image: Mubeen,
  },
  {
    id: 5,
    category: "GRAPHIC DESIGNER",
    title: "Meer Ali Abbas",
    description:
      "Designs creative brand identities, social media creatives, marketing materials, and engaging visual experiences for digital platforms.",
    image: Meer,
  },
  {
    id: 6,
    category: "MACHINE LEARNING ENGINEER",
    title: "Muhammad Talha",
    description:
      "Develops AI-powered applications, predictive models, and intelligent systems that transform data into valuable business insights.",
    image: Talha,
  },
  {
    id: 7,
    category: "FLUTTER APP DEVELOPER",
    title: "Muhammad Wahaj Sajid",
    description:
      "Builds modern cross-platform mobile applications with seamless user experiences, scalable architecture, and high performance.",
    image: Wahaj,
  },
  {
    id: 8,
    category: "FULL STACK WEB DEVELOPER",
    title: "Abeeha Arshad",
    description:
      "Develops secure, scalable, and responsive web applications with a strong focus on performance, usability, and modern design.",
    image: Abeeha,
  },
  {
    id: 9,
    category: "SEO & BUSINESS GROWTH MANAGER",
    title: "Zeeshan Zahid",
    description:
      "Leads SEO strategy, client acquisition, marketplace management, and business development to generate high-quality leads and long-term growth.",
    image: Zeeshan,
  },
  {
    id: 10,
    category: "FULL STACK WEB DEVELOPER",
    title: "Ramish Ali",
    description:
      "Builds reliable and scalable web applications with clean architecture, optimized performance, and exceptional user experiences.",
    image: Ramish,
  },
  {
    id: 11,
    category: "FRONTEND WEB DEVELOPER",
    title: "Muhammad Asim",
    description:
      "Specializes in React, JavaScript, HTML, CSS, and Tailwind CSS to build fast, responsive, and modern web interfaces.",
    image: Asim,
  },
  {
    id: 12,
    category: "SEO SPECIALIST",
    title: "Zohaib Jutt",
    description:
      "Improves website visibility through technical SEO, keyword research, on-page optimization, content strategy, and search engine growth.",
    image: Zohaib,
  },
];

const TeamMemberCard = ({ card, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      // Responsive logic: Zig-zag only on Large screens
      className={`group relative h-112.5 w-[320px] sm:w-95 shrink-0 overflow-hidden rounded-[30px] lg:rounded-[40px] bg-zinc-900 shadow-2xl 
        ${index % 2 === 0 ? "lg:mt-20" : "lg:mb-20"} 
        mx-auto lg:mx-0`}
    >
      {/* Image with subtle scale on hover */}
      <div className="absolute inset-0 h-full w-full">
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
      </div>

      {/* Floating Info */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-10">
        <div className="mb-4 w-fit rounded-full border border-white/10 bg-black/5 px-4 py-1 backdrop-blur-md">
          <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">
            {card.category}
          </span>
        </div>

        <h3 className="text-2xl lg:text-3xl font-black italic tracking-tighter text-white uppercase leading-[0.85]">
          {card.title}
        </h3>

        <div className="mt-4 overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-500 ease-in-out">
          <p className="text-sm text-zinc-300 font-light leading-snug italic border-l border-primary pl-3">
            {card.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const TeamGrid = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useSpring(
    useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-80%"]),
    { stiffness: 50, damping: 20 },
  );

  return (
    <div className="relative" ref={targetRef}>
      {/* DESKTOP VIEW: Horizontal Scroll (lg:block) */}
      <section className="hidden lg:block h-[500vh]">
        <div className="sticky top-10 flex h-screen items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-16 px-[6vw] items-center"
          >
            {/* Unique Header Design */}
            <div className="flex w-125 shrink-0 flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-primary"></span>
                <span className="text-primary font-bold tracking-widest text-sm uppercase">
                  The Core Team
                </span>
              </div>
              <h2 className="text-8xl font-black italic text-white leading-[0.8] tracking-tighter uppercase">
                MEET THE <br />
                <span className="text-transparent stroke-text-white">
                  SQUAD.
                </span>
              </h2>
              <p className="mt-8 text-zinc-400 text-xl font-light italic leading-relaxed max-w-sm">
                Architecting the digital backbone of the next century with
                precision and passion.
              </p>
            </div>

            {/* Team Members */}
            {cardData.map((card, index) => (
              <TeamMemberCard key={card.id} card={card} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* MOBILE/TABLET VIEW: Vertical Layout (lg:hidden) */}
      <section className="lg:hidden px-6 py-20">
        <div className="mb-20 text-center">
          <h2 className="text-6xl font-black italic text-white uppercase leading-none tracking-tighter">
            MEET THE <br />
            <span className="text-transparent stroke-text-white">SQUAD.</span>
          </h2>
          <p className="text-zinc-500 italic mt-4">
            The innovators behind the screen.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {cardData.map((card, index) => (
            <TeamMemberCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </section>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.1);
        }
        .stroke-text-white {
          -webkit-text-stroke: 1px white;
        }
      `}</style>
    </div>
  );
};

export default TeamGrid;
