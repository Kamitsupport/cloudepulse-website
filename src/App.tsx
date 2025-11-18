import { useEffect } from 'react';
import {
  Navbar,
  Hero,
  Features,
  HowItWorks,
  Pricing,
  Testimonials,
  TrialSignupForm,
  Footer,
} from './components';

function App() {
  // Add smooth scroll behavior and handle hash links
  useEffect(() => {
    // Handle initial hash on page load
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <TrialSignupForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
