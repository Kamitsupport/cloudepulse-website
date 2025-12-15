import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small MSPs getting started',
    monthlyPrice: 49,
    annualPrice: 39,
    features: [
      'Up to 10 customers',
      'Up to 50 backup systems',
      'In-app push notifications',
      'Basic reports',
      'Email support',
      '7-day data retention',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'For growing MSPs who need more power',
    monthlyPrice: 149,
    annualPrice: 119,
    features: [
      'Up to 50 customers',
      'Up to 250 backup systems',
      'In-app push notifications',
      'Advanced reports & analytics',
      'Priority support',
      '30-day data retention',
      'Custom branding',
      'API access',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large MSPs with custom needs',
    monthlyPrice: 399,
    annualPrice: 319,
    features: [
      'Unlimited customers',
      'Unlimited backup systems',
      'In-app push notifications',
      'White-label solution',
      'Dedicated support',
      '90-day data retention',
      'Custom integrations',
      'SLA guarantee',
      'On-premise option',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

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
            Choose Your{' '}
            <span className="gradient-text">Perfect Plan</span>
          </h2>
          <p className="text-lg text-gray-600">
            Start with a 30-day free trial on any plan. No credit card required.
            Cancel anytime.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span
            className={`text-sm font-medium ${
              !isAnnual ? 'text-gray-900' : 'text-gray-500'
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              isAnnual ? 'bg-primary-500' : 'bg-gray-300'
            }`}
          >
            <motion.div
              className="absolute top-1 w-5 h-5 bg-white rounded-full shadow"
              animate={{ left: isAnnual ? '30px' : '4px' }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
          <span
            className={`text-sm font-medium ${
              isAnnual ? 'text-gray-900' : 'text-gray-500'
            }`}
          >
            Annual
          </span>
          {isAnnual && (
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
              Save 20%
            </span>
          )}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative bg-white rounded-3xl p-8 border ${
                plan.popular
                  ? 'border-primary-500 shadow-xl shadow-primary-500/20 scale-105'
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
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500">/month</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-gray-500 mt-1">
                    Billed annually (${plan.annualPrice * 12}/year)
                  </p>
                )}
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

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
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
