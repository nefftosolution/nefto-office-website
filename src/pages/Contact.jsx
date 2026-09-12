import React, { useState } from "react";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageSquare, FileText, Edit, Palette, Lightbulb, Bug, CheckCircle2, AlertCircle } from "lucide-react";
import ContactBg from "../assets/Contact-bg.webp";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    company: "",
    email: "",
    phone: "",
    projectDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(
        "https://neffto-solution-backend.vercel.app/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Your message has been sent successfully! We will get back to you shortly.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          jobTitle: "",
          company: "",
          email: "",
          phone: "",
          projectDetails: "",
        });
      } else {
        setStatus({
          type: "error",
          message: "Failed to send message. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        type: "error",
        message: "An error occurred. Please check your internet connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#030712] text-slate-100 min-h-screen">
      <SEO
        title="Contact Our Software Company in Bahawalpur | Neffto Solution"
        description="Contact Neffto Solution in Bahawalpur about web, AI or SEO work. Tell us what you need and receive a costed proposal back within one working day."
        canonical="https://nefftosolution.com/contact"
        ogTitle="Contact Our Software Company in Bahawalpur | Neffto Solution"
        ogDescription="Contact Neffto Solution in Bahawalpur about web, AI or SEO work. Tell us what you need and receive a costed proposal back within one working day."
        ogUrl="https://nefftosolution.com/contact"
        keywords="contact software company Bahawalpur, contact Neffto Solution, software house Bahawalpur, web development contact"
      
        schema={JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","name":"Neffto Solution - Custom Software Development Agency in Bahawalpur","image":"https://nefftosolution.com/logo.png","url":"https://nefftosolution.com/contact","telephone":"+92-300-0000000","priceRange":"$","address":{"@type":"PostalAddress","streetAddress":"Neffto Solution Office","addressLocality":"Bahawalpur","addressRegion":"Punjab","postalCode":"63100","addressCountry":"PK"},"openingHoursSpecification":{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"09:00","closes":"18:00"}})}
      />

      {/* HERO & FORM SECTION */}
      <section title="Neffto Solution Software Agency Background" role="img" aria-label="Neffto Solution Software Agency Background" className="relative w-full py-25 lg:py-32 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${ContactBg})` }}
      >
        {/* Dark Overlay with Blur */}
        <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-md" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* LEFT SIDE CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Contact <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500">
                Neffto Solution
              </span>
            </h1>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100">
                What Happens After You Send the Form
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Tell us about your system requirements, product vision, or technical challenges. Our engineers will respond with a structured execution plan within 24 hours.
              </p>
            </div>

            {/* CONTACT INFO CARDS */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-semibold text-slate-200">Where to Find Us</h3>
              
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300 text-cyan-400 shrink-0">
                  <Mail size={22} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Email Us</p>
                  <a href="mailto:nefftosolution@gmail.com" className="text-sm sm:text-base font-semibold text-slate-200 hover:text-cyan-400 transition truncate block">
                    nefftosolution@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300 text-cyan-400 shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Location</p>
                  <p className="text-sm sm:text-base font-semibold text-slate-200">
                    Global Remote Team / Bahawalpur, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE (FORM) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-cyan-950/20"
          >
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100 mb-6">
              Tell Us About Your Project
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { label: "First Name", name: "firstName", placeholder: "Enter your name" },
                  { label: "Last Name", name: "lastName", placeholder: "Enter your name" },
                  { label: "Job Title", name: "jobTitle", placeholder: "Product Manager" },
                  { label: "Company", name: "company", placeholder: "Company Inc." },
                  { label: "Email", name: "email", type: "email", placeholder: "john@example.com" },
                  { label: "Phone", name: "phone", type: "tel", placeholder: "+92 300 0000000" },
                ].map((field, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider font-semibold text-slate-300">
                      {field.label} <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type={field.type || "text"}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      placeholder={field.placeholder}
                      className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
                    />
                  </div>
                ))}
              </div>

              {/* TEXTAREA */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-slate-300">
                  Project Details <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  rows="4"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  required
                  placeholder="Describe your project, goals, timeline, and budget..."
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none placeholder:text-slate-600"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group cursor-pointer bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold uppercase tracking-wider py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="text-sm font-extrabold">
                  {isSubmitting ? "Submitting..." : "Send Request"}
                </span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              {/* STATUS MESSAGES */}
              {status.message && (
                <div
                  className={`mt-4 p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${
                    status.type === "success"
                      ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                      : "bg-rose-500/10 border border-rose-500/20 text-rose-400"
                  }`}
                >
                  {status.type === "success" ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                  <span>{status.message}</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* SEO CONTACT REASONS SECTION */}
      <section className="relative w-full py-20 bg-slate-950 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 tracking-tight">
              We're Here to <span className="text-cyan-400">Listen</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Welcome to <strong className="text-slate-200">Neffto Solution</strong>. We’re always eager to hear from you. Whether you want to share feedback, ask questions, or discuss a new project, we are here to support your growth.
            </p>
          </div>

          {/* Grid of Contact Reasons */}
          <div className="space-y-8">
            <h3 className="text-xl sm:text-2xl font-bold text-center text-slate-200">
              You can contact us for any of the following:
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Website Feedback", desc: "If you have any thoughts or feedback about our website design or functionality, we'd love to hear them.", icon: MessageSquare },
                { title: "Content Queries", desc: "Have a question or concern about our content? Feel free to reach out for any clarification.", icon: FileText },
                { title: "Corrections & Updates", desc: "If you come across any information that seems outdated or missing, let us know so we can fix it.", icon: Edit },
                { title: "Design Suggestions", desc: "Have ideas on how we can improve usability or layout aesthetics? We welcome your input.", icon: Palette },
                { title: "Improvement Ideas", desc: "We are always looking to evolve. Share your ideas to help us enhance our platform experience.", icon: Lightbulb },
                { title: "Technical Issues", desc: "Encountering bugs or technical difficulties? Report them to our dev team for quick resolution.", icon: Bug },
              ].map((item, i) => (
                <div key={i} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-5 text-cyan-400 group-hover:scale-110 transition-transform">
                    <item.icon size={22} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-100 mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Info Card */}
          <div className="max-w-4xl mx-auto bg-slate-900/60 p-8 sm:p-10 rounded-3xl border border-slate-800 text-center space-y-8 backdrop-blur-sm">
            <p className="text-slate-300 text-base sm:text-lg">
              We welcome all your comments and inquiries as they help us make <strong className="text-white">Neffto Solution</strong> a better platform.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 py-6 border-y border-slate-800/80">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">Email Us</span>
                <a href="mailto:nefftosolution@gmail.com" className="text-base font-bold text-slate-200 hover:text-cyan-400 transition block truncate">
                  nefftosolution@gmail.com
                </a>
              </div>
              <div className="space-y-1 sm:border-x border-slate-800/80 px-2">
                <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">Call Us</span>
                <a href="tel:03073495496" className="text-base font-bold text-slate-200 hover:text-cyan-400 transition block">
                  0307 3495496
                </a>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">Visit Us</span>
                <p className="text-base font-bold text-slate-200">Faisal Colony, Bahawalpur</p>
              </div>
            </div>

            <p className="text-xs text-slate-500 italic leading-relaxed">
              We look forward to assisting you! Thank you for being a part of our community.
              <span className="mt-2 block">
                Our contact us page is generated with the help of{" "}
                <a href="https://raptorkit.com/contact-us-page-generator/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline font-normal">
                  Contact Us Generator
                </a>.
              </span>
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
