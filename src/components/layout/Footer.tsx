'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck, Camera } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#12161A] text-gray-300 border-t border-gray-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                <Image
                  src="/images/logo.jpg"
                  alt="Orange Builders Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                ORANGE <span className="text-[#F95700]">BUILDERS</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t('footer.tagline')}
            </p>
            <p className="text-xs text-gray-500">
              Trusted residential construction, labor contract services, structural site execution, and quality house building in Madurai, Tamil Nadu.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Quality & Transparency Guarantee</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white tracking-wider uppercase text-[#F95700]">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/', label: t('nav.home') },
                { href: '/about', label: t('nav.about') },
                { href: '/services', label: t('nav.services') },
                { href: '/projects', label: t('nav.projects') },
                { href: '/process', label: t('nav.process') },
                { href: '/blog', label: t('nav.blog') },
                { href: '/gallery', label: t('nav.gallery') },
                { href: '/contact', label: t('nav.contact') },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#F95700] transition-colors flex items-center group text-gray-400"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Offered */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white tracking-wider uppercase text-[#F95700]">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>Residential House Construction</li>
              <li>Labour Contract Services</li>
              <li>RCC Structural Framing</li>
              <li>Brickwork & Masonry</li>
              <li>Plastering & Wall Finishing</li>
              <li>Site Supervision & Inspection</li>
              <li>Construction Consultancy</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white tracking-wider uppercase text-[#F95700]">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#F95700] shrink-0 mt-0.5" />
                <span>Madurai, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#F95700] shrink-0" />
                <a href="tel:+919952573873" className="hover:text-white transition-colors">
                  +91 99525 73873
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#F95700] shrink-0" />
                <a href="mailto:info@orangebuilders.co.in" className="hover:text-white transition-colors">
                  info@orangebuilders.co.in
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.instagram.com/orangebuilders.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Follow on Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} {t('footer.rights')}</p>
          <p className="text-center">
            Er. Nowsadh & Team | Quality Residential Construction in Madurai
          </p>
        </div>
      </div>
    </footer>
  );
}
