import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'How It Works', href: '#how-it-works' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: 'mailto:support@cloudepulse.com' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Transparency Act', href: '/transparency' },
  ],
};


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-custom relative">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center"
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
              <span className="text-xl font-bold text-white">CloudePulse</span>
            </motion.a>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              The all-in-one platform for MSPs to monitor, manage, and report on
              IT services.
            </p>
            <p className="text-lg font-semibold text-primary-400">
              Work smarter. Sleep better.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="py-4 border-t border-gray-800">
          <div className="flex items-center justify-center gap-2 text-sm">
            <span className="text-gray-500">Missing a cookie banner? So are we!</span>
            <span className="text-gray-400">We use</span>
            <a
              href="https://plausible.io/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 font-medium transition-colors"
            >
              Plausible
            </a>
            <span className="text-gray-400">for privacy-friendly analytics — no cookies needed.</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            {currentYear} CloudePulse. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Made with care for MSPs worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
