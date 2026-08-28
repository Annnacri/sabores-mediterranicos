import React from 'react';
import { MessageSquareText, ChefHat, Truck, Sparkles, HeartHandshake } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/content';

export const HowItWorks: React.FC = () => {
  const stepIcons = [
    <MessageSquareText key="1" className="w-6 h-6 text-[#B84D19]" />,
    <ChefHat key="2" className="w-6 h-6 text-[#456654]" />,
    <Truck key="3" className="w-6 h-6 text-[#8A5B20]" />,
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-24 relative bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE8DC] text-[#695E50] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B84D19]" />
            <span>Processo Descomplicado</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#22201D] tracking-tight mb-4">
            É Simples
          </h2>
          <p className="font-sans-body text-base sm:text-lg text-[#6B6156]">
            Sem intermediários nem complicações. Apenas boa comida e um serviço atencioso.
          </p>
        </div>

        {/* 3 Visual Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-14">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-white border border-[#E4DCCE] rounded-2xl p-7 shadow-xs hover:shadow-sm transition-all flex flex-col items-start"
            >
              {/* Step indicator top */}
              <div className="w-full flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#F6F0E6] flex items-center justify-center">
                  {stepIcons[index]}
                </div>
                <span className="font-serif-heading text-2xl font-bold text-[#D0C2B0]">
                  {step.number}
                </span>
              </div>

              <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#22201D] mb-3">
                {step.title}
              </h3>

              <p className="text-sm sm:text-base text-[#61594F] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Callout Box */}
        <div className="max-w-2xl mx-auto">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#F5EEE4] border border-[#DDD1BF] text-center shadow-xs">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#B84D19] mb-3 shadow-2xs">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <p className="font-serif-heading text-xl sm:text-2xl font-bold text-[#22201D] tracking-tight mb-1">
              Menos tempo na cozinha. Mais tempo para celebrar.
            </p>
            <p className="text-xs sm:text-sm text-[#736A60]">
              O seu único trabalho é receber os convidados e saborear o momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
