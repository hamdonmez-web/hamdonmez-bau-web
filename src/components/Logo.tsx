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
    stroke="currentColor" 
    className={className} 
    strokeWidth="2.5" 
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="3.5" />
    <line x1="12" y1="4" x2="12" y2="2" />
    <line x1="12" y1="20" x2="12" y2="22" />
    <line x1="4" y1="12" x2="2" y2="12" />
    <line x1="20" y1="12" x2="22" y2="12" />
    <line x1="6.34" y1="6.34" x2="4.93" y2="4.93" />
    <line x1="19.07" y1="19.07" x2="17.66" y2="17.66" />
    <line x1="6.34" y1="17.66" x2="4.93" y2="19.07" />
    <line x1="19.07" y1="6.34" x2="17.66" y2="4.93" />
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
      ? 'text-[#1e293b]' 
      : variant === 'dark' 
        ? 'text-white' 
        : 'text-current';

  const textColorClass = 
    variant === 'light' 
      ? 'text-[#1c1d1f]' 
      : variant === 'dark' 
        ? 'text-white' 
        : 'text-current';

  const subtextColorClass = 
    variant === 'light' 
      ? 'text-gray-450' 
      : variant === 'dark' 
        ? 'text-slate-400' 
        : 'text-current opacity-80';

  const sunColorClass = 
    variant === 'light' 
      ? 'text-[#1e293b]' 
      : variant === 'dark' 
        ? 'text-sky-400' 
        : 'text-sky-450';

  // Sizing definitions
  const containerHeights = {
    sm: 'h-10',
    md: 'h-14 sm:h-16',
    lg: 'h-20 sm:h-24'
  };

  const svgHeights = {
    sm: 'h-8 w-auto',
    md: 'h-12 sm:h-14 w-auto',
    lg: 'h-16 sm:h-20 w-auto'
  };

  const mainTextSizes = {
    sm: 'text-sm sm:text-base tracking-[0.16em]',
    md: 'text-base sm:text-lg lg:text-xl tracking-[0.2em] font-medium',
    lg: 'text-2xl sm:text-3xl tracking-[0.25em] font-semibold'
  };

  const subTextSizes = {
    sm: 'text-[7px] sm:text-[8px] tracking-[0.3em]',
    md: 'text-[9px] sm:text-[10px] tracking-[0.38em]',
    lg: 'text-xs tracking-[0.45em]'
  };

  const sunOffsetClasses = {
    sm: '-top-2 w-2.5 h-2.5',
    md: '-top-[10px] w-3 h-3',
    lg: '-top-[14px] w-4 h-4'
  };

  return (
    <div className={`flex items-center space-x-3 sm:space-x-4 ${containerHeights[size]} ${className}`}>
      
      {/* Mountain Graphics SVG */}
      <svg 
        viewBox="0 0 260 140" 
        className={`${svgHeights[size]} ${mountainColorClass} transition-colors duration-300 shrink-0`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Large Mountain Outline */}
        <path 
          d="M 20 115 L 100 35 L 180 115" 
          stroke="currentColor" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* Small Mountain Outline */}
        <path 
          d="M 105 115 L 155 75 L 205 115" 
          stroke="currentColor" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* Baseline Horizon Line */}
        <path 
          d="M 20 115 H 250" 
          stroke="currentColor" 
          strokeWidth="6" 
          strokeLinecap="round"
        />
      </svg>

      {/* Corporate Typography & Slogan */}
      {showText && (
        <div className="flex flex-col justify-center select-none font-serif leading-none mt-1 shrink-0">
          
          {/* Main Title "Z E N I T  B A U" */}
          <div className={`${mainTextSizes[size]} ${textColorClass} uppercase font-serif flex items-center`}>
            <span>Z&nbsp;E&nbsp;N&nbsp;</span>
            <span className="relative inline-block mx-[0.02em]">
              <span className={`absolute ${sunOffsetClasses[size]} left-1/2 -translate-x-[45%] flex items-center justify-center ${sunColorClass}`}>
                <SunIcon className="w-full h-full" />
              </span>
              I
            </span>
            <span>&nbsp;T&nbsp;&nbsp;&nbsp;B&nbsp;A&nbsp;U</span>
          </div>

          {/* Slogan "B I S  Z U M  Z E N I T" */}
          <div className={`${subTextSizes[size]} ${subtextColorClass} font-sans uppercase font-normal tracking-[0.38em] text-slate-500 mt-1 sm:mt-1.5`}>
            Bis zum Zenit
          </div>
        </div>
      )}

    </div>
  );
}
