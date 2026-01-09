const stats = [
  { value: "50+", label: "Lessons" },
  { value: "200+", label: "Prompt Templates" },
  { value: "8", label: "Modules" },
  { value: "24h+", label: "Content" },
];

export function Stats() {
  return (
    <section className="py-16 border-y border-border/50">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
