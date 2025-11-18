import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "CloudePulse has transformed how we manage backups for our clients. We used to spend hours checking reports manually. Now it's all automated and we get instant alerts.",
    author: 'Michael Chen',
    role: 'CEO',
    company: 'TechShield MSP',
    avatar: 'MC',
    rating: 5,
  },
  {
    quote:
      "The ransomware detection feature alone is worth the price. We caught an early indicator at a client site and prevented what could have been a disaster.",
    author: 'Sarah Johnson',
    role: 'CTO',
    company: 'SecureIT Solutions',
    avatar: 'SJ',
    rating: 5,
  },
  {
    quote:
      "Finally, a monitoring platform that understands MSPs. The reports are beautiful and our clients love seeing the value we provide.",
    author: 'David Park',
    role: 'Founder',
    company: 'NextGen Networks',
    avatar: 'DP',
    rating: 5,
  },
];

const stats = [
  { value: '500+', label: 'MSPs Trust Us' },
  { value: '10,000+', label: 'Systems Monitored' },
  { value: '99.9%', label: 'Uptime' },
  { value: '< 1min', label: 'Alert Time' },
];

const logos = [
  'TechShield',
  'SecureIT',
  'NextGen',
  'CloudFirst',
  'DataGuard',
  'NetSafe',
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />

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
            Trusted by MSPs
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our{' '}
            <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-lg text-gray-600">
            Join hundreds of MSPs who have transformed their operations with CloudePulse.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="stat-number">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-100/50 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary-600" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-center text-sm text-gray-500 mb-8">
            Trusted by leading MSPs worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-xl font-bold text-gray-300 hover:text-gray-400 transition-colors"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
