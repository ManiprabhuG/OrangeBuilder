'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ArrowRight, Building2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/projects', label: t('nav.projects') },
    { href: '/process', label: t('nav.process') },
    { href: '/blog', label: t('nav.blog') },
    { href: '/gallery', label: t('nav.gallery') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#1E242B] text-white text-xs py-2 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-amber-400 font-medium">
              <Building2 className="w-3.5 h-3.5 mr-1" />
              Madurai's Trusted Builder
            </span>
            <span className="hidden sm:inline text-gray-400">|</span>
            <span className="hidden sm:inline text-gray-300">Residential & Labour Contracts</span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+919952573873" 
              className="flex items-center hover:text-[#F95700] transition-colors font-medium"
            >
              <Phone className="w-3 h-3 mr-1 text-[#F95700]" />
              +91 99525 73873
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-[#0F1419]/95 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-gray-800 py-3'
            : 'bg-white dark:bg-[#0F1419] py-4 border-b border-gray-100 dark:border-gray-800/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-11 h-11 overflow-hidden rounded-lg shadow-sm border border-orange-200 dark:border-orange-900/30">
                <Image
                  src="/images/logo.jpg"
                  alt="Orange Builders Logo"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center">
                  ORANGE <span className="text-[#F95700] ml-1">BUILDERS</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
                  Madurai, Tamil Nadu
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      isActive
                        ? 'text-[#F95700] bg-orange-50 dark:bg-orange-950/30 font-semibold'
                        : 'text-gray-700 dark:text-gray-300 hover:text-[#F95700] dark:hover:text-[#F95700] hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Button */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                href="/contact"
                className="bg-[#F95700] hover:bg-[#E04D00] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg shadow-md hover:shadow-orange-500/25 transition-all duration-300 flex items-center space-x-2 group"
              >
                <span>{t('nav.getQuote')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-[#141A21] border-b border-gray-200 dark:border-gray-800 px-4 pt-3 pb-6 space-y-1 shadow-xl animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 text-base font-medium rounded-lg ${
                    isActive
                      ? 'text-[#F95700] bg-orange-50 dark:bg-orange-950/40 font-semibold'
                      : 'text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 mt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#F95700] text-white font-semibold py-3 rounded-lg text-center flex items-center justify-center space-x-2"
              >
                <span>{t('nav.getQuote')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
