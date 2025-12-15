import { motion } from 'framer-motion';
import {
  HardDrive,
  ShieldAlert,
  Network,
  Bug,
  Users,
  Globe,
  Webhook,
  Bell,
  AlertTriangle,
  Download,
  FileWarning,
  Activity,
} from 'lucide-react';

const features = [
  {
    icon: HardDrive,
    title: 'Backup Monitoring',
    description:
      'Forward backup emails to CloudePulse and let our intelligent parser detect success, warnings, and failures automatically. Supports Veeam, Synology Active Backup, Ahsay, Atera RMM, and custom robocopy scripts. See 7-day history at a glance.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    icon: AlertTriangle,
    title: 'Missing Backup Alerts',
    description:
      'CloudePulse knows when to expect your backup reports. If a scheduled backup doesn\'t report in on time, you get alerted immediately. No more silent failures going unnoticed for days.',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-100',
  },
  {
    icon: Globe,
    title: 'Website Monitoring',
    description:
      'Monitor client websites for uptime, SSL certificate expiration, and keyword presence. Get alerted when sites go down, certificates are about to expire, or critical content changes. Built-in alternative to UptimeRobot and Pingdom.',
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-100',
  },
  {
    icon: Webhook,
    title: 'Log Center',
    description:
      'Create webhook endpoints for each customer to receive logs from firewalls, NAS devices, and other systems. Filter by keywords, set severity levels, and get real-time alerts on security events and system warnings.',
    color: 'from-violet-500 to-violet-600',
    bgColor: 'bg-violet-100',
  },
  {
    icon: Download,
    title: 'CloudePulse Backup Agent',
    description:
      'Built for Windows Scheduled Task backups that most MSPs forget to monitor. Robocopy scripts, xcopy jobs, and custom batch file backups rarely send email reports - our agent watches these backup folders, detects when jobs complete (or fail), and reports status to CloudePulse automatically. Simple MSI install, runs as a Windows service.',
    color: 'from-sky-500 to-sky-600',
    bgColor: 'bg-sky-100',
  },
  {
    icon: FileWarning,
    title: 'CloudePulse FileMon Agent',
    description:
      'Deploy our ransomware canary system on Windows endpoints. The FileMon agent creates hidden canary files and monitors them 24/7. If ransomware modifies or deletes these files, you get instant alerts before the damage spreads.',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-100',
  },
  {
    icon: Network,
    title: 'Port & TCP Monitoring',
    description:
      'Scan client networks for open ports and track changes over time. Monitor critical TCP connections to ensure services stay available. Get alerted when unauthorized ports open or critical services become unreachable.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    icon: ShieldAlert,
    title: 'Firewall & Security Events',
    description:
      'Configure your firewalls (UniFi, Fortinet, pfSense, etc.) to send webhooks to CloudePulse Log Center. Filter important security events, block brute force alerts, and VPN connection logs. Stay ahead of threats.',
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-100',
  },
  {
    icon: Users,
    title: 'Customer Database',
    description:
      'Manage all your MSP customers in one place. Add custom fields for any data you need to track. Configure notification contacts, billing settings, and service levels per customer. Export data when needed.',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-100',
  },
  {
    icon: Activity,
    title: 'Dashboard & Analytics',
    description:
      'Get a real-time overview of all monitored systems at a glance. See backup success rates, website uptime percentages, active alerts, and 7-day trends. Know your MSP health status instantly every morning.',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-100',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description:
      'Configure alerts exactly how you want them. Set per-customer notification preferences, choose severity thresholds, and receive alerts via email, SMS, or push notifications. Reduce alert fatigue with intelligent filtering.',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-100',
  },
  {
    icon: Bug,
    title: 'Ransomware Early Warning',
    description:
      'Combine FileMon canary agents, Log Center security events, and backup monitoring into a comprehensive ransomware defense. Detect threats early through multiple signals and respond before critical damage occurs.',
    color: 'from-rose-500 to-rose-600',
    bgColor: 'bg-rose-100',
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
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
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
                      : feature.color.includes('teal')
                      ? '#14b8a6'
                      : feature.color.includes('violet')
                      ? '#8b5cf6'
                      : feature.color.includes('sky')
                      ? '#0ea5e9'
                      : feature.color.includes('orange')
                      ? '#f97316'
                      : feature.color.includes('rose')
                      ? '#f43f5e'
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

        {/* Replaces Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Enterprise Features. <span className="gradient-text">MSP-Friendly Pricing.</span>
          </h3>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Big enterprise tools are expensive and packed with features you don't need. CloudePulse gives small and medium MSPs the essential monitoring capabilities - backup monitoring, website uptime, ransomware detection - all in one affordable platform. No bloat, no enterprise pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'BackupRadar', category: 'Backup Monitoring' },
              { name: 'Huntress', category: 'Ransomware Detection' },
              { name: 'UptimeRobot', category: 'Website Monitoring' },
              { name: 'Pingdom', category: 'Uptime & SSL' },
              { name: 'StatusCake', category: 'Website Monitoring' },
              { name: 'Veeam ONE', category: 'Backup Analytics' },
            ].map((tool) => (
              <motion.div
                key={tool.name}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl"
              >
                <span className="font-semibold text-gray-800">{tool.name}</span>
                <span className="block text-xs text-gray-500">{tool.category}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Lightweight alternatives that work alongside your existing RMM - NinjaOne, Atera, ConnectWise, or Datto
          </p>
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
            More features in development: Time Tracking, Script Library, Newsletters, and more.
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
