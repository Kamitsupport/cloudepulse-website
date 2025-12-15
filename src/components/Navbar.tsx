import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);

    // If not on home page, navigate to home with hash
    if (location.pathname !== '/') {
      navigate('/' + href);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-lg shadow-gray-200/50'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/">
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30"
                  animate={{
                    boxShadow: [
                      '0 10px 15px -3px rgba(14, 165, 233, 0.3)',
                      '0 10px 25px -3px rgba(14, 165, 233, 0.5)',
                      '0 10px 15px -3px rgba(14, 165, 233, 0.3)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Activity className="w-6 h-6 text-white" />
                </motion.div>
                <span className="text-xl font-bold gradient-text hidden sm:block">
                  CloudePulse
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled
                      ? 'text-gray-600 hover:text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link
                  to="/about"
                  className={`text-sm font-medium transition-colors ${
                    isScrolled
                      ? 'text-gray-600 hover:text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  About Us
                </Link>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <motion.a
                href="https://app.cloudepulse.com"
                className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Sign In
              </motion.a>
              <motion.button
                onClick={() => scrollToSection('#trial')}
                className="px-5 py-2.5 bg-gradient-to-r from-primary-500 to-primary-700 text-white text-sm font-semibold rounded-xl shadow-lg shadow-primary-500/30 btn-hover-effect"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(14, 165, 233, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                Start Free Trial
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-white shadow-xl md:hidden"
          >
            <div className="container-custom py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left py-3 text-gray-600 hover:text-primary-600 font-medium border-b border-gray-100"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left py-3 text-gray-600 hover:text-primary-600 font-medium border-b border-gray-100"
                >
                  About Us
                </Link>
              </motion.div>
              <div className="pt-4 space-y-3">
                <a
                  href="https://app.cloudepulse.com"
                  className="block w-full py-3 text-center text-gray-600 hover:text-primary-600 font-medium"
                >
                  Sign In
                </a>
                <button
                  onClick={() => scrollToSection('#trial')}
                  className="w-full py-3 bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold rounded-xl shadow-lg"
                >
                  Start Free Trial
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
