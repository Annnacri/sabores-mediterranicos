import React from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

interface FinalCTAProps {
  onQuoteClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onQuoteClick }) => {
  return (
    <section id="cta-final" className="py-16 sm:py-24 bg-[#22201D] text-[#FAF8F5] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#B84D19]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Fácil • Rápido • Confiável</span>
        </div>

        <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#FAF8F5]">
          Tem uma Festa para Organizar?
        </h2>

        <p className="font-sans-body text-base sm:text-xl text-[#C7BFB5] max-w-xl mx-auto mb-8 leading-relaxed">
          Diga-nos quantas pessoas são, onde será o evento e o que gostaria de servir.
        </p>

        <div className="mb-10">
          <button
            id="final-cta-quote-btn"
            onClick={onQuoteClick}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base sm:text-lg tracking-wide uppercase bg-[#B84D19] text-white hover:bg-[#A34213] active:scale-98 transition-all shadow-lg hover:shadow-xl cursor-pointer"
          >
            <span>Pedir Orçamento</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="inline-flex items-center gap-2 text-sm sm:text-base font-serif-heading text-amber-200/90 italic">
          <Heart className="w-4 h-4 text-[#B84D19] fill-[#B84D19]" />
          <span>Boa comida junta as pessoas.</span>
        </div>
      </div>
    </section>
  );
};
