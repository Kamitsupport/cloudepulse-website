import { motion } from 'framer-motion';
import { CreditCard, Clock, Bell, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const painPoints = [
  {
    icon: CreditCard,
    title: 'Paying for Features We Never Used',
    description: 'Enterprise pricing for enterprise features — but we\'re not an enterprise.',
  },
  {
    icon: Clock,
    title: 'Time Tracking That Never Worked',
    description: 'Every RMM has it, but none of them get it right.',
  },
  {
    icon: Bell,
    title: 'Customer Communication Chaos',
    description: 'Sending maintenance notifications meant switching between three tools.',
  },
  {
    icon: Shield,
    title: 'Expensive Ransomware Detection',
    description: 'EDR solutions that cost more than the endpoints they protect.',
  },
];

export default function WhyWeBuiltThis() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-400 text-sm font-semibold rounded-full mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              We're MSPs Too.{' '}
              <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                We Get It.
              </span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Picture this: It's 2 AM. A backup failed at a client site, but you don't know yet
              because the email got buried in your inbox. Or worse — the backup email never came
              at all because Veeam is locked up on the backup machine. Sound familiar?
            </p>
          </motion.div>

          {/* Pain Points Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary-500/30 transition-colors"
              >
                <div className="p-2 bg-red-500/20 rounded-lg flex-shrink-0">
                  <point.icon className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{point.title}</h3>
                  <p className="text-gray-400 text-sm">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-300 mb-6">
              After 25+ years in the MSP industry, we got tired of overpaying for bloated tools.
              So we built exactly what we needed — nothing more, nothing less.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors group"
            >
              Read Our Full Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
