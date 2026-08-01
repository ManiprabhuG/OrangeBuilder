import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShieldCheck, Target, Eye, Award, CheckCircle2, ArrowRight, HardHat, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Orange Builders Madurai - Trusted Residential Construction',
  description:
    'Learn about Orange Builders, Madurai’s trusted residential house construction company led by Er. Nowsadh. Complete transparency, skilled labour team, and engineering quality.',
};

export default function AboutPage() {
  return (
    <div className="space-y-20 py-12">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#181F26] to-[#12161A] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <span className="text-xs font-bold tracking-widest text-[#F95700] uppercase">
            Our Story & Values
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            About Orange Builders
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Building durable, affordable homes in Madurai with complete transparency, skilled craftsmanship, and dedicated site engineering.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
            <Image
              src="/images/Orangeteam.jpg"
              alt="Orange Builders Team in Madurai"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#F95700] uppercase">
              Who We Are
            </span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
              A Madurai Construction Company Founded on Trust & Excellence
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Orange Builders is a Madurai-based construction company dedicated to building durable, affordable homes with complete transparency. We specialize in residential construction and labour contract services, handling every stage from foundation excavation to final interior finishing with a skilled local team.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Under the leadership of Er. Nowsadh, every project we take up is treated with utmost responsibility — because for us, building a home means building trust that lasts for generations.
            </p>

            <div className="pt-2 flex items-center space-x-6 text-sm font-bold text-[#F95700]">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5" />
                <span>100% Quality Material Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 dark:bg-[#141A21] py-16 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white dark:bg-[#1C242E] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950/50 flex items-center justify-center text-[#F95700]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                To deliver quality residential construction in Madurai that is affordable, timely, and transparent. We ensure clients get expert execution without hidden costs, delays, or compromises on material specifications.
              </p>
            </div>

            <div className="bg-white dark:bg-[#1C242E] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950/50 flex items-center justify-center text-[#F95700]">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                To become Madurai’s most trusted name in residential house construction by setting benchmarks in structural quality, worker safety, transparent communication, and absolute client satisfaction.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#F95700] uppercase">
            Our Commitments
          </span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Core Construction Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'End-to-end residential construction with engineering precision',
            'Transparent labour contract agreements with itemized rates',
            'Strict quality checks on concrete, steel, and masonry work',
            'Real-time daily site progress photo and video updates',
            'Long-term customer relationships with post-handover support',
            'Strict adherence to Madurai municipal building regulations',
          ].map((goal, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white dark:bg-[#181F26] border border-gray-200 dark:border-gray-800 shadow-sm flex items-start space-x-3"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                {goal}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-900 text-white py-16 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-[#F95700] uppercase">
              Meet the Force
            </span>
            <h2 className="text-3xl font-bold">Our Experienced Team</h2>
            <p className="text-gray-400 text-sm">
              Led by Er. Nowsadh, our team brings together site engineers, skilled supervisors, master masons, and structural workers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#181F26] p-6 rounded-xl border border-gray-800 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#F95700]/20 flex items-center justify-center text-[#F95700]">
                <HardHat className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg text-white">Er. Nowsadh</h4>
              <p className="text-xs text-[#F95700] font-semibold">Founder & Chief Engineer</p>
              <p className="text-xs text-gray-400">Overarching project management, site quality control, and client strategy.</p>
            </div>

            <div className="bg-[#181F26] p-6 rounded-xl border border-gray-800 space-y-3">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                <HardHat className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg text-white">Site Engineers</h4>
              <p className="text-xs text-amber-400 font-semibold">Structural & Civil Supervision</p>
              <p className="text-xs text-gray-400">Daily site supervision, structural alignment, and concrete mix checks.</p>
            </div>

            <div className="bg-[#181F26] p-6 rounded-xl border border-gray-800 space-y-3">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                <HardHat className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg text-white">Site Supervisors</h4>
              <p className="text-xs text-blue-400 font-semibold">Logistics & Daily Execution</p>
              <p className="text-xs text-gray-400">Managing daily labour schedules, material logs, and client photo reporting.</p>
            </div>

            <div className="bg-[#181F26] p-6 rounded-xl border border-gray-800 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <HardHat className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg text-white">Skilled Labour Team</h4>
              <p className="text-xs text-emerald-400 font-semibold">Master Masons & Craftsmen</p>
              <p className="text-xs text-gray-400">Expert brick masons, shuttering carpenters, bar benders, and tile fitters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Want to discuss your construction plan in Madurai?
        </h2>
        <div className="flex justify-center space-x-4">
          <Link
            href="/contact"
            className="bg-[#F95700] hover:bg-[#E04D00] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg inline-flex items-center space-x-2"
          >
            <span>Contact Er. Nowsadh</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
