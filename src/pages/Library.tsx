import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Search,
  Filter,
  Copy,
  ArrowUpRight,
  BookOpen,
  Code2,
  Palette,
  Database,
  Rocket,
  Image,
  Sparkles,
} from "lucide-react";

const categories = [
  { id: "all", label: "All Templates", icon: Sparkles },
  { id: "frontend", label: "Frontend", icon: Code2 },
  { id: "design", label: "UI/UX", icon: Palette },
  { id: "backend", label: "Backend", icon: Database },
  { id: "devops", label: "DevOps", icon: Rocket },
  { id: "assets", label: "Assets", icon: Image },
];

const prompts = [
  {
    id: "1",
    title: "React Component Generator",
    description: "Generate a TypeScript React component with props, types, and styling",
    category: "frontend",
    level: "beginner",
    uses: 1243,
    template: `# Role
You are a senior React developer specializing in TypeScript.

# Task
Create a React functional component for: {{component_name}}

# Requirements
- TypeScript with proper interfaces
- Tailwind CSS styling
- Responsive design
- Accessibility attributes
- JSDoc comments

# Props
{{props_list}}

# Output
Complete TypeScript React component`,
    variables: ["component_name", "props_list"],
  },
  {
    id: "2",
    title: "REST API Endpoint",
    description: "Generate a complete REST API endpoint with validation and error handling",
    category: "backend",
    level: "intermediate",
    uses: 892,
    template: `# Role
You are a backend developer specializing in Node.js/Express.

# Task
Create a REST API endpoint for: {{endpoint_purpose}}

# Method
{{http_method}}

# Requirements
- Input validation
- Error handling
- TypeScript types
- OpenAPI documentation

# Output
Complete endpoint code with types`,
    variables: ["endpoint_purpose", "http_method"],
  },
  {
    id: "3",
    title: "Database Schema Design",
    description: "Generate SQL schema with relationships and indexes",
    category: "backend",
    level: "intermediate",
    uses: 756,
    template: `# Database
{{database_type}}

# Task
Design a schema for: {{domain_description}}

# Requirements
- Proper normalization
- Foreign key relationships
- Indexes for common queries
- Timestamps and soft deletes

# Output
SQL DDL statements with comments`,
    variables: ["database_type", "domain_description"],
  },
  {
    id: "4",
    title: "Design System Tokens",
    description: "Generate a complete design token system with colors, typography, and spacing",
    category: "design",
    level: "beginner",
    uses: 634,
    template: `# Brand
{{brand_description}}

# Style
{{design_style}}

# Task
Create a design token system including:
- Color palette (primary, secondary, neutral, semantic)
- Typography scale
- Spacing system
- Border radius
- Shadow definitions

# Format
CSS custom properties`,
    variables: ["brand_description", "design_style"],
  },
  {
    id: "5",
    title: "Docker Configuration",
    description: "Generate Dockerfile and docker-compose for your application",
    category: "devops",
    level: "intermediate",
    uses: 521,
    template: `# Application
{{app_type}}

# Framework
{{framework}}

# Task
Create Docker configuration including:
- Multi-stage Dockerfile
- docker-compose.yml
- .dockerignore
- Health checks

# Requirements
- Production optimized
- Security best practices
- Environment variables

# Output
All configuration files`,
    variables: ["app_type", "framework"],
  },
  {
    id: "6",
    title: "Logo Generation",
    description: "Generate logo concepts with specific style and mood",
    category: "assets",
    level: "beginner",
    uses: 1456,
    template: `# Brand
{{brand_name}}

# Industry
{{industry}}

# Style
{{style_preference}}

# Colors
{{color_preferences}}

# Task
Generate a logo that:
- Represents the brand values
- Works at multiple sizes
- Has a modern aesthetic
- Is memorable and unique

# Output
Detailed image generation prompt`,
    variables: ["brand_name", "industry", "style_preference", "color_preferences"],
  },
  {
    id: "7",
    title: "Form with Validation",
    description: "Generate a complete form component with Zod validation",
    category: "frontend",
    level: "intermediate",
    uses: 987,
    template: `# Role
You are a React developer specializing in forms.

# Task
Create a form for: {{form_purpose}}

# Fields
{{field_list}}

# Requirements
- React Hook Form integration
- Zod schema validation
- Error messages
- Loading states
- Success feedback

# Output
Complete form component with schema`,
    variables: ["form_purpose", "field_list"],
  },
  {
    id: "8",
    title: "CI/CD Pipeline",
    description: "Generate GitHub Actions workflow for testing and deployment",
    category: "devops",
    level: "advanced",
    uses: 432,
    template: `# Project Type
{{project_type}}

# Deployment Target
{{deployment_target}}

# Task
Create a GitHub Actions workflow that:
- Runs on push and PR
- Lints and tests code
- Builds the application
- Deploys to {{deployment_target}}

# Requirements
- Caching for speed
- Environment secrets
- Status notifications

# Output
Complete .github/workflows/*.yml`,
    variables: ["project_type", "deployment_target"],
  },
];

const Library = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedPrompt, setSelectedPrompt] = useState<typeof prompts[0] | null>(null);

  const filteredPrompts = prompts.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Prompt <span className="text-gradient">Library</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              200+ battle-tested prompt templates for every stage of development.
              Copy, customize, and ship faster.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search templates..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-12 pl-10 pr-4 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                <cat.icon className="h-4 w-4" />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrompts.map((prompt) => (
              <div
                key={prompt.id}
                className="group p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedPrompt(prompt)}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`badge-${prompt.level}`}>{prompt.level}</span>
                  <span className="text-xs text-muted-foreground">
                    {prompt.uses.toLocaleString()} uses
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {prompt.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{prompt.description}</p>
                <div className="flex flex-wrap gap-2">
                  {prompt.variables.slice(0, 3).map((v) => (
                    <span
                      key={v}
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-primary font-mono"
                    >
                      {`{{${v}}}`}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Selected Prompt Modal */}
          {selectedPrompt && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedPrompt(null)}
            >
              <div
                className="w-full max-w-2xl max-h-[80vh] overflow-auto rounded-xl bg-card border border-border shadow-elevated animate-scale-in"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 border-b border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className={`badge-${selectedPrompt.level} mb-2`}>
                        {selectedPrompt.level}
                      </span>
                      <h2 className="text-2xl font-bold">{selectedPrompt.title}</h2>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedPrompt(null)}
                    >
                      ✕
                    </Button>
                  </div>
                  <p className="text-muted-foreground">{selectedPrompt.description}</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Variables</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPrompt.variables.map((v) => (
                        <span
                          key={v}
                          className="text-xs px-2 py-1 rounded-md bg-secondary text-primary font-mono"
                        >
                          {`{{${v}}}`}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Template</h4>
                    <div className="prompt-block">
                      <pre className="whitespace-pre-wrap text-sm">{selectedPrompt.template}</pre>
                    </div>
                  </div>
                </div>
                <div className="p-6 border-t border-border flex justify-end gap-3">
                  <Button
                    variant="outline"
                    onClick={() => navigator.clipboard.writeText(selectedPrompt.template)}
                  >
                    <Copy className="h-4 w-4" />
                    Copy Template
                  </Button>
                  <Button variant="hero">
                    <ArrowUpRight className="h-4 w-4" />
                    Open in Sandbox
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Library;
