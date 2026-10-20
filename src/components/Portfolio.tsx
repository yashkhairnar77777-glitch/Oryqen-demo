import React, { useState } from 'react';
import { ArrowUpRight, Eye, Layers } from 'lucide-react';
import { CONCEPT_PROJECTS } from '../data/portfolioData';
import { BusinessCategory, ConceptProject } from '../types';

interface PortfolioProps {
  onSelectProject: (project: ConceptProject) => void;
  onOpenInquiryForCategory: (categoryName: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  onSelectProject,
  onOpenInquiryForCategory
}) => {
  const [activeCategory, setActiveCategory] = useState<BusinessCategory>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? CONCEPT_PROJECTS
      : CONCEPT_PROJECTS.filter((p) => p.category === activeCategory);

  const categories: { key: BusinessCategory; label: string }[] = [
    { key: 'all', label: 'All Concepts' },
    { key: 'hospitality', label: 'Restaurants & Dining' },
    { key: 'venues', label: 'Banquet & Event Halls' },
    { key: 'beauty', label: 'Salons & Spas' },
    { key: 'realestate', label: 'Luxury Real Estate' },
    { key: 'retail', label: 'Artisanal Shops' }
  ];

  return (
    <section id="portfolio" className="py-20 md:py-28 relative border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400">
              <span>PORTFOLIO CONCEPTS</span>
              <span aria-hidden="true">·</span>
              <span>CLIENT DEMO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              Engineered For Conversion Across Key Business Sectors.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Explore our interactive concept prototypes. Each demo illustrates bespoke visual architecture,
              seamless booking workflows, and mobile optimization designed to capture qualified customer inquiries.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-400 bg-neutral-900/80 border border-neutral-800 px-3.5 py-2 rounded-lg self-start md:self-auto">
            <Layers className="w-3.5 h-3.5 text-violet-400 shrink-0" />
            <span>Interactive prototypes with live device previews</span>
          </div>
        </div>

        {/* Interactive Filter Tabs (Functional button controls) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-950/60'
                  : 'bg-neutral-900/60 hover:bg-neutral-800/70 text-neutral-400 hover:text-neutral-200 border border-neutral-800/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => {
            const isFeatured = index === 0 && activeCategory === 'all';

            return (
              <div
                key={project.id}
                className={`group relative rounded-2xl border border-neutral-800/90 bg-neutral-900/30 hover:border-violet-500/40 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-xl hover:shadow-black/50 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Visual Asset Container */}
                <div
                  className={`relative overflow-hidden cursor-pointer ${
                    isFeatured ? 'aspect-[16/10] sm:aspect-[16/8]' : 'aspect-[16/10]'
                  }`}
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-90" />

                  {/* Clean unboxed demo label */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-violet-300 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-violet-500/30">
                    <span>Demo Concept</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.categoryLabel}</span>
                  </div>

                  {/* Hover Quick Action Indicator */}
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-violet-600 text-white text-[11px] font-medium shadow-md">
                      <Eye className="w-3 h-3" />
                      <span>Live Prototype</span>
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3
                        onClick={() => onSelectProject(project)}
                        className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Core Highlights */}
                  <div className="pt-2 border-t border-neutral-800/80 space-y-1.5">
                    {project.coreHighlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <span className="w-1 h-1 rounded-full bg-violet-500 shrink-0" />
                        <span className="truncate">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors cursor-pointer"
                    >
                      <span>Explore Interactive Prototype</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenInquiryForCategory(project.categoryLabel)}
                      className="text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear Notice Footnote (Mandatory anti-hallucination compliance) */}
        <div className="mt-12 text-center">
          <p className="text-xs text-neutral-400 max-w-xl mx-auto">
            All concepts showcased above are original design prototypes crafted by ORYQEN Studio.
            We tailor custom website architecture, typography, and booking logic for every individual client.
          </p>
        </div>
      </div>
    </section>
  );
};
