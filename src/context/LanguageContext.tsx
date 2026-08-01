'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.process': 'Our Process',
    'nav.blog': 'Construction Tips',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact Us',
    'nav.getQuote': 'Get Free Consultation',

    // Hero
    'hero.badge': 'Trusted Construction Company in Madurai',
    'hero.title': 'Building Homes in Madurai with Trust & Quality',
    'hero.subtitle': 'Affordable Residential Construction and Labour Contract Services with Complete Transparency and Expert Site Execution.',
    'hero.ctaConsult': 'Get Free Consultation',
    'hero.ctaProjects': 'View Projects',
    'hero.statYears': 'Years of Trust',
    'hero.statCompleted': 'Projects Completed',
    'hero.statOngoing': 'Ongoing Sites',
    'hero.statSatisfaction': 'Client Satisfaction',

    // Stats Section
    'stats.completed': 'Completed Homes',
    'stats.ongoing': 'Active Construction Sites',
    'stats.workers': 'Skilled Craftsmen & Labourers',
    'stats.satisfaction': 'Client Satisfaction Rate',

    // Services
    'services.title': 'Our Construction Services',
    'services.subtitle': 'Comprehensive residential building solutions tailored to your dream home requirement in Madurai.',
    'services.residential': 'Residential House Construction',
    'services.residentialDesc': 'Custom villas, G+1 independent houses, and turnkey home construction built with engineered precision.',
    'services.labour': 'Labour Contract Services',
    'services.labourDesc': 'Dedicated skilled masonic and structural labour force with strict supervision for quality execution.',
    'services.supervision': 'Site Supervision & Inspection',
    'services.supervisionDesc': 'Daily site monitoring, quality check reports, material tracking, and stage-by-stage verification.',
    'services.consultancy': 'Construction Consultancy',
    'services.consultancyDesc': 'Expert budget estimation, structural material guidance, floor plan consultations, and site advice.',
    'services.finishing': 'Plastering & Finishing Works',
    'services.finishingDesc': 'Flawless interior and exterior plastering, texture wall finishes, tiling, plumbing, and painting.',
    'services.quality': 'Quality Inspection & Reports',
    'services.qualityDesc': 'Standardized structural testing, concrete strength checks, and transparent daily digital updates.',
    'services.viewAll': 'Explore All Services',

    // Process
    'process.title': 'Our Transparent Construction Process',
    'process.subtitle': 'From foundation to key handover, we follow a rigorous 8-stage execution roadmap.',
    'process.s1': '1. Consultation & Design',
    'process.s1desc': 'Understanding requirements, site inspection, budget planning, and structural floor layout approval.',
    'process.s2': '2. Site Preparation',
    'process.s2desc': 'Clearing ground, leveling site, soil inspection, setting out boundaries, and material mobilization.',
    'process.s3': '3. Foundation Work',
    'process.s3desc': 'Excavation, PCC work, footings construction, plinth beam RCC, and anti-termite treatment.',
    'process.s4': '4. RCC Structure Work',
    'process.s4desc': 'Columns, beams, lintels, and roof slab RCC casting using high-grade TMT steel and concrete.',
    'process.s5': '5. Brickwork & Masonry',
    'process.s5desc': 'High-density chamber red brick masonry walls with rich cement mortar ratios and lintel bands.',
    'process.s6': '6. Plastering & Conduits',
    'process.s6desc': 'Internal & external double-coat plastering, electrical conduit fitting, and plumbing line setup.',
    'process.s7': '7. Finishing Works',
    'process.s7desc': 'Tile laying, wall putty, primer & painting, sanitary fittings, door & window installations.',
    'process.s8': '8. Quality Check & Handover',
    'process.s8desc': 'Deep cleaning, final inspection checklist verification, key ceremony, and documentation delivery.',

    // Why Choose Us
    'why.title': 'Why Homeowners Choose Orange Builders',
    'why.subtitle': 'Delivering peace of mind with quality craftsmanship, fair pricing, and clear communication.',
    'why.local': 'Madurai Local Expertise',
    'why.localDesc': 'Deep knowledge of local soil types, Madurai municipal approval codes, and weather-resistant techniques.',
    'why.pricing': '100% Transparent Pricing',
    'why.pricingDesc': 'Detailed cost breakdown without hidden charges or mid-project cost escalation guarantee.',
    'why.team': 'Skilled Dedicated Team',
    'why.teamDesc': 'Experienced site engineers (Er. Nowsadh), qualified supervisors, and master masons on every site.',
    'why.materials': 'Premium Quality Materials',
    'why.materialsDesc': 'Only top-grade cement (Coromandel/Ramco), branded steel (TATA/JSW), and high-density bricks.',
    'why.updates': 'Daily Progress Reports',
    'why.updatesDesc': 'Photo and video updates sent daily to keep you connected to your home construction journey.',
    'why.timely': 'On-Time Project Handover',
    'why.timelyDesc': 'Disciplined timeline schedules guaranteeing on-schedule completion and key delivery.',

    // Testimonials
    'testi.title': 'Client Testimonials',
    'testi.subtitle': 'Real reviews from families across Madurai who trusted us with their dream homes.',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to common questions about house construction and labour contracts in Madurai.',

    // Contact
    'contact.title': 'Get In Touch With Orange Builders',
    'contact.subtitle': 'Have a project in mind? Contact Er. Nowsadh and team for a free site visit & estimation.',
    'contact.name': 'Full Name',
    'contact.phone': 'Phone Number',
    'contact.email': 'Email Address',
    'contact.projectType': 'Project Type',
    'contact.location': 'Site Location in Madurai',
    'contact.message': 'Project Details & Message',
    'contact.send': 'Send Enquiry',
    'contact.sending': 'Sending Enquiry...',
    'contact.success': 'Thank you! We have received your enquiry and will call you back within 2 hours.',

    // Common Buttons & Labels
    'btn.learnMore': 'Learn More',
    'btn.callUs': 'Call Us Now',
    'btn.whatsappUs': 'Chat on WhatsApp',
    'btn.viewGallery': 'View Gallery',
    'footer.rights': 'Orange Builders. All Rights Reserved.',
    'footer.tagline': 'Building Homes in Madurai with Trust & Quality',

    // Language Toggle Tooltip
    'lang.current': 'English',
    'lang.switch': 'தமிழ்',
  },
  ta: {
    // Nav
    'nav.home': 'முகப்பு',
    'nav.about': 'எங்களைப் பற்றி',
    'nav.services': 'சேவைகள்',
    'nav.projects': 'திட்டங்கள்',
    'nav.process': 'எங்கள் முறை',
    'nav.blog': 'கட்டுமானக் குறிப்புகள்',
    'nav.gallery': 'புகைப்படங்கள்',
    'nav.contact': 'தொடர்புகொள்ள',
    'nav.getQuote': 'இலவச ஆலோசனை பெற',

    // Hero
    'hero.badge': 'மதுரையில் நம்பிக்கையான கட்டுமான நிறுவனம்',
    'hero.title': 'நம்பிக்கை & தரத்துடன் மதுரையில் வீடுகள் கட்டுவோம்',
    'hero.subtitle': 'முழு வெளிப்படைத்தன்மை மற்றும் சிறந்த தளப் பார்வையுடன் மலிவு விலையில் குடியிருப்பு வீடு கட்டுமானம் மற்றும் கூலி ஒப்பந்த சேவைகள்.',
    'hero.ctaConsult': 'இலவச ஆலோசனை பெற',
    'hero.ctaProjects': 'திட்டங்களைப் பார்க்க',
    'hero.statYears': 'ஆண்டுகள் நம்பிக்கை',
    'hero.statCompleted': 'நிறைவுற்ற வீடுகள்',
    'hero.statOngoing': 'நடப்பு தளங்கள்',
    'hero.statSatisfaction': 'வாடிக்கையாளர் திருப்தி',

    // Stats Section
    'stats.completed': 'நிறைவடைந்த வீடுகள்',
    'stats.ongoing': 'செயலில் உள்ள கட்டுமான இடங்கள்',
    'stats.workers': 'திறமையான தொழிலாளர்கள்',
    'stats.satisfaction': 'வாடிக்கையாளர் திருப்தி விகிதம்',

    // Services
    'services.title': 'எங்கள் கட்டுமான சேவைகள்',
    'services.subtitle': 'மதுரையில் உங்களின் கனவு இல்லத்திற்கான முழுமையான கட்டுமான தீர்வுகள்.',
    'services.residential': 'குடியிருப்பு வீடு கட்டுமானம்',
    'services.residentialDesc': 'சிறந்த பொறியியல் தரத்துடன் தனி நபர் வீடுகள், வில்லாக்கள் மற்றும் G+1 வீடுகள் கட்டுதல்.',
    'services.labour': 'கூலி ஒப்பந்த சேவைகள்',
    'services.labourDesc': 'திறமையான கொத்தனார்கள் மற்றும் கட்டுமானத் தொழிலாளர்களைக் கொண்டு தரமான பணி выполнение.',
    'services.supervision': 'தள மேற்பார்வை & ஆய்வு',
    'services.supervisionDesc': 'தினசரி தள கண்காணிப்பு, தர ஆய்வு அறிக்கைகள் மற்றும் கட்டுமானப் பொருட்களின் மேலாண்மை.',
    'services.consultancy': 'கட்டுமான ஆலோசனைகள்',
    'services.consultancyDesc': 'சிறந்த பட்ஜெட் மதிப்பீடு, கட்டுமானப் பொருள் வழிகாட்டல் மற்றும் கட்டிட வரைபட ஆலோசனைகள்.',
    'services.finishing': 'பூச்சு & பினிஷிங் வேலைகள்',
    'services.finishingDesc': 'உள் மற்றும் வெளி சுவர் பூச்சு, டைல்ஸ் பதித்தல், பிளம்பிங், மற்றும் பெயிண்டிங் வேலைகள்.',
    'services.quality': 'தர ஆய்வு மற்றும் அறிக்கைகள்',
    'services.qualityDesc': 'கான்கிரீட் வலிமை சோதனைகள் மற்றும் வெளிப்படையான தினசரி முன்னேற்ற அறிக்கைகள்.',
    'services.viewAll': 'அனைத்து சேவைகளையும் காண்க',

    // Process
    'process.title': 'எங்கள் வெளிப்படையான கட்டுமான முறை',
    'process.subtitle': 'அஸ்திவாரம் முதல் சாவி ஒப்படைப்பது வரை 8 கட்டங்களில் துல்லியமான கட்டுமானம்.',
    'process.s1': '1. ஆலோசனை & வடிவமைப்பு',
    'process.s1desc': 'தேவைகள் அறிதல், தள ஆய்வு, பட்ஜெட் திட்டம் மற்றும் கட்டிட வரைபடம் ஒப்புதல்.',
    'process.s2': '2. தள தயாரிப்பு',
    'process.s2desc': 'நிலம் சமன் செய்தல், மண் ஆய்வு, எல்லைகள் குறித்தல் மற்றும் பொருட்கள் கொண்டுவருதல்.',
    'process.s3': '3. அஸ்திவார வேலை',
    'process.s3desc': 'குழி தோண்டுதல், PCC வேலை, பிலின்த் பீம் RCC மற்றும் கரையான் எதிர்ப்பு சிகிச்சை.',
    'process.s4': '4. RCC கட்டமைப்பு வேலை',
    'process.s4desc': 'தூண்கள், பீம்கள் மற்றும் கூரை ஸ்லாப் கான்கிரீட் வேலைகள் சிறந்த கம்பிகளைக் கொண்டு செய்தல்.',
    'process.s5': '5. செங்கல் கட்டுவேலை',
    'process.s5desc': 'உயர்தர செங்கற்கள் மற்றும் துல்லியமான கலவை விகிதத்தில் செங்கல் சுவர்கள் கட்டுதல்.',
    'process.s6': '6. பூச்சு வேலைகள்',
    'process.s6desc': 'உள் & வெளி இரட்டை அடுக்கு பூச்சு, எலக்ட்ரிக்கல் பைப்பிங் மற்றும் பிளம்பிங் இணைப்புகள்.',
    'process.s7': '7. பினிஷிங் வேலைகள்',
    'process.s7desc': 'டைல்ஸ் பதித்தல், சுவர் புட்டி, பெயிண்டிங், கதவு & ஜன்னல்கள் பொருத்துதல்.',
    'process.s8': '8. தர ஆய்வு & சாவி ஒப்படைப்பு',
    'process.s8desc': 'முழுமையான சுத்தம், இறுதி தர ஆய்வு, சாவி ஒப்படைப்பு விழா மற்றும் ஆவணங்கள் வழங்குதல்.',

    // Why Choose Us
    'why.title': 'ஆரஞ்சு பில்டர்ஸை ஏன் தேர்வு செய்ய வேண்டும்?',
    'why.subtitle': 'உயர்தர உழைப்பு, நியாயமான விலை மற்றும் தெளிவான தொடர்புடன் மன அமைதி அளிக்கிறோம்.',
    'why.local': 'மதுரை உள்ளூர் அனுபவம்',
    'why.localDesc': 'மதுரை மண் வகைகள், நகராட்சி அனுமதிகள் மற்றும் உள்ளூர் வானிலை பற்றிய ஆழமான அறிவு.',
    'why.pricing': '100% வெளிப்படையான விலை',
    'why.pricingDesc': 'மறைமுக கட்டணங்கள் இல்லாத துல்லியமான செலவு மதிப்பீடு.',
    'why.team': 'திறமையான நிபுணர் குழு',
    'why.teamDesc': 'அனுபவமிக்க பொறியாளர் எர். நௌசாத் தலைமையில் தகுதிவாய்ந்த மேற்பார்வையாளர்கள்.',
    'why.materials': 'உயர்தர கட்டுமானப் பொருட்கள்',
    'why.materialsDesc': 'பிராண்டட் சிமெண்ட், தரமான கம்பிகள் மற்றும் அடர்த்தியான செங்கற்கள் மட்டுமே பயன்பாடு.',
    'why.updates': 'தினசரி முன்னேற்ற அறிக்கை',
    'why.updatesDesc': 'தினமும் புகைப்படம் மற்றும் வீடியோ அறிக்கைகள் வாடிக்கையாளருக்கு அனுப்புதல்.',
    'why.timely': 'சரியான நேரத்தில் ஒப்படைப்பு',
    'why.timelyDesc': 'திட்டமிட்ட காலத்தில் கட்டுமானத்தை முடித்து சாவி ஒப்படைக்கும் உறுதிப்பாடு.',

    // Testimonials
    'testi.title': 'வாடிக்கையாளர் கருத்துக்கள்',
    'testi.subtitle': 'எங்களை நம்பி கனவு இல்லம் கட்டிய மதுரை மக்களின் உண்மையான அனுபவங்கள்.',

    // FAQ
    'faq.title': 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
    'faq.subtitle': 'வீடு கட்டுமானம் மற்றும் கூலி ஒப்பந்தங்கள் தொடர்பான கேள்விகளுக்கான பதில்கள்.',

    // Contact
    'contact.title': 'ஆரஞ்சு பில்டர்ஸை தொடர்புகொள்ள',
    'contact.subtitle': 'வீடு கட்ட திட்டமிடுகிறீர்களா? இலவச தள ஆய்வு மற்றும் மதிப்பீட்டிற்கு எங்களை அழைக்கவும்.',
    'contact.name': 'முழு பெயர்',
    'contact.phone': 'தொலைபேசி எண்',
    'contact.email': 'மின்னஞ்சல் முகவரி',
    'contact.projectType': 'திட்ட வகை',
    'contact.location': 'மதுரையில் உள்ள இடம்',
    'contact.message': 'விவரங்கள் & செய்தி',
    'contact.send': 'தகவல் அனுப்புக',
    'contact.sending': 'அனுப்பப்படுகிறது...',
    'contact.success': 'நன்றி! உங்கள் தகவல் கிடைத்தது. 2 மணி நேரத்திற்குள் உங்களைத் தொடர்புகொள்கிறோம்.',

    // Common Buttons & Labels
    'btn.learnMore': 'மேலும் அறிய',
    'btn.callUs': 'இப்போதே அழைக்கவும்',
    'btn.whatsappUs': 'வாட்ஸ்அப்பில் பேசவும்',
    'btn.viewGallery': 'படங்களைப் பார்க்க',
    'footer.rights': 'ஆரஞ்சு பில்டர்ஸ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    'footer.tagline': 'நம்பிக்கை & தரத்துடன் மதுரையில் வீடுகள் கட்டுவோம்',

    // Language Toggle Tooltip
    'lang.current': 'தமிழ்',
    'lang.switch': 'English',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('ob_lang') as Language | null;
    if (savedLang && (savedLang === 'en' || savedLang === 'ta')) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'ta' : 'en';
    setLanguage(nextLang);
    localStorage.setItem('ob_lang', nextLang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
