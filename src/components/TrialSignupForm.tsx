import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle,
  AlertCircle,
  Building2,
  User,
  Mail,
  Phone,
  Loader2,
  Globe,
  FileText,
  Search,
  MapPin,
  ChevronDown,
  Sparkles,
  ArrowRight,
  X,
} from 'lucide-react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import type { CountryCode } from 'libphonenumber-js';
import 'react-phone-number-input/style.css';

// Country options - prioritized list with company registry support
const COUNTRIES = [
  { code: 'NO', name: 'Norway' },
  { code: 'SE', name: 'Sweden' },
  { code: 'DK', name: 'Denmark' },
  { code: 'FI', name: 'Finland' },
  { code: 'IS', name: 'Iceland' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'DE', name: 'Germany' },
  { code: 'NL', name: 'Netherlands' },
  { code: 'BE', name: 'Belgium' },
  { code: 'FR', name: 'France' },
  { code: 'ES', name: 'Spain' },
  { code: 'IT', name: 'Italy' },
  { code: 'AT', name: 'Austria' },
  { code: 'CH', name: 'Switzerland' },
  { code: 'PL', name: 'Poland' },
  { code: 'IE', name: 'Ireland' },
  { code: 'PT', name: 'Portugal' },
  { code: 'GR', name: 'Greece' },
  { code: 'CZ', name: 'Czech Republic' },
  { code: 'RO', name: 'Romania' },
  { code: 'HU', name: 'Hungary' },
  { code: 'LU', name: 'Luxembourg' },
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'MX', name: 'Mexico' },
  { code: 'BR', name: 'Brazil' },
  { code: 'AU', name: 'Australia' },
  { code: 'NZ', name: 'New Zealand' },
  { code: 'SG', name: 'Singapore' },
  { code: 'HK', name: 'Hong Kong' },
  { code: 'JP', name: 'Japan' },
  { code: 'KR', name: 'South Korea' },
  { code: 'CN', name: 'China' },
  { code: 'TW', name: 'Taiwan' },
  { code: 'IN', name: 'India' },
  { code: 'TH', name: 'Thailand' },
  { code: 'VN', name: 'Vietnam' },
  { code: 'MY', name: 'Malaysia' },
  { code: 'ID', name: 'Indonesia' },
  { code: 'PH', name: 'Philippines' },
  { code: 'AE', name: 'United Arab Emirates' },
  { code: 'SA', name: 'Saudi Arabia' },
  { code: 'IL', name: 'Israel' },
  { code: 'ZA', name: 'South Africa' },
  { code: 'NG', name: 'Nigeria' },
  { code: 'EG', name: 'Egypt' },
].sort((a, b) => a.name.localeCompare(b.name));

interface CompanySearchResult {
  registrationNumber: string;
  companyName: string;
  address?: {
    street: string;
    city: string;
    postalCode: string;
  };
  companyType?: string;
}

interface FormData {
  countryCode: string;
  companyName: string;
  registrationNumber: string;
  vatNumber: string;
  addressStreet: string;
  addressCity: string;
  addressPostalCode: string;
  contactName: string;
  email: string;
  phone: string;
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
    countryCode: '',
    companyName: '',
    registrationNumber: '',
    vatNumber: '',
    addressStreet: '',
    addressCity: '',
    addressPostalCode: '',
    contactName: '',
    email: '',
    phone: '',
    poNumber: '',
    acceptedTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [defaultCountry, setDefaultCountry] = useState<CountryCode>('US');

  // Company search state
  const [companySearchQuery, setCompanySearchQuery] = useState('');
  const [searchState, setSearchState] = useState<'idle' | 'loading' | 'results' | 'no_results'>('idle');
  const [searchResults, setSearchResults] = useState<CompanySearchResult[]>([]);
  const [searchSource, setSearchSource] = useState<string>('');
  const [companySelected, setCompanySelected] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  // Auto-detect country from IP
  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.country_code) {
          const countryCode = data.country_code as CountryCode;
          if (COUNTRIES.find(c => c.code === countryCode)) {
            setDefaultCountry(countryCode);
            setFormData(prev => ({ ...prev, countryCode }));
          }
        }
      } catch {
        setDefaultCountry('NO');
        setFormData(prev => ({ ...prev, countryCode: 'NO' }));
      }
    };
    detectCountry();
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.contactName.trim()) newErrors.contactName = 'Contact name is required';
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
    if (!formData.acceptedTerms) newErrors.acceptedTerms = 'You must accept the terms';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSearchCompanies = async () => {
    if (!formData.countryCode || companySearchQuery.trim().length < 2) return;

    setSearchState('loading');
    setSearchResults([]);

    try {
      const countryName = COUNTRIES.find(c => c.code === formData.countryCode)?.name || formData.countryCode;
      const response = await fetch('/api/search-companies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ country: countryName, query: companySearchQuery.trim() }),
      });

      const result = await response.json();

      if (!response.ok || !result.results?.length) {
        setSearchState('no_results');
        return;
      }

      setSearchState('results');
      setSearchResults(result.results);
      setSearchSource(result.registrySource || '');
    } catch {
      setSearchState('no_results');
    }
  };

  const handleSelectCompany = (company: CompanySearchResult) => {
    setFormData(prev => ({
      ...prev,
      companyName: company.companyName,
      registrationNumber: company.registrationNumber,
      addressStreet: company.address?.street || '',
      addressCity: company.address?.city || '',
      addressPostalCode: company.address?.postalCode || '',
    }));
    setCompanySearchQuery('');
    setSearchState('idle');
    setSearchResults([]);
    setCompanySelected(true);
  };

  const handleClearCompany = () => {
    setFormData(prev => ({
      ...prev,
      companyName: '',
      registrationNumber: '',
      addressStreet: '',
      addressCity: '',
      addressPostalCode: '',
    }));
    setCompanySelected(false);
    setSearchState('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/submit-trial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: formData.companyName.trim(),
          contactName: formData.contactName.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone,
          poNumber: formData.poNumber.trim() || undefined,
          countryCode: formData.countryCode,
          registrationNumber: formData.registrationNumber || undefined,
          vatNumber: formData.vatNumber || undefined,
          address: formData.addressStreet ? {
            street: formData.addressStreet,
            city: formData.addressCity,
            postalCode: formData.addressPostalCode,
          } : undefined,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit trial request');
      }

      setSubmitStatus('success');
      setFormData({
        countryCode: formData.countryCode,
        companyName: '',
        registrationNumber: '',
        vatNumber: '',
        addressStreet: '',
        addressCity: '',
        addressPostalCode: '',
        contactName: '',
        email: '',
        phone: '',
        poNumber: '',
        acceptedTerms: false,
      });
      setCompanySelected(false);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedCountry = COUNTRIES.find(c => c.code === formData.countryCode);

  if (submitStatus === 'success') {
    return (
      <section id="trial-signup" className="py-16 bg-gray-50">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center border border-green-200"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30"
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Welcome aboard!</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Your 14-day free trial is being set up. Check your email for login credentials
              and get started in minutes.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-green-700 bg-green-100 rounded-full py-2 px-4 mx-auto w-fit">
              <Sparkles className="w-4 h-4" />
              <span>No credit card required</span>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="trial-signup" className="py-16 bg-gray-50">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Start Your Free Trial</h2>
          <p className="text-gray-600">Get started in minutes. No credit card required.</p>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100"
        >
      {/* Country Selection */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          <Globe className="w-4 h-4 inline mr-2" />
          Country
        </label>
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowCountryDropdown(!showCountryDropdown)}
            className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-left flex items-center justify-between hover:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
          >
            <span className={selectedCountry ? 'text-gray-900' : 'text-gray-400'}>
              {selectedCountry ? selectedCountry.name : 'Select your country'}
            </span>
            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${showCountryDropdown ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {showCountryDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl max-h-60 overflow-y-auto"
              >
                {COUNTRIES.map(country => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, countryCode: country.code }));
                      setShowCountryDropdown(false);
                      // Reset company selection when country changes
                      if (companySelected) {
                        handleClearCompany();
                      }
                    }}
                    className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                      formData.countryCode === country.code ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
                    }`}
                  >
                    {country.name}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Company Search */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          <Building2 className="w-4 h-4 inline mr-2" />
          Company
        </label>

        {companySelected ? (
          // Selected company card
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-primary-50 to-blue-50 border border-primary-200 rounded-xl p-4"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{formData.companyName}</h4>
                {formData.registrationNumber && (
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                    <FileText className="w-3.5 h-3.5" />
                    {formData.registrationNumber}
                  </p>
                )}
                {formData.addressStreet && (
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {formData.addressStreet}, {formData.addressPostalCode} {formData.addressCity}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={handleClearCompany}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ) : (
          // Company search input
          <div className="space-y-3">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={companySearchQuery}
                  onChange={(e) => setCompanySearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleSearchCompanies();
                    }
                  }}
                  placeholder={formData.countryCode ? "Search for your company..." : "Select a country first"}
                  disabled={!formData.countryCode}
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all disabled:bg-gray-50 disabled:text-gray-400"
                />
              </div>
              <button
                type="button"
                onClick={handleSearchCompanies}
                disabled={!formData.countryCode || companySearchQuery.trim().length < 2 || searchState === 'loading'}
                className="px-5 py-3.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium hover:from-primary-600 hover:to-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
              >
                {searchState === 'loading' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Search className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Search Results */}
            <AnimatePresence>
              {searchState === 'results' && searchResults.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
                >
                  {searchSource && (
                    <div className="px-4 py-2 bg-gray-50 border-b border-gray-100 text-xs text-gray-500">
                      Results from {searchSource}
                    </div>
                  )}
                  <div className="max-h-64 overflow-y-auto">
                    {searchResults.map((company, idx) => (
                      <button
                        key={`${company.registrationNumber}-${idx}`}
                        type="button"
                        onClick={() => handleSelectCompany(company)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        <div className="font-medium text-gray-900">{company.companyName}</div>
                        <div className="text-sm text-gray-500 flex items-center gap-3 mt-0.5">
                          <span className="flex items-center gap-1">
                            <FileText className="w-3.5 h-3.5" />
                            {company.registrationNumber}
                          </span>
                          {company.address && (
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {company.address.city}
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {searchState === 'no_results' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-gray-500 text-center py-3"
                >
                  No companies found. You can enter details manually below.
                </motion.div>
              )}
            </AnimatePresence>

            {/* Manual entry option */}
            {!companySelected && searchState !== 'loading' && (
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setCompanySelected(false)}
                  className="text-sm text-gray-500 hover:text-primary-600 transition-colors"
                >
                  Or enter company details manually
                </button>
              </div>
            )}
          </div>
        )}
        {errors.companyName && (
          <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.companyName}
          </p>
        )}
      </div>

      {/* Manual company name and address (shown when not selected from search) */}
      {!companySelected && (
        <>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Company Name (manual entry)
            </label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
              placeholder="Enter company name"
              className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
            />
          </div>

          {/* Address fields for manual entry */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <MapPin className="w-4 h-4 inline mr-2" />
              Business Address <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              type="text"
              value={formData.addressStreet}
              onChange={(e) => setFormData(prev => ({ ...prev, addressStreet: e.target.value }))}
              placeholder="Street address"
              className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all mb-3"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                value={formData.addressPostalCode}
                onChange={(e) => setFormData(prev => ({ ...prev, addressPostalCode: e.target.value }))}
                placeholder="Postal code"
                className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
              />
              <input
                type="text"
                value={formData.addressCity}
                onChange={(e) => setFormData(prev => ({ ...prev, addressCity: e.target.value }))}
                placeholder="City"
                className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
              />
            </div>
          </div>
        </>
      )}

      {/* Contact Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          <User className="w-4 h-4 inline mr-2" />
          Your Name
        </label>
        <input
          type="text"
          value={formData.contactName}
          onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
          placeholder="Enter your full name"
          className={`w-full px-4 py-3.5 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all ${
            errors.contactName ? 'border-red-300' : 'border-gray-200'
          }`}
        />
        {errors.contactName && (
          <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.contactName}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          <Mail className="w-4 h-4 inline mr-2" />
          Work Email
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          placeholder="name@company.com"
          className={`w-full px-4 py-3.5 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all ${
            errors.email ? 'border-red-300' : 'border-gray-200'
          }`}
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          <Phone className="w-4 h-4 inline mr-2" />
          Phone Number
        </label>
        <PhoneInput
          international
          countryCallingCodeEditable={false}
          defaultCountry={defaultCountry}
          value={formData.phone}
          onChange={(value) => setFormData(prev => ({ ...prev, phone: value || '' }))}
          className={`phone-input-container ${errors.phone ? 'has-error' : ''}`}
        />
        {errors.phone && (
          <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.phone}
          </p>
        )}
      </div>

      {/* PO Number (Optional) */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          <FileText className="w-4 h-4 inline mr-2" />
          PO Number <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          type="text"
          value={formData.poNumber}
          onChange={(e) => setFormData(prev => ({ ...prev, poNumber: e.target.value }))}
          placeholder="Your reference number"
          className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
        />
      </div>

      {/* Terms Checkbox */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="terms"
          checked={formData.acceptedTerms}
          onChange={(e) => setFormData(prev => ({ ...prev, acceptedTerms: e.target.checked }))}
          className="mt-1 w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
        />
        <label htmlFor="terms" className="text-sm text-gray-600">
          I agree to the{' '}
          <a href="/terms" target="_blank" className="text-primary-600 hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/privacy" target="_blank" className="text-primary-600 hover:underline">
            Privacy Policy
          </a>
        </label>
      </div>
      {errors.acceptedTerms && (
        <p className="text-sm text-red-500 flex items-center gap-1 -mt-3">
          <AlertCircle className="w-4 h-4" />
          {errors.acceptedTerms}
        </p>
      )}

      {/* Error Message */}
      <AnimatePresence>
        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
          >
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-red-800">Something went wrong</p>
              <p className="text-sm text-red-600">{errorMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500/20 disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-500/30"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </motion.button>

      {/* Trust badges */}
      <div className="flex items-center justify-center gap-6 pt-4 text-sm text-gray-500">
        <span className="flex items-center gap-1">
          <CheckCircle className="w-4 h-4 text-green-500" />
          14-day free trial
        </span>
        <span className="flex items-center gap-1">
          <CheckCircle className="w-4 h-4 text-green-500" />
          No credit card
        </span>
      </div>
        </motion.form>
      </div>
    </section>
  );
}
