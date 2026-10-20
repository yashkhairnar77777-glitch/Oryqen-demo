import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = () => {
    setMobileMenuOpen(false);
    if (onOpenInquiry) {
      onOpenInquiry();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-neutral-800/80 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity flex items-center gap-1.5"
          >
            <span className="font-extrabold tracking-widest text-base sm:text-lg">ORYQEN</span>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 inline-block mb-0.5" />
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-400">
            <a
              href="#portfolio"
              onClick={(e) => handleNavClick(e, '#portfolio')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Portfolio
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Services
            </a>
            <a
              href="#why-oryqen"
              onClick={(e) => handleNavClick(e, '#why-oryqen')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Why ORYQEN
            </a>
            <a
              href="#process"
              onClick={(e) => handleNavClick(e, '#process')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Process
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={handleCtaClick}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-lg transition-all duration-200 shadow-md shadow-violet-950/50 hover:shadow-violet-600/25 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Let's Build Yours</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-white rounded-md border border-neutral-800 bg-neutral-900/60 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-neutral-950/98 backdrop-blur-xl px-5 py-6 space-y-4">
          <nav className="flex flex-col space-y-3.5 text-sm font-medium text-neutral-300">
            <a
              href="#portfolio"
              onClick={(e) => handleNavClick(e, '#portfolio')}
              className="py-1.5 hover:text-violet-400 transition-colors"
            >
              Portfolio Concepts
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className="py-1.5 hover:text-violet-400 transition-colors"
            >
              Services & Capabilities
            </a>
            <a
              href="#why-oryqen"
              onClick={(e) => handleNavClick(e, '#why-oryqen')}
              className="py-1.5 hover:text-violet-400 transition-colors"
            >
              Why ORYQEN
            </a>
            <a
              href="#process"
              onClick={(e) => handleNavClick(e, '#process')}
              className="py-1.5 hover:text-violet-400 transition-colors"
            >
              Our 4-Step Process
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="py-1.5 hover:text-violet-400 transition-colors"
            >
              Direct Inquiry
            </a>
          </nav>

          <div className="pt-3 border-t border-neutral-800/80">
            <button
              onClick={handleCtaClick}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm transition-colors cursor-pointer"
            >
              <span>Let's Build Yours</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
