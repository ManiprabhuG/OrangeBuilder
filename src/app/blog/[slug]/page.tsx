import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft, Tag, Share2, Phone, CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';

interface BlogPostData {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  content: string[];
}

const articlesData: Record<string, BlogPostData> = {
  'rcc-roof-slab-casting-tips-madurai': {
    slug: 'rcc-roof-slab-casting-tips-madurai',
    title: 'Top 7 RCC Roof Slab Casting Tips for Madurai Houses',
    category: 'RCC Tips',
    date: 'July 28, 2026',
    author: 'Er. Nowsadh',
    image: '/images/process_stage4_rcc_structure.png',
    content: [
      'The roof slab is the single most critical structural element in your house. In Madurai’s climate, high summer temperatures can cause rapid evaporation of water from freshly poured concrete, leading to plastic shrinkage cracks and future roof leaks if proper engineering guidelines are not strictly followed.',
      '1. High-Grade Steel & Cover Blocks: Ensure TMT steel bars (Fe-550 grade) are tied with correct lap lengths. Always use 20mm/25mm concrete cover blocks so rebar does not touch the wooden shuttering.',
      '2. Concrete Mix Ratio: For residential roofs, M20 grade (1 part cement : 1.5 parts sand : 3 parts coarse aggregate) or M25 ready-mix concrete should be used with minimum 0.45 water-cement ratio.',
      '3. Mechanical Vibration: Never rely on manual tamping. Use a mechanical needle vibrator continuously during pouring to remove trapped air pockets and honeycomb defects.',
      '4. 21-Day Continuous Ponding Curing: Create brick-mortar bunds over the slab and fill with 2 inches of water continuously for 21 days to achieve maximum compressive strength.',
      'At Orange Builders, Er. Nowsadh personally supervises every roof slab casting across our Madurai construction sites.',
    ],
  },
  'red-brick-vs-flyash-brick-madurai-construction': {
    slug: 'red-brick-vs-flyash-brick-madurai-construction',
    title: 'Red Brick vs. Flyash Brick: Which is Best for Madurai Construction?',
    category: 'Brickwork Tips',
    date: 'July 20, 2026',
    author: 'Orange Builders Team',
    image: '/images/process_stage5_brickwork.png',
    content: [
      'When planning house construction in Madurai, choosing the right masonry brick material is essential for thermal comfort, structural weight, and plastering durability.',
      'Chamber Red Bricks: Made from burnt clay, red bricks offer exceptional thermal insulation, high load-bearing capacity, and traditional durability. They perform exceptionally well in Madurai’s warm climate.',
      'Fly Ash Cement Bricks: Manufactured from fly ash, cement, and sand, fly ash bricks provide uniform shape, lower mortar consumption, and smooth surfaces. However, thermal insulation is slightly lower than red bricks.',
      'At Orange Builders, we recommend top-grade chamber red bricks for load-bearing walls and primary exterior structures.',
    ],
  },
  'waterproofing-guide-for-residential-homes': {
    slug: 'waterproofing-guide-for-residential-homes',
    title: 'Essential Terrace & Toilet Waterproofing Guide for Homeowners',
    category: 'Waterproofing Tips',
    date: 'July 15, 2026',
    author: 'Er. Nowsadh',
    image: '/images/project_kknagar.png',
    content: [
      'Water seepage is one of the most frustrating problems faced by home owners. Protecting your terrace, sunshades, and sunken toilet slabs during construction prevents costly repairs later.',
      '1. Sunken Slab Waterproofing: Apply 2 coats of polymer-modified cementitious chemical slurry before pipe fitting and fill sunken areas with light cinder aggregates.',
      '2. Terrace Slope & Brick Bat Coba: Lay terrace brick bat coba with 1:120 slope towards rainwater outlets to ensure zero water ponding.',
      '3. Protective Coating: Coat the terrace with UV-resistant reflective elastomeric waterproofing paint to reduce roof heat absorption by up to 5°C.',
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = articlesData[slug];
  if (!post) return { title: 'Article Not Found | Orange Builders' };
  return {
    title: `${post.title} | Orange Builders Madurai`,
    description: post.content[0],
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = articlesData[slug] || articlesData['rcc-roof-slab-casting-tips-madurai'];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <Link
        href="/blog"
        className="inline-flex items-center space-x-2 text-xs font-bold text-[#F95700] hover:underline"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Construction Tips</span>
      </Link>

      <div className="space-y-4">
        <span className="bg-[#F95700] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
          {post.category}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center space-x-4 text-xs text-gray-500 font-medium border-b border-gray-200 dark:border-gray-800 pb-4">
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-1 text-[#F95700]" />
            {post.date}
          </span>
          <span>•</span>
          <span className="flex items-center">
            <User className="w-4 h-4 mr-1 text-[#F95700]" />
            {post.author}
          </span>
        </div>
      </div>

      <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
      </div>

      <div className="prose dark:prose-invert max-w-none space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
        {post.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {/* Author & CTA Card */}
      <div className="bg-orange-50 dark:bg-[#181F26] p-8 rounded-2xl border border-orange-200 dark:border-gray-800 space-y-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          Planning house construction in Madurai?
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Get expert engineering advice from Er. Nowsadh and team. Call +91 99525 73873 or send an enquiry.
        </p>
        <Link
          href="/contact"
          className="bg-[#F95700] hover:bg-[#E04D00] text-white text-xs font-bold px-6 py-3 rounded-xl shadow inline-flex items-center space-x-2"
        >
          <span>Get Free Consultation</span>
        </Link>
      </div>
    </div>
  );
}
