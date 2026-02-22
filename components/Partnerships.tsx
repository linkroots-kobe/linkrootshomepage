import React from 'react';
import { SectionId } from '../types';

export const Partnerships: React.FC = () => {
  return (
    <section id={SectionId.PARTNERSHIPS} className="py-20 md:py-32 bg-[#f9f9f9]">
      <div className="container mx-auto px-[25px] md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
           <span className="block text-[#801616] font-serif font-bold tracking-[0.2em] text-sm uppercase mb-3">Partnerships</span>
           <h2 className="font-serif font-black text-3xl md:text-5xl text-[#333333] leading-tight mb-6">
             Partnerships<br/>
             <span className="text-xl md:text-3xl text-[#801616] font-bold mt-4 block">企業・自治体の皆様へ</span>
           </h2>
           <div className="w-20 h-1 bg-[#801616] mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header with vertical accent line */}
          <div className="flex items-start mb-8 md:mb-12">
            <div className="w-[4px] md:w-[6px] self-stretch bg-[#801616] mr-6 md:mr-8 shrink-0 rounded-full"></div>
            <h2 className="font-sans font-bold text-2xl md:text-4xl text-[#801616] leading-tight tracking-wide">
              世界を魅了する、<br className="md:hidden" />
              次世代の観光体験を共創する。
            </h2>
          </div>

          {/* Body Text */}
          <div className="pl-[calc(4px+1.5rem)] md:pl-[calc(6px+2rem)]">
            <p className="font-serif text-[#333333] text-[0.95rem] md:text-lg leading-[2.2] md:leading-loose tracking-wider text-justify">
              私たちは、世界最大級のプラットフォームで『Best Seller』を獲得した「最高評価のガイドノウハウ」を保持しています。<br className="hidden md:block" />
              貴社の持つ施設やブランドに、若者の瑞々しい感性と英語の実践力を掛け合わせることで、<br className="hidden md:block" />
              既存の観光では届かなかった深い感動と、グローバルスタンダードな体験価値を創出します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
