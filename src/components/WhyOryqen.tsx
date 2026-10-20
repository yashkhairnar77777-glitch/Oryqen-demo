import React from 'react';
import { Smartphone, Compass, Zap, Target, Check, X } from 'lucide-react';
import { WHY_ORYQEN_POINTS } from '../data/portfolioData';

export const WhyOryqen: React.FC = () => {
  const icons = [
    <Smartphone className="w-5 h-5 text-violet-400" />,
    <Compass className="w-5 h-5 text-violet-400" />,
    <Zap className="w-5 h-5 text-violet-400" />,
    <Target className="w-5 h-5 text-violet-400" />
  ];

  const comparisonRows = [
    {
      feature: 'Mobile Usability & Touch Ergonomics',
      standardTemplate: 'Desktop scaled down with awkward pinch-to-zoom and microscopic buttons',
      oryqen: 'Native mobile-first UX with 44px+ touch targets and sticky booking bars'
    },
    {
      feature: 'Loading Speed & Code Cleanliness',
      standardTemplate: 'Bloated with 40+ plugins, slow sliders, and 4-6s mobile loading delay',
      oryqen: 'Zero bloat, clean modern code delivering sub-second initial render'
    },
    {
      feature: 'Conversion & Inquiry Pathways',
      standardTemplate: 'Buried contact forms and decorative fluff that confuses prospective clients',
      oryqen: 'Calculated visual pathways guiding visitors straight to call, book, or submit'
    },
    {
      feature: 'Brand Differentiation & Caliber',
      standardTemplate: 'Looks like hundreds of identical competitors using the same generic theme',
      oryqen: 'Cinematic visual identity tailored specifically to elevate your commercial status'
    }
  ];

  return (
    <section id="why-oryqen" className="py-20 md:py-28 relative border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400">
            <span>THE ORYQEN STANDARD</span>
            <span aria-hidden="true">·</span>
            <span>WHY CHOOSE US</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Websites Built To Generate Revenue, Not Just Fill Screen Space.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Most business websites lose over half their potential inquiries due to slow mobile loading,
            buried phone numbers, and confusing navigation. We solve each of these failure points by design.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {WHY_ORYQEN_POINTS.map((point, index) => (
            <div
              key={index}
              className="rounded-2xl border border-neutral-800/90 bg-neutral-900/30 p-6 flex flex-col justify-between space-y-4 hover:border-violet-500/30 transition-colors"
            >
              <div className="space-y-3">
                <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 inline-block">
                  {icons[index]}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-0.5">{point.title}</h3>
                  <span className="text-xs text-violet-400/90 font-medium block">{point.subtitle}</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">{point.description}</p>
              </div>

              <div className="pt-4 border-t border-neutral-800/70">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-white tracking-tight font-mono tabular-nums">
                    {point.metric}
                  </span>
                  <span className="text-[11px] text-neutral-400">{point.metricLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Matrix: Generic Templates vs ORYQEN */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 sm:p-8 overflow-hidden">
          <div className="mb-6 space-y-1">
            <h3 className="text-lg font-bold text-white">The Engineering Distinction</h3>
            <p className="text-xs text-neutral-400">
              Why commercial businesses outperform their competitors after switching from standard templates.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[580px]">
              <thead>
                <tr className="border-b border-neutral-800 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  <th className="py-3 px-4 w-1/3">Core Dimension</th>
                  <th className="py-3 px-4 w-1/3 text-neutral-400">Generic Templates / DIY Builders</th>
                  <th className="py-3 px-4 w-1/3 text-violet-400 font-bold">The ORYQEN Studio Build</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60 text-xs">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-900/60 transition-colors">
                    <td className="py-4 px-4 font-medium text-white">{row.feature}</td>
                    <td className="py-4 px-4 text-neutral-400">
                      <div className="flex items-start gap-2">
                        <X className="w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5" />
                        <span>{row.standardTemplate}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-neutral-200">
                      <div className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                        <span className="font-medium text-white">{row.oryqen}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
