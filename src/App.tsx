/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Occasions } from './components/Occasions';
import { Specialties } from './components/Specialties';
import { OtherOptions } from './components/OtherOptions';
import { HowItWorks } from './components/HowItWorks';
import { DeliveryArea } from './components/DeliveryArea';
import { QuoteForm } from './components/QuoteForm';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [selectedFoodPreference, setSelectedFoodPreference] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedEventType, setSelectedEventType] = useState('');

  const scrollToQuote = () => {
    const el = document.getElementById('orcamento');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSpecialties = () => {
    const el = document.getElementById('especialidades');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSpecialty = (dishTitle: string) => {
    setSelectedFoodPreference(dishTitle);
    scrollToQuote();
  };

  const handleSelectOptionCategory = (catName: string) => {
    setSelectedFoodPreference((prev) => (prev ? `${prev}, ${catName}` : catName));
    scrollToQuote();
  };

  const handleSelectOccasion = (occasionTitle: string) => {
    // Map card title to event type dropdown
    if (occasionTitle.includes('Aniversário')) {
      setSelectedEventType('Aniversário');
    } else if (occasionTitle.includes('Privada')) {
      setSelectedEventType('Festa privada');
    } else if (occasionTitle.includes('Grupo')) {
      setSelectedEventType('Grupo');
    } else if (occasionTitle.includes('Brunch')) {
      setSelectedEventType('Brunch');
    } else {
      setSelectedEventType(occasionTitle);
    }
    scrollToQuote();
  };

  const handleSetLocation = (loc: string) => {
    setSelectedLocation(loc);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#22201D] flex flex-col font-sans-body">
      {/* Header with Navigation */}
      <Header onQuoteClick={scrollToQuote} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onQuoteClick={scrollToQuote}
          onSpecialtiesClick={scrollToSpecialties}
        />

        {/* 2. Para Que Ocasiões? */}
        <Occasions onSelectOccasion={handleSelectOccasion} />

        {/* 3. As Nossas Especialidades */}
        <Specialties
          onSelectSpecialty={handleSelectSpecialty}
          onQuoteClick={scrollToQuote}
        />

        {/* 4. Outras Opções de Comida */}
        <OtherOptions onSelectOptionCategory={handleSelectOptionCategory} />

        {/* 5. Como Funciona */}
        <HowItWorks />

        {/* 6. Área de Entrega */}
        <DeliveryArea
          onQuoteClick={scrollToQuote}
          onSetLocation={handleSetLocation}
        />

        {/* 7. Pedido de Orçamento (Main conversion) */}
        <QuoteForm
          initialFoodPreference={selectedFoodPreference}
          initialLocation={selectedLocation}
          initialEventType={selectedEventType}
        />

        {/* 8. CTA Final */}
        <FinalCTA onQuoteClick={scrollToQuote} />
      </main>

      {/* Footer */}
      <Footer onQuoteClick={scrollToQuote} />

      {/* Mobile Sticky Bar */}
      <MobileBottomBar onQuoteClick={scrollToQuote} />
    </div>
  );
}
