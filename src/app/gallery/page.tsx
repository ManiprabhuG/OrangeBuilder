'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, X, Maximize2, Layers } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'site' | 'process' | 'team' | 'finishing' | 'completed';
  categoryLabel: string;
  image: string;
  caption: string;
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g-1',
      title: 'Er. Nowsadh & Skilled Construction Force',
      category: 'team',
      categoryLabel: 'Team at Work',
      image: '/images/Orangeteam.jpg',
      caption: 'Site engineers, supervisors, and master masons on active Madurai construction site.',
    },
    {
      id: 'g-2',
      title: 'RCC Column & Slab Steel Binding',
      category: 'site',
      categoryLabel: 'Site Progress',
      image: '/images/process_stage4_rcc_structure.png',
      caption: 'Reinforcement TMT steel cage erection for G+1 residential house in Madurai.',
    },
    {
      id: 'g-3',
      title: 'Chamber Red Brick Masonry Wall Execution',
      category: 'process',
      categoryLabel: 'Construction Process',
      image: '/images/process_stage5_brickwork.png',
      caption: 'High-density red brick mortar laying with line and level verification.',
    },
    {
      id: 'g-4',
      title: 'Heavy RCC Roof Slab Pouring & Vibration',
      category: 'process',
      categoryLabel: 'Construction Process',
      image: '/images/project_kknagar.png',
      caption: 'Concrete pouring with mechanical needle vibrator compaction for maximum strength.',
    },
    {
      id: 'g-5',
      title: 'Double Coat Exterior Plastering & Putty',
      category: 'finishing',
      categoryLabel: 'Finishing Works',
      image: '/images/process_stage6_plastering.png',
      caption: 'Smooth cement plastering and weatherproof wall coating preparation.',
    },
    {
      id: 'g-6',
      title: 'Completed Turnkey Villa Handover in Madurai',
      category: 'completed',
      categoryLabel: 'Completed Homes',
      image: '/images/project_madurai_east.png',
      caption: 'Custom residential villa handed over to super happy homeowner.',
    },
    {
      id: 'g-7',
      title: 'Foundation & Plinth Beam Trench Excavation',
      category: 'site',
      categoryLabel: 'Site Progress',
      image: '/images/process_stage3_foundation.png',
      caption: 'Excavation to hard soil strata with anti-termite treatment.',
    },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-16 py-12">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#181F26] to-[#12161A] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <span className="text-xs font-bold tracking-widest text-[#F95700] uppercase">
            Visual Showroom
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Construction Photo Gallery
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Real site photos documenting our engineering process, team members, masonry quality, and completed homes in Madurai.
          </p>
        </div>
      </section>

      {/* Category Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 bg-gray-100 dark:bg-[#141A21] p-2 rounded-2xl border border-gray-200 dark:border-gray-800">
          {[
            { key: 'all', label: 'All Photos' },
            { key: 'site', label: 'Site Progress' },
            { key: 'process', label: 'Construction Process' },
            { key: 'team', label: 'Team at Work' },
            { key: 'finishing', label: 'Finishing Works' },
            { key: 'completed', label: 'Completed Homes' },
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat.key
                  ? 'bg-[#F95700] text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-[#1C242E]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="relative h-72 rounded-2xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-800 group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <span className="absolute top-3 left-3 bg-[#F95700] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                {item.categoryLabel}
              </span>

              <div className="absolute top-3 right-3 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <h3 className="font-bold text-sm leading-snug">{item.title}</h3>
                <p className="text-xs text-gray-300 line-clamp-1">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-[#141A21] rounded-3xl overflow-hidden shadow-2xl border border-gray-800 animate-in zoom-in duration-200">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-20 bg-black/60 text-white p-2.5 rounded-full hover:bg-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative h-[450px] w-full">
              <Image
                src={activeImage.image}
                alt={activeImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-6 bg-[#181F26] text-white space-y-2">
              <span className="text-[#F95700] text-xs font-bold uppercase tracking-wider">
                {activeImage.categoryLabel}
              </span>
              <h3 className="text-xl font-bold">{activeImage.title}</h3>
              <p className="text-sm text-gray-300">{activeImage.caption}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
