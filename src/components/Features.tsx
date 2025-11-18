import { motion } from 'framer-motion';
import {
  HardDrive,
  ShieldAlert,
  Network,
  Bug,
  Users,
  Clock,
  BarChart3,
  Bell,
} from 'lucide-react';

const features = [
  {
    icon: HardDrive,
    title: 'Backup Monitoring',
    description:
      'Automatically parse backup reports from Veeam, Synology, Acronis, and more. Get instant alerts for failures.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    icon: ShieldAlert,
    title: 'Firewall Alerts',
    description:
      'Monitor firewall health and security events. Stay ahead of threats with proactive notifications.',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-100',
  },
  {
    icon: Network,
    title: 'Port Monitoring',
    description:
      'Track open ports and services across your network. Detect unauthorized changes instantly.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    icon: Bug,
    title: 'Ransomware Detection',
    description:
      'Early warning system for ransomware indicators. Protect your clients before damage occurs.',
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-100',
  },
  {
    icon: Users,
    title: 'Customer Database',
    description:
      'Centralized customer management with complete service history and documentation.',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-100',
  },
  {
    icon: Clock,
    title: 'Time Tracking',
    description:
      'Built-in time tracking for accurate billing. Track hours by customer and project.',
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-100',
  },
  {
    icon: BarChart3,
    title: 'Reports & Analytics',
    description:
      'Beautiful reports for your clients. Show value with detailed analytics and trends.',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-100',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description:
      'Customizable alerts via email, SMS, or push. Never miss a critical event.',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-100',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Features() {
  return (
    <section id="features" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-100 rounded-full blur-3xl opacity-50" />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-2 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4"
          >
            Powerful Features
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{' '}
            <span className="gradient-text">Manage IT</span>
          </h2>
          <p className="text-lg text-gray-600">
            One platform to monitor, manage, and report on all your IT services.
            Designed specifically for MSPs who want to work smarter.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm card-hover"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon
                  className={`w-6 h-6 bg-gradient-to-r ${feature.color} bg-clip-text`}
                  style={{
                    color: feature.color.includes('blue')
                      ? '#3b82f6'
                      : feature.color.includes('red')
                      ? '#ef4444'
                      : feature.color.includes('purple')
                      ? '#a855f7'
                      : feature.color.includes('amber')
                      ? '#f59e0b'
                      : feature.color.includes('green')
                      ? '#22c55e'
                      : feature.color.includes('cyan')
                      ? '#06b6d4'
                      : feature.color.includes('indigo')
                      ? '#6366f1'
                      : '#ec4899',
                  }}
                />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Gradient Border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">
            And many more features coming soon...
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#trial');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            Start your free trial to explore all features →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
