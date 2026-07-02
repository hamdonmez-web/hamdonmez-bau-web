import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'neutral';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ 
  className = '', 
  variant = 'neutral', 
  showText = true,
  size = 'md' 
}: LogoProps) {
  
  // Heights and scaling as requested (60-70px for md)
  const heightClasses = {
    sm: 'h-10',
    md: 'h-[60px] md:h-[70px]',
    lg: 'h-14 md:h-[90px]'
  };

  // Determine text color and mask background color based on variant
  // 'dark' = dark text for light background (#F5F3EF) -> mask is #F5F3EF
  // 'light' = light text for dark background -> header/footer background is bg-zinc-950 / #09090b -> mask is #09090b
  const textColor = variant === 'light' ? '#F5F3EF' : '#111111';
  const maskColor = variant === 'light' ? '#09090b' : '#F5F3EF';

  return (
    <div className={`flex items-center shrink-0 pl-5 ${heightClasses[size]} ${className}`}>
      <svg 
        viewBox="0 0 960 260" 
        className="w-auto h-full block" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 1. Draw the Crimson Triangle outline first with precise #cc0000 hex */}
        <path 
          d="M 400 230 L 590 30 L 780 230 Z" 
          stroke="#cc0000" 
          strokeWidth="12" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none" 
        />

        {/* 2. Mask the left diagonal leg in the text overlap region using context-appropriate background color */}
        {showText && (
          <rect 
            x="30" 
            y="45" 
            width="565" 
            height="145" 
            fill={maskColor} 
          />
        )}

        {/* 3. Draw the brand and slogan text on top */}
        {showText ? (
          <>
            {/* Brand Text */}
            <text 
              x="30" 
              y="140" 
              fill={textColor} 
              fontFamily="system-ui, -apple-system, sans-serif" 
              fontSize="110" 
              fontWeight="900" 
              letterSpacing="-1px"
            >
              ZENIT BAU
            </text>
            
            {/* Slogan Text: Fenster & Türen */}
            <text 
              x="32" 
              y="190" 
              fill={textColor} 
              opacity="0.85"
              fontFamily="system-ui, -apple-system, sans-serif" 
              fontSize="24" 
              fontWeight="600" 
              letterSpacing="11px"
            >
              FENSTER &amp; TÜREN
            </text>
          </>
        ) : null}
      </svg>
    </div>
  );
}

