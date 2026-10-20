import React from 'react';
import { ArrowRight, Compass, Palette, Code2, Rocket } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const Process: React.FC = () => {
  const stepIcons = [
    <Compass className="w-5 h-5 text-violet-400" />,
    <Palette className="w-5 h-5 text-violet-400" />,
    <Code2 className="w-5 h-5 text-violet-400" />,
    <Rocket className="w-5 h-5 text-violet-400" />
  ];

  const stepDeliverables = [
    'Brand discovery questionnaire, competitor analysis, sitemap architecture',
    'Interactive desktop & mobile visual prototypes, typographic and color direction',
    'Pixel-perfect responsive frontend, interactive booking/menu widgets, speed tuning',
    'Domain DNS connection, SSL certificates, search indexing, and post-launch support'
  ];

  return (
    <section id="process" className="py-20 md:py-28 relative border-t border-neutral-800/80 bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400">
            <span>METHODOLOGY</span>
            <span aria-hidden="true">·</span>
            <span>HOW WE WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            A Structured, Transparent Path From Concept To High-Performing Launch.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            We operate with clear milestones, rapid iterations, and constant communication.
            No mysterious black boxes, no endless delays.
          </p>
        </div>

        {/* Process Steps Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="relative rounded-2xl border border-neutral-800/90 bg-neutral-900/40 p-6 flex flex-col justify-between hover:border-violet-500/40 transition-colors group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800">
                    {stepIcons[index]}
                  </div>
                  <span className="text-sm font-bold font-mono text-violet-400/80">
                    Step {step.step}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-violet-300 transition-colors">
                    {step.name}
                  </h3>
                  <span className="text-xs text-neutral-400 font-medium block">
                    {step.headline}
                  </span>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-800/70">
                <span className="text-[11px] text-neutral-500 uppercase tracking-wider block mb-1">
                  Deliverable:
                </span>
                <p className="text-xs text-neutral-300">
                  {stepDeliverables[index]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Summary Bar */}
        <div className="mt-12 p-4 sm:p-5 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-neutral-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-400 shrink-0" />
            <span>Average project timeline from discovery to deployment: <strong>2 to 4 weeks</strong> depending on custom integrations.</span>
          </div>

          <a
            href="#contact"
            className="text-xs font-semibold text-violet-400 hover:text-white transition-colors flex items-center gap-1 shrink-0"
          >
            <span>Start Step 01 Today</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
