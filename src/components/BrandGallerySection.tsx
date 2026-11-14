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
      className="border-b border-[#F3E178]/15 bg-[#2E083B] py-16 text-[#FAF5E6] lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-8 border-b border-[#F3E178]/15 pb-10 lg:grid-cols-12 lg:items-end">
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
        <div className="mt-10 grid grid-cols-1 items-center gap-8 rounded-2xl border border-[#F3E178]/20 bg-[#3B104B] p-6 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-6 flex flex-col items-center">
            <IsolatedEnvelope
              size="md"
              tilt="right"
              isOpen={archiveEnvelopeOpen}
              onToggleOpen={() => setArchiveEnvelopeOpen((prev) => !prev)}
              footerStamp="RODERICK & ELLEN"
            >
              <div className="text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#491C59]">
                  Brand Specification
                </p>
                <p className="mt-1 font-display text-2xl font-semibold text-[#2E083B]">
                  Butter Yellow · Royal Purple · Cotton Stock
                </p>
                <p className="mt-2 text-xs text-[#491C59]">
                  Every client website, logo, and invitation echoes this tactile physical object.
                </p>
              </div>
            </IsolatedEnvelope>
          </div>

          <div className="space-y-6 lg:col-span-6">
            <div className="flex items-center gap-5">
              {/* Circularly isolated macro wax seal cutout */}
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-[#F3E178] shadow-lg">
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

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-[#F3E178]/20 bg-[#2E083B] p-3.5">
                <div className="h-6 w-full rounded bg-[#F3E178]" />
                <p className="mt-2 text-xs font-semibold text-[#FAF5E6]">Butter Yellow</p>
                <p className="font-mono text-[11px] text-[#F3E178]">#F3E178</p>
              </div>
              <div className="rounded-xl border border-[#F3E178]/20 bg-[#2E083B] p-3.5">
                <div className="h-6 w-full rounded border border-[#F3E178]/35 bg-[#2E083B]" />
                <p className="mt-2 text-xs font-semibold text-[#FAF5E6]">Royal Purple</p>
                <p className="font-mono text-[11px] text-[#F3E178]">#2E083B</p>
              </div>
              <div className="rounded-xl border border-[#F3E178]/20 bg-[#2E083B] p-3.5">
                <div className="h-6 w-full rounded bg-[#EFE4CA]" />
                <p className="mt-2 text-xs font-semibold text-[#FAF5E6]">Cotton Paper</p>
                <p className="font-mono text-[11px] text-[#F3E178]">#EFE4CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Source Studio Plates with Lightbox */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
          {BRAND_ASSETS.map((asset, idx) => {
            const spanClass = idx === 0 || idx === 3 ? 'lg:col-span-7' : 'lg:col-span-5';
            return (
              <button
                key={asset.id}
                type="button"
                onClick={() => setLightboxIdx(idx)}
                className={`group relative overflow-hidden rounded-2xl border border-[#F3E178]/25 bg-[#F3E178] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F3E178] ${spanClass}`}
              >
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#EFE4CA]">
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

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-[#240530]/90 via-[#240530]/45 to-transparent p-5 text-[#FAF5E6]">
                    <div>
                      <p className="font-display text-xl font-semibold">{asset.title}</p>
                      <p className="mt-0.5 text-xs text-[#EFE4CA]/90">{asset.caption}</p>
                    </div>
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F3E178] text-[#2E083B]">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#240530]/92 p-4 sm:p-8 backdrop-blur-sm"
          onClick={() => setLightboxIdx(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-[#F3E178]/35 bg-[#FAF5E6] text-[#2E083B]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#2E083B]/12 px-6 py-4">
              <div>
                <p className="text-xs text-[#491C59]">
                  Plate 0{lightboxIdx + 1} of 0{BRAND_ASSETS.length}
                </p>
                <h3 className="font-display text-2xl font-semibold text-[#2E083B]">
                  {BRAND_ASSETS[lightboxIdx].title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIdx(null)}
                aria-label="Close lightbox"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#2E083B]/20 text-[#2E083B] hover:bg-[#F3E178] cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative flex max-h-[65vh] items-center justify-center bg-[#F3E178]/45 p-4">
              <img
                src={BRAND_ASSETS[lightboxIdx].src}
                alt={BRAND_ASSETS[lightboxIdx].title}
                referrerPolicy="no-referrer"
                className="max-h-[58vh] w-auto rounded-lg object-contain"
              />
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-[#2E083B]/12 px-6 py-4">
              <p className="text-xs text-[#491C59] sm:text-sm">
                {BRAND_ASSETS[lightboxIdx].caption}
              </p>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIdx(
                      (lightboxIdx - 1 + BRAND_ASSETS.length) % BRAND_ASSETS.length
                    )
                  }
                  aria-label="Previous plate"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2E083B]/20 text-[#2E083B] hover:bg-[#F3E178] cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxIdx((lightboxIdx + 1) % BRAND_ASSETS.length)}
                  aria-label="Next plate"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2E083B]/20 text-[#2E083B] hover:bg-[#F3E178] cursor-pointer"
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
