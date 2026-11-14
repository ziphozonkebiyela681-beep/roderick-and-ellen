import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { BRAND_ASSETS } from '../data/studioData';
import { IsolatedEnvelope } from './IsolatedEnvelope';
import { WaxSealEmblem } from './WaxSealEmblem';

export const BrandGallerySection: React.FC = () => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [archiveEnvelopeOpen, setArchiveEnvelopeOpen] = useState(false);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIdx(null);
      if (e.key === 'ArrowRight')
        setLightboxIdx((prev) => (prev === null ? null : (prev + 1) % BRAND_ASSETS.length));
      if (e.key === 'ArrowLeft')
        setLightboxIdx((prev) =>
          prev === null ? null : (prev - 1 + BRAND_ASSETS.length) % BRAND_ASSETS.length
        );
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIdx]);

  return (
    <section
      id="brand-archive"
      className="border-b border-[#F3E178]/15 bg-[#2E083B] py-12 text-[#FAF5E6] sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 border-b border-[#F3E178]/15 pb-8 sm:gap-8 sm:pb-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-[#F3E178]">Company Aesthetic &amp; Envelope Craft</p>
            <h2
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#FAF5E6] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Our isolated envelope motif, butter yellow &amp; royal purple signature.
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-[#EFE4CA]/85 lg:col-span-5">
            Rather than confining our signature envelope to static photography, the cotton envelope
            and crowned purple wax seal serve as living architectural pieces throughout the site.
          </p>
        </div>

        {/* Isolated Envelope & Circular Wax Seal Study Floating Directly on Royal Purple */}
        <div className="mt-8 grid grid-cols-1 items-center gap-6 rounded-2xl border border-[#F3E178]/20 bg-[#3B104B] p-5 sm:mt-10 sm:gap-8 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-6 flex flex-col items-center">
            <IsolatedEnvelope
              size="md"
              tilt="none"
              isOpen={archiveEnvelopeOpen}
              onToggleOpen={() => setArchiveEnvelopeOpen((prev) => !prev)}
              footerStamp="RODERICK & ELLEN"
              className="sm:rotate-2 sm:hover:rotate-0"
            >
              <div className="text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#491C59]">
                  Brand Specification
                </p>
                <p className="mt-1 font-display text-xl font-semibold text-[#2E083B] sm:text-2xl">
                  Butter Yellow · Royal Purple · Cotton Stock
                </p>
                <p className="mt-2 text-xs text-[#491C59]">
                  Every client website, logo, and invitation echoes this tactile physical object.
                </p>
              </div>
            </IsolatedEnvelope>
          </div>

          <div className="space-y-5 sm:space-y-6 lg:col-span-6">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
              {/* Circularly isolated macro wax seal cutout */}
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-[#F3E178] shadow-lg sm:h-24 sm:w-24">
                <img
                  src={BRAND_ASSETS[1].src}
                  alt="Isolated royal purple wax seal medallion"
                  referrerPolicy="no-referrer"
                  className="h-full w-full scale-125 object-cover"
                />
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-[#F3E178]">
                  Cutout Wax Seal &amp; Cotton Envelope
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#EFE4CA]/85">
                  Isolated cleanly from its backdrop so the crowned R|E emblem and folded cotton
                  envelope sit naturally across both yellow and purple surfaces.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="rounded-xl border border-[#F3E178]/20 bg-[#2E083B] p-3 sm:p-3.5">
                <div className="h-5 w-full rounded bg-[#F3E178] sm:h-6" />
                <p className="mt-2 text-[11px] font-semibold text-[#FAF5E6] sm:text-xs">Butter Yellow</p>
                <p className="font-mono text-[10px] text-[#F3E178] sm:text-[11px]">#F3E178</p>
              </div>
              <div className="rounded-xl border border-[#F3E178]/20 bg-[#2E083B] p-3 sm:p-3.5">
                <div className="h-5 w-full rounded border border-[#F3E178]/35 bg-[#2E083B] sm:h-6" />
                <p className="mt-2 text-[11px] font-semibold text-[#FAF5E6] sm:text-xs">Royal Purple</p>
                <p className="font-mono text-[10px] text-[#F3E178] sm:text-[11px]">#2E083B</p>
              </div>
              <div className="rounded-xl border border-[#F3E178]/20 bg-[#2E083B] p-3 sm:p-3.5">
                <div className="h-5 w-full rounded bg-[#EFE4CA] sm:h-6" />
                <p className="mt-2 text-[11px] font-semibold text-[#FAF5E6] sm:text-xs">Cotton Paper</p>
                <p className="font-mono text-[10px] text-[#F3E178] sm:text-[11px]">#EFE4CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Source Studio Plates with Lightbox */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:grid-cols-12">
          {BRAND_ASSETS.map((asset, idx) => {
            const spanClass = idx === 0 || idx === 3 ? 'lg:col-span-7' : 'lg:col-span-5';
            return (
              <button
                key={asset.id}
                type="button"
                onClick={() => setLightboxIdx(idx)}
                className={`group relative overflow-hidden rounded-2xl border border-[#F3E178]/25 bg-[#F3E178] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F3E178] ${spanClass}`}
              >
                <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#EFE4CA]">
                  {!failedImages[asset.id] ? (
                    <img
                      src={asset.src}
                      alt={asset.title}
                      referrerPolicy="no-referrer"
                      onError={() => setFailedImages((prev) => ({ ...prev, [asset.id]: true }))}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-[#F3E178] p-6">
                      <WaxSealEmblem size={84} />
                      <p className="mt-3 font-display text-xl font-semibold text-[#2E083B]">
                        {asset.title}
                      </p>
                    </div>
                  )}

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-[#240530]/90 via-[#240530]/45 to-transparent p-4 text-[#FAF5E6] sm:gap-4 sm:p-5">
                    <div>
                      <p className="font-display text-lg font-semibold sm:text-xl">{asset.title}</p>
                      <p className="mt-0.5 text-xs text-[#EFE4CA]/90 line-clamp-2">{asset.caption}</p>
                    </div>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F3E178] text-[#2E083B] sm:h-9 sm:w-9">
                      <ZoomIn className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={BRAND_ASSETS[lightboxIdx].title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#240530]/92 p-3 sm:p-8 backdrop-blur-sm"
          onClick={() => setLightboxIdx(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-[#F3E178]/35 bg-[#FAF5E6] text-[#2E083B]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-[#2E083B]/12 px-4 py-3.5 sm:px-6 sm:py-4">
              <div>
                <p className="text-xs text-[#491C59]">
                  Plate 0{lightboxIdx + 1} of 0{BRAND_ASSETS.length}
                </p>
                <h3 className="font-display text-xl font-semibold text-[#2E083B] sm:text-2xl">
                  {BRAND_ASSETS[lightboxIdx].title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIdx(null)}
                aria-label="Close lightbox"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#2E083B]/20 text-[#2E083B] hover:bg-[#F3E178] sm:h-10 sm:w-10 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative flex max-h-[60vh] items-center justify-center bg-[#F3E178]/45 p-3 sm:max-h-[65vh] sm:p-4">
              <img
                src={BRAND_ASSETS[lightboxIdx].src}
                alt={BRAND_ASSETS[lightboxIdx].title}
                referrerPolicy="no-referrer"
                className="max-h-[54vh] w-auto rounded-lg object-contain sm:max-h-[58vh]"
              />
            </div>

            <div className="flex flex-col items-start justify-between gap-3 border-t border-[#2E083B]/12 px-4 py-3.5 sm:flex-row sm:items-center sm:gap-4 sm:px-6 sm:py-4">
              <p className="text-xs text-[#491C59] sm:text-sm">
                {BRAND_ASSETS[lightboxIdx].caption}
              </p>
              <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIdx(
                      (lightboxIdx - 1 + BRAND_ASSETS.length) % BRAND_ASSETS.length
                    )
                  }
                  aria-label="Previous plate"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#2E083B]/20 text-[#2E083B] hover:bg-[#F3E178] sm:h-9 sm:w-9 cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxIdx((lightboxIdx + 1) % BRAND_ASSETS.length)}
                  aria-label="Next plate"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#2E083B]/20 text-[#2E083B] hover:bg-[#F3E178] sm:h-9 sm:w-9 cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
