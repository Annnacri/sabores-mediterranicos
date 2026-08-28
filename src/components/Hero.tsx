import React from 'react';
import { ArrowRight, ChevronDown, MapPin, Users, Utensils, CheckCircle2 } from 'lucide-react';
import { ASSET_IMAGES } from '../data/content';

interface HeroProps {
  onQuoteClick: () => void;
  onSpecialtiesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick, onSpecialtiesClick }) => {
  return (
    <section id="hero" className="relative pt-6 pb-14 sm:pt-10 sm:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left copy column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Info badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECE2] border border-[#E4D8C8] text-[#5C5349] text-xs sm:text-sm font-medium mb-6">
              <span className="flex items-center gap-1 text-[#B84D19] font-semibold">
                <MapPin className="w-3.5 h-3.5" /> Serviço de Catering em Lisboa
              </span>
              <span className="text-[#A4998C]">|</span>
              <span className="flex items-center gap-1 text-[#456654] font-semibold">
                <Users className="w-3.5 h-3.5" /> Mínimo 10 até ~50 pessoas
              </span>
            </div>

            {/* H1 Main title */}
            <h1 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl/[1.15] font-bold text-[#22201D] tracking-tight mb-5">
              Catering para Festas, Aniversários e Pequenos Eventos
            </h1>

            {/* Subtitle */}
            <p className="font-sans-body text-base sm:text-lg md:text-xl text-[#635B52] leading-relaxed max-w-2xl mb-8">
              Serviço de catering fresco, generoso e preparado com rigor em Lisboa. Entregamos a partir de 10 pessoas para aniversários, grupos e celebrações privadas.
            </p>

            {/* Action buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6">
              <button
                id="hero-quote-btn"
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm sm:text-base font-bold tracking-wide uppercase bg-[#B84D19] text-white hover:bg-[#9F3F12] active:scale-98 transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Pedir Orçamento</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-specialties-btn"
                onClick={onSpecialtiesClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm sm:text-base font-semibold text-[#22201D] bg-white border border-[#DED7CE] hover:bg-[#F6F2EB] hover:border-[#CFBFA9] active:scale-98 transition-all cursor-pointer shadow-xs"
              >
                <span>Ver Especialidades Mais Pedidas</span>
                <ChevronDown className="w-4 h-4 text-[#B84D19]" />
              </button>
            </div>

            {/* Short reassurance phrase */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-[#4E463E]">
              <p className="font-semibold text-[#22201D] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#456654]" />
                Diga-nos o que está a planear. Nós tratamos do catering.
              </p>
              <span className="hidden sm:inline text-[#C0B7AB]">•</span>
              <p className="text-xs sm:text-sm text-[#736B63]">
                Mínimo 10 pessoas • Especialidades mais pedidas e diversas opções sob medida.
              </p>
            </div>
          </div>

          {/* Right visual hero image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={ASSET_IMAGES.hero}
                  alt="Mesa farta com comida caseira deliciosa para festa e aniversário em Lisboa"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-md rounded-lg px-3 py-1.5 shadow-sm text-xs font-semibold text-[#22201D] flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-[#B84D19]" />
                    <span>Preparado no dia • Mesa completa</span>
                  </div>
                  <div className="bg-[#22201D]/90 backdrop-blur-md text-amber-300 rounded-lg px-2.5 py-1 text-[11px] font-semibold">
                    Lisboa & Arredores
                  </div>
                </div>
              </div>

              {/* Floating feature pill */}
              <div className="hidden sm:flex absolute -bottom-5 -left-4 bg-[#FAF8F5] border border-[#E2D8CC] rounded-xl p-3 shadow-lg items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-lg bg-[#456654]/10 text-[#456654] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-[#22201D]">Serviço de Catering</p>
                  <p className="text-[#6D655C]">De 10 a 50 convidados com atenção a cada detalhe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
