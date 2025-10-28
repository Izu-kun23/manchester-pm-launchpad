import { Card } from "@/components/ui/card";
import { Phone, Play, CreditCard, Trophy } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Phone,
      title: "Book a Fit Call",
      description: "We map your path to a Coordinator/Assistant PM role"
    },
    {
      icon: Play,
      title: "Sampler or Replay",
      description: "Get a feel for the pace and content"
    },
    {
      icon: CreditCard,
      title: "Enrol",
      description: "Choose offer and payment plan"
    },
    {
      icon: Trophy,
      title: "Train + Show Portfolio",
      description: "Complete the program and showcase your work"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Your journey from application to job-ready PM
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-sm font-bold text-primary mb-2">Step {index + 1}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};