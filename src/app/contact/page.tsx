'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import confetti from 'canvas-confetti';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid 10-digit mobile number'),
  email: z.string().email('Please enter a valid email address').optional().or(z.literal('')),
  projectType: z.string().min(1, 'Please select a project type'),
  location: z.string().min(2, 'Please enter your site location in Madurai'),
  message: z.string().min(5, 'Message must be at least 5 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate submission API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
    reset();
  };

  const whatsappUrl = `https://wa.me/919952573873?text=${encodeURIComponent(
    'Hello Orange Builders, I would like to know more about your construction services.'
  )}`;

  return (
    <div className="space-y-16 py-12">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#181F26] to-[#12161A] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <span className="text-xs font-bold tracking-widest text-[#F95700] uppercase">
            Let's Build Together
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Contact Orange Builders
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Reach out to Er. Nowsadh and team for a free on-site evaluation, structural plan review, or detailed labor contract quote in Madurai.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#F95700] uppercase">
                Direct Contact
              </span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Get In Touch Directly
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                We respond promptly to phone calls, emails, and WhatsApp enquiries across Madurai.
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone Card */}
              <a
                href="tel:+919952573873"
                className="flex items-start space-x-4 p-5 rounded-2xl bg-white dark:bg-[#181F26] border border-gray-200 dark:border-gray-800 shadow-sm hover:border-[#F95700] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950/50 text-[#F95700] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-semibold uppercase">Call Us Anytime</span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#F95700] transition-colors">
                    +91 99525 73873
                  </h3>
                  <p className="text-xs text-gray-500">Er. Nowsadh - Lead Engineer</p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:info@orangebuilders.co.in"
                className="flex items-start space-x-4 p-5 rounded-2xl bg-white dark:bg-[#181F26] border border-gray-200 dark:border-gray-800 shadow-sm hover:border-[#F95700] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950/50 text-[#F95700] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-semibold uppercase">Email Enquiries</span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#F95700] transition-colors">
                    info@orangebuilders.co.in
                  </h3>
                  <p className="text-xs text-gray-500">Send floor plans & scope documents</p>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white dark:bg-[#181F26] border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950/50 text-[#F95700] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-semibold uppercase">Office & Operating Region</span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Madurai, Tamil Nadu
                  </h3>
                  <p className="text-xs text-gray-500">Serving Sathamangalam, KK Nagar, Anna Nagar, TVS Nagar, etc.</p>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold p-4 rounded-2xl shadow-lg flex items-center justify-center space-x-2 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Instant Chat on WhatsApp (+91 99525 73873)</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#181F26] p-8 sm:p-10 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Send Us a Construction Enquiry
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Fill out the form below for a free site visit and cost estimation.
              </p>
            </div>

            {submitted && (
              <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/40 p-4 rounded-2xl flex items-start space-x-3 text-emerald-800 dark:text-emerald-300">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                <div className="text-xs font-semibold space-y-1">
                  <p className="text-sm font-bold">{t('contact.success')}</p>
                  <p>Our lead engineer Er. Nowsadh will review your site details and call you shortly.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                    {t('contact.name')} *
                  </label>
                  <input
                    type="text"
                    {...register('fullName')}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full bg-gray-50 dark:bg-[#141A21] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#F95700]"
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-red-500 mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                    {t('contact.phone')} *
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    placeholder="e.g. 99525 73873"
                    className="w-full bg-gray-50 dark:bg-[#141A21] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#F95700]"
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-500 mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                    {t('contact.email')} (Optional)
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    placeholder="e.g. name@example.com"
                    className="w-full bg-gray-50 dark:bg-[#141A21] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#F95700]"
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                    {t('contact.projectType')} *
                  </label>
                  <select
                    {...register('projectType')}
                    className="w-full bg-gray-50 dark:bg-[#141A21] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#F95700]"
                  >
                    <option value="">Select Service Required</option>
                    <option value="Residential Construction">Turnkey Residential House Construction</option>
                    <option value="Labour Contract">Labour Contract Services</option>
                    <option value="Plastering & Finishing">Plastering & Wall Finishing</option>
                    <option value="Site Supervision">Site Supervision & Inspection</option>
                    <option value="Consultancy">Construction Consultancy & Estimation</option>
                  </select>
                  {errors.projectType && (
                    <p className="text-[11px] text-red-500 mt-1">{errors.projectType.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                  {t('contact.location')} *
                </label>
                <input
                  type="text"
                  {...register('location')}
                  placeholder="e.g. Sathamangalam / KK Nagar / Anna Nagar, Madurai"
                  className="w-full bg-gray-50 dark:bg-[#141A21] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#F95700]"
                />
                {errors.location && (
                  <p className="text-[11px] text-red-500 mt-1">{errors.location.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                  {t('contact.message')} *
                </label>
                <textarea
                  rows={4}
                  {...register('message')}
                  placeholder="Tell us about your plot size, floor requirements (e.g., G+1, 1800 sq ft), expected timeline, or budget..."
                  className="w-full bg-gray-50 dark:bg-[#141A21] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#F95700]"
                />
                {errors.message && (
                  <p className="text-[11px] text-red-500 mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#F95700] hover:bg-[#E04D00] text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-orange-600/30 transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? t('contact.sending') : t('contact.send')}</span>
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
