import React, { useEffect } from "react";
import SEO from "../components/SEO";
import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/serviceData";
import GlowButton from "../components/GlowButton";

const ProjectDetail = () => {
  const { slug, projectSlug } = useParams();

  // Find the main service
  const service = servicesData.find((s) => s.slug === slug);

  // Check if we are viewing a project inside showcase.projects
  const isProject = projectSlug && service?.showcase?.projects;
  const project = isProject
    ? service.showcase.projects.find((p) => p.slug === projectSlug)
    : null;

  // If it's a project but not found
  if (isProject && !project) {
    return (
      <div className="min-h-screen bg-main-bg text-white flex items-center justify-center flex-col gap-4">
        <h2 className="text-4xl font-bold">Project Not Found</h2>
        <Link to={`/services/${slug}`} className="text-primary hover:underline">
          Back to {service?.title || "Service"}
        </Link>
      </div>
    );
  }

  // If main service not found
  if (!service) {
    return (
      <div className="min-h-screen bg-main-bg text-white flex items-center justify-center">
        Service Not Found
      </div>
    );
  }

  // If viewing a project inside showcase.projects
  if (isProject && project) {
    return (
      <>
        <SEO 
          title={`${project.title} - Case Study | NEFFTO`} 
          description={project.overview}
          canonical={`https://nefftosolution.com/services/${slug}/${project.slug}`}
          ogTitle={`${project.title} - Case Study | NEFFTO`}
          ogDescription={project.overview}
          ogUrl={`https://nefftosolution.com/services/${slug}/${project.slug}`}
          keywords={`case study, ${project.title}, NEFFTO portfolio, software project, digital solution`}
        />
        <section className="bg-main-bg text-white min-h-screen sm:py-20 py-10 relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-300 h-300 bg-[#042558] blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-300 h-300 bg-[#042558] blur-[140px]" />
        <div className="relative z-10">
          {/* ================= HERO SECTION ================= */}
          <div className="relative py-20">
            <div className="max-w-7xl mx-auto sm:px-6 px-4 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-primary uppercase tracking-[4px] text-sm font-bold">
                  {service.title}
                </span>
                <h1 className="md:text-5xl sm:text-3xl text-xl font-black sm:mb-6 mb-2 leading-tight">
                  {project.title}
                </h1>
                <p className="text-gray-300 sm:text-lg text-sm leading-relaxed mb-8">
                  {project.desc}
                </p>
                <GlowButton
                  to={"/contact"}
                  name={"Get This Service"}
                  className="bg-surface text-white border-2 border-surface"
                  hover="hover:text-surface"
                  layerHover="bg-white"
                />
              </div>
              <div className="relative">
                <img
                  src={project.image}
                  className="rounded-3xl shadow-2xl border border-white/10 w-full"
                  alt={project.title}
                />
              </div>
            </div>
          </div>

          {/* ================= OVERVIEW ================= */}
          {project.overview && (
            <div className="max-w-7xl mx-auto sm:px-6 px-4 py-10 border-t border-white/10">
              <h2 className="sm:text-3xl text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.overview}
              </p>
            </div>
          )}

          {/* ================= FEATURES ================= */}
          {project.features && project.features.length > 0 && (
            <div className="max-w-7xl mx-auto sm:px-6 px-4 py-16 border-t border-white/10">
              <h2 className="sm:text-3xl text-2xl font-bold mb-10">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="p-6 glass border border-white/10 hover:border-surface transition group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-primary text-xl">✓</span>
                      <span className="text-gray-200 font-medium">
                        {feature}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= TECHNOLOGIES ================= */}
          {project.tech && project.tech.length > 0 && (
            <div className="max-w-7xl mx-auto sm:px-6 px-4 py-16 border-t border-white/10">
              <h2 className="sm:text-3xl text-2xl font-bold mb-10">
                Technology Stack
              </h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-8 py-4 text-lg glass text-white border border-white/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* ================= RESULTS ================= */}
          {project.results && project.results.length > 0 && (
            <div className="max-w-7xl mx-auto sm:px-6 px-4 py-16 border-t border-white/10">
              <h2 className="sm:text-3xl text-2xl font-bold mb-10">
                Expected Results
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {project.results.map((result, i) => (
                  <div
                    key={i}
                    className="p-6 glass border border-white/30 text-center"
                  >
                    <div className="text-primary text-3xl mb-2">✓</div>
                    <p className="text-gray-200 font-medium">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= OTHER PROJECTS FROM SAME SERVICE ================= */}
          {service.showcase?.projects &&
            service.showcase.projects.length > 1 && (
              <div className="max-w-7xl mx-auto sm:px-6 px-4 py-20 border-t border-white/10">
                <h2 className="sm:text-3xl text-2xl font-bold mb-4 text-center">
                  Other {service.title} Projects
                </h2>
                <p className="text-gray-400 text-center mb-12">
                  Explore more projects under {service.title}
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {service.showcase.projects
                    .filter((p) => p.slug !== projectSlug)
                    .slice(0, 3)
                    .map((p, index) => (
                      <Link
                        key={index}
                        to={`/services/${service.slug}/${p.slug}`}
                        className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-secondary transition-all hover:scale-105 duration-300"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={p.image}
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                            alt={p.title}
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2 text-white transition">
                            {p.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-4">
                            {p.desc.slice(0, 100)}...
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {p.tech.slice(0, 3).map((tech, i) => (
                              <span
                                key={i}
                                className="text-xs px-4 py-1 bg-white/10 border border-white/20 text-white rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            )}

          {/* ================= CTA ================= */}
          <div className="py-10 border-t border-white/10">
            <div className="max-w-4xl sm:px-6 px-4 mx-auto text-center">
              <h2 className="sm:text-4xl text-2xl font-black mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-400 mb-8">
                Let's discuss how our {project.title} service can help your
                business grow.
              </p>
              <GlowButton
                to={"/contact"}
                name={"Let's Contact"}
                className="bg-surface text-white border-2 border-surface"
                hover="hover:text-surface"
                layerHover="bg-white"
              />
            </div>
          </div>
        </div>
      </section>
      </>
    );
  }

  // ================= MAIN SERVICE VIEW =================
  // Related services (exclude current)
  const related = servicesData.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <section className="bg-main-bg text-white min-h-screen">
      {/* ================= HERO ================= */}
      <div className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
              {service.title}
            </p>
            <h2 className="text-5xl font-black mb-6 leading-tight">
              {service.heroTitle || service.title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {service.heroDesc || service.desc}
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-cyan-400 text-black font-bold uppercase tracking-wider hover:bg-cyan-300 transition"
            >
              Get Started
            </Link>
          </div>
          <div className="relative">
            <img
              src={service.heroImage}
              className="rounded-3xl shadow-2xl border border-white/10 w-full"
              alt={service.title}
            />
          </div>
        </div>
      </div>

      {/* ================= SECTION INTRO ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="sm:text-3xl text-2xl font-bold mb-4">
          {service.sectionTitle}
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          {service.sectionDesc}
        </p>
      </div>

      {/* ================= CAPABILITIES ================= */}
      {service.capabilities && (
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="sm:text-3xl text-2xl font-bold mb-10">
            Our{" "}
            <span className="text-cyan-400">
              {service.capabilitiesHighlight}
            </span>{" "}
            {service.capabilitiesTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.capabilities.map((cap, i) => (
              <div
                key={i}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-400 transition text-center"
              >
                {cap.icon &&
                  React.createElement(cap.icon, {
                    className: "w-12 h-12 text-cyan-400 mx-auto mb-4",
                  })}
                <h3 className="text-xl font-bold mb-2">{cap.title}</h3>
                <p className="text-gray-400 text-sm">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= TABS SECTION ================= */}
      {service.tabs && (
        <div className="max-w-6xl mx-auto px-6 py-16 border-t border-white/10">
          <h2 className="text-3xl font-bold mb-10">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.tabs.map((tab, i) => (
              <div
                key={i}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-400 transition"
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-3">
                  {tab.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{tab.content.desc}</p>
                <ul className="space-y-2">
                  {tab.content.points.slice(0, 3).map((point, j) => (
                    <li
                      key={j}
                      className="text-gray-300 text-sm flex items-center gap-2"
                    >
                      <span className="text-cyan-400">✓</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= PROJECTS SECTION (showcase.projects) ================= */}
      {service.showcase?.projects && service.showcase.projects.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 py-20 bg-black/30">
          <h2 className="text-4xl font-black mb-4 text-center">
            Our <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Explore detailed projects under {service.title}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.showcase.projects.map((projectItem, index) => (
              <Link
                key={index}
                to={`/services/${service.slug}/${projectItem.slug}`}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400 transition-all hover:scale-105 duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={projectItem.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    alt={projectItem.title}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
                  <p className="absolute bottom-3 left-4 text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                    Project
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition">
                    {projectItem.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {projectItem.desc.slice(0, 100)}...
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projectItem.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ================= PROCESS ================= */}
      {service.processFeatures && (
        <div className="max-w-6xl mx-auto px-6 py-16 border-t border-white/10">
          <h2 className="text-3xl font-bold mb-4">{service.processSubTitle}</h2>
          <p className="text-gray-400 mb-10">{service.processDesc}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processFeatures.map((feature, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="w-10 h-10 flex items-center justify-center bg-cyan-400 text-black font-bold rounded-full">
                  {i + 1}
                </span>
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= FAQS ================= */}
      {service.faqs && service.faqs.length > 0 && (
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl"
              >
                <h3 className="text-lg font-bold text-cyan-400 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= TESTIMONIALS ================= */}
      {service.testimonials && service.testimonials.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-10 text-center">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {service.testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl"
              >
                <p className="text-gray-300 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.src}
                    className="w-12 h-12 rounded-full object-cover"
                    alt={testimonial.name}
                  />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= BLOG SECTION ================= */}
      {service.blogPosts && service.blogPosts.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 py-16 border-t border-white/10">
          <h2 className="text-3xl font-bold mb-4 text-center">
            {service.blogTitle}
          </h2>
          <p className="text-gray-400 text-center mb-10">
            {service.blogDescription}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {service.blogPosts.map((post, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                <img
                  src={post.imageUrl}
                  className="h-48 w-full object-cover"
                  alt={post.title}
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-cyan-400">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {post.readTime} min read
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      By {post.author}
                    </span>
                    <span className="text-xs text-cyan-400">
                      {post.views} views
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= NEXT STEPS ================= */}
      {service.nextSteps && (
        <div className="max-w-6xl mx-auto px-6 py-16 border-t border-white/10">
          <h2 className="text-3xl font-bold mb-4 text-center">
            {service.nextSteps.title}
          </h2>
          <p className="text-gray-400 text-center mb-10">
            {service.nextSteps.description}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {service.nextSteps.steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-cyan-400 text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to={service.nextSteps.buttonLink}
              className="inline-block px-8 py-4 bg-cyan-400 text-black font-bold uppercase tracking-wider hover:bg-cyan-300 transition"
            >
              {service.nextSteps.buttonText}
            </Link>
          </div>
        </div>
      )}

      {/* ================= RELATED SERVICES ================= */}
      <div className="px-6 py-20 bg-black/40 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">
            Other Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((item, i) => (
              <Link
                key={i}
                to={`/services/${item.slug}`}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400 transition"
              >
                <img
                  src={item.heroImage}
                  className="h-48 w-full object-cover group-hover:scale-105 transition duration-500"
                  alt={item.title}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">
                    {item.desc.slice(0, 80)}...
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ================= CTA SECTION ================= */}
      <div
        className="relative py-24 px-6 bg-cover bg-center bg-fixed border-t border-white/10"
        style={{ backgroundImage: `url(${service.ctaBg})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h2 className="text-4xl font-black mb-4">{service.ctaTitle}</h2>
          <Link
            to={service.ctaLink}
            className="inline-block px-8 py-4 bg-cyan-400 text-black font-bold uppercase tracking-wider hover:bg-cyan-300 transition"
          >
            {service.ctaButton}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
