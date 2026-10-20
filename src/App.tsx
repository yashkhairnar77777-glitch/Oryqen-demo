/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { ConceptModal } from './components/ConceptModal';
import { Services } from './components/Services';
import { WhyOryqen } from './components/WhyOryqen';
import { Process } from './components/Process';
import { ContactSection, ContactSectionHandle } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConceptProject } from './types';

export default function App() {
  const [activeConcept, setActiveConcept] = useState<ConceptProject | null>(null);
  const contactRef = useRef<ContactSectionHandle>(null);

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInquiryForCategory = (categoryName: string) => {
    if (contactRef.current) {
      contactRef.current.prefillCategory(categoryName);
    } else {
      scrollToContact();
    }
  };

  const handleInquiryForService = (serviceTitle: string) => {
    if (contactRef.current) {
      contactRef.current.prefillService(serviceTitle);
    } else {
      scrollToContact();
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col font-sans selection:bg-violet-600 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar onOpenInquiry={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreWork={scrollToPortfolio}
          onStartProject={scrollToContact}
        />

        {/* Portfolio Concepts Showcase */}
        <Portfolio
          onSelectProject={(project) => setActiveConcept(project)}
          onOpenInquiryForCategory={handleInquiryForCategory}
        />

        {/* Studio Services & Capabilities */}
        <Services onSelectService={handleInquiryForService} />

        {/* Why ORYQEN & Engineering Distinction */}
        <WhyOryqen />

        {/* Discover -> Design -> Build -> Launch Process */}
        <Process />

        {/* Contact CTA, Project Planner & Instagram */}
        <ContactSection ref={contactRef} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full-Screen Interactive Concept Modal with Device Simulator */}
      <ConceptModal
        project={activeConcept}
        onClose={() => setActiveConcept(null)}
        onSelectForInquiry={handleInquiryForCategory}
      />
    </div>
  );
}
