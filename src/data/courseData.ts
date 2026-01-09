// Centralized course data - Open Source and Free to Use

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  lessons: Lesson[];
  level: "beginner" | "intermediate" | "advanced";
}

export interface PromptTemplate {
  id: string;
  title: string;
  description: string;
  category: string;
  level: "beginner" | "intermediate" | "advanced";
  template: string;
  variables: string[];
}

// All course modules with lessons
export const modules: Module[] = [
  {
    id: 1,
    title: "Idea to Prompts",
    description: "Transform ideas into structured, actionable prompts.",
    lessons: [
      { id: "1-1", title: "Introduction to Prompt Engineering", duration: "15 min", completed: false },
      { id: "1-2", title: "Anatomy of an Effective Prompt", duration: "20 min", completed: false },
      { id: "1-3", title: "Problem Decomposition", duration: "25 min", completed: false },
      { id: "1-4", title: "Context and Role Setting", duration: "20 min", completed: false },
      { id: "1-5", title: "Output Format Specification", duration: "15 min", completed: false },
    ],
    level: "beginner",
  },
  {
    id: 2,
    title: "Frontend Prompts",
    description: "Generate React components, state, and UI systems.",
    lessons: [
      { id: "2-1", title: "Component Generation Basics", duration: "20 min", completed: false },
      { id: "2-2", title: "Props and TypeScript", duration: "25 min", completed: false },
      { id: "2-3", title: "State Management Prompts", duration: "30 min", completed: false },
      { id: "2-4", title: "Form Generation", duration: "25 min", completed: false },
    ],
    level: "intermediate",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Create design systems, colors, and typography.",
    lessons: [
      { id: "3-1", title: "Design Token Generation", duration: "20 min", completed: false },
      { id: "3-2", title: "Color Palette Creation", duration: "25 min", completed: false },
      { id: "3-3", title: "Typography Systems", duration: "20 min", completed: false },
    ],
    level: "intermediate",
  },
  {
    id: 4,
    title: "Backend & APIs",
    description: "Prompts for servers, REST APIs, and integrations.",
    lessons: [
      { id: "4-1", title: "API Design Fundamentals", duration: "25 min", completed: false },
      { id: "4-2", title: "REST Endpoint Generation", duration: "30 min", completed: false },
      { id: "4-3", title: "Authentication Patterns", duration: "30 min", completed: false },
    ],
    level: "intermediate",
  },
  {
    id: 5,
    title: "Database Design",
    description: "Generate schemas, migrations, and queries.",
    lessons: [
      { id: "5-1", title: "Data Modeling Basics", duration: "25 min", completed: false },
      { id: "5-2", title: "SQL Schema Generation", duration: "30 min", completed: false },
      { id: "5-3", title: "Query Optimization", duration: "25 min", completed: false },
    ],
    level: "intermediate",
  },
  {
    id: 6,
    title: "DevOps & Deployment",
    description: "Docker, CI/CD, and cloud deployment prompts.",
    lessons: [
      { id: "6-1", title: "Docker Configuration", duration: "30 min", completed: false },
      { id: "6-2", title: "CI/CD Pipelines", duration: "25 min", completed: false },
      { id: "6-3", title: "Cloud Deployment", duration: "30 min", completed: false },
    ],
    level: "advanced",
  },
];

// All lesson content
export const lessonContent: Record<string, {
  objectives: string[];
  content: string;
  examples: { before: string; after: string }[];
}> = {
  "1-1": {
    objectives: [
      "Understand what prompt engineering is",
      "Learn why good prompts matter",
      "See examples of effective prompts",
    ],
    content: `Prompt engineering is the practice of crafting inputs to AI models that produce reliable, high-quality outputs.

Good prompts are:
- Clear and specific
- Well-structured
- Include context and examples

Bad prompts are vague and leave too much to interpretation.`,
    examples: [
      {
        before: "Make a website",
        after: `# Task
Create a landing page for a SaaS product

# Requirements
- Hero section with headline
- Features grid (3 columns)
- Call-to-action button
- Responsive design

# Tech
React, Tailwind CSS`,
      },
    ],
  },
  "1-2": {
    objectives: [
      "Learn the CREST framework",
      "Structure prompts for consistent outputs",
      "Apply the framework to any prompt",
    ],
    content: `The CREST Framework:

C - Context: Background information
R - Role: Who the AI should be
E - Examples: Sample inputs/outputs
S - Specifics: Requirements and constraints
T - Tone: Style and voice`,
    examples: [
      {
        before: "Write a login form",
        after: `# Context
Building a SaaS dashboard with React + Tailwind

# Role
Senior React developer

# Task
Create a login form with:
- Email and password fields
- Validation
- Error states

# Output
TypeScript React component`,
      },
    ],
  },
};

// Prompt templates for library
export const promptTemplates: PromptTemplate[] = [
  {
    id: "1",
    title: "React Component",
    description: "Generate a TypeScript React component",
    category: "frontend",
    level: "beginner",
    template: `# Role
Senior React developer

# Task
Create a component: {{component_name}}

# Requirements
- TypeScript
- Tailwind CSS
- Responsive

# Props
{{props}}`,
    variables: ["component_name", "props"],
  },
  {
    id: "2",
    title: "REST API Endpoint",
    description: "Generate a REST API endpoint",
    category: "backend",
    level: "intermediate",
    template: `# Task
Create API endpoint: {{endpoint}}

# Method
{{method}}

# Requirements
- Validation
- Error handling
- TypeScript`,
    variables: ["endpoint", "method"],
  },
  {
    id: "3",
    title: "SQL Schema",
    description: "Generate database schema",
    category: "backend",
    level: "intermediate",
    template: `# Database
{{database}}

# Task
Design schema for: {{domain}}

# Include
- Relationships
- Indexes
- Timestamps`,
    variables: ["database", "domain"],
  },
  {
    id: "4",
    title: "Design Tokens",
    description: "Generate a design token system",
    category: "design",
    level: "beginner",
    template: `# Brand
{{brand}}

# Task
Create tokens for:
- Colors
- Typography
- Spacing

# Format
CSS variables`,
    variables: ["brand"],
  },
  {
    id: "5",
    title: "Docker Setup",
    description: "Generate Docker configuration",
    category: "devops",
    level: "intermediate",
    template: `# App
{{app_type}}

# Task
Create:
- Dockerfile
- docker-compose.yml

# Requirements
- Production optimized
- Multi-stage build`,
    variables: ["app_type"],
  },
  {
    id: "6",
    title: "Form with Validation",
    description: "Generate a form with Zod validation",
    category: "frontend",
    level: "intermediate",
    template: `# Task
Create form: {{form_purpose}}

# Fields
{{fields}}

# Requirements
- React Hook Form
- Zod validation
- Error messages`,
    variables: ["form_purpose", "fields"],
  },
];

// Helper to get lesson by ID
export function getLesson(lessonId: string) {
  for (const module of modules) {
    const lesson = module.lessons.find(l => l.id === lessonId);
    if (lesson) {
      return {
        ...lesson,
        moduleId: module.id,
        moduleTitle: module.title,
        level: module.level,
        content: lessonContent[lessonId],
      };
    }
  }
  return null;
}

// Helper to get adjacent lessons
export function getAdjacentLessons(lessonId: string) {
  const allLessons = modules.flatMap(m => m.lessons);
  const index = allLessons.findIndex(l => l.id === lessonId);
  
  return {
    prev: index > 0 ? allLessons[index - 1] : null,
    next: index < allLessons.length - 1 ? allLessons[index + 1] : null,
  };
}

// Stats
export const stats = {
  totalLessons: modules.reduce((acc, m) => acc + m.lessons.length, 0),
  totalModules: modules.length,
  totalTemplates: promptTemplates.length,
};
