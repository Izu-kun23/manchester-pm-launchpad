export const StatsBar = () => {
  const stats = [
    { value: "+87%", label: "Job placement rate" },
    { value: "4 weeks", label: "To portfolio ready" },
    { value: "15+", label: "Industry tools" },
    { value: "∞", label: "Lifetime support" }
  ];

  return (
    <section className="py-16 border-y border-border">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
