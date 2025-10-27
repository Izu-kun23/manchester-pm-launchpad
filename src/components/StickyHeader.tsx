import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/projectcareer-logo.png";

interface StickyHeaderProps {
  onFitCallClick: () => void;
  onFitQuizClick: () => void;
}

export const StickyHeader = ({ onFitCallClick, onFitQuizClick }: StickyHeaderProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container px-4 py-3 flex items-center justify-between">
        <img src={logo} alt="ProjectCareer" className="h-8" />
        <div className="flex gap-3">
          <Button 
            size="sm"
            variant="outline"
            onClick={onFitQuizClick}
            className="hidden sm:inline-flex"
          >
            Fit Quiz
          </Button>
          <Button 
            size="sm"
            onClick={onFitCallClick}
          >
            Book Fit Call
          </Button>
        </div>
      </div>
    </header>
  );
};