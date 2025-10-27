import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
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
    <section className="py-20">
      <div className="container px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Everything you need to know
        </p>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};