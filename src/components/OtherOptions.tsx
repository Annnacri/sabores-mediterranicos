import React from 'react';
import { Check, Info, UtensilsCrossed } from 'lucide-react';
import { OTHER_FOOD_CATEGORIES, ASSET_IMAGES } from '../data/content';

interface OtherOptionsProps {
  onSelectOptionCategory: (categoryName: string) => void;
}

export const OtherOptions: React.FC<OtherOptionsProps> = ({ onSelectOptionCategory }) => {
  return (
    <section id="outras-opcoes" className="py-16 sm:py-24 bg-[#F5EFE7]/50 border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8DDD0] text-[#594E42] text-xs font-semibold uppercase tracking-wider mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#B84D19]" />
            <span>Mesa Completa</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#22201D] tracking-tight mb-4">
            E Para Além das Especialidades Mais Pedidas...
          </h2>
          <p className="font-sans-body text-base sm:text-lg text-[#665D52] leading-relaxed">
            As nossas especialidades são as mais pedidas, mas dispomos de diversas opções de prato. Sugerimos o menu mais adequado tendo em conta a dimensão do seu evento e a capacidade.
          </p>
        </div>

        {/* Editorial banner with generated sharing platter */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-[#E0D5C7] bg-white shadow-xs grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-7 p-6 sm:p-10">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#B84D19] mb-2">
              Partilha & Convivência
            </span>
            <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#22201D] mb-3">
              Petiscos Portugueses, Tábuas e Finger Food
            </h3>
            <p className="text-sm sm:text-base text-[#685F55] leading-relaxed mb-6">
              Ideal para recepções descontraídas onde os convidados circulam, conversam e partilham sabores tradicionais portugueses frescos e estaladiços.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-[#4D453C]">
              <span className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#DDD3C5]">Salgados Quentinhos</span>
              <span className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#DDD3C5]">Queijos Nacionais</span>
              <span className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#DDD3C5]">Pão Rústico</span>
              <span className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#DDD3C5]">Doces Caseiros</span>
            </div>
          </div>
          <div className="md:col-span-5 h-56 md:h-full min-h-[220px] relative overflow-hidden bg-[#ECE3D7]">
            <img
              src={ASSET_IMAGES.petiscos}
              alt="Mesa de petiscos para partilhar com tábua de queijos, enchidos e salgadinhos em Lisboa"
              className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-500"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
        </div>

        {/* 4 Cards Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {OTHER_FOOD_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectOptionCategory(cat.title)}
              className="bg-white border border-[#E3D9CD] hover:border-[#CFBEA8] rounded-2xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#9E5724] px-2.5 py-0.5 rounded-md bg-[#FAF2EB]">
                    {cat.badge}
                  </span>
                </div>
                <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#22201D] mb-4 group-hover:text-[#B84D19] transition-colors">
                  {cat.title}
                </h3>
                <ul className="space-y-2.5 text-sm text-[#5D544A]">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-[#F3EFE9] text-[#7A6C5B] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0EAE1] text-xs font-semibold text-[#8C8072] group-hover:text-[#B84D19] transition-colors">
                + Incluir no meu orçamento
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic availability notice */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#70665C] bg-[#EDE4D8]/50 border border-[#DDD1C2] rounded-xl py-3 px-4 max-w-2xl mx-auto text-center">
          <Info className="w-4 h-4 text-[#8C7A68] shrink-0" />
          <span>
            <strong>Dispomos de diversas opções de pratos:</strong> preparamos sugestões de menu personalizadas de acordo com o número de convidados, data e capacidade de produção.
          </span>
        </div>
      </div>
    </section>
  );
};
