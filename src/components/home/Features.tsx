import { 
  Code2, 
  Palette, 
  Database, 
  Rocket, 
  Image, 
  Sparkles,
  Terminal,
  BookOpen 
} from "lucide-react";

const features = [
  {
    icon: Terminal,
    title: "Prompt Sandbox",
    description: "Test and iterate on prompts in real-time with live previews and version control.",
    color: "text-primary",
  },
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    description: "8 comprehensive modules taking you from basics to production-ready prompts.",
    color: "text-primary",
  },
  {
    icon: Code2,
    title: "Frontend Prompts",
    description: "Generate React, Vue, or vanilla JS components with pixel-perfect accuracy.",
    color: "text-primary",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Create design systems, wireframes, and beautiful interfaces through prompts.",
    color: "text-accent",
  },
  {
    icon: Database,
    title: "Backend & Data",
    description: "Craft prompts for APIs, database schemas, and server-side logic.",
    color: "text-accent",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Generate CI/CD configs, Dockerfiles, and infrastructure as code.",
    color: "text-beginner",
  },
  {
    icon: Image,
    title: "Asset Generation",
    description: "Create logos, images, and music with AI-powered creative prompts.",
    color: "text-intermediate",
  },
  {
    icon: Sparkles,
    title: "AI Tool Mastery",
    description: "Learn to leverage multiple AI models for maximum productivity.",
    color: "text-primary",
  },
];

export function Features() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to{' '}
            <span className="text-gradient">Ship with AI</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A complete learning path covering every aspect of prompt-driven development,
            from ideation to deployment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-secondary mb-4 ${feature.color}`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
