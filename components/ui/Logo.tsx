import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 'md' }) => {
  // Text-based sizing
  const textSizeClasses = {
    sm: "text-xl",
    md: "text-3xl",
    lg: "text-5xl",
    xl: "text-7xl"
  };

  return (
    <div className={`flex items-baseline leading-none select-none group ${textSizeClasses[size]} ${className}`}>
      {/* Japanese part: Noto Serif JP for a formal, established look */}
      <span className="font-serif font-medium text-[#722F37] mr-2 text-[0.45em] self-center tracking-widest opacity-90 group-hover:opacity-100 transition-opacity">
        合同会社
      </span>
      {/* English part: Cormorant Garamond for that world-class designer feel */}
      <span className="font-display font-semibold text-[#722F37] tracking-wider -mt-1 group-hover:tracking-widest transition-all duration-500">
        LinkRoots
      </span>
    </div>
  );
};
