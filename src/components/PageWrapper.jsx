import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const PANEL_COUNT = 5;

const PageWrapper = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const isNavigatingRef = useRef(false);
  const currentPathRef = useRef(location.pathname + location.search + location.hash);

  const navigateWithTransition = useCallback(
    (url) => {
      if (isNavigatingRef.current) return;

      const currentUrl =
        window.location.pathname +
        window.location.search +
        window.location.hash;

      if (url === currentUrl) return;

      isNavigatingRef.current = true;
      setIsTransitioning(true);

      // STEP 1 TIMING: Blocks full screen cover karne me kitna time lenge (Ab 700ms)
      setTimeout(() => {
        navigate(url);
      }, 300);
    },
    [navigate]
  );

  // Global Click Interceptor
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = event.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("//") ||
        anchor.hasAttribute("download") ||
        anchor.target === "_blank" ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#")
      ) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      const url = new URL(href, window.location.origin);
      const destination = url.pathname + url.search + url.hash;

      navigateWithTransition(destination);
    };

    document.addEventListener("click", handleDocumentClick, true);
    return () => document.removeEventListener("click", handleDocumentClick, true);
  }, [navigateWithTransition]);

  // Route changed (Center Hold -> Reveal Phase)
  useEffect(() => {
    const newPath = location.pathname + location.search + location.hash;

    if (newPath === currentPathRef.current) return;
    currentPathRef.current = newPath;

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // STEP 2 TIMING: Route badalne ke baad blocks kitne ms me gayab honge (Ab 400ms)
    const revealTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 400);

    return () => clearTimeout(revealTimer);
  }, [location.pathname, location.search, location.hash]);

  // Handle Browser Back / Forward
  useEffect(() => {
    const handlePopState = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 400);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#070E1B]">
      {/* Dynamic Route Content */}
      <div className="w-full min-h-screen">{children}</div>

      {/* Transition Overlay */}
      <AnimatePresence onExitComplete={() => (isNavigatingRef.current = false)}>
        {isTransitioning && (
          <motion.div
            key="transition-overlay"
            className="fixed inset-0 z-999999 pointer-events-auto overflow-hidden bg-transparent"
          >
            {/* Vertical Multi-Panel Curtains (NO DARK FADE BACKDROP) */}
            <div className="absolute inset-0 flex z-10 pointer-events-none">
              {Array.from({ length: PANEL_COUNT }).map((_, index) => (
                <motion.div
                  key={index}
                  className="relative h-full flex-1 border-r border-white/5"
                  style={{
                    background:
                      index % 2 === 0
                        ? "linear-gradient(180deg, #0D1933 0%, #070E1B 100%)"
                        : "linear-gradient(180deg, #1C3C63 0%, #0D1933 100%)",
                  }}
                  initial={{ y: index % 2 === 0 ? "-100%" : "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: index % 2 === 0 ? "100%" : "-100%" }}
                  transition={{
                    duration: 0.5, // Blocks Slide speed (Ab 0.5 sec)
                    delay: index * 0.05, // Stagger delay (Pehle 0.12s tha, ab fast 0.05s)
                    ease: [0.85, 0, 0.15, 1],
                  }}
                />
              ))}
            </div>

            {/* Custom Loader Animation Centerpiece */}
            <motion.div
              className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.3,
                delay: 0.2, // Logo subtle delay
                ease: "easeOut",
              }}
            >
              <div className="relative flex items-center justify-center">
                {/* Background Glow */}
                <div className="absolute h-80 w-80 rounded-full bg-primary/20 blur-[120px]" />

                {/* Spinner Rings Container */}
                <div className="relative flex items-center justify-center">
                  {/* Outer Ring */}
                  <div className="h-44 w-44 animate-spin rounded-full border-[3px] border-white/10 border-t-primary border-r-primary" />

                  {/* Inner Ring */}
                  <div className="absolute h-32 w-32 animate-spin rounded-full border-2 border-white/10 border-b-white border-l-white [animation-direction:reverse] [animation-duration:2s]" />

                  {/* Logo Image */}
                  <img
                    src="/logo.png"
                    alt="Neffto Solution official company logo"
                    className="absolute h-20 w-20 animate-pulse object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PageWrapper;