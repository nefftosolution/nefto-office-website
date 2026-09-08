import React from "react";
import { Link } from "react-router-dom";

const GlowButton = ({ name, to, href, className = "", onClick, hover, layerHover }) => {
  const baseClasses = `
    group relative inline-flex items-center justify-center 
    px-4 py-3 text-[13px] font-bold uppercase tracking-[0.08em] 
    overflow-hidden transition-transform duration-300 border border-white
    ${className} ${hover}
  `;

  const content = (
    <>
      {/* OUTER GLOW LAYERS (2 COLORS) */}
      <div className={`absolute -inset-1 opacity-30 blur-md pointer-events-none z-0 ${layerHover}`} />
      <div className={`absolute -inset-1 opacity-20 blur-lg pointer-events-none z-0 ${layerHover}`} />

      {/* INNER BASE */}
      <div className={`absolute inset-0 ${className} z-10 overflow-hidden`}>

        {/* 🔥 DIAGONAL MOVING LAYER (BOTTOM LEFT → TOP RIGHT) */}
        <div className={`
          absolute -bottom-1/2 left-[-180%] w-[200%] h-[400%]
          ${layerHover}
          translate-y-[40%] translate-x-[-20%]
          group-hover:translate-y-[40%] group-hover:translate-x-[60%]
          transition-transform duration-700 ease-out
        `} />

        {/* ✨ SHINE WAVE (LEFT → RIGHT ON HOVER) */}
        <div
          className="
            absolute top-0 left-[-120%] h-full w-1/2
            bg-linear-to-r from-transparent via-white/15 to-transparent
            skew-x-[-20deg]
            group-hover:animate-shine
          "
        />
      </div>

      {/* TEXT */}
      <span className="relative z-30 flex items-center gap-2">
        {name}
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </span>

      {/* ANIMATION */}
      <style>{`
        @keyframes shine {
          0% { left: -120%; }
          100% { left: 120%; }
        }

        .group:hover .group-hover\\:animate-shine {
          animation: shine 0.9s ease-out;
        }
      `}</style>
    </>
  );

  if (to) {
    return <Link to={to} className={baseClasses} onClick={onClick}>{content}</Link>;
  }

  return (
    <a href={href} className={baseClasses} onClick={onClick} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
};

export default GlowButton;
