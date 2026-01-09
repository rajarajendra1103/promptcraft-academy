import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  CheckCircle,
  BookOpen,
  Play,
  Copy,
  ArrowRight,
} from "lucide-react";

// Sample lesson data
const lessonData = {
  "1-2": {
    moduleId: 1,
    moduleTitle: "Idea to Prompts",
    id: "1-2",
    title: "Anatomy of an Effective Prompt",
    duration: "20 min",
    objectives: [
      "Understand the five core components of effective prompts",
      "Learn how to structure prompts for consistent outputs",
      "Apply the CREST framework to any prompt",
    ],
    content: {
      sections: [
        {
          type: "text",
          title: "Introduction",
          content: `Every effective prompt shares a common anatomy. Understanding this structure allows you to craft prompts that consistently produce high-quality outputs, whether you're generating code, design specs, or creative assets.

In this lesson, we'll break down the **CREST framework** - a proven structure for prompt engineering that works across all major AI models.`,
        },
        {
          type: "text",
          title: "The CREST Framework",
          content: `**C - Context**: Set the scene. What's the background information the AI needs?

**R - Role**: Define who the AI should be. What expertise should it bring?

**E - Examples**: Show, don't just tell. Provide sample inputs and outputs.

**S - Specifics**: Be precise about requirements, constraints, and format.

**T - Tone**: Define the voice, style, and approach for the output.`,
        },
        {
          type: "example",
          title: "Example 1: Poor vs. Effective Prompt",
          before: `Make me a login form`,
          after: `# Context
Building a SaaS dashboard with existing Tailwind + React setup.

# Role
Senior React developer specializing in accessible forms.

# Task
Create a login form component with:
- Email and password fields
- Client-side validation
- Loading and error states
- "Remember me" checkbox
- "Forgot password" link

# Specifics
- Use React Hook Form + Zod
- TypeScript interfaces
- ARIA labels for accessibility
- Tailwind CSS styling

# Output Format
Single React component with type definitions`,
        },
        {
          type: "example",
          title: "Example 2: API Endpoint Prompt",
          before: `Create an API for users`,
          after: `# Context
Node.js/Express backend with PostgreSQL database.
Using Prisma ORM, JWT authentication already configured.

# Role
Backend developer focused on RESTful API design.

# Task
Create a user management API with these endpoints:

1. GET /api/users - List users with pagination
2. GET /api/users/:id - Get single user
3. POST /api/users - Create user
4. PATCH /api/users/:id - Update user
5. DELETE /api/users/:id - Soft delete user

# Specifics
- Input validation with Zod
- Proper HTTP status codes
- Error handling middleware pattern
- TypeScript types for request/response
- OpenAPI documentation comments

# Output
Express router module with all endpoints`,
        },
        {
          type: "example",
          title: "Example 3: Design System Prompt",
          before: `Make a color palette`,
          after: `# Context
Fintech startup targeting professionals aged 30-50.
Competitors use blue/green; we want to differentiate.

# Role
Senior UI designer with brand strategy experience.

# Task
Create a comprehensive color palette including:
- Primary brand color (warm, trustworthy, unique)
- Secondary accent color
- Neutral gray scale (10 steps)
- Semantic colors (success, warning, error, info)
- Dark mode variants

# Specifics
- WCAG AA contrast compliance
- HSL format for flexibility
- CSS custom properties format
- Tailwind config extension

# Tone
Modern, approachable, professional`,
        },
      ],
    },
    exercises: [
      {
        id: "ex1",
        title: "Exercise 1: Refactor a Weak Prompt",
        description:
          "Take this prompt and apply the CREST framework to improve it:",
        prompt: "Write a function to validate emails",
        hints: [
          "What programming language?",
          "What validation rules?",
          "Return type and error handling?",
        ],
      },
      {
        id: "ex2",
        title: "Exercise 2: Build From Scratch",
        description:
          "Create a CREST-structured prompt for generating a responsive navigation component with mobile menu support.",
        hints: [
          "Consider accessibility requirements",
          "Define the tech stack",
          "Specify responsive breakpoints",
        ],
      },
    ],
    prevLesson: { id: "1-1", title: "Introduction to Prompt Engineering" },
    nextLesson: { id: "1-3", title: "Problem Decomposition Strategies" },
  },
};

const Lesson = () => {
  const { lessonId } = useParams();
  const lesson = lessonData["1-2"]; // In real app, fetch based on lessonId

  if (!lesson) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p>Lesson not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/curriculum" className="hover:text-primary transition-colors">
              Curriculum
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to={`/curriculum/${lesson.moduleId}`} className="hover:text-primary transition-colors">
              {lesson.moduleTitle}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{lesson.title}</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_320px] gap-8">
            {/* Main Content */}
            <div>
              {/* Lesson Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="badge-beginner">beginner</span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {lesson.duration}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{lesson.title}</h1>
              </div>

              {/* Learning Objectives */}
              <div className="p-6 rounded-xl bg-gradient-card border border-border/50 mb-8">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Learning Objectives
                </h3>
                <ul className="space-y-3">
                  {lesson.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-beginner mt-0.5 flex-shrink-0" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lesson Content */}
              <div className="prose prose-invert max-w-none">
                {lesson.content.sections.map((section, i) => (
                  <div key={i} className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                    
                    {section.type === "text" && (
                      <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {section.content.split("**").map((part, j) =>
                          j % 2 === 1 ? (
                            <strong key={j} className="text-foreground font-semibold">
                              {part}
                            </strong>
                          ) : (
                            part
                          )
                        )}
                      </div>
                    )}

                    {section.type === "example" && (
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-destructive">❌ Before</span>
                          </div>
                          <div className="code-block text-muted-foreground">
                            {section.before}
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-beginner">✓ After (CREST Applied)</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => navigator.clipboard.writeText(section.after || "")}
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="prompt-block whitespace-pre-wrap">
                            {section.after}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Exercises */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Hands-On Exercises</h2>
                <div className="space-y-6">
                  {lesson.exercises.map((ex) => (
                    <div
                      key={ex.id}
                      className="p-6 rounded-xl bg-gradient-card border border-border/50"
                    >
                      <h3 className="text-lg font-semibold mb-2">{ex.title}</h3>
                      <p className="text-muted-foreground mb-4">{ex.description}</p>
                      <div className="code-block mb-4">{ex.prompt}</div>
                      <div className="mb-4">
                        <span className="text-sm font-medium">Hints:</span>
                        <ul className="mt-2 space-y-1">
                          {ex.hints.map((hint, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                              <ArrowRight className="h-3 w-3 text-primary" />
                              {hint}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button variant="outline" size="sm">
                        <Play className="h-4 w-4" />
                        Try in Sandbox
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-12 flex items-center justify-between pt-8 border-t border-border">
                {lesson.prevLesson ? (
                  <Link
                    to={`/lesson/${lesson.prevLesson.id}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                    <div>
                      <div className="text-xs">Previous</div>
                      <div className="font-medium">{lesson.prevLesson.title}</div>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
                {lesson.nextLesson && (
                  <Link
                    to={`/lesson/${lesson.nextLesson.id}`}
                    className="flex items-center gap-2 text-right text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div>
                      <div className="text-xs">Next</div>
                      <div className="font-medium">{lesson.nextLesson.title}</div>
                    </div>
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {/* Progress Card */}
                <div className="p-6 rounded-xl bg-gradient-card border border-border/50">
                  <h4 className="font-semibold mb-4">Module Progress</h4>
                  <div className="h-2 bg-muted rounded-full overflow-hidden mb-2">
                    <div className="h-full w-[25%] bg-gradient-to-r from-primary to-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground">2 of 8 lessons complete</p>
                </div>

                {/* Quick Actions */}
                <div className="p-6 rounded-xl bg-gradient-card border border-border/50">
                  <h4 className="font-semibold mb-4">Quick Actions</h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/sandbox">
                        <Play className="h-4 w-4" />
                        Open Sandbox
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/library">
                        <BookOpen className="h-4 w-4" />
                        Browse Templates
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Mark Complete */}
                <Button variant="hero" className="w-full">
                  <CheckCircle className="h-4 w-4" />
                  Mark as Complete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Lesson;
