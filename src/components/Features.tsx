import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layout,
  Target,
  MousePointerClick,
  GraduationCap,
  BarChart3,
  HardDrive,
  ShieldAlert,
  Network,
  AlertTriangle,
  Globe,
  FileWarning,
  Webhook,
  Users,
  Cloud,
  Bell,
  Activity,
  KeyRound,
  Clock,
  Code,
  Building2,
  ClipboardCheck,
  Lock,
  Fingerprint,
} from 'lucide-react';

// Feature data organized by category for the carousel
const features = [
  {
    id: 'phishing',
    category: 'SECURITY TRAINING',
    title: 'Phishing Simulator',
    tagline: 'Turn Employees Into Your First Line of Defense',
    description: 'Launch realistic phishing simulations powered by Claude AI. Generate convincing emails and landing pages in seconds, track every click, and deliver instant branded security training.',
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    glowColor: 'rgba(139, 92, 246, 0.5)',
    features: [
      { icon: Sparkles, label: 'AI-Generated Templates', desc: 'Create convincing emails in seconds' },
      { icon: Layout, label: 'Landing Page Cloning', desc: 'Clone any login page instantly' },
      { icon: Target, label: 'Campaign Management', desc: 'Target by department or role' },
      { icon: MousePointerClick, label: 'Click Tracking', desc: 'See who clicked and when' },
      { icon: GraduationCap, label: 'Awareness Training', desc: 'Auto-show training on failure' },
      { icon: BarChart3, label: 'Real-Time Analytics', desc: 'Track improvement over time' },
    ],
  },
  {
    id: 'monitoring',
    category: 'INFRASTRUCTURE',
    title: 'Proactive Monitoring',
    tagline: 'Know Before Your Customers Do',
    description: 'Comprehensive monitoring across all critical systems. Get alerted the moment something goes wrong - or when systems go suspiciously silent.',
    gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
    glowColor: 'rgba(6, 182, 212, 0.5)',
    features: [
      { icon: HardDrive, label: 'Backup Monitoring', desc: 'AI-powered email parsing' },
      { icon: AlertTriangle, label: 'Silence Detection', desc: 'Alert when backups go quiet' },
      { icon: Globe, label: 'Website Uptime', desc: 'SSL & keyword monitoring' },
      { icon: Network, label: 'Port Scanning', desc: 'Track network changes' },
      { icon: Activity, label: 'Real-Time Dashboard', desc: '7-day trend analysis' },
      { icon: Bell, label: 'Smart Alerts', desc: 'Per-customer preferences' },
    ],
  },
  {
    id: 'security',
    category: 'THREAT DEFENSE',
    title: 'Ransomware Protection',
    tagline: 'Detect Threats Before They Spread',
    description: 'Multi-layered security with ransomware canary agents, firewall integration, and real-time threat intelligence across all your customers.',
    gradient: 'from-red-500 via-orange-500 to-amber-500',
    glowColor: 'rgba(239, 68, 68, 0.5)',
    features: [
      { icon: FileWarning, label: 'FileMon Agent', desc: 'Entropy-based detection' },
      { icon: Webhook, label: 'Log Center', desc: 'Firewall & NAS webhooks' },
      { icon: ShieldAlert, label: 'Threat Analysis', desc: 'Cross-customer intelligence' },
      { icon: Users, label: 'Attack Correlation', desc: 'Find coordinated threats' },
      { icon: Globe, label: 'IP Geolocation', desc: 'Map threat origins' },
      { icon: AlertTriangle, label: 'Early Warning', desc: 'Combined threat signals' },
    ],
  },
  {
    id: 'management',
    category: 'OPERATIONS',
    title: 'Customer Management',
    tagline: 'Everything in One Place',
    description: 'Microsoft 365 integration, customer database, notifications, and analytics - all the tools MSPs need to run efficiently.',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    glowColor: 'rgba(16, 185, 129, 0.5)',
    features: [
      { icon: Cloud, label: 'M365 Integration', desc: 'One-click tenant connect' },
      { icon: Users, label: 'Customer Database', desc: 'Full CRM capabilities' },
      { icon: KeyRound, label: 'MFA Status', desc: 'Security at a glance' },
      { icon: Activity, label: 'Dashboard', desc: 'Real-time overview' },
      { icon: Bell, label: 'Notifications', desc: 'Smart alert routing' },
      { icon: Clock, label: 'Time Tracking', desc: 'Billable hour logging' },
    ],
  },
  {
    id: 'portals',
    category: 'CLIENT EXPERIENCE',
    title: 'Customer Portals',
    tagline: 'White-Labeled & Professional',
    description: 'Give your customers a branded experience with secure portals for service access and seamless onboarding with transparent handover.',
    gradient: 'from-sky-400 via-blue-500 to-violet-600',
    glowColor: 'rgba(56, 189, 248, 0.5)',
    features: [
      { icon: Building2, label: 'Branded Portal', desc: 'Your domain, your logo' },
      { icon: ClipboardCheck, label: 'Onboarding', desc: 'Collaborative workspace' },
      { icon: Code, label: 'API Access', desc: 'Full integration support' },
      { icon: Lock, label: 'Secure Handover', desc: 'Encrypted credentials' },
      { icon: Fingerprint, label: 'Bank-Grade Auth', desc: 'Passkeys & OTP' },
      { icon: Users, label: 'Multi-Party', desc: 'MSP, customer, vendor' },
    ],
  },
];

// Animated Dashboard Visualizations
const PhishingDashboard = () => (
  <div className="relative w-full h-full">
    {/* Email card */}
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="absolute top-4 left-4 right-[45%] bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700/50 p-4 shadow-2xl"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
          <span className="text-white text-xs font-bold">M</span>
        </div>
        <div className="flex-1">
          <div className="h-2.5 bg-slate-600 rounded w-24 mb-1.5" />
          <div className="h-2 bg-slate-700 rounded w-32" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-2 bg-slate-700 rounded w-full" />
        <div className="h-2 bg-slate-700 rounded w-4/5" />
        <div className="h-2 bg-slate-700 rounded w-3/5" />
      </div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4"
      >
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-lg px-4 py-2 text-white text-xs font-semibold text-center">
          Click Here to Verify
        </div>
      </motion.div>
    </motion.div>

    {/* Stats panel */}
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="absolute top-4 right-4 left-[58%] bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700/50 p-4"
    >
      <div className="text-xs text-slate-400 mb-2 font-medium">Campaign Stats</div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: 'Sent', value: '247', color: 'text-blue-400' },
          { label: 'Opened', value: '189', color: 'text-cyan-400' },
          { label: 'Clicked', value: '43', color: 'text-amber-400' },
          { label: 'Reported', value: '156', color: 'text-emerald-400' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 + i * 0.1 }}
            className="bg-slate-900/50 rounded-lg p-2 text-center"
          >
            <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-[10px] text-slate-500">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Progress chart */}
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="absolute bottom-4 left-4 right-4 bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700/50 p-4"
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs text-slate-400">Training Completion</span>
        <span className="text-sm font-bold text-emerald-400">78%</span>
      </div>
      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '78%' }}
          transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
        />
      </div>
      <div className="flex justify-between mt-2">
        {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((week, i) => (
          <motion.div
            key={week}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 + i * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className={`w-2 h-2 rounded-full ${i < 3 ? 'bg-emerald-400' : 'bg-slate-600'}`} />
            <span className="text-[9px] text-slate-500 mt-1">{week}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Floating warning badge */}
    <motion.div
      initial={{ scale: 0, rotate: -10 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 0.3, type: 'spring' }}
      className="absolute top-2 right-2 bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg shadow-amber-500/30"
    >
      ⚠️ PHISHING TEST
    </motion.div>
  </div>
);

const MonitoringDashboard = () => (
  <div className="relative w-full h-full">
    {/* Server status grid */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="absolute top-4 left-4 right-4 grid grid-cols-4 gap-2"
    >
      {[
        { status: 'ok', name: 'DC-01' },
        { status: 'ok', name: 'WEB-01' },
        { status: 'warning', name: 'SQL-01' },
        { status: 'ok', name: 'MAIL-01' },
        { status: 'ok', name: 'FS-01' },
        { status: 'ok', name: 'AD-01' },
        { status: 'ok', name: 'VPN-01' },
        { status: 'critical', name: 'BKP-01' },
      ].map((server, i) => (
        <motion.div
          key={server.name}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 + i * 0.05 }}
          className={`bg-slate-800/80 backdrop-blur rounded-lg p-2 border ${
            server.status === 'ok' ? 'border-emerald-500/30' :
            server.status === 'warning' ? 'border-amber-500/30' : 'border-red-500/30'
          }`}
        >
          <div className={`w-2 h-2 rounded-full mb-1 ${
            server.status === 'ok' ? 'bg-emerald-400 shadow-emerald-400/50' :
            server.status === 'warning' ? 'bg-amber-400 shadow-amber-400/50 animate-pulse' :
            'bg-red-500 shadow-red-500/50 animate-pulse'
          } shadow-lg`} />
          <div className="text-[10px] text-slate-400 truncate">{server.name}</div>
        </motion.div>
      ))}
    </motion.div>

    {/* Live chart */}
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="absolute top-32 left-4 right-4 bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700/50 p-4"
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs text-slate-400">Uptime (7 days)</span>
        <span className="text-xs font-bold text-emerald-400">99.97%</span>
      </div>
      <svg viewBox="0 0 200 60" className="w-full h-16">
        <defs>
          <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,50 Q25,45 50,35 T100,25 T150,30 T200,20"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.7, duration: 1.5 }}
        />
        <motion.path
          d="M0,50 Q25,45 50,35 T100,25 T150,30 T200,20 V60 H0 Z"
          fill="url(#chartGrad)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        />
      </svg>
    </motion.div>

    {/* Alert feed */}
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="absolute bottom-4 left-4 right-4 bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700/50 p-3"
    >
      <div className="text-xs text-slate-400 mb-2">Recent Alerts</div>
      <div className="space-y-2">
        {[
          { type: 'success', msg: 'Backup completed - FS-01', time: '2m' },
          { type: 'warning', msg: 'SSL expires in 14 days', time: '15m' },
          { type: 'error', msg: 'BKP-01 unreachable', time: '23m' },
        ].map((alert, i) => (
          <motion.div
            key={i}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9 + i * 0.1 }}
            className="flex items-center gap-2 text-[10px]"
          >
            <div className={`w-1.5 h-1.5 rounded-full ${
              alert.type === 'success' ? 'bg-emerald-400' :
              alert.type === 'warning' ? 'bg-amber-400' : 'bg-red-500'
            }`} />
            <span className="text-slate-300 flex-1 truncate">{alert.msg}</span>
            <span className="text-slate-500">{alert.time}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

const SecurityDashboard = () => (
  <div className="relative w-full h-full">
    {/* Threat map */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="absolute top-4 left-4 right-4 bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700/50 p-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-slate-400">Threat Origins (24h)</span>
        <span className="text-xs text-red-400 font-medium">127 blocked</span>
      </div>
      <div className="relative h-24 rounded-lg overflow-hidden bg-slate-900/50">
        {/* Simplified world map */}
        <svg viewBox="0 0 200 80" className="w-full h-full opacity-20">
          <ellipse cx="100" cy="40" rx="95" ry="35" fill="none" stroke="#475569" strokeWidth="0.5" />
          <ellipse cx="100" cy="40" rx="65" ry="25" fill="none" stroke="#475569" strokeWidth="0.5" />
          <ellipse cx="100" cy="40" rx="35" ry="15" fill="none" stroke="#475569" strokeWidth="0.5" />
        </svg>
        {/* Threat dots */}
        {[
          { x: 30, y: 25 },
          { x: 75, y: 35 },
          { x: 120, y: 20 },
          { x: 160, y: 45 },
          { x: 45, y: 55 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.5, 1] }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
            className="absolute w-2 h-2"
            style={{ left: `${pos.x / 2}%`, top: `${pos.y}%` }}
          >
            <div className="w-full h-full bg-red-500 rounded-full animate-ping opacity-75" />
            <div className="absolute inset-0 w-full h-full bg-red-500 rounded-full" />
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* File integrity */}
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="absolute top-40 left-4 right-[52%] bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700/50 p-3"
    >
      <div className="text-xs text-slate-400 mb-2">FileMon Status</div>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
          <FileWarning className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="text-sm font-bold text-emerald-400">SECURE</div>
          <div className="text-[10px] text-slate-500">24 agents active</div>
        </div>
      </div>
    </motion.div>

    {/* Recent threats */}
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="absolute top-40 right-4 left-[52%] bg-slate-800/80 backdrop-blur rounded-xl border border-red-500/20 p-3"
    >
      <div className="text-xs text-slate-400 mb-2">Blocked IPs</div>
      <div className="space-y-1">
        {['185.x.x.42', '91.x.x.156', '45.x.x.78'].map((ip, i) => (
          <motion.div
            key={ip}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            className="flex items-center gap-2 text-[10px]"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="text-slate-400 font-mono">{ip}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Security score */}
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="absolute bottom-4 left-4 right-4 bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700/50 p-4"
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-slate-400 mb-1">Security Score</div>
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">94/100</div>
        </div>
        <div className="w-16 h-16 relative">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <circle cx="18" cy="18" r="16" fill="none" stroke="#1e293b" strokeWidth="3" />
            <motion.circle
              cx="18" cy="18" r="16"
              fill="none"
              stroke="url(#scoreGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="100"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 6 }}
              transition={{ delay: 1, duration: 1.5, ease: 'easeOut' }}
            />
            <defs>
              <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </motion.div>
  </div>
);

const ManagementDashboard = () => (
  <div className="relative w-full h-full">
    {/* Customer cards */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="absolute top-4 left-4 right-4 flex gap-2"
    >
      {[
        { name: 'Acme Corp', users: 45, color: 'from-blue-500 to-cyan-500' },
        { name: 'TechStart', users: 12, color: 'from-violet-500 to-purple-500' },
        { name: 'GlobalTech', users: 89, color: 'from-emerald-500 to-teal-500' },
      ].map((customer, i) => (
        <motion.div
          key={customer.name}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 + i * 0.1 }}
          className="flex-1 bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700/50 p-3"
        >
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${customer.color} flex items-center justify-center mb-2`}>
            <span className="text-white text-xs font-bold">{customer.name[0]}</span>
          </div>
          <div className="text-xs text-slate-300 font-medium truncate">{customer.name}</div>
          <div className="text-[10px] text-slate-500">{customer.users} users</div>
        </motion.div>
      ))}
    </motion.div>

    {/* M365 status */}
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="absolute top-32 left-4 right-4 bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700/50 p-4"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-slate-400">M365 Licenses</span>
        <Cloud className="w-4 h-4 text-blue-400" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Business Basic', used: 67, total: 100 },
          { label: 'Business Premium', used: 23, total: 50 },
          { label: 'E3', used: 12, total: 15 },
        ].map((license, i) => (
          <motion.div
            key={license.label}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7 + i * 0.1 }}
            className="text-center"
          >
            <div className="text-sm font-bold text-slate-200">{license.used}<span className="text-slate-500">/{license.total}</span></div>
            <div className="text-[9px] text-slate-500 truncate">{license.label}</div>
            <div className="h-1 bg-slate-700 rounded-full mt-1 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(license.used / license.total) * 100}%` }}
                transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Activity feed */}
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="absolute bottom-4 left-4 right-4 bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700/50 p-3"
    >
      <div className="text-xs text-slate-400 mb-2">Recent Activity</div>
      <div className="space-y-2">
        {[
          { action: 'MFA enabled', user: 'john@acme.com', time: '5m' },
          { action: 'New user added', user: 'sarah@tech.io', time: '12m' },
          { action: 'License assigned', user: 'mike@global.co', time: '1h' },
        ].map((activity, i) => (
          <motion.div
            key={i}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 + i * 0.1 }}
            className="flex items-center gap-2 text-[10px]"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-slate-300">{activity.action}</span>
            <span className="text-slate-500 truncate flex-1">{activity.user}</span>
            <span className="text-slate-600">{activity.time}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

const PortalsDashboard = () => (
  <div className="relative w-full h-full">
    {/* Portal preview */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="absolute top-4 left-4 right-4 bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700/50 overflow-hidden"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/50 border-b border-slate-700/50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
        </div>
        <div className="flex-1 bg-slate-800 rounded px-2 py-0.5 text-[9px] text-slate-400 font-mono">
          portal.yourmsp.com
        </div>
      </div>
      {/* Portal content */}
      <div className="p-3">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">Y</span>
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-200">Your MSP</div>
            <div className="text-[9px] text-slate-500">Customer Portal</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {['Services', 'Tickets', 'Invoices', 'Documents'].map((item, i) => (
            <motion.div
              key={item}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="bg-slate-900/50 rounded-lg p-2 text-center"
            >
              <div className="text-[10px] text-slate-400">{item}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>

    {/* Onboarding progress */}
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="absolute bottom-4 left-4 right-4 bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700/50 p-4"
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs text-slate-400">Onboarding Progress</span>
        <span className="text-xs font-bold text-emerald-400">73%</span>
      </div>
      <div className="space-y-2">
        {[
          { task: 'Credentials received', done: true },
          { task: 'DNS transferred', done: true },
          { task: 'M365 connected', done: true },
          { task: 'Final review', done: false },
        ].map((task, i) => (
          <motion.div
            key={task.task}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            className="flex items-center gap-2"
          >
            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
              task.done ? 'border-emerald-500 bg-emerald-500/20' : 'border-slate-600'
            }`}>
              {task.done && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-2 h-2 bg-emerald-400 rounded-full"
                />
              )}
            </div>
            <span className={`text-[10px] ${task.done ? 'text-slate-400' : 'text-slate-500'}`}>
              {task.task}
            </span>
          </motion.div>
        ))}
      </div>
      {/* Participant avatars */}
      <div className="flex items-center gap-1 mt-3 pt-3 border-t border-slate-700/50">
        <span className="text-[9px] text-slate-500 mr-2">Team:</span>
        {['M', 'C', 'V'].map((initial, i) => (
          <motion.div
            key={initial}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2 + i * 0.1 }}
            className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-white ${
              i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-amber-500' : 'bg-purple-500'
            }`}
          >
            {initial}
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

const dashboards: Record<string, React.FC> = {
  phishing: PhishingDashboard,
  monitoring: MonitoringDashboard,
  security: SecurityDashboard,
  management: ManagementDashboard,
  portals: PortalsDashboard,
};

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }, [activeIndex]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % features.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const activeFeature = features[activeIndex];
  const DashboardComponent = dashboards[activeFeature.id];

  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden bg-slate-950">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container-custom relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-1.5 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full mb-6"
          >
            Powerful Features
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            What Your RMM{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Forgot to Build
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            One platform to monitor, protect, and manage all your IT services.
            Designed specifically for MSPs who want to work smarter.
          </p>
        </motion.div>

        {/* Main carousel container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/80 transition-all hover:scale-110"
            aria-label="Previous feature"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/80 transition-all hover:scale-110"
            aria-label="Next feature"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left: Dashboard visualization */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.9) 100%)`,
                  boxShadow: `0 0 80px ${activeFeature.glowColor}, inset 0 1px 0 rgba(255,255,255,0.05)`,
                }}
              >
                {/* Glowing border */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, transparent 40%, ${activeFeature.glowColor} 100%)`,
                    padding: '1px',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'xor',
                    WebkitMaskComposite: 'xor',
                  }}
                />

                {/* Dashboard content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: direction * 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -direction * 50 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    {DashboardComponent && <DashboardComponent />}
                  </motion.div>
                </AnimatePresence>

                {/* Scan line effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(transparent 50%, rgba(0,0,0,0.1) 50%)',
                    backgroundSize: '100% 4px',
                  }}
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>

            {/* Right: Feature details */}
            <motion.div
              className="order-1 lg:order-2 flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Category badge */}
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-gradient-to-r ${activeFeature.gradient} text-white shadow-lg`}>
                    {activeFeature.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    {activeFeature.title}
                  </h3>

                  {/* Tagline */}
                  <p className={`text-lg font-medium mb-4 bg-gradient-to-r ${activeFeature.gradient} bg-clip-text text-transparent`}>
                    {activeFeature.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    {activeFeature.description}
                  </p>

                  {/* Feature grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {activeFeature.features.map((feature, index) => (
                      <motion.div
                        key={feature.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        className="group flex items-start gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/80 transition-all"
                      >
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${activeFeature.gradient} bg-opacity-20 flex items-center justify-center flex-shrink-0`}>
                          <feature.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-slate-200 truncate">
                            {feature.label}
                          </div>
                          <div className="text-xs text-slate-500 truncate">
                            {feature.desc}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Progress bar */}
          <div className="mt-8 flex items-center justify-center gap-4">
            {/* Dots navigation */}
            <div className="flex items-center gap-2">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => goToSlide(index)}
                  className={`relative h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-8' : 'w-2'
                  }`}
                  style={{
                    background: index === activeIndex
                      ? `linear-gradient(90deg, ${feature.glowColor.replace('0.5', '1')}, ${feature.glowColor.replace('0.5', '0.6')})`
                      : 'rgba(71, 85, 105, 0.5)',
                  }}
                  aria-label={`Go to ${feature.title}`}
                >
                  {index === activeIndex && !isPaused && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.3)' }}
                      initial={{ scaleX: 0, transformOrigin: 'left' }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 6, ease: 'linear' }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 text-sm mb-4">
            All features included in every plan. No hidden costs.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#trial');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-105"
          >
            Start Free Trial
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
