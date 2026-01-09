import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { BookOpen, Clock, CheckCircle, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const modules = [
  {
    id: 1,
    title: "Idea to Prompts",
    description: "Transform vague ideas into structured, actionable prompts that produce reliable outputs.",
    lessons: [
      { id: "1-1", title: "Introduction to Prompt Engineering", duration: "15 min", completed: true },
      { id: "1-2", title: "Anatomy of an Effective Prompt", duration: "20 min", completed: true },
      { id: "1-3", title: "Problem Decomposition Strategies", duration: "25 min", completed: false },
      { id: "1-4", title: "Context and Role Setting", duration: "20 min", completed: false },
      { id: "1-5", title: "Output Format Specification", duration: "15 min", completed: false },
      { id: "1-6", title: "Iterative Refinement Techniques", duration: "25 min", completed: false },
      { id: "1-7", title: "Common Pitfalls and How to Avoid Them", duration: "20 min", completed: false },
      { id: "1-8", title: "Module Project: Build Your First Prompt System", duration: "45 min", completed: false },
    ],
    level: "beginner",
    unlocked: true,
  },
  {
    id: 2,
    title: "Frontend Mastery",
    description: "Generate React components, state management patterns, and complete UI systems.",
    lessons: [
      { id: "2-1", title: "Component Generation Basics", duration: "20 min", completed: false },
      { id: "2-2", title: "Props and TypeScript Interfaces", duration: "25 min", completed: false },
      { id: "2-3", title: "State Management Prompts", duration: "30 min", completed: false },
      { id: "2-4", title: "Hooks and Custom Logic", duration: "25 min", completed: false },
      { id: "2-5", title: "Responsive Design Prompts", duration: "20 min", completed: false },
      { id: "2-6", title: "Form Generation and Validation", duration: "30 min", completed: false },
      { id: "2-7", title: "Data Fetching Patterns", duration: "25 min", completed: false },
      { id: "2-8", title: "Error Handling and Loading States", duration: "20 min", completed: false },
      { id: "2-9", title: "Testing Component Prompts", duration: "25 min", completed: false },
      { id: "2-10", title: "Performance Optimization", duration: "25 min", completed: false },
      { id: "2-11", title: "Accessibility in Generated Code", duration: "20 min", completed: false },
      { id: "2-12", title: "Module Project: Complete Dashboard", duration: "60 min", completed: false },
    ],
    level: "intermediate",
    unlocked: true,
  },
  {
    id: 3,
    title: "UI/UX Design Prompts",
    description: "Create design systems, wireframes, color palettes, and beautiful interfaces.",
    lessons: [
      { id: "3-1", title: "Design Token Generation", duration: "20 min", completed: false },
      { id: "3-2", title: "Color Palette Creation", duration: "25 min", completed: false },
      { id: "3-3", title: "Typography Systems", duration: "20 min", completed: false },
      { id: "3-4", title: "Component Library Design", duration: "30 min", completed: false },
      { id: "3-5", title: "Layout and Spacing Systems", duration: "25 min", completed: false },
      { id: "3-6", title: "Animation and Motion Design", duration: "25 min", completed: false },
      { id: "3-7", title: "Accessibility-First Design", duration: "30 min", completed: false },
      { id: "3-8", title: "Dark Mode and Theming", duration: "25 min", completed: false },
      { id: "3-9", title: "Wireframe to Code Workflow", duration: "30 min", completed: false },
      { id: "3-10", title: "Module Project: Complete Design System", duration: "45 min", completed: false },
    ],
    level: "intermediate",
    unlocked: false,
  },
  {
    id: 4,
    title: "Backend & APIs",
    description: "Craft prompts for servers, REST/GraphQL APIs, and third-party integrations.",
    lessons: [
      { id: "4-1", title: "API Design Fundamentals", duration: "25 min", completed: false },
      { id: "4-2", title: "REST Endpoint Generation", duration: "30 min", completed: false },
      { id: "4-3", title: "GraphQL Schema Prompts", duration: "25 min", completed: false },
      { id: "4-4", title: "Authentication Patterns", duration: "30 min", completed: false },
      { id: "4-5", title: "Authorization and RBAC", duration: "25 min", completed: false },
      { id: "4-6", title: "Error Handling Standards", duration: "20 min", completed: false },
      { id: "4-7", title: "Rate Limiting and Security", duration: "25 min", completed: false },
      { id: "4-8", title: "Third-Party API Integration", duration: "30 min", completed: false },
      { id: "4-9", title: "Webhook Implementation", duration: "25 min", completed: false },
      { id: "4-10", title: "Module Project: Full API Stack", duration: "60 min", completed: false },
    ],
    level: "intermediate",
    unlocked: false,
  },
  {
    id: 5,
    title: "Database Design",
    description: "Generate schemas, migrations, queries, and data modeling patterns.",
    lessons: [
      { id: "5-1", title: "Data Modeling Basics", duration: "25 min", completed: false },
      { id: "5-2", title: "SQL Schema Generation", duration: "30 min", completed: false },
      { id: "5-3", title: "Relationships and Normalization", duration: "25 min", completed: false },
      { id: "5-4", title: "Index Optimization", duration: "20 min", completed: false },
      { id: "5-5", title: "Migration Prompts", duration: "25 min", completed: false },
      { id: "5-6", title: "Query Optimization", duration: "30 min", completed: false },
      { id: "5-7", title: "NoSQL Patterns", duration: "25 min", completed: false },
      { id: "5-8", title: "Module Project: Database System", duration: "45 min", completed: false },
    ],
    level: "intermediate",
    unlocked: false,
  },
  {
    id: 6,
    title: "Deployment & DevOps",
    description: "Infrastructure as code, CI/CD pipelines, and cloud deployment prompts.",
    lessons: [
      { id: "6-1", title: "Docker and Containerization", duration: "30 min", completed: false },
      { id: "6-2", title: "CI/CD Pipeline Generation", duration: "25 min", completed: false },
      { id: "6-3", title: "GitHub Actions Workflows", duration: "25 min", completed: false },
      { id: "6-4", title: "Environment Configuration", duration: "20 min", completed: false },
      { id: "6-5", title: "Cloud Platform Deployment", duration: "30 min", completed: false },
      { id: "6-6", title: "Monitoring and Logging", duration: "25 min", completed: false },
      { id: "6-7", title: "Security Best Practices", duration: "25 min", completed: false },
      { id: "6-8", title: "Module Project: Full Pipeline", duration: "45 min", completed: false },
    ],
    level: "advanced",
    unlocked: false,
  },
  {
    id: 7,
    title: "Asset Generation",
    description: "Create logos, images, icons, and audio assets with AI prompts.",
    lessons: [
      { id: "7-1", title: "Image Generation Fundamentals", duration: "25 min", completed: false },
      { id: "7-2", title: "Logo and Brand Identity", duration: "30 min", completed: false },
      { id: "7-3", title: "Icon Set Generation", duration: "25 min", completed: false },
      { id: "7-4", title: "Photography and Lifestyle", duration: "25 min", completed: false },
      { id: "7-5", title: "UI Illustrations", duration: "30 min", completed: false },
      { id: "7-6", title: "Audio and Music Prompts", duration: "25 min", completed: false },
      { id: "7-7", title: "Module Project: Brand Package", duration: "45 min", completed: false },
    ],
    level: "intermediate",
    unlocked: false,
  },
  {
    id: 8,
    title: "AI Tools & Advanced",
    description: "Master multiple AI models, chains, and advanced techniques.",
    lessons: [
      { id: "8-1", title: "Model Selection Strategies", duration: "25 min", completed: false },
      { id: "8-2", title: "Prompt Chaining", duration: "30 min", completed: false },
      { id: "8-3", title: "Multi-Model Workflows", duration: "30 min", completed: false },
      { id: "8-4", title: "RAG and Context Injection", duration: "35 min", completed: false },
      { id: "8-5", title: "Fine-Tuning Considerations", duration: "25 min", completed: false },
      { id: "8-6", title: "Cost Optimization", duration: "20 min", completed: false },
      { id: "8-7", title: "Capstone Project", duration: "90 min", completed: false },
    ],
    level: "advanced",
    unlocked: false,
  },
];

const Curriculum = () => {
  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessons = modules.reduce(
    (acc, m) => acc + m.lessons.filter((l) => l.completed).length,
    0
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Full <span className="text-gradient">Curriculum</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Master prompt engineering from fundamentals to production deployment.
              Each module includes hands-on exercises and real-world projects.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">{totalLessons} Lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-beginner" />
                <span className="text-muted-foreground">{completedLessons} Completed</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-12 p-6 rounded-xl bg-gradient-card border border-border/50">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium">Your Progress</span>
              <span className="text-sm text-muted-foreground">
                {completedLessons} of {totalLessons} lessons completed
              </span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                style={{ width: `${(completedLessons / totalLessons) * 100}%` }}
              />
            </div>
          </div>

          {/* Modules */}
          <div className="space-y-6">
            {modules.map((module, index) => (
              <div
                key={module.id}
                className={`rounded-xl border transition-all duration-300 ${
                  module.unlocked
                    ? "bg-gradient-card border-border/50 hover:border-primary/30"
                    : "bg-muted/30 border-border/30 opacity-75"
                }`}
              >
                {/* Module Header */}
                <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-bold text-muted-foreground/30">
                      {String(module.id).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-xl font-semibold">{module.title}</h2>
                        <span className={`badge-${module.level}`}>{module.level}</span>
                        {!module.unlocked && <Lock className="h-4 w-4 text-muted-foreground" />}
                      </div>
                      <p className="text-muted-foreground">{module.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">
                        {module.lessons.filter((l) => l.completed).length} / {module.lessons.length} lessons
                      </div>
                    </div>
                    {module.unlocked ? (
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/lesson/${module.lessons[0].id}`}>
                          Continue
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" disabled>
                        <Lock className="h-4 w-4" />
                        Locked
                      </Button>
                    )}
                  </div>
                </div>

                {/* Lessons List */}
                {module.unlocked && (
                  <div className="border-t border-border/50 divide-y divide-border/30">
                    {module.lessons.map((lesson) => (
                      <Link
                        key={lesson.id}
                        to={`/lesson/${lesson.id}`}
                        className="flex items-center justify-between px-6 py-4 hover:bg-secondary/50 transition-colors group"
                      >
                        <div className="flex items-center gap-4">
                          {lesson.completed ? (
                            <CheckCircle className="h-5 w-5 text-beginner" />
                          ) : (
                            <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/30" />
                          )}
                          <span className={lesson.completed ? "text-muted-foreground" : ""}>
                            {lesson.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {lesson.duration}
                          </span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Curriculum;
