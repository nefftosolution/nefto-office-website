import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full sm:py-16 py-10 bg-main-bg relative overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-150 h-150 bg-[#042558] blur-[140px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 z-10 relative">
        {/* ===== Heading ===== */}
        <div className="text-center sm:mb-14 mb-8">
          <h2 className="mt-5 text-2xl md:text-4xl font-black text-white">
            Frequently <span className="text-primary">Asked Questions</span>
          </h2>

          <p className="mt-4 text-white/60 max-w-xl mx-auto text-xs sm:text-sm md:text-base">
            Everything you need to know about our services and process.
          </p>
        </div>

        {/* ===== FAQ List ===== */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index} className="border-b border-white/10">
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
                >
                  <span className="text-white text-sm md:text-xl font-medium">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-white/70" size={20} />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pb-5 text-white/60 text-xs sm:text-sm leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
