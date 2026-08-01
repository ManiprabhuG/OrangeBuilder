'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Building2, MapPin, CheckCircle2, Clock, Filter, ArrowRight, X } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: 'ongoing' | 'completed' | 'labour' | 'residential';
  categoryLabel: string;
  location: string;
  status: string;
  statusColor: string;
  image: string;
  features: string[];
  description: string;
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState<'all' | 'ongoing' | 'completed' | 'labour' | 'residential'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 'proj-1',
      title: 'Sathamangalam Compact Residential Villa',
      category: 'completed',
      categoryLabel: 'Completed Homes',
      location: 'Sathamangalam, Madurai',
      status: 'Handed Over (Client: Mohamed Aabid)',
      statusColor: 'bg-emerald-500',
      image: '/images/tips-2.jpg',
      features: ['Individual Home', 'Red Brick Masonry', 'Low Budget Optimization', 'Custom Room Layout'],
      description:
        'Completed within timeline under strict budget control. Included daily progress reporting, custom room layouts, double coat plastering, and high-density brick construction.',
    },
    {
      id: 'proj-2',
      title: 'KK Nagar G+1 Structural RCC Construction',
      category: 'ongoing',
      categoryLabel: 'Ongoing Projects',
      location: 'KK Nagar, Madurai',
      status: 'Active Site Progress (RCC Stage)',
      statusColor: 'bg-[#F95700]',
      image: '/images/tips-3.jpg',
      features: ['G+1 Frame Structure', 'TMT Bar Bending', 'Heavy Concrete Casting', 'Column Alignment'],
      description:
        'Structural RCC framing for a 2,200 sq ft residential house. Includes foundation excavation, footing casting, RCC columns, plinth beam, and roof slab casting.',
    },
    {
      id: 'proj-3',
      title: 'Anna Nagar Labour Contract Masonry & Plastering',
      category: 'labour',
      categoryLabel: 'Labour Contract Works',
      location: 'Anna Nagar, Madurai',
      status: 'Plastering & Tile Work Active',
      statusColor: 'bg-amber-500',
      image: '/images/tips-4.jpg',
      features: ['Pure Labour Contract', 'Chamber Red Brick Work', 'Double Coat Plaster', 'Tile Installation'],
      description:
        'Labor contract execution for a private residential building. Our master masons executed precision brick masonry and exterior weatherproof plastering.',
    },
    {
      id: 'proj-4',
      title: 'Madurai East Modern Turnkey House',
      category: 'residential',
      categoryLabel: 'Residential Homes',
      location: 'Madurai East',
      status: 'Completed & Handed Over (Client: Abdul Mazeeth)',
      statusColor: 'bg-emerald-500',
      image: '/images/tips-5.jpg',
      features: ['Turnkey Construction', 'Quality Tested Materials', 'Sanitary & Electrical', 'Premium Paint Finish'],
      description:
        'Full turnkey residential construction project completed with complete client satisfaction. Focused on top quality materials, zero hidden costs, and on-time completion.',
    },
    {
      id: 'proj-5',
      title: 'Iyer Bungalow Foundation & Plinth Beam Site',
      category: 'ongoing',
      categoryLabel: 'Ongoing Projects',
      location: 'Iyer Bungalow, Madurai',
      status: 'Foundation & Brickwork Active',
      statusColor: 'bg-[#F95700]',
      image: '/images/tips-6.jpg',
      features: ['Soil Inspection', 'Anti-Termite Treatment', 'Plinth Beam RCC', 'Brick Masonry'],
      description:
        'Ongoing site execution starting from soil compaction, anti-termite chemical injection, heavy plinth RCC beam casting, and basement filling.',
    },
    {
      id: 'proj-6',
      title: 'TVS Nagar Custom Interior Finishing & Masonry',
      category: 'residential',
      categoryLabel: 'Residential Homes',
      location: 'TVS Nagar, Madurai',
      status: 'Completed (Client: Neethiselvam N)',
      statusColor: 'bg-emerald-500',
      image: '/images/tips-1.jpg',
      features: ['Compact Space Optimization', 'Neat Structural Design', 'Smooth Putty Finish', 'Tile Fitting'],
      description:
        'Special compact room layout project designed and built according to client requirements. Features high aesthetic finish, neat masonry, and durable materials.',
    },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="space-y-16 py-12">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#181F26] to-[#12161A] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <span className="text-xs font-bold tracking-widest text-[#F95700] uppercase">
            Our Work
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Construction Projects Gallery
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Explore our ongoing and completed residential construction sites and labour contract projects in Madurai.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 bg-gray-100 dark:bg-[#141A21] p-2 rounded-2xl border border-gray-200 dark:border-gray-800">
          {[
            { key: 'all', label: 'All Projects' },
            { key: 'ongoing', label: 'Ongoing Sites' },
            { key: 'completed', label: 'Completed Homes' },
            { key: 'labour', label: 'Labour Contract Works' },
            { key: 'residential', label: 'Residential Homes' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as any)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === tab.key
                  ? 'bg-[#F95700] text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-[#1C242E]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-[#181F26] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className={`absolute top-3 left-3 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${project.statusColor}`}
                >
                  {project.categoryLabel}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-1.5 text-xs text-[#F95700] font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.features.map((feat, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-[10px] font-semibold px-2.5 py-1 rounded-md"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                  <span className="text-[11px] font-semibold text-gray-400">
                    {project.status}
                  </span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-[#F95700] hover:underline flex items-center space-x-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#181F26] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 animate-in fade-in zoom-in duration-200">
            <div className="relative h-72 w-full">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <span
                className={`absolute bottom-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full uppercase ${selectedProject.statusColor}`}
              >
                {selectedProject.status}
              </span>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#F95700]">
                <MapPin className="w-4 h-4" />
                <span>{selectedProject.location}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {selectedProject.description}
              </p>
              <div>
                <span className="text-xs font-bold uppercase text-gray-400">Highlights & Scope:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedProject.features.map((feat, i) => (
                    <span
                      key={i}
                      className="bg-orange-50 dark:bg-orange-950/40 text-[#F95700] text-xs font-semibold px-3 py-1 rounded-lg border border-orange-200 dark:border-orange-900/30"
                    >
                      ✓ {feat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                <span className="text-xs text-gray-400 font-medium">Er. Nowsadh Site Execution</span>
                <Link
                  href="/contact"
                  onClick={() => setSelectedProject(null)}
                  className="bg-[#F95700] hover:bg-[#E04D00] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow"
                >
                  Enquire Similar Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Want to see our live construction sites in Madurai?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm max-w-lg mx-auto">
          We welcome clients for direct site visits in Sathamangalam, KK Nagar, and Anna Nagar to inspect our brickwork and RCC quality.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="bg-[#F95700] hover:bg-[#E04D00] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg inline-flex items-center space-x-2"
          >
            <span>Schedule Site Visit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
