import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Shield,
  Users,
  Building2,
  Palette,
  FileSignature,
  Key,
  Share2,
  Clock,
  Eye,
  Lock,
  Fingerprint,
  HardDrive,
  Cloud,
  Monitor,
  Globe,
  Network,
  AlertTriangle,
  Mail,
  Bell,
  BarChart3,
  Target,
  GraduationCap,
  FileWarning,
  Webhook,
  Activity,
  ClipboardList,
  UserPlus,
  CheckCircle2,
  ArrowRightLeft,
  Sparkles,
  Settings,
  Calendar,
  ScrollText,
  Code,
  Zap,
  TrendingUp,
  Upload,
  Download,
  ExternalLink,
  MousePointerClick,
  Send,
  FolderOpen,
} from 'lucide-react';
import { Navbar, Footer } from '../components';

// Animated floating elements
const FloatingOrb = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl ${className}`}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

// Animated grid background
const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.5) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(14, 165, 233, 0.5) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
  </div>
);

// Feature Category Data
const featureCategories = [
  {
    id: 'customer-portal',
    title: 'Customer Portal',
    subtitle: 'Give your customers real-time visibility',
    icon: Building2,
    color: 'from-sky-500 to-blue-600',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/20',
    highlight: true,
    description: 'A white-label portal where your customers can see everything - backups, M365, passwords, RMM devices, and more. Fully branded with your logo and colors.',
    features: [
      {
        title: 'White-Label Branding',
        description: 'Your logo, colors, domain, and welcome message. Customers see YOUR brand, not ours.',
        icon: Palette,
      },
      {
        title: 'Live Backup Dashboard',
        description: 'Real-time backup status, success rates, trend charts, and job details.',
        icon: HardDrive,
      },
      {
        title: 'M365 Overview',
        description: 'Users, licenses, mailbox sizes, archive storage, MFA status, and security scores.',
        icon: Cloud,
      },
      {
        title: 'RMM Device List',
        description: 'All devices from Atera, Datto, or NinjaOne with full details and status.',
        icon: Monitor,
      },
      {
        title: 'Security Logs',
        description: 'Firewall and NAS logs from your Log Center, filtered for each customer.',
        icon: Shield,
      },
      {
        title: 'Time Tracking Visibility',
        description: 'Customers see hours logged for their account with yearly charts.',
        icon: Clock,
      },
      {
        title: 'Document Storage',
        description: 'Contracts, agreements, and signed documents available for download.',
        icon: FileSignature,
      },
      {
        title: 'MSP Reports & Updates',
        description: 'Receive RMM status reports, Microsoft bulletins, security updates, and custom reports directly in the portal.',
        icon: Send,
      },
      {
        title: 'Document Library',
        description: 'All documents in one place - reports, invoices, manuals. Customers can download or keep them in the portal.',
        icon: FolderOpen,
      },
      {
        title: 'Website Uptime Status',
        description: 'Live monitoring status and incident history for their websites.',
        icon: Globe,
      },
    ],
  },
  {
    id: 'password-sharing',
    title: 'Password Collaboration',
    subtitle: 'Two-way password sharing with customers',
    icon: Key,
    color: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/20',
    highlight: true,
    description: 'Not just sharing passwords down to customers - they can create, edit, and share passwords too. Full collaboration with bank-grade security.',
    features: [
      {
        title: 'View Shared Passwords',
        description: 'Customers see passwords you\'ve shared with them, with TOTP codes.',
        icon: Eye,
      },
      {
        title: 'Edit Permissions',
        description: 'Grant edit access so customers can update their own credentials.',
        icon: Settings,
      },
      {
        title: 'Customer-Created Passwords',
        description: 'Customers can create their own passwords - visible to your MSP team.',
        icon: Key,
      },
      {
        title: 'Share with Employees',
        description: 'Customers can securely share with their own staff members.',
        icon: Users,
      },
      {
        title: 'Share with Vendors',
        description: 'Time-limited, PIN-protected links for third-party access.',
        icon: Share2,
      },
      {
        title: 'Full Audit Trail',
        description: 'See who viewed, edited, or shared every password and when.',
        icon: ClipboardList,
      },
    ],
  },
  {
    id: 'onboarding',
    title: 'Onboarding Workspace',
    subtitle: 'Collaborative IT discovery with all parties',
    icon: UserPlus,
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    highlight: true,
    description: 'A shared workspace where new customers, outgoing MSPs, and vendors collaborate on IT discovery checklists, document signing, and knowledge transfer.',
    features: [
      {
        title: 'IT Discovery Checklist',
        description: '12 categories with 87+ tasks covering network, AD, M365, security, and more.',
        icon: ClipboardList,
      },
      {
        title: 'Multi-Party Collaboration',
        description: 'Customer, new MSP, outgoing MSP, and vendors all in one workspace.',
        icon: Users,
      },
      {
        title: 'Task Assignment',
        description: 'Assign tasks to the right party - "Document firewall rules → Outgoing MSP".',
        icon: Target,
      },
      {
        title: 'Progress Tracking',
        description: 'Real-time progress bar and status updates for all participants.',
        icon: TrendingUp,
      },
      {
        title: 'Document Signing',
        description: 'Get contracts signed during onboarding, auto-transferred to portal.',
        icon: FileSignature,
      },
      {
        title: 'Discovery Templates',
        description: 'Create reusable templates for different onboarding scenarios.',
        icon: ScrollText,
      },
    ],
  },
  {
    id: 'security',
    title: 'Security & Authentication',
    subtitle: 'Bank-grade security for your portal',
    icon: Lock,
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20',
    description: 'Passwordless authentication, encrypted storage, and comprehensive audit logging.',
    features: [
      {
        title: 'Passwordless Login',
        description: 'OTP codes and magic links - no passwords to forget or compromise.',
        icon: Mail,
      },
      {
        title: 'Passkey Support',
        description: 'WebAuthn/FIDO2 passkeys for the most secure authentication.',
        icon: Fingerprint,
      },
      {
        title: 'AES-256 Encryption',
        description: 'All passwords encrypted with AES-256-GCM before storage.',
        icon: Lock,
      },
      {
        title: 'Session Management',
        description: '24-hour sessions with automatic logout and IP logging.',
        icon: Clock,
      },
      {
        title: 'Audit Logging',
        description: 'Every action logged with timestamp, user, and IP address.',
        icon: ClipboardList,
      },
      {
        title: 'Custom Domains',
        description: 'Use your own domain (portal.yourcompany.com) with SSL.',
        icon: Globe,
      },
    ],
  },
  {
    id: 'phishing',
    title: 'Phishing Simulator',
    subtitle: 'Security awareness training',
    icon: Target,
    color: 'from-violet-500 to-fuchsia-500',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/20',
    description: 'Launch realistic phishing campaigns, track clicks, and deliver instant security training.',
    features: [
      {
        title: 'AI-Generated Templates',
        description: 'Claude AI creates convincing phishing emails in seconds.',
        icon: Sparkles,
      },
      {
        title: 'Landing Page Cloning',
        description: 'Clone any login page instantly for realistic simulations.',
        icon: ExternalLink,
      },
      {
        title: 'Click Tracking',
        description: 'See exactly who clicked, when, and what they entered.',
        icon: Target,
      },
      {
        title: 'Awareness Training',
        description: 'Automatic branded training page when someone fails.',
        icon: GraduationCap,
      },
      {
        title: 'Campaign Analytics',
        description: 'Track improvement over time with detailed reports.',
        icon: BarChart3,
      },
      {
        title: 'Portal Integration',
        description: 'Customers see their training results in the portal.',
        icon: Building2,
      },
    ],
  },
  {
    id: 'monitoring',
    title: 'Proactive Monitoring',
    subtitle: 'Know before your customers do',
    icon: Activity,
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    description: 'Comprehensive monitoring for backups, websites, ports, and more.',
    features: [
      {
        title: 'Backup Monitoring',
        description: 'AI-powered email parsing for any backup solution.',
        icon: HardDrive,
      },
      {
        title: 'Silence Detection',
        description: 'Alert when backups stop reporting - not just when they fail.',
        icon: AlertTriangle,
      },
      {
        title: 'Website Uptime',
        description: 'HTTP checks, SSL expiry, and keyword monitoring.',
        icon: Globe,
      },
      {
        title: 'TCP/Port Monitoring',
        description: 'Track network services and port changes.',
        icon: Network,
      },
      {
        title: 'Smart Alerts',
        description: 'Per-customer notification preferences and routing.',
        icon: Bell,
      },
      {
        title: 'Real-Time Dashboard',
        description: '7-day trends and instant status overview.',
        icon: BarChart3,
      },
    ],
  },
  {
    id: 'ransomware',
    title: 'Ransomware Protection',
    subtitle: 'Detect threats before they spread',
    icon: FileWarning,
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20',
    description: 'Multi-layered defense with canary files, process monitoring, and instant lockdown.',
    features: [
      {
        title: 'FileMon Agent',
        description: 'Lightweight agent detects ransomware via entropy analysis.',
        icon: FileWarning,
      },
      {
        title: 'Canary Files',
        description: 'Hidden tripwire files that detect encryption attempts.',
        icon: AlertTriangle,
      },
      {
        title: 'Instant Lockdown',
        description: 'Auto-disable network shares when attack detected.',
        icon: Lock,
      },
      {
        title: 'Process Monitoring',
        description: 'Early warning on suspicious process behavior.',
        icon: Activity,
      },
      {
        title: 'Remote Update',
        description: 'Push updates to all agents from the dashboard.',
        icon: Download,
      },
      {
        title: 'Attack Simulation',
        description: 'Test your defenses with safe attack simulation.',
        icon: Zap,
      },
    ],
  },
  {
    id: 'log-center',
    title: 'Log Center',
    subtitle: 'Centralized security intelligence',
    icon: Webhook,
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    description: 'Collect logs from firewalls, NAS devices, and any webhook source. AI-powered threat analysis.',
    features: [
      {
        title: 'Webhook Endpoints',
        description: 'Receive logs from any device via webhooks.',
        icon: Webhook,
      },
      {
        title: 'Email Log Parsing',
        description: 'Parse security alerts from email notifications.',
        icon: Mail,
      },
      {
        title: 'AI Threat Analysis',
        description: 'Claude AI analyzes patterns and identifies threats.',
        icon: Sparkles,
      },
      {
        title: 'Cross-Customer Threats',
        description: 'Detect coordinated attacks across multiple customers.',
        icon: Users,
      },
      {
        title: 'IP Geolocation',
        description: 'Map threat origins with geographic visualization.',
        icon: Globe,
      },
      {
        title: 'Severity Alerts',
        description: 'Instant notifications on critical security events.',
        icon: AlertTriangle,
      },
    ],
  },
  {
    id: 'm365',
    title: 'Microsoft 365',
    subtitle: 'Complete M365 visibility',
    icon: Cloud,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    description: 'Connect customer tenants with one click. See users, licenses, security scores, and more.',
    features: [
      {
        title: 'One-Click Connect',
        description: 'OAuth consent flow connects tenants instantly.',
        icon: Zap,
      },
      {
        title: 'License Overview',
        description: 'All licenses with usage and availability.',
        icon: ScrollText,
      },
      {
        title: 'User Management',
        description: 'View all users with MFA status and last login.',
        icon: Users,
      },
      {
        title: 'Mailbox Sizes',
        description: 'Track mailbox and archive storage per user.',
        icon: Mail,
      },
      {
        title: 'Security Score',
        description: 'Microsoft Secure Score with recommendations.',
        icon: Shield,
      },
      {
        title: 'GDAP Support',
        description: 'Partner Center integration for multi-tenant.',
        icon: Building2,
      },
    ],
  },
  {
    id: 'rmm',
    title: 'RMM Integration',
    subtitle: 'Connect your existing tools',
    icon: Monitor,
    color: 'from-teal-500 to-cyan-600',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500/20',
    description: 'Sync devices and alerts from Atera, Datto, or NinjaOne into CloudePulse.',
    features: [
      {
        title: 'Atera Integration',
        description: 'Sync customers, devices, and alerts from Atera.',
        icon: Monitor,
      },
      {
        title: 'Datto RMM',
        description: 'Full Datto device and alert synchronization.',
        icon: Monitor,
      },
      {
        title: 'NinjaOne',
        description: 'Connect NinjaOne for unified device view.',
        icon: Monitor,
      },
      {
        title: 'Customer Mapping',
        description: 'Map RMM customers to CloudePulse customers.',
        icon: ArrowRightLeft,
      },
      {
        title: 'Alert Management',
        description: 'View and dismiss RMM alerts from one place.',
        icon: Bell,
      },
      {
        title: 'Portal Display',
        description: 'Show RMM devices to customers in their portal.',
        icon: Building2,
      },
    ],
  },
  {
    id: 'operations',
    title: 'Operations',
    subtitle: 'Tools for daily MSP work',
    icon: Settings,
    color: 'from-slate-500 to-gray-600',
    bgColor: 'bg-slate-500/10',
    borderColor: 'border-slate-500/20',
    description: 'Time tracking, reminders, newsletters, and customer management.',
    features: [
      {
        title: 'Time Tracking',
        description: 'Running timers, manual entries, and billing status.',
        icon: Clock,
      },
      {
        title: 'Recurring Tasks',
        description: 'Scheduled tasks that auto-create time entries.',
        icon: Calendar,
      },
      {
        title: 'Customer Management',
        description: 'Full CRM with contacts, SLAs, and custom fields.',
        icon: Users,
      },
      {
        title: 'Newsletters',
        description: 'RSS feeds, article reader, and email distribution.',
        icon: Mail,
      },
      {
        title: 'Reminders',
        description: 'Task management with due dates and assignments.',
        icon: Bell,
      },
      {
        title: 'Script Library',
        description: 'Store and AI-optimize PowerShell, Bash, and more.',
        icon: Code,
      },
    ],
  },
  {
    id: 'document-signing',
    title: 'Document Signing',
    subtitle: 'Get contracts signed digitally',
    icon: FileSignature,
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    description: 'Upload PDFs, place signature fields, send for signing, and track completion.',
    features: [
      {
        title: 'PDF Upload',
        description: 'Upload any PDF document for signing.',
        icon: Upload,
      },
      {
        title: 'Signature Placement',
        description: 'Visual editor to place signature fields on PDFs.',
        icon: Target,
      },
      {
        title: 'Email Invitations',
        description: 'Send signing requests with your branding.',
        icon: Mail,
      },
      {
        title: 'Canvas Signatures',
        description: 'Draw, type, or upload signature images.',
        icon: FileSignature,
      },
      {
        title: 'Audit Trail',
        description: 'Full trail with IP addresses and timestamps.',
        icon: ClipboardList,
      },
      {
        title: 'Portal Storage',
        description: 'Signed documents available in customer portal.',
        icon: Building2,
      },
    ],
  },
];

// Mockup Components matching actual CloudePulse design (light theme)
const CustomerPortalMockup = () => (
  <motion.div
    className="relative"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    {/* Glow effect behind mockup */}
    <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-60" />

    <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
      {/* Browser bar */}
      <div className="bg-slate-100 px-4 py-3 flex items-center gap-3 border-b border-slate-200">
        <div className="flex gap-2">
          <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-red-400 cursor-pointer" />
          <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-yellow-400 cursor-pointer" />
          <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-green-400 cursor-pointer" />
        </div>
        <div className="flex-1 bg-white rounded-lg px-4 py-1.5 text-sm text-slate-500 flex items-center gap-2 border border-slate-200">
          <Lock className="w-3 h-3 text-green-500" />
          <span className="text-green-600">https://</span>portal.yourcompany.com
        </div>
      </div>

      {/* Portal layout with sidebar */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-48 bg-slate-50 border-r border-slate-200 p-3">
          <div className="flex items-center gap-2 mb-4 px-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
              <Building2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-semibold text-slate-700">Portal</span>
          </div>

          {/* Nav items */}
          <div className="space-y-1">
            <motion.div whileHover={{ x: 2 }} className="flex items-center gap-2 px-3 py-2 bg-sky-50 text-sky-600 rounded-lg text-sm font-medium">
              <Activity className="w-4 h-4" /> Dashboard
            </motion.div>

            <div className="px-2 pt-3 pb-1 text-xs font-medium text-slate-400 uppercase tracking-wider">Monitoring</div>
            {['Backups', 'Websites', 'RMM'].map((item) => (
              <motion.div key={item} whileHover={{ x: 2 }} className="flex items-center gap-2 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg text-sm cursor-pointer">
                <HardDrive className="w-4 h-4" /> {item}
              </motion.div>
            ))}

            <div className="px-2 pt-3 pb-1 text-xs font-medium text-slate-400 uppercase tracking-wider">Services</div>
            {['Microsoft 365', 'Passwords'].map((item) => (
              <motion.div key={item} whileHover={{ x: 2 }} className="flex items-center gap-2 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg text-sm cursor-pointer">
                {item === 'Microsoft 365' ? <Cloud className="w-4 h-4" /> : <Key className="w-4 h-4" />} {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 bg-slate-50/50">
          {/* Header with company name */}
          <div className="flex items-center justify-between mb-4 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">AC</div>
              <span className="font-semibold text-slate-700">Acme Corporation</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span>Your Data, Protected</span>
            </div>
          </div>

          {/* Status pills */}
          <div className="flex gap-2 mb-4">
            {[
              { label: 'Backups', value: '12 OK', color: 'emerald' },
              { label: 'Websites', value: '4 Up', color: 'emerald' },
              { label: 'Devices', value: '47', color: 'sky' },
            ].map((pill) => (
              <div key={pill.label} className={`px-3 py-1.5 bg-${pill.color}-50 border border-${pill.color}-200 rounded-full text-xs font-medium text-${pill.color}-700`}>
                {pill.label}: <span className="font-bold">{pill.value}</span>
              </div>
            ))}
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { label: 'Backup Success', value: '98.5%', icon: HardDrive, color: 'emerald' },
              { label: 'M365 Users', value: '89', icon: Cloud, color: 'blue' },
              { label: 'Devices Online', value: '45/47', icon: Monitor, color: 'cyan' },
              { label: 'Time This Month', value: '24.5h', icon: Clock, color: 'violet' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="bg-white rounded-xl p-3 border border-slate-200 shadow-sm cursor-pointer hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <stat.icon className={`w-4 h-4 text-${stat.color}-500`} />
                  <span className="text-xs text-slate-500">{stat.label}</span>
                </div>
                <div className="text-xl font-bold text-slate-800">{stat.value}</div>
              </motion.div>
            ))}
          </div>

          {/* Recent activity */}
          <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-sm">
            <div className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
              <Activity className="w-4 h-4 text-sky-500" />
              Recent Activity
            </div>
            <div className="space-y-2">
              {[
                { name: 'Veeam Backup completed', status: 'success', time: '2h ago' },
                { name: 'Website check passed', status: 'success', time: '4h ago' },
                { name: 'New report available', status: 'info', time: '1d ago' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-1.5 text-sm">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${item.status === 'success' ? 'bg-emerald-400' : 'bg-sky-400'}`} />
                    <span className="text-slate-600">{item.name}</span>
                  </div>
                  <span className="text-xs text-slate-400">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const PasswordSharingMockup = () => {
  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect behind mockup */}
      <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 rounded-3xl blur-2xl opacity-60" />

      <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
        {/* Browser bar */}
        <div className="bg-slate-100 px-4 py-3 flex items-center gap-3 border-b border-slate-200">
          <div className="flex gap-2">
            <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-red-400 cursor-pointer" />
            <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-yellow-400 cursor-pointer" />
            <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-green-400 cursor-pointer" />
          </div>
          <div className="flex-1 bg-white rounded-lg px-4 py-1.5 text-sm text-slate-500 border border-slate-200 flex items-center gap-2">
            <Lock className="w-3 h-3 text-green-500" />
            <span className="text-green-600">https://</span>portal.yourcompany.com/passwords
          </div>
        </div>

        <div className="p-6 bg-slate-50">
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <Key className="w-5 h-5 text-slate-400" />
              <span className="text-slate-600 font-medium">5 passwords</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 bg-violet-600 text-white text-sm font-medium rounded-lg flex items-center gap-2 shadow-sm hover:bg-violet-700 transition-colors"
            >
              <Key className="w-4 h-4" /> Add Password
            </motion.button>
          </div>

          {/* Search bar */}
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search passwords..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500"
              readOnly
            />
          </div>

          {/* Filter pills */}
          <div className="flex gap-2 mb-4">
            <motion.button whileHover={{ scale: 1.02 }} className="px-3 py-1.5 bg-violet-100 text-violet-700 rounded-full text-sm font-medium border border-violet-200">
              All <span className="ml-1 bg-violet-200 px-1.5 rounded-full text-xs">5</span>
            </motion.button>
            <motion.button whileHover={{ scale: 1.02 }} className="px-3 py-1.5 bg-white text-slate-600 rounded-full text-sm font-medium border border-slate-200 flex items-center gap-1">
              <Key className="w-3 h-3" /> Login <span className="ml-1 bg-slate-100 px-1.5 rounded-full text-xs">3</span>
            </motion.button>
            <motion.button whileHover={{ scale: 1.02 }} className="px-3 py-1.5 bg-white text-slate-600 rounded-full text-sm font-medium border border-slate-200 flex items-center gap-1">
              <Globe className="w-3 h-3" /> Wi-Fi <span className="ml-1 bg-slate-100 px-1.5 rounded-full text-xs">2</span>
            </motion.button>
          </div>

          {/* Password list */}
          <div className="space-y-2">
            {[
              { name: 'Adobe Cloud User', tags: ['Adobe', 'Creative Cloud'], type: 'Login', icon: Key, canEdit: true },
              { name: 'Office Wi-Fi Network', tags: ['Office'], type: 'Wi-Fi', icon: Globe, canEdit: true },
              { name: 'Server Admin Account', tags: ['Infrastructure', 'Critical'], type: 'Login', icon: Key, canEdit: false },
              { name: 'Guest Wi-Fi', tags: ['Office'], type: 'Wi-Fi', icon: Globe, canEdit: true },
              { name: 'VPN Access', tags: ['Remote', 'Security'], type: 'Login', icon: Key, canEdit: false },
            ].map((pw, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ backgroundColor: 'rgb(248 250 252)' }}
                className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200 cursor-pointer hover:border-violet-300 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${pw.type === 'Wi-Fi' ? 'bg-cyan-50 text-cyan-600' : 'bg-violet-50 text-violet-600'}`}>
                    <pw.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-800">{pw.name}</div>
                    <div className="flex items-center gap-1 mt-0.5">
                      {pw.tags.map((tag, j) => (
                        <span key={j} className="text-xs text-slate-400">{tag}{j < pw.tags.length - 1 ? ',' : ''}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded-md text-xs font-medium ${pw.type === 'Wi-Fi' ? 'bg-cyan-50 text-cyan-600' : 'bg-slate-100 text-slate-600'}`}>
                    {pw.type}
                  </span>
                  {pw.canEdit ? (
                    <motion.div whileHover={{ scale: 1.1 }} className="p-1.5 hover:bg-violet-50 rounded-lg transition-colors" title="You can edit">
                      <Settings className="w-4 h-4 text-slate-400 group-hover:text-violet-500" />
                    </motion.div>
                  ) : (
                    <div className="p-1.5" title="Read-only">
                      <Lock className="w-4 h-4 text-slate-300" />
                    </div>
                  )}
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Share info badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 bg-violet-50 rounded-xl p-3 border border-violet-100"
          >
            <div className="flex items-center gap-3">
              <Share2 className="w-5 h-5 text-violet-500" />
              <div>
                <div className="text-sm font-medium text-violet-700">Secure Sharing Enabled</div>
                <div className="text-xs text-violet-600/70">Share passwords with time limits, PIN protection, or one-time view</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const OnboardingMockup = () => (
  <motion.div
    className="relative"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    {/* Glow effect behind mockup */}
    <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-60" />

    <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
      {/* Browser bar */}
      <div className="bg-slate-100 px-4 py-3 flex items-center gap-3 border-b border-slate-200">
        <div className="flex gap-2">
          <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-red-400 cursor-pointer" />
          <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-yellow-400 cursor-pointer" />
          <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-green-400 cursor-pointer" />
        </div>
        <div className="flex-1 bg-white rounded-lg px-4 py-1.5 text-sm text-slate-500 border border-slate-200 flex items-center gap-2">
          <Lock className="w-3 h-3 text-green-500" />
          <span className="text-green-600">https://</span>app.cloudepulse.com/onboarding/acme-corp
        </div>
      </div>

      <div className="p-6 bg-slate-50">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
              <UserPlus className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg">Acme Corp Onboarding</h3>
              <p className="text-slate-500 text-sm">IT Discovery Workspace</p>
            </div>
          </div>
          <div className="px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium">
            In Progress
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-6 bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="font-semibold text-slate-700">Overall Progress</span>
              <p className="text-slate-400 text-sm">64 of 87 tasks completed</p>
            </div>
            <motion.div
              className="text-3xl font-bold text-emerald-600"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              73%
            </motion.div>
          </div>
          <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '73%' }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Participants */}
        <div className="flex items-center gap-3 mb-5 p-3 bg-white rounded-xl border border-slate-200">
          <span className="text-sm text-slate-500 font-medium">Participants:</span>
          <div className="flex -space-x-2">
            {[
              { name: 'Acme Corp', color: 'from-blue-500 to-indigo-600', initials: 'AC' },
              { name: 'CloudePulse', color: 'from-emerald-500 to-teal-600', initials: 'CP' },
              { name: 'Old IT Vendor', color: 'from-amber-500 to-orange-600', initials: 'OV' },
            ].map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.15, zIndex: 10 }}
                className="relative group cursor-pointer"
              >
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${p.color} flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-md`}>
                  {p.initials}
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                  {p.name}
                </div>
              </motion.div>
            ))}
          </div>
          <span className="text-xs text-slate-400 ml-2">3 parties collaborating</span>
        </div>

        {/* Task categories */}
        <div className="space-y-2">
          {[
            { name: 'Network & Infrastructure', done: 8, total: 8, icon: Network, complete: true },
            { name: 'Microsoft 365 Setup', done: 5, total: 5, icon: Cloud, complete: true },
            { name: 'Security Configuration', done: 4, total: 6, icon: Shield, complete: false },
            { name: 'Documents & Agreements', done: 2, total: 4, icon: FileSignature, complete: false },
          ].map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ backgroundColor: 'rgb(255 255 255)' }}
              className={`rounded-xl p-3 border cursor-pointer transition-all ${cat.complete ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-slate-200 hover:border-emerald-300'}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${cat.complete ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-600'}`}>
                    <cat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`font-medium ${cat.complete ? 'text-emerald-700' : 'text-slate-700'}`}>{cat.name}</span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${cat.complete ? 'bg-emerald-500' : 'bg-sky-500'}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${(cat.done / cat.total) * 100}%` }}
                          transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                        />
                      </div>
                      <span className="text-xs text-slate-400">{cat.done}/{cat.total}</span>
                    </div>
                  </div>
                </div>
                {cat.complete ? (
                  <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                ) : (
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 flex gap-2"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 py-2.5 bg-emerald-600 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 shadow-sm hover:bg-emerald-700 transition-colors"
          >
            <FileSignature className="w-4 h-4" /> Sign Documents
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2.5 bg-white text-slate-700 text-sm font-medium rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            View All Tasks
          </motion.button>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

// Feature Category Card Component
interface FeatureCategoryProps {
  category: typeof featureCategories[0];
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

const FeatureCategoryCard = ({ category, isExpanded, onToggle, index }: FeatureCategoryProps) => {
  const Icon = category.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`relative rounded-2xl border ${category.borderColor} overflow-hidden transition-all duration-300 group`}
    >
      {/* Subtle gradient background */}
      <div className={`absolute inset-0 ${category.bgColor} opacity-50`} />
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent" />

      <button
        onClick={onToggle}
        className="relative w-full p-6 flex items-center gap-5 text-left hover:bg-white/30 transition-colors"
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0 shadow-xl`}
          style={{
            boxShadow: `0 10px 40px -10px ${category.color.includes('sky') ? 'rgba(14, 165, 233, 0.4)' :
              category.color.includes('violet') ? 'rgba(139, 92, 246, 0.4)' :
              category.color.includes('emerald') ? 'rgba(16, 185, 129, 0.4)' :
              category.color.includes('red') ? 'rgba(239, 68, 68, 0.4)' :
              'rgba(100, 116, 139, 0.4)'}`
          }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
            {category.highlight && (
              <motion.span
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg shadow-orange-500/30"
              >
                Popular
              </motion.span>
            )}
          </div>
          <p className="text-slate-600">{category.subtitle}</p>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center shadow-sm border border-slate-200/50 group-hover:bg-white transition-colors`}
        >
          <ChevronDown className="w-5 h-5 text-slate-500" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative px-6 pb-6">
              <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                {category.description}
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.features.map((feature, featureIndex) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: featureIndex * 0.05 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="relative bg-white rounded-xl p-5 shadow-sm border border-slate-200/80 hover:shadow-xl hover:border-slate-300 transition-all cursor-pointer group/card overflow-hidden"
                    >
                      {/* Hover gradient effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover/card:opacity-5 transition-opacity`} />

                      <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg group-hover/card:scale-110 transition-transform`}>
                        <FeatureIcon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="relative font-bold text-slate-900 mb-2">{feature.title}</h4>
                      <p className="relative text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FeaturesPage() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['customer-portal', 'password-sharing', 'onboarding']);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  const toggleCategory = (id: string) => {
    setExpandedCategories(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setExpandedCategories(featureCategories.map(c => c.id));
  };

  const expandAllAndScroll = () => {
    setExpandedCategories(featureCategories.map(c => c.id));
    setTimeout(() => {
      const element = document.querySelector('#all-features');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const collapseAll = () => {
    setExpandedCategories([]);
  };

  // Animated counter for features
  const [featureCount, setFeatureCount] = useState(0);
  useEffect(() => {
    const target = 30;
    const duration = 1500;
    const increment = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setFeatureCount(target);
        clearInterval(timer);
      } else {
        setFeatureCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          {/* Enhanced Background */}
          <div className="absolute inset-0 mesh-gradient" />
          <GridBackground />

          {/* Animated floating orbs */}
          <FloatingOrb className="w-[500px] h-[500px] bg-sky-500/10 top-10 -left-20" delay={0} />
          <FloatingOrb className="w-[400px] h-[400px] bg-violet-500/10 top-40 right-0" delay={1} />
          <FloatingOrb className="w-[300px] h-[300px] bg-emerald-500/10 bottom-0 left-1/3" delay={2} />

          {/* Decorative elements */}
          <div className="absolute top-32 right-20 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-violet-600 rounded-2xl blur-2xl opacity-20" />
              <div className="relative bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-violet-600 flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary-500 to-violet-600 bg-clip-text text-transparent">
                      {featureCount}+
                    </div>
                    <div className="text-slate-600 font-medium">Features</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="container-custom relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-primary-600 mb-8 transition-colors group"
              >
                <motion.div whileHover={{ x: -4 }}>
                  <ArrowLeft className="w-4 h-4" />
                </motion.div>
                <span className="group-hover:underline">Back to Home</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary-500/10 to-violet-500/10 border border-primary-500/20 text-primary-600 text-sm font-semibold rounded-full mb-6"
              >
                <Zap className="w-4 h-4" />
                30+ Powerful Features
              </motion.span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                Everything MSPs Need,{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-primary-500 via-violet-500 to-purple-600 bg-clip-text text-transparent">
                    Nothing They Don't
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-violet-600 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-3xl">
                From customer portals with real-time dashboards to secure password sharing and collaborative onboarding — discover every feature that makes CloudePulse the complete MSP platform.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(14, 165, 233, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/#trial')}
                  className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 flex items-center gap-2"
                >
                  Start Free Trial
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={expandAllAndScroll}
                  className="px-6 py-4 bg-white border-2 border-slate-200 text-slate-700 font-medium rounded-xl hover:border-primary-300 hover:bg-primary-50/50 transition-all flex items-center gap-2"
                >
                  <MousePointerClick className="w-5 h-5" />
                  Expand All Features
                </motion.button>
              </div>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 flex flex-wrap gap-8"
              >
                {[
                  { label: 'Feature Categories', value: '12' },
                  { label: 'Individual Features', value: '30+' },
                  { label: 'Integrations', value: '7+' },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-violet-600" />
                    <span className="text-slate-900 font-bold">{stat.value}</span>
                    <span className="text-slate-500">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Highlighted Features with Mockups */}
        <section className="py-24 bg-slate-950 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px]" />
          </div>

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />

          <div className="container-custom relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-sky-400 text-sm font-semibold rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4" />
                What Sets Us Apart
              </motion.span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Flagship Features
              </h2>
              <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                These are the features that set CloudePulse apart from everything else.
              </p>
            </motion.div>

            {/* Customer Portal */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-500/20 text-sky-400 text-sm font-medium rounded-full mb-4">
                  <Building2 className="w-4 h-4" />
                  Customer Portal
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Real-Time Visibility for Your Customers
                </h3>
                <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                  Give your customers a branded dashboard where they can see everything — live backup status, M365 users and licenses, RMM devices, security logs, and more. They get transparency without calling you.
                </p>
                <ul className="space-y-3">
                  {[
                    'White-label branding with your logo, colors, and domain',
                    'Live backup statistics and trend charts',
                    'M365 overview with users, licenses, and mailbox sizes',
                    'RMM devices from Atera, Datto, or NinjaOne',
                    'MSP reports delivered directly to customer portal',
                    'Document library - reports, invoices, manuals in one place',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <CustomerPortalMockup />
              </motion.div>
            </div>

            {/* Password Sharing */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <PasswordSharingMockup />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-500/20 text-violet-400 text-sm font-medium rounded-full mb-4">
                  <Key className="w-4 h-4" />
                  Password Collaboration
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Two-Way Password Sharing
                </h3>
                <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                  Not just sharing down to customers — they can create, edit, and share passwords too. Full collaboration between MSP and customer with bank-grade security.
                </p>
                <ul className="space-y-3">
                  {[
                    'Customers see passwords you\'ve shared with them',
                    'Grant edit access for customer-managed credentials',
                    'Customers can create passwords visible to your MSP',
                    'Secure sharing with employees and vendors',
                    'Time-limited, PIN-protected share links',
                    'Full audit trail for every action',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Onboarding Workspace */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full mb-4">
                  <UserPlus className="w-4 h-4" />
                  Onboarding Workspace
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Collaborative IT Discovery
                </h3>
                <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                  A shared workspace where new customers, outgoing MSPs, and vendors all collaborate. IT discovery checklists, task assignment, document signing — everything in one place.
                </p>
                <ul className="space-y-3">
                  {[
                    '12 categories with 87+ IT discovery tasks',
                    'Multi-party collaboration in one workspace',
                    'Assign tasks to customer, outgoing MSP, or vendors',
                    'Real-time progress tracking for all participants',
                    'Document signing with auto-transfer to portal',
                    'Create reusable discovery templates',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <OnboardingMockup />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Customer-Centric Integration Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-emerald-600 text-sm font-medium rounded-full mb-6">
                Customer-Centric Design
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Everything Flows From the Customer Card
              </h2>
              <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                No more jumping between apps. Click a customer and see everything — M365 users, backups, devices, passwords, time entries, and logs. All integrated, all in context.
              </p>
            </motion.div>

            {/* Customer Card Flow Mockup */}
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
              >
                {/* Browser bar */}
                <div className="bg-slate-100 px-4 py-3 flex items-center gap-3 border-b border-slate-200">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white rounded-lg px-4 py-1.5 text-sm text-slate-500 border border-slate-200 flex items-center gap-2">
                    <Lock className="w-3 h-3 text-green-500" />
                    app.cloudepulse.com / customers / Acme Corporation
                  </div>
                </div>

                <div className="p-6 bg-slate-50">
                  {/* Customer header */}
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                      AC
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800">Acme Corporation</h3>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span>Org: 912 345 678</span>
                        <span className="text-slate-300">|</span>
                        <span>SLA: Premium</span>
                        <span className="text-slate-300">|</span>
                        <span className="text-emerald-600 font-medium">Active</span>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-sky-500 text-white text-sm font-medium rounded-lg flex items-center gap-2 shadow-sm hover:bg-sky-600 transition-colors">
                      <ExternalLink className="w-4 h-4" /> Open Portal
                    </button>
                  </div>

                  {/* Tabs */}
                  <div className="flex gap-1 mb-6 overflow-x-auto pb-2 bg-white rounded-lg p-1 border border-slate-200">
                    {['Overview', 'M365', 'Backups', 'RMM', 'Passwords', 'Time', 'Logs', 'Documents'].map((tab, i) => (
                      <button
                        key={tab}
                        className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                          i === 0 ? 'bg-sky-100 text-sky-700' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Content grid */}
                  <div className="grid md:grid-cols-3 gap-4">
                    {/* M365 Quick View */}
                    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <Cloud className="w-5 h-5 text-blue-500" />
                        <span className="text-slate-700 font-semibold">Microsoft 365</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-500">Users</span>
                          <span className="text-slate-800 font-medium">89</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Licenses</span>
                          <span className="text-slate-800 font-medium">156</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">MFA Enabled</span>
                          <span className="text-emerald-600 font-medium">94%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Secure Score</span>
                          <span className="text-amber-600 font-medium">78/100</span>
                        </div>
                      </div>
                    </div>

                    {/* Backup Quick View */}
                    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <HardDrive className="w-5 h-5 text-emerald-500" />
                        <span className="text-slate-700 font-semibold">Backups</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-500">Systems</span>
                          <span className="text-slate-800 font-medium">12</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Today</span>
                          <span className="text-emerald-600 font-medium">11 OK, 1 Warning</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Success Rate</span>
                          <span className="text-emerald-600 font-medium">98.2%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Last Check</span>
                          <span className="text-slate-600">2 min ago</span>
                        </div>
                      </div>
                    </div>

                    {/* Time Tracking Quick View */}
                    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="w-5 h-5 text-violet-500" />
                        <span className="text-slate-700 font-semibold">Time This Month</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-500">Logged</span>
                          <span className="text-slate-800 font-medium">24.5 hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Billable</span>
                          <span className="text-emerald-600 font-medium">22 hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">This Week</span>
                          <span className="text-slate-800 font-medium">8.25 hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Running Timer</span>
                          <span className="text-sky-600 font-medium animate-pulse">0:45:12</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Password integration note */}
                  <div className="mt-4 bg-violet-50 border border-violet-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <Key className="w-5 h-5 text-violet-500 mt-0.5" />
                      <div>
                        <div className="text-violet-700 font-medium mb-1">Smart Password Integration</div>
                        <div className="text-sm text-violet-600/80">
                          When creating passwords for this customer, you can select users directly from their M365 tenant.
                          Credentials are automatically linked and customers can manage them in their portal.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Integration highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid md:grid-cols-4 gap-6 mt-12"
            >
              {[
                {
                  icon: ArrowRightLeft,
                  title: 'M365 to Passwords',
                  description: 'Select users from customer\'s O365 when creating passwords',
                },
                {
                  icon: Eye,
                  title: 'Customer Visibility',
                  description: 'Customers see the same data in their portal - always in sync',
                },
                {
                  icon: Clock,
                  title: 'Time Transparency',
                  description: 'Every hour logged is visible to the customer immediately',
                },
                {
                  icon: Shield,
                  title: 'Filtered Security',
                  description: 'Logs and alerts automatically filtered per customer',
                },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* All Features Accordion */}
        <section id="all-features" className="py-24 bg-gradient-to-b from-slate-50 to-white relative">
          {/* Decorative top border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 border border-slate-200 text-slate-700 text-sm font-semibold rounded-full mb-6"
              >
                <ClipboardList className="w-4 h-4" />
                Complete Feature List
              </motion.span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                All Features
              </h2>
              <p className="text-slate-600 text-xl max-w-2xl mx-auto mb-8">
                Click on any category to explore all the features included.
              </p>
              <div className="flex justify-center items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={expandAll}
                  className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 transition-all"
                >
                  Expand All
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={collapseAll}
                  className="px-6 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-all"
                >
                  Collapse All
                </motion.button>
              </div>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {featureCategories.map((category, index) => (
                <FeatureCategoryCard
                  key={category.id}
                  category={category}
                  isExpanded={expandedCategories.includes(category.id)}
                  onToggle={() => toggleCategory(category.id)}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900" />

          {/* Animated gradient orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px]"
            />
            <motion.div
              animate={{
                x: [0, -100, 0],
                y: [0, 50, 0],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[120px]"
            />
          </div>

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '50px 50px',
            }}
          />

          <div className="container-custom relative text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-violet-600 flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary-500/30"
              >
                <Activity className="w-10 h-10 text-white" />
              </motion.div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Ready to Transform Your MSP?
              </h2>
              <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">
                Start your 30-day free trial today. No credit card required. Full access to all features.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/#trial"
                    className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-primary-500/30 hover:shadow-primary-500/40 transition-all"
                  >
                    Start Free Trial
                    <ChevronRight className="w-6 h-6" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/#pricing"
                    className="inline-flex items-center gap-2 px-10 py-5 bg-white/5 backdrop-blur-xl border-2 border-white/10 text-white font-semibold text-lg rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    View Pricing
                  </Link>
                </motion.div>
              </div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center gap-8 text-slate-500"
              >
                {[
                  { icon: Shield, text: 'Bank-grade security' },
                  { icon: Users, text: 'Built for MSPs' },
                  { icon: Clock, text: '30-day free trial' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <item.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
