import React, { useState, forwardRef, useImperativeHandle } from 'react';
import {
  Instagram,
  Send,
  CheckCircle2,
  Clock,
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  Sparkles
} from 'lucide-react';
import { InquiryFormData } from '../types';

export interface ContactSectionHandle {
  prefillCategory: (categoryName: string) => void;
  prefillService: (serviceTitle: string) => void;
}

export const ContactSection = forwardRef<ContactSectionHandle>((_, ref) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    businessType: 'Restaurant & Dining',
    serviceNeeded: 'Complete Business Website',
    timeline: 'Within 1 Month',
    clientName: '',
    businessName: '',
    email: '',
    phone: '',
    projectBrief: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useImperativeHandle(ref, () => ({
    prefillCategory: (categoryName: string) => {
      setFormData((prev) => ({ ...prev, businessType: categoryName }));
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    },
    prefillService: (serviceTitle: string) => {
      setFormData((prev) => ({ ...prev, serviceNeeded: serviceTitle }));
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.clientName.trim() || !formData.email.trim()) {
      setErrorMsg('Please provide your name and email address so we can respond.');
      return;
    }

    if (!formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    // Process submission
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      businessType: 'Restaurant & Dining',
      serviceNeeded: 'Complete Business Website',
      timeline: 'Within 1 Month',
      clientName: '',
      businessName: '',
      email: '',
      phone: '',
      projectBrief: ''
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-t border-neutral-800/80">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[350px] bg-violet-900/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Studio Contact & Official Instagram */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400">
                <span>START A PROJECT</span>
                <span aria-hidden="true">·</span>
                <span>DIRECT INQUIRY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
                Let's Build Something Exceptional For Your Business.
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Whether you are launching a new establishment or upgrading a dated site, tell us about your
                goals. We review your concept and provide a tailored architectural proposal within 24 hours.
              </p>
            </div>

            {/* Official Instagram Card */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 space-y-4 hover:border-violet-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-md">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block font-medium">Follow Our Work & Concepts</span>
                  <h3 className="text-base font-bold text-white">@oryqen.studio</h3>
                </div>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                Connect with us on Instagram to see live design drops, behind-the-scenes concept prototypes,
                and digital craft for ambitious businesses.
              </p>

              <a
                href="https://www.instagram.com/oryqen.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700/80 hover:border-violet-500/60 text-xs font-semibold transition-all cursor-pointer group"
              >
                <span>View @oryqen.studio on Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Studio Commitments */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs text-neutral-300">
                <Clock className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <span>
                  <strong>24-Hour Response Time:</strong> Every inquiry is reviewed directly by our design team within one business day.
                </span>
              </div>
              <div className="flex items-start gap-3 text-xs text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Honest Scoping:</strong> Transparent milestone deliverables with zero hidden lock-in contracts.
                </span>
              </div>
              <div className="flex items-start gap-3 text-xs text-neutral-300">
                <Sparkles className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Direct Creative Lead:</strong> Work directly with senior designers and engineers, not account executives.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-neutral-800/90 bg-neutral-900/40 p-6 sm:p-8 shadow-xl">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-violet-950/80 border border-violet-500/40 text-violet-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.clientName}</strong>. We have logged your request
                    for <strong className="text-violet-400">{formData.businessType}</strong>. Our team will review your requirements
                    and reach out at <span className="text-white font-mono">{formData.email}</span> within 24 hours.
                  </p>

                  <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/60 max-w-sm mx-auto text-left text-xs space-y-1.5 text-neutral-400">
                    <div><span className="text-neutral-500">Service:</span> <span className="text-neutral-200">{formData.serviceNeeded}</span></div>
                    <div><span className="text-neutral-500">Timeline:</span> <span className="text-neutral-200">{formData.timeline}</span></div>
                    {formData.businessName && <div><span className="text-neutral-500">Business:</span> <span className="text-neutral-200">{formData.businessName}</span></div>}
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2 rounded-lg border border-neutral-800 bg-neutral-900 text-xs font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer"
                    >
                      Submit Another Project Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Project Scope & Details</h3>
                    <p className="text-xs text-neutral-400">
                      Configure your business profile so we can prepare an accurate design demo.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800/40 text-xs text-rose-300">
                      {errorMsg}
                    </div>
                  )}

                  {/* Step 1: Business Type & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-300">Your Business Category</label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-violet-500 transition-colors"
                      >
                        <option>Restaurant & Dining</option>
                        <option>Banquet & Event Venue</option>
                        <option>Salon & Spa Studio</option>
                        <option>Luxury Real Estate</option>
                        <option>Artisanal Retail & Shop</option>
                        <option>Health & Medical Practice</option>
                        <option>Professional Service Firm</option>
                        <option>Other Business Concept</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-300">Service Required</label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-violet-500 transition-colors"
                      >
                        <option>Complete Business Website</option>
                        <option>High-Impact Landing Page</option>
                        <option>Full Website Redesign</option>
                        <option>Mobile Optimization & Touch UX</option>
                        <option>Interactive Motion & 3D Elements</option>
                        <option>Full Digital Brand Experience</option>
                      </select>
                    </div>
                  </div>

                  {/* Step 2: Timeline */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-300">Estimated Project Timeline</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Immediate (1-2 wks)', 'Within 1 Month', '1–3 Months', 'Exploring Options'].map(
                        (timeOption) => (
                          <button
                            type="button"
                            key={timeOption}
                            onClick={() => setFormData({ ...formData, timeline: timeOption })}
                            className={`py-2 px-2 text-center text-xs rounded-lg border transition-all cursor-pointer ${
                              formData.timeline === timeOption
                                ? 'bg-violet-950/60 border-violet-500 text-violet-300 font-semibold'
                                : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                            }`}
                          >
                            {timeOption}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  {/* Step 3: Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-300">
                        Your Name <span className="text-violet-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Vance"
                        value={formData.clientName}
                        onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-300">Business or Brand Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Lumina Dining"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-300">
                        Email Address <span className="text-violet-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-300">Phone or WhatsApp (Optional)</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Brief */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-300">
                      Project Goals & Requirements (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share current website URL (if any), primary objectives, or specific features like online reservations, appointment booking, or virtual tours..."
                      value={formData.projectBrief}
                      onChange={(e) => setFormData({ ...formData, projectBrief: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-violet-950/60 cursor-pointer"
                  >
                    <span>Send Project Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="text-center text-[11px] text-neutral-400">
                    <span>No obligation · We typically reply within 24 business hours</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';
