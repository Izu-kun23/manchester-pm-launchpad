import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroProps {
  onFitCallClick: () => void;
  onFitQuizClick: () => void;
}

export const Hero = ({ onFitCallClick, onFitQuizClick }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Project management collaboration" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Build a <span className="text-primary">Project-Management Portfolio</span> Before Your Next Interview
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Employers hire proof, not just degrees. In 4 weeks you'll create real PM documents, learn real tools, and stand out locally.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              onClick={onFitCallClick}
            >
              Start with a 10-min Fit Call <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              onClick={onFitQuizClick}
            >
              Take the 5-min Fit Quiz
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            No pressure — we'll advise if it's not a fit.
          </p>
        </div>
      </div>
    </section>
  );
};