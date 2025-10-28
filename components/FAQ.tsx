'use client';

import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const FAQ = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const faqs = [
    {
      question: "Is this recognised by employers?",
      answer: "While this isn't a formal qualification, it provides you with real, demonstrable project management artifacts that employers actively look for. Our graduates have successfully landed PM roles using the portfolios created during the bootcamp. Employers value practical experience and tangible work samples over certificates."
    },
    {
      question: "Can I do it around applications?",
      answer: "Absolutely! The bootcamp is designed for flexibility with evening sessions and full replay access. You can maintain your job search while building your portfolio. In fact, many students use their newly created portfolio pieces in ongoing applications within weeks of starting."
    },
    {
      question: "Not in Manchester?",
      answer: "No problem! While we offer optional studio access for local students, all training sessions are available online with full replay access. You'll get the same quality instruction, mentor feedback, and portfolio outcomes regardless of your location."
    },
    {
      question: "What will I leave with?",
      answer: "You'll complete the program with 2-3 case studies, a professional portfolio including Scope documents, WBS, Risk Log, Status Reports, hands-on experience with Monday and Smartsheet, a polished CV and LinkedIn profile, and interview preparation with real project examples to discuss."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <div className="text-center mb-16">
          <div className="inline-flex px-3 py-1 bg-primary/5 rounded-full text-xs font-medium text-primary mb-6">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to know about our PM Bootcamp
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {!isMounted ? (
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={`faq-${index}`} className="border border-border rounded-xl px-6">
                  <div className="flex items-center justify-between py-5 font-medium">
                    {faq.question}
                    <div className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={`faq-${index}`}
                  value={`faq-${index}`}
                  className="border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-medium py-5 hover:no-underline [&[data-state=open]]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </section>
  );
};