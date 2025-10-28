import { Card } from "@/components/ui/card";
import { Users, MessageCircle, Calendar, TrendingUp } from "lucide-react";

export const LifetimeSupport = () => {
  const benefits = [
    {
      icon: MessageCircle,
      title: "Lifetime Mentor Access",
      description: "Ongoing guidance whenever you need it"
    },
    {
      icon: Users,
      title: "Alumni Network",
      description: "Connect with fellow graduates and professionals"
    },
    {
      icon: Calendar,
      title: "Co-working Days",
      description: "Regular sessions with PMs, developers, and designers"
    },
    {
      icon: TrendingUp,
      title: "Career Community",
      description: "Peer reviews and continued learning"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Lifetime Support & Ecosystem</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Graduate into a career community with lifetime mentor access, alumni network, peer reviews, and co-working days with PMs, Developers, Designers, Marketers, and Business Analysts.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 text-center transition-all">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};