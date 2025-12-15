import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import {
  Navbar,
  Hero,
  Features,
  HowItWorks,
  Pricing,
  TrialSignupForm,
  Footer,
} from './components';
import { PrivacyPolicy, TermsOfService, CookiePolicy, GDPR } from './pages';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <TrialSignupForm />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const location = useLocation();

  // Scroll to top on route change and handle hash links
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/cookies" element={<CookiePolicy />} />
      <Route path="/gdpr" element={<GDPR />} />
    </Routes>
  );
}

export default App;
