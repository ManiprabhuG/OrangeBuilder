import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Building2, Users, HardHat, FileText, Hammer, CheckCircle2, ArrowRight, ShieldCheck, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | Orange Builders Madurai - House Construction & Labour Contract',
  description:
    'Comprehensive residential construction services in Madurai: turnkey home building, labour contract services, plastering & finishing, site supervision, and civil consultancy.',
};

export default function ServicesPage() {
  const servicesList = [
    {
      id: 'residential',
      title: 'Residential House Construction',
      icon: Building2,
      subtitle: 'Complete turnkey home building from foundation excavation to key handover in Madurai.',
      items: [
        'Individual Residential Houses',
        'Luxury & Modern Independent Villas',
        'G+1 & G+2 Multi-Storey Homes',
        'Custom Architectural House Plans',
        'Turnkey Material & Labour Packages',
      ],
      description:
        'We construct long-lasting residential homes across Madurai with high-grade TMT steel, branded cement, and premium red bricks. Our site engineering team ensures structural stability and weather resistance for decades.',
    },
    {
      id: 'labour-contract',
      title: 'Labour Contract Services',
      icon: Users,
      subtitle: 'Skilled masonic, structural, and finishing labour workforce with dedicated supervision.',
      items: [
        'Brick Masonry & Wall Construction',
        'RCC Concrete Casting & Shuttering',
        'Tile Laying & Flooring Labor',
        'Plumbing Line Layout & Sanitary Work',
        'Electrical Conduit & Fitting Labor',
      ],
      description:
        'For clients who prefer purchasing their own construction materials, we offer transparent labour contract packages. Our disciplined masons and workers execute the work under strict engineer monitoring.',
    },
    {
      id: 'plastering-finishing',
      title: 'Plastering & Wall Finishing',
      icon: Hammer,
      subtitle: 'Flawless interior wall putty, smooth cement plastering, and exterior protective coatings.',
      items: [
        'Double-Coat Interior Plastering',
        'Weatherproof Exterior Sand Plastering',
        'Texture Wall Designs & Finishes',
        'Wall Putty Primer & Paint Application',
        'Crack-Resistant Plaster Treatments',
      ],
      description:
        'Finishing work defines the beauty of your home. We use calibrated sand-cement mortar ratios to ensure smooth, crack-free plastering for interior and exterior walls.',
    },
    {
      id: 'site-supervision',
      title: 'Site Supervision & Inspection',
      icon: HardHat,
      subtitle: 'Daily site monitoring, concrete strength checks, and transparent photo reporting.',
      items: [
        'Daily Site Inspection by Er. Nowsadh',
        'Concrete Mix & Curing Supervision',
        'Daily Photo & Video WhatsApp Reports',
        'Material Quality Testing Verification',
        'Stage-by-Stage Safety & Code Compliance',
      ],
      description:
        'Never worry about construction shortcuts. Our engineers inspect curing cycles, steel bending schedules, and concrete pouring ratios on-site every single day.',
    },
    {
      id: 'consultancy',
      title: 'Construction Consultancy & Cost Estimation',
      icon: FileText,
      subtitle: 'Expert budget planning, floor plan feedback, and material selection guidance in Madurai.',
      items: [
        'Detailed Line-Item Cost Estimates',
        'Building Material Quality Guidance',
        'Budget Optimization Strategies',
        'Madurai Soil & Foundation Advice',
        'Structural Plan Feasibility Reviews',
      ],
      description:
        'Unsure how to start your construction journey? We help you calculate realistic construction budgets, choose the right materials, and avoid expensive mid-project mistakes.',
    },
  ];

  return (
    <div className="space-y-20 py-12">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#181F26] to-[#12161A] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <span className="text-xs font-bold tracking-widest text-[#F95700] uppercase">
            What We Offer
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Our Construction Services
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Professional, affordable, and transparent building solutions tailored to your dream home in Madurai.
          </p>
        </div>
      </section>

      {/* Services List Detail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {servicesList.map((service, idx) => {
          const Icon = service.icon;
          const isEven = idx % 2 === 0;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 sm:p-12 rounded-3xl border border-gray-200 dark:border-gray-800 ${
                isEven ? 'bg-white dark:bg-[#181F26]' : 'bg-orange-50/40 dark:bg-[#141A21]'
              }`}
            >
              <div className={`lg:col-span-7 space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                <div className="w-12 h-12 rounded-2xl bg-[#F95700]/10 flex items-center justify-center text-[#F95700]">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h2>
                  <p className="text-sm font-semibold text-[#F95700] mt-1">
                    {service.subtitle}
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Key Scope Covered:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-gray-800 dark:text-gray-200">
                    {service.items.map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="bg-[#F95700] hover:bg-[#E04D00] text-white text-xs font-bold px-6 py-3 rounded-xl shadow inline-flex items-center space-x-2"
                  >
                    <span>Request Quote for {service.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className={`lg:col-span-5 ${!isEven ? 'lg:order-1' : ''}`}>
                <div className="bg-[#12161A] text-white p-8 rounded-2xl border border-gray-800 space-y-4 shadow-xl">
                  <ShieldCheck className="w-8 h-8 text-[#F95700]" />
                  <h3 className="text-xl font-bold">Why Orange Builders for this service?</h3>
                  <ul className="text-xs text-gray-300 space-y-2">
                    <li>✓ Direct Supervision by Er. Nowsadh</li>
                    <li>✓ Itemized material & labour contract agreement</li>
                    <li>✓ No unexpected cost overruns</li>
                    <li>✓ Tested concrete & steel standards</li>
                    <li>✓ Daily digital progress updates</li>
                  </ul>
                  <div className="pt-2 border-t border-gray-800">
                    <a
                      href="tel:+919952573873"
                      className="text-xs font-bold text-amber-400 hover:underline flex items-center space-x-1"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call +91 99525 73873 for immediate consultation</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Need a Custom Labour or Construction Quote?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xl mx-auto">
          Share your site details and architectural drawing with us for a detailed cost breakdown.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="bg-[#F95700] hover:bg-[#E04D00] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg inline-flex items-center space-x-2"
          >
            <span>Get Free Quote Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
