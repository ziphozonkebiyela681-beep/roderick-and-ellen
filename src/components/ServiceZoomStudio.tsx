import React, { useEffect, useState } from 'react';
import {
  Check,
  Maximize2,
  Minimize2,
  Monitor,
  Send,
  Smartphone,
  Tablet,
  X,
  ZoomIn,
} from 'lucide-react';
import {
  AGENT_SCENARIOS,
  BRAND_ASSETS,
  SERVICES,
  ServiceId,
  WEDDING_GALLERY_FRAMES,
  WEBSITE_BLUEPRINTS,
  WeddingGalleryFrame,
} from '../data/studioData';
import { IsolatedEnvelope } from './IsolatedEnvelope';
import { WaxSealEmblem } from './WaxSealEmblem';

interface ServiceZoomStudioProps {
  activeService: ServiceId;
  onSelectService: (serviceId: ServiceId) => void;
  isFullscreenModal: boolean;
  onToggleFullscreenModal: (open: boolean) => void;
  onRequestService: (serviceId: ServiceId) => void;
}

/* -------------------------------------------------------------------------- */
/* 01. Wedding Invitation & Photo Gallery Interactive Lab                     */
/* -------------------------------------------------------------------------- */
const WeddingZoomLab: React.FC = () => {
  const [subTab, setSubTab] = useState<'invitation' | 'gallery'>('invitation');
  const [isOpened, setIsOpened] = useState(false);
  const [coupleNames, setCoupleNames] = useState('Claire & Julian');
  const [weddingDate, setWeddingDate] = useState('Saturday, 18 October 2026');
  const [venueName, setVenueName] = useState('The Orangery at Vespera Estate');
  const [rsvpStatus, setRsvpStatus] = useState<'attending' | 'declined'>('attending');
  const [guestCount, setGuestCount] = useState('2 Guests');
  const [dietaryNote, setDietaryNote] = useState('');
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [selectedFrame, setSelectedFrame] = useState<WeddingGalleryFrame | null>(null);

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpSubmitted(true);
  };

  const renderGalleryArtwork = (frame: WeddingGalleryFrame) => {
    const bgMap = {
      ivory: 'bg-[#FAF5E6] text-[#2E083B]',
      butter: 'bg-[#F3E178] text-[#2E083B]',
      plum: 'bg-[#2E083B] text-[#FAF5E6]',
    };
    const strokeColor = frame.focalTone === 'plum' ? '#F3E178' : '#2E083B';

    return (
      <div
        className={`relative flex h-44 w-full items-center justify-center overflow-hidden rounded-lg border border-[#2E083B]/15 ${bgMap[frame.focalTone]}`}
      >
        <svg viewBox="0 0 240 150" className="h-full w-full" aria-hidden="true">
          {frame.motif === 'ceremony' && (
            <g stroke={strokeColor} strokeWidth="1.3" fill="none" opacity="0.85">
              <path d="M55 128V68C55 36 84 20 120 20C156 20 185 36 185 68V128" />
              <path d="M72 128V72C72 48 93 36 120 36C147 36 168 48 168 72V128" strokeOpacity="0.45" />
              <line x1="35" y1="128" x2="205" y2="128" />
              <circle cx="120" cy="76" r="14" strokeOpacity="0.6" />
            </g>
          )}
          {frame.motif === 'ring' && (
            <g stroke={strokeColor} strokeWidth="1.5" fill="none">
              <rect x="48" y="34" width="144" height="86" rx="4" strokeOpacity="0.4" />
              <path d="M48 34L120 82L192 34" strokeOpacity="0.65" />
              <circle cx="120" cy="82" r="16" fill="#2E083B" stroke="#F3E178" />
              <text
                x="120"
                y="86"
                textAnchor="middle"
                fill="#F3E178"
                fontSize="11"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700 }}
              >
                R|E
              </text>
            </g>
          )}
          {frame.motif === 'portrait' && (
            <g stroke={strokeColor} strokeWidth="1.3" fill="none" opacity="0.85">
              <circle cx="102" cy="54" r="16" />
              <circle cx="138" cy="58" r="15" />
              <path d="M76 126C76 98 92 84 106 84C118 84 128 96 128 126" />
              <path d="M114 126C114 98 128 86 142 86C156 86 166 98 166 126" />
            </g>
          )}
          {frame.motif === 'table' && (
            <g stroke={strokeColor} strokeWidth="1.3" fill="none" opacity="0.85">
              <line x1="40" y1="102" x2="200" y2="102" />
              <path d="M80 102V78M120 102V72M160 102V78" />
              <circle cx="80" cy="68" r="5" />
              <circle cx="120" cy="62" r="6" />
              <circle cx="160" cy="68" r="5" />
              <path d="M60 102V124M180 102V124" strokeOpacity="0.45" />
            </g>
          )}
          {frame.motif === 'toast' && (
            <g stroke={strokeColor} strokeWidth="1.3" fill="none" opacity="0.9">
              <path d="M88 46L98 74L108 46H88Z" />
              <line x1="98" y1="74" x2="98" y2="112" />
              <line x1="86" y1="112" x2="110" y2="112" />
              <path d="M132 46L142 74L152 46H132Z" />
              <line x1="142" y1="74" x2="142" y2="112" />
              <line x1="130" y1="112" x2="154" y2="112" />
            </g>
          )}
          {frame.motif === 'estate' && (
            <g stroke={strokeColor} strokeWidth="1.3" fill="none" opacity="0.85">
              <rect x="44" y="64" width="152" height="58" />
              <path d="M36 64L120 26L204 64" />
              <rect x="108" y="88" width="24" height="34" />
              <rect x="64" y="80" width="18" height="20" />
              <rect x="158" y="80" width="18" height="20" />
            </g>
          )}
        </svg>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 border-b border-[#2E083B]/12 pb-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
        <div className="grid w-full grid-cols-1 gap-1 rounded-lg bg-[#F3E178]/55 p-1 sm:inline-flex sm:w-auto">
          <button
            type="button"
            onClick={() => setSubTab('invitation')}
            className={`min-h-[40px] rounded-md px-3.5 py-2 text-xs font-semibold transition-colors duration-150 cursor-pointer ${
              subTab === 'invitation'
                ? 'bg-[#2E083B] text-[#F3E178]'
                : 'text-[#2E083B] hover:bg-[#FAF5E6]/70'
            }`}
          >
            Sealed Invitation &amp; RSVP
          </button>
          <button
            type="button"
            onClick={() => setSubTab('gallery')}
            className={`min-h-[40px] rounded-md px-3.5 py-2 text-xs font-semibold transition-colors duration-150 cursor-pointer ${
              subTab === 'gallery'
                ? 'bg-[#2E083B] text-[#F3E178]'
                : 'text-[#2E083B] hover:bg-[#FAF5E6]/70'
            }`}
          >
            Private Photo Gallery Preview
          </button>
        </div>

        <p className="text-xs text-[#491C59]">
          {subTab === 'invitation'
            ? 'Tap the royal purple wax seal on the isolated envelope to open'
            : 'Click any gallery frame to inspect full archival lightbox'}
        </p>
      </div>

      {subTab === 'invitation' ? (
        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-12">
          {/* Isolated Envelope Opener resting on signature Butter Yellow */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center rounded-2xl border border-[#2E083B]/15 bg-[#F3E178] p-4 sm:p-8">
            <IsolatedEnvelope
              size="lg"
              isOpen={isOpened}
              onToggleOpen={() => {
                setIsOpened((prev) => !prev);
                if (isOpened) setRsvpSubmitted(false);
              }}
              footerStamp={(coupleNames || 'RODERICK & ELLEN').toUpperCase()}
            >
              <div className="text-center">
                <div className="flex justify-center">
                  <WaxSealEmblem size={42} variant="outline" />
                </div>
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[#491C59]">
                  Together with their families
                </p>
                <h4 className="mt-1 font-display text-2xl font-semibold text-[#2E083B] sm:text-3xl">
                  {coupleNames || 'Claire & Julian'}
                </h4>
                <p className="mt-1 text-xs text-[#491C59]">
                  {weddingDate || 'Saturday, 18 October 2026'}
                </p>
                <p className="mt-0.5 text-xs font-semibold text-[#2E083B]">
                  {venueName || 'The Orangery at Vespera Estate'}
                </p>

                <div className="mt-5 border-t border-[#2E083B]/15 pt-4 text-left">
                  {rsvpSubmitted ? (
                    <div className="rounded-lg border border-[#2E083B]/15 bg-[#F3E178]/55 p-3.5 text-center">
                      <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#2E083B] text-[#F3E178]">
                        <Check className="h-4 w-4" />
                      </div>
                      <p className="mt-1.5 text-xs font-semibold text-[#2E083B]">
                        RSVP Confirmed ({rsvpStatus === 'attending' ? guestCount : 'Declined'})
                      </p>
                      <button
                        type="button"
                        onClick={() => setRsvpSubmitted(false)}
                        className="mt-2 min-h-[36px] text-[11px] font-medium text-[#2E083B] underline underline-offset-4 cursor-pointer"
                      >
                        Edit RSVP Response
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleRsvpSubmit} className="space-y-2.5">
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        <button
                          type="button"
                          onClick={() => setRsvpStatus('attending')}
                          className={`min-h-[40px] rounded-lg border px-2.5 py-2 text-[11px] font-semibold transition-colors cursor-pointer ${
                            rsvpStatus === 'attending'
                              ? 'border-[#2E083B] bg-[#2E083B] text-[#F3E178]'
                              : 'border-[#2E083B]/20 text-[#2E083B]'
                          }`}
                        >
                          Joyfully Attending
                        </button>
                        <button
                          type="button"
                          onClick={() => setRsvpStatus('declined')}
                          className={`min-h-[40px] rounded-lg border px-2.5 py-2 text-[11px] font-semibold transition-colors cursor-pointer ${
                            rsvpStatus === 'declined'
                              ? 'border-[#2E083B] bg-[#2E083B] text-[#F3E178]'
                              : 'border-[#2E083B]/20 text-[#2E083B]'
                          }`}
                        >
                          Regretfully Unable
                        </button>
                      </div>

                      {rsvpStatus === 'attending' && (
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                          <select
                            value={guestCount}
                            onChange={(e) => setGuestCount(e.target.value)}
                            aria-label="Number of guests"
                            className="min-h-[40px] rounded-lg border border-[#2E083B]/20 bg-white px-2.5 py-1.5 text-base text-[#2E083B] sm:text-xs"
                          >
                            <option value="1 Guest">1 Guest</option>
                            <option value="2 Guests">2 Guests</option>
                            <option value="3 Guests">3 Guests</option>
                          </select>
                          <input
                            type="text"
                            value={dietaryNote}
                            onChange={(e) => setDietaryNote(e.target.value)}
                            placeholder="Dietary notes (optional)"
                            className="min-h-[40px] rounded-lg border border-[#2E083B]/20 bg-white px-2.5 py-1.5 text-base text-[#2E083B] placeholder:text-[#491C59]/60 sm:text-xs"
                          />
                        </div>
                      )}

                      <button
                        type="submit"
                        className="min-h-[44px] w-full rounded-lg bg-[#2E083B] py-2 text-xs font-semibold text-[#F3E178] transition-colors hover:bg-[#3D104E] cursor-pointer"
                      >
                        Submit Sample RSVP
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </IsolatedEnvelope>

            {!isOpened && (
              <button
                type="button"
                onClick={() => setIsOpened(true)}
                className="mt-5 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#2E083B] px-5 py-2.5 text-xs font-semibold text-[#F3E178] transition-colors duration-150 hover:bg-[#3D104E] sm:mt-6 sm:w-auto cursor-pointer"
              >
                Break Wax Seal &amp; Open Invitation
              </button>
            )}
          </div>

          {/* Personalization Controls */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#2E083B]/15 bg-[#2E083B] p-5 text-[#FAF5E6] sm:p-6 lg:col-span-5">
            <div className="space-y-4">
              <h4 className="font-display text-2xl font-semibold text-[#F3E178]">
                Personalize Sample Invitation
              </h4>
              <p className="text-xs leading-relaxed text-[#EFE4CA]/85">
                Every couple receives a dedicated domain, custom wax-seal monogram, and real-time
                RSVP ledger. Edit the fields below to watch the isolated envelope &amp; card update
                live.
              </p>

              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-medium text-[#F3E178]">Couple Names</label>
                  <input
                    type="text"
                    value={coupleNames}
                    onChange={(e) => setCoupleNames(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-[#F3E178]/25 bg-[#3B104B] px-3 py-2 text-base text-[#FAF5E6] sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#F3E178]">Ceremony Date</label>
                  <input
                    type="text"
                    value={weddingDate}
                    onChange={(e) => setWeddingDate(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-[#F3E178]/25 bg-[#3B104B] px-3 py-2 text-base text-[#FAF5E6] sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#F3E178]">Venue</label>
                  <input
                    type="text"
                    value={venueName}
                    onChange={(e) => setVenueName(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-[#F3E178]/25 bg-[#3B104B] px-3 py-2 text-base text-[#FAF5E6] sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-[#F3E178]/15 pt-4 text-xs text-[#EFE4CA]/80">
              Included in every commission: Mobile-first guest pass · Calendar sync · Private photo
              vault after the celebration.
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WEDDING_GALLERY_FRAMES.map((frame) => (
              <button
                key={frame.id}
                type="button"
                onClick={() => setSelectedFrame(frame)}
                className="group rounded-xl border border-[#2E083B]/15 bg-[#FAF5E6] p-3 text-left transition-colors duration-150 hover:border-[#2E083B]/50 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2E083B]"
              >
                {renderGalleryArtwork(frame)}
                <div className="mt-3 flex items-start justify-between gap-2">
                  <div>
                    <p className="font-display text-lg font-semibold text-[#2E083B]">{frame.title}</p>
                    <p className="text-xs text-[#491C59]">
                      {frame.moment} · {frame.location}
                    </p>
                  </div>
                  <ZoomIn className="mt-1 h-4 w-4 shrink-0 text-[#2E083B] opacity-70 group-hover:opacity-100" />
                </div>
              </button>
            ))}
          </div>

          {selectedFrame && (
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`Gallery inspection: ${selectedFrame.title}`}
              className="fixed inset-0 z-50 flex items-center justify-center bg-[#240530]/90 p-3 sm:p-6 backdrop-blur-sm"
              onClick={() => setSelectedFrame(null)}
            >
              <div
                className="relative w-full max-w-xl rounded-2xl border border-[#F3E178]/35 bg-[#FAF5E6] p-4 sm:p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between gap-3 pb-4">
                  <div>
                    <p className="text-xs text-[#491C59]">
                      {selectedFrame.aspectLabel} · {selectedFrame.location}
                    </p>
                    <h4 className="font-display text-xl font-semibold text-[#2E083B] sm:text-2xl">
                      {selectedFrame.title}
                    </h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedFrame(null)}
                    aria-label="Close gallery preview"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#2E083B]/20 text-[#2E083B] hover:bg-[#F3E178] sm:h-10 sm:w-10 cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                {renderGalleryArtwork(selectedFrame)}
                <p className="mt-4 text-xs leading-relaxed text-[#491C59]">
                  Delivered inside a private, password-protected Roderick &amp; Ellen gallery where
                  guests can browse full-resolution moments and download archival prints.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 02. Logo Creation & Brand Identity Lab                                     */
/* -------------------------------------------------------------------------- */
const LogoIdentityZoomLab: React.FC = () => {
  const [surface, setSurface] = useState<'butter' | 'plum' | 'ivory' | 'noir'>('butter');
  const [showGrid, setShowGrid] = useState(true);
  const [brandTitle, setBrandTitle] = useState('RODERICK & ELLEN');

  const surfaceStyles = {
    butter: {
      bg: 'bg-[#F3E178]',
      text: 'text-[#2E083B]',
      sub: 'text-[#491C59]',
      sealVariant: 'plum' as const,
      label: 'Butter Yellow · #F3E178',
    },
    plum: {
      bg: 'bg-[#2E083B]',
      text: 'text-[#F3E178]',
      sub: 'text-[#EFE4CA]',
      sealVariant: 'gold' as const,
      label: 'Royal Purple · #2E083B',
    },
    ivory: {
      bg: 'bg-[#FAF5E6]',
      text: 'text-[#2E083B]',
      sub: 'text-[#491C59]',
      sealVariant: 'plum' as const,
      label: 'Cotton Ivory · #FAF5E6',
    },
    noir: {
      bg: 'bg-[#240530]',
      text: 'text-[#FAF5E6]',
      sub: 'text-[#F3E178]',
      sealVariant: 'gold' as const,
      label: 'Deep Aubergine · #240530',
    },
  };

  const current = surfaceStyles[surface];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
      {/* Live Specimen Board */}
      <div className="lg:col-span-7 space-y-4">
        <div
          className={`relative flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#2E083B]/15 p-5 transition-colors duration-200 sm:min-h-[340px] sm:p-8 ${current.bg}`}
        >
          {showGrid && (
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
          )}

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="relative">
              <WaxSealEmblem className="h-24 w-24 sm:h-[120px] sm:w-[120px]" variant={current.sealVariant} />
              {showGrid && (
                <div className="pointer-events-none absolute -inset-3 rounded-full border border-dashed border-current opacity-35" />
              )}
            </div>

            <p
              className={`mt-5 font-display text-xl font-semibold tracking-[0.12em] sm:mt-6 sm:text-3xl sm:tracking-[0.14em] ${current.text}`}
            >
              {brandTitle.toUpperCase() || 'RODERICK & ELLEN'}
            </p>
            <p className={`mt-2 text-xs font-medium ${current.sub}`}>{current.label}</p>
          </div>
        </div>

        {/* Scale & Application Stress Tests */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <div className="rounded-xl border border-[#2E083B]/15 bg-[#F3E178]/45 p-2.5 text-center sm:p-4">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-[#2E083B] text-xs font-display font-bold text-[#F3E178]">
              RE
            </div>
            <p className="mt-2 text-[11px] font-semibold text-[#2E083B] sm:text-xs">App Icon</p>
          </div>
          <div className="rounded-xl border border-[#2E083B]/15 bg-[#F3E178]/45 p-2.5 text-center sm:p-4">
            <div className="mx-auto flex h-10 w-10 items-center justify-center">
              <WaxSealEmblem size={40} />
            </div>
            <p className="mt-2 text-[11px] font-semibold text-[#2E083B] sm:text-xs">Wax Stamp</p>
          </div>
          <div className="rounded-xl border border-[#2E083B]/15 bg-[#F3E178]/45 p-2.5 text-center sm:p-4">
            <p className="flex h-10 items-center justify-center font-display text-sm font-semibold tracking-wider text-[#2E083B]">
              R &amp; E
            </p>
            <p className="mt-2 text-[11px] font-semibold text-[#2E083B] sm:text-xs">Wordmark</p>
          </div>
        </div>
      </div>

      {/* Inspector Controls & Circularly Isolated Wax Reference */}
      <div className="flex flex-col justify-between rounded-2xl border border-[#2E083B]/15 bg-[#2E083B] p-5 text-[#FAF5E6] sm:p-6 lg:col-span-5">
        <div className="space-y-5">
          <div>
            <h4 className="font-display text-2xl font-semibold text-[#F3E178]">
              Crest &amp; Surface Inspector
            </h4>
            <p className="mt-1 text-xs leading-relaxed text-[#EFE4CA]/85">
              Test contrast polarity, grid geometry, and physical seal fidelity across our yellow
              and royal purple surfaces.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-[#F3E178]">Surface Colorway</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {(['butter', 'plum', 'ivory', 'noir'] as const).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSurface(key)}
                  className={`min-h-[40px] rounded-lg border px-3 py-2 text-left text-xs font-semibold transition-colors cursor-pointer ${
                    surface === key
                      ? 'border-[#F3E178] bg-[#F3E178] text-[#2E083B]'
                      : 'border-[#F3E178]/25 bg-[#3B104B] text-[#FAF5E6] hover:border-[#F3E178]/60'
                  }`}
                >
                  {surfaceStyles[key].label.split('·')[0].trim()}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-[#F3E178]/20 bg-[#3B104B] px-3.5 py-2.5">
            <span className="text-xs font-medium text-[#FAF5E6]">Construction Gridlines</span>
            <button
              type="button"
              onClick={() => setShowGrid((prev) => !prev)}
              className={`min-h-[36px] rounded-md px-3 py-1 text-xs font-semibold cursor-pointer ${
                showGrid ? 'bg-[#F3E178] text-[#2E083B]' : 'bg-[#2E083B] text-[#F3E178]'
              }`}
            >
              {showGrid ? 'Visible' : 'Hidden'}
            </button>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#F3E178]">
              Test Custom Wordmark Lockup
            </label>
            <input
              type="text"
              value={brandTitle}
              onChange={(e) => setBrandTitle(e.target.value)}
              className="mt-1 w-full rounded-lg border border-[#F3E178]/25 bg-[#3B104B] px-3 py-2 text-base text-[#FAF5E6] sm:text-sm"
            />
          </div>
        </div>

        {/* Circularly Isolated Macro Wax Seal Benchmark */}
        <div className="mt-6 flex items-center gap-4 rounded-xl border border-[#F3E178]/25 bg-[#3B104B] p-3.5">
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-[#F3E178]">
            <img
              src={BRAND_ASSETS[1].src}
              alt={BRAND_ASSETS[1].title}
              referrerPolicy="no-referrer"
              className="h-full w-full scale-125 object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold text-[#F3E178]">Isolated Physical Wax Benchmark</p>
            <p className="mt-0.5 text-xs text-[#EFE4CA]/85">
              Vector-calibrated for physical wax, foil embossing, and crisp digital crests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 03. Chatbots & AI Agents for Companies Lab                                 */
/* -------------------------------------------------------------------------- */
interface ChatEntry {
  sender: 'user' | 'agent';
  text: string;
  toolCall?: string;
}

const AgentZoomLab: React.FC = () => {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const scenario = AGENT_SCENARIOS[scenarioIdx];
  const [messages, setMessages] = useState<ChatEntry[]>([
    { sender: 'agent', text: scenario.greeting },
  ]);
  const [customInput, setCustomInput] = useState('');

  useEffect(() => {
    setMessages([{ sender: 'agent', text: AGENT_SCENARIOS[scenarioIdx].greeting }]);
    setCustomInput('');
  }, [scenarioIdx]);

  const handleQuickPrompt = (prompt: (typeof scenario.quickPrompts)[number]) => {
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: prompt.userMessage },
      { sender: 'agent', text: prompt.agentReply, toolCall: prompt.toolCall },
    ]);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = customInput.trim();
    if (!trimmed) return;

    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: trimmed },
      {
        sender: 'agent',
        toolCall: `route_company_intent(company="${scenario.companyName}", query="${trimmed.slice(0, 38)}")`,
        text: `Thank you for asking about "${trimmed}". In a live ${scenario.companyName} deployment, this agent searches your verified documentation, checks real-time availability or account records, and escalates complex requests directly to your team with a full summary.`,
      },
    ]);
    setCustomInput('');
  };

  return (
    <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-12">
      <div className="flex flex-col justify-between rounded-2xl border border-[#2E083B]/15 bg-[#2E083B] p-5 text-[#FAF5E6] sm:p-6 lg:col-span-5">
        <div>
          <h4 className="font-display text-2xl font-semibold text-[#F3E178]">
            Select Client Deployment
          </h4>
          <p className="mt-1 text-xs leading-relaxed text-[#EFE4CA]/85">
            Switch between three tailored AI agent architectures and trigger real workflow prompts.
          </p>

          <div className="mt-4 space-y-2">
            {AGENT_SCENARIOS.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setScenarioIdx(idx)}
                className={`w-full rounded-xl border p-3.5 text-left transition-colors cursor-pointer ${
                  scenarioIdx === idx
                    ? 'border-[#F3E178] bg-[#F3E178] text-[#2E083B]'
                    : 'border-[#F3E178]/20 bg-[#3B104B] text-[#FAF5E6] hover:border-[#F3E178]/50'
                }`}
              >
                <p className="text-sm font-semibold">{item.companyName}</p>
                <p
                  className={`mt-0.5 text-xs ${
                    scenarioIdx === idx ? 'text-[#491C59]' : 'text-[#EFE4CA]/80'
                  }`}
                >
                  {item.industry} · {item.roleTitle}
                </p>
              </button>
            ))}
          </div>

          <div className="mt-6">
            <p className="text-xs font-medium text-[#F3E178]">Sample Customer Prompts</p>
            <div className="mt-2 flex flex-col gap-2">
              {scenario.quickPrompts.map((prompt) => (
                <button
                  key={prompt.label}
                  type="button"
                  onClick={() => handleQuickPrompt(prompt)}
                  className="min-h-[40px] rounded-lg border border-[#F3E178]/25 bg-[#3B104B] px-3 py-2 text-left text-xs font-medium text-[#FAF5E6] transition-colors hover:border-[#F3E178] hover:bg-[#F3E178] hover:text-[#2E083B] cursor-pointer"
                >
                  {prompt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-2xl border border-[#2E083B]/15 bg-[#FAF5E6] lg:col-span-7">
        <div className="flex items-center justify-between gap-2 border-b border-[#2E083B]/12 bg-[#F3E178]/65 px-4 py-3.5 rounded-t-2xl sm:px-5">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[#2E083B]">{scenario.companyName} Agent</p>
            <p className="truncate text-xs text-[#491C59]">{scenario.roleTitle}</p>
          </div>
          <button
            type="button"
            onClick={() => setMessages([{ sender: 'agent', text: scenario.greeting }])}
            className="shrink-0 text-xs font-semibold text-[#2E083B] underline underline-offset-4 cursor-pointer"
          >
            Reset Chat
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto p-4 max-h-[320px] sm:max-h-[340px] sm:p-5">
          {messages.map((msg, i) => (
            <div
              key={`${msg.sender}-${i}`}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              {msg.toolCall && (
                <div className="mb-1.5 max-w-full break-all rounded-md border border-[#2E083B]/15 bg-[#F3E178]/50 px-2.5 py-1 font-mono text-[11px] text-[#2E083B]">
                  Tool call: {msg.toolCall}
                </div>
              )}
              <div
                className={`max-w-[90%] rounded-xl px-3.5 py-2.5 text-xs leading-relaxed sm:max-w-[85%] sm:px-4 sm:py-3 sm:text-sm ${
                  msg.sender === 'user'
                    ? 'bg-[#2E083B] text-[#F3E178]'
                    : 'border border-[#2E083B]/12 bg-[#EFE4CA]/70 text-[#2E083B]'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSendCustom}
          className="flex items-center gap-2 border-t border-[#2E083B]/12 p-3 sm:p-4"
        >
          <input
            type="text"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            placeholder={`Ask ${scenario.companyName}'s agent...`}
            className="min-w-0 flex-1 rounded-lg border border-[#2E083B]/20 bg-white px-3 py-2.5 text-base text-[#2E083B] placeholder:text-[#491C59]/60 sm:px-3.5 sm:text-sm"
          />
          <button
            type="submit"
            aria-label="Send test message"
            className="inline-flex h-11 items-center gap-1.5 rounded-lg bg-[#2E083B] px-3.5 text-xs font-semibold text-[#F3E178] transition-colors hover:bg-[#3D104E] shrink-0 sm:h-10 sm:px-4 cursor-pointer"
          >
            <span>Send</span>
            <Send className="h-3.5 w-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 04. Custom Company Websites Inspector Lab                                  */
/* -------------------------------------------------------------------------- */
const WebsiteZoomLab: React.FC = () => {
  const [blueprintIdx, setBlueprintIdx] = useState(0);
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);

  const blueprint = WEBSITE_BLUEPRINTS[blueprintIdx];

  useEffect(() => {
    setActiveSectionIdx(0);
  }, [blueprintIdx]);

  const widthClass =
    viewport === 'desktop' ? 'w-full' : viewport === 'tablet' ? 'max-w-[540px]' : 'max-w-[340px]';

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2E083B]/12 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          {WEBSITE_BLUEPRINTS.map((bp, idx) => (
            <button
              key={bp.id}
              type="button"
              onClick={() => setBlueprintIdx(idx)}
              className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                blueprintIdx === idx
                  ? 'bg-[#2E083B] text-[#F3E178]'
                  : 'border border-[#2E083B]/20 bg-[#FAF5E6] text-[#2E083B] hover:bg-[#F3E178]/50'
              }`}
            >
              {bp.clientName}
            </button>
          ))}
        </div>

        <div className="inline-flex items-center gap-1 rounded-lg bg-[#F3E178]/65 p-1">
          <button
            type="button"
            onClick={() => setViewport('desktop')}
            aria-label="Desktop viewport"
            className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-semibold cursor-pointer ${
              viewport === 'desktop' ? 'bg-[#2E083B] text-[#F3E178]' : 'text-[#2E083B]'
            }`}
          >
            <Monitor className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Desktop</span>
          </button>
          <button
            type="button"
            onClick={() => setViewport('tablet')}
            aria-label="Tablet viewport"
            className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-semibold cursor-pointer ${
              viewport === 'tablet' ? 'bg-[#2E083B] text-[#F3E178]' : 'text-[#2E083B]'
            }`}
          >
            <Tablet className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Tablet</span>
          </button>
          <button
            type="button"
            onClick={() => setViewport('mobile')}
            aria-label="Mobile viewport"
            className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-semibold cursor-pointer ${
              viewport === 'mobile' ? 'bg-[#2E083B] text-[#F3E178]' : 'text-[#2E083B]'
            }`}
          >
            <Smartphone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Mobile</span>
          </button>
        </div>
      </div>

      <div className="flex justify-center rounded-2xl border border-[#2E083B]/15 bg-[#2E083B] p-3 sm:p-6">
        <div
          className={`mx-auto w-full overflow-hidden rounded-xl border border-[#F3E178]/30 bg-[#FAF5E6] transition-all duration-200 ${widthClass}`}
        >
          <div className="flex flex-col items-start gap-1 border-b border-[#2E083B]/12 bg-[#EFE4CA] px-3.5 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:px-4">
            <span className="max-w-full truncate font-mono text-[11px] text-[#491C59]">
              https://{blueprint.clientName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com
            </span>
            <span className="text-[11px] font-semibold text-[#2E083B]">{blueprint.sector}</span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2E083B]/10 px-4 py-3 sm:px-5">
            <span className="font-display text-lg font-semibold text-[#2E083B]">
              {blueprint.clientName}
            </span>
            {viewport !== 'mobile' && (
              <div className="hidden sm:flex items-center gap-4 text-xs text-[#491C59]">
                {blueprint.navigation.map((n) => (
                  <span key={n}>{n}</span>
                ))}
              </div>
            )}
            <span className="rounded-md bg-[#2E083B] px-2.5 py-1 text-[11px] font-semibold text-[#F3E178] whitespace-nowrap">
              {blueprint.primaryAction}
            </span>
          </div>

          <div className="bg-[#F3E178] px-4 py-6 sm:px-8 sm:py-8">
            <h4 className="max-w-lg font-display text-2xl font-semibold text-[#2E083B] sm:text-3xl">
              {blueprint.headline}
            </h4>
            <p className="mt-2 max-w-lg text-xs leading-relaxed text-[#3D104E] sm:text-sm">
              {blueprint.subheadline}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-3 sm:p-5">
            {blueprint.sections.map((sec, idx) => (
              <button
                key={sec.label}
                type="button"
                onClick={() => setActiveSectionIdx(idx)}
                className={`rounded-lg border p-3.5 text-left transition-colors cursor-pointer ${
                  activeSectionIdx === idx
                    ? 'border-[#2E083B] bg-[#2E083B] text-[#FAF5E6]'
                    : 'border-[#2E083B]/12 bg-[#EFE4CA]/60 text-[#2E083B] hover:border-[#2E083B]/40'
                }`}
              >
                <p
                  className={`font-mono text-[11px] ${
                    activeSectionIdx === idx ? 'text-[#F3E178]' : 'text-[#491C59]'
                  }`}
                >
                  {sec.label}
                </p>
                <p className="mt-1 text-xs font-semibold">{sec.title}</p>
                <p
                  className={`mt-1 text-[11px] leading-relaxed ${
                    activeSectionIdx === idx ? 'text-[#FAF5E6]/85' : 'text-[#491C59]'
                  }`}
                >
                  {sec.detail}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-[#2E083B]/15 bg-[#F3E178]/50 p-4">
          <p className="text-xs text-[#491C59]">First Contentful Load</p>
          <p className="mt-1 font-mono text-lg font-semibold text-[#2E083B] tabular-nums">
            {blueprint.performance.loadTime}
          </p>
        </div>
        <div className="rounded-xl border border-[#2E083B]/15 bg-[#F3E178]/50 p-4">
          <p className="text-xs text-[#491C59]">Contrast &amp; Keyboard Standard</p>
          <p className="mt-1 font-mono text-lg font-semibold text-[#2E083B] tabular-nums">
            {blueprint.performance.accessibility}
          </p>
        </div>
        <div className="rounded-xl border border-[#2E083B]/15 bg-[#F3E178]/50 p-4">
          <p className="text-xs text-[#491C59]">Measured Client Outcome</p>
          <p className="mt-1 font-mono text-lg font-semibold text-[#2E083B] tabular-nums">
            {blueprint.performance.conversionLift}
          </p>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Main ServiceZoomStudio Wrapper                                             */
/* -------------------------------------------------------------------------- */
export const ServiceZoomStudio: React.FC<ServiceZoomStudioProps> = ({
  activeService,
  onSelectService,
  isFullscreenModal,
  onToggleFullscreenModal,
  onRequestService,
}) => {
  const currentService = SERVICES.find((s) => s.id === activeService) ?? SERVICES[0];

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreenModal) {
        onToggleFullscreenModal(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isFullscreenModal, onToggleFullscreenModal]);

  const renderLabContent = () => {
    switch (activeService) {
      case 'weddings':
        return <WeddingZoomLab />;
      case 'logos':
        return <LogoIdentityZoomLab />;
      case 'agents':
        return <AgentZoomLab />;
      case 'websites':
        return <WebsiteZoomLab />;
    }
  };

  const studioBody = (inModal: boolean) => (
    <div className="rounded-2xl border border-[#2E083B]/20 bg-[#FAF5E6] p-4 sm:p-8 shadow-sm">
      <div className="flex flex-col justify-between gap-4 border-b border-[#2E083B]/12 pb-5 sm:gap-5 sm:pb-6 lg:flex-row lg:items-center">
        <div>
          <p className="font-mono text-xs font-medium text-[#491C59] tabular-nums">
            Service {currentService.index} of 04 · Interactive Zoom
          </p>
          <h3 className="mt-1 font-display text-2xl font-semibold text-[#2E083B] sm:text-3xl">
            {currentService.title}
          </h3>
        </div>

        <div className="flex w-full items-center gap-2 sm:w-auto">
          <button
            type="button"
            onClick={() => onRequestService(currentService.id)}
            className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-lg bg-[#2E083B] px-4 py-2 text-xs font-semibold text-[#F3E178] transition-colors hover:bg-[#3D104E] whitespace-nowrap sm:min-h-[40px] sm:flex-none cursor-pointer"
          >
            Commission This Service
          </button>
          <button
            type="button"
            onClick={() => onToggleFullscreenModal(!inModal)}
            aria-label={inModal ? 'Exit fullscreen zoom' : 'Expand fullscreen zoom'}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#2E083B]/25 text-[#2E083B] transition-colors hover:bg-[#F3E178] sm:h-10 sm:w-10 cursor-pointer"
          >
            {inModal ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* 4-Service Segmented Switcher */}
      <div
        className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4"
        role="tablist"
        aria-label="Zoom into Roderick and Ellen services"
      >
        {SERVICES.map((svc) => (
          <button
            key={svc.id}
            type="button"
            role="tab"
            aria-selected={svc.id === activeService}
            onClick={() => onSelectService(svc.id)}
            className={`flex min-h-[44px] items-center justify-between rounded-xl border px-4 py-2.5 text-left transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2E083B] ${
              svc.id === activeService
                ? 'border-[#2E083B] bg-[#2E083B] text-[#F3E178]'
                : 'border-[#2E083B]/15 bg-[#F3E178]/45 text-[#2E083B] hover:bg-[#F3E178]'
            }`}
          >
            <span className="text-xs font-semibold truncate">
              {svc.index}. {svc.shortTitle}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6 sm:mt-7">{renderLabContent()}</div>
    </div>
  );

  return (
    <section id="zoom-studio" className="border-b border-[#2E083B]/15 bg-[#F3E178] py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="mb-6 max-w-2xl sm:mb-8">
          <p className="text-sm font-semibold text-[#491C59]">Interactive Service Zoom</p>
          <h2
            className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#2E083B] sm:text-4xl"
            style={{ textWrap: 'balance' }}
          >
            Step inside each discipline before we begin your build.
          </h2>
        </div>

        {studioBody(false)}
      </div>

      {isFullscreenModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Fullscreen zoom: ${currentService.title}`}
          className="fixed inset-0 z-50 overflow-y-auto bg-[#240530]/90 p-3 sm:p-8 backdrop-blur-sm"
          onClick={() => onToggleFullscreenModal(false)}
        >
          <div className="mx-auto max-w-[1200px]" onClick={(e) => e.stopPropagation()}>
            {studioBody(true)}
          </div>
        </div>
      )}
    </section>
  );
};
