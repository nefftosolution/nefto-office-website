import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Check,
  Bookmark,
  Sparkles,
  User,
  ArrowRight,
  FolderOpen,
  ArrowUpRight,
} from "lucide-react";
import SEO from "../components/SEO";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const API_BASE =
    typeof window !== "undefined" && window.location.hostname === "localhost"
      ? "http://localhost:5000"
      : "https://neffto-solution-backend.vercel.app";

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchBlog = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/api/blogs/${slug}`);
        if (res.ok) {
          const data = await res.json();
          setBlog(data);
        } else {
          setBlog(null);
        }
      } catch (err) {
        console.warn("Could not fetch blog detail:", err);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug, API_BASE]);

  // Fetch related blogs from the same category or latest
  useEffect(() => {
    const fetchRelated = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/blogs?status=published&limit=4`);
        if (res.ok) {
          const data = await res.json();
          const list = (data.blogs || []).filter((b) => b.slug !== slug && b.id !== slug);
          setRelatedBlogs(list.slice(0, 3));
        }
      } catch {
        setRelatedBlogs([]);
      }
    };

    fetchRelated();
  }, [slug, API_BASE]);

  const handleCopyLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const formatDate = (isoString) => {
    if (!isoString) return "Recent";
    try {
      return new Date(isoString).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "Recent";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-main-bg pt-36 pb-20 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-white/60 text-sm">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-main-bg pt-36 pb-20 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-6 bg-secondary-navy/30 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-primary">
            <FolderOpen className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white font-heading">
              Article Not Found
            </h2>
            <p className="text-xs text-white/60 leading-relaxed">
              The article you are trying to access doesn't exist or has been modified.
            </p>
          </div>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition shadow-lg shadow-primary/20"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Articles
          </Link>
        </div>
      </div>
    );
  }

  const currentUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://nefftosolution.com/blogs/${blog.slug}`;

  const schemaData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    image: blog.coverImage,
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt || blog.createdAt,
    author: {
      "@type": "Person",
      name: blog.author?.name || "Neffto Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Neffto Solution",
      url: "https://nefftosolution.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://nefftosolution.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": currentUrl,
    },
  });

  return (
    <div className="min-h-screen bg-main-bg text-text pt-28 pb-20 overflow-hidden relative">
      {/* Dynamic Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary origin-left z-[9999]"
        style={{ scaleX }}
      />

      <SEO
        title={blog.seo?.metaTitle || `${blog.title} | Neffto Solution`}
        description={blog.seo?.metaDescription || blog.excerpt}
        keywords={blog.seo?.keywords || blog.tags?.join(", ")}
        canonical={`https://nefftosolution.com/blogs/${blog.slug}`}
        ogTitle={blog.title}
        ogDescription={blog.excerpt}
        ogUrl={currentUrl}
        schema={schemaData}
      />

      {/* Decorative Glow Backgrounds */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-secondary-navy/40 blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute top-[600px] right-0 w-[400px] h-[400px] bg-primary/10 blur-[140px] -z-10 pointer-events-none" />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= Breadcrumbs ================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-xs text-white/50 mb-8 flex-wrap"
        >
          <Link to="/" className="hover:text-primary transition">
            Home
          </Link>
          <span>/</span>
          <Link to="/blogs" className="hover:text-primary transition">
            Blogs
          </Link>
          <span>/</span>
          <span className="text-white/80 line-clamp-1 max-w-[280px] sm:max-w-md">
            {blog.title}
          </span>
        </motion.div>

        {/* ================= Article Header ================= */}
        <header className="space-y-6 mb-10">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-lg text-xs font-semibold bg-primary text-white shadow-md">
              {blog.category}
            </span>
            <span className="text-xs text-white/50 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-primary" />
              {blog.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight">
            {blog.title}
          </h1>

          <p className="text-base sm:text-xl text-white/70 leading-relaxed font-sans">
            {blog.excerpt}
          </p>

          {/* Author Details & Date */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3.5">
              <img
                src={blog.author?.avatar}
                alt={blog.author?.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/40 shadow-md"
              />
              <div>
                <div className="text-sm font-bold text-white">
                  {blog.author?.name}
                </div>
                <div className="text-xs text-white/50 flex items-center gap-2">
                  <span>{blog.author?.role}</span>
                  <span>•</span>
                  <span>{formatDate(blog.createdAt)}</span>
                </div>
              </div>
            </div>

            {/* Social Sharing */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 bg-secondary-navy/40 hover:border-primary/50 text-xs text-white/80 hover:text-white transition cursor-pointer"
                title="Copy article link"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-primary" />
                    <span>Share</span>
                  </>
                )}
              </button>

              <a
                href={`https://x.com/intent/tweet?text=${encodeURIComponent(
                  blog.title
                )}&url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-white/10 bg-secondary-navy/40 hover:border-primary/50 text-white/70 hover:text-white transition"
                aria-label="Share on X"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  currentUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-white/10 bg-secondary-navy/40 hover:border-primary/50 text-white/70 hover:text-white transition"
                aria-label="Share on LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  currentUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-white/10 bg-secondary-navy/40 hover:border-primary/50 text-white/70 hover:text-white transition"
                aria-label="Share on Facebook"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </header>

        {/* ================= Featured Cover Image ================= */}
        {blog.coverImage && (
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-12">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full max-h-[500px] object-cover"
            />
          </div>
        )}

        {/* ================= Main Article Body ================= */}
        <div
          className="blog-content prose prose-invert max-w-none space-y-6 text-white/85 leading-relaxed font-sans text-base sm:text-lg
            [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:font-bold [&>h2]:font-heading [&>h2]:text-white [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:border-b [&>h2]:border-white/10 [&>h2]:pb-2
            [&>h3]:text-xl [&>h3]:sm:text-2xl [&>h3]:font-bold [&>h3]:font-heading [&>h3]:text-white [&>h3]:mt-8 [&>h3]:mb-3
            [&>p]:text-white/85 [&>p]:leading-relaxed [&>p]:my-4
            [&_a]:text-secondary [&_a]:underline [&_a]:decoration-secondary/50 [&_a]:underline-offset-4 hover:[&_a]:text-white [&_a]:transition-colors [&_a]:font-medium
            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:my-4
            [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>ol]:my-4
            [&>li]:text-white/85
            [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-secondary [&>blockquote]:bg-secondary-navy/30 [&>blockquote]:py-3 [&>blockquote]:px-4 [&>blockquote]:rounded-r-xl [&>blockquote]:my-6
            [&_code]:bg-white/10 [&_code]:text-secondary [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono
            [&_pre]:bg-secondary-navy/80 [&_pre]:p-4 [&_pre]:rounded-2xl [&_pre]:overflow-x-auto [&_pre]:border [&_pre]:border-white/10 [&_pre]:my-6
            [&_img]:rounded-2xl [&_img]:my-6 [&_img]:border [&_img]:border-white/10 [&_img]:w-full
            [&_table]:w-full [&_table]:my-6 [&_table]:border-collapse [&_table]:rounded-2xl [&_table]:overflow-hidden [&_table]:border [&_table]:border-white/10
            [&_th]:bg-white/10 [&_th]:p-3.5 [&_th]:text-left [&_th]:text-xs [&_th]:font-bold [&_th]:uppercase [&_th]:tracking-wider [&_th]:text-white [&_th]:border [&_th]:border-white/10
            [&_td]:p-3.5 [&_td]:text-sm [&_td]:border [&_td]:border-white/10 [&_td]:text-white/80
            [&_tr:nth-child(even)]:bg-white/5
            [&_.callout-box]:p-5 [&_.callout-box]:rounded-2xl [&_.callout-box]:my-6 [&_.callout-box]:border
            [&_.callout-info]:bg-blue-950/40 [&_.callout-info]:border-blue-500/30 [&_.callout-info]:text-blue-100
            [&_.callout-tip]:bg-emerald-950/40 [&_.callout-tip]:border-emerald-500/30 [&_.callout-tip]:text-emerald-100
            [&_.callout-cta]:bg-gradient-to-r [&_.callout-cta]:from-[#042558]/80 [&_.callout-cta]:to-[#020e24]/90 [&_.callout-cta]:border-[#5482b4]/40 [&_.callout-cta]:p-6 [&_.callout-cta]:rounded-3xl
            [&_.cta-btn]:inline-flex [&_.cta-btn]:items-center [&_.cta-btn]:gap-2 [&_.cta-btn]:px-5 [&_.cta-btn]:py-2.5 [&_.cta-btn]:rounded-xl [&_.cta-btn]:bg-secondary [&_.cta-btn]:text-main-bg [&_.cta-btn]:font-bold [&_.cta-btn]:no-underline hover:[&_.cta-btn]:bg-white [&_.cta-btn]:transition-all
            [&_.metrics-grid]:grid [&_.metrics-grid]:grid-cols-1 [&_.metrics-grid]:sm:grid-cols-3 [&_.metrics-grid]:gap-4 [&_.metrics-grid]:my-6
            [&_.metric-card]:p-5 [&_.metric-card]:rounded-2xl [&_.metric-card]:bg-white/5 [&_.metric-card]:border [&_.metric-card]:border-white/10 [&_.metric-card]:text-center"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* ================= Article Tags ================= */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-3">
              Related Topics
            </div>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-lg bg-secondary-navy/50 border border-white/10 text-white/80 hover:border-primary/40 transition"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ================= Author Bio Card ================= */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-secondary-navy/40 border border-white/10 backdrop-blur-md flex items-center gap-5 flex-col sm:flex-row">
          <img
            src={blog.author?.avatar}
            alt={blog.author?.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-primary"
          />
          <div className="text-center sm:text-left space-y-1">
            <div className="text-xs uppercase tracking-widest text-primary font-bold">
              Written By
            </div>
            <h3 className="text-lg font-bold text-white">{blog.author?.name}</h3>
            <p className="text-xs text-white/50">{blog.author?.role}</p>
            <p className="text-xs text-white/70 pt-1 leading-relaxed">
              Contributing engineer & digital architect at Neffto Solution,
              building scalable enterprise software and AI applications.
            </p>
          </div>
        </div>

        {/* ================= Related Articles ================= */}
        {relatedBlogs.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold font-heading text-white">
                Related Articles
              </h2>
              <Link
                to="/blogs"
                className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
              >
                View All <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((rel) => (
                <Link
                  key={rel.id || rel.slug}
                  to={`/blogs/${rel.slug}`}
                  className="group rounded-2xl border border-white/10 bg-secondary-navy/30 overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col"
                >
                  <div className="h-40 overflow-hidden relative">
                    <img
                      src={rel.coverImage}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-semibold bg-primary text-white">
                      {rel.category}
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                    <h3 className="text-sm font-bold font-heading text-white group-hover:text-primary transition-colors line-clamp-2">
                      {rel.title}
                    </h3>
                    <div className="text-[11px] text-white/50 flex items-center justify-between pt-2 border-t border-white/5">
                      <span>{rel.readTime}</span>
                      <span className="text-primary font-semibold group-hover:translate-x-0.5 transition-transform">
                        Read →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="mt-14 text-center">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 bg-secondary-navy/40 hover:border-primary/50 text-white font-semibold text-xs transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 text-primary" />
            Back to All Articles
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;
