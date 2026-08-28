export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  guestCount: string;
  foodPreference: string;
  additionalInfo: string;
}

export interface OccasionItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface SpecialtyDish {
  id: string;
  tag: string;
  title: string;
  highlightText: string;
  description: string;
  pairings?: string[];
  idealFor: string[];
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

export interface FoodCategory {
  id: string;
  title: string;
  badge: string;
  items: string[];
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}
