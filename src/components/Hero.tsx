import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroProps {
  onFitCallClick: () => void;
  onFitQuizClick: () => void;
}

export const Hero = ({ onFitCallClick, onFitQuizClick }: HeroProps) => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-section">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-6">
              🎓 SALFORD PM BOOTCAMP
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
              Build a <span className="text-primary">Project-Management Portfolio</span> Before Your Next Interview
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Employers hire proof, not just degrees. In 4 weeks you'll create real PM documents, learn real tools, and stand out locally.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button 
                size="lg" 
                className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all rounded-full"
                onClick={onFitCallClick}
              >
                Start with a 10-min Fit Call <ArrowRight className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base px-8 py-6 border-2 rounded-full"
                onClick={onFitQuizClick}
              >
                Take the 5-min Fit Quiz
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              No pressure — we'll advise if it's not a fit.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center text-xs font-bold">S</div>
                <div className="w-8 h-8 rounded-full bg-primary/30 border-2 border-white flex items-center justify-center text-xs font-bold">M</div>
                <div className="w-8 h-8 rounded-full bg-primary/40 border-2 border-white flex items-center justify-center text-xs font-bold">+</div>
              </div>
              <span className="text-sm font-medium">67 Grads since 2021</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};