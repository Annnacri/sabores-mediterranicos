import React from 'react';
import { Users, Sparkles, ArrowUpRight } from 'lucide-react';
import { OCCASIONS } from '../data/content';

interface OccasionsProps {
  onSelectOccasion: (occasionTitle: string) => void;
}

export const Occasions: React.FC<OccasionsProps> = ({ onSelectOccasion }) => {
  return (
    <section id="ocasioes" className="py-14 sm:py-20 bg-[#F4EFEA]/60 border-y border-[#EBE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE2D7] text-[#6E6356] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B84D19]" />
            <span>Para Que Ocasiões?</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#22201D] tracking-tight mb-3">
            Boa Comida para Bons Momentos
          </h2>
          <p className="font-sans-body text-sm sm:text-base text-[#6E655C]">
            Pratos reconfortantes e opções práticas pensadas para descomplicar a sua festa e encantar os convidados.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10">
          {OCCASIONS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectOccasion(item.title)}
              className="group relative bg-[#FAF8F5] border border-[#E6DDD1] hover:border-[#D0C2B0] rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F0E8DC] group-hover:bg-[#EBDDCB] flex items-center justify-center text-2xl mb-4 transition-transform group-hover:scale-105">
                  <span role="img" aria-label={item.title}>
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#22201D] mb-2 group-hover:text-[#B84D19] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6A6258] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#EDE5DB] flex items-center justify-between text-xs font-semibold text-[#8C8174] group-hover:text-[#B84D19] transition-colors">
                <span>Planear este evento</span>
                <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Stated scope constraint badge */}
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#DDD4C7] shadow-xs text-xs sm:text-sm font-medium text-[#4B443B]">
            <Users className="w-4 h-4 text-[#456654] shrink-0" />
            <span>
              Serviço de catering para celebrações de <strong>10 a cerca de 50 pessoas</strong> (mínimo de entrega: 10 pessoas).
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
