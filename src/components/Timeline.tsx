import { Card } from "@/components/ui/card";

export const Timeline = () => {
  const weeks = [
    {
      week: 1,
      title: "Foundations & First Story",
      points: [
        "PM fundamentals",
        "Scope & RACI",
        "Interview story #1"
      ]
    },
    {
      week: 2,
      title: "Planning & Tools",
      points: [
        "WBS + board setup",
        "Starter status report",
        "Tool mastery"
      ]
    },
    {
      week: 3,
      title: "Risk & Communication",
      points: [
        "Risk & Issue handling",
        "Stakeholder comms",
        "Mock interview"
      ]
    },
    {
      week: 4,
      title: "Live Project Delivery",
      points: [
        "Live client project",
        "Demo presentation",
        "Portfolio finalization"
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Week-by-Week Timeline</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          A structured journey from fundamentals to client-ready delivery
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {weeks.map((week, index) => (
            <Card key={index} className="p-6 relative overflow-hidden hover:shadow-xl transition-all">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary/50" />
              <div className="text-sm font-bold text-primary mb-2">Week {week.week}</div>
              <h3 className="text-xl font-bold mb-4">{week.title}</h3>
              <ul className="space-y-2">
                {week.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};