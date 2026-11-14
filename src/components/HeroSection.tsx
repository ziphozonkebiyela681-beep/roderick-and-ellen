import React, { useState } from 'react';
import { ArrowDownRight, ZoomIn } from 'lucide-react';
import { SERVICES, ServiceId } from '../data/studioData';
import { IsolatedEnvelope } from './IsolatedEnvelope';
import { WaxSealEmblem } from './WaxSealEmblem';

interface HeroSectionProps {
  onZoomService: (serviceId: ServiceId) => void;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onZoomService, onNavigate }) => {
  const [heroEnvelopeOpen, setHeroEnvelopeOpen] = useState(false);

  return (
    <section id="top" className="border-b border-[#2E083B]/15 bg-[#F3E178]">
      <div className="mx-auto max-w-[1200px] px-4 pt-8 pb-10 sm:px-6 sm:pt-12 sm:pb-12 lg:pt-16 lg:pb-16">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Typographic Anchor */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <p className="text-xs font-semibold text-[#491C59] sm:text-sm">
                Roderick &amp; Ellen · Invitations, Identity &amp; Intelligent Systems
              </p>

              <h1
                className="mt-3 font-display font-semibold tracking-tight text-[#2E083B] sm:mt-4"
                style={{
                  fontSize: 'clamp(2.05rem, 4.2vw, 3.85rem)',
                  lineHeight: 1.06,
                  textWrap: 'balance',
                }}
              >
                Sealed invitations, brand logos, and intelligent systems for companies.
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#3D104E] sm:mt-6 sm:text-base">
                Built around our signature butter-yellow, royal purple, and cotton-envelope identity,
                we craft personalized digital wedding invitations &amp; photo galleries, create logos,
                engineer company chatbots and AI agents, and build bespoke corporate websites.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('zoom-studio')}
                  className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-lg bg-[#2E083B] px-6 py-3 text-sm font-semibold text-[#F3E178] transition-colors duration-150 hover:bg-[#3D104E] whitespace-nowrap shrink-0 sm:w-auto cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E083B]"
                >
                  <ZoomIn className="h-4 w-4" />
                  <span>Zoom Into Services</span>
                </button>

                <button
                  type="button"
                  onClick={() => setHeroEnvelopeOpen((prev) => !prev)}
                  className="inline-flex min-h-[46px] w-full items-center justify-center gap-1.5 rounded-lg border border-[#2E083B]/30 bg-[#FAF5E6]/80 px-4 py-3 text-sm font-medium text-[#2E083B] transition-colors duration-150 hover:bg-[#FAF5E6] whitespace-nowrap shrink-0 sm:w-auto cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2E083B]"
                >
                  <span>{heroEnvelopeOpen ? 'Seal Studio Envelope' : 'Unseal Studio Envelope'}</span>
                  <ArrowDownRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Subtle Brand Signature Row */}
            <div className="mt-8 flex items-center gap-3.5 border-t border-[#2E083B]/15 pt-5 sm:mt-10 sm:gap-4 sm:pt-6">
              <WaxSealEmblem size={44} className="shrink-0" />
              <div>
                <p className="text-sm font-semibold text-[#2E083B]">
                  Signature Crowned R|E Wax Crest
                </p>
                <p className="text-xs text-[#491C59]">
                  Tap the wax seal on the envelope to unseal our studio dispatch.
                </p>
              </div>
            </div>
          </div>

          {/* Right Standalone Isolated Envelope Floating Directly on Yellow Canvas */}
          <div className="flex flex-col items-center justify-center pt-2 lg:col-span-6 lg:pt-0">
            <IsolatedEnvelope
              size="lg"
              tilt="none"
              isOpen={heroEnvelopeOpen}
              onToggleOpen={() => setHeroEnvelopeOpen((prev) => !prev)}
              footerStamp="RODERICK & ELLEN"
              className="lg:-rotate-2 lg:hover:rotate-0"
            >
              <div className="text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#491C59]">
                  Studio Dispatch
                </p>
                <h2 className="mt-1 font-display text-xl font-semibold text-[#2E083B] sm:text-2xl">
                  Four Bespoke Disciplines
                </h2>
                <div className="mt-3 grid grid-cols-1 gap-2 text-left sm:mt-4 sm:grid-cols-2">
                  {SERVICES.map((svc) => (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => onZoomService(svc.id)}
                      className="min-h-[40px] rounded-lg border border-[#2E083B]/15 bg-[#F3E178]/45 px-3 py-2 text-xs font-medium text-[#2E083B] transition-colors hover:bg-[#2E083B] hover:text-[#F3E178] cursor-pointer"
                    >
                      {svc.index}. {svc.shortTitle}
                    </button>
                  ))}
                </div>
              </div>
            </IsolatedEnvelope>

            <p className="mt-4 text-center text-xs font-medium text-[#491C59] sm:mt-5">
              {heroEnvelopeOpen
                ? 'Select any discipline inside the card to zoom in, or click Seal Envelope.'
                : 'Tap the royal purple wax seal above to unseal the envelope'}
            </p>
          </div>
        </div>

        {/* Full-Width 4-Column Royal Purple Discipline Strip Below Hero Split */}
        <div className="mt-9 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => onZoomService(service.id)}
              className="group flex flex-col justify-between rounded-xl border border-[#2E083B]/15 bg-[#2E083B] p-5 text-left text-[#FAF5E6] transition-transform duration-150 hover:-translate-y-0.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E083B]"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-medium text-[#F3E178] tabular-nums">
                  {service.index}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-[#F3E178]">
                  <span>Zoom in</span>
                  <ZoomIn className="h-3.5 w-3.5" />
                </span>
              </div>
              <p className="mt-3 font-display text-xl font-semibold text-[#FAF5E6]">
                {service.shortTitle}
              </p>
              <p className="mt-1 text-xs text-[#EFE4CA]/80">
                {service.turnaround} · {service.idealFor}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
