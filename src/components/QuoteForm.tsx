import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle,
  AlertCircle,
  Calendar,
  Users,
  MapPin,
  Mail,
  Phone,
  User,
  Sparkles,
  MessageCircle,
  Info,
} from 'lucide-react';
import { EVENT_TYPES, GUEST_COUNT_OPTIONS } from '../data/content';
import type { QuoteFormData } from '../types';

interface QuoteFormProps {
  initialFoodPreference?: string;
  initialLocation?: string;
  initialEventType?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialFoodPreference = '',
  initialLocation = '',
  initialEventType = '',
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    eventType: initialEventType || 'Aniversário',
    eventDate: '',
    eventLocation: initialLocation || '',
    guestCount: GUEST_COUNT_OPTIONS[0],
    foodPreference: initialFoodPreference || '',
    additionalInfo: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync initial properties if updated from outside (e.g. clicking a specialty button)
  useEffect(() => {
    if (initialFoodPreference) {
      setFormData((prev) => ({
        ...prev,
        foodPreference: initialFoodPreference,
      }));
    }
  }, [initialFoodPreference]);

  useEffect(() => {
    if (initialLocation) {
      setFormData((prev) => ({
        ...prev,
        eventLocation: initialLocation,
      }));
    }
  }, [initialLocation]);

  useEffect(() => {
    if (initialEventType) {
      setFormData((prev) => ({
        ...prev,
        eventType: initialEventType,
      }));
    }
  }, [initialEventType]);

  const quickDishes = [
    {
      label: '✨ Quero sugestão de menu personalizada',
      value: 'Gostaria de receber uma sugestão de menu personalizada',
      isHighlight: true,
    },
    {
      label: 'Bacalhau à Brás (Mais Pedido)',
      value: 'Bacalhau à Brás Tradicional',
      isHighlight: false,
    },
    {
      label: 'Lombo no Forno c/ Mel (Mais Pedido)',
      value: 'Lombo no Forno com Mel e Arroz Árabe',
      isHighlight: false,
    },
    {
      label: 'Petiscos & Salgados',
      value: 'Petiscos e Salgados Tradicionais',
      isHighlight: false,
    },
    {
      label: 'Tábuas de Queijos e Enchidos',
      value: 'Tábuas de Queijos e Enchidos',
      isHighlight: false,
    },
    {
      label: 'Menu de Brunch',
      value: 'Menu de Brunch',
      isHighlight: false,
    },
  ];

  const handleSelectQuickDish = (dishValue: string) => {
    if (!formData.foodPreference.includes(dishValue)) {
      const updated = formData.foodPreference
        ? `${formData.foodPreference}, ${dishValue}`
        : dishValue;
      setFormData((prev) => ({ ...prev, foodPreference: updated }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable quick submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  // WhatsApp quick text generation for immediate conversion
  const whatsappMessage = encodeURIComponent(
    `Olá Sabores Mediterrânicos! Gostaria de pedir um orçamento para o meu evento:\n` +
      `• Nome: ${formData.name || 'Cliente'}\n` +
      `• Tipo: ${formData.eventType}\n` +
      `• Pessoas: ${formData.guestCount}\n` +
      `• Data: ${formData.eventDate || 'A definir'}\n` +
      `• Local: ${formData.eventLocation || 'Lisboa'}\n` +
      `• Preferência: ${formData.foodPreference || 'Por sugestão'}`
  );

  return (
    <section id="orcamento" className="py-16 sm:py-24 relative bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F3ECE2] text-[#B84D19] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Catering Personalizado & Sem Compromisso</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#22201D] tracking-tight mb-4">
            Vamos Planear o Catering do Seu Evento?
          </h2>
          <p className="font-sans-body text-base sm:text-lg text-[#635B51] leading-relaxed">
            As nossas especialidades são as mais pedidas, mas dispomos de diversas opções de pratos. Diga-nos o que procura e preparamos uma sugestão de menu personalizada (entregas a partir de 10 pessoas).
          </p>
        </div>

        {/* Form Card or Success State */}
        <div className="bg-white border border-[#E0D7CB] rounded-3xl p-6 sm:p-10 shadow-md">
          {submitted ? (
            <div className="py-10 text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-[#E8F2EC] text-[#456654] mx-auto flex items-center justify-center shadow-xs">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div className="max-w-xl mx-auto">
                <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#22201D] mb-3">
                  Obrigado! Recebemos o seu pedido.
                </h3>
                <p className="text-base text-[#574F46] leading-relaxed mb-6 font-medium">
                  Vamos analisar os detalhes e entraremos em contacto consigo com a proposta mais adequada para o seu evento.
                </p>
              </div>

              {/* Direct WhatsApp fallback */}
              <div className="pt-4 border-t border-[#EAE3D8] max-w-md mx-auto">
                <p className="text-xs text-[#7A7167] mb-3">
                  Prefere resposta imediata no WhatsApp com estes dados?
                </p>
                <a
                  href={`https://wa.me/351912345678?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20BE5B] transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Abrir no WhatsApp</span>
                </a>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-[#8C8072] underline hover:text-[#22201D] transition-colors cursor-pointer"
                >
                  Enviar outro pedido ou rever informações
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Clarity notice: not obliged to choose only listed products */}
              <div
                id="banner-menu-flexibility"
                className="mb-8 p-4 sm:p-5 rounded-2xl bg-[#F8F4ED] border border-[#E3D6C4] flex flex-col sm:flex-row items-start gap-3.5"
              >
                <div className="w-9 h-9 rounded-xl bg-white text-[#B84D19] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <h3 className="font-serif-heading font-bold text-base text-[#22201D] mb-1">
                    Não está limitado aos pratos indicados no site
                  </h3>
                  <p className="text-[#5B5247] leading-relaxed text-xs sm:text-sm">
                    O <strong>Bacalhau à Brás</strong> e o <strong>Lombo no Forno</strong> são as nossas <strong>especialidades mais pedidas</strong>, mas temos <strong>diversas opções de pratos</strong>. Quando nos envia o seu pedido, temos em conta o número de convidados e a capacidade de preparação para lhe apresentar a melhor <strong>sugestão de menu personalizada</strong>.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Nome */}
                <div>
                  <label
                    htmlFor="field-name"
                    className="block text-xs font-bold uppercase tracking-wider text-[#4E473F] mb-1.5"
                  >
                    Nome <span className="text-[#B84D19]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#998F84] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="field-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="O seu nome completo"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D5CABB] bg-[#FAF8F5] text-sm text-[#22201D] focus:outline-none focus:ring-2 focus:ring-[#B84D19]/40 focus:border-[#B84D19] transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="field-email"
                    className="block text-xs font-bold uppercase tracking-wider text-[#4E473F] mb-1.5"
                  >
                    Email <span className="text-[#B84D19]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#998F84] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="field-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="exemplo@email.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D5CABB] bg-[#FAF8F5] text-sm text-[#22201D] focus:outline-none focus:ring-2 focus:ring-[#B84D19]/40 focus:border-[#B84D19] transition-all"
                    />
                  </div>
                </div>

                {/* Telefone / WhatsApp */}
                <div>
                  <label
                    htmlFor="field-phone"
                    className="block text-xs font-bold uppercase tracking-wider text-[#4E473F] mb-1.5"
                  >
                    Telefone / WhatsApp <span className="text-[#B84D19]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#998F84] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="field-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="912 345 678"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D5CABB] bg-[#FAF8F5] text-sm text-[#22201D] focus:outline-none focus:ring-2 focus:ring-[#B84D19]/40 focus:border-[#B84D19] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Event Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {/* Tipo de evento */}
                <div>
                  <label
                    htmlFor="field-event-type"
                    className="block text-xs font-bold uppercase tracking-wider text-[#4E473F] mb-1.5"
                  >
                    Tipo de evento
                  </label>
                  <select
                    id="field-event-type"
                    value={formData.eventType}
                    onChange={(e) =>
                      setFormData({ ...formData, eventType: e.target.value })
                    }
                    className="w-full px-3.5 py-3 rounded-xl border border-[#D5CABB] bg-[#FAF8F5] text-sm text-[#22201D] focus:outline-none focus:ring-2 focus:ring-[#B84D19]/40 focus:border-[#B84D19] transition-all"
                  >
                    {EVENT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Data do evento */}
                <div>
                  <label
                    htmlFor="field-date"
                    className="block text-xs font-bold uppercase tracking-wider text-[#4E473F] mb-1.5"
                  >
                    Data do evento
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#998F84] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="field-date"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) =>
                        setFormData({ ...formData, eventDate: e.target.value })
                      }
                      className="w-full pl-10 pr-3 py-3 rounded-xl border border-[#D5CABB] bg-[#FAF8F5] text-sm text-[#22201D] focus:outline-none focus:ring-2 focus:ring-[#B84D19]/40 focus:border-[#B84D19] transition-all"
                    />
                  </div>
                </div>

                {/* Local do evento */}
                <div>
                  <label
                    htmlFor="field-location"
                    className="block text-xs font-bold uppercase tracking-wider text-[#4E473F] mb-1.5"
                  >
                    Local do evento
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#998F84] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="field-location"
                      type="text"
                      value={formData.eventLocation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          eventLocation: e.target.value,
                        })
                      }
                      placeholder="Ex: Lisboa, Oeiras, Sintra..."
                      className="w-full pl-10 pr-3 py-3 rounded-xl border border-[#D5CABB] bg-[#FAF8F5] text-sm text-[#22201D] focus:outline-none focus:ring-2 focus:ring-[#B84D19]/40 focus:border-[#B84D19] transition-all"
                    />
                  </div>
                </div>

                {/* Número de pessoas */}
                <div>
                  <label
                    htmlFor="field-guests"
                    className="block text-xs font-bold uppercase tracking-wider text-[#4E473F] mb-1.5"
                  >
                    Número de pessoas
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#998F84] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="field-guests"
                      value={formData.guestCount}
                      onChange={(e) =>
                        setFormData({ ...formData, guestCount: e.target.value })
                      }
                      className="w-full pl-10 pr-3 py-3 rounded-xl border border-[#D5CABB] bg-[#FAF8F5] text-sm text-[#22201D] focus:outline-none focus:ring-2 focus:ring-[#B84D19]/40 focus:border-[#B84D19] transition-all"
                    >
                      {GUEST_COUNT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <p className="text-[11px] text-[#456654] font-semibold mt-1.5 flex items-center gap-1">
                    <span>✓ Mínimo de entrega: 10 pessoas</span>
                  </p>
                </div>
              </div>

              {/* CRITICAL CONDITIONAL ALERT FOR ">50 PESSOAS" */}
              {formData.guestCount.includes('Mais de 50') && (
                <div
                  id="notice-more-than-50"
                  className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-[#844516] flex items-start gap-3 text-sm animate-fadeIn"
                >
                  <AlertCircle className="w-5 h-5 shrink-0 text-[#B84D19] mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#844516]">
                      O nosso serviço de catering foca-se principalmente em grupos de 10 até cerca de 50 pessoas. Envie-nos os detalhes e confirmaremos a viabilidade para a sua data.
                    </p>
                    <p className="text-xs text-[#995922] mt-0.5">
                      Podemos avaliar a logística conforme o menu escolhido e a localização solicitada.
                    </p>
                  </div>
                </div>
              )}

              {/* O que gostaria de servir? */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <label
                    htmlFor="field-food-preference"
                    className="block text-xs font-bold uppercase tracking-wider text-[#4E473F]"
                  >
                    O que gostaria de servir? (ou peça uma sugestão de menu)
                  </label>
                  <span className="text-xs text-[#8C8072]">
                    Escolha uma opção rápida ou escreva livremente
                  </span>
                </div>

                {/* Quick suggestion pills */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {quickDishes.map((dish) => {
                    const isSelected = formData.foodPreference.includes(dish.value);
                    return (
                      <button
                        key={dish.label}
                        type="button"
                        onClick={() => handleSelectQuickDish(dish.value)}
                        className={`text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer flex items-center gap-1.5 ${
                          dish.isHighlight
                            ? isSelected
                              ? 'bg-[#456654] text-white border-[#456654] font-bold shadow-2xs'
                              : 'bg-[#EFF5F1] text-[#2C4837] border-[#C8DEC5] font-semibold hover:border-[#456654]'
                            : isSelected
                            ? 'bg-[#B84D19] text-white border-[#B84D19] font-semibold shadow-2xs'
                            : 'bg-[#FAF8F5] text-[#554C43] border-[#DDD2C4] hover:border-[#B84D19]'
                        }`}
                      >
                        <span>{isSelected ? '✓' : '+'}</span>
                        <span>{dish.label}</span>
                      </button>
                    );
                  })}
                </div>

                <textarea
                  id="field-food-preference"
                  rows={2}
                  value={formData.foodPreference}
                  onChange={(e) =>
                    setFormData({ ...formData, foodPreference: e.target.value })
                  }
                  placeholder="Ex: Gostava de receber uma sugestão de menu personalizada para o meu grupo, ou prefiro uma das especialidades mais pedidas, ou outra ideia..."
                  className="w-full p-3.5 rounded-xl border border-[#D5CABB] bg-[#FAF8F5] text-sm text-[#22201D] focus:outline-none focus:ring-2 focus:ring-[#B84D19]/40 focus:border-[#B84D19] transition-all"
                />

                <div className="mt-2 flex items-start gap-1.5 text-xs text-[#7A7165]">
                  <Info className="w-3.5 h-3.5 text-[#B84D19] shrink-0 mt-0.5" />
                  <span>
                    As especialidades são as preferidas dos clientes, mas temos diversas opções de pratos. Não é obrigado a escolher já: enviamos sugestões de menu adaptadas à dimensão do evento e à nossa capacidade.
                  </span>
                </div>
              </div>

              {/* Informações adicionais */}
              <div>
                <label
                  htmlFor="field-additional-info"
                  className="block text-xs font-bold uppercase tracking-wider text-[#4E473F] mb-1.5"
                >
                  Informações adicionais
                </label>
                <textarea
                  id="field-additional-info"
                  rows={2}
                  value={formData.additionalInfo}
                  onChange={(e) =>
                    setFormData({ ...formData, additionalInfo: e.target.value })
                  }
                  placeholder="Horário previsto da refeição, restrições alimentares, se precisa de material de servir, etc."
                  className="w-full p-3.5 rounded-xl border border-[#D5CABB] bg-[#FAF8F5] text-sm text-[#22201D] focus:outline-none focus:ring-2 focus:ring-[#B84D19]/40 focus:border-[#B84D19] transition-all"
                />
              </div>

              {/* Big Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="submit-quote-btn"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-bold text-base sm:text-lg tracking-wide uppercase text-white bg-[#B84D19] hover:bg-[#9F3F12] active:scale-99 transition-all shadow-md hover:shadow-lg cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>A enviar pedido...</span>
                  ) : (
                    <>
                      <span>Pedir Orçamento Gratuito</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-[#7A7167] mt-3">
                  Sem qualquer compromisso. Respondemos normalmente em poucas horas.
                </p>
              </div>
            </form>
          </div>
          )}
        </div>
      </div>
    </section>
  );
};
