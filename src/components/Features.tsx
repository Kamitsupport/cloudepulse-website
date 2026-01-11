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
  Building2,
  Fingerprint,
  TrendingUp,
  Mail,
  Shield,
  XCircle,
  Archive,
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
    tagline: 'Real-Time Visibility for Your Customers',
    description: 'Give customers a branded dashboard showing live backup status, M365 licenses, mailbox sizes, security logs, and more. They see everything in real-time without calling you.',
    gradient: 'from-sky-400 via-blue-500 to-violet-600',
    glowColor: 'rgba(56, 189, 248, 0.5)',
    features: [
      { icon: HardDrive, label: 'Live Backup Status', desc: 'Real-time success/failure' },
      { icon: Cloud, label: 'M365 Dashboard', desc: 'Licenses & mailbox sizes' },
      { icon: Shield, label: 'Security Logs', desc: 'Firewall & NAS events' },
      { icon: Activity, label: 'Real-Time Monitor', desc: 'All services at a glance' },
      { icon: Building2, label: 'White-Label', desc: 'Your brand, your domain' },
      { icon: Fingerprint, label: 'Bank-Grade Auth', desc: 'Passkeys & OTP login' },
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
  <div className="relative w-full h-full p-4">
    {/* Backup Status Header - matches PortalBackupStatistics */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-slate-800/80 backdrop-blur rounded-2xl border border-slate-700/50 overflow-hidden"
    >
      {/* Card Header */}
      <div className="px-4 py-3 border-b border-slate-700/50">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white">Backup Status</h3>
            <p className="text-[10px] text-slate-400">Yesterday vs Today</p>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium bg-emerald-500/20 text-emerald-400"
          >
            <TrendingUp className="w-3 h-3" />
            +4.2%
          </motion.div>
        </div>
      </div>

      {/* Donut Charts */}
      <div className="flex items-center justify-center gap-4 py-4 px-2">
        {/* Yesterday */}
        <div className="flex flex-col items-center">
          <p className="text-[10px] font-semibold text-slate-400 mb-2 uppercase tracking-wide">Yesterday</p>
          <div className="relative w-20 h-20">
            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
              <circle cx="18" cy="18" r="14" fill="none" stroke="#1e293b" strokeWidth="4" />
              <motion.circle
                cx="18" cy="18" r="14"
                fill="none"
                stroke="#10B981"
                strokeWidth="4"
                strokeDasharray="88"
                initial={{ strokeDashoffset: 88 }}
                animate={{ strokeDashoffset: 8.8 }}
                transition={{ delay: 0.4, duration: 1 }}
              />
              <motion.circle
                cx="18" cy="18" r="14"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="4"
                strokeDasharray="88"
                strokeDashoffset="-79.2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              />
              <motion.circle
                cx="18" cy="18" r="14"
                fill="none"
                stroke="#EF4444"
                strokeWidth="4"
                strokeDasharray="88"
                strokeDashoffset="-83.6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-lg font-bold text-white">142</span>
              <span className="text-[8px] text-slate-500 uppercase">Jobs</span>
            </div>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-2 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-400"
          >
            90% Success
          </motion.span>
        </div>

        {/* Divider */}
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-slate-700 to-transparent" />

        {/* Today */}
        <div className="flex flex-col items-center">
          <p className="text-[10px] font-semibold text-slate-400 mb-2 uppercase tracking-wide">Today</p>
          <div className="relative w-20 h-20">
            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
              <circle cx="18" cy="18" r="14" fill="none" stroke="#1e293b" strokeWidth="4" />
              <motion.circle
                cx="18" cy="18" r="14"
                fill="none"
                stroke="#10B981"
                strokeWidth="4"
                strokeDasharray="88"
                initial={{ strokeDashoffset: 88 }}
                animate={{ strokeDashoffset: 5.3 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-lg font-bold text-white">156</span>
              <span className="text-[8px] text-slate-500 uppercase">Jobs</span>
            </div>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-2 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-400"
          >
            94% Success
          </motion.span>
        </div>
      </div>

      {/* Legend */}
      <div className="px-4 py-2 bg-slate-900/30 border-t border-slate-700/50">
        <div className="flex items-center justify-center gap-4">
          {[
            { color: '#10B981', label: 'Success', value: 147 },
            { color: '#F59E0B', label: 'Warning', value: 6 },
            { color: '#EF4444', label: 'Failed', value: 3 },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 + i * 0.1 }}
              className="flex items-center gap-1.5"
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-[10px] text-slate-400">{item.label}</span>
              <span className="text-[10px] font-semibold text-white">{item.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>

    {/* Summary Cards - matches PortalSummaryCards */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="mt-3 space-y-2"
    >
      {[
        { icon: HardDrive, label: 'MONITORED', value: '48', status: 'success', badge: 'All OK' },
        { icon: AlertTriangle, label: 'ALERTS', value: '3', status: 'warning', badge: 'Action needed' },
      ].map((card, i) => (
        <motion.div
          key={card.label}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 + i * 0.15 }}
          className="relative bg-slate-800/80 rounded-lg border border-slate-700/50 overflow-hidden"
        >
          <div className={`absolute left-0 top-0 bottom-0 w-1 ${
            card.status === 'success' ? 'bg-emerald-500' : 'bg-amber-500'
          }`} />
          <div className="flex items-center gap-3 pl-4 pr-4 py-2.5">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
              card.status === 'success' ? 'bg-emerald-500/10' : 'bg-amber-500/10'
            }`}>
              <card.icon className={`w-4 h-4 ${
                card.status === 'success' ? 'text-emerald-400' : 'text-amber-400'
              }`} />
            </div>
            <div className="flex-1">
              <p className="text-[9px] font-medium uppercase tracking-wider text-slate-500">{card.label}</p>
              <p className="text-lg font-semibold text-white">{card.value}</p>
            </div>
            <span className={`px-2 py-1 rounded text-[9px] font-medium ${
              card.status === 'success' ? 'bg-emerald-500/15 text-emerald-400' : 'bg-amber-500/15 text-amber-400'
            }`}>
              {card.badge}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const SecurityDashboard = () => (
  <div className="relative w-full h-full p-4">
    {/* Security Logs Header - matches PortalSecurityLogs */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-slate-800/80 backdrop-blur rounded-2xl border border-slate-700/50 overflow-hidden"
    >
      {/* Card Header */}
      <div className="px-4 py-3 border-b border-slate-700/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
            <Shield className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Security Logs</h3>
            <p className="text-[10px] text-slate-400">Last 24 hours</p>
          </div>
        </div>
      </div>

      {/* Severity Summary - matches PortalSecurityLogs */}
      <div className="p-4">
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { severity: 'critical', count: 3, icon: XCircle, bg: 'bg-red-500', bgLight: 'bg-red-500/10', text: 'text-red-400' },
            { severity: 'warning', count: 12, icon: AlertTriangle, bg: 'bg-amber-500', bgLight: 'bg-amber-500/10', text: 'text-amber-400' },
            { severity: 'info', count: 47, icon: Bell, bg: 'bg-blue-500', bgLight: 'bg-blue-500/10', text: 'text-blue-400' },
          ].map((item, i) => (
            <motion.div
              key={item.severity}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl ${item.bgLight}`}
            >
              <div className={`w-7 h-7 rounded-lg ${item.bg} flex items-center justify-center`}>
                <item.icon className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <p className="text-lg font-bold text-white">{item.count}</p>
                <p className={`text-[9px] font-medium ${item.text} capitalize`}>{item.severity}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Events */}
        <h4 className="text-[10px] font-semibold text-slate-400 mb-2 uppercase tracking-wider">Recent Events</h4>
        <div className="space-y-2">
          {[
            { severity: 'critical', icon: XCircle, bg: 'bg-red-500', bgLight: 'bg-red-500/10', subject: 'Failed SSH login from 185.x.x.42', time: '2m ago' },
            { severity: 'warning', icon: AlertTriangle, bg: 'bg-amber-500', bgLight: 'bg-amber-500/10', subject: 'SSL certificate expires in 7 days', time: '15m ago' },
            { severity: 'info', icon: Bell, bg: 'bg-blue-500', bgLight: 'bg-blue-500/10', subject: 'Firewall rule updated by admin', time: '1h ago' },
          ].map((entry, i) => (
            <motion.div
              key={i}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className={`flex items-start gap-2 p-2.5 rounded-xl ${entry.bgLight}`}
            >
              <div className={`flex-shrink-0 w-6 h-6 rounded-lg ${entry.bg} flex items-center justify-center`}>
                <entry.icon className="w-3 h-3 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[10px] font-medium text-white truncate">{entry.subject}</p>
                  <span className="flex-shrink-0 text-[9px] text-slate-500">{entry.time}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>

    {/* FileMon Status Card */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      className="mt-3 bg-slate-800/80 backdrop-blur rounded-xl border border-emerald-500/30 p-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
            <FileWarning className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-sm font-bold text-emerald-400">ALL SECURE</div>
            <div className="text-[10px] text-slate-500">FileMon - 24 agents active</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-white">0</div>
          <div className="text-[9px] text-slate-500">Threats detected</div>
        </div>
      </div>
    </motion.div>
  </div>
);

const ManagementDashboard = () => (
  <div className="relative w-full h-full p-4">
    {/* M365 Summary Header - matches PortalM365Summary */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-slate-800/80 backdrop-blur rounded-2xl border border-slate-700/50 overflow-hidden"
    >
      {/* Tenant Header */}
      <div className="px-4 py-3 border-b border-slate-700/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <Cloud className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-white">Acme Corporation</h3>
            <p className="text-[10px] text-slate-400">acmecorp.onmicrosoft.com</p>
          </div>
          <div className="flex gap-3 text-center">
            <div>
              <div className="text-lg font-bold text-white">156</div>
              <div className="text-[9px] text-slate-500">Users</div>
            </div>
            <div>
              <div className="text-lg font-bold text-emerald-400">89%</div>
              <div className="text-[9px] text-slate-500">MFA</div>
            </div>
          </div>
        </div>
      </div>

      {/* License Progress Bars */}
      <div className="p-4 space-y-3">
        <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mb-2">License Usage</div>
        {[
          { name: 'Microsoft 365 Business Basic', used: 67, total: 100, color: 'from-blue-500 to-blue-400' },
          { name: 'Microsoft 365 Business Premium', used: 45, total: 50, color: 'from-violet-500 to-purple-400' },
          { name: 'Exchange Online Plan 1', used: 23, total: 30, color: 'from-cyan-500 to-teal-400' },
        ].map((license, i) => (
          <motion.div
            key={license.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] text-slate-300 truncate flex-1">{license.name}</span>
              <span className="text-[10px] font-semibold text-white ml-2">{license.used}/{license.total}</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${license.color} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${(license.used / license.total) * 100}%` }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.8, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* User List with Mailbox Sizes - matches PortalM365Summary users section */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="mt-3 bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700/50 overflow-hidden"
    >
      <div className="px-3 py-2 border-b border-slate-700/50 flex items-center justify-between">
        <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Users</span>
        <span className="text-[10px] text-slate-500">Mailbox / Archive</span>
      </div>
      <div className="divide-y divide-slate-700/30">
        {[
          { name: 'John Smith', email: 'john@acme.com', mfa: true, mailbox: 4.2, archive: 12.5 },
          { name: 'Sarah Johnson', email: 'sarah@acme.com', mfa: true, mailbox: 2.8, archive: 8.3 },
          { name: 'Mike Wilson', email: 'mike@acme.com', mfa: false, mailbox: 6.1, archive: null },
        ].map((user, i) => (
          <motion.div
            key={user.email}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 + i * 0.1 }}
            className="px-3 py-2 flex items-center gap-2"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
              <span className="text-[9px] font-bold text-white">{user.name.split(' ').map(n => n[0]).join('')}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-medium text-white truncate">{user.name}</span>
                {user.mfa ? (
                  <Shield className="w-3 h-3 text-emerald-400" />
                ) : (
                  <AlertTriangle className="w-3 h-3 text-amber-400" />
                )}
              </div>
              <span className="text-[9px] text-slate-500 truncate block">{user.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-blue-400" />
                <span className="text-[9px] text-slate-300">{user.mailbox} GB</span>
              </div>
              {user.archive && (
                <div className="flex items-center gap-1">
                  <Archive className="w-3 h-3 text-violet-400" />
                  <span className="text-[9px] text-slate-300">{user.archive} GB</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

const PortalsDashboard = () => (
  <div className="relative w-full h-full p-4">
    {/* Customer Portal Dashboard - shows real-time visibility */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-slate-800/80 backdrop-blur rounded-2xl border border-slate-700/50 overflow-hidden"
    >
      {/* Portal Header with Branding */}
      <div className="px-4 py-3 border-b border-slate-700/50 bg-gradient-to-r from-sky-600/20 to-blue-600/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Acme IT Services</h3>
              <p className="text-[10px] text-slate-400">Customer Portal</p>
            </div>
          </div>
          <div className="flex gap-1">
            {['Dashboard', 'Backups', 'M365', 'Security'].map((tab, i) => (
              <motion.div
                key={tab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className={`px-2 py-1 rounded text-[9px] font-medium ${
                  i === 0 ? 'bg-sky-500/20 text-sky-400' : 'text-slate-500'
                }`}
              >
                {tab}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Portal Dashboard Content */}
      <div className="p-4">
        {/* Status Summary Cards */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {[
            { label: 'Backups', value: '156', status: 'success', icon: HardDrive },
            { label: 'Users', value: '89', status: 'success', icon: Users },
            { label: 'Monitors', value: '24', status: 'success', icon: Activity },
            { label: 'Alerts', value: '2', status: 'warning', icon: Bell },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="bg-slate-900/50 rounded-lg p-2 text-center"
            >
              <card.icon className={`w-4 h-4 mx-auto mb-1 ${
                card.status === 'success' ? 'text-emerald-400' : 'text-amber-400'
              }`} />
              <div className="text-sm font-bold text-white">{card.value}</div>
              <div className="text-[8px] text-slate-500">{card.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Live Service Status */}
        <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mb-2">Live Status</div>
        <div className="space-y-1.5">
          {[
            { name: 'Veeam Backup - All servers', status: 'success', detail: 'Last: 2 hours ago' },
            { name: 'M365 Secure Score', status: 'success', detail: '78/100' },
            { name: 'SSL Certificates', status: 'warning', detail: '1 expires in 14 days' },
            { name: 'Endpoint Protection', status: 'success', detail: '100% coverage' },
          ].map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="flex items-center justify-between p-2 bg-slate-900/30 rounded-lg"
            >
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${
                  service.status === 'success' ? 'bg-emerald-400' : 'bg-amber-400'
                }`} />
                <span className="text-[10px] text-slate-300">{service.name}</span>
              </div>
              <span className="text-[9px] text-slate-500">{service.detail}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>

    {/* Feature highlights */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      className="mt-3 flex gap-2"
    >
      {[
        { icon: Fingerprint, label: 'Bank-Grade Auth' },
        { icon: Building2, label: 'White-Label' },
        { icon: Activity, label: 'Real-Time' },
      ].map((feature, i) => (
        <motion.div
          key={feature.label}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 + i * 0.1 }}
          className="flex-1 bg-slate-800/80 rounded-lg border border-slate-700/50 p-2 text-center"
        >
          <feature.icon className="w-4 h-4 text-sky-400 mx-auto mb-1" />
          <div className="text-[9px] text-slate-400">{feature.label}</div>
        </motion.div>
      ))}
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

  // Auto-advance carousel - 12 seconds so customers can read content
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 12000);
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
          className="relative px-4 lg:px-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation arrows - positioned outside content */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-slate-800/90 backdrop-blur border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all hover:scale-110 shadow-xl"
            aria-label="Previous feature"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-slate-800/90 backdrop-blur border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all hover:scale-110 shadow-xl"
            aria-label="Next feature"
          >
            <ChevronRight className="w-7 h-7" />
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
                      transition={{ duration: 12, ease: 'linear' }}
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
