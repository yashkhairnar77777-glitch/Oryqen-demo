import React, { useState } from 'react';
import {
  X,
  Smartphone,
  Tablet,
  Monitor,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  ShieldAlert,
  Users,
  Sparkles,
  Phone
} from 'lucide-react';
import { ConceptProject } from '../types';

interface ConceptModalProps {
  project: ConceptProject | null;
  onClose: () => void;
  onSelectForInquiry: (businessType: string) => void;
}

type ViewportMode = 'desktop' | 'tablet' | 'mobile';

export const ConceptModal: React.FC<ConceptModalProps> = ({
  project,
  onClose,
  onSelectForInquiry
}) => {
  if (!project) return null;

  const [viewport, setViewport] = useState<ViewportMode>('desktop');
  const [activeTab, setActiveTab] = useState<'preview' | 'strategy' | 'specs'>('preview');

  // Interactive sample state
  const [guestCount, setGuestCount] = useState<number>(
    project.sampleInteractiveData.calculator?.defaultVal || 200
  );
  const [reservationSimulated, setReservationSimulated] = useState(false);
  const [selectedPartySize, setSelectedPartySize] = useState('2 Guests');
  const [selectedTime, setSelectedTime] = useState('7:30 PM');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Compute recommended layout for banquet
  const currentTier = project.sampleInteractiveData.calculator?.tiers.find(
    (t) => guestCount >= t.min && guestCount <= t.max
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        {/* Top Control Bar */}
        <div className="px-5 py-3.5 border-b border-neutral-800/90 flex flex-wrap items-center justify-between gap-4 bg-neutral-900/60">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-violet-400 bg-violet-950/60 border border-violet-800/40 px-2.5 py-1 rounded">
              Demo Concept
            </span>
            <div className="text-sm font-semibold text-white truncate max-w-[200px] sm:max-w-xs">
              {project.title}
            </div>
          </div>

          {/* Viewport Simulator Switcher */}
          <div className="flex items-center gap-1 bg-neutral-900 border border-neutral-800 p-1 rounded-lg">
            <button
              onClick={() => setViewport('desktop')}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                viewport === 'desktop'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Desktop View (100% width)"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Desktop</span>
            </button>
            <button
              onClick={() => setViewport('tablet')}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                viewport === 'tablet'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Tablet View (768px frame)"
            >
              <Tablet className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Tablet</span>
            </button>
            <button
              onClick={() => setViewport('mobile')}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                viewport === 'mobile'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Mobile View (390px phone frame)"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mobile</span>
            </button>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close concept preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Concept Notice Banner (Mandatory anti-misrepresentation) */}
        <div className="px-5 py-2.5 bg-neutral-900/40 border-b border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-3.5 h-3.5 text-violet-400 shrink-0" />
            <span>
              <strong>Concept Prototype:</strong> Designed by ORYQEN Studio to demonstrate conversion architecture and layout standards for this business category.
            </span>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setActiveTab('preview')}
              className={`pb-0.5 border-b-2 font-medium transition-colors ${
                activeTab === 'preview' ? 'border-violet-500 text-white' : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              Interactive Preview
            </button>
            <button
              onClick={() => setActiveTab('strategy')}
              className={`pb-0.5 border-b-2 font-medium transition-colors ${
                activeTab === 'strategy' ? 'border-violet-500 text-white' : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              Conversion Strategy
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-0.5 border-b-2 font-medium transition-colors ${
                activeTab === 'specs' ? 'border-violet-500 text-white' : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              Design Specs
            </button>
          </div>
        </div>

        {/* Modal Main Body (Scrollable viewport simulation) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-neutral-950 flex flex-col items-center">
          <div
            className={`transition-all duration-300 w-full ${
              viewport === 'desktop'
                ? 'max-w-5xl'
                : viewport === 'tablet'
                ? 'max-w-2xl border-x border-neutral-800 shadow-2xl p-4 bg-neutral-900/30 rounded-xl'
                : 'max-w-[400px] border-2 border-neutral-800 rounded-3xl p-3 shadow-2xl bg-neutral-900/40 my-2'
            }`}
          >
            {/* Tab: Interactive Preview */}
            {activeTab === 'preview' && (
              <div className="space-y-6">
                {/* Hero Showcase Card */}
                <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900">
                  <div className="aspect-[16/9] w-full relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                      <span className="text-xs uppercase tracking-wider text-violet-400 font-semibold mb-1 block">
                        {project.categoryLabel}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{project.title}</h2>
                      <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">{project.tagline}</p>
                    </div>
                  </div>
                </div>

                {/* Interactive Dynamic Component for each specific domain */}
                <div className="p-5 sm:p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 space-y-4">
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {project.sampleInteractiveData.headline}
                      </h3>
                      <p className="text-xs text-neutral-400">
                        {project.sampleInteractiveData.subheadline}
                      </p>
                    </div>
                    <span className="text-[11px] uppercase tracking-wider text-violet-400 font-medium">
                      Interactive Simulation
                    </span>
                  </div>

                  {/* RESTAURANT INTERACTIVE UX */}
                  {project.sampleInteractiveData.type === 'menu' && (
                    <div className="space-y-4 pt-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.sampleInteractiveData.items?.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-lg border border-neutral-800/80 bg-neutral-900/80 hover:border-violet-500/30 transition-colors"
                          >
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                              <span className="text-sm font-bold text-violet-400 tabular-nums">
                                {item.price}
                              </span>
                            </div>
                            <div className="text-[11px] text-violet-300/80 font-medium mb-1">
                              {item.meta}
                            </div>
                            <p className="text-xs text-neutral-400 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Interactive Reservation Box */}
                      <div className="p-4 rounded-lg border border-violet-900/40 bg-violet-950/20 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-violet-400" />
                            Live Table Booking Simulation
                          </span>
                          <span className="text-[11px] text-neutral-400">Instant SMS Confirmation</span>
                        </div>

                        {reservationSimulated ? (
                          <div className="p-3 rounded bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-between text-xs text-emerald-300">
                            <span className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              Table simulated reserved for {selectedPartySize} at {selectedTime} tonight.
                            </span>
                            <button
                              onClick={() => setReservationSimulated(false)}
                              className="text-xs underline text-emerald-400 hover:text-white"
                            >
                              Reset
                            </button>
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <select
                              value={selectedPartySize}
                              onChange={(e) => setSelectedPartySize(e.target.value)}
                              className="px-3 py-2 bg-neutral-900 border border-neutral-800 rounded text-xs text-white"
                            >
                              <option>2 Guests</option>
                              <option>4 Guests</option>
                              <option>6 Guests</option>
                              <option>Private Room (8-14)</option>
                            </select>
                            <select
                              value={selectedTime}
                              onChange={(e) => setSelectedTime(e.target.value)}
                              className="px-3 py-2 bg-neutral-900 border border-neutral-800 rounded text-xs text-white"
                            >
                              <option>6:00 PM</option>
                              <option>7:30 PM (Peak)</option>
                              <option>8:45 PM</option>
                              <option>9:30 PM</option>
                            </select>
                            <button
                              onClick={() => setReservationSimulated(true)}
                              className="px-3 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded text-xs font-semibold transition-colors cursor-pointer"
                            >
                              Simulate Booking
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* BANQUET HALL INTERACTIVE UX */}
                  {project.sampleInteractiveData.type === 'capacity' && (
                    <div className="space-y-5 pt-2">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-neutral-300 font-medium">Guest Capacity Slider:</span>
                          <span className="text-base font-bold text-violet-400 tabular-nums">
                            {guestCount} Guests
                          </span>
                        </div>
                        <input
                          type="range"
                          min={project.sampleInteractiveData.calculator?.min || 50}
                          max={project.sampleInteractiveData.calculator?.max || 600}
                          step={10}
                          value={guestCount}
                          onChange={(e) => setGuestCount(Number(e.target.value))}
                          className="w-full accent-violet-500 cursor-pointer"
                        />
                      </div>

                      {currentTier && (
                        <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/90 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs uppercase tracking-wider text-violet-400 font-semibold">
                              Recommended Space:
                            </span>
                            <span className="text-xs text-neutral-400">
                              {currentTier.min}–{currentTier.max} Capacity
                            </span>
                          </div>
                          <h4 className="text-base font-bold text-white">{currentTier.name}</h4>
                          <p className="text-xs text-neutral-300 leading-relaxed">
                            {currentTier.layoutRecommendation}
                          </p>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                        <div className="p-3 rounded border border-neutral-800 bg-neutral-900 text-center">
                          <span className="text-[11px] text-neutral-400 block mb-0.5">Ceiling Height</span>
                          <span className="text-sm font-semibold text-white">28 Ft Soaring</span>
                        </div>
                        <div className="p-3 rounded border border-neutral-800 bg-neutral-900 text-center">
                          <span className="text-[11px] text-neutral-400 block mb-0.5">Dedicated Parking</span>
                          <span className="text-sm font-semibold text-white">240 Valet Bays</span>
                        </div>
                        <div className="p-3 rounded border border-neutral-800 bg-neutral-900 text-center">
                          <span className="text-[11px] text-neutral-400 block mb-0.5">Catering Facilities</span>
                          <span className="text-sm font-semibold text-white">Dual Commercial Kitchens</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SALON INTERACTIVE UX */}
                  {project.sampleInteractiveData.type === 'services' && (
                    <div className="space-y-4 pt-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.sampleInteractiveData.items?.map((item, idx) => (
                          <div
                            key={idx}
                            onClick={() => setSelectedService(item.title)}
                            className={`p-3.5 rounded-lg border transition-all cursor-pointer ${
                              selectedService === item.title
                                ? 'border-violet-500 bg-violet-950/20'
                                : 'border-neutral-800/80 bg-neutral-900/80 hover:border-neutral-700'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                              <span className="text-sm font-bold text-violet-400 tabular-nums">
                                {item.price}
                              </span>
                            </div>
                            <div className="text-[11px] text-violet-300/80 font-medium mb-1">
                              {item.meta}
                            </div>
                            <p className="text-xs text-neutral-400 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      {selectedService && (
                        <div className="p-3 rounded bg-violet-950/30 border border-violet-800/40 flex items-center justify-between text-xs text-violet-200">
                          <span>Selected service: <strong>{selectedService}</strong></span>
                          <span className="text-violet-400">Tap below to inquire for your business</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* REAL ESTATE & BOUTIQUE GENERIC LIST */}
                  {(project.sampleInteractiveData.type === 'realestate' ||
                    project.sampleInteractiveData.type === 'boutique') && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {project.sampleInteractiveData.items?.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-lg border border-neutral-800/80 bg-neutral-900/80"
                        >
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                            <span className="text-xs font-semibold text-violet-400 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                              {item.price}
                            </span>
                          </div>
                          <div className="text-[11px] text-neutral-400 font-medium mb-1">
                            {item.meta}
                          </div>
                          <p className="text-xs text-neutral-300 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Key Conversion Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {project.conversionFeatures.map((feat, i) => (
                    <div key={i} className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-1.5">
                      <h4 className="text-xs font-semibold text-white flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
                        {feat.title}
                      </h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">{feat.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Conversion Strategy */}
            {activeTab === 'strategy' && (
              <div className="space-y-5 p-2">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white">Why This Layout Converts For {project.categoryLabel}</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    Generic templates often fail for local and luxury businesses because they hide key decision metrics.
                    Our architecture puts the critical commercial actions front and center:
                  </p>
                </div>

                <div className="space-y-3">
                  {project.conversionFeatures.map((feat, i) => (
                    <div key={i} className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/60 space-y-1">
                      <h4 className="text-sm font-semibold text-violet-300">{feat.title}</h4>
                      <p className="text-xs text-neutral-300 leading-relaxed">{feat.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Design Specs */}
            {activeTab === 'specs' && (
              <div className="space-y-4 p-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/60 space-y-1">
                    <span className="text-xs text-neutral-400">Primary Target Audience</span>
                    <p className="text-sm font-semibold text-white">{project.prototypeSpecs.targetAudience}</p>
                  </div>
                  <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/60 space-y-1">
                    <span className="text-xs text-neutral-400">Primary Commercial Goal</span>
                    <p className="text-sm font-semibold text-white">{project.prototypeSpecs.primaryConversionGoal}</p>
                  </div>
                  <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/60 space-y-1 sm:col-span-2">
                    <span className="text-xs text-neutral-400">Mobile Touchscreen Optimization</span>
                    <p className="text-sm font-semibold text-white">{project.prototypeSpecs.mobileOptimization}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/40">
                  <span className="text-xs text-neutral-400 block mb-2 font-medium">Standard Scope Deliverables</span>
                  <div className="flex flex-wrap gap-2">
                    {project.prototypeSpecs.keyDeliverables.map((item, idx) => (
                      <span key={idx} className="text-xs text-neutral-300 bg-neutral-800/80 px-2.5 py-1 rounded border border-neutral-700/60">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="px-5 py-4 border-t border-neutral-800/90 bg-neutral-900/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-neutral-400 text-center sm:text-left">
            <span>Want a high-converting website tailored to your business?</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg border border-neutral-800 hover:border-neutral-700 bg-neutral-900 text-xs font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              Close Preview
            </button>
            <button
              onClick={() => {
                onSelectForInquiry(project.categoryLabel);
                onClose();
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold transition-all shadow-md shadow-violet-950/50 cursor-pointer"
            >
              <span>Build a Website Like This</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
