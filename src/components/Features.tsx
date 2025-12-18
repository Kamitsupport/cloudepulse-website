import { motion } from 'framer-motion';
import { useState } from 'react';
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
  Check,
  ChevronRight,
  CalendarClock,
  Clock,
  CreditCard,
  Code,
  Newspaper,
  Cloud,
  KeyRound,
  MapPin,
} from 'lucide-react';

// Feature categories with their features
const featureCategories = [
  {
    id: 'monitoring',
    name: 'Monitoring',
    tagline: 'Know Before Your Customers Do',
    description: 'Proactive monitoring across all critical systems. Get alerted the moment something goes wrong - or fails to report at all.',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      {
        icon: HardDrive,
        title: 'Backup Monitoring',
        description: 'Forward backup emails and let our intelligent parser detect success, warnings, and failures. Supports all major backup applications - and we add new ones regularly.',
      },
      {
        icon: AlertTriangle,
        title: 'Silence Detection',
        description: 'Most tools alert when backups fail. We alert when they go silent. If your backup server crashes and sends nothing, we notice.',
      },
      {
        icon: Globe,
        title: 'Website Monitoring',
        description: 'Monitor uptime, SSL expiration, and keyword presence. Built-in alternative to UptimeRobot and Pingdom.',
      },
      {
        icon: Network,
        title: 'Port & TCP Monitoring',
        description: 'Scan networks for open ports and track changes. Get alerted when unauthorized ports open or services become unreachable.',
      },
    ],
  },
  {
    id: 'security',
    name: 'Security & Ransomware Defense',
    tagline: 'Detect Threats Before They Spread',
    description: 'Multi-layered security monitoring with ransomware canary agents, firewall integration, and real-time threat detection.',
    color: 'red',
    gradient: 'from-red-500 to-orange-500',
    features: [
      {
        icon: FileWarning,
        title: 'FileMon Ransomware Agent',
        description: 'Entropy-based detection that only triggers on actual encryption - zero false positives. Includes honeypot folders and ProcessWatcher early warning.',
      },
      {
        icon: Webhook,
        title: 'Log Center',
        description: 'Create webhook endpoints to receive logs from firewalls and NAS devices. Click any IP address to see geolocation, ISP, and threat intelligence links.',
      },
      {
        icon: MapPin,
        title: 'IP Threat Lookup',
        description: 'Click any IP address in logs to instantly see location on map, country, ISP, and links to AbuseIPDB, VirusTotal, and Shodan for threat analysis.',
      },
      {
        icon: ShieldAlert,
        title: 'Firewall Events',
        description: 'Configure UniFi, Fortinet, pfSense to send webhooks. Filter security events, brute force alerts, and VPN logs.',
      },
      {
        icon: Bug,
        title: 'Early Warning System',
        description: 'Combine FileMon canaries, Log Center events, and backup monitoring into comprehensive ransomware defense.',
      },
    ],
  },
  {
    id: 'agents',
    name: 'Windows Agents',
    tagline: 'Lightweight. Powerful. Silent.',
    description: 'Deploy our MSI agents in minutes. They run as Windows services, report to CloudePulse, and require zero maintenance.',
    color: 'purple',
    gradient: 'from-purple-500 to-indigo-500',
    features: [
      {
        icon: Download,
        title: 'Backup Agent',
        description: 'Monitor Windows Scheduled Task backups that don\'t send email reports. Watches backup folders and reports completion status automatically.',
      },
      {
        icon: FileWarning,
        title: 'FileMon Agent',
        description: 'Ransomware detection using entropy analysis. Deploys canary files and honeypot folders, detects encryption in under 60 seconds.',
      },
    ],
  },
  {
    id: 'management',
    name: 'Customer Management',
    tagline: 'Everything in One Place',
    description: 'Customer management, Microsoft 365 integration, notifications, and analytics - all the tools MSPs need to run efficiently.',
    color: 'green',
    gradient: 'from-green-500 to-teal-500',
    features: [
      {
        icon: Cloud,
        title: 'Microsoft 365 Integration',
        description: 'Connect customer tenants with one click. See all licenses, users, mailbox sizes, and MFA status. Track available vs consumed licenses across all customers.',
      },
      {
        icon: Users,
        title: 'Customer Database',
        description: 'Manage all MSP customers with custom fields, notification contacts, billing settings, and service levels.',
      },
      {
        icon: KeyRound,
        title: 'MFA & Security Status',
        description: 'See which users have MFA enabled, what methods they use, and mailbox storage consumption at a glance.',
      },
      {
        icon: Activity,
        title: 'Dashboard & Analytics',
        description: 'Real-time overview of backup success rates, website uptime, license utilization, and 7-day trends.',
      },
      {
        icon: Bell,
        title: 'Smart Notifications',
        description: 'Per-customer notification preferences, severity thresholds, and instant in-app push notifications.',
      },
    ],
  },
  {
    id: 'productivity',
    name: 'Productivity Tools',
    tagline: 'Work Smarter Every Day',
    description: 'Time tracking, reminders, credit cards, scripts, and newsletters - everything you need to stay organized and efficient.',
    color: 'amber',
    gradient: 'from-amber-500 to-yellow-500',
    features: [
      {
        icon: Clock,
        title: 'Time Tracking',
        description: 'Track billable hours with tasks and projects. Log time per customer, generate reports, and export for invoicing.',
      },
      {
        icon: CalendarClock,
        title: 'Reminders',
        description: 'Never miss a thing. Set one-time or recurring reminders for contract renewals, maintenance tasks, follow-ups, and more.',
      },
      {
        icon: CreditCard,
        title: 'Credit Card Tracking',
        description: 'Track credit card expiration dates and which services each card is used for. Get alerts before cards expire.',
      },
      {
        icon: Code,
        title: 'Script Library',
        description: 'Store and organize your PowerShell, Bash, and batch scripts. Quick access to frequently used scripts with syntax highlighting.',
      },
      {
        icon: Newspaper,
        title: 'Newsletters',
        description: 'Subscribe to IT news and security bulletins. Curated feeds in one place with RSS integration.',
      },
    ],
  },
];

// SVG Illustration Components
const MonitoringIllustration = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="monitorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    {/* Monitor Screen */}
    <rect x="50" y="40" width="300" height="180" rx="12" fill="#1e293b" />
    <rect x="60" y="50" width="280" height="160" rx="8" fill="#0f172a" />
    {/* Dashboard Elements */}
    <rect x="75" y="65" width="120" height="60" rx="6" fill="#1e3a5f" />
    <rect x="205" y="65" width="120" height="60" rx="6" fill="#1e3a5f" />
    <rect x="75" y="135" width="250" height="60" rx="6" fill="#1e3a5f" />
    {/* Status Indicators */}
    <circle cx="95" cy="85" r="8" fill="#22c55e" />
    <circle cx="225" cy="85" r="8" fill="#22c55e" />
    <circle cx="95" cy="155" r="8" fill="#f59e0b" />
    {/* Lines */}
    <rect x="115" y="80" width="60" height="6" rx="3" fill="#334155" />
    <rect x="245" y="80" width="60" height="6" rx="3" fill="#334155" />
    <rect x="115" y="150" width="80" height="6" rx="3" fill="#334155" />
    {/* Monitor Stand */}
    <rect x="175" y="220" width="50" height="20" fill="#475569" />
    <rect x="140" y="240" width="120" height="10" rx="5" fill="#475569" />
    {/* Floating Alert */}
    <g transform="translate(320, 30)">
      <rect x="0" y="0" width="60" height="40" rx="8" fill="url(#monitorGrad)" />
      <circle cx="20" cy="20" r="6" fill="white" />
      <rect x="32" y="15" width="20" height="4" rx="2" fill="white" opacity="0.8" />
      <rect x="32" y="22" width="15" height="4" rx="2" fill="white" opacity="0.6" />
    </g>
  </svg>
);

const SecurityIllustration = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>
    </defs>
    {/* Main Shield */}
    <path
      d="M200 30 L300 70 L300 150 C300 220 200 270 200 270 C200 270 100 220 100 150 L100 70 Z"
      fill="url(#shieldGrad)"
      opacity="0.2"
    />
    <path
      d="M200 50 L280 82 L280 145 C280 200 200 240 200 240 C200 240 120 200 120 145 L120 82 Z"
      fill="url(#shieldGrad)"
      opacity="0.4"
    />
    <path
      d="M200 70 L260 95 L260 140 C260 180 200 210 200 210 C200 210 140 180 140 140 L140 95 Z"
      fill="url(#shieldGrad)"
    />
    {/* Checkmark */}
    <path
      d="M170 135 L190 155 L235 110"
      fill="none"
      stroke="white"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Orbiting Elements */}
    <circle cx="80" cy="100" r="20" fill="#1e293b" />
    <circle cx="80" cy="100" r="8" fill="#22c55e" />
    <circle cx="320" cy="120" r="20" fill="#1e293b" />
    <circle cx="320" cy="120" r="8" fill="#22c55e" />
    <circle cx="100" cy="220" r="20" fill="#1e293b" />
    <circle cx="100" cy="220" r="8" fill="#f59e0b" />
    {/* Connection Lines */}
    <line x1="100" y1="100" x2="140" y2="95" stroke="#475569" strokeWidth="2" strokeDasharray="4" />
    <line x1="300" y1="120" x2="260" y2="120" stroke="#475569" strokeWidth="2" strokeDasharray="4" />
    <line x1="120" y1="210" x2="145" y2="180" stroke="#475569" strokeWidth="2" strokeDasharray="4" />
  </svg>
);

const AgentsIllustration = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="agentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
    </defs>
    {/* Central Server */}
    <rect x="150" y="100" width="100" height="120" rx="8" fill="#1e293b" />
    <rect x="160" y="115" width="80" height="10" rx="2" fill="url(#agentGrad)" />
    <rect x="160" y="135" width="80" height="10" rx="2" fill="url(#agentGrad)" opacity="0.7" />
    <rect x="160" y="155" width="80" height="10" rx="2" fill="url(#agentGrad)" opacity="0.5" />
    <circle cx="175" cy="195" r="6" fill="#22c55e" />
    <circle cx="200" cy="195" r="6" fill="#22c55e" />
    <circle cx="225" cy="195" r="6" fill="#f59e0b" />
    {/* Agent 1 */}
    <g transform="translate(30, 50)">
      <rect x="0" y="0" width="70" height="50" rx="6" fill="#1e293b" />
      <rect x="10" y="10" width="50" height="8" rx="2" fill="#475569" />
      <rect x="10" y="24" width="35" height="8" rx="2" fill="#475569" />
      <circle cx="55" cy="38" r="5" fill="#22c55e" />
    </g>
    {/* Agent 2 */}
    <g transform="translate(300, 50)">
      <rect x="0" y="0" width="70" height="50" rx="6" fill="#1e293b" />
      <rect x="10" y="10" width="50" height="8" rx="2" fill="#475569" />
      <rect x="10" y="24" width="35" height="8" rx="2" fill="#475569" />
      <circle cx="55" cy="38" r="5" fill="#22c55e" />
    </g>
    {/* Agent 3 */}
    <g transform="translate(30, 200)">
      <rect x="0" y="0" width="70" height="50" rx="6" fill="#1e293b" />
      <rect x="10" y="10" width="50" height="8" rx="2" fill="#475569" />
      <rect x="10" y="24" width="35" height="8" rx="2" fill="#475569" />
      <circle cx="55" cy="38" r="5" fill="#22c55e" />
    </g>
    {/* Agent 4 */}
    <g transform="translate(300, 200)">
      <rect x="0" y="0" width="70" height="50" rx="6" fill="#1e293b" />
      <rect x="10" y="10" width="50" height="8" rx="2" fill="#475569" />
      <rect x="10" y="24" width="35" height="8" rx="2" fill="#475569" />
      <circle cx="55" cy="38" r="5" fill="#22c55e" />
    </g>
    {/* Connection Lines */}
    <line x1="100" y1="75" x2="150" y2="130" stroke="url(#agentGrad)" strokeWidth="2" />
    <line x1="300" y1="75" x2="250" y2="130" stroke="url(#agentGrad)" strokeWidth="2" />
    <line x1="100" y1="225" x2="150" y2="180" stroke="url(#agentGrad)" strokeWidth="2" />
    <line x1="300" y1="225" x2="250" y2="180" stroke="url(#agentGrad)" strokeWidth="2" />
    {/* Data Flow Dots */}
    <circle cx="125" cy="102" r="4" fill="url(#agentGrad)">
      <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="275" cy="102" r="4" fill="url(#agentGrad)">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
    </circle>
  </svg>
);

const ManagementIllustration = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="mgmtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22c55e" />
        <stop offset="100%" stopColor="#14b8a6" />
      </linearGradient>
    </defs>
    {/* Main Card Stack */}
    <rect x="100" y="80" width="200" height="140" rx="12" fill="#1e293b" transform="rotate(-3 200 150)" />
    <rect x="100" y="80" width="200" height="140" rx="12" fill="#334155" transform="rotate(1 200 150)" />
    <rect x="100" y="80" width="200" height="140" rx="12" fill="#475569" />
    {/* Card Content */}
    <circle cx="140" cy="120" r="20" fill="url(#mgmtGrad)" />
    <text x="140" y="126" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">JS</text>
    <rect x="175" y="108" width="100" height="10" rx="3" fill="#64748b" />
    <rect x="175" y="124" width="70" height="8" rx="3" fill="#94a3b8" />
    {/* Stats */}
    <rect x="120" y="155" width="160" height="50" rx="6" fill="#1e293b" />
    <rect x="130" y="165" width="40" height="30" rx="4" fill="#22c55e" opacity="0.3" />
    <rect x="180" y="165" width="40" height="30" rx="4" fill="#3b82f6" opacity="0.3" />
    <rect x="230" y="165" width="40" height="30" rx="4" fill="#f59e0b" opacity="0.3" />
    <rect x="130" y="175" width="40" height="10" rx="2" fill="#22c55e" />
    <rect x="180" y="180" width="40" height="5" rx="2" fill="#3b82f6" />
    <rect x="230" y="170" width="40" height="15" rx="2" fill="#f59e0b" />
    {/* Floating Elements */}
    <g transform="translate(320, 60)">
      <rect x="0" y="0" width="50" height="35" rx="6" fill="url(#mgmtGrad)" />
      <path d="M15 17 L22 24 L35 11" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </g>
    <g transform="translate(30, 140)">
      <rect x="0" y="0" width="50" height="35" rx="6" fill="#1e293b" />
      <circle cx="25" cy="17" r="10" fill="url(#mgmtGrad)" opacity="0.5" />
      <circle cx="25" cy="17" r="5" fill="url(#mgmtGrad)" />
    </g>
  </svg>
);

const ProductivityIllustration = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="prodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#eab308" />
      </linearGradient>
    </defs>
    {/* Clock */}
    <circle cx="200" cy="130" r="80" fill="#1e293b" />
    <circle cx="200" cy="130" r="70" fill="#0f172a" />
    <circle cx="200" cy="130" r="65" fill="none" stroke="url(#prodGrad)" strokeWidth="4" />
    {/* Clock hands */}
    <line x1="200" y1="130" x2="200" y2="80" stroke="url(#prodGrad)" strokeWidth="4" strokeLinecap="round" />
    <line x1="200" y1="130" x2="240" y2="130" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
    <circle cx="200" cy="130" r="6" fill="url(#prodGrad)" />
    {/* Hour markers */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
      <circle
        key={i}
        cx={200 + 55 * Math.cos((angle - 90) * Math.PI / 180)}
        cy={130 + 55 * Math.sin((angle - 90) * Math.PI / 180)}
        r="3"
        fill="#475569"
      />
    ))}
    {/* Task cards */}
    <g transform="translate(30, 200)">
      <rect x="0" y="0" width="100" height="60" rx="8" fill="#1e293b" />
      <rect x="10" y="12" width="12" height="12" rx="3" fill="url(#prodGrad)" />
      <rect x="30" y="14" width="60" height="8" rx="2" fill="#475569" />
      <rect x="10" y="32" width="80" height="6" rx="2" fill="#334155" />
      <rect x="10" y="44" width="50" height="6" rx="2" fill="#334155" />
    </g>
    <g transform="translate(150, 220)">
      <rect x="0" y="0" width="100" height="60" rx="8" fill="#1e293b" />
      <rect x="10" y="12" width="12" height="12" rx="3" fill="#22c55e" />
      <path d="M13 18 L16 21 L22 15" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <rect x="30" y="14" width="60" height="8" rx="2" fill="#475569" />
      <rect x="10" y="32" width="80" height="6" rx="2" fill="#334155" />
    </g>
    <g transform="translate(270, 200)">
      <rect x="0" y="0" width="100" height="60" rx="8" fill="#1e293b" />
      <rect x="10" y="12" width="12" height="12" rx="3" fill="#3b82f6" />
      <rect x="30" y="14" width="60" height="8" rx="2" fill="#475569" />
      <rect x="10" y="32" width="80" height="6" rx="2" fill="#334155" />
      <rect x="10" y="44" width="60" height="6" rx="2" fill="#334155" />
    </g>
    {/* Credit card floating */}
    <g transform="translate(300, 40)">
      <rect x="0" y="0" width="70" height="45" rx="6" fill="url(#prodGrad)" />
      <rect x="0" y="12" width="70" height="10" fill="#1e293b" opacity="0.3" />
      <rect x="8" y="30" width="25" height="8" rx="2" fill="#1e293b" opacity="0.3" />
    </g>
    {/* Calendar floating */}
    <g transform="translate(30, 50)">
      <rect x="0" y="0" width="60" height="50" rx="6" fill="#1e293b" />
      <rect x="0" y="0" width="60" height="15" rx="6" fill="url(#prodGrad)" />
      <rect x="0" y="8" width="60" height="7" fill="url(#prodGrad)" />
      <text x="30" y="12" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">DEC</text>
      <text x="30" y="38" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">15</text>
    </g>
  </svg>
);

const illustrations: Record<string, React.FC> = {
  monitoring: MonitoringIllustration,
  security: SecurityIllustration,
  agents: AgentsIllustration,
  management: ManagementIllustration,
  productivity: ProductivityIllustration,
};

export default function Features() {
  const [activeCategory, setActiveCategory] = useState('monitoring');

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
          className="text-center max-w-3xl mx-auto mb-12"
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

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {featureCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Active Category Content */}
        {featureCategories.map((category) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: activeCategory === category.id ? 1 : 0,
              y: activeCategory === category.id ? 0 : 30,
              display: activeCategory === category.id ? 'block' : 'none',
            }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Illustration */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="order-2 lg:order-1"
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 aspect-[4/3]">
                  {illustrations[category.id] && (() => {
                    const IllustrationComponent = illustrations[category.id];
                    return <IllustrationComponent />;
                  })()}
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="order-1 lg:order-2"
              >
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-gradient-to-r ${category.gradient} text-white`}>
                  {category.tagline}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-8">
                  {category.description}
                </p>

                {/* Feature List */}
                <div className="space-y-4">
                  {category.features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="group flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.gradient} bg-opacity-10 flex items-center justify-center flex-shrink-0`}>
                        <feature.icon className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}

        {/* All Features Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Plus Even More Tools
              </h3>
              <p className="text-gray-400 mb-6">
                CloudePulse includes everything MSPs need to run efficiently - all in one affordable platform.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'M365 Licenses',
                  'IP Geolocation',
                  'Time Tracking',
                  'Script Library',
                  'Newsletters',
                  'Reminders',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <p className="text-gray-400 text-sm mb-4 text-center md:text-right">
                Lightweight alternative to expensive enterprise tools
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-2">
                {['BackupRadar', 'Huntress', 'UptimeRobot', 'Pingdom'].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
              <button
                onClick={() => {
                  const element = document.querySelector('#trial');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold rounded-xl hover:shadow-lg transition-shadow"
              >
                Start Free Trial
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
