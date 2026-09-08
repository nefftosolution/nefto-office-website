import React from "react";
import { motion } from "framer-motion";
import WebDevImg from "../assets/web-dev.png";
import DigitalMarketingImg from "../assets/digital-marketing.png";
import TiktokImg from "../assets/tiktok.png";
import YoutubeImg from "../assets/youtube.png";
import VideoEditing from "../assets/video-editing.png";
import Amazon from "../assets/amazon.png";
import { Link } from "react-router-dom";

const brandsRow = [
  {
    name: "Web Development",
    url: WebDevImg,
  },
  {
    name: "Digital Marketing",
    url: DigitalMarketingImg,
  },
  {
    name: "Amazon",
    url: Amazon,
  },
  {
    name: "Tik Tok",
    url: TiktokImg,
  },
  {
    name: "Youtube",
    url: YoutubeImg,
  },
  {
    name: "Video Editing",
    url: VideoEditing,
  },
];

const PartnerSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-main-bg pt-10 font-sans sm:pt-16">
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-200 w-200 rounded-full bg-[#042558] blur-[160px]" />
        <div className="absolute bottom-[-10%] right-[-5%] h-150 w-150 rounded-full bg-[#042558] blur-[140px]" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto w-full max-w-7xl sm:px-6 px-4">
        {/* HEADER */}
        <div className="mb-10 text-center sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl font-black italic uppercase leading-[0.9] text-white md:text-4xl"
          >
            Full-Service
            <span className="text-primary"> WEB Agency</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mx-auto mt-6 max-w-2xl text-sm text-zinc-400 md:text-[16px]"
          >
            From startups we create{" "}
            <span className="font-medium text-white">custom solutions</span>{" "}
            that grow brands online.
          </motion.p>
        </div>

        {/* MARQUEE ROW 1 */}
        <div className="flex overflow-hidden gap-8">
          <div className="flex min-w-full gap-8 animate-marquee">
            {[...brandsRow, ...brandsRow].map((brand, i) => (
              <LogoCard key={i} brand={brand} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 border-b border-white/10 pb-20 text-center sm:mt-24">
          <Link to="/services">
            <button className="group relative cursor-pointer overflow-hidden border border-white bg-white px-4 py-2 text-[12px] font-medium uppercase tracking-widest text-black hover:text-white transition sm:px-10 sm:py-5 sm:text-sm sm:font-bold">
              <span className="relative z-10 tracking-tight">
                Explore Our Services
              </span>

              <div className="absolute inset-0 translate-y-full bg-surface transition-transform duration-300 group-hover:translate-y-0" />
            </button>
          </Link>
        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-120%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee {
          animation: marquee 12s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

/* FIXED MODERN GLASS LOGO CARD */
const LogoCard = ({ brand }) => (
  <div className="items-center gap-3 group">
    {/* GLASS CARD */}
    <div className="relative flex h-28 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-500 hover:border-primary hover:bg-white/10 sm:w-60 w-30">
      {/* shine */}
      <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

      <img
        src={brand.url}
        alt={brand.name}
        className="max-h-20 object-contain opacity-50 transition-all duration-300 group-hover:opacity-100"
      />
    </div>
  </div>
);

export default PartnerSection;
