import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const Testimonial = () => {
  return (
    <section className="py-20">
      <div className="container px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Real Outcomes</h2>
        
        <Card className="max-w-4xl mx-auto p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-8 left-8 text-primary/20">
            <Quote className="w-16 h-16" />
          </div>
          
          <div className="relative z-10">
            <blockquote className="text-2xl md:text-3xl font-medium mb-6 leading-relaxed">
              "This cohort gave me the portfolio I used to land a Project Assistant role."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-xl">
                T
              </div>
              <div>
                <div className="font-semibold">Tobi A.</div>
                <div className="text-sm text-muted-foreground">Salford Business School Graduate</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};