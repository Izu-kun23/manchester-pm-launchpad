'use client';

import { Card } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";

export const VisitUs = () => {
  return (
    <section className="py-20 bg-gray-section">
      <div className="container px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Visit Us (Walk-ins Welcome)</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Come see where the magic happens
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Our Studio</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    St. James House<br />
                    Pendleton Way<br />
                    M6 5PW, Salford
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Open Day</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>5–10 November</strong><br />
                    Tour the studio, see live boards, get a 10-min portfolio review.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href="https://maps.google.com/?q=St+James+House+Pendleton+Way+M6+5PW+Salford"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </Card>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/assets/studio.jpg" 
              alt="Studio workspace" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};