import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";

export const PortfolioGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const portfolioItems = [
    {
      image: portfolio1,
      title: "Made in Week 1",
      description: "Project Scope & RACI Matrix",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video
    },
    {
      image: portfolio2,
      title: "Made in Week 2",
      description: "WBS & Status Dashboard",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video
    },
    {
      image: portfolio1,
      title: "Made in Week 3",
      description: "Risk Register & Stakeholder Updates",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video
    }
  ];

  return (
    <section className="py-20 bg-gray-section">
      <div className="container px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Portfolio Proof</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          See what our students create in just a few weeks
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index} 
              className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all"
              onClick={() => setSelectedVideo(index)}
            >
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <p className="text-xs text-primary mt-2">30-45s walkthrough →</p>
              </div>
            </Card>
          ))}
        </div>

        <Dialog open={selectedVideo !== null} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl">
            {selectedVideo !== null && (
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={portfolioItems[selectedVideo].videoUrl}
                  title="Portfolio Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};