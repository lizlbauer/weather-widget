export function ClearLandscape() {
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="sky-c" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b1c2c" />
          <stop offset="100%" stopColor="#1a3838" />
        </linearGradient>
        <radialGradient id="moon-g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d4d0b0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#d4d0b0" stopOpacity="0" />
        </radialGradient>
        <filter id="grain-c" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grey" />
          <feBlend in="SourceGraphic" in2="grey" mode="overlay" result="blended" />
          <feComposite in="blended" in2="SourceGraphic" operator="in" />
        </filter>
      </defs>
      <rect width="400" height="400" fill="url(#sky-c)" />
      {/* Stars */}
      <circle cx="45" cy="38" r="1" fill="#fff" opacity="0.55" />
      <circle cx="110" cy="22" r="1" fill="#fff" opacity="0.45" />
      <circle cx="160" cy="55" r="1" fill="#fff" opacity="0.6" />
      <circle cx="330" cy="44" r="1" fill="#fff" opacity="0.65" />
      <circle cx="370" cy="28" r="1.5" fill="#fff" opacity="0.35" />
      <circle cx="75" cy="72" r="1" fill="#fff" opacity="0.5" />
      <circle cx="295" cy="75" r="1" fill="#fff" opacity="0.4" />
      <circle cx="250" cy="35" r="1" fill="#fff" opacity="0.55" />
      {/* Moon glow */}
      <circle cx="215" cy="148" r="48" fill="url(#moon-g)" />
      {/* Moon */}
      <circle cx="215" cy="148" r="20" fill="#cdc9a9" opacity="0.88" />
      {/* Far mountains */}
      <polygon
        points="0,300 50,215 85,240 125,178 162,202 198,162 230,182 265,160 305,178 348,162 390,174 400,172 400,310 0,310"
        fill="#1d3c3c"
      />
      {/* Mid mountains */}
      <polygon
        points="0,340 35,278 68,296 105,258 140,276 172,250 205,268 242,252 278,268 315,252 358,265 400,258 400,370 0,370"
        fill="#152a2a"
      />
      {/* Near mountains */}
      <polygon
        points="0,368 22,335 52,348 82,312 112,330 148,308 178,324 208,310 238,326 270,310 300,326 330,310 360,322 390,312 400,316 400,400 0,400"
        fill="#0e1e1e"
      />
      {/* Water */}
      <rect x="110" y="372" width="180" height="28" fill="#18353535" opacity="0.65" rx="2" />
      <rect x="130" y="374" width="140" height="4" fill="#2a5555" opacity="0.4" />
      {/* Trees */}
      <polygon points="52,370 61,342 70,370" fill="#060f0f" />
      <polygon points="46,376 61,344 76,376" fill="#060f0f" />
      <polygon points="68,374 79,344 90,374" fill="#060f0f" />
      <polygon points="88,372 97,346 106,372" fill="#060f0f" />
      <polygon points="300,373 310,344 320,373" fill="#060f0f" />
      <polygon points="294,378 308,346 322,378" fill="#060f0f" />
      <polygon points="318,375 329,345 340,375" fill="#060f0f" />
      <polygon points="338,373 347,347 356,373" fill="#060f0f" />
      <polygon points="155,376 163,352 171,376" fill="#060f0f" />
      <polygon points="228,376 237,353 246,376" fill="#060f0f" />
      {/* Grain overlay */}
      <rect width="400" height="400" fill="url(#sky-c)" opacity="0.12" filter="url(#grain-c)" />
    </svg>
  )
}

export function CloudyLandscape() {
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="sky-cl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#141c1c" />
          <stop offset="100%" stopColor="#222c2c" />
        </linearGradient>
        <filter id="grain-cl" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grey" />
          <feBlend in="SourceGraphic" in2="grey" mode="overlay" result="blended" />
          <feComposite in="blended" in2="SourceGraphic" operator="in" />
        </filter>
      </defs>
      <rect width="400" height="400" fill="url(#sky-cl)" />
      {/* Clouds */}
      <ellipse cx="80" cy="90" rx="70" ry="28" fill="#2a3838" opacity="0.8" />
      <ellipse cx="200" cy="70" rx="90" ry="35" fill="#263232" opacity="0.9" />
      <ellipse cx="340" cy="95" rx="75" ry="30" fill="#2a3838" opacity="0.75" />
      <ellipse cx="150" cy="115" rx="60" ry="22" fill="#202c2c" opacity="0.7" />
      <ellipse cx="310" cy="130" rx="65" ry="24" fill="#1e2e2e" opacity="0.65" />
      {/* Far mountains */}
      <polygon
        points="0,300 50,215 85,240 125,178 162,202 198,162 230,182 265,160 305,178 348,162 390,174 400,172 400,310 0,310"
        fill="#253838"
      />
      {/* Mid mountains */}
      <polygon
        points="0,340 35,278 68,296 105,258 140,276 172,250 205,268 242,252 278,268 315,252 358,265 400,258 400,370 0,370"
        fill="#1c2c2c"
      />
      {/* Near mountains */}
      <polygon
        points="0,368 22,335 52,348 82,312 112,330 148,308 178,324 208,310 238,326 270,310 300,326 330,310 360,322 390,312 400,316 400,400 0,400"
        fill="#141e1e"
      />
      {/* Water */}
      <rect x="110" y="372" width="180" height="28" fill="#202e2e" opacity="0.65" rx="2" />
      {/* Trees */}
      <polygon points="52,370 61,342 70,370" fill="#0a1212" />
      <polygon points="46,376 61,344 76,376" fill="#0a1212" />
      <polygon points="68,374 79,344 90,374" fill="#0a1212" />
      <polygon points="88,372 97,346 106,372" fill="#0a1212" />
      <polygon points="300,373 310,344 320,373" fill="#0a1212" />
      <polygon points="294,378 308,346 322,378" fill="#0a1212" />
      <polygon points="318,375 329,345 340,375" fill="#0a1212" />
      <polygon points="338,373 347,347 356,373" fill="#0a1212" />
      <polygon points="155,376 163,352 171,376" fill="#0a1212" />
      <polygon points="228,376 237,353 246,376" fill="#0a1212" />
      {/* Grain overlay */}
      <rect width="400" height="400" fill="url(#sky-cl)" opacity="0.12" filter="url(#grain-cl)" />
    </svg>
  )
}

export function RainyLandscape() {
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="sky-r" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c1520" />
          <stop offset="100%" stopColor="#182530" />
        </linearGradient>
        <filter id="grain-r" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grey" />
          <feBlend in="SourceGraphic" in2="grey" mode="overlay" result="blended" />
          <feComposite in="blended" in2="SourceGraphic" operator="in" />
        </filter>
      </defs>
      <rect width="400" height="400" fill="url(#sky-r)" />
      {/* Heavy clouds */}
      <ellipse cx="80" cy="80" rx="80" ry="35" fill="#1c2c38" opacity="0.9" />
      <ellipse cx="220" cy="60" rx="100" ry="40" fill="#182535" opacity="0.95" />
      <ellipse cx="360" cy="85" rx="80" ry="32" fill="#1c2c38" opacity="0.88" />
      <ellipse cx="150" cy="110" rx="70" ry="25" fill="#16202e" opacity="0.8" />
      <ellipse cx="320" cy="118" rx="70" ry="28" fill="#16202e" opacity="0.75" />
      {/* Rain streaks */}
      {Array.from({ length: 28 }).map((_, i) => (
        <line
          key={i}
          x1={18 + i * 14}
          y1={60 + (i % 5) * 20}
          x2={12 + i * 14}
          y2={110 + (i % 5) * 20}
          stroke="#4a6a7a"
          strokeWidth="0.8"
          opacity={0.25 + (i % 3) * 0.1}
        />
      ))}
      {Array.from({ length: 28 }).map((_, i) => (
        <line
          key={`r2-${i}`}
          x1={22 + i * 14}
          y1={160 + (i % 4) * 25}
          x2={16 + i * 14}
          y2={210 + (i % 4) * 25}
          stroke="#4a6a7a"
          strokeWidth="0.8"
          opacity={0.2 + (i % 3) * 0.08}
        />
      ))}
      {/* Far mountains */}
      <polygon
        points="0,300 50,215 85,240 125,178 162,202 198,162 230,182 265,160 305,178 348,162 390,174 400,172 400,310 0,310"
        fill="#1e3040"
      />
      {/* Mid mountains */}
      <polygon
        points="0,340 35,278 68,296 105,258 140,276 172,250 205,268 242,252 278,268 315,252 358,265 400,258 400,370 0,370"
        fill="#162430"
      />
      {/* Near mountains */}
      <polygon
        points="0,368 22,335 52,348 82,312 112,330 148,308 178,324 208,310 238,326 270,310 300,326 330,310 360,322 390,312 400,316 400,400 0,400"
        fill="#0e1820"
      />
      {/* Water (rippled) */}
      <rect x="110" y="372" width="180" height="28" fill="#1a3040" opacity="0.7" rx="2" />
      <line x1="120" y1="378" x2="280" y2="378" stroke="#2a4a5a" strokeWidth="1" opacity="0.5" />
      <line x1="125" y1="383" x2="275" y2="383" stroke="#2a4a5a" strokeWidth="1" opacity="0.4" />
      {/* Trees */}
      <polygon points="52,370 61,342 70,370" fill="#080e14" />
      <polygon points="46,376 61,344 76,376" fill="#080e14" />
      <polygon points="68,374 79,344 90,374" fill="#080e14" />
      <polygon points="88,372 97,346 106,372" fill="#080e14" />
      <polygon points="300,373 310,344 320,373" fill="#080e14" />
      <polygon points="294,378 308,346 322,378" fill="#080e14" />
      <polygon points="318,375 329,345 340,375" fill="#080e14" />
      <polygon points="338,373 347,347 356,373" fill="#080e14" />
      <polygon points="155,376 163,352 171,376" fill="#080e14" />
      <polygon points="228,376 237,353 246,376" fill="#080e14" />
      {/* Grain overlay */}
      <rect width="400" height="400" fill="url(#sky-r)" opacity="0.12" filter="url(#grain-r)" />
    </svg>
  )
}

export function SnowyLandscape() {
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="sky-s" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2030" />
          <stop offset="100%" stopColor="#2a3545" />
        </linearGradient>
        <filter id="grain-s" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grey" />
          <feBlend in="SourceGraphic" in2="grey" mode="overlay" result="blended" />
          <feComposite in="blended" in2="SourceGraphic" operator="in" />
        </filter>
      </defs>
      <rect width="400" height="400" fill="url(#sky-s)" />
      {/* Muted clouds */}
      <ellipse cx="100" cy="85" rx="80" ry="32" fill="#2e3c4c" opacity="0.7" />
      <ellipse cx="260" cy="65" rx="95" ry="38" fill="#2a3848" opacity="0.75" />
      <ellipse cx="370" cy="100" rx="65" ry="28" fill="#2e3c4c" opacity="0.65" />
      {/* Snow flakes */}
      {Array.from({ length: 35 }).map((_, i) => (
        <circle
          key={i}
          cx={10 + (i * 113) % 390}
          cy={20 + (i * 79) % 340}
          r={0.8 + (i % 3) * 0.5}
          fill="white"
          opacity={0.3 + (i % 4) * 0.12}
        />
      ))}
      {/* Far mountains with snow caps */}
      <polygon
        points="0,300 50,215 85,240 125,178 162,202 198,162 230,182 265,160 305,178 348,162 390,174 400,172 400,310 0,310"
        fill="#2e4455"
      />
      {/* Snow on far mountain peaks */}
      <polygon points="120,178 130,195 138,178 148,190 160,178 170,194 178,180 162,202 125,178" fill="#c8d0d8" opacity="0.7" />
      <polygon points="193,162 202,175 210,162 218,172 228,162 238,175 248,164 230,182 198,162" fill="#c8d0d8" opacity="0.7" />
      <polygon points="260,160 270,174 278,160 288,172 298,160 310,172 318,162 305,178 265,160" fill="#c8d0d8" opacity="0.65" />
      {/* Mid mountains */}
      <polygon
        points="0,340 35,278 68,296 105,258 140,276 172,250 205,268 242,252 278,268 315,252 358,265 400,258 400,370 0,370"
        fill="#22343f"
      />
      {/* Snow on mid peaks */}
      <polygon points="100,258 110,270 118,258 126,268 138,258 148,270 158,260 140,276 105,258" fill="#b8c0c8" opacity="0.6" />
      <polygon points="167,250 176,262 184,250 192,260 202,250 212,263 220,252 205,268 172,250" fill="#b8c0c8" opacity="0.6" />
      {/* Near mountains */}
      <polygon
        points="0,368 22,335 52,348 82,312 112,330 148,308 178,324 208,310 238,326 270,310 300,326 330,310 360,322 390,312 400,316 400,400 0,400"
        fill="#182430"
      />
      {/* Snow ground at base */}
      <rect x="0" y="388" width="400" height="12" fill="#c0c8d0" opacity="0.3" />
      {/* Water */}
      <rect x="110" y="372" width="180" height="16" fill="#22384a" opacity="0.6" rx="2" />
      {/* Trees with snow */}
      <polygon points="52,370 61,342 70,370" fill="#101820" />
      <polygon points="46,376 61,344 76,376" fill="#101820" />
      <line x1="54" y1="354" x2="46" y2="350" stroke="#c8d0d8" strokeWidth="1.5" opacity="0.6" />
      <line x1="62" y1="347" x2="54" y2="344" stroke="#c8d0d8" strokeWidth="1.5" opacity="0.6" />
      <polygon points="68,374 79,344 90,374" fill="#101820" />
      <polygon points="88,372 97,346 106,372" fill="#101820" />
      <polygon points="300,373 310,344 320,373" fill="#101820" />
      <polygon points="294,378 308,346 322,378" fill="#101820" />
      <line x1="302" y1="354" x2="294" y2="350" stroke="#c8d0d8" strokeWidth="1.5" opacity="0.6" />
      <polygon points="318,375 329,345 340,375" fill="#101820" />
      <polygon points="338,373 347,347 356,373" fill="#101820" />
      <polygon points="155,376 163,352 171,376" fill="#101820" />
      <polygon points="228,376 237,353 246,376" fill="#101820" />
      {/* Grain overlay */}
      <rect width="400" height="400" fill="url(#sky-s)" opacity="0.12" filter="url(#grain-s)" />
    </svg>
  )
}
