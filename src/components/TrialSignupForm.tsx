import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  CheckCircle,
  AlertCircle,
  Building2,
  User,
  Mail,
  Phone,
  Loader2,
  Globe,
  FileText,
} from 'lucide-react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import type { CountryCode } from 'libphonenumber-js';
import 'react-phone-number-input/style.css';

// Country names mapping
const countryNames: Record<string, string> = {
  AF: 'Afghanistan', AL: 'Albania', DZ: 'Algeria', AD: 'Andorra', AO: 'Angola',
  AR: 'Argentina', AM: 'Armenia', AU: 'Australia', AT: 'Austria', AZ: 'Azerbaijan',
  BH: 'Bahrain', BD: 'Bangladesh', BY: 'Belarus', BE: 'Belgium', BZ: 'Belize',
  BJ: 'Benin', BT: 'Bhutan', BO: 'Bolivia', BA: 'Bosnia and Herzegovina', BW: 'Botswana',
  BR: 'Brazil', BN: 'Brunei', BG: 'Bulgaria', BF: 'Burkina Faso', BI: 'Burundi',
  KH: 'Cambodia', CM: 'Cameroon', CA: 'Canada', CV: 'Cape Verde', CF: 'Central African Republic',
  TD: 'Chad', CL: 'Chile', CN: 'China', CO: 'Colombia', KM: 'Comoros',
  CG: 'Congo', CD: 'DR Congo', CR: 'Costa Rica', CI: 'Ivory Coast', HR: 'Croatia',
  CU: 'Cuba', CY: 'Cyprus', CZ: 'Czech Republic', DK: 'Denmark', DJ: 'Djibouti',
  DO: 'Dominican Republic', EC: 'Ecuador', EG: 'Egypt', SV: 'El Salvador', GQ: 'Equatorial Guinea',
  ER: 'Eritrea', EE: 'Estonia', SZ: 'Eswatini', ET: 'Ethiopia', FJ: 'Fiji',
  FI: 'Finland', FR: 'France', GA: 'Gabon', GM: 'Gambia', GE: 'Georgia',
  DE: 'Germany', GH: 'Ghana', GR: 'Greece', GT: 'Guatemala', GN: 'Guinea',
  GW: 'Guinea-Bissau', GY: 'Guyana', HT: 'Haiti', HN: 'Honduras', HK: 'Hong Kong',
  HU: 'Hungary', IS: 'Iceland', IN: 'India', ID: 'Indonesia', IR: 'Iran',
  IQ: 'Iraq', IE: 'Ireland', IL: 'Israel', IT: 'Italy', JM: 'Jamaica',
  JP: 'Japan', JO: 'Jordan', KZ: 'Kazakhstan', KE: 'Kenya', KW: 'Kuwait',
  KG: 'Kyrgyzstan', LA: 'Laos', LV: 'Latvia', LB: 'Lebanon', LS: 'Lesotho',
  LR: 'Liberia', LY: 'Libya', LI: 'Liechtenstein', LT: 'Lithuania', LU: 'Luxembourg',
  MO: 'Macau', MG: 'Madagascar', MW: 'Malawi', MY: 'Malaysia', MV: 'Maldives',
  ML: 'Mali', MT: 'Malta', MR: 'Mauritania', MU: 'Mauritius', MX: 'Mexico',
  MD: 'Moldova', MC: 'Monaco', MN: 'Mongolia', ME: 'Montenegro', MA: 'Morocco',
  MZ: 'Mozambique', MM: 'Myanmar', NA: 'Namibia', NP: 'Nepal', NL: 'Netherlands',
  NZ: 'New Zealand', NI: 'Nicaragua', NE: 'Niger', NG: 'Nigeria', MK: 'North Macedonia',
  NO: 'Norway', OM: 'Oman', PK: 'Pakistan', PA: 'Panama', PG: 'Papua New Guinea',
  PY: 'Paraguay', PE: 'Peru', PH: 'Philippines', PL: 'Poland', PT: 'Portugal',
  PR: 'Puerto Rico', QA: 'Qatar', RO: 'Romania', RU: 'Russia', RW: 'Rwanda',
  SA: 'Saudi Arabia', SN: 'Senegal', RS: 'Serbia', SG: 'Singapore', SK: 'Slovakia',
  SI: 'Slovenia', SO: 'Somalia', ZA: 'South Africa', KR: 'South Korea', SS: 'South Sudan',
  ES: 'Spain', LK: 'Sri Lanka', SD: 'Sudan', SR: 'Suriname', SE: 'Sweden',
  CH: 'Switzerland', SY: 'Syria', TW: 'Taiwan', TJ: 'Tajikistan', TZ: 'Tanzania',
  TH: 'Thailand', TL: 'Timor-Leste', TG: 'Togo', TN: 'Tunisia', TR: 'Turkey',
  TM: 'Turkmenistan', UG: 'Uganda', UA: 'Ukraine', AE: 'United Arab Emirates', GB: 'United Kingdom',
  US: 'United States', UY: 'Uruguay', UZ: 'Uzbekistan', VE: 'Venezuela', VN: 'Vietnam',
  YE: 'Yemen', ZM: 'Zambia', ZW: 'Zimbabwe',
};

interface FormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  country: string;
  countryCode: string;
  poNumber: string;
  acceptedTerms: boolean;
}

interface FormErrors {
  companyName?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  acceptedTerms?: string;
}

export default function TrialSignupForm() {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    countryCode: '',
    poNumber: '',
    acceptedTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [defaultCountry, setDefaultCountry] = useState<CountryCode>('US');

  // Detect user's country from IP on mount
  useEffect(() => {
    const detectCountry = async () => {
      try {
        // Using ipapi.co free tier for IP geolocation
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        if (data.country_code) {
          const countryCode = data.country_code as CountryCode;
          setDefaultCountry(countryCode);
          setFormData(prev => ({
            ...prev,
            countryCode: countryCode,
            country: countryNames[countryCode] || countryCode,
          }));
        }
      } catch (error) {
        console.error('Could not detect country:', error);
        // Default to Norway if detection fails
        setDefaultCountry('NO');
        setFormData(prev => ({
          ...prev,
          countryCode: 'NO',
          country: 'Norway',
        }));
      }
    };

    detectCountry();
  }, []);

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

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!isValidPhoneNumber(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
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
      const response = await fetch('/api/submit-trial', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          companyName: formData.companyName.trim(),
          contactName: formData.contactName.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone || null,
          country: formData.country || null,
          countryCode: formData.countryCode || null,
          poNumber: formData.poNumber.trim() || null,
          acceptedTerms: formData.acceptedTerms,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit');
      }

      setSubmitStatus('success');
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        country: formData.country, // Keep detected country
        countryCode: formData.countryCode,
        poNumber: '',
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

  const handlePhoneChange = (value: string | undefined) => {
    setFormData(prev => ({
      ...prev,
      phone: value || '',
    }));

    // Clear phone error
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: undefined }));
    }
  };

  const handleCountryChange = (country: CountryCode | undefined) => {
    if (country) {
      setFormData(prev => ({
        ...prev,
        countryCode: country,
        country: countryNames[country] || country,
      }));
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

                  {/* Phone with Country Flag */}
                  <div>
                    <label htmlFor="phone" className="form-label">
                      <span className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Phone Number *
                      </span>
                    </label>
                    <PhoneInput
                      international
                      countryCallingCodeEditable={false}
                      defaultCountry={defaultCountry}
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      onCountryChange={handleCountryChange}
                      className={`form-input-phone ${
                        errors.phone ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Country (Auto-populated from phone, but editable) */}
                  <div>
                    <label htmlFor="country" className="form-label">
                      <span className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Country
                      </span>
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.countryCode}
                      onChange={(e) => {
                        const code = e.target.value;
                        setFormData(prev => ({
                          ...prev,
                          countryCode: code,
                          country: countryNames[code] || code,
                        }));
                      }}
                      className="form-input"
                    >
                      {Object.entries(countryNames).sort((a, b) => a[1].localeCompare(b[1])).map(([code, name]) => (
                        <option key={code} value={code}>{name}</option>
                      ))}
                    </select>
                    <p className="text-xs text-gray-500 mt-1">
                      Auto-detected from phone, but you can change it
                    </p>
                  </div>

                  {/* PO Number (Optional) */}
                  <div>
                    <label htmlFor="poNumber" className="form-label">
                      <span className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        PO Number (Optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      id="poNumber"
                      name="poNumber"
                      value={formData.poNumber}
                      onChange={handleChange}
                      placeholder="Purchase order reference"
                      className="form-input"
                    />
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

      {/* Custom styles for phone input */}
      <style>{`
        .form-input-phone {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .form-input-phone .PhoneInputCountry {
          display: flex;
          align-items: center;
          padding: 0.5rem;
          background: #f9fafb;
          border-radius: 0.5rem 0 0 0.5rem;
          border: 1px solid #e5e7eb;
          border-right: none;
        }
        .form-input-phone .PhoneInputCountryIcon {
          width: 1.5rem;
          height: 1rem;
          border-radius: 2px;
        }
        .form-input-phone .PhoneInputCountrySelectArrow {
          margin-left: 0.25rem;
          color: #6b7280;
        }
        .form-input-phone input {
          flex: 1;
          padding: 0.75rem 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 0 0.5rem 0.5rem 0;
          font-size: 1rem;
          transition: all 0.2s;
        }
        .form-input-phone input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        .form-input-phone.border-red-500 input {
          border-color: #ef4444;
        }
      `}</style>
    </section>
  );
}
