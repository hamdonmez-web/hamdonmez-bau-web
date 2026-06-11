import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'neutral';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const SunIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className} 
  >
    {/* Center solid dot */}
    <circle cx="12" cy="12" r="2.2" fill="currentColor" />
    {/* 8 Rays of the Corporate Logo */}
    {/* Top / Bottom */}
    <line x1="12" y1="6.2" x2="12" y2="2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="12" y1="17.8" x2="12" y2="22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    {/* Left / Right */}
    <line x1="6.2" y1="12" x2="2" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="17.8" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    {/* Diagonals */}
    <line x1="7.9" y1="7.9" x2="4.9" y2="4.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="16.1" y1="7.9" x2="19.1" y2="4.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="7.9" y1="16.1" x2="4.9" y2="19.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="16.1" y1="16.1" x2="19.1" y2="19.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export default function Logo({ 
  className = '', 
  variant = 'neutral', 
  showText = true,
  size = 'md' 
}: LogoProps) {
  
  // Decide colors based on variant
  const mountainColorClass = 
    variant === 'light' 
      ? 'text-[#1a2332]' 
      : variant === 'dark' 
        ? 'text-white' 
        : 'text-current';

  const textColorClass = 
    variant === 'light' 
      ? 'text-[#1a2332]' 
      : variant === 'dark' 
        ? 'text-white' 
        : 'text-current';

  const subtextColorClass = 
    variant === 'light' 
      ? 'text-slate-500' 
      : variant === 'dark' 
        ? 'text-slate-450' 
        : 'text-current opacity-80';

  // In the brand logo, the sun has the exact same color as the text
  const sunColor = 
    variant === 'light' 
      ? 'text-[#1a2332]' 
      : variant === 'dark' 
        ? 'text-white' 
        : 'text-current';

  // Sizing definitions
  const containerHeights = {
    sm: 'h-10',
    md: 'h-14 sm:h-16',
    lg: 'h-20 sm:h-24'
  };

  const svgHeights = {
    sm: 'h-8 w-auto',
    md: 'h-11 sm:h-13 w-auto',
    lg: 'h-16 sm:h-20 w-auto'
  };

  const mainTextSizes = {
    sm: 'text-sm sm:text-base tracking-[0.25em] font-medium',
    md: 'text-xl sm:text-2xl tracking-[0.28em] font-medium',
    lg: 'text-3xl sm:text-4xl tracking-[0.3em] font-medium'
  };

  const subTextSizes = {
    sm: 'text-[7px] sm:text-[8px] tracking-[0.38em]',
    md: 'text-[9px] sm:text-[10px] tracking-[0.4em]',
    lg: 'text-xs tracking-[0.45em]'
  };

  return (
    <div className={`flex items-center space-x-3 sm:space-x-4.5 ${containerHeights[size]} ${className}`}>
      
      {/* Mountain Graphics SVG - Matching Original Logo exactly */}
      <svg 
        viewBox="0 0 260 140" 
        className={`${svgHeights[size]} ${mountainColorClass} transition-colors duration-300 shrink-0`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Large Mountain Outline */}
        <path 
          d="M 15 115 L 105 25 L 155 75" 
          stroke="currentColor" 
          strokeWidth="5.5" 
          strokeLinecap="round" 
          strokeLinejoin="miter"
          strokeMiterlimit="5"
        />
        {/* Small Mountain Outline */}
        <path 
          d="M 115 115 L 170 60 L 225 115" 
          stroke="currentColor" 
          strokeWidth="5.5" 
          strokeLinecap="round" 
          strokeLinejoin="miter"
          strokeMiterlimit="5"
        />
        {/* Baseline Horizon Line */}
        <path 
          d="M 10 115 H 250" 
          stroke="currentColor" 
          strokeWidth="5.5" 
          strokeLinecap="round"
        />
      </svg>

      {/* Corporate Typography & Slogan */}
      {showText && (
        <div className="flex flex-col justify-center select-none font-serif leading-none shrink-0 pt-1">
          
          {/* Main Title "Z E N I T  B A U" */}
          <div className={`${mainTextSizes[size]} ${textColorClass} uppercase flex items-center`}>
            <span>Z&nbsp;E&nbsp;N&nbsp;</span>
            <span className="relative inline-block mx-[0.02em]">
              {/* EM-based scaling so the sun icon always floats elegantly 0.6em above the 'I' regardless of viewport */}
              <span className={`absolute -top-[0.62em] left-1/2 -translate-x-[45%] w-[0.45em] h-[0.45em] flex items-center justify-center ${sunColor}`}>
                <SunIcon className="w-full h-full" />
              </span>
              I
            </span>
            <span>&nbsp;T&nbsp;&nbsp;&nbsp;B&nbsp;A&nbsp;U</span>
          </div>

          {/* Slogan "Bis zum Zenit" */}
          <div className={`${subTextSizes[size]} ${subtextColorClass} font-sans uppercase font-normal text-slate-500/90 mt-1 sm:mt-1.5`}>
            Bis zum Zenit
          </div>
        </div>
      )}

    </div>
  );
}
