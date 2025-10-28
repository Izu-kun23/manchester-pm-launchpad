import { Card } from "@/components/ui/card";
import { FolderKanban, Wrench, FileCheck, Building } from "lucide-react";

export const WhatYouLearn = () => {
  const learnings = [
    {
      icon: FolderKanban,
      title: "Portfolio Case Studies",
      description: "Produce 2–3 case studies + Scope/WBS/Risk/Status pack"
    },
    {
      icon: Wrench,
      title: "Industry Tools",
      description: "Tools: Monday, Smartsheet, Excel dashboards"
    },
    {
      icon: FileCheck,
      title: "Career Preparation",
      description: "Mock interviews + CV/LinkedIn overhaul"
    },
    {
      icon: Building,
      title: "Studio Access",
      description: "Optional studio days with the full team"
    }
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container px-4">
        <div className="text-center mb-12">
          <p className="text-primary-foreground/80 mb-4 tracking-wider text-sm font-semibold">SCALE, FLEX, AND INNOVATE</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What You'll Learn</h2>
          <p className="text-xl text-primary-foreground/80 mb-6">4 weeks, part-time</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-orange-500 font-medium">
            15 Nov – 15 Dec · Evenings · Replay access
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {learnings.map((item, index) => (
            <Card key={index} className="p-6 bg-white text-black transition-all">
              <div className="w-16 h-16 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                <item.icon className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};