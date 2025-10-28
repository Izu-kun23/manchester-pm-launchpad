'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, DollarSign } from "lucide-react";

interface InvestmentProps {
  onFitCallClick: () => void;
}

export const Investment = ({ onFitCallClick }: InvestmentProps) => {
  const includes = [
    "Live training",
    "Mentor feedback", 
    "Portfolio review",
    "Career assets pack"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-6">
            <DollarSign className="w-4 h-4" />
            YOUR INVESTMENT
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Your Investment</h2>
        </div>

        <div className="flex justify-center">
          <Card className="p-8 relative bg-orange-50 text-orange-600 border-2 border-orange-500 max-w-2xl w-full">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="px-4 py-1 bg-orange-500 rounded-full text-xs font-bold text-white">
                SALFORD OFFER
              </div>
            </div>
            <div className="mb-6 text-center">
              <h3 className="font-bold text-2xl mb-2 text-orange-600">Salford Offer: £1,250</h3>
              <p className="text-sm text-orange-500 mb-4">(Standard <span className="line-through">£1,800</span>)</p>
              <div className="mb-4">
                <p className="text-sm text-orange-600 mb-2">Flexible Instalments from £99/month</p>
                <p className="text-sm text-orange-600">2–3 Part Plans Available</p>
              </div>
              <Button 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full"
                onClick={onFitCallClick}
              >
                Book a 10‑min Fit Call →
              </Button>
            </div>
            <div>
              <p className="text-sm text-orange-600 mb-3 font-medium">Includes:</p>
              <div className="grid grid-cols-2 gap-3">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-orange-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};