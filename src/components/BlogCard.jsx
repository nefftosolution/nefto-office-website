import React from "react";
import { MoveRight, Star } from "lucide-react";

const BlogCard = ({
  title,
  description,
  posts = [],
  className = "",
  onPostClick,
}) => {
  const words = title.split(" ");
  return (
    <div
      className={`relative container mx-auto sm:py-20 py-10 sm:px-6 px-4 overflow-hidden ${className}`}
    >
      {/* ===== HEADER ===== */}
      <div className="relative z-10 mb-10 md:mb-20 text-center space-y-5">
        <h2 className="text-xl sm:text-4xl italic font-black uppercase tracking-tighter text-white leading-[0.9]">
          {words.map((word, index) => (
            <React.Fragment key={index}>
              {index > 0 && ' '}
              <span className={index % 2 === 0 ? '' : 'text-primary'}>{word}</span>
            </React.Fragment>
          ))}
        </h2>

        <p className="mx-auto max-w-2xl text-zinc-300 text-sm sm:text-base font-medium leading-relaxed">
          {description}
        </p>
      </div>

      {/* ===== GRID ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {posts.map((post, index) => {
          const isPrimary = index === 0;

          return (
            <div
              key={post.id || index}
              onClick={() => onPostClick?.(post)}
              className={`group relative flex flex-col justify-end overflow-hidden cursor-pointer rounded-2xl border border-white/10 bg-zinc-950 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_80px_150px_-40px_rgba(0,0,0,0.6)] ${
                isPrimary ? "lg:col-span-2 lg:row-span-2 min-h-110" : "min-h-70"
              } ${post.className || ""}`}
            >
              {/* 1. BACKGROUND IMAGE: Slow Zoom & Saturation Pop */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-1500 ease-out group-hover:scale-110 saturate-[0.6] group-hover:saturate-100"
                style={{ backgroundImage: `url(${post.imageUrl})` }}
              />

              {/* 2. ATMOSPHERIC OVERLAY: Depth-based gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

              {/* 3. LIGHTING EFFECT: Secondary color spotlight on hover */}
              <div className="absolute inset-0 bg-radial-gradient(circle_at_bottom_left,var(--color-primary)_0%,transparent_70%) opacity-0 group-hover:opacity-20 transition-opacity duration-700" />

              {/* 4. CONTENT WRAPPER */}
              <article className="relative z-10 p-8 sm:p-4 flex flex-col justify-end gap-2 h-full">
                {/* INDEX & CATEGORY: Top Alignment logic */}
                <div className="flex items-center gap-3 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-white border border-white/20 bg-white/5 backdrop-blur-xl rounded-full">
                    {post.category}
                  </span>
                  {/* RATING: Staggered Fade-in */}
                  <div className="flex items-center gap-1.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={`${
                          i < (post.rating || 5)
                            ? "fill-primary text-primary"
                            : "fill-white/10 text-white/10"
                        } transition-all duration-300 hover:scale-125`}
                      />
                    ))}
                    <span className="ml-2 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                      {post.views} Views
                    </span>
                  </div>
                </div>

                {/* TITLE: Bold Brutalist Type */}
                <h3
                  className={`font-bold text-white uppercase tracking-tighter leading-[0.9] transition-all duration-500 ${
                    isPrimary ? "text-xl sm:text-2xl md:text-4xl" : "text-xl"
                  }`}
                >
                  {post.title}
                </h3>

                {/* CTA: Editorial Style */}
                <div className="pt-2 border-t border-white/10 overflow-hidden">
                  <div className="relative flex items-center gap-2 group/btn">
                    <span className="text-white text-[10px] uppercase tracking-[0.3em]">
                      Read Case Study
                    </span>
                    <div className="w-0 h-px bg-primary transition-all duration-500 group-hover:w-12" />
                    <MoveRight
                      size={18}
                      className="text-white -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                </div>
              </article>

              {/* 5. REFRACTIVE BORDER: Human-design micro-detail */}
              <div className="absolute inset-0 rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]" />

              {/* 6. TOP GLOW: Reflected light at the top edge */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogCard;
