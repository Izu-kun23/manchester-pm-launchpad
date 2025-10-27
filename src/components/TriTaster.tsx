import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Coffee, ArrowRight } from "lucide-react";

export const TriTaster = () => {
  return (
    <section className="py-20 bg-gray-section">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Try Before You Join</h2>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Three 45-minute preview classes to sample the learning style and build your first mini-project. No cost if not for you.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 rounded-full px-8"
              >
                Join Free Taster <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};