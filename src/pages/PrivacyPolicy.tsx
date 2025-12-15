import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../components';

export default function PrivacyPolicy() {
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

            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <p className="text-gray-500 mb-8">Last updated: December 15, 2025</p>

            <div className="prose prose-lg max-w-none text-gray-600">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                <p>
                  CloudePulse ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our backup monitoring platform and related services.
                </p>
                <p className="mt-4">
                  CloudePulse is operated by Kamitsund Maritime IT AS, a company registered in Norway (support@kamit.no).
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-medium text-gray-800 mb-3">2.1 Account Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and email address</li>
                  <li>Company/Organization name</li>
                  <li>Phone number (optional)</li>
                  <li>Billing information</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">2.2 Service Data</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Backup system configurations and status reports</li>
                  <li>Email content forwarded to our backup monitoring system</li>
                  <li>File monitoring agent data (file hashes, modification times)</li>
                  <li>Website and port monitoring results</li>
                  <li>Customer management data you enter</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">2.3 Technical Data</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP addresses and browser information</li>
                  <li>Device information</li>
                  <li>Usage logs and analytics</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p>We use the collected information to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Provide and maintain our backup monitoring services</li>
                  <li>Send alerts and notifications about backup status</li>
                  <li>Process and analyze backup reports</li>
                  <li>Improve our services and develop new features</li>
                  <li>Communicate with you about your account and services</li>
                  <li>Ensure security and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Storage and Security</h2>
                <p>
                  Your data is stored securely using Google Firebase infrastructure, which provides enterprise-grade security. We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p className="mt-4">
                  Data is stored in data centers located within the European Union to comply with GDPR requirements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
                <p>
                  We retain your data for as long as your account is active or as needed to provide services. Backup reports are retained according to your subscription plan (30 or 90 days). You may request deletion of your account and associated data at any time.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Sharing</h2>
                <p>
                  We do not sell your personal data. We may share data with:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Service Providers:</strong> Third-party services that help us operate our platform (Firebase, Cloudflare, Vercel)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
                <p>Under GDPR and applicable privacy laws, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Access your personal data</li>
                  <li>Rectify inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Restrict processing of your data</li>
                  <li>Data portability</li>
                  <li>Object to processing</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
                <p>
                  For any questions about this Privacy Policy or to exercise your rights, please contact us at:
                </p>
                <p className="mt-4">
                  <strong>Kamitsund Maritime IT AS</strong><br />
                  Email: <a href="mailto:support@kamit.no" className="text-primary-600 hover:text-primary-700">support@kamit.no</a>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
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
