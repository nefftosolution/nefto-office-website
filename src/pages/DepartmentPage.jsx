import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import Ahad from "../assets/CEO.jpeg";
import Hunzilah from "../assets/cto.png";
import AmeerHamza from "../assets/Ameerhamza.webp";
import Hamza from "../assets/hamza.jpeg";
import Mubeen from "../assets/mubeen.png";
import Meer from "../assets/meer.png";
import Talha from "../assets/talha.jpeg";
import AsadAkram from "../assets/Asad-Akram.jpeg";
import SidraNawaz from "../assets/Sidra-Nawaz.jpeg";
import Wahaj from "../assets/Wahaj.png";
import Rahul from "../assets/rahul-team.png";
import Zeeshan from "../assets/Zeeshan.png";
import Ramish from "../assets/Ramish.png";
import Asim from "../assets/Asim.png";
import Touseef from "../assets/touseef.jpeg";
import Anas from "../assets/anas.jpeg";
import Ahmad from "../assets/Ahmad.png";
import Fassih from "../assets/Fassih.png";
import SaimHayat from "../assets/Saim-Hayat.jpeg";
import Saira from "../assets/Saira.jpeg";

const departments = {
  "full-stack-web": {
    title: "FULL STACK WEB",
    subtitle: "Web Development Department",
    description:
      "Our Full Stack Web Development team creates scalable, secure, responsive, and high-performance digital products using modern frontend and backend technologies.",

    members: [
      {
        id: 1,
        role: "WEB DEPARTMENT HEAD",
        name: "Ahad Dahir",
        description:
          "Leads full stack development and builds scalable web architectures with modern frontend and backend technologies.",
        image: Ahad,
        head: true,
      },
      {
        id: 2,
        role: "FULL STACK WEB DEVELOPER",
        name: "Muhammad Hunzilah",
        description:
          "Develops secure, scalable, animated and responsive web applications with a strong focus on performance and usability.",
        image: Hunzilah,
      },
      {
        id: 3,
        role: "FULL STACK WEB DEVELOPER",
        name: "Ramish Ali",
        description:
          "Builds reliable and scalable web applications with clean architecture and optimized performance.",
        image: Ramish,
      },
      {
        id: 4,
        role: "FRONTEND WEB DEVELOPER",
        name: "Zeeshan Zahid",
        description:
          "Creates responsive and interactive web interfaces using React, Tailwind CSS, and modern frontend technologies.",
        image: Zeeshan,
      },
      {
        id: 5,
        role: "FULL STACK WEB DEVELOPER",
        name: "Muhammad Asim",
        description:
          "Develops full stack web applications with a focus on clean code, scalability, and performance optimization.",
        image: Asim,
      },
    ],
  },

  "python-machine-learning": {
    title: "PYTHON & MACHINE LEARNING",
    subtitle: "AI & Machine Learning Department",
    description:
      "Our AI team develops intelligent applications, machine learning models, automation systems, and data-driven solutions using Python and modern AI technologies.",

    members: [
      {
        id: 1,
        role: "AI&ML DEPARTMENT HEAD",
        name: "Ruhul Hussain",
        description:
          "Leads Python and machine learning projects, building intelligent systems and automation solutions.",
        image: Rahul,
        head: true,
      },
      {
        id: 2,
        role: "AI&ML Engineer",
        name: "Muhammad Talha",
        description:
          "Develops AI-powered applications, predictive models, and intelligent systems that transform data into insights.",
        image: Talha,
      },
      {
        id: 3,
        role: "AI&ML Engineer",
        name: "Asad Akram",
        description:
          "Specializes in developing machine learning models and AI solutions for various business applications.",
        image: AsadAkram,
      },
    ],
  },

  "digital-marketing": {
    title: "DIGITAL MARKETING",
    subtitle: "Digital Marketing Department",
    description:
      "Our digital marketing team focuses on measurable growth through paid advertising, lead generation, campaign optimization, and conversion strategies.",

    members: [
      {
        id: 1,
        role: "DEPARTMENT HEAD",
        name: "Sabir Hussain",
        description:
          "Leads digital marketing campaigns, paid advertising, lead generation, and conversion optimization strategies.",
        image: AmeerHamza,
        head: true,
      },
      {
        id: 2,
        role: "Digital Marketing Specialist",
        name: "Muhammad Touseef",
        description:
          "Specializes in digital marketing strategies, campaign optimization, and lead generation to drive business growth.",
        image: Touseef,
      },
      {
        id: 3,
        role: "Junior Digital Marketer",
        name: "Sidra Nawaz",
        description:
          "Assists in executing digital marketing campaigns, social media management, and content creation for brand growth.",
        image: SidraNawaz,
      },
    ],
  },

  "graphic-design": {
    title: "GRAPHIC DESIGN",
    subtitle: "Creative Design Department",
    description:
      "Our creative team creates powerful visual identities, digital graphics, marketing materials, and engaging brand experiences.",

    members: [
      {
        id: 1,
        role: "GRAPHIC DEPARTMENT HEAD",
        name: "Muhammad Fassih ud din abbasi",
        description:
          "Leads Brand identity & Visual Designer, graphic design projects, creating visual identities, marketing materials, and engaging brand experiences.",
        image: Fassih,
        head: true,
      },
      {
        id: 2,
        role: "Logo Designer",
        name: "Ahmad Alvi",
        description:
          "Designs unique and memorable logos, brand identities, and visual assets that represent the essence of a business or product.",
        image: Ahmad,
      },
      {
        id: 3,
        role: "Graphic Designer",
        name: "Meer Ali",
        description:
          "Designs visually appealing graphics, marketing materials, and digital assets to enhance brand presence.",
        image: Meer,
      },
    ],
  },

  "app-development": {
    title: "APP DEVELOPMENT",
    subtitle: "Mobile Application Department",
    description:
      "Our mobile development team builds modern cross-platform applications with smooth user experiences, scalable architecture, and high performance.",

    members: [
      {
        id: 1,
        role: "Mobile App DEPARTMENT HEAD",
        name: "Wahaj Sajid",
        description:
          "Leads mobile app development projects, building cross-platform applications with native performance and modern mobile technologies.",
        image: Wahaj,
        head: true,
      },
    ],
  },

  "search-engine-optimization": {
    title: "SEO & BUSINESS GROWTH",
    subtitle: "SEO & Growth Department",
    description:
      "Our growth team improves online visibility, generates qualified leads, and develops long-term search and business growth strategies.",

    members: [
      {
        id: 1,
        role: "SEO DEPARTMENT HEAD",
        name: "Saira",
        description:
          "Leads SEO and business growth strategies, improving online visibility, generating qualified leads, and developing long-term growth plans.",
        image: Saira,
        head: true,
      },
    ],
  },

  "ai-automation": {
    title: "AI & AUTOMATION",
    subtitle: "AI & Automation Department",
    description:
      "Our AI and automation team develops intelligent systems, automates processes, and builds AI-powered applications for business efficiency.",
    members: [
      {
        id: 1,
        role: "Ai Automation DEPARTMENT HEAD",
        name: "Muhammad Hamza",
        description:
          "Leads AI and automation projects, building intelligent systems and automating business processes.",
        image: Hamza,
        head: true,
      },
      {
        id: 2,
        role: "AI & Automation Engineer",
        name: "Ahad Dahir",
        description:
          "Develops and implements AI and automation solutions to enhance business efficiency.",
        image: Ahad,
      },
      {
        id: 3,
        role: "AI & Automation Engineer",
        name: "Muhammad Hunzilah",
        description:
          "Specializes in building AI-powered applications and automating workflows for improved productivity.",
        image: Hunzilah,
      },
    ],
  },

  "ghl-automation": {
    title: "GHL AUTOMATION",
    subtitle: "GHL Automation Department",
    description:
      "Our GHL automation team specializes in automating business processes, workflows, and customer engagement using GHL tools and technologies.",
    members: [
      {
        id: 1,
        role: "GHL DEPARTMENT HEAD",
        name: "Muhammad Mubeen",
        description:
          "Leads GHL automation projects, building automated workflows and customer engagement solutions using GHL tools.",
        image: Mubeen,
        head: true,
      },
      {
        id: 2,
        role: "GHL Automation Specialist",
        name: "Muhammad Anas",
        description:
          "Leads GHL automation projects, building automated workflows and customer engagement solutions using GHL tools.",
        image: Anas,
      },
    ],
  },

  "client-hunting": {
    title: "CLIENT HUNTING",
    subtitle: "Client Acquisition Department",
    description:
      "Our client acquisition team focuses on identifying potential clients, building relationships, and generating business opportunities for growth.",
    members: [
      {
        id: 1,
        role: "DEPARTMENT HEAD",
        name: "Zeeshan Zahid",
        description:
          "Leads client acquisition strategies, identifying potential clients and generating business opportunities for growth.",
        image: Zeeshan,
        head: true,
      },
      {
        id: 2,
        role: "Client Hunting Specialist",
        name: "Muhammad Asim",
        description:
          "Specializes in identifying potential clients, building relationships, and generating business opportunities for growth.",
        image: SaimHayat,
      },
    ],
  },
};

const MemberCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
      }}
      className="
        group relative
        h-112.5
        w-[320px] sm:w-95
        shrink-0
        overflow-hidden
        rounded-[30px] lg:rounded-[40px]
        bg-zinc-900
        shadow-2xl
      "
    >
      <div className="absolute inset-0 h-full w-full">
        <img
          src={member.image}
          alt={`${member.name} - ${member.role}`}
          className="
            h-full w-full
            object-cover
            grayscale
            transition-all duration-700
            group-hover:scale-110
            group-hover:grayscale-0
          "
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-10">
        <div className="mb-4 w-fit rounded-full border border-white/10 bg-black/10 px-4 py-1 backdrop-blur-md">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            {member.role}
          </span>
        </div>

        <h3
          className="
            text-2xl lg:text-3xl
            font-black italic
            tracking-tighter
            text-white uppercase
            leading-[0.85]
          "
        >
          {member.name}
        </h3>

        <div
          className="
            mt-4
            overflow-hidden
            max-h-0
            group-hover:max-h-32
            transition-all duration-500
          "
        >
          <p
            className="
              text-sm
              text-zinc-300
              font-light
              leading-snug
              italic
              border-l
              border-primary
              pl-3
            "
          >
            {member.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const DepartmentPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = departments[slug];

  if (!data) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-5xl font-black uppercase">
            Department Not Found
          </h1>

          <button
            onClick={() => navigate("/team")}
            className="
              mt-8
              rounded-full
              bg-primary
              px-7 py-3
              text-black
              font-bold
              uppercase
              tracking-widest
            "
          >
            Back To Team
          </button>
        </div>
      </main>
    );
  }

  const head = data.members.filter((member) => member.head);
  const team = data.members.filter((member) => !member.head);

  return (
    <main className="min-h-screen bg-main-bg text-white overflow-x-hidden">
      {/* HERO */}

      <section className="relative pt-20 pb-10 sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-16">
        <div
          className="
        max-w-7xl mx-auto
        px-4 sm:px-6 lg:px-8
        flex flex-col lg:flex-row
        justify-between
        items-center
        gap-10 sm:gap-12 lg:gap-16
      "
        >
          {/* HERO CONTENT */}
          <div
            className="
          w-full
          max-w-3xl
          text-center lg:text-left
          mt-10 sm:mt-14 lg:mt-0
        "
          >
            <span
              className="
            inline-block
            text-primary
            text-xs sm:text-sm
            font-bold
            uppercase
            tracking-[0.15em] sm:tracking-[0.2em]
          "
            >
              {data.subtitle}
            </span>

            <h1 className="text-secondary/50 mt-4 text-4xl min-[400px]:text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[0.88] wrap-break-word">
              {data.title}
            </h1>

            <p
              className="
            mt-6 sm:mt-8
            mx-auto lg:mx-0
            max-w-2xl
            text-sm
            sm:text-base
            lg:text-lg
            text-zinc-400
            italic
            leading-relaxed
          "
            >
              {data.description}
            </p>
          </div>

          {/* DEPARTMENT HEAD */}

          {head.length > 0 && (
            <div
              className="
            w-full
            lg:w-auto
            shrink-0
            flex
            items-center
            justify-center
            lg:justify-end
          "
            >
              <div className="w-full sm:w-auto">
                {head.map((member, index) => (
                  <MemberCard key={member.id} member={member} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* TEAM */}

      <section
        className="
      max-w-7xl mx-auto
      px-4 sm:px-6 lg:px-8
      pb-16 sm:pb-20 lg:pb-28
    "
      >
        {/* OTHER TEAM */}

        {team.length > 0 && (
          <div className="w-full">
            <h2
              className="
            w-full
            text-lg
            min-[400px]:text-xl
            sm:text-3xl
            lg:text-4xl
            font-bold
            uppercase
            tracking-[0.06em]
            sm:tracking-[0.09em]
            text-white
            mb-8 sm:mb-10
            border-b
            border-accent-blue
            pb-2 sm:pb-3
            leading-tight
          "
            >
              Department Team
            </h2>

            <div
              className="
            w-full
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
            lg:gap-10
            justify-items-center
            xl:justify-items-start
          "
            >
              {team.map((member, index) => (
                <MemberCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>
        )}
      </section>

      <style>{`
    .stroke-text-white {
      -webkit-text-stroke: 1px white;
    }
  `}</style>
    </main>
  );
};

export default DepartmentPage;
