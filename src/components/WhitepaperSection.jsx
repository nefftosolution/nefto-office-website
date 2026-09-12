import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Mail, CheckCircle, ArrowRight } from "lucide-react";
import EmailBg from "../assets/email-bg.webp";
import EmailBookImg from "../assets/email-book.png";

const WhitepaperSection = () => {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email) {
      try {
        const response = await fetch(
          "https://neffto-solution-backend.vercel.app/api/whitepaper",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          },
        );

        if (response.ok) {
          setIsSent(true);
          setEmail("");

          setTimeout(() => {
            setIsSent(false);
          }, 5000);
        } else {
          alert("Failed to subscribe. Please try again.");
        }
      } catch (error) {
        console.error("Error subscribing:", error);
        alert("An error occurred. Please check your internet connection.");
      }
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-main-bg py-10 sm:py-16">
      {/* HUMAN DESIGN ELEMENT: The "Silk" Aura Gradient */}
      <div className="pointer-events-none absolute inset-0">
        {/* Deep Indigo Base */}
        <div title="Neffto Solution Software Agency Background" role="img" aria-label="Neffto Solution Software Agency Background" className="absolute inset-0 bg-cover bg-fixed bg-no-repeat"
          style={{
            backgroundImage: `url(${EmailBg})`,
          }}
        />

        <div className="absolute inset-0 bg-black/55" />

        {/* Bright Secondary Glow (Top Right) */}
        <div className="absolute right-[-10%] top-[-20%] h-200 w-200 rounded-full bg-primary/20 blur-[140px]" />

        {/* Soft Secondary Light Leak (Bottom Left) */}
        <div className="absolute bottom-[-10%] left-[-5%] h-150 w-150 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto w-full max-w-7xl sm:px-6 px-4">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* LEFT SIDE: Content & Form */}
          <div className="space-y-12">
            <AnimatePresence mode="wait">
              {!isSent ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  className="space-y-10"
                >
                  <div className="space-y-4">
                    <h2 className="text-xl font-black uppercase text-white sm:text-3xl">
                      STAY AHEAD IN {new Date().getFullYear().toString()}
                    </h2>

                    <p className="max-w-md text-sm font-light leading-relaxed text-zinc-300 sm:text-md">
                      Get the latest insights on{" "}
                      <span className="font-medium italic text-white underline decoration-primary underline-offset-4">
                        web development, app development, AI solutions, digital
                        marketing, Graphic Designing and SEO
                      </span>{" "}
                      to help your business grow faster.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="group relative max-w-md"
                  >
                    <div className="relative border-b border-white transition-all duration-500 focus-within:border-primary">
                      <Mail
                        className="absolute left-0 top-1/2 -translate-y-1/2 text-white transition-colors group-focus-within:text-primary"
                        size={20}
                      />

                      <input
                        type="email"
                        required
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent py-5 pl-10 pr-32 text-white outline-none placeholder:text-white placeholder:text-[10px] placeholder:uppercase placeholder:tracking-widest"
                      />

                      <button
                        type="submit"
                        className="absolute right-0 top-1/2 flex -translate-y-1/2 cursor-pointer items-center gap-2 bg-white px-6 py-2.5 text-[10px] font-black uppercase tracking-widest text-zinc-950 transition-all duration-300 hover:bg-primary hover:text-white"
                      >
                        Submit <Download size={14} />
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8 border border-white/10 bg-white/3 p-12 backdrop-blur-md"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <CheckCircle size={40} />
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tighter text-white">
                    Thank You!
                  </h3>

                  <p className="text-sm text-zinc-400">
                    We emailed you soon!
                  </p>

                  <div className="flex items-center gap-6 border-t border-white/10 pt-6">
                    <a
                      href="/contact"
                      className="group flex items-center gap-2 text-sm font-bold uppercase text-white"
                    >
                      Contact Us
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE: Interactive Mockup */}
          <motion.div
            initial={{ opacity: 0, rotateY: -20, scale: 0.9 }}
            whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative perspective-1000"
          >
            {/* The Whitepaper Mockup Image */}
            <div className="relative z-10 drop-shadow-[0_50px_50px_rgba(0,0,0,0.5)]">
              <img
                src={EmailBookImg}
                alt="Cover of the free 2026 digital trends whitepaper from Neffto Solution"
                className="h-auto w-full rounded-lg"
              />
            </div>

            {/* Background Glow behind the mockup */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-primary/20 blur-[100px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhitepaperSection;
