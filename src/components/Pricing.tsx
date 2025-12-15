import { motion } from 'framer-motion';
import { Check, Sparkles, Mail } from 'lucide-react';

const plans = [
  {
    name: 'Professional',
    description: 'Everything you need to monitor your MSP',
    price: 50,
    features: [
      'Up to 50 customers',
      'Up to 100 backup systems',
      'All monitoring features',
      'FileMon & Backup agents',
      'In-app push notifications',
      'Dashboard & analytics',
      'Email support',
      '30-day data retention',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For larger MSPs with more clients',
    price: 100,
    features: [
      'Up to 100 customers',
      'Up to 500 backup systems',
      'All monitoring features',
      'FileMon & Backup agents',
      'In-app push notifications',
      'Dashboard & analytics',
      'Priority support',
      '90-day data retention',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-50" />

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
            Simple Pricing
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Two Plans.{' '}
            <span className="gradient-text">No Surprises.</span>
          </h2>
          <p className="text-lg text-gray-600">
            Start with a 30-day free trial. No credit card required.
            Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative bg-white rounded-3xl p-8 border ${
                plan.popular
                  ? 'border-primary-500 shadow-xl shadow-primary-500/20'
                  : 'border-gray-200 shadow-lg'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="popular-badge flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-500">/month</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                onClick={() => {
                  const element = document.querySelector('#trial');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-500/30 btn-hover-effect'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Need More? Contact Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              Need More Than 100 Customers?
            </h3>
            <p className="text-gray-400 mb-4">
              We offer custom plans for larger MSPs. Get in touch and we'll find the right solution for you.
            </p>
            <a
              href="mailto:support@cloudepulse.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact support@cloudepulse.com
            </a>
          </div>
        </motion.div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 rounded-full">
            <Check className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-green-800">
              30-day money-back guarantee on all plans
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
