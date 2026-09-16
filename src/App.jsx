import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import PageWrapper from "./components/PageWrapper";

// Lazy-loaded Pages
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Team = lazy(() => import("./pages/Team"));
const WebDevelopment = lazy(() => import("./pages/WebDevelopment"));
const AppDevelopment = lazy(() => import("./pages/AppDevelopment"));
const AIMachineLearning = lazy(() => import("./pages/AIMachineLearning"));
const GraphicDesigning = lazy(() => import("./pages/GraphicDesigning"));
const DigitalMarketing = lazy(() => import("./pages/DigitalMarketing"));
const SearchEngineOptimization = lazy(() => import("./pages/SearchEngineOptimization"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CookiesPolicy = lazy(() => import("./pages/CookiesPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const RefundAndCancellationPolicy = lazy(() => import("./pages/RefundAndCancellationPolicy"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/app-development" element={<AppDevelopment />} />
            <Route path="/services/python-ml-ai" element={<AIMachineLearning />} />
            <Route path="/services/ai-machine-learning" element={<AIMachineLearning />} />
            <Route path="/services/graphic-design" element={<GraphicDesigning />} />
            <Route path="/services/graphic-designing" element={<GraphicDesigning />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/seo" element={<SearchEngineOptimization />} />
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
