'use client';

import { Button } from "@/components/ui/button";

interface StickyHeaderProps {
  onFitCallClick: () => void;
  onFitQuizClick: () => void;
}

export const StickyHeader = ({ onFitCallClick, onFitQuizClick }: StickyHeaderProps) => {
  return (
    <header className="bg-background/95 backdrop-blur-sm">
      <div className="container px-4 py-3 flex items-center justify-between">
        <img src="/assets/projectcareer-logo.png" alt="ProjectCareer" className="h-8" />
        <div className="flex gap-3">
          <Button 
            size="sm"
            variant="outline"
            onClick={onFitQuizClick}
            className="hidden sm:inline-flex rounded-full"
          >
            Fit Quiz
          </Button>
          <Button 
            size="sm"
            onClick={onFitCallClick}
            className="rounded-full"
          >
            Book Fit Call
          </Button>
        </div>
      </div>
    </header>
  );
};