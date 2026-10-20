import React from 'react';
import { ArrowDown, ArrowUpRight, Compass, Sparkles, Smartphone, Zap } from 'lucide-react';
import { HeroScene3D } from './HeroScene3D';

interface HeroProps {
  onExploreWork: () => void;
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onStartProject }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background radial gradient mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-violet-900/15 via-purple-950/5 to-transparent pointer-events-none blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Clean unboxed editorial kicker (zero pill box) */}
            <div className="flex items-center gap-2 text-xs font-medium tracking-wider text-violet-400 uppercase">
              <span>ORYQEN STUDIO</span>
              <span aria-hidden="true">·</span>
              <span>DIGITAL EXPERIENCES FOR BUSINESSES</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
              Your Business Deserves a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-violet-500">
                Better Website.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-2xl">
              We turn business ideas into modern digital experiences. Handcrafted web design for restaurants,
              banquet halls, salons, real estate, and ambitious businesses that demand real inquiries.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onStartProject}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-violet-900/40 hover:shadow-violet-600/30 cursor-pointer"
              >
                <span>Let's Build Yours</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-neutral-700/80 hover:border-violet-500/50 bg-neutral-900/40 hover:bg-neutral-800/60 text-neutral-200 hover:text-white font-medium text-sm transition-all duration-200 cursor-pointer"
              >
                <span>Explore Our Work</span>
                <ArrowDown className="w-4 h-4 text-violet-400" />
              </button>
            </div>

            {/* Industry Focus Indicators */}
            <div className="pt-4 border-t border-neutral-800/80">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-neutral-400">
                <span className="text-neutral-500">Industry Specializations:</span>
                <span className="hover:text-violet-300 transition-colors">Restaurants & Bars</span>
                <span className="text-neutral-700">/</span>
                <span className="hover:text-violet-300 transition-colors">Banquet Halls</span>
                <span className="text-neutral-700">/</span>
                <span className="hover:text-violet-300 transition-colors">Salons & Spas</span>
                <span className="text-neutral-700">/</span>
                <span className="hover:text-violet-300 transition-colors">Luxury Real Estate</span>
                <span className="text-neutral-700">/</span>
                <span className="hover:text-violet-300 transition-colors">Boutique Shops</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Spatial Object */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full relative">
              <HeroScene3D />
            </div>
          </div>
        </div>

        {/* Studio Core Standards Strip (below hero split) */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-neutral-800/90 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-violet-400">
              <Smartphone className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300">Mobile-First</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Designed thumb-first for Android and iOS touchscreens where clients browse.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-violet-400">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300">Sub-Second Speed</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Lightweight bespoke code without bloated visual builders or sluggish plugins.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-violet-400">
              <Compass className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300">Conversion UX</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Clear pathways to reservations, appointments, inquiries, and customer calls.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-violet-400">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300">Bespoke Aesthetics</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Tailored visual identities that elevate your real-world business caliber.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
