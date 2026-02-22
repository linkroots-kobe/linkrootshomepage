import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 'md' }) => {
  const textSizeClasses = {
    sm: "text-xl",
    md: "text-3xl",
    lg: "text-5xl",
    xl: "text-7xl"
  };

  const imgSizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-12",
    xl: "h-16"
  };

  return (
    <div className={`flex items-center select-none group ${className}`}>
      
      {/* 🌟 修正箇所：白い背景を活かし、角を丸くしてアイコン風にしました */}
      <img 
        src="/linkrootshomepage/logo.jpg" 
        alt="LinkRoots Logo" 
        className={`object-contain mr-3 ${imgSizeClasses[size]} bg-white rounded-md p-1 shadow-sm`}
      />
      
      <div className={`flex items-baseline leading-none ${textSizeClasses[size]}`}>
        <span className="font-serif font-medium text-[#722F37] mr-2 text-[0.45em] self-center tracking-widest opacity-90 group-hover:opacity-100 transition-opacity">
          合同会社
        </span>
        <span className="font-display font-semibold text-[#722F37] tracking-wider -mt-1 group-hover:tracking-widest transition-all duration-500">
          LinkRoots
        </span>
      </div>
      
    </div>
  );
};
