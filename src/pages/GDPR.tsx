import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../components';

export default function GDPR() {
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

            <h1 className="text-4xl font-bold text-gray-900 mb-8">GDPR Compliance</h1>
            <p className="text-gray-500 mb-8">Last updated: December 15, 2025</p>

            <div className="prose prose-lg max-w-none text-gray-600">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment to GDPR</h2>
                <p>
                  CloudePulse is committed to protecting your personal data and complying with the General Data Protection Regulation (GDPR). As a company registered in Norway, we take our data protection obligations seriously.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Data Controller</h2>
                <p>
                  CloudePulse AS is the data controller for personal data collected through CloudePulse. We determine the purposes and means of processing your personal data.
                </p>
                <p className="mt-4">
                  <strong>Contact:</strong><br />
                  Email: <a href="mailto:support@cloudepulse.com" className="text-primary-600 hover:text-primary-700">support@cloudepulse.com</a>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Legal Basis for Processing</h2>
                <p>We process personal data based on the following legal grounds:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Contract Performance:</strong> Processing necessary to provide our backup monitoring services</li>
                  <li><strong>Legitimate Interest:</strong> Improving our services, security, and fraud prevention</li>
                  <li><strong>Consent:</strong> Marketing communications (where applicable)</li>
                  <li><strong>Legal Obligation:</strong> Compliance with applicable laws</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Your Rights Under GDPR</h2>
                <p>As a data subject, you have the following rights:</p>

                <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">3.1 Right of Access (Article 15)</h3>
                <p>
                  You have the right to obtain confirmation of whether we process your personal data and receive a copy of that data.
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">3.2 Right to Rectification (Article 16)</h3>
                <p>
                  You can request correction of inaccurate personal data or completion of incomplete data.
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">3.3 Right to Erasure (Article 17)</h3>
                <p>
                  You can request deletion of your personal data when:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Data is no longer necessary for its original purpose</li>
                  <li>You withdraw consent (where consent was the legal basis)</li>
                  <li>You object to processing and there are no overriding legitimate grounds</li>
                  <li>Data has been unlawfully processed</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">3.4 Right to Restriction (Article 18)</h3>
                <p>
                  You can request restriction of processing in certain circumstances, such as when contesting data accuracy.
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">3.5 Right to Data Portability (Article 20)</h3>
                <p>
                  You have the right to receive your data in a structured, commonly used, machine-readable format.
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">3.6 Right to Object (Article 21)</h3>
                <p>
                  You can object to processing based on legitimate interests or for direct marketing purposes.
                </p>

                <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">3.7 Right Related to Automated Decision-Making (Article 22)</h3>
                <p>
                  CloudePulse does not make decisions based solely on automated processing that significantly affects you.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. How to Exercise Your Rights</h2>
                <p>
                  To exercise any of your rights, please contact us at <a href="mailto:support@cloudepulse.com" className="text-primary-600 hover:text-primary-700">support@cloudepulse.com</a>. We will respond to your request within 30 days.
                </p>
                <p className="mt-4">
                  When making a request, please provide:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Your full name and email address associated with your account</li>
                  <li>Description of the specific right you wish to exercise</li>
                  <li>Any relevant details to help us locate your data</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Protection Measures</h2>
                <p>We implement appropriate technical and organizational measures:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Encryption:</strong> Data is encrypted in transit and at rest</li>
                  <li><strong>Access Controls:</strong> Strict access controls and authentication</li>
                  <li><strong>Multi-Tenant Isolation:</strong> Complete data isolation between MSP accounts</li>
                  <li><strong>Regular Audits:</strong> Security assessments and monitoring</li>
                  <li><strong>Employee Training:</strong> Staff trained on data protection</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Transfers</h2>
                <p>
                  Your data is primarily stored within the European Union using Google Firebase infrastructure. Where transfers outside the EU occur, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Processing Agreement</h2>
                <p>
                  As CloudePulse processes data on behalf of MSPs, we act as a data processor. We offer a Data Processing Agreement (DPA) to all customers upon request. Contact <a href="mailto:support@cloudepulse.com" className="text-primary-600 hover:text-primary-700">support@cloudepulse.com</a> to receive a copy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Data Breach Notification</h2>
                <p>
                  In the event of a personal data breach that is likely to result in a risk to your rights and freedoms, we will:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Notify the relevant supervisory authority within 72 hours</li>
                  <li>Communicate the breach to affected individuals without undue delay</li>
                  <li>Document all breaches and remediation measures</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Supervisory Authority</h2>
                <p>
                  If you believe we have not adequately addressed your concerns, you have the right to lodge a complaint with a supervisory authority. For Norway, this is:
                </p>
                <p className="mt-4">
                  <strong>Datatilsynet (Norwegian Data Protection Authority)</strong><br />
                  Website: <a href="https://www.datatilsynet.no" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">www.datatilsynet.no</a>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
                <p>
                  For any GDPR-related questions or to exercise your rights, please contact us at:
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
