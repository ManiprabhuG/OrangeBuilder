'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
}

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const posts: BlogPost[] = [
    {
      slug: 'rcc-roof-slab-casting-tips-madurai',
      title: 'Top 7 RCC Roof Slab Casting Tips for Madurai Houses',
      category: 'RCC Tips',
      date: 'July 28, 2026',
      author: 'Er. Nowsadh',
      image: '/images/tips-1.jpg',
      excerpt:
        'Learn how proper concrete mix ratios, mechanical vibration, TMT bar cover blocks, and 21-day water curing prevent roof cracks and leakage in Madurai weather.',
    },
    {
      slug: 'red-brick-vs-flyash-brick-madurai-construction',
      title: 'Red Brick vs. Flyash Brick: Which is Best for Madurai Construction?',
      category: 'Brickwork Tips',
      date: 'July 20, 2026',
      author: 'Orange Builders Team',
      image: '/images/tips-2.jpg',
      excerpt:
        'A comprehensive comparison of compressive strength, thermal insulation, water absorption, and cost efficiency between chamber red bricks and flyash bricks.',
    },
    {
      slug: 'waterproofing-guide-for-residential-homes',
      title: 'Essential Terrace & Toilet Waterproofing Guide for Homeowners',
      category: 'Waterproofing Tips',
      date: 'July 15, 2026',
      author: 'Er. Nowsadh',
      image: '/images/tips-3.jpg',
      excerpt:
        'Avoid dampness, saltpetre efflorescence, and ceiling leaks with modern elastomeric chemical waterproofing and brick bat coba slope laying.',
    },
    {
      slug: 'how-to-plan-house-construction-budget-in-madurai',
      title: 'How to Plan Your House Construction Budget in Madurai (No Escalations)',
      category: 'Budget Planning',
      date: 'July 10, 2026',
      author: 'Orange Builders Team',
      image: '/images/tips-4.jpg',
      excerpt:
        'Step-by-step framework to calculate structure vs finishing costs, reserve contingency funds, and avoid hidden contractor charges during house building.',
    },
    {
      slug: 'best-cement-and-steel-brands-for-home-building',
      title: 'How to Select the Right Cement & Steel Brands for Your Foundation',
      category: 'Material Selection',
      date: 'June 30, 2026',
      author: 'Er. Nowsadh',
      image: '/images/tips-5.jpg',
      excerpt:
        'Understanding Fe-550 TMT steel bars, OPC 53 grade cement for RCC structures, and PPC cement for masonry plastering.',
    },
    {
      slug: 'labour-contract-vs-turnkey-construction-guide',
      title: 'Labour Contract vs Turnkey Construction: Which Option Suits You?',
      category: 'Home Construction Tips',
      date: 'June 22, 2026',
      author: 'Orange Builders Team',
      image: '/images/tips-6.jpg',
      excerpt:
        'Detailed breakdown of pros, cons, time commitment, and financial control when choosing between pure labour contracts and turnkey construction.',
    },
  ];

  const categories = [
    'All',
    'Home Construction Tips',
    'RCC Tips',
    'Brickwork Tips',
    'Waterproofing Tips',
    'Budget Planning',
    'Material Selection',
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 py-12">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#181F26] to-[#12161A] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <span className="text-xs font-bold tracking-widest text-[#F95700] uppercase">
            Knowledge Base
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Construction Tips & Articles
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Expert building guidance, material selection advice, and budget planning tips for building your home in Madurai.
          </p>
        </div>
      </section>

      {/* Search & Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search tips, RCC, waterproofing..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white dark:bg-[#181F26] border border-gray-200 dark:border-gray-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#F95700]"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#F95700] text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 text-gray-500 text-sm">
            No construction articles found matching your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white dark:bg-[#181F26] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#F95700] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 text-[11px] text-gray-400 font-medium">
                      <span className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center">
                        <User className="w-3.5 h-3.5 mr-1" />
                        {post.author}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-gray-900 dark:text-white leading-snug group-hover:text-[#F95700] transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-bold text-[#F95700] hover:underline flex items-center space-x-1"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}
