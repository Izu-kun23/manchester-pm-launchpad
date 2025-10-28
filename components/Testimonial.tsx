'use client';

import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

export const Testimonial = () => {
  const testimonials = [
    {
      quote: "This cohort gave me the portfolio I used to land a Project Assistant role.",
      name: "Tobi A.",
      role: "Salford Business School Graduate",
      initial: "T"
    },
    {
      quote: "The studio access and real client work made all the difference in my interviews.",
      name: "Sarah M.",
      role: "Manchester Met Graduate",
      initial: "S"
    }
  ];

  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-6">
            <Star className="w-4 h-4" />
            SUCCESS STORIES
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-2">Join over 67+ happy students</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 relative overflow-hidden transition-all">
              <div className="absolute top-6 right-6 text-primary/10">
                <Quote className="w-12 h-12" />
              </div>
              
              <div className="relative z-10">
                <blockquote className="text-lg md:text-xl font-medium mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-xl">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};