import type { Metadata, Viewport } from 'next';
import Script from 'next/script';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-OBMADURAI1';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingUtilities from '@/components/layout/FloatingUtilities';

export const metadata: Metadata = {
  title: 'Orange Builders Madurai | House Construction Experts',
  description:
    'Orange Builders offers residential house construction, labour contracts, site supervision, and quality construction services in Madurai with transparent pricing and trusted workmanship.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', type: 'image/png' }],
    shortcut: ['/favicon.ico'],
  },
  keywords: [
    'House Construction Madurai',
    'Residential Builders Madurai',
    'Home Builders Madurai',
    'Construction Company Madurai',
    'Building Contractors Madurai',
    'Labour Contract Madurai',
    'Affordable House Construction',
    'Civil Contractors Madurai',
    'House Building Services Madurai',
    'G+1 House Construction',
    'Best Residential Construction Company In Madurai',
    'Affordable Home Builders In Madurai',
    'Labour Contract Services For House Construction',
    'House Construction Cost In Madurai',
    'Trusted Building Contractors In Madurai',
  ],
  authors: [{ name: 'Orange Builders', url: 'https://orangebuilders.co.in' }],
  creator: 'Orange Builders',
  publisher: 'Orange Builders',
  metadataBase: new URL('https://orangebuilders.co.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Orange Builders Madurai | House Construction Experts',
    description:
      'Residential house construction and labour contract services in Madurai. Transparent pricing, expert site execution, quality guaranteed.',
    url: 'https://orangebuilders.co.in',
    siteName: 'Orange Builders',
    images: [
      {
        url: '/images/Orangeteam.jpg',
        width: 1200,
        height: 630,
        alt: 'Orange Builders Construction Team in Madurai',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orange Builders Madurai | House Construction Experts',
    description:
      'Residential house construction & labour contract services in Madurai with complete transparency.',
    images: ['/images/Orangeteam.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F95700' },
    { media: '(prefers-color-scheme: dark)', color: '#0F1419' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Orange Builders',
  image: 'https://orangebuilders.co.in/images/logo.jpg',
  '@id': 'https://orangebuilders.co.in',
  url: 'https://orangebuilders.co.in',
  telephone: '+919952573873',
  email: 'info@orangebuilders.co.in',
  priceRange: '₹₹ - ₹₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sathamangalam',
    addressLocality: 'Madurai',
    addressRegion: 'Tamil Nadu',
    postalCode: '625020',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 9.9252,
    longitude: 78.1198,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '19:00',
  },
  sameAs: ['https://www.instagram.com/orangebuilders.in'],
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Madurai, Tamil Nadu',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* Favicon Explicit Tags */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />

        {/* Google Analytics GA4 Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <LanguageProvider>
          <ThemeProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <FloatingUtilities />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
