import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import {
  Send,
  CheckCircle,
  AlertCircle,
  Building2,
  User,
  Mail,
  Phone,
  Users,
  Loader2,
} from 'lucide-react';

interface FormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  numberOfCustomers: string;
  acceptedTerms: boolean;
}

interface FormErrors {
  companyName?: string;
  contactName?: string;
  email?: string;
  numberOfCustomers?: string;
  acceptedTerms?: string;
}

export default function TrialSignupForm() {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    numberOfCustomers: '',
    acceptedTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.contactName.trim()) {
      newErrors.contactName = 'Contact name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.numberOfCustomers) {
      newErrors.numberOfCustomers = 'Please select the number of customers';
    }

    if (!formData.acceptedTerms) {
      newErrors.acceptedTerms = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      if (!db) {
        throw new Error('Firebase not configured');
      }

      const now = Timestamp.now();
      const trialEndsAt = Timestamp.fromDate(
        new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days from now
      );

      await addDoc(collection(db, 'trial_signups'), {
        companyName: formData.companyName.trim(),
        contactName: formData.contactName.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim() || null,
        numberOfCustomers: parseInt(formData.numberOfCustomers),
        acceptedTerms: formData.acceptedTerms,
        createdAt: now,
        status: 'pending',
        trialEndsAt: trialEndsAt,
      });

      setSubmitStatus('success');
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        numberOfCustomers: '',
        acceptedTerms: false,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      id="trial"
      className="section-padding bg-gradient-to-b from-white to-primary-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-100 rounded-full blur-3xl opacity-30" />

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
            Start Your Journey
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Start Your{' '}
            <span className="gradient-text">30-Day Free Trial</span>
          </h2>
          <p className="text-lg text-gray-600">
            No credit card required. Get full access to all features.
            We'll help you get started.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-8 md:p-12 border border-gray-100">
            <AnimatePresence mode="wait">
              {submitStatus === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Welcome to CloudePulse!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We've received your trial request. Check your email for
                    login instructions. We'll be in touch within 24 hours to
                    help you get started.
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="text-primary-600 font-semibold hover:text-primary-700"
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Company Name */}
                  <div>
                    <label htmlFor="companyName" className="form-label">
                      <span className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        Company Name *
                      </span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Your MSP company name"
                      className={`form-input ${
                        errors.companyName ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.companyName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.companyName}
                      </p>
                    )}
                  </div>

                  {/* Contact Name */}
                  <div>
                    <label htmlFor="contactName" className="form-label">
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Contact Name *
                      </span>
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`form-input ${
                        errors.contactName ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.contactName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.contactName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="form-label">
                      <span className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email Address *
                      </span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={`form-input ${
                        errors.email ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone (Optional) */}
                  <div>
                    <label htmlFor="phone" className="form-label">
                      <span className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Phone Number (Optional)
                      </span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="form-input"
                    />
                  </div>

                  {/* Number of Customers */}
                  <div>
                    <label htmlFor="numberOfCustomers" className="form-label">
                      <span className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Number of Customers *
                      </span>
                    </label>
                    <select
                      id="numberOfCustomers"
                      name="numberOfCustomers"
                      value={formData.numberOfCustomers}
                      onChange={handleChange}
                      className={`form-input ${
                        errors.numberOfCustomers ? 'border-red-500' : ''
                      }`}
                    >
                      <option value="">Select range</option>
                      <option value="10">1-10 customers</option>
                      <option value="25">11-25 customers</option>
                      <option value="50">26-50 customers</option>
                      <option value="100">51-100 customers</option>
                      <option value="200">100+ customers</option>
                    </select>
                    {errors.numberOfCustomers && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.numberOfCustomers}
                      </p>
                    )}
                  </div>

                  {/* Terms Acceptance */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="acceptedTerms"
                        checked={formData.acceptedTerms}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-600">
                        I agree to the{' '}
                        <a
                          href="/terms"
                          className="text-primary-600 hover:text-primary-700 font-medium"
                        >
                          Terms of Service
                        </a>{' '}
                        and{' '}
                        <a
                          href="/privacy"
                          className="text-primary-600 hover:text-primary-700 font-medium"
                        >
                          Privacy Policy
                        </a>
                        . *
                      </span>
                    </label>
                    {errors.acceptedTerms && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.acceptedTerms}
                      </p>
                    )}
                  </div>

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-xl"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">{errorMessage}</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/30 btn-hover-effect flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Start Free Trial
                      </>
                    )}
                  </motion.button>

                  {/* Additional Info */}
                  <p className="text-center text-sm text-gray-500">
                    No credit card required. Your trial starts immediately after signup.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
