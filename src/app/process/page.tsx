import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { CheckCircle2, ShieldCheck, ArrowRight, HardHat, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Process | Orange Builders Madurai - 8-Stage House Construction Roadmap',
  description:
    'Explore the transparent 8-stage residential construction process followed by Orange Builders in Madurai from planning to key handover.',
};

export default function ProcessPage() {
  const stages = [
    {
      step: '01',
      title: 'Stage 1: Planning & Consultation',
      image: '/images/tips-1.jpg',
      desc: 'Understanding client requirements, site layout verification, budget estimation, structural floor plan finalization, and municipal permission guidance.',
      checklist: [
        'Detailed line-item cost estimation agreement',
        'Floor plan & structural design approval',
        'Site dimension & soil load verification',
        'Contractor-client transparency pledge',
      ],
    },
    {
      step: '02',
      title: 'Stage 2: Site Preparation',
      image: '/images/tips-2.jpg',
      desc: 'Clearing vegetation, ground leveling, boundary line marking (setbacks), temporary water & electrical setup, and material storage shed construction.',
      checklist: [
        'Boundary demarcation with total station',
        'Water source & power connection setup',
        'Storage shed & cement security setup',
        'Site access mobilization for trucks',
      ],
    },
    {
      step: '03',
      title: 'Stage 3: Foundation Work',
      image: '/images/tips-3.jpg',
      desc: 'Excavation to hard soil strata, Plain Cement Concrete (PCC) bed, RCC isolated column footings, plinth beam RCC, and chemical anti-termite treatment.',
      checklist: [
        'Excavation depth check to hard rock/soil',
        'Chemical anti-termite barrier injection',
        'Plinth beam RCC with TMT steel cages',
        'Compacted quarry dust basement filling',
      ],
    },
    {
      step: '04',
      title: 'Stage 4: RCC Structure Work',
      image: '/images/tips-4.jpg',
      desc: 'Erection of RCC columns, beam formwork, lintel beam casting, and roof slab RCC pouring using high-grade cement and vibrator compaction.',
      checklist: [
        'TMT steel bar bending & lap length checks',
        'M20/M25 concrete mix ratio testing',
        'Mechanical needle vibrator compaction',
        '21-day slab water curing monitoring',
      ],
    },
    {
      step: '05',
      title: 'Stage 5: Brickwork & Masonry',
      image: '/images/tips-5.jpg',
      desc: 'Laying high-density red chamber bricks with 1:6 cement mortar, column-wall bonding keys, lintel bands, and door/window frame installations.',
      checklist: [
        'Chamber red brick water soaking before laying',
        'Plumb bob wall vertical alignment check',
        'RC lintel bands above all openings',
        'Curing of masonry walls for 7-10 days',
      ],
    },
    {
      step: '06',
      title: 'Stage 6: Plastering & Utility Lines',
      image: '/images/tips-6.jpg',
      desc: 'Electrical conduit wall chasing, PVC plumbing line installation, double-coat interior smooth plastering, and exterior weatherproof sand plaster.',
      checklist: [
        'PVC electrical conduit box embedding',
        'Pressure-tested plumbing & drainage pipes',
        'Chicken mesh placement over beam-wall joints',
        'Smooth sponge-finish cement plastering',
      ],
    },
    {
      step: '07',
      title: 'Stage 7: Finishing & Aesthetics',
      image: '/images/tips-1.jpg',
      desc: 'Vitrified tile laying with tile spacers, wall putty application, primer & paint coats, sanitary fixture fitting, and door/window shutter fixing.',
      checklist: [
        'Vitrified tile level & slope check in toilets',
        '2 coats wall putty + 2 coats exterior paint',
        'Branded sanitary & CP fittings installation',
        'Door lock & glass window testing',
      ],
    },
    {
      step: '08',
      title: 'Stage 8: Final Quality Audit & Handover',
      image: '/images/tips-2.jpg',
      desc: 'Thorough post-construction site cleaning, electrical & plumbing system audit, final quality checklist verification, and key handover ceremony.',
      checklist: [
        'Deep cleaning of tiles, glass, and fixtures',
        'Final quality audit sign-off by Er. Nowsadh',
        'Documentation & warranty file handover',
        'Ceremonial key handover to homeowner',
      ],
    },
  ];

  return (
    <div className="space-y-16 py-12">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#181F26] to-[#12161A] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <span className="text-xs font-bold tracking-widest text-[#F95700] uppercase">
            Execution Roadmap
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Our 8-Stage Construction Process
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Every home we build in Madurai follows a disciplined, transparent execution workflow with strict quality control checklists.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {stages.map((stage, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={stage.step}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm ${
                  isEven ? 'bg-white dark:bg-[#181F26]' : 'bg-gray-50 dark:bg-[#141A21]'
                }`}
              >
                <div className={`lg:col-span-7 space-y-5 ${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <span className="bg-[#F95700] text-white font-black text-sm px-3.5 py-1.5 rounded-xl">
                      {stage.step}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stage.title}
                    </h2>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {stage.desc}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F95700]">
                      Quality Control Checklist:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-gray-800 dark:text-gray-200">
                      {stage.checklist.map((item, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-5 ${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-800">
                    <Image
                      src={stage.image}
                      alt={stage.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white text-xs font-bold flex items-center space-x-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Er. Nowsadh Verified Quality</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Want a Stage-by-Stage Cost Quote for Your Plot?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm max-w-lg mx-auto">
          Contact Orange Builders today for an on-site consultation and customized construction estimate.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="bg-[#F95700] hover:bg-[#E04D00] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg inline-flex items-center space-x-2"
          >
            <span>Start Your Construction</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
