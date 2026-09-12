import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll to top after the page has fully rendered (useful with Suspense/Lazy)
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {children}
    </>
  );
};

export default PageWrapper;
