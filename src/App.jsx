import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import PageWrapper from "./components/PageWrapper";

// Lazy-loaded Pages
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Team = lazy(() => import("./pages/Team"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const ServicePages = lazy(() => import("./pages/ServicePages"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CookiesPolicy = lazy(() => import("./pages/CookiesPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const RefundAndCancellationPolicy = lazy(() => import("./pages/RefundAndCancellationPolicy"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<Loader />}>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/services/:slug" element={<ServicePages />} />
            <Route
              path="/services/:slug/:projectSlug"
              element={<ProjectDetail />}
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookies-policy" element={<CookiesPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/refund-and-cancellation-policy" element={<RefundAndCancellationPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageWrapper>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
