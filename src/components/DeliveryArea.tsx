import React, { useState } from 'react';
import { MapPin, Navigation, Compass, CheckCircle } from 'lucide-react';

interface DeliveryAreaProps {
  onQuoteClick: () => void;
  onSetLocation: (loc: string) => void;
}

export const DeliveryArea: React.FC<DeliveryAreaProps> = ({ onQuoteClick, onSetLocation }) => {
  const [typedLocation, setTypedLocation] = useState('');

  const commonAreas = [
    { name: 'Lisboa Cidade', note: 'Entrega regular' },
    { name: 'Oeiras & Algés', note: 'Zonas habituais' },
    { name: 'Cascais & Estoril', note: 'Mediante dimensão' },
    { name: 'Sintra & Queluz', note: 'Sob consulta' },
    { name: 'Amadora & Odivelas', note: 'Zonas habituais' },
    { name: 'Loures & Sacavém', note: 'Zonas habituais' },
    { name: 'Almada & Margem Sul', note: 'Sob consulta' },
  ];

  const handleSelectArea = (area: string) => {
    setTypedLocation(area);
    onSetLocation(area);
  };

  return (
    <section id="entrega" className="py-16 sm:py-24 bg-[#F7F2EB] border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Explanation */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE0D2] text-[#695D50] text-xs font-semibold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5 text-[#B84D19]" />
              <span>Logística & Proximidade</span>
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#22201D] tracking-tight mb-4">
              Onde Entregamos o Catering?
            </h2>

            <p className="font-sans-body text-base sm:text-lg text-[#554D44] leading-relaxed mb-4">
              O nosso serviço de catering está sediado em Lisboa e realiza entregas a partir de 10 pessoas em Lisboa e concelhos próximos, mediante disponibilidade de agenda e localização do evento.
            </p>

            <div className="p-4 rounded-xl bg-white border border-[#E0D5C5] mb-6">
              <p className="text-sm sm:text-base font-semibold text-[#22201D] flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#B84D19] shrink-0" />
                Mínimo de entrega para 10 pessoas. Diga-nos onde será o seu evento.
              </p>
              <p className="text-xs text-[#7A7167] mt-1 pl-6">
                Analisamos cada pedido com rigor para garantir que o catering chega fresco, pontual e pronto a servir.
              </p>
            </div>

            {/* Quick check pill list */}
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-[#8A7D6F] mb-3">
                Exemplos de zonas atendidas mediante consulta:
              </span>
              <div className="flex flex-wrap gap-2">
                {commonAreas.map((area) => (
                  <button
                    key={area.name}
                    type="button"
                    onClick={() => handleSelectArea(area.name)}
                    className="px-3 py-1.5 rounded-lg bg-white border border-[#DDD3C4] hover:border-[#B84D19] text-xs font-medium text-[#423B33] hover:text-[#B84D19] transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <MapPin className="w-3 h-3 text-[#B84D19]" />
                    <span>{area.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual Element: Stylized Map Card */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-[#E2D6C5] rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
              {/* Decorative graphic representation of Lisbon estuary and hub */}
              <div className="relative rounded-2xl bg-[#F4EFE6] border border-[#E8DFC9] p-6 text-center overflow-hidden">
                {/* SVG stylistic map of Lisbon region */}
                <svg
                  viewBox="0 0 400 240"
                  className="w-full h-auto max-h-[220px] mx-auto text-[#22201D]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Stylized River Tagus (Tejo) */}
                  <path
                    d="M 20 180 Q 90 140 180 160 T 320 120 T 390 100"
                    stroke="#CADCE8"
                    strokeWidth="28"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                  <path
                    d="M 20 180 Q 90 140 180 160 T 320 120 T 390 100"
                    stroke="#AEC8DB"
                    strokeWidth="14"
                    strokeLinecap="round"
                    opacity="0.9"
                  />

                  {/* Regional nodes */}
                  {/* Sintra */}
                  <circle cx="85" cy="80" r="14" fill="#FFFFFF" stroke="#D3C7B5" strokeWidth="2" />
                  <text x="85" y="105" textAnchor="middle" fontSize="10" fontWeight="600" fill="#6A6258">Sintra</text>

                  {/* Cascais */}
                  <circle cx="65" cy="150" r="14" fill="#FFFFFF" stroke="#D3C7B5" strokeWidth="2" />
                  <text x="65" y="175" textAnchor="middle" fontSize="10" fontWeight="600" fill="#6A6258">Cascais</text>

                  {/* Oeiras */}
                  <circle cx="140" cy="140" r="15" fill="#FFFFFF" stroke="#D3C7B5" strokeWidth="2" />
                  <text x="140" y="165" textAnchor="middle" fontSize="10" fontWeight="600" fill="#6A6258">Oeiras</text>

                  {/* Loures */}
                  <circle cx="230" cy="55" r="14" fill="#FFFFFF" stroke="#D3C7B5" strokeWidth="2" />
                  <text x="230" y="78" textAnchor="middle" fontSize="10" fontWeight="600" fill="#6A6258">Loures</text>

                  {/* Lisboa Hub (Prominent) */}
                  <circle cx="235" cy="115" r="26" fill="#B84D19" fillOpacity="0.15" />
                  <circle cx="235" cy="115" r="18" fill="#B84D19" />
                  <circle cx="235" cy="115" r="6" fill="#FFFFFF" />
                  <text x="235" y="148" textAnchor="middle" fontSize="12" fontWeight="700" fill="#B84D19">LISBOA</text>
                  <text x="235" y="160" textAnchor="middle" fontSize="9" fontWeight="600" fill="#756A5E">Base do Serviço</text>

                  {/* Almada */}
                  <circle cx="210" cy="195" r="14" fill="#FFFFFF" stroke="#D3C7B5" strokeWidth="2" />
                  <text x="210" y="218" textAnchor="middle" fontSize="10" fontWeight="600" fill="#6A6258">Almada</text>
                </svg>

                <div className="mt-4 pt-4 border-t border-[#E5DAC8] flex items-center justify-between text-xs text-[#61574C]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <CheckCircle className="w-4 h-4 text-[#456654]" />
                    Ponto de partida em Lisboa
                  </span>
                  <span className="text-[#8C7E6F]">Zonas próximas sob confirmação</span>
                </div>
              </div>

              {/* Quick location checker */}
              <div className="mt-6">
                <label htmlFor="check-location-input" className="block text-xs font-bold uppercase tracking-wider text-[#635A50] mb-2">
                  Verificar a sua localização:
                </label>
                <div className="flex gap-2">
                  <input
                    id="check-location-input"
                    type="text"
                    value={typedLocation}
                    onChange={(e) => {
                      setTypedLocation(e.target.value);
                      onSetLocation(e.target.value);
                    }}
                    placeholder="Ex: Lisboa, Oeiras, Sintra, Telheiras..."
                    className="flex-1 px-4 py-2.5 rounded-xl border border-[#D5CABB] bg-[#FAF8F5] text-sm text-[#22201D] focus:outline-none focus:ring-2 focus:ring-[#B84D19]/40 focus:border-[#B84D19]"
                  />
                  <button
                    type="button"
                    onClick={onQuoteClick}
                    className="px-5 py-2.5 rounded-xl bg-[#22201D] text-white text-xs sm:text-sm font-semibold hover:bg-[#3A3530] transition-colors cursor-pointer shrink-0"
                  >
                    Confirmar
                  </button>
                </div>
                {typedLocation && (
                  <p className="text-xs text-[#456654] font-medium mt-2 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Perfeito! A localização será incluída no seu formulário de orçamento.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
