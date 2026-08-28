import React from 'react';
import { ArrowRight, Utensils } from 'lucide-react';

interface MobileBottomBarProps {
  onQuoteClick: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onQuoteClick }) => {
  return (
    <aside
      id="mobile-sticky-cta"
      aria-label="Ação rápida para pedir orçamento"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#FAF8F5]/95 backdrop-blur-lg border-t border-[#E0D6C8] shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
    >
      <div className="max-w-md mx-auto flex items-center gap-3">
        <div className="flex-1">
          <p className="text-[11px] font-bold text-[#22201D] leading-tight truncate">
            Sabores Mediterrânicos
          </p>
          <p className="text-[10px] text-[#7A7166] flex items-center gap-1">
            <Utensils className="w-2.5 h-2.5 text-[#B84D19]" /> Catering Lisboa • Mín. 10 pessoas
          </p>
        </div>
        <button
          onClick={onQuoteClick}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl font-bold text-xs tracking-wider uppercase text-white bg-[#B84D19] active:bg-[#9E3F12] shadow-sm active:scale-98 transition-all cursor-pointer"
        >
          <span>Pedir Orçamento</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
