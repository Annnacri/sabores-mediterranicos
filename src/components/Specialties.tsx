import React from 'react';
import { ArrowRight, Check, Sparkles, Heart } from 'lucide-react';
import { SPECIALTIES } from '../data/content';

interface SpecialtiesProps {
  onSelectSpecialty: (dishName: string) => void;
  onQuoteClick: () => void;
}

export const Specialties: React.FC<SpecialtiesProps> = ({
  onSelectSpecialty,
  onQuoteClick,
}) => {
  return (
    <section id="especialidades" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2EAE0] text-[#B84D19] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Os Pratos Mais Pedidos</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#22201D] tracking-tight mb-4">
            As Nossas Especialidades Mais Pedidas
          </h2>
          <p className="font-sans-body text-base sm:text-lg text-[#665E54] leading-relaxed">
            Estas receitas são as preferidas e mais solicitadas pelos nossos clientes. Dispomos de diversas opções de pratos — para cada evento, enviamos sugestões de menu ajustadas ao número de pessoas e capacidade.
          </p>
        </div>

        {/* 2 Big Specialty Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {SPECIALTIES.map((dish) => (
            <article
              key={dish.id}
              className="bg-white border border-[#E3DACF] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFE8DF]">
                  <img
                    src={dish.imageSrc}
                    alt={dish.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-[#22201D]/90 backdrop-blur-md text-amber-300 text-xs font-bold tracking-wide uppercase shadow-sm">
                      {dish.tag}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#B84D19] shadow-xs">
                      <Heart className="w-4 h-4 fill-[#B84D19]/20" />
                    </span>
                  </div>
                </div>

                {/* Content info */}
                <div className="p-6 sm:p-8">
                  <h3 className="font-serif-heading text-2xl sm:text-2xl/[1.2] font-bold text-[#22201D] mb-3">
                    {dish.title}
                  </h3>

                  {/* Highlight statement */}
                  <p className="text-[#B84D19] font-medium text-sm sm:text-base mb-2">
                    {dish.highlightText}
                  </p>

                  <p className="text-sm sm:text-base text-[#61584F] leading-relaxed mb-6">
                    {dish.description}
                  </p>

                  {/* Visual accompaniments badge for Lombo */}
                  {dish.pairings && (
                    <div className="mb-6 p-4 rounded-2xl bg-[#F8F5F0] border border-[#E8DFC0]">
                      <span className="block text-xs font-bold uppercase tracking-wider text-[#8A5B20] mb-2.5">
                        Acompanhamentos incluídos na mesa:
                      </span>
                      <div className="flex flex-wrap items-center gap-2">
                        {dish.pairings.map((item, idx) => (
                          <React.Fragment key={item}>
                            <span className="px-2.5 py-1.5 rounded-lg bg-white border border-[#DDD0B6] font-bold text-xs sm:text-xs text-[#2A241E] shadow-2xs">
                              {item}
                            </span>
                            {idx < dish.pairings!.length - 1 && (
                              <span className="text-[#B59E75] font-bold text-sm">+</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Ideal for list */}
                  <div className="pt-2 mb-6">
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#7E7468] mb-3">
                      Excelente opção para:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {dish.idealFor.map((useCase) => (
                        <div
                          key={useCase}
                          className="flex items-center gap-2 text-xs sm:text-sm text-[#4E473F]"
                        >
                          <span className="w-4 h-4 rounded-full bg-[#EBF1ED] text-[#456654] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </span>
                          <span>{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                <button
                  onClick={() => onSelectSpecialty(dish.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base tracking-wide uppercase text-white bg-[#B84D19] hover:bg-[#9F3F12] active:scale-99 transition-all shadow-sm cursor-pointer"
                >
                  <span>{dish.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Below the two specialties: More options card */}
        <div className="bg-[#FAF8F5] border border-[#E0D7CC] rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center max-w-3xl mx-auto shadow-xs">
          <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#22201D] mb-2">
            As especialidades são as mais pedidas, mas temos diversas opções de pratos
          </h3>
          <p className="text-sm sm:text-base text-[#685F55] leading-relaxed max-w-xl mx-auto mb-6">
            Não tem de ficar limitado a estes pratos. Adaptamos a nossa seleção e enviamos sugestões de menu personalizadas de acordo com o número de convidados, data e capacidade.
          </p>
          <button
            onClick={onQuoteClick}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base tracking-wide uppercase bg-[#22201D] text-[#FAF8F5] hover:bg-[#38332E] active:scale-98 transition-all cursor-pointer shadow-xs"
          >
            <span>Pedir Sugestão de Menu / Orçamento</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
