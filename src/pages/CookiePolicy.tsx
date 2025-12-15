import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../components';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
            <p className="text-gray-500 mb-8">Last updated: December 15, 2025</p>

            <div className="prose prose-lg max-w-none text-gray-600">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies</h2>
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Cookies</h2>
                <p>CloudePulse uses cookies for the following purposes:</p>

                <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">2.1 Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas. The website cannot function properly without these cookies.
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Authentication:</strong> To keep you signed in to your account</li>
                  <li><strong>Security:</strong> To protect against fraud and unauthorized access</li>
                  <li><strong>Session Management:</strong> To maintain your session state</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">2.2 Functional Cookies</h3>
                <p>
                  These cookies enable the website to provide enhanced functionality and personalization:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Preferences:</strong> To remember your settings and preferences</li>
                  <li><strong>Language:</strong> To remember your language preferences</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">2.3 Analytics Cookies</h3>
                <p>
                  We use analytics cookies to understand how visitors interact with our website:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Google Analytics:</strong> To collect anonymous usage statistics</li>
                  <li><strong>Firebase Analytics:</strong> To understand app usage patterns</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cookies We Use</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-200 mt-4">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 px-4 py-2 text-left">Cookie Name</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Purpose</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">firebase-auth</td>
                        <td className="border border-gray-200 px-4 py-2">User authentication</td>
                        <td className="border border-gray-200 px-4 py-2">Session</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">_ga</td>
                        <td className="border border-gray-200 px-4 py-2">Google Analytics tracking</td>
                        <td className="border border-gray-200 px-4 py-2">2 years</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">_gid</td>
                        <td className="border border-gray-200 px-4 py-2">Google Analytics session</td>
                        <td className="border border-gray-200 px-4 py-2">24 hours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Cookies</h2>
                <p>
                  Some cookies are placed by third-party services that appear on our pages:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Google:</strong> Analytics and Firebase services</li>
                  <li><strong>Cloudflare:</strong> Security and performance optimization</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Managing Cookies</h2>
                <p>
                  You can control and manage cookies in several ways:
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">5.1 Browser Settings</h3>
                <p>
                  Most browsers allow you to refuse or accept cookies through the settings menu. Please note that disabling essential cookies may affect the functionality of the website.
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">5.2 Opt-Out Links</h3>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">https://tools.google.com/dlpage/gaoptout</a>
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
                <p>
                  If you have questions about our use of cookies, please contact us at:
                </p>
                <p className="mt-4">
                  <strong>CloudePulse AS</strong><br />
                  Email: <a href="mailto:support@cloudepulse.com" className="text-primary-600 hover:text-primary-700">support@cloudepulse.com</a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
