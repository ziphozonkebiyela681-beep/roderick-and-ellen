import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Services', target: 'services' },
    { label: 'Zoom Studio', target: 'zoom-studio' },
    { label: 'Brand Archive', target: 'brand-archive' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleNav = (target: string) => {
    setMobileOpen(false);
    onNavigate(target);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#F3E178]/20 bg-[#2E083B]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single clean wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleNav('top');
          }}
          className="font-display text-2xl font-semibold tracking-tight text-[#F3E178] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F3E178]"
        >
          Roderick &amp; Ellen
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.target}
              type="button"
              onClick={() => handleNav(link.target)}
              className="text-sm font-medium text-[#FAF5E6]/85 transition-colors duration-150 hover:text-[#F3E178] hover:underline underline-offset-4 decoration-[#F3E178]/50 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F3E178]"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleNav('contact')}
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#F3E178] px-4 py-2 text-sm font-semibold text-[#2E083B] transition-colors duration-150 hover:bg-[#FAF5E6] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3E178]"
          >
            Start a Project
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#F3E178]/30 text-[#F3E178] md:hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F3E178]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="border-t border-[#F3E178]/15 bg-[#2E083B] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.target}
                type="button"
                onClick={() => handleNav(link.target)}
                className="flex min-h-[44px] items-center text-left text-base font-medium text-[#FAF5E6] hover:text-[#F3E178] cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNav('contact')}
              className="mt-2 flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[#F3E178] px-4 py-2.5 text-sm font-semibold text-[#2E083B] hover:bg-[#FAF5E6] cursor-pointer"
            >
              Start a Project
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
