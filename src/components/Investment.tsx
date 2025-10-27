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
    <section className="py-20 bg-gray-section">
      <div className="container px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-4 tracking-wider text-sm">💰 CLEAR INVESTING</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Transparent pricing for all</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Special pricing for Manchester-Salford students
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Standard Plan */}
          <Card className="p-6 relative bg-white border-2">
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-2">Standard</h3>
              <p className="text-sm text-muted-foreground mb-4">Great for career starters</p>
              <div className="mb-4">
                <span className="text-4xl font-bold">£1,800</span>
                <span className="text-muted-foreground"> /cohort</span>
              </div>
              <Button variant="outline" className="w-full rounded-full">Learn More</Button>
            </div>
            <div className="space-y-3">
              {includes.slice(0, 4).map((item, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Salford Offer - Featured */}
          <Card className="p-6 relative bg-primary text-white border-2 border-primary shadow-xl scale-105">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="px-4 py-1 bg-primary rounded-full text-xs font-bold text-white">
                SALFORD OFFER
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-2">Graduate Special</h3>
              <p className="text-sm text-white/80 mb-4">Best value for local students</p>
              <div className="mb-4">
                <span className="text-4xl font-bold">£1,250</span>
                <span className="text-white/80"> /cohort</span>
              </div>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-full"
                onClick={onFitCallClick}
              >
                Get Started
              </Button>
            </div>
            <div className="space-y-3">
              {includes.map((item, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Premium Plan */}
          <Card className="p-6 relative bg-white border-2">
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-2">1-on-1 Premium</h3>
              <p className="text-sm text-muted-foreground mb-4">Private mentorship track</p>
              <div className="mb-4">
                <span className="text-4xl font-bold">£2,999</span>
                <span className="text-muted-foreground"> /program</span>
              </div>
              <Button variant="outline" className="w-full rounded-full">Contact Us</Button>
            </div>
            <div className="space-y-3">
              {[...includes, "Private sessions", "Career coaching"].map((item, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};