import React, { useState, useEffect } from 'react';
import { Utensils, MapPin, Sparkles } from 'lucide-react';

interface HeaderProps {
  onQuoteClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onQuoteClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E8E1D7]'
          : 'bg-[#FAF8F5]/80 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#"
          className="flex items-center gap-3 group text-left"
          title="Sabores Mediterrânicos — Comida para Festas e Eventos em Lisboa"
        >
          <div className="w-10 h-10 rounded-xl bg-[#22201D] text-[#FAF8F5] flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
            <Utensils className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <span className="block font-serif-heading font-semibold text-lg sm:text-xl text-[#22201D] tracking-tight leading-tight">
              Sabores Mediterrânicos
            </span>
            <span className="flex items-center gap-1 text-xs font-medium text-[#736B63]">
              <MapPin className="w-3 h-3 text-[#B84D19]" /> Lisboa • Catering de 10 a 50 pessoas
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Navegação Principal" className="hidden md:flex items-center gap-7 text-sm font-medium text-[#59524A]">
          <button
            onClick={() => scrollToSection('ocasioes')}
            className="hover:text-[#22201D] transition-colors cursor-pointer py-1"
          >
            Ocasiões
          </button>
          <button
            onClick={() => scrollToSection('especialidades')}
            className="hover:text-[#22201D] transition-colors cursor-pointer py-1 flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B84D19]" />
            Especialidades
          </button>
          <button
            onClick={() => scrollToSection('outras-opcoes')}
            className="hover:text-[#22201D] transition-colors cursor-pointer py-1"
          >
            Outras Opções
          </button>
          <button
            onClick={() => scrollToSection('como-funciona')}
            className="hover:text-[#22201D] transition-colors cursor-pointer py-1"
          >
            Como Funciona
          </button>
          <button
            onClick={() => scrollToSection('entrega')}
            className="hover:text-[#22201D] transition-colors cursor-pointer py-1"
          >
            Entrega
          </button>
        </nav>

        {/* Header Action Button */}
        <div className="flex items-center gap-3">
          <button
            id="header-quote-btn"
            onClick={onQuoteClick}
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide uppercase bg-[#B84D19] text-white hover:bg-[#A34213] active:scale-98 transition-all shadow-xs cursor-pointer"
          >
            Pedir Orçamento
          </button>
        </div>
      </div>
    </header>
  );
};
