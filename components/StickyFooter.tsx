'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface StickyFooterProps {
  onFitCallClick: () => void;
}

export const StickyFooter = ({ onFitCallClick }: StickyFooterProps) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-primary text-primary-foreground py-4 shadow-lg">
      <div className="container px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <div className="font-bold text-lg mb-1">Stop sending CVs without proof</div>
          <div className="text-sm opacity-90">Start your project career today</div>
        </div>
        <Button 
          size="lg"
          variant="secondary"
          onClick={onFitCallClick}
          className="whitespace-nowrap"
        >
          Book a 10-min Fit Call <ArrowRight className="ml-2" />
        </Button>
      </div>
    </footer>
  );
};