import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../components';

export default function Transparency() {
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

            <h1 className="text-4xl font-bold text-gray-900 mb-8">Norwegian Transparency Act</h1>
            <p className="text-gray-500 mb-8">Last updated: December 15, 2025</p>

            <div className="prose prose-lg max-w-none text-gray-600">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment to Transparency</h2>
                <p>
                  Although CloudePulse AS is not currently subject to the Norwegian Transparency Act (Åpenhetsloven - Act relating to enterprises' transparency and work on fundamental human rights and decent working conditions), we are committed to conducting our business in an ethical and responsible manner.
                </p>
                <p className="mt-4">
                  We actively work towards the principles of the Transparency Act, the UN Guiding Principles on Business and Human Rights (UNGP), and the OECD Guidelines for Multinational Enterprises.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Human Rights and Working Conditions</h2>
                <p>CloudePulse AS is committed to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Respecting fundamental human rights in all our operations</li>
                  <li>Ensuring decent working conditions for all employees</li>
                  <li>Selecting suppliers and partners who share our values</li>
                  <li>Continuously improving our due diligence procedures</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Suppliers</h2>
                <p>
                  As a cloud-based software service, CloudePulse has a limited supply chain primarily consisting of:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Cloud Infrastructure:</strong> Google Cloud Platform (Firebase) - a recognized provider with documented commitments to human rights and sustainability</li>
                  <li><strong>Hosting:</strong> Vercel and Cloudflare - established companies with clear ethical guidelines</li>
                </ul>
                <p className="mt-4">
                  We conduct regular assessments of our suppliers' practices and commitments related to human rights and working conditions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Due Diligence Assessments</h2>
                <p>
                  We conduct due diligence assessments in accordance with OECD guidelines. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Mapping potential risks in our operations and supply chain</li>
                  <li>Assessing actual and potential adverse impacts</li>
                  <li>Implementing measures to prevent, reduce, or stop adverse impacts</li>
                  <li>Monitoring and evaluating the effectiveness of measures</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Right to Information</h2>
                <p>
                  In accordance with the intent of the Transparency Act, anyone has the right to request information about how CloudePulse AS handles actual and potential adverse impacts on fundamental human rights and decent working conditions.
                </p>
                <p className="mt-4">
                  Inquiries can be sent to: <a href="mailto:support@cloudepulse.com" className="text-primary-600 hover:text-primary-700">support@cloudepulse.com</a>
                </p>
                <p className="mt-4">
                  We will respond to inquiries within a reasonable time, and no later than three weeks after the request is received.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <p>
                  Do you have questions about our work with human rights and working conditions, or would you like more information? Please contact us:
                </p>
                <p className="mt-4">
                  <strong>CloudePulse AS</strong><br />
                  Email: <a href="mailto:support@cloudepulse.com" className="text-primary-600 hover:text-primary-700">support@cloudepulse.com</a>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">References</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <a href="https://lovdata.no/dokument/NL/lov/2021-06-18-99" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      Norwegian Transparency Act (Lovdata - in Norwegian)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.forbrukertilsynet.no/vi-jobber-med/apenhetsloven" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      Norwegian Consumer Authority - Transparency Act
                    </a>
                  </li>
                  <li>
                    <a href="https://www.oecd.org/corporate/mne/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      OECD Guidelines for Multinational Enterprises
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
