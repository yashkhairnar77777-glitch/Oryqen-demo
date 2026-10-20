import React from 'react';
import { ArrowUpRight, Check, Clock, Sparkles } from 'lucide-react';
import { SERVICES_LIST } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 md:py-28 relative border-t border-neutral-800/80 bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400">
            <span>STUDIO CAPABILITIES</span>
            <span aria-hidden="true">·</span>
            <span>SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Complete Digital Flagships Engineered For Commercial Impact.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            From single high-conversion landing pages to comprehensive multi-page business websites with
            custom booking integrations, we engineer digital experiences that turn visitors into loyal clients.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_LIST.map((service, index) => {
            const isWide = index === 0;

            return (
              <div
                key={service.id}
                className={`relative rounded-2xl border border-neutral-800/90 bg-neutral-900/40 p-6 sm:p-8 flex flex-col justify-between hover:border-violet-500/40 transition-all duration-300 group hover:shadow-xl hover:shadow-black/40 ${
                  isWide ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="space-y-4">
                  {/* Service Number & Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-violet-400/90 tracking-widest font-mono">
                      {service.number}
                    </span>
                    <span className="text-[11px] text-neutral-400 flex items-center gap-1.5 bg-neutral-950 px-2.5 py-1 rounded border border-neutral-800">
                      <Clock className="w-3 h-3 text-violet-400" />
                      <span>{service.turnaround}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="pt-2 space-y-2">
                    <span className="text-[11px] font-semibold text-neutral-300 uppercase tracking-wider block">
                      Core Inclusions:
                    </span>
                    <ul className="space-y-1.5">
                      {service.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Ideal For & Inquire CTA */}
                <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between gap-4">
                  <div className="text-[11px] text-neutral-400 truncate max-w-[200px] sm:max-w-xs">
                    <span className="text-neutral-500">Ideal for: </span>
                    <span className="text-neutral-300">{service.idealFor}</span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-violet-400 hover:text-white transition-colors cursor-pointer shrink-0"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
