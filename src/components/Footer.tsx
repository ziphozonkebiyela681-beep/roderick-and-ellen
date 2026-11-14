import React from 'react';
import { STUDIO_CONTACT } from '../data/studioData';
import { IsolatedEnvelope } from './IsolatedEnvelope';
import { WaxSealEmblem } from './WaxSealEmblem';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-[#F3E178]/20 bg-[#2E083B] text-[#FAF5E6]">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="flex items-center gap-4">
            <WaxSealEmblem size={54} variant="gold" className="shrink-0" />
            <div>
              <p className="font-display text-2xl font-semibold tracking-tight text-[#F3E178]">
                Roderick &amp; Ellen
              </p>
              <p className="mt-0.5 text-xs text-[#EFE4CA]/85">
                Digital Wedding Invitations · Brand Logos · Company AI Agents · Bespoke Websites
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#F3E178]">
                <a
                  href={STUDIO_CONTACT.phoneHref}
                  className="hover:underline underline-offset-4"
                >
                  Call / WhatsApp: {STUDIO_CONTACT.phoneDisplay}
                </a>
                <a
                  href={STUDIO_CONTACT.tiktokHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4"
                >
                  TikTok: {STUDIO_CONTACT.tiktokHandle}
                </a>
                <a
                  href={STUDIO_CONTACT.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4"
                >
                  Instagram: {STUDIO_CONTACT.instagramHandle}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-8">
            <nav
              aria-label="Footer Navigation"
              className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#EFE4CA]"
            >
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="hover:text-[#F3E178] transition-colors cursor-pointer"
              >
                Services
              </button>
              <button
                type="button"
                onClick={() => onNavigate('zoom-studio')}
                className="hover:text-[#F3E178] transition-colors cursor-pointer"
              >
                Zoom Studio
              </button>
              <button
                type="button"
                onClick={() => onNavigate('brand-archive')}
                className="hover:text-[#F3E178] transition-colors cursor-pointer"
              >
                Brand Archive
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="hover:text-[#F3E178] transition-colors cursor-pointer"
              >
                Contact
              </button>
            </nav>

            {/* Signature miniature isolated envelope echoing the brand poster */}
            <div className="hidden sm:block w-28">
              <IsolatedEnvelope size="sm" tilt="left" className="w-full" />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-[#F3E178]/15 pt-6 text-xs text-[#EFE4CA]/75 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Roderick &amp; Ellen Studio. All rights reserved.</p>
          <p>Sunlit Butter Yellow · Deep Royal Purple · Sealed Cotton Envelope</p>
        </div>
      </div>
    </footer>
  );
};
