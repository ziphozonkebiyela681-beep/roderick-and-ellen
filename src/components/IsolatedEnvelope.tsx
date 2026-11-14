import React, { useId } from 'react';
import { WaxSealEmblem } from './WaxSealEmblem';

interface IsolatedEnvelopeProps {
  isOpen?: boolean;
  onToggleOpen?: () => void;
  title?: string;
  subtitle?: string;
  footerStamp?: string;
  size?: 'sm' | 'md' | 'lg';
  tilt?: 'none' | 'left' | 'right';
  className?: string;
  children?: React.ReactNode;
}

/**
 * Cutout cotton-stock envelope faithfully matching the proportions,
 * curved shoulder flap, diagonal X-fold seam lines, tactile paper texture,
 * bottom embossed wordmark, and centered royal purple wax seal.
 */
export const IsolatedEnvelope: React.FC<IsolatedEnvelopeProps> = ({
  isOpen = false,
  onToggleOpen,
  title = 'Roderick & Ellen',
  subtitle = 'Bespoke Digital Atelier',
  footerStamp = 'RODERICK & ELLEN',
  size = 'lg',
  tilt = 'none',
  className = '',
  children,
}) => {
  const uid = useId().replace(/:/g, '');

  const sizeClasses =
    size === 'sm'
      ? 'w-44'
      : size === 'md'
        ? 'w-full max-w-[380px]'
        : 'w-full max-w-[520px]';

  const tiltClass =
    tilt === 'left' ? '-rotate-2 hover:rotate-0' : tilt === 'right' ? 'rotate-2 hover:rotate-0' : '';

  const sealSizeClass =
    size === 'sm'
      ? 'h-10 w-10'
      : size === 'md'
        ? 'h-16 w-16 sm:h-[76px] sm:w-[76px]'
        : 'h-[72px] w-[72px] sm:h-[98px] sm:w-[98px]';

  return (
    <div
      className={`relative mx-auto select-none transition-transform duration-300 ${sizeClasses} ${tiltClass} ${className}`}
      style={{
        filter: 'drop-shadow(0 24px 36px rgba(33, 5, 43, 0.28))',
      }}
    >
      {/* Letter card that slides upward out of the envelope when unsealed */}
      {isOpen && (
        <div className="relative z-10 mx-auto mb-[-24px] w-[92%] rounded-t-xl border border-[#2E083B]/18 bg-[#FAF5E6] px-4 pt-5 pb-9 shadow-sm transition-all duration-300 sm:mb-[-38px] sm:w-[90%] sm:px-7 sm:pt-6 sm:pb-11">
          {children ? (
            children
          ) : (
            <div className="text-center">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#491C59]">
                {subtitle}
              </p>
              <h3 className="mt-1.5 font-display text-2xl font-semibold text-[#2E083B] sm:text-3xl">
                {title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#491C59]">
                Personalized digital wedding invitations, private photo galleries, signature logos,
                company AI agents &amp; bespoke websites.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Cotton Envelope Silhouette matching flat-lay proportions (400 x 285) */}
      <div className="relative z-20 aspect-[400/285] w-full overflow-hidden rounded-[4px] border border-[#2E083B]/14 bg-[#EFE4CA]">
        {/* Natural cotton paper fiber grain */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.2]"
          aria-hidden="true"
        >
          <filter id={`cottonGrain-${uid}`}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter={`url(#cottonGrain-${uid})`} />
        </svg>

        {/* Authentic folded envelope geometry matching flat-lay photo */}
        <svg
          viewBox="0 0 400 285"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`flapGrad-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F5ECE0" />
              <stop offset="100%" stopColor="#EBDEC3" />
            </linearGradient>
            <linearGradient id={`bottomGrad-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EDE0C4" />
              <stop offset="100%" stopColor="#F4EAD5" />
            </linearGradient>
            <filter id={`flapShadow-${uid}`} x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#2E083B" floodOpacity="0.16" />
            </filter>
          </defs>

          {/* Left & Right triangular side panels */}
          <polygon points="0,0 200,152 0,285" fill="#E6D7BA" />
          <polygon points="400,0 200,152 400,285" fill="#E2D2B2" />

          {/* Diagonal side-to-center crease lines */}
          <line x1="0" y1="285" x2="152" y2="165" stroke="#2E083B" strokeOpacity="0.12" strokeWidth="1" />
          <line x1="400" y1="285" x2="248" y2="165" stroke="#2E083B" strokeOpacity="0.12" strokeWidth="1" />

          {/* Bottom folded flap rising behind the seal */}
          <path
            d="M0 285 L154 162 Q200 132 246 162 L400 285 Z"
            fill={`url(#bottomGrad-${uid})`}
            stroke="#2E083B"
            strokeOpacity="0.14"
            strokeWidth="1"
          />

          {/* Top flap with curved outer shoulder corners & rounded V-tip */}
          {!isOpen ? (
            <path
              d="M0 0 L400 0 L396 22 Q390 40 374 53 L218 164 Q200 176 182 164 L26 53 Q10 40 4 22 Z"
              fill={`url(#flapGrad-${uid})`}
              stroke="#2E083B"
              strokeOpacity="0.15"
              strokeWidth="1.1"
              filter={`url(#flapShadow-${uid})`}
            />
          ) : (
            <path
              d="M0 0 L400 0 L380 28 L200 66 L20 28 Z"
              fill="#DFCEAE"
              stroke="#2E083B"
              strokeOpacity="0.14"
              strokeWidth="1"
            />
          )}
        </svg>

        {/* Centered Wax Seal anchored directly over the V-flap tip (~56% down) */}
        {!isOpen && (
          <div
            className="absolute inset-x-0 flex justify-center"
            style={{ top: '56%', transform: 'translateY(-50%)' }}
          >
            {onToggleOpen ? (
              <button
                type="button"
                onClick={onToggleOpen}
                aria-label="Unseal envelope"
                className="group relative flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2E083B]"
              >
                <WaxSealEmblem className={`${sealSizeClass} h-auto`} />
              </button>
            ) : (
              <WaxSealEmblem className={`${sealSizeClass} h-auto`} />
            )}
          </div>
        )}

        {/* Re-seal button when open */}
        {isOpen && onToggleOpen && (
          <button
            type="button"
            onClick={onToggleOpen}
            className="absolute top-2.5 right-2.5 z-30 rounded-md border border-[#2E083B]/20 bg-[#FAF5E6]/95 px-2.5 py-1 text-[11px] font-medium text-[#2E083B] transition-colors hover:bg-[#2E083B] hover:text-[#F3E178] sm:top-3 sm:right-3 cursor-pointer"
          >
            Seal Envelope
          </button>
        )}

        {/* Subtle centered plum serif wordmark along bottom of envelope */}
        {size !== 'sm' && (
          <p className="pointer-events-none absolute inset-x-3 bottom-2.5 truncate text-center font-display text-[9px] font-medium tracking-[0.24em] text-[#491C59]/85 sm:bottom-3 sm:text-[11px] sm:tracking-[0.28em]">
            {footerStamp}
          </p>
        )}
      </div>
    </div>
  );
};
