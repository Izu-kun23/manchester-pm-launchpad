'use client';

import { useState } from "react";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { TrustStrip } from "@/components/TrustStrip";
import { IsThisYou } from "@/components/IsThisYou";
import { WhatYouLearn } from "@/components/WhatYouLearn";
import { Timeline } from "@/components/Timeline";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { TriTaster } from "@/components/TriTaster";
import { VisitUs } from "@/components/VisitUs";
import { Testimonial } from "@/components/Testimonial";
import { HowItWorks } from "@/components/HowItWorks";
import { Investment } from "@/components/Investment";
import { LifetimeSupport } from "@/components/LifetimeSupport";
import { FAQ } from "@/components/FAQ";
import { StickyHeader } from "@/components/StickyHeader";
import { StickyFooter } from "@/components/StickyFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FitCallModal } from "@/components/FitCallModal";
import { QuizModal } from "@/components/QuizModal";

export default function HomePage() {
  const [isFitCallModalOpen, setIsFitCallModalOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);

  const handleFitCallClick = () => {
    setIsFitCallModalOpen(true);
  };

  const handleFitQuizClick = () => {
    setIsQuizModalOpen(true);
  };

  const handleOpenDayClick = () => {
    // Handle open day click - you can implement this later
    console.log('Open day clicked');
  };

  return (
    <main className="min-h-screen pb-32">
      <StickyHeader 
        onFitCallClick={handleFitCallClick}
        onFitQuizClick={handleFitQuizClick}
      />
      
      <Hero 
        onFitCallClick={handleFitCallClick}
        onFitQuizClick={handleFitQuizClick}
      />
      <StatsBar />
      <TrustStrip />
      <IsThisYou />
      <WhatYouLearn />
      <Timeline />
      <PortfolioGallery />
      <TriTaster />
      <VisitUs />
      <Testimonial />
      <HowItWorks />
      <Investment onFitCallClick={handleFitCallClick} />
      <LifetimeSupport />
      <FAQ />

      <StickyFooter onFitCallClick={handleFitCallClick} />
      <WhatsAppButton />
      <FitCallModal 
        isOpen={isFitCallModalOpen}
        onClose={() => setIsFitCallModalOpen(false)}
      />
      <QuizModal 
        isOpen={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
        onFitCallClick={handleFitCallClick}
        onOpenDayClick={handleOpenDayClick}
      />
    </main>
  );
}
