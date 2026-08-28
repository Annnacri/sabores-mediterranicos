import React from 'react';
import { Utensils, MapPin, Mail, Phone, Users, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onQuoteClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onQuoteClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1A18] text-[#D1C8BD] pt-14 pb-24 sm:pb-14 border-t border-[#302B26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#2C2723]">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#2A2622] text-amber-400 flex items-center justify-center">
                <Utensils className="w-4 h-4" />
              </div>
              <span className="font-serif-heading font-bold text-xl text-white">
                Sabores Mediterrânicos
              </span>
            </div>
            <p className="text-sm text-[#A89F93] leading-relaxed max-w-sm">
              Serviço de catering com comida fresca e generosa para aniversários, festas privadas, grupos e celebrações em Lisboa e arredores.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#8C8377]">
              <Users className="w-4 h-4 text-[#B84D19]" />
              <span>Catering de 10 a cerca de 50 pessoas (mínimo: 10)</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-sm text-[#A89F93]">
              <li>
                <a href="#especialidades" className="hover:text-white transition-colors">
                  As Nossas Especialidades
                </a>
              </li>
              <li>
                <a href="#outras-opcoes" className="hover:text-white transition-colors">
                  Petiscos & Sugestões
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Como Funciona o Pedido
                </a>
              </li>
              <li>
                <a href="#entrega" className="hover:text-white transition-colors">
                  Áreas de Entrega
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Lisbon Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contactos & Localização
            </h4>
            <div className="space-y-2.5 text-sm text-[#A89F93]">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B84D19] shrink-0" />
                <span>Lisboa, Portugal (entregas locais)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#456654] shrink-0" />
                <span>Contacto via WhatsApp & Telefone</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>contacto@saboresmediterranicos.pt</span>
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={onQuoteClick}
                className="text-xs font-bold uppercase tracking-wider text-[#B84D19] hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1"
              >
                Solicitar orçamento online →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7B7369] gap-4">
          <p>© {new Date().getFullYear()} Sabores Mediterrânicos. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <span>Preparado com carinho em Lisboa</span>
            <Heart className="w-3 h-3 text-[#B84D19] fill-[#B84D19]" />
          </div>
          <button
            onClick={scrollToTop}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Voltar ao topo ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
