'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Building2,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  HardHat,
  Ruler,
  Clock,
  Award,
  ChevronDown,
  Star,
  Phone,
  FileText,
  Hammer,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      name: 'Abdul Mazeeth',
      rating: 5,
      location: 'Madurai',
      project: 'Turnkey Residential Home',
      comment:
        'Orange Builders completed my home at Madurai. My review is they work for client satisfaction which is very rare nowadays. Their first priority is quality. I am congratulating Er. Nowsadh from my bottom of my heart for his dedicated work. All the best to the Orange Builders Team. I am super happy!',
    },
    {
      name: 'Mohamed Aabid',
      rating: 5,
      location: 'Sathamangalam, Madurai',
      project: 'Individual House Construction',
      comment:
        'Orange Builders is a very good construction company who completed my home in Sathamangalam within time with low budget and good quality work. I am very much satisfied with their works. They are providing daily work progress and detailed reports with cost analysis. I will recommend Orange Builders to all my friends and relatives!',
    },
    {
      name: 'Neethiselvam N',
      rating: 5,
      location: 'Madurai',
      project: 'Custom House & Finishing',
      comment:
        "Good builder. I knew they are using good materials and do on time. Finally they done compact rooms in our required area that's what I liked most. Their designing is well and neat. I am proud to give five stars thanks!",
    },
  ];

  const faqs = [
    {
      q: 'How much does house construction cost per sq ft in Madurai?',
      a: 'Residential house construction costs in Madurai typically range depending on structural requirements, material selection, and finishing scope. We provide customized, line-by-line cost estimates with zero hidden charges after a thorough site inspection.',
    },
    {
      q: 'Do you offer both turnkey construction and labour contract options?',
      a: 'Yes! We offer full turnkey house construction (material + labor + supervision) as well as pure labor contract services where you purchase materials and our expert masons and site engineers execute the structural and finishing work.',
    },
    {
      q: 'How do you guarantee quality materials during construction?',
      a: 'We only use top-grade branded steel (TATA Tiscon/JSW), premium cement (Coromandel/Ramco), high-density red bricks, and tested river/M-sand. We share material delivery receipts and test certificates directly with the homeowner.',
    },
    {
      q: 'Will I receive daily updates on my construction site?',
      a: 'Absolutely! Er. Nowsadh and our site supervisors send high-definition photos, videos, and daily progress logs via WhatsApp/email so you stay informed even if you live far away or abroad.',
    },
    {
      q: 'How long does it take to complete a G+1 house in Madurai?',
      a: 'A standard G+1 residential house (1800 - 2400 sq ft) takes approximately 6 to 9 months from foundation excavation to final handover, depending on weather and customization complexity.',
    },
  ];

  return (
    <div className="space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#181F26] via-[#12161A] to-[#0F1419] text-white pt-12 pb-24 lg:pt-20 lg:pb-32">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-[#F95700]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center space-x-2 bg-[#F95700]/20 border border-[#F95700]/40 px-3.5 py-1.5 rounded-full text-xs font-semibold text-orange-300">
                <Sparkles className="w-3.5 h-3.5 text-[#F95700]" />
                <span>{t('hero.badge')}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {t('hero.title').split('Madurai')[0]}
                <span className="text-gradient-orange">Madurai</span>
                {t('hero.title').split('Madurai')[1]}
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
                {t('hero.subtitle')}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/contact"
                  className="bg-[#F95700] hover:bg-[#E04D00] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 transition-all text-center flex items-center justify-center space-x-2 group"
                >
                  <span>{t('hero.ctaConsult')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/projects"
                  className="bg-gray-800/80 hover:bg-gray-800 border border-gray-700 text-white font-semibold px-8 py-4 rounded-xl transition-all text-center flex items-center justify-center space-x-2"
                >
                  <span>{t('hero.ctaProjects')}</span>
                </Link>
              </div>

              {/* Quick Trust Indicators */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-gray-800/80 text-xs text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Er. Nowsadh Site Supervision</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Red Brick Construction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Daily WhatsApp Site Reports</span>
                </div>
              </div>

            </motion.div>

            {/* Right Card / Visual Section without image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="rounded-2xl border border-gray-800 bg-[#181F26] p-6 shadow-2xl space-y-6">
                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-gray-200 uppercase tracking-wider">
                      Live Site Monitoring
                    </span>
                  </div>
                  <span className="bg-[#F95700]/20 text-[#F95700] border border-[#F95700]/40 text-[11px] font-bold px-2.5 py-1 rounded-full">
                    Madurai
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#12161A] border border-gray-800 space-y-2">
                    <div className="flex justify-between items-center text-xs text-gray-400">
                      <span>Supervision Lead</span>
                      <span className="text-amber-400 font-semibold">Er. Nowsadh</span>
                    </div>
                    <p className="text-sm font-bold text-white">
                      Turnkey & Labour Contract Site Execution
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-[#12161A] border border-gray-800 space-y-1">
                      <span className="text-[10px] text-gray-400 font-semibold uppercase">Pricing Policy</span>
                      <p className="text-xs font-bold text-emerald-400">100% Transparent</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#12161A] border border-gray-800 space-y-1">
                      <span className="text-[10px] text-gray-400 font-semibold uppercase">Progress Log</span>
                      <p className="text-xs font-bold text-amber-400">Daily WhatsApp Updates</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-orange-950/20 border border-orange-900/40 text-xs text-orange-200 space-y-1">
                    <p className="font-bold text-sm text-[#F95700]">Engineered Construction</p>
                    <p className="text-gray-300">
                      Top-grade TMT steel, high-density chamber red bricks, and continuous 21-day curing monitoring on every site.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. TRUST STATISTICS COUNTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="bg-white dark:bg-[#181F26] rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-gray-100 dark:divide-gray-800">
            
            <div className="p-4 space-y-2">
              <div className="text-3xl sm:text-4xl font-black text-[#F95700] flex justify-center items-center">
                <span>35+</span>
              </div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {t('stats.completed')}
              </p>
              <p className="text-xs text-gray-400">Madurai & Nearby Areas</p>
            </div>

            <div className="p-4 space-y-2 pt-6 lg:pt-4">
              <div className="text-3xl sm:text-4xl font-black text-amber-500 flex justify-center items-center">
                <span>8+</span>
              </div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {t('stats.ongoing')}
              </p>
              <p className="text-xs text-gray-400">Active Site Progress</p>
            </div>

            <div className="p-4 space-y-2 pt-6 lg:pt-4">
              <div className="text-3xl sm:text-4xl font-black text-[#F95700] flex justify-center items-center">
                <span>50+</span>
              </div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {t('stats.workers')}
              </p>
              <p className="text-xs text-gray-400">Masons & Labour Crew</p>
            </div>

            <div className="p-4 space-y-2 pt-6 lg:pt-4">
              <div className="text-3xl sm:text-4xl font-black text-emerald-500 flex justify-center items-center">
                <span>100%</span>
              </div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {t('stats.satisfaction')}
              </p>
              <p className="text-xs text-gray-400">Verified Client Reviews</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ABOUT PREVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800 h-[400px]">
              <Image
                src="/images/Orangeteam.jpg"
                alt="Orange Builders Labour Team and Engineers"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-[#F95700] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Our Team Strength
                </span>
                <h3 className="text-xl font-bold mt-2">
                  Er. Nowsadh & Skilled Construction Force
                </h3>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest text-[#F95700] uppercase">
              <Building2 className="w-4 h-4" />
              <span>About Orange Builders</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              Building Trust & Engineering Excellence in Madurai
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Orange Builders is a premier residential house construction and labour contract firm based in Madurai, Tamil Nadu. Guided by Er. Nowsadh, we believe that building a home is not just an engineering task — it is creating a sanctuary for families to cherish for generations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-semibold text-gray-800 dark:text-gray-200">
              <div className="flex items-center space-x-2 bg-orange-50 dark:bg-orange-950/30 p-3 rounded-lg border border-orange-100 dark:border-orange-900/30">
                <ShieldCheck className="w-5 h-5 text-[#F95700]" />
                <span>Zero Hidden Escalations</span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-50 dark:bg-orange-950/30 p-3 rounded-lg border border-orange-100 dark:border-orange-900/30">
                <HardHat className="w-5 h-5 text-[#F95700]" />
                <span>Strict Material Quality Checks</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-[#F95700] hover:text-[#E04D00] font-bold text-sm group"
              >
                <span>{t('btn.learnMore')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SERVICES OVERVIEW */}
      <section className="bg-gray-50 dark:bg-[#141A21] py-20 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#F95700] uppercase">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              {t('services.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white dark:bg-[#1C242E] rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950/50 flex items-center justify-center text-[#F95700] group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {t('services.residential')}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('services.residentialDesc')}
              </p>
              <ul className="text-xs text-gray-500 space-y-1 pt-2">
                <li>• Individual Houses & Villas</li>
                <li>• G+1 & G+2 Structures</li>
                <li>• Complete Turnkey Execution</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-[#1C242E] rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950/50 flex items-center justify-center text-[#F95700] group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {t('services.labour')}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('services.labourDesc')}
              </p>
              <ul className="text-xs text-gray-500 space-y-1 pt-2">
                <li>• Masonry & Bricklaying</li>
                <li>• RCC Concrete Shuttering</li>
                <li>• Tiling & Plastering Workforce</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-[#1C242E] rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950/50 flex items-center justify-center text-[#F95700] group-hover:scale-110 transition-transform">
                <HardHat className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {t('services.supervision')}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('services.supervisionDesc')}
              </p>
              <ul className="text-xs text-gray-500 space-y-1 pt-2">
                <li>• On-Site Er. Nowsadh Monitoring</li>
                <li>• Material Ratio Verification</li>
                <li>• Daily Photo Updates</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-white dark:bg-[#1C242E] rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950/50 flex items-center justify-center text-[#F95700] group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {t('services.consultancy')}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('services.consultancyDesc')}
              </p>
              <ul className="text-xs text-gray-500 space-y-1 pt-2">
                <li>• Budget Optimization</li>
                <li>• Material Selection Advice</li>
                <li>• Structural Guidance</li>
              </ul>
            </div>

            {/* Card 5 */}
            <div className="bg-white dark:bg-[#1C242E] rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950/50 flex items-center justify-center text-[#F95700] group-hover:scale-110 transition-transform">
                <Hammer className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {t('services.finishing')}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('services.finishingDesc')}
              </p>
              <ul className="text-xs text-gray-500 space-y-1 pt-2">
                <li>• Smooth Internal Wall Putty</li>
                <li>• Weatherproof External Coating</li>
                <li>• Plumbing & Tile Fitting</li>
              </ul>
            </div>

            {/* Card 6 */}
            <div className="bg-white dark:bg-[#1C242E] rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950/50 flex items-center justify-center text-[#F95700] group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {t('services.quality')}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('services.qualityDesc')}
              </p>
              <ul className="text-xs text-gray-500 space-y-1 pt-2">
                <li>• Cube Strength Testing</li>
                <li>• Waterproofing Verification</li>
                <li>• Handover Certification</li>
              </ul>
            </div>

          </div>

          <div className="text-center pt-6">
            <Link
              href="/services"
              className="bg-[#F95700] hover:bg-[#E04D00] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all inline-flex items-center space-x-2"
            >
              <span>{t('services.viewAll')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. FEATURED PROJECTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end space-y-4 md:space-y-0">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#F95700] uppercase">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-1">
              Featured Projects in Madurai
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm font-bold text-[#F95700] hover:underline flex items-center space-x-1"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white dark:bg-[#181F26] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-md group">
            <div className="relative h-64 w-full">
              <Image
                src="/images/tips-2.jpg"
                alt="Sathamangalam Villa Project"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-emerald-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase">
                Completed
              </span>
            </div>
            <div className="p-6 space-y-3">
              <span className="text-xs text-gray-400 font-semibold">Sathamangalam, Madurai</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Sathamangalam Compact Residential Home
              </h3>
              <p className="text-xs text-gray-500 line-clamp-2">
                On-time completed residential house with optimized room layout, quality red brick masonry, and transparent report logs for Mohamed Aabid.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#181F26] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-md group">
            <div className="relative h-64 w-full">
              <Image
                src="/images/tips-3.jpg"
                alt="Madurai RCC Structure Work"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-[#F95700] text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase">
                Ongoing Site
              </span>
            </div>
            <div className="p-6 space-y-3">
              <span className="text-xs text-gray-400 font-semibold">KK Nagar, Madurai</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                KK Nagar G+1 Modern House Frame
              </h3>
              <p className="text-xs text-gray-500 line-clamp-2">
                RCC roof slab casting and precision brick masonry execution supervised directly by site engineering team.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#181F26] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-md group">
            <div className="relative h-64 w-full">
              <Image
                src="/images/tips-4.jpg"
                alt="Labour Contract Finishing Work"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-amber-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase">
                Labour Contract
              </span>
            </div>
            <div className="p-6 space-y-3">
              <span className="text-xs text-gray-400 font-semibold">Anna Nagar, Madurai</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Anna Nagar Plastering & Tiling Work
              </h3>
              <p className="text-xs text-gray-500 line-clamp-2">
                High-grade double coat interior plastering, wall putty finish, and custom tile installation by our skilled labour force.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. CONSTRUCTION PROCESS TIMELINE */}
      <section className="bg-gray-900 text-white py-20 border-y border-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#F95700] uppercase">
              Step-by-Step
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              {t('process.title')}
            </h2>
            <p className="text-gray-400 text-sm">
              {t('process.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t('process.s1'), desc: t('process.s1desc') },
              { title: t('process.s2'), desc: t('process.s2desc') },
              { title: t('process.s3'), desc: t('process.s3desc') },
              { title: t('process.s4'), desc: t('process.s4desc') },
              { title: t('process.s5'), desc: t('process.s5desc') },
              { title: t('process.s6'), desc: t('process.s6desc') },
              { title: t('process.s7'), desc: t('process.s7desc') },
              { title: t('process.s8'), desc: t('process.s8desc') },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-[#181F26] p-6 rounded-xl border border-gray-800 hover:border-[#F95700]/50 transition-all space-y-3"
              >
                <div className="text-[#F95700] font-black text-2xl">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-base text-white">{step.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/process"
              className="text-amber-400 hover:text-amber-300 font-bold text-sm inline-flex items-center space-x-1"
            >
              <span>Explore Detailed Construction Process Checklist</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#F95700] uppercase">
            Our Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            {t('why.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {t('why.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#181F26] border border-gray-100 dark:border-gray-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-950/50 text-[#F95700] flex items-center justify-center font-bold">
              <Ruler className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">{t('why.local')}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{t('why.localDesc')}</p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#181F26] border border-gray-100 dark:border-gray-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-950/50 text-[#F95700] flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">{t('why.pricing')}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{t('why.pricingDesc')}</p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#181F26] border border-gray-100 dark:border-gray-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-950/50 text-[#F95700] flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">{t('why.team')}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{t('why.teamDesc')}</p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#181F26] border border-gray-100 dark:border-gray-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-950/50 text-[#F95700] flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">{t('why.materials')}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{t('why.materialsDesc')}</p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#181F26] border border-gray-100 dark:border-gray-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-950/50 text-[#F95700] flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">{t('why.updates')}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{t('why.updatesDesc')}</p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#181F26] border border-gray-100 dark:border-gray-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-950/50 text-[#F95700] flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">{t('why.timely')}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{t('why.timelyDesc')}</p>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SLIDER */}
      <section className="bg-orange-50/60 dark:bg-[#141A21] py-20 border-y border-orange-100 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#F95700] uppercase">
              {t('testi.title')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              {t('testi.subtitle')}
            </h2>
          </div>

          <div className="bg-white dark:bg-[#1C242E] rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 dark:border-gray-800 relative space-y-6">
            
            <div className="flex items-center space-x-1 text-amber-400">
              {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            <p className="text-base sm:text-lg italic text-gray-700 dark:text-gray-200 leading-relaxed">
              "{testimonials[testimonialIndex].comment}"
            </p>

            <div className="flex justify-between items-end border-t border-gray-100 dark:border-gray-800 pt-6">
              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                  {testimonials[testimonialIndex].name}
                </h4>
                <p className="text-xs text-[#F95700] font-semibold">
                  {testimonials[testimonialIndex].project} • {testimonials[testimonialIndex].location}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() =>
                    setTestimonialIndex((prev) =>
                      prev === 0 ? testimonials.length - 1 : prev - 1
                    )
                  }
                  className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#F95700] hover:text-white transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    setTestimonialIndex((prev) =>
                      prev === testimonials.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#F95700] hover:text-white transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#F95700] uppercase">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            {t('faq.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="bg-white dark:bg-[#181F26] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full text-left p-5 font-semibold text-base text-gray-900 dark:text-white flex justify-between items-center space-x-4 focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#F95700] shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-800 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. CONTACT CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#181F26] via-[#1E242B] to-[#12161A] text-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-gray-800 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="bg-[#F95700] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Ready to Start?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Build Your Dream Home in Madurai Today
            </h2>
            <p className="text-gray-300 text-sm">
              Contact Er. Nowsadh and our engineering team for an on-site evaluation, structural advice, and transparent cost estimation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
            <Link
              href="/contact"
              className="bg-[#F95700] hover:bg-[#E04D00] text-white font-bold px-8 py-4 rounded-xl shadow-lg text-center flex items-center justify-center space-x-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+919952573873"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-4 rounded-xl text-center flex items-center justify-center space-x-2 border border-white/20"
            >
              <Phone className="w-4 h-4 text-[#F95700]" />
              <span>+91 99525 73873</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
