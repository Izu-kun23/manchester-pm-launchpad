import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Coffee, ArrowRight, Check } from "lucide-react";
import { QuizModal } from "./QuizModal";

export const TriTaster = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const handleFitCallClick = () => {
    // TODO: Implement fit call functionality
    console.log('Fit call clicked');
  };

  const handleOpenDayClick = () => {
    // TODO: Implement open day functionality
    console.log('Open day clicked');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <Card className="bg-primary text-white p-8 md:p-16 max-w-5xl mx-auto rounded-3xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur">
                <Coffee className="w-10 h-10" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4"> 🤔 Not sure if Project Management's for you?</h2>
        
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Take our 2-minute quiz and see how close you already are to a PM career.
                Get your result instantly — plus your next best step:
              </p>
              <div className="text-lg text-white/90 mb-6 leading-relaxed">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-5 h-5 text-white" />
                  <span>Join the 4-Week Bootcamp</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-5 h-5 text-white" />
                  <span>Book a Fit Call</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-white" />
                  <span>Or Attend the Open Day</span>
                </div>
              </div>
              <Button 
                size="lg" 
                onClick={() => setIsQuizOpen(true)}
                className="bg-white text-primary hover:bg-white/90 rounded-full px-8"
              >
                Take the Quiz <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
      
      <QuizModal 
        isOpen={isQuizOpen} 
        onClose={() => setIsQuizOpen(false)} 
        onFitCallClick={handleFitCallClick}
        onOpenDayClick={handleOpenDayClick}
      />
    </section>
  );
};