import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

interface InvestmentProps {
  onFitCallClick: () => void;
}

export const Investment = ({ onFitCallClick }: InvestmentProps) => {
  const includes = [
    "Live training sessions",
    "Mentor feedback",
    "Portfolio review",
    "Career assets pack",
    "Tool access (Monday, Smartsheet)",
    "Studio access",
    "Lifetime community access"
  ];

  return (
    <section className="py-20">
      <div className="container px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Investment</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Special pricing for Manchester-Salford students
        </p>

        <Card className="max-w-3xl mx-auto p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-4">
              SALFORD OFFER
            </div>
            <div className="space-y-2 mb-6">
              <div className="text-5xl md:text-6xl font-bold">£1,250</div>
              <div className="text-muted-foreground">
                <span className="line-through">Standard £1,800</span> · Payment plans available
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {includes.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>

          <Button 
            size="lg" 
            className="w-full text-lg py-6"
            onClick={onFitCallClick}
          >
            Book a 10-min Fit Call <ArrowRight className="ml-2" />
          </Button>
        </Card>
      </div>
    </section>
  );
};