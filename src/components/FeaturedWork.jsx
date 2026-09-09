import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GlowButton from "./GlowButton";
import { Link } from "react-router-dom";
import { servicesData } from "../data/serviceData";

const FeaturedWork = () => {
  // First project from each service
  const featuredProjects = servicesData
    .filter((service) => service.showcase?.projects?.length > 0)
    .map((service) => ({
      slug: service.slug,
      projectSlug: service.showcase.projects[0].slug,
      title: service.showcase.projects[0].title,
      desc: service.showcase.projects[0].desc,
      desktopImg: service.showcase.projects[0].image,
      altText: service.showcase.projects[0].altText,
      serviceTitle: service.title,
    }));

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Keep current index valid if data changes
  useEffect(() => {
    if (current >= featuredProjects.length) {
      setCurrent(0);
    }
  }, [current, featuredProjects.length]);

  // Auto slider
  useEffect(() => {
    if (isPaused || featuredProjects.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev >= featuredProjects.length - 1 ? 0 : prev + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, featuredProjects.length]);

  const next = () => {
    setCurrent((prev) =>
      prev >= featuredProjects.length - 1 ? 0 : prev + 1,
    );
  };

  const prev = () => {
    setCurrent((prev) =>
      prev <= 0 ? featuredProjects.length - 1 : prev - 1,
    );
  };

  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <section className="relative w-full overflow-hidden bg-surface py-10 font-sans sm:py-16">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-fixed opacity-40 grayscale"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070')",
          filter: "blur(8px)",
          transform: "scale(1.05)",
        }}
      />

      <div className="absolute inset-0 z-0 bg-black/80" />

      {/* MAIN CONTAINER
          Same alignment as header:
          max-w-7xl mx-auto sm:px-6 px-4
      */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">

        {/* HEADER */}
        <div className="mb-14 flex w-full flex-col items-center justify-between gap-5 sm:mb-20">
          <h2 className="text-center text-3xl font-black uppercase italic tracking-tighter text-white sm:text-5xl">
            Featured Work
          </h2>

          <p className="w-full max-w-md text-center text-sm font-medium leading-relaxed text-white">
            We are dedicated to delivering innovative, responsive, and
            high-performance digital solutions. By merging visually compelling
            design with feature-rich functionality, we craft strategic web
            experiences and marketing campaigns that accelerate business growth.
          </p>
        </div>

        {/* SLIDER AREA */}
        <div
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* ARROWS */}
          {featuredProjects.length > 1 && (
            <div className="absolute right-0 -top-16 z-30 flex gap-1 sm:-top-18">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous project"
                className="flex h-11 w-11 cursor-pointer items-center justify-center border border-white/20 bg-black/40 text-white transition-all duration-300 hover:bg-primary sm:h-14 sm:w-14"
              >
                <ChevronLeft size={24} className="sm:h-7.5 sm:w-7.5" />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next project"
                className="flex h-11 w-11 cursor-pointer items-center justify-center border border-white/20 bg-black/40 text-white transition-all duration-300 hover:bg-primary sm:h-14 sm:w-14"
              >
                <ChevronRight size={24} className="sm:h-7.5 sm:w-7.5" />
              </button>
            </div>
          )}

          {/* SLIDER VIEWPORT */}
          <div className="relative w-full overflow-hidden pb-12 sm:pb-16">
            {/* SLIDER TRACK */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translate3d(-${current * 100}%, 0, 0)`,
              }}
            >
              {featuredProjects.map((project) => (
                <div
                  key={`${project.slug}-${project.projectSlug}`}
                  className="w-full shrink-0"
                >
                  {/* PROJECT GRID */}
                  <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">

                    {/* LEFT CONTENT */}
                    <div className="flex w-full flex-col items-start gap-4 lg:col-span-4">
                      {/* Service Tag */}
                      <span className="text-sm font-bold uppercase tracking-wider text-secondary">
                        {project.serviceTitle}
                      </span>

                      {/* Title */}
                      <h3 className="text-xl font-semibold uppercase leading-tight tracking-wider text-white sm:text-3xl">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="max-w-lg text-sm leading-relaxed text-gray-300">
                        {project.desc}
                      </p>

                      {/* Buttons */}
                      <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto">
                        <GlowButton
                          to={`/services/${project.slug}/${project.projectSlug}`}
                          name="View Project"
                          className="w-full bg-white text-surface border-2 border-surface sm:w-auto"
                          hover="hover:text-white"
                          layerHover="bg-surface"
                        />

                        <Link
                          to={`/services/${project.slug}`}
                          className="w-full sm:w-auto"
                        >
                          <button
                            type="button"
                            className="w-full cursor-pointer border border-white px-4 py-3 text-[13px] font-bold uppercase tracking-widest text-white transition duration-300 ease-in-out hover:bg-white hover:text-black"
                          >
                            {project.serviceTitle}
                          </button>
                        </Link>
                      </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex w-full items-center justify-center lg:col-span-8">
                      <div className="relative w-full max-w-4xl overflow-hidden border-8 border-main-bg bg-black shadow-2xl sm:border-10 md:border-12">
                        <div className="aspect-video w-full">
                          <img
                            src={project.desktopImg}
                            alt={project.altText || project.title}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>

                      {/* MONITOR STAND */}
                      <div className="absolute -bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center sm:-bottom-30 md:-bottom-34">
                        <div
                          className="relative h-10 w-20 border-x border-black/10 shadow-lg sm:h-24 sm:w-36 md:h-32 md:w-44"
                          style={{
                            background:
                              "linear-gradient(to right, #9ca3af 0%, #f3f4f6 50%, #9ca3af 100%)",
                          }}
                        >
                          <div className="absolute left-1/2 top-0 h-3 w-8 -translate-x-1/2 rounded-b-full bg-surface shadow-inner sm:h-6 sm:w-12 md:h-7 md:w-14" />
                        </div>

                        <div className="mt-0 h-3 w-32 rounded-[100%] bg-black/40 blur-xl sm:w-52" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DOTS */}
        {featuredProjects.length > 1 && (
          <div className="relative z-10 mt-4 flex items-center justify-center gap-3 sm:mt-6">
            {featuredProjects.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`h-2 cursor-pointer rounded-full transition-all duration-500 ${
                  current === i
                    ? "w-6 bg-primary"
                    : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedWork;
