import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Optionally you can track page views here if needed
  }, [location.pathname]);

  return (
    <>
      {children}
    </>
  );
};

export default PageWrapper;
