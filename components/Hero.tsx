'use client';

import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, GraduationCap } from "lucide-react";

interface HeroProps {
  onFitCallClick: () => void;
  onFitQuizClick: () => void;
}

export const Hero = ({ onFitCallClick, onFitQuizClick }: HeroProps) => {
  return (
    <section className="relative py-24 md:py-32 bg-white">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <div className="inline-flex px-3 py-1 bg-primary/5 rounded-full text-xs font-medium text-primary mb-8">
              SALFORD PM BOOTCAMP
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Build a <span className="text-primary">Project-Management Portfolio</span> Before Your Next Interview
            </h1>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
              Employers hire proof, not just degrees. In 4 weeks you'll create real PM documents, learn real tools, and stand out locally.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <Button 
                size="lg" 
                className="px-8 py-3 rounded-full"
                onClick={onFitCallClick}
              >
                Start with a 10-min Fit Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-3 rounded-full"
                onClick={onFitQuizClick}
              >
                Take the 5-min Fit Quiz
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              No pressure — we'll advise if it's not a fit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};