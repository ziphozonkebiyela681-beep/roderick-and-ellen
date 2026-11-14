import React, { useId } from 'react';

interface WaxSealEmblemProps {
  size?: number;
  className?: string;
  variant?: 'plum' | 'gold' | 'outline';
  showMonogram?: boolean;
}

/**
 * High-detail vector recreation of Roderick & Ellen's signature wax seal:
 * - Irregular molten outer wax rim with glossy top-left specular highlight
 * - Recessed circular stamp well with raised inner ring
 * - Beaded 5-arch royal crown with top finial
 * - Divided heraldic heater shield with sculpted serif R | E
 * - Lush dual laurel wreath with crossed stems and paired pointed leaves
 */
export const WaxSealEmblem: React.FC<WaxSealEmblemProps> = ({
  size = 88,
  className = '',
  variant = 'plum',
  showMonogram = true,
}) => {
  const uid = useId().replace(/:/g, '');

  const isOutline = variant === 'outline';
  const palette =
    variant === 'plum'
      ? {
          rimDark: '#23062D',
          waxBase: '#3E134E',
          waxMid: '#4E1C61',
          waxLight: '#6F3187',
          specular: '#9C5BB5',
          wellDark: '#2C093A',
          reliefLight: '#7D3B96',
          reliefMid: '#56216A',
          reliefShadow: '#1D0426',
        }
      : variant === 'gold'
        ? {
            rimDark: '#B3962E',
            waxBase: '#DFC657',
            waxMid: '#F3E178',
            waxLight: '#FAF0A5',
            specular: '#FFF8C9',
            wellDark: '#C8AE42',
            reliefLight: '#FFF7BE',
            reliefMid: '#EAD261',
            reliefShadow: '#8B7018',
          }
        : {
            rimDark: '#2E083B',
            waxBase: 'transparent',
            waxMid: 'transparent',
            waxLight: '#2E083B',
            specular: '#2E083B',
            wellDark: 'transparent',
            reliefLight: '#2E083B',
            reliefMid: '#2E083B',
            reliefShadow: '#2E083B',
          };

  // Paired leaf positions along left & right laurel arcs (x, y, angleDeg)
  const leftLeaves: [number, number, number][] = [
    [52, 108, -142],
    [43, 102, -128],
    [35, 93, -112],
    [29, 82, -96],
    [26, 70, -82],
    [27, 57, -64],
    [31, 45, -45],
    [39, 35, -26],
  ];

  const rightLeaves: [number, number, number][] = leftLeaves.map(([x, y, a]) => [
    140 - x,
    y,
    -a,
  ]);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Roderick & Ellen signature crowned R E wax seal"
      role="img"
    >
      <defs>
        <radialGradient id={`waxOuter-${uid}`} cx="36%" cy="30%" r="72%">
          <stop offset="0%" stopColor={palette.waxLight} />
          <stop offset="48%" stopColor={palette.waxMid} />
          <stop offset="82%" stopColor={palette.waxBase} />
          <stop offset="100%" stopColor={palette.rimDark} />
        </radialGradient>

        <radialGradient id={`waxWell-${uid}`} cx="60%" cy="62%" r="68%">
          <stop offset="0%" stopColor={palette.waxMid} />
          <stop offset="70%" stopColor={palette.waxBase} />
          <stop offset="100%" stopColor={palette.wellDark} />
        </radialGradient>

        <linearGradient id={`reliefGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={palette.reliefLight} />
          <stop offset="55%" stopColor={palette.reliefMid} />
          <stop offset="100%" stopColor={palette.reliefShadow} />
        </linearGradient>

        <filter id={`embossShadow-${uid}`} x="-12%" y="-12%" width="124%" height="124%">
          <feDropShadow
            dx="0.8"
            dy="1.3"
            stdDeviation="0.9"
            floodColor={palette.reliefShadow}
            floodOpacity={isOutline ? 0 : 0.72}
          />
        </filter>
      </defs>

      {/* Organic molten wax outer silhouette matching macro photo contours */}
      {!isOutline && (
        <g>
          <path
            d="M71 7C83 7 91 11 97 14C103 17 109 16 115 22C121 28 122 36 126 44C130 52 134 61 133 73C132 85 129 94 123 103C117 112 108 119 98 125C88 131 76 134 64 132C52 130 43 127 33 121C23 115 14 106 10 95C6 84 6 71 10 60C14 49 12 41 18 31C24 21 35 13 48 10C56 8 63 7 71 7Z"
            fill={`url(#waxOuter-${uid})`}
          />
          {/* Subtle molten wax rim specular arcs */}
          <path
            d="M25 36C34 21 51 12 70 11C84 10 98 15 108 23"
            stroke={palette.specular}
            strokeOpacity="0.42"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M119 95C110 112 93 124 72 126C56 127 40 122 29 112"
            stroke={palette.reliefShadow}
            strokeOpacity="0.55"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      )}

      {/* Recessed circular stamp well */}
      <circle
        cx="70"
        cy="70"
        r="50"
        fill={isOutline ? 'none' : `url(#waxWell-${uid})`}
        stroke={isOutline ? palette.rimDark : palette.reliefShadow}
        strokeOpacity={isOutline ? 0.9 : 0.65}
        strokeWidth={isOutline ? 2.2 : 2.5}
      />

      {/* Crisp embossed inner ring */}
      <circle
        cx="70"
        cy="70"
        r="46.5"
        stroke={isOutline ? palette.rimDark : palette.reliefLight}
        strokeOpacity={isOutline ? 0.55 : 0.72}
        strokeWidth="1.4"
      />

      {/* Embossed Crest Group (Crown + Divided Shield + Serif R|E + Dual Laurel Wreath) */}
      <g filter={`url(#embossShadow-${uid})`}>
        {/* Royal Crown */}
        <g
          stroke={isOutline ? palette.rimDark : `url(#reliefGrad-${uid})`}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Crown base band */}
          <path d="M55 43.5Q70 40.5 85 43.5" fill="none" />
          <path d="M54 40.5Q70 37.5 86 40.5" fill="none" />
          {/* Crown arches */}
          <path
            d="M54 40.5L51 30.5C55 32.5 59 32.5 61 28.5C64 25.5 68 24.5 70 23C72 24.5 76 25.5 79 28.5C81 32.5 85 32.5 89 30.5L86 40.5"
            fill={isOutline ? 'none' : palette.waxMid}
          />
          {/* Center dome & cross finial */}
          <path d="M70 23V18.5M67.8 20.5H72.2" />
          {/* Beaded crown pearls */}
          <circle cx="51" cy="29.5" r="1.4" fill={palette.reliefLight} stroke="none" />
          <circle cx="60.5" cy="27.5" r="1.4" fill={palette.reliefLight} stroke="none" />
          <circle cx="70" cy="24.8" r="1.5" fill={palette.reliefLight} stroke="none" />
          <circle cx="79.5" cy="27.5" r="1.4" fill={palette.reliefLight} stroke="none" />
          <circle cx="89" cy="29.5" r="1.4" fill={palette.reliefLight} stroke="none" />
        </g>

        {/* Heraldic Divided Heater Shield */}
        <g>
          <path
            d="M49.5 48.5L70 45.5L90.5 48.5V68C90.5 82.5 81 92.5 70 97.5C59 92.5 49.5 82.5 49.5 68V48.5Z"
            fill={isOutline ? 'none' : palette.waxBase}
            stroke={isOutline ? palette.rimDark : palette.reliefLight}
            strokeWidth="2.1"
            strokeLinejoin="round"
          />
          {/* Inner shield bevel line */}
          <path
            d="M52 50.5L70 48L88 50.5V67.5C88 80.5 79.5 89.5 70 94.2C60.5 89.5 52 80.5 52 67.5V50.5Z"
            fill="none"
            stroke={isOutline ? palette.rimDark : palette.reliefShadow}
            strokeOpacity={isOutline ? 0.35 : 0.65}
            strokeWidth="1"
          />
          {/* Center vertical divider rib */}
          <line
            x1="70"
            y1="46.5"
            x2="70"
            y2="96.5"
            stroke={isOutline ? palette.rimDark : palette.reliefLight}
            strokeWidth="1.9"
          />
        </g>

        {/* Sculpted Serif R | E Monogram */}
        {showMonogram && (
          <g
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontWeight: 700,
            }}
          >
            {/* Dark bevel base for depth */}
            {!isOutline && (
              <g fill={palette.reliefShadow} transform="translate(0.7, 0.9)">
                <text x="60.5" y="76" textAnchor="middle" fontSize="22">
                  R
                </text>
                <text x="79.5" y="76" textAnchor="middle" fontSize="22">
                  E
                </text>
              </g>
            )}
            <g fill={isOutline ? palette.rimDark : palette.reliefLight}>
              <text x="60.5" y="76" textAnchor="middle" fontSize="22">
                R
              </text>
              <text x="79.5" y="76" textAnchor="middle" fontSize="22">
                E
              </text>
            </g>
          </g>
        )}

        {/* Lush Symmetrical Laurel Wreath */}
        <g>
          {/* Main curved stems + crossed bottom stems */}
          <path
            d="M78 112C54 111 33 93 30 67C28 52 34 39 44 31"
            stroke={isOutline ? palette.rimDark : palette.reliefLight}
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M62 112C86 111 107 93 110 67C112 52 106 39 96 31"
            stroke={isOutline ? palette.rimDark : palette.reliefLight}
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Paired Laurel Leaves (Outer + Inner leaflets) */}
          {leftLeaves.map(([x, y, angle], idx) => (
            <g key={`l-${idx}`} transform={`translate(${x}, ${y}) rotate(${angle})`}>
              <path
                d="M0 0C-3 -3.5 -3 -8.5 0 -11.5C3 -8.5 3 -3.5 0 0Z"
                fill={isOutline ? palette.rimDark : palette.reliefLight}
                transform="rotate(-24)"
              />
              <path
                d="M0 0C-2.6 -3 -2.6 -7.5 0 -10.5C2.6 -7.5 2.6 -3 0 0Z"
                fill={isOutline ? palette.rimDark : palette.reliefMid}
                transform="rotate(22)"
              />
            </g>
          ))}
          {rightLeaves.map(([x, y, angle], idx) => (
            <g key={`r-${idx}`} transform={`translate(${x}, ${y}) rotate(${angle})`}>
              <path
                d="M0 0C-3 -3.5 -3 -8.5 0 -11.5C3 -8.5 3 -3.5 0 0Z"
                fill={isOutline ? palette.rimDark : palette.reliefLight}
                transform="rotate(24)"
              />
              <path
                d="M0 0C-2.6 -3 -2.6 -7.5 0 -10.5C2.6 -7.5 2.6 -3 0 0Z"
                fill={isOutline ? palette.rimDark : palette.reliefMid}
                transform="rotate(-22)"
              />
            </g>
          ))}
        </g>
      </g>
    </svg>
  );
};
