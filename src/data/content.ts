import type { OccasionItem, SpecialtyDish, FoodCategory, StepItem } from '../types';

import heroImg from '../assets/images/hero_food_spread_1787915550787.jpg';
import bacalhauImg from '../assets/images/bacalhau_a_bras_1787915565235.jpg';
import lomboImg from '../assets/images/lombo_no_forno_1787915578155.jpg';
import petiscosImg from '../assets/images/petiscos_partilhar_1787915591305.jpg';

export const ASSET_IMAGES = {
  hero: heroImg,
  bacalhau: bacalhauImg,
  lombo: lomboImg,
  petiscos: petiscosImg,
};

export const OCCASIONS: OccasionItem[] = [
  {
    id: 'aniversarios',
    icon: '🎂',
    title: 'Aniversários',
    description: 'Comida deliciosa para celebrar sem passar horas na cozinha.',
  },
  {
    id: 'festas-privadas',
    icon: '🥂',
    title: 'Festas Privadas',
    description: 'Opções para partilhar com família e amigos.',
  },
  {
    id: 'grupos',
    icon: '👥',
    title: 'Grupos',
    description: 'Comida preparada para pequenos grupos e encontros.',
  },
  {
    id: 'brunch-celebracoes',
    icon: '🥞',
    title: 'Brunch & Celebrações',
    description: 'Opções descontraídas para brunches e ocasiões especiais.',
  },
];

export const SPECIALTIES: SpecialtyDish[] = [
  {
    id: 'bacalhau-a-bras',
    tag: 'Mais Pedido • Especialidade',
    title: 'Bacalhau à Brás Tradicional',
    highlightText: 'Um clássico português que nunca falha — a nossa especialidade mais pedida.',
    description:
      'Bacalhau desfiado, batata palha estaladiça e ovos cremosos, preparado de forma tradicional para uma refeição cheia de sabor e conforto.',
    idealFor: [
      'Almoços de grupo',
      'Aniversários',
      'Reuniões familiares',
      'Pequenas celebrações',
      'Eventos privados',
    ],
    buttonText: 'QUERO ESTA ESPECIALIDADE',
    imageSrc: bacalhauImg,
    imageAlt: 'Bacalhau à Brás Tradicional acabado de preparar com azeitonas pretas e salsa fresca em Lisboa',
  },
  {
    id: 'lombo-no-forno',
    tag: 'Mais Pedido • Especialidade',
    title: 'Lombo no Forno com Mel e Ervas Aromáticas',
    highlightText:
      'Lombo no forno tenro e suculento com mel e ervas aromáticas, servido com arroz árabe e doce de maçã caseiro.',
    description:
      'Uma combinação aromática irresistível e reconfortante, entre as escolhas favoritas para partilhar à mesa.',
    pairings: ['LOMBO NO FORNO', 'ARROZ ÁRABE', 'DOCE DE MAÇÃ CASEIRO'],
    idealFor: [
      'Almoços',
      'Jantares',
      'Aniversários',
      'Reuniões familiares',
      'Pequenas celebrações',
    ],
    buttonText: 'QUERO ESTA ESPECIALIDADE',
    imageSrc: lomboImg,
    imageAlt: 'Lombo no forno fatiado com mel e ervas aromáticas, arroz árabe tostado e compota de maçã',
  },
];

export const OTHER_FOOD_CATEGORIES: FoodCategory[] = [
  {
    id: 'petiscos',
    title: 'Petiscos e Salgados',
    badge: 'Tradicional & Prático',
    items: [
      'Mini bifanas',
      'Croquetes',
      'Rissóis',
      'Pastéis de bacalhau',
      'Mini sandes',
      'Petiscos portugueses',
    ],
  },
  {
    id: 'partilhar',
    title: 'Para Partilhar',
    badge: 'Mesa Convivial',
    items: [
      'Tábuas de queijos',
      'Tábuas de enchidos',
      'Pão e acompanhamentos',
      'Seleções de snacks',
    ],
  },
  {
    id: 'brunch',
    title: 'Brunch',
    badge: 'Fresco & Descontraído',
    items: [
      'Croissants',
      'Mini pastelaria',
      'Panquecas',
      'Fruta fresca',
      'Iogurte e granola',
      'Ovos',
      'Pão',
      'Sumos naturais',
    ],
  },
  {
    id: 'doces',
    title: 'Doces',
    badge: 'Final Perfeito',
    items: [
      'Bolos',
      'Brownies',
      'Cookies',
      'Mini sobremesas',
      'Fruta',
      'Pastelaria portuguesa',
    ],
  },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Conte-nos o que está a planear',
    description: 'Indique a data, localização, número de pessoas e tipo de evento.',
  },
  {
    number: '02',
    title: 'Proposta e sugestão de menu',
    description: 'Pode escolher as especialidades mais pedidas ou pedir sugestões de menu ajustadas ao número de pessoas e capacidade.',
  },
  {
    number: '03',
    title: 'Nós tratamos do catering',
    description: 'Cozinhamos fresco e entregamos pronto a servir para que possa apenas desfrutar.',
  },
];

export const EVENT_TYPES = [
  'Aniversário',
  'Festa privada',
  'Grupo de amigos / família',
  'Brunch',
  'Celebração especial',
  'Pequeno evento corporativo',
  'Outro',
];

export const GUEST_COUNT_OPTIONS = [
  '10–15 pessoas (mínimo de entrega)',
  '16–25 pessoas',
  '26–35 pessoas',
  '36–50 pessoas',
  'Mais de 50 pessoas (sob consulta)',
];
