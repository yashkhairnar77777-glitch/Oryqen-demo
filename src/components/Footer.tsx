import React from 'react';
import { ArrowUp, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800/80 bg-neutral-950 py-12 sm:py-16 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand Wordmark & Description */}
          <div className="space-y-2 max-w-sm">
            <a
              href="#"
              className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5"
            >
              <span className="font-extrabold tracking-widest text-base sm:text-lg">ORYQEN</span>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 inline-block mb-0.5" />
            </a>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Modern digital experiences and conversion-first web architecture for ambitious businesses.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-medium text-neutral-400">
            <a href="#portfolio" className="hover:text-white transition-colors">
              Portfolio
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#why-oryqen" className="hover:text-white transition-colors">
              Why ORYQEN
            </a>
            <a href="#process" className="hover:text-white transition-colors">
              Process
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            <a
              href="https://www.instagram.com/oryqen.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition-colors flex items-center gap-1.5 text-neutral-300"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@oryqen.studio</span>
            </a>
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors self-start md:self-auto cursor-pointer flex items-center gap-1.5 text-xs"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} ORYQEN Studio. All rights reserved.
          </p>
          <p className="text-[11px] text-neutral-400 max-w-xl">
            Portfolio projects presented on this platform are original concept prototypes designed to demonstrate UX and conversion standards for individual industry sectors.
          </p>
        </div>
      </div>
    </footer>
  );
};
