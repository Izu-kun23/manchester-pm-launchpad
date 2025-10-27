import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Coffee, ArrowRight } from "lucide-react";

export const TriTaster = () => {
  return (
    <section className="py-20">
      <div className="container px-4">
        <Card className="bg-primary text-primary-foreground p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                <Coffee className="w-10 h-10" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Try Before You Join (Tri-Taster – Free)</h2>
              <p className="text-lg opacity-90 mb-6">
                Three 45-minute preview classes to sample the learning style and build your first mini-project. No cost if not for you.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8"
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