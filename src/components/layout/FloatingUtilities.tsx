'use client';

import React from 'react';
import { Sun, Moon, Globe, MessageCircle } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';

export default function FloatingUtilities() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const whatsappNumber = '919952573873';
  const whatsappMessage = encodeURIComponent(
    'Hello Orange Builders, I would like to know more about your construction services.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 pointer-events-auto">
      
      {/* Theme Switcher Floating Button */}
      <button
        onClick={toggleTheme}
        className="w-12 h-12 rounded-full bg-white dark:bg-[#1E242B] text-gray-800 dark:text-amber-400 shadow-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 group relative"
        aria-label="Toggle Theme Mode"
        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5 text-gray-700" />
        )}
        <span className="absolute right-14 bg-gray-900 text-white text-[11px] font-medium px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </span>
      </button>

      {/* Language Switcher Floating Button */}
      <button
        onClick={toggleLanguage}
        className="w-12 h-12 rounded-full bg-white dark:bg-[#1E242B] text-[#F95700] shadow-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 group relative font-bold text-xs"
        aria-label="Toggle Language"
        title={t('lang.switch')}
      >
        <div className="flex items-center justify-center">
          {language === 'en' ? (
            <span className="font-extrabold text-xs tracking-wider">TA</span>
          ) : (
            <span className="font-extrabold text-xs tracking-wider">EN</span>
          )}
        </div>
        <span className="absolute right-14 bg-gray-900 text-white text-[11px] font-medium px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Switch to {t('lang.switch')}
        </span>
      </button>

      {/* Floating WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 group relative animate-bounce hover:animate-none"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="absolute right-15 bg-emerald-900 text-emerald-100 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap flex items-center space-x-1">
          <span>{t('btn.whatsappUs')}</span>
        </span>
      </a>

    </div>
  );
}
