import { CheckCircle2, FileText, Lightbulb, Target } from "lucide-react";

export const IsThisYou = () => {
  const points = [
    {
      icon: CheckCircle2,
      text: "Sending CVs but getting 'need experience'"
    },
    {
      icon: FileText,
      text: "Want a portfolio (Scope, WBS, Risk Log, Status Report)"
    },
    {
      icon: Lightbulb,
      text: "Prefer practical work over endless lectures"
    },
    {
      icon: Target,
      text: "Want to interview with confidence using real project artefacts"
    }
  ];

  return (
    <section className="py-20">
      <div className="container px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Is This You?</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          We designed this bootcamp for graduates and career-changers who are ready to take action.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {points.map((point, index) => (
            <div key={index} className="flex gap-4 p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all bg-card">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <p className="text-lg font-medium leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};