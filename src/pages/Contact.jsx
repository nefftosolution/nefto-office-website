import React, { useState } from "react";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import {
  Mail,
  Globe,
  MapPin,
  Send,
  Zap,
  Shield,
  Binary
} from "lucide-react";
import ContactBg from "../assets/Contact-bg.webp";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    company: "",
    email: "",
    phone: "",
    projectDetails: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("https://neffto-solution-backend.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          jobTitle: "",
          company: "",
          email: "",
          phone: "",
          projectDetails: ""
        });
      } else {
        setMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("An error occurred. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <SEO title="Contact Us" description="Get in touch with Neffto Solutions today." />
      <section className={`relative w-full py-32 overflow-hidden bg-cover bg-center text-white`}
    style={{
      backgroundImage: `url(${ContactBg})`,
    }}
    >

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />

      {/* GRID OVERLAY */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle,#ffffff10_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-start">

        {/* ================= LEFT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-10"
        >
          <div className="flex items-center gap-4 text-secondary text-xs uppercase tracking-[0.4em] font-bold">
            <span className="w-12 h-px bg-secondary" />
            Contact Protocol
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight">
            Let’s Build <br />
            <span className="highlight">Something Real.</span>
          </h1>

          <p className="text-zinc-200 text-lg leading-relaxed max-w-md">
            Tell us about your system requirements, product vision, or technical
            challenges. Our engineers will respond with a structured execution plan.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-6 pt-6">

            <div className="flex items-center gap-4">
              <Mail className="text-primary" size={18} />
              <span className="text-sm text-zinc-200">nefftosolution@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Globe className="text-primary" size={18} />
              <span className="text-sm text-zinc-200">nefftosolution.com</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-primary" size={18} />
              <span className="text-sm text-zinc-200">Global Remote Team</span>
            </div>

          </div>
        </motion.div>

        {/* ================= RIGHT SIDE (FORM) ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="border border-white/10 glass rounded-3xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-10">

            <div className="grid md:grid-cols-2 gap-10">

              {[
                { label: "First Name", placeholder: "Enter your first name", name: "firstName" },
                { label: "Last Name", placeholder: "Enter your last name", name: "lastName" },
                { label: "Job Title", placeholder: "Enter your job title", name: "jobTitle" },
                { label: "Company", placeholder: "Enter your company name", name: "company" },
                { label: "Email", placeholder: "nefftosolution@gmail.com", type: "email", name: "email" },
                { label: "Phone", placeholder: "+1 (555) 000-0000", name: "phone" },
              ].map((field, i) => (
                <div key={i} className="flex flex-col gap-2 group">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white group-focus-within:text-cyan-400 transition">
                    {field.label} *
                  </label>
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    placeholder={field.placeholder}
                    className="bg-transparent border-b border-white/10 py-3 text-sm outline-none focus:border-cyan-500 transition placeholder:text-white/50"
                  />
                </div>
              ))}

            </div>

            {/* TEXTAREA */}
            <div className="flex flex-col gap-2 group">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white group-focus-within:text-cyan-400 transition">
                Project Details *
              </label>
              <textarea
                rows="4"
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                required
                placeholder="Describe your project, goals, timeline, and budget..."
                className="bg-transparent border-b border-white/10 py-3 text-sm outline-none focus:border-cyan-500 transition resize-none placeholder:text-white/50"
              />
            </div>

            {/* BUTTON */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative group cursor-pointer border border-white bg-black hover:bg-white text-white hover:text-black font-black uppercase tracking-[0.3em] py-5 transition-all duration-500 flex items-center justify-center gap-3 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 text-sm">{isSubmitting ? "Submitting..." : "Submit"}</span>
                <Send
                  size={18}
                  className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                />
              </button>
            </div>
            
            {message && (
              <div className="mt-4 text-sm font-bold text-center text-primary bg-white/10 py-3 rounded">
                {message}
              </div>
            )}

          </form>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default Contact;