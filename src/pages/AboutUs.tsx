import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Target, Lightbulb, Users, Shield, Clock, CreditCard, Bell, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../components';

const painPoints = [
  {
    icon: CreditCard,
    title: 'Paying for Features We Never Used',
    description: 'Enterprise pricing for enterprise features - but we\'re not an enterprise. We just needed the basics done right.',
  },
  {
    icon: Clock,
    title: 'Time Tracking That Actually Works',
    description: 'Every RMM has time tracking, but none of them get it right. We needed tasks, projects, and easy exports for invoicing.',
  },
  {
    icon: Bell,
    title: 'Customer Communication',
    description: 'Sending maintenance notifications meant switching between three different tools. Why couldn\'t it just be built-in?',
  },
  {
    icon: Shield,
    title: 'Ransomware Detection',
    description: 'Expensive EDR solutions or nothing. We wanted simple canary file monitoring that could actually stop an attack in progress.',
  },
];

const values = [
  {
    icon: Target,
    title: 'Built for MSPs, by MSPs',
    description: 'We don\'t guess what you need - we know, because we need it too. Every feature exists because we use it ourselves.',
  },
  {
    icon: Lightbulb,
    title: 'Simple Over Complex',
    description: 'No feature bloat. No confusing interfaces. Just the tools you actually use, working exactly how you\'d expect.',
  },
  {
    icon: Heart,
    title: 'Fair Pricing',
    description: 'Transparent pricing that makes sense. You shouldn\'t need a sales call to find out what something costs.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Our roadmap is shaped by real MSPs. Have an idea? We\'re listening. Your feature request might be in the next release.',
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-block px-4 py-2 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-6"
              >
                Our Story
              </motion.span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                We're MSPs Too.{' '}
                <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                  We Get It.
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                After 25+ years in the MSP industry, we got tired of overpaying for bloated tools
                and missing features we actually needed. So we built CloudePulse - the platform
                we wished existed.
              </p>
            </div>

            {/* The Story */}
            <div className="max-w-4xl mx-auto mb-20">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">The Breaking Point</h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>
                    Picture this: It's 2 AM. A backup failed at a client site, but you don't know yet because
                    the email got buried in your inbox. Your expensive RMM tool has "backup monitoring," but
                    it doesn't support half your clients' backup solutions. Sound familiar?
                  </p>
                  <p className="mt-4">
                    We've been running an MSP for over 25 years. We've tried every tool out there - the big
                    names, the small players, the "all-in-one" solutions that somehow still need five other
                    tools to work properly. Today, we run our operations on industry-standard tools like
                    RMM platforms and Hudu for documentation. We know these tools inside and out - and we
                    know exactly where they fall short.
                  </p>
                  <p className="mt-4">
                    And every year, it was the same story: <strong>prices going up, features we don't need
                    getting added, and the features we actually want nowhere to be found.</strong>
                  </p>
                  <p className="mt-4">
                    We wanted to track credit card expirations for our clients' subscriptions. "Not in the
                    roadmap." We wanted to send maintenance notifications without switching tools. "Use our
                    partner integration." We wanted ransomware detection that didn't cost more than the
                    endpoints it was protecting. "Have you seen our enterprise tier?"
                  </p>
                  <p className="mt-4 text-gray-800 font-medium">
                    Enough was enough. We decided to build exactly what we needed - nothing more, nothing less.
                  </p>
                </div>
              </div>
            </div>

            {/* Pain Points */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
                The Problems We Set Out to Solve
              </h2>
              <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                If you've felt any of these frustrations, you're not alone. We built CloudePulse
                because we were tired of these exact problems.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {painPoints.map((point, index) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                      <point.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* The Solution */}
            <div className="max-w-4xl mx-auto mb-20">
              <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-3xl p-8 md:p-12 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-8 h-8" />
                  <h2 className="text-2xl font-bold">Then We Built CloudePulse</h2>
                </div>
                <div className="space-y-4 text-primary-100">
                  <p>
                    Here's the thing: <strong className="text-white">Why buy a Ferrari when a Lada gets you from A to B just fine?</strong> Sure,
                    the Ferrari looks impressive, but if you're just driving to work every day, you're paying for
                    speed and features you'll never use.
                  </p>
                  <p>
                    CloudePulse isn't trying to be everything to everyone. It's built specifically for
                    small and medium MSPs who want powerful tools without the enterprise price tag.
                  </p>
                  <p>
                    <strong className="text-white">We eat our own cooking.</strong> Every feature in CloudePulse
                    is something we use daily in our own MSP operations. If it's not useful to us, it doesn't
                    make the cut.
                  </p>
                  <p>
                    Backup monitoring that actually works with any backup solution? Check. Ransomware detection
                    that can lock down a compromised machine in seconds? Check. Time tracking that doesn't make
                    you want to throw your keyboard? Check.
                  </p>
                  <p className="text-white font-semibold text-lg mt-6">
                    And the best part? You can actually afford it.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Values */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
                What We Believe In
              </h2>
              <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                These aren't just words on a page. They're the principles that guide every
                decision we make.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* The Promise */}
            <div className="max-w-4xl mx-auto mb-20">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Promise to You</h2>
                <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    We will never add features just to check a box. We will never raise prices just
                    because we can. We will never forget that behind every "endpoint" is a real
                    business depending on us to keep them running.
                  </p>
                  <p className="text-lg text-gray-600">
                    Because at the end of the day, we're MSPs too. When you succeed, we succeed.
                    It's that simple.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Work Smarter?
              </h2>
              <p className="text-gray-600 mb-8">
                Join the growing community of MSPs who are tired of overpaying and underdelivering.
                Try CloudePulse free for 30 days - no credit card required.
              </p>
              <motion.button
                onClick={() => {
                  const element = document.querySelector('#trial');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                  else window.location.href = '/#trial';
                }}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold rounded-2xl shadow-xl shadow-primary-500/30 hover:shadow-primary-500/50 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Free Trial
              </motion.button>
              <p className="mt-4 text-sm text-gray-500">
                Questions? Reach out at{' '}
                <a href="mailto:support@cloudepulse.com" className="text-primary-600 hover:text-primary-700">
                  support@cloudepulse.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
