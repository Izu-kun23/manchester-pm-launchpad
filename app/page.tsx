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

export default function HomePage() {
  const [isFitCallModalOpen, setIsFitCallModalOpen] = useState(false);

  const handleFitCallClick = () => {
    setIsFitCallModalOpen(true);
  };

  const handleFitQuizClick = () => {
    // Replace with your actual Typeform or quiz URL
    window.open("https://your-typeform-url-here.com", "_blank");
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
    </main>
  );
}
