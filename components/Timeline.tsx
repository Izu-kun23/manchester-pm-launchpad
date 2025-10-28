'use client';

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-200px" });

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Week-by-Week Timeline</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A structured journey from fundamentals to client-ready delivery
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto" ref={ref}>
          <div className="relative">
            {/* Timeline line */}
            <motion.div 
              className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-primary to-primary/30 hidden md:block"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            />
            
            <div className="space-y-12">
              {weeks.map((week, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start gap-8 md:gap-8"
                  initial={{ opacity: 0, x: -80 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.6 + (index * 0.3),
                    ease: "easeOut"
                  }}
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10 hidden md:flex"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.8 + (index * 0.3),
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                  >
                    {week.week}
                  </motion.div>
                  
                  {/* Content card */}
                  <motion.div 
                    className="flex-1 bg-white border border-border rounded-xl p-6 shadow-sm"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.0 + (index * 0.3),
                      ease: "easeOut"
                    }}
                  >
                    <div className="text-sm font-medium text-primary mb-2">Week {week.week}</div>
                    <h3 className="text-lg font-semibold mb-4">{week.title}</h3>
                    <ul className="space-y-2">
                      {week.points.map((point, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start gap-3 text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: 1.2 + (index * 0.3) + (i * 0.1),
                            ease: "easeOut"
                          }}
                        >
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};