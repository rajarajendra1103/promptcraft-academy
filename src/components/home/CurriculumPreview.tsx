import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Clock, BookOpen } from "lucide-react";

const modules = [
  {
    id: 1,
    title: "Idea to Prompts",
    description: "Transform vague ideas into structured, actionable prompts",
    lessons: 8,
    duration: "2 hours",
    level: "beginner",
    topics: ["Problem decomposition", "Prompt anatomy", "Context setting"],
  },
  {
    id: 2,
    title: "Frontend Mastery",
    description: "Generate React, components, and complete UI systems",
    lessons: 12,
    duration: "4 hours",
    level: "intermediate",
    topics: ["Component prompts", "State management", "Responsive design"],
  },
  {
    id: 3,
    title: "UI/UX Design Prompts",
    description: "Create design systems, wireframes, and prototypes",
    lessons: 10,
    duration: "3 hours",
    level: "intermediate",
    topics: ["Design tokens", "Accessibility", "Animation prompts"],
  },
  {
    id: 4,
    title: "Backend & APIs",
    description: "Craft prompts for servers, APIs, and integrations",
    lessons: 10,
    duration: "3.5 hours",
    level: "intermediate",
    topics: ["API design", "Authentication", "Error handling"],
  },
  {
    id: 5,
    title: "Database Design",
    description: "Generate schemas, migrations, and queries",
    lessons: 8,
    duration: "2.5 hours",
    level: "intermediate",
    topics: ["Schema design", "SQL generation", "Data modeling"],
  },
  {
    id: 6,
    title: "Deployment & DevOps",
    description: "Infrastructure as code and CI/CD pipelines",
    lessons: 8,
    duration: "2.5 hours",
    level: "advanced",
    topics: ["Docker prompts", "CI/CD configs", "Cloud deployment"],
  },
];

export function CurriculumPreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Structured <span className="text-gradient">Learning Path</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              8 comprehensive modules with hands-on exercises, real-world projects,
              and reusable prompt templates.
            </p>
          </div>
          <Button variant="outline" size="lg" asChild>
            <Link to="/curriculum">
              View Full Curriculum
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <Link
              key={module.id}
              to={`/curriculum/${module.id}`}
              className="group p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl font-bold text-muted-foreground/30 group-hover:text-primary/30 transition-colors">
                  {String(module.id).padStart(2, '0')}
                </span>
                <span className={`badge-${module.level}`}>
                  {module.level}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {module.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {module.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  {module.lessons} lessons
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {module.duration}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {module.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
