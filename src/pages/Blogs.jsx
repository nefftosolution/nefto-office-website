import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Tag,
  BookOpen,
  Filter,
  Layers,
  Send,
  CheckCircle2,
  BellRing,
  ArrowUpRight,
} from "lucide-react";
import SEO from "../components/SEO";

const categories = [
  "All",
  "Web Development",
  "AI & Machine Learning",
  "SEO",
  "App Development",
  "Graphic Design",
  "Digital Marketing",
];

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest"); // "newest", "oldest"
  const [subscribedEmail, setSubscribedEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const API_BASE =
    typeof window !== "undefined" && window.location.hostname === "localhost"
      ? "http://localhost:5000"
      : "https://neffto-solution-backend.vercel.app";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/blogs?status=published`);
        if (res.ok) {
          const data = await res.json();
          setBlogs(data.blogs || []);
        } else {
          setBlogs([]);
        }
      } catch (err) {
        console.warn("Could not fetch blogs from API:", err);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [API_BASE]);

  // Dynamic post counts per category
  const categoryCounts = useMemo(() => {
    const counts = { All: blogs.length };
    categories.slice(1).forEach((cat) => {
      counts[cat] = blogs.filter(
        (b) => (b.category || "").toLowerCase() === cat.toLowerCase()
      ).length;
    });
    return counts;
  }, [blogs]);

  // Filter & Sort blogs
  const filteredBlogs = useMemo(() => {
    let list = blogs.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All" ||
        (blog.category || "").toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        (blog.title || "").toLowerCase().includes(q) ||
        (blog.excerpt || "").toLowerCase().includes(q) ||
        (blog.category || "").toLowerCase().includes(q) ||
        (blog.tags && blog.tags.some((t) => t.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });

    if (sortBy === "newest") {
      list.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    } else if (sortBy === "oldest") {
      list.sort((a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0));
    }

    return list;
  }, [blogs, selectedCategory, searchQuery, sortBy]);

  // Featured blog highlight
  const featuredBlog = useMemo(() => {
    if (selectedCategory !== "All" || searchQuery || blogs.length === 0) return null;
    return blogs.find((b) => b.featured) || blogs[0] || null;
  }, [blogs, selectedCategory, searchQuery]);

  const regularBlogs = useMemo(() => {
    if (!featuredBlog) return filteredBlogs;
    return filteredBlogs.filter((b) => b.id !== featuredBlog.id);
  }, [filteredBlogs, featuredBlog]);

  const formatDate = (isoString) => {
    if (!isoString) return "Recent";
    try {
      return new Date(isoString).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "Recent";
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!subscribedEmail) return;
    setSubscribed(true);
    setSubscribedEmail("");
  };

  const schemaData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Neffto Solution Tech & Engineering Journal",
    description:
      "Expert articles on modern Web Development, AI, Machine Learning, Mobile Apps, Technical SEO, and UI/UX Design.",
    url: "https://nefftosolution.com/blogs",
    publisher: {
      "@type": "Organization",
      name: "Neffto Solution",
      url: "https://nefftosolution.com/",
    },
  });

  return (
    <div className="min-h-screen bg-main-bg text-text pt-28 pb-20 overflow-hidden relative selection:bg-primary/30">
      <SEO
        title="Tech & Software Development Blog | Neffto Solution"
        description="Discover industry insights, engineering guides, AI automation, and technical SEO strategies from Neffto Solution."
        keywords="software development blog, tech articles, AI machine learning, Next.js, SEO guide, Neffto Solution"
        canonical="https://nefftosolution.com/blogs"
        ogUrl="https://nefftosolution.com/blogs"
        schema={schemaData}
      />

      {/* Decorative Glow Backgrounds */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-secondary-navy/40 blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute top-96 -right-20 w-[450px] h-[450px] bg-primary/10 blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= Header Section ================= */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-secondary-navy/40 text-secondary text-xs sm:text-sm font-medium mb-4 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span>Articles, Innovations & Engineering Insights</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading mb-6"
          >
            Explore Our <span className="highlight">Tech Journal</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-white/70 leading-relaxed font-sans"
          >
            Discover tutorials, architectural case studies, and digital marketing
            insights curated by the engineering specialists at Neffto Solution.
          </motion.p>
        </div>

        {/* ================= Search & Filters Bar (If blogs exist) ================= */}
        {blogs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-12 space-y-6"
          >
            {/* Search Box & Sort */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles by title, topic, or keyword..."
                  className="w-full pl-11 pr-10 py-3 rounded-2xl bg-secondary-navy/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 backdrop-blur-md transition text-xs sm:text-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white bg-white/10 px-2 py-0.5 rounded-md transition"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <span className="text-xs text-white/50">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2.5 rounded-xl bg-secondary-navy/40 border border-white/10 text-xs text-white focus:outline-none focus:border-primary"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center justify-center gap-2 flex-wrap max-w-4xl mx-auto">
              {categories.map((cat) => {
                const active = selectedCategory.toLowerCase() === cat.toLowerCase();
                const count = categoryCounts[cat] || 0;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 border flex items-center gap-1.5 ${
                      active
                        ? "bg-primary text-white border-primary shadow-lg shadow-primary/25 scale-105"
                        : "bg-secondary-navy/40 text-white/70 border-white/10 hover:border-primary/40 hover:text-white"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        active ? "bg-white/20 text-white" : "bg-white/5 text-white/50"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* ================= Loading Skeleton ================= */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-secondary-navy/20 p-5 animate-pulse space-y-4"
              >
                <div className="h-48 bg-white/5 rounded-xl" />
                <div className="h-4 bg-white/10 rounded w-1/3" />
                <div className="h-6 bg-white/10 rounded w-4/5" />
                <div className="h-14 bg-white/5 rounded" />
              </div>
            ))}
          </div>
        )}

        {/* ================= Empty State: No Blogs in Database ================= */}
        {!loading && blogs.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center space-y-8 py-16 px-6 rounded-3xl bg-secondary-navy/25 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/15 blur-[80px] pointer-events-none" />

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-secondary-navy flex items-center justify-center mx-auto shadow-xl border border-white/20">
              <BookOpen className="w-8 h-8 text-white" />
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Stories & Insights in Progress
              </h2>
              <p className="text-white/70 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                Our technology specialists are currently crafting deep-dive tutorials,
                case studies, and software guides.
              </p>
            </div>

            {/* Newsletter Subscription Box */}
            <div className="max-w-md mx-auto pt-2">
              {subscribed ? (
                <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>You're on the list! We'll notify you when articles launch.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                  <input
                    type="email"
                    required
                    value={subscribedEmail}
                    onChange={(e) => setSubscribedEmail(e.target.value)}
                    placeholder="Enter your email to get notified..."
                    className="flex-1 px-4 py-3 rounded-xl bg-primary-navy/80 border border-white/10 text-xs text-white placeholder-white/40 focus:outline-none focus:border-primary"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-primary/25 transition cursor-pointer"
                  >
                    <span>Notify Me</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Quick Links */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-center gap-6 text-xs text-white/60">
              <Link to="/services" className="hover:text-primary transition flex items-center gap-1">
                <span>Explore Services</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-primary transition flex items-center gap-1">
                <span>Contact Team</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        )}

        {/* ================= Featured Story (When Blogs Exist) ================= */}
        {!loading && featuredBlog && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <div className="text-xs uppercase tracking-widest text-primary font-bold mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Featured Story</span>
            </div>

            <Link
              to={`/blogs/${featuredBlog.slug}`}
              className="group block relative rounded-3xl overflow-hidden border border-white/10 bg-secondary-navy/30 backdrop-blur-md hover:border-primary/50 transition-all duration-300 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center">
                <div className="lg:col-span-7 h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden relative">
                  <img
                    src={featuredBlog.coverImage}
                    alt={featuredBlog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 via-transparent to-transparent opacity-60" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-lg text-xs font-semibold bg-primary text-white backdrop-blur-md shadow-md">
                    {featuredBlog.category}
                  </span>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-4 text-xs text-white/60">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {formatDate(featuredBlog.createdAt)}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      {featuredBlog.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white group-hover:text-primary transition-colors duration-300 leading-snug">
                    {featuredBlog.title}
                  </h2>

                  <p className="text-white/70 text-sm sm:text-base line-clamp-3 leading-relaxed">
                    {featuredBlog.excerpt}
                  </p>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={featuredBlog.author?.avatar}
                        alt={featuredBlog.author?.name}
                        className="w-10 h-10 rounded-full object-cover border border-white/20"
                      />
                      <div>
                        <div className="text-xs font-semibold text-white">
                          {featuredBlog.author?.name}
                        </div>
                        <div className="text-[10px] text-white/50">
                          {featuredBlog.author?.role}
                        </div>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                      Read Full Story
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* ================= Regular Articles Grid ================= */}
        {!loading && regularBlogs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularBlogs.map((blog, idx) => (
              <motion.article
                key={blog.id || blog.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-secondary-navy/30 backdrop-blur-md overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div>
                  <Link
                    to={`/blogs/${blog.slug}`}
                    className="block relative h-52 overflow-hidden"
                  >
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 via-transparent to-transparent opacity-40" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-primary/90 text-white backdrop-blur-md">
                      {blog.category}
                    </span>
                  </Link>

                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-white/50">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-primary" />
                        {formatDate(blog.createdAt)}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-primary" />
                        {blog.readTime}
                      </span>
                    </div>

                    <Link to={`/blogs/${blog.slug}`}>
                      <h3 className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-primary transition-colors duration-200 line-clamp-2">
                        {blog.title}
                      </h3>
                    </Link>

                    <p className="text-white/60 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {blog.excerpt}
                    </p>

                    {blog.tags && blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {blog.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/60 border border-white/5"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={blog.author?.avatar}
                      alt={blog.author?.name}
                      className="w-7 h-7 rounded-full object-cover border border-white/20"
                    />
                    <span className="text-xs text-white/70 font-medium">
                      {blog.author?.name}
                    </span>
                  </div>

                  <Link
                    to={`/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* ================= Bottom Consultation Banner ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 relative rounded-3xl overflow-hidden border border-primary/30 bg-gradient-to-r from-secondary-navy/80 via-primary-navy to-secondary-navy/80 p-8 sm:p-12 text-center"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Have a Project in Mind? Let's Build It Together.
            </h2>
            <p className="text-white/70 text-sm sm:text-base">
              From web platforms and AI automation to high-converting SEO strategies,
              our team helps forward-thinking companies scale.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-sm shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105"
              >
                <span>Request a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;
