import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  ArrowRight,
  Shield,
  Zap,
  BarChart3,
  ShieldCheck,
  Target,
  Cloud,
  Users,
  Bell,
  FileWarning,
  MousePointerClick,
  Lock,
  CheckCircle,
} from 'lucide-react';

// Rotating feature highlights for the hero
const featureHighlights = [
  {
    id: 'phishing',
    title: 'Phishing Simulator',
    subtitle: 'Security Awareness',
    description: 'AI-powered phishing campaigns with real-time tracking',
    icon: Target,
    color: 'from-violet-500 to-purple-600',
    stats: [
      { label: 'Campaigns', value: '12' },
      { label: 'Click Rate', value: '18%' },
      { label: 'Trained', value: '94%' },
    ],
  },
  {
    id: 'monitoring',
    title: 'Backup Monitoring',
    subtitle: 'Infrastructure',
    description: 'Never miss a failed or missing backup again',
    icon: Shield,
    color: 'from-cyan-500 to-blue-600',
    stats: [
      { label: 'Backups', value: '156' },
      { label: 'Success', value: '99.2%' },
      { label: 'Alerts', value: '3' },
    ],
  },
  {
    id: 'security',
    title: 'Ransomware Defense',
    subtitle: 'Threat Protection',
    description: 'FileMon agents detect encryption in under 60 seconds',
    icon: FileWarning,
    color: 'from-red-500 to-orange-500',
    stats: [
      { label: 'Agents', value: '48' },
      { label: 'Blocked', value: '127' },
      { label: 'Score', value: '94' },
    ],
  },
  {
    id: 'management',
    title: 'M365 Management',
    subtitle: 'Customer Operations',
    description: 'All licenses, users, and MFA status in one place',
    icon: Cloud,
    color: 'from-emerald-500 to-teal-600',
    stats: [
      { label: 'Tenants', value: '23' },
      { label: 'Users', value: '1.2k' },
      { label: 'MFA', value: '89%' },
    ],
  },
];

export default function Hero() {
  const [activeFeature, setActiveFeature] = useState(0);

  // Auto-rotate features - 8 seconds so customers can read content
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % featureHighlights.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const currentFeature = featureHighlights[activeFeature];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background: `radial-gradient(circle, ${currentFeature.color.includes('violet') ? 'rgba(139,92,246,0.15)' :
              currentFeature.color.includes('cyan') ? 'rgba(6,182,212,0.15)' :
              currentFeature.color.includes('red') ? 'rgba(239,68,68,0.15)' :
              'rgba(16,185,129,0.15)'} 0%, transparent 70%)`,
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)' }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-cyan-400">
                All-in-One MSP Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Monitor. Protect.{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Grow.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed"
            >
              The complete platform for MSPs. Phishing simulations, backup monitoring,
              ransomware protection, M365 management, and customer portals —
              <span className="text-white font-medium"> all in one place</span>.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {[
                { icon: Target, label: 'Phishing Simulator' },
                { icon: Shield, label: 'Backup Monitoring' },
                { icon: FileWarning, label: 'Ransomware Defense' },
                { icon: Cloud, label: 'M365 Integration' },
                { icon: Users, label: 'Customer Portals' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 rounded-full text-sm text-slate-300"
                >
                  <item.icon className="w-3.5 h-3.5 text-cyan-400" />
                  {item.label}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.button
                onClick={() => scrollToSection('#trial')}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 flex items-center gap-2 hover:shadow-cyan-500/40 transition-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('#features')}
                className="px-8 py-4 bg-slate-800/50 border border-slate-700 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                See All Features
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center gap-6 text-sm text-slate-500"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>30-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Setup in minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-cyan-500" />
                <span>No credit card required</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Rotating Feature Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)',
                boxShadow: `0 0 100px ${currentFeature.color.includes('violet') ? 'rgba(139,92,246,0.3)' :
                  currentFeature.color.includes('cyan') ? 'rgba(6,182,212,0.3)' :
                  currentFeature.color.includes('red') ? 'rgba(239,68,68,0.3)' :
                  'rgba(16,185,129,0.3)'}`,
              }}
            >
              {/* Dashboard Header */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`bg-gradient-to-r ${currentFeature.color} p-4`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                        <currentFeature.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">{currentFeature.title}</div>
                        <div className="text-white/70 text-xs">{currentFeature.subtitle}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bell className="w-4 h-4 text-white/70" />
                      <span className="text-white/70 text-xs">Live</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dashboard Content */}
              <div className="p-6">
                {/* Stats Row */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="grid grid-cols-3 gap-4 mb-6"
                  >
                    {currentFeature.stats.map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50"
                      >
                        <div className={`text-2xl font-bold bg-gradient-to-r ${currentFeature.color} bg-clip-text text-transparent`}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                {/* Activity List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 px-1">
                    <span>Recent Activity</span>
                    <span>Status</span>
                  </div>
                  {[
                    { name: 'Veeam Backup - DC01', status: 'success', time: '2m ago' },
                    { name: 'SSL Certificate Check', status: 'success', time: '5m ago' },
                    { name: 'FileMon Alert - Server03', status: 'warning', time: '12m ago' },
                    { name: 'M365 License Sync', status: 'success', time: '1h ago' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center justify-between p-3 bg-slate-800/30 rounded-xl border border-slate-700/30"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            item.status === 'success' ? 'bg-emerald-400' : 'bg-amber-400'
                          }`}
                        />
                        <span className="text-sm text-slate-300">{item.name}</span>
                      </div>
                      <span className="text-xs text-slate-500">{item.time}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Feature selector dots */}
                <div className="flex items-center justify-center gap-2 mt-6 pt-4 border-t border-slate-800">
                  {featureHighlights.map((feature, i) => (
                    <button
                      key={feature.id}
                      onClick={() => setActiveFeature(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === activeFeature
                          ? `w-6 bg-gradient-to-r ${feature.color}`
                          : 'bg-slate-700 hover:bg-slate-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Security Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -left-6 top-1/4 bg-slate-900/90 backdrop-blur rounded-xl shadow-xl p-4 border border-slate-700/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">All Systems</div>
                  <div className="text-xs text-emerald-400">Protected</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Alert Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -right-4 bottom-24 bg-slate-900/90 backdrop-blur rounded-xl shadow-xl p-4 border border-slate-700/50 max-w-[200px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-violet-500/20 rounded-lg flex items-center justify-center">
                  <MousePointerClick className="w-3.5 h-3.5 text-violet-400" />
                </div>
                <span className="text-xs font-semibold text-white">Phishing Alert</span>
              </div>
              <p className="text-xs text-slate-400">3 employees clicked test link. Training initiated.</p>
            </motion.div>

            {/* Floating Lock Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute -bottom-2 left-1/4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full px-4 py-2 shadow-lg shadow-cyan-500/30"
            >
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-white" />
                <span className="text-xs font-semibold text-white">SOC 2 Compliant</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
