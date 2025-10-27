import { GraduationCap, Clock, Video, Briefcase, Users, Network } from "lucide-react";

export const TrustStrip = () => {
  const features = [
    { icon: GraduationCap, text: "Salford & Manchester Grads" },
    { icon: Clock, text: "4-Week Cohort" },
    { icon: Video, text: "Evening Sessions + Replays" },
    { icon: Briefcase, text: "Live Client Briefs" },
    { icon: Users, text: "Lifetime Support" },
    { icon: Network, text: "PM · Developers · Designers · Marketers · BA Ecosystem" },
  ];

  return (
    <section className="py-12 bg-gray-section border-y border-border">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium leading-tight">{feature.text}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-muted-foreground max-w-3xl mx-auto">
          <strong>Studio Access:</strong> sit with devs/designers, record demos, join daily stand-ups.
        </p>
      </div>
    </section>
  );
};