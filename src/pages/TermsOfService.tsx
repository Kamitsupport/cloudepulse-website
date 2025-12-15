import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../components';

export default function TermsOfService() {
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

            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <p className="text-gray-500 mb-8">Last updated: December 15, 2025</p>

            <div className="prose prose-lg max-w-none text-gray-600">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing or using CloudePulse services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this service.
                </p>
                <p className="mt-4">
                  CloudePulse is operated by Kamitsund Maritime IT AS, a company registered in Norway.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
                <p>
                  CloudePulse is a multi-tenant MSP (Managed Service Provider) platform that provides:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Backup monitoring through email ingestion and Windows agents</li>
                  <li>File integrity monitoring (FileMon) for ransomware detection</li>
                  <li>Website and port monitoring</li>
                  <li>Customer management tools</li>
                  <li>Time tracking and productivity features</li>
                  <li>Dashboard and reporting capabilities</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
                <h3 className="text-xl font-medium text-gray-800 mb-3">3.1 Account Creation</h3>
                <p>
                  To use CloudePulse, you must create an account and provide accurate, complete information. You are responsible for maintaining the security of your account credentials.
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">3.2 Account Responsibilities</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You are responsible for all activities under your account</li>
                  <li>You must notify us immediately of any unauthorized use</li>
                  <li>You must not share your account with others</li>
                  <li>You must comply with all applicable laws when using the service</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Subscription and Payment</h2>
                <h3 className="text-xl font-medium text-gray-800 mb-3">4.1 Plans</h3>
                <p>
                  CloudePulse offers two subscription plans with different customer and backup system limits. All plans include a 30-day free trial.
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">4.2 Payment Terms</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Subscription fees are billed monthly in advance</li>
                  <li>No credit card is required for the free trial</li>
                  <li>Prices are in USD and exclude applicable taxes</li>
                  <li>You may cancel your subscription at any time</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">4.3 Refund Policy</h3>
                <p>
                  We offer a 30-day money-back guarantee on all plans. If you're not satisfied, contact us within 30 days of your first payment for a full refund.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Acceptable Use</h2>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Use the service for any unlawful purpose</li>
                  <li>Attempt to gain unauthorized access to any part of the service</li>
                  <li>Interfere with or disrupt the service or servers</li>
                  <li>Upload malicious code or harmful content</li>
                  <li>Impersonate any person or entity</li>
                  <li>Resell or redistribute the service without authorization</li>
                  <li>Use the service to send spam or unsolicited communications</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data and Privacy</h2>
                <p>
                  Your use of CloudePulse is also governed by our Privacy Policy. By using the service, you consent to our collection and use of data as described in the Privacy Policy.
                </p>
                <p className="mt-4">
                  You retain ownership of all data you upload to CloudePulse. We will not access, use, or share your data except as necessary to provide the service or as required by law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Service Level</h2>
                <h3 className="text-xl font-medium text-gray-800 mb-3">7.1 Availability</h3>
                <p>
                  We strive to maintain high availability but do not guarantee uninterrupted service. Scheduled maintenance will be announced in advance when possible.
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">7.2 Support</h3>
                <p>
                  Support is provided via email at support@kamit.no. Response times vary based on your subscription plan.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
                <p>
                  CloudePulse is a monitoring tool that provides alerts and notifications. We are not responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Data loss or corruption in your backup systems</li>
                  <li>Missed alerts due to email delivery issues</li>
                  <li>Actions taken or not taken based on our monitoring data</li>
                  <li>Any indirect, incidental, or consequential damages</li>
                </ul>
                <p className="mt-4">
                  Our total liability is limited to the amount paid for the service in the 12 months preceding the claim.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Termination</h2>
                <p>
                  We may terminate or suspend your account at any time for violation of these terms. You may terminate your account at any time by contacting support. Upon termination:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Your access to the service will be revoked</li>
                  <li>Your data will be deleted within 30 days unless legally required to retain</li>
                  <li>No refunds will be provided for partial months</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Material changes will be notified via email or through the service. Continued use after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
                <p>
                  These terms are governed by the laws of Norway. Any disputes shall be resolved in the courts of Norway.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact</h2>
                <p>
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="mt-4">
                  <strong>Kamitsund Maritime IT AS</strong><br />
                  Email: <a href="mailto:support@kamit.no" className="text-primary-600 hover:text-primary-700">support@kamit.no</a>
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
