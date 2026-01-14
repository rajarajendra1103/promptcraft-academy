// ============================================
// PromptCraft Academy - Course Data
// Free and Open Source
// ============================================

// Stats for display
export const stats = {
  totalCourses: 3,
  totalModules: 26,
  totalLessons: 234,
  totalTemplates: 500,
  hours: 60,
};

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  level: "beginner" | "intermediate" | "advanced";
  prerequisites: string[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  level: "beginner" | "intermediate" | "advanced";
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  modules: Module[];
}

export interface LessonExample {
  title: string;
  before: string;
  after: string;
  explanation: string;
}

export interface KeywordDefinition {
  term: string;
  meaning: string;
  usage: string;
}

export interface LessonLink {
  type: "video" | "article" | "docs";
  title: string;
  url: string;
}

export interface LessonContent {
  objectives: string[];
  summary: string;
  theory: string;
  examples: LessonExample[];
  keywords: KeywordDefinition[];
  links: LessonLink[];
  instructorNotes: string;
}

// ============================================
// COURSES DATA
// ============================================

export const courses: Course[] = [
  // ==========================================
  // COURSE 1: WEB DEVELOPMENT
  // ==========================================
  {
    id: "web-development",
    title: "Web Development",
    description: "Master web development with AI - from prompts to full-stack applications.",
    icon: "Globe",
    color: "primary",
    modules: [
      {
        id: "WP-IP",
        title: "Idea → Prompts (Website Planning & Structure)",
        description: "Transform website ideas into structured prompts and planning documents.",
        level: "beginner",
        lessons: [
          { id: "WP-IP-01", title: "Introduction to Prompt Engineering", duration: "20 min", completed: false, level: "beginner", prerequisites: [] },
          { id: "WP-IP-02", title: "Anatomy of an Effective Prompt", duration: "25 min", completed: false, level: "beginner", prerequisites: ["WP-IP-01"] },
          { id: "WP-IP-03", title: "Converting a Website Idea into a Clear Goal", duration: "20 min", completed: false, level: "beginner", prerequisites: ["WP-IP-02"] },
          { id: "WP-IP-04", title: "Website Type Identification", duration: "25 min", completed: false, level: "beginner", prerequisites: ["WP-IP-03"] },
          { id: "WP-IP-05", title: "Generating Feature Lists for a Website", duration: "20 min", completed: false, level: "beginner", prerequisites: ["WP-IP-04"] },
          { id: "WP-IP-06", title: "Creating User Personas with Prompts", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["WP-IP-05"] },
          { id: "WP-IP-07", title: "Website Sitemap & Page Structure Generation", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["WP-IP-06"] },
          { id: "WP-IP-08", title: "Writing Functional Requirements using AI", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["WP-IP-07"] },
          { id: "WP-IP-09", title: "Content Strategy & Page Copy Planning", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["WP-IP-08"] },
          { id: "WP-IP-10", title: "Breaking Website into Development Tasks", duration: "25 min", completed: false, level: "advanced", prerequisites: ["WP-IP-09"] },
          { id: "WP-IP-11", title: "SEO Requirements & Keywords using Prompts", duration: "30 min", completed: false, level: "advanced", prerequisites: ["WP-IP-10"] },
        ],
      },
      {
        id: "WP-FE",
        title: "Frontend Prompts (UI Coding)",
        description: "Generate production-ready frontend code with AI prompts.",
        level: "intermediate",
        lessons: [
          { id: "WP-FE-01", title: "Generating HTML Structure using Prompts", duration: "25 min", completed: false, level: "beginner", prerequisites: ["WP-IP-02"] },
          { id: "WP-FE-02", title: "CSS Styling with Tailwind / Bootstrap", duration: "30 min", completed: false, level: "beginner", prerequisites: ["WP-FE-01"] },
          { id: "WP-FE-03", title: "Responsive Design Prompts", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["WP-FE-02"] },
          { id: "WP-FE-04", title: "React / Vue Component Generation", duration: "35 min", completed: false, level: "intermediate", prerequisites: ["WP-FE-03"] },
          { id: "WP-FE-05", title: "Navigation Bar & Footer Design", duration: "25 min", completed: false, level: "beginner", prerequisites: ["WP-FE-02"] },
          { id: "WP-FE-06", title: "Form Creation & Validation", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["WP-FE-04"] },
          { id: "WP-FE-07", title: "Animations & Scroll Effects", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["WP-FE-06"] },
          { id: "WP-FE-08", title: "Accessibility in Frontend (ARIA, contrast)", duration: "30 min", completed: false, level: "advanced", prerequisites: ["WP-FE-07"] },
          { id: "WP-FE-09", title: "Performance Optimization Prompts", duration: "30 min", completed: false, level: "advanced", prerequisites: ["WP-FE-08"] },
        ],
      },
      {
        id: "WP-UX",
        title: "UI/UX Prompts (Design Experience)",
        description: "Create stunning user experiences with AI-assisted design.",
        level: "intermediate",
        lessons: [
          { id: "WP-UX-01", title: "Website Wireframe Creation", duration: "25 min", completed: false, level: "beginner", prerequisites: ["WP-IP-07"] },
          { id: "WP-UX-02", title: "Design System for Websites", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["WP-UX-01"] },
          { id: "WP-UX-03", title: "Color Palette & Typography Selection", duration: "25 min", completed: false, level: "beginner", prerequisites: ["WP-UX-01"] },
          { id: "WP-UX-04", title: "Figma Layout Prompting", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["WP-UX-02"] },
          { id: "WP-UX-05", title: "Hero Section Design Prompts", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["WP-UX-03"] },
          { id: "WP-UX-06", title: "Conversion-Optimized Layouts", duration: "30 min", completed: false, level: "advanced", prerequisites: ["WP-UX-05"] },
          { id: "WP-UX-07", title: "Accessibility & UX Testing", duration: "25 min", completed: false, level: "advanced", prerequisites: ["WP-UX-06"] },
          { id: "WP-UX-08", title: "UX Copywriting for Web", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["WP-UX-05"] },
          { id: "WP-UX-09", title: "Usability Audit using AI", duration: "30 min", completed: false, level: "advanced", prerequisites: ["WP-UX-07"] },
        ],
      },
      {
        id: "WP-BE",
        title: "Backend Prompts & Connections",
        description: "Build robust backend systems and APIs with AI assistance.",
        level: "intermediate",
        lessons: [
          { id: "WP-BE-01", title: "Website Backend Architecture Design", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["WP-IP-08"] },
          { id: "WP-BE-02", title: "API Design for Forms & Auth", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["WP-BE-01"] },
          { id: "WP-BE-03", title: "Authentication Systems", duration: "35 min", completed: false, level: "intermediate", prerequisites: ["WP-BE-02"] },
          { id: "WP-BE-04", title: "CMS Backend Design", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["WP-BE-03"] },
          { id: "WP-BE-05", title: "Connecting Frontend to Backend", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["WP-BE-04"] },
          { id: "WP-BE-06", title: "Contact Form & Email Integration", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["WP-BE-05"] },
          { id: "WP-BE-07", title: "Payment Gateway Prompting", duration: "35 min", completed: false, level: "advanced", prerequisites: ["WP-BE-06"] },
          { id: "WP-BE-08", title: "Security & Input Validation", duration: "30 min", completed: false, level: "advanced", prerequisites: ["WP-BE-07"] },
          { id: "WP-BE-09", title: "Backend Testing Prompts", duration: "30 min", completed: false, level: "advanced", prerequisites: ["WP-BE-08"] },
        ],
      },
      {
        id: "WP-DB",
        title: "DB Design & Prompts (Website Data)",
        description: "Design and manage databases for web applications.",
        level: "intermediate",
        lessons: [
          { id: "WP-DB-01", title: "Identifying Website Data Entities", duration: "25 min", completed: false, level: "beginner", prerequisites: ["WP-BE-01"] },
          { id: "WP-DB-02", title: "SQL Schema for Websites", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["WP-DB-01"] },
          { id: "WP-DB-03", title: "CMS Database Design", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["WP-DB-02"] },
          { id: "WP-DB-04", title: "NoSQL for Blogs & Content Sites", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["WP-DB-02"] },
          { id: "WP-DB-05", title: "User Data Storage & Privacy", duration: "30 min", completed: false, level: "advanced", prerequisites: ["WP-DB-03"] },
          { id: "WP-DB-06", title: "Query Optimization", duration: "30 min", completed: false, level: "advanced", prerequisites: ["WP-DB-04"] },
          { id: "WP-DB-07", title: "Migrations & Versioning", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["WP-DB-02"] },
          { id: "WP-DB-08", title: "Analytics Data Storage", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["WP-DB-05"] },
          { id: "WP-DB-09", title: "Backup & Recovery Prompts", duration: "30 min", completed: false, level: "advanced", prerequisites: ["WP-DB-06"] },
        ],
      },
      {
        id: "WP-DP",
        title: "Deployment & Tooling (Website Hosting)",
        description: "Deploy and maintain production websites with CI/CD.",
        level: "advanced",
        lessons: [
          { id: "WP-DP-01", title: "Preparing Website for Deployment", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["WP-FE-09"] },
          { id: "WP-DP-02", title: "Generating Dockerfile", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["WP-DP-01"] },
          { id: "WP-DP-03", title: "CI/CD for Websites", duration: "35 min", completed: false, level: "advanced", prerequisites: ["WP-DP-02"] },
          { id: "WP-DP-04", title: "Deploying to Vercel / Netlify", duration: "25 min", completed: false, level: "beginner", prerequisites: ["WP-DP-01"] },
          { id: "WP-DP-05", title: "Hosting with Custom Domains", duration: "20 min", completed: false, level: "beginner", prerequisites: ["WP-DP-04"] },
          { id: "WP-DP-06", title: "Environment Variables", duration: "20 min", completed: false, level: "intermediate", prerequisites: ["WP-DP-04"] },
          { id: "WP-DP-07", title: "SSL & Security Setup", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["WP-DP-05"] },
          { id: "WP-DP-08", title: "Website Monitoring & Logs", duration: "25 min", completed: false, level: "advanced", prerequisites: ["WP-DP-07"] },
          { id: "WP-DP-09", title: "Scaling & Performance Tuning", duration: "30 min", completed: false, level: "advanced", prerequisites: ["WP-DP-08"] },
        ],
      },
      {
        id: "WP-AS",
        title: "Assets & Creative Prompts (Website Branding)",
        description: "Generate visual assets and branding elements with AI.",
        level: "beginner",
        lessons: [
          { id: "WP-AS-01", title: "Website Logo Design Prompts", duration: "25 min", completed: false, level: "beginner", prerequisites: [] },
          { id: "WP-AS-02", title: "Hero Image Generation", duration: "25 min", completed: false, level: "beginner", prerequisites: ["WP-AS-01"] },
          { id: "WP-AS-03", title: "Icon Set Creation", duration: "20 min", completed: false, level: "beginner", prerequisites: ["WP-AS-01"] },
          { id: "WP-AS-04", title: "Background Patterns & Textures", duration: "20 min", completed: false, level: "intermediate", prerequisites: ["WP-AS-02"] },
          { id: "WP-AS-05", title: "Illustrations for Sections", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["WP-AS-03"] },
          { id: "WP-AS-06", title: "Social Media Preview Images", duration: "20 min", completed: false, level: "beginner", prerequisites: ["WP-AS-02"] },
          { id: "WP-AS-07", title: "Favicon & App Icon Generation", duration: "15 min", completed: false, level: "beginner", prerequisites: ["WP-AS-01"] },
          { id: "WP-AS-08", title: "Image Optimization for Web", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["WP-AS-05"] },
          { id: "WP-AS-09", title: "Copyright & Licensing Awareness", duration: "20 min", completed: false, level: "beginner", prerequisites: [] },
        ],
      },
      {
        id: "WP-AI",
        title: "AI Tools & Advanced Usage",
        description: "Master AI development tools for web projects.",
        level: "intermediate",
        lessons: [
          { id: "WP-AI-01", title: "Lovable - AI Web App Builder", duration: "30 min", completed: false, level: "beginner", prerequisites: [] },
          { id: "WP-AI-02", title: "Bolt.new - Instant Full-Stack Apps", duration: "25 min", completed: false, level: "beginner", prerequisites: [] },
          { id: "WP-AI-03", title: "Cursor - AI Code Editor", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["WP-AI-01"] },
          { id: "WP-AI-04", title: "Emergent AI & Anti Gravity", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["WP-AI-01"] },
          { id: "WP-AI-05", title: "Replit AI & Windsurf", duration: "25 min", completed: false, level: "beginner", prerequisites: [] },
          { id: "WP-AI-06", title: "ChatGPT - Conversational AI", duration: "30 min", completed: false, level: "beginner", prerequisites: [] },
          { id: "WP-AI-07", title: "Gemini AI & Google AI Studio", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["WP-AI-06"] },
          { id: "WP-AI-08", title: "Grok AI by xAI", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["WP-AI-06"] },
          { id: "WP-AI-09", title: "AI Tools Comparison & Workflow", duration: "30 min", completed: false, level: "advanced", prerequisites: ["WP-AI-03", "WP-AI-07"] },
        ],
      },
    ],
  },

  // ==========================================
  // COURSE 2: APP DEVELOPMENT
  // ==========================================
  {
    id: "app-development",
    title: "App Development",
    description: "Build mobile and cross-platform applications using AI tools.",
    icon: "Smartphone",
    color: "accent",
    modules: [
      {
        id: "AP-IP",
        title: "Idea → Prompts",
        description: "Transform app ideas into actionable development plans.",
        level: "beginner",
        lessons: [
          { id: "AP-IP-01", title: "Introduction to Prompt Engineering", duration: "20 min", completed: false, level: "beginner", prerequisites: [] },
          { id: "AP-IP-02", title: "Anatomy of an Effective Prompt", duration: "25 min", completed: false, level: "beginner", prerequisites: ["AP-IP-01"] },
          { id: "AP-IP-03", title: "Turning an App Idea into a Problem Statement", duration: "25 min", completed: false, level: "beginner", prerequisites: ["AP-IP-02"] },
          { id: "AP-IP-04", title: "Idea to Feature List using Prompts", duration: "20 min", completed: false, level: "beginner", prerequisites: ["AP-IP-03"] },
          { id: "AP-IP-05", title: "Features to User Stories & Acceptance Criteria", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["AP-IP-04"] },
          { id: "AP-IP-06", title: "Breaking Features into Technical Tasks", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["AP-IP-05"] },
          { id: "AP-IP-07", title: "Writing Constraints & Scope in Prompts", duration: "20 min", completed: false, level: "intermediate", prerequisites: ["AP-IP-06"] },
          { id: "AP-IP-08", title: "Creating a PRD using AI", duration: "35 min", completed: false, level: "advanced", prerequisites: ["AP-IP-07"] },
          { id: "AP-IP-09", title: "App Flow & Screen Mapping", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["AP-IP-08"] },
          { id: "AP-IP-10", title: "Estimating Time, Cost, and Resources", duration: "25 min", completed: false, level: "advanced", prerequisites: ["AP-IP-09"] },
          { id: "AP-IP-11", title: "Validating Ideas with Market Research", duration: "30 min", completed: false, level: "advanced", prerequisites: ["AP-IP-10"] },
        ],
      },
      {
        id: "AP-FE",
        title: "Frontend Prompts",
        description: "Generate mobile and cross-platform UI components.",
        level: "intermediate",
        lessons: [
          { id: "AP-FE-01", title: "Generating App Layouts (Web & Mobile)", duration: "30 min", completed: false, level: "beginner", prerequisites: ["AP-IP-09"] },
          { id: "AP-FE-02", title: "React / Flutter / HTML Components", duration: "35 min", completed: false, level: "intermediate", prerequisites: ["AP-FE-01"] },
          { id: "AP-FE-03", title: "State Management Prompts", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["AP-FE-02"] },
          { id: "AP-FE-04", title: "Responsive Design Prompts", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["AP-FE-02"] },
          { id: "AP-FE-05", title: "Accessibility in Frontend", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["AP-FE-04"] },
          { id: "AP-FE-06", title: "Animations & Micro-interactions", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["AP-FE-04"] },
          { id: "AP-FE-07", title: "API Integration Prompts", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["AP-FE-03"] },
          { id: "AP-FE-08", title: "Frontend Testing Prompts", duration: "30 min", completed: false, level: "advanced", prerequisites: ["AP-FE-07"] },
          { id: "AP-FE-09", title: "Performance Optimization Prompts", duration: "30 min", completed: false, level: "advanced", prerequisites: ["AP-FE-08"] },
        ],
      },
      {
        id: "AP-UX",
        title: "UI/UX Prompts",
        description: "Design intuitive and beautiful app interfaces.",
        level: "intermediate",
        lessons: [
          { id: "AP-UX-01", title: "App Wireframes using Prompts", duration: "25 min", completed: false, level: "beginner", prerequisites: ["AP-IP-09"] },
          { id: "AP-UX-02", title: "Design System Creation", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["AP-UX-01"] },
          { id: "AP-UX-03", title: "Color Palette & Typography Generation", duration: "25 min", completed: false, level: "beginner", prerequisites: ["AP-UX-01"] },
          { id: "AP-UX-04", title: "Component Design (Buttons, Cards, Forms)", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["AP-UX-02"] },
          { id: "AP-UX-05", title: "Figma Prompting for UI Layouts", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["AP-UX-03"] },
          { id: "AP-UX-06", title: "UX Copywriting (Micro text, Errors)", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["AP-UX-04"] },
          { id: "AP-UX-07", title: "Accessibility & Contrast Checking", duration: "25 min", completed: false, level: "advanced", prerequisites: ["AP-UX-04"] },
          { id: "AP-UX-08", title: "User Journey & Experience Mapping", duration: "30 min", completed: false, level: "advanced", prerequisites: ["AP-UX-06"] },
          { id: "AP-UX-09", title: "Usability Testing Prompts", duration: "30 min", completed: false, level: "advanced", prerequisites: ["AP-UX-08"] },
        ],
      },
      {
        id: "AP-BE",
        title: "Backend Prompts & Connections",
        description: "Build scalable app backends and APIs.",
        level: "intermediate",
        lessons: [
          { id: "AP-BE-01", title: "Designing App Backend Architecture", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["AP-IP-08"] },
          { id: "AP-BE-02", title: "REST API Design Prompts", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["AP-BE-01"] },
          { id: "AP-BE-03", title: "Authentication & Authorization", duration: "35 min", completed: false, level: "intermediate", prerequisites: ["AP-BE-02"] },
          { id: "AP-BE-04", title: "CRUD API Generation", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["AP-BE-02"] },
          { id: "AP-BE-05", title: "Error Handling & Validation", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["AP-BE-04"] },
          { id: "AP-BE-06", title: "Connecting Frontend to Backend", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["AP-BE-05"] },
          { id: "AP-BE-07", title: "Third-Party API Integration", duration: "30 min", completed: false, level: "advanced", prerequisites: ["AP-BE-06"] },
          { id: "AP-BE-08", title: "Backend Testing Prompts", duration: "30 min", completed: false, level: "advanced", prerequisites: ["AP-BE-07"] },
          { id: "AP-BE-09", title: "Security Best Practices with AI", duration: "30 min", completed: false, level: "advanced", prerequisites: ["AP-BE-08"] },
        ],
      },
      {
        id: "AP-DB",
        title: "DB Design & Prompts",
        description: "Design and optimize app databases.",
        level: "intermediate",
        lessons: [
          { id: "AP-DB-01", title: "Identifying App Entities & Relationships", duration: "25 min", completed: false, level: "beginner", prerequisites: ["AP-BE-01"] },
          { id: "AP-DB-02", title: "SQL Schema Generation", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["AP-DB-01"] },
          { id: "AP-DB-03", title: "NoSQL Schema Design", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["AP-DB-01"] },
          { id: "AP-DB-04", title: "Indexing & Performance Prompts", duration: "25 min", completed: false, level: "advanced", prerequisites: ["AP-DB-02"] },
          { id: "AP-DB-05", title: "Migration Scripts", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["AP-DB-02"] },
          { id: "AP-DB-06", title: "ORM Model Generation", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["AP-DB-02"] },
          { id: "AP-DB-07", title: "Backup & Recovery Strategy", duration: "25 min", completed: false, level: "advanced", prerequisites: ["AP-DB-04"] },
          { id: "AP-DB-08", title: "Sample Queries & Optimization", duration: "30 min", completed: false, level: "advanced", prerequisites: ["AP-DB-04"] },
          { id: "AP-DB-09", title: "Real-time Data & Caching Prompts", duration: "30 min", completed: false, level: "advanced", prerequisites: ["AP-DB-08"] },
        ],
      },
      {
        id: "AP-DP",
        title: "Deployment & Tooling",
        description: "Deploy apps to app stores and cloud platforms.",
        level: "advanced",
        lessons: [
          { id: "AP-DP-01", title: "Preparing App for Production", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["AP-FE-09"] },
          { id: "AP-DP-02", title: "Dockerfile Generation", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["AP-DP-01"] },
          { id: "AP-DP-03", title: "docker-compose for Full Stack", duration: "30 min", completed: false, level: "advanced", prerequisites: ["AP-DP-02"] },
          { id: "AP-DP-04", title: "CI/CD with GitHub Actions", duration: "35 min", completed: false, level: "advanced", prerequisites: ["AP-DP-03"] },
          { id: "AP-DP-05", title: "Environment Variables & Secrets", duration: "20 min", completed: false, level: "intermediate", prerequisites: ["AP-DP-01"] },
          { id: "AP-DP-06", title: "Cloud Deployment (Vercel, AWS, Firebase)", duration: "35 min", completed: false, level: "intermediate", prerequisites: ["AP-DP-05"] },
          { id: "AP-DP-07", title: "Logging & Monitoring", duration: "25 min", completed: false, level: "advanced", prerequisites: ["AP-DP-06"] },
          { id: "AP-DP-08", title: "Scaling & Load Handling", duration: "30 min", completed: false, level: "advanced", prerequisites: ["AP-DP-07"] },
          { id: "AP-DP-09", title: "Rollback & Versioning Strategies", duration: "25 min", completed: false, level: "advanced", prerequisites: ["AP-DP-08"] },
        ],
      },
      {
        id: "AP-AS",
        title: "Assets & Creative Prompts",
        description: "Generate app icons, screenshots, and marketing materials.",
        level: "beginner",
        lessons: [
          { id: "AP-AS-01", title: "App Logo Design Prompts", duration: "25 min", completed: false, level: "beginner", prerequisites: [] },
          { id: "AP-AS-02", title: "Icon Set Generation", duration: "20 min", completed: false, level: "beginner", prerequisites: ["AP-AS-01"] },
          { id: "AP-AS-03", title: "App Screenshots & Mockups", duration: "25 min", completed: false, level: "beginner", prerequisites: ["AP-AS-01"] },
          { id: "AP-AS-04", title: "Hero Images & Marketing Graphics", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["AP-AS-03"] },
          { id: "AP-AS-05", title: "App UI Illustration Prompts", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["AP-AS-02"] },
          { id: "AP-AS-06", title: "Sound Effects & Music Generation", duration: "30 min", completed: false, level: "intermediate", prerequisites: [] },
          { id: "AP-AS-07", title: "Branding Guidelines using AI", duration: "30 min", completed: false, level: "advanced", prerequisites: ["AP-AS-04"] },
          { id: "AP-AS-08", title: "Preparing Assets for Production", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["AP-AS-05"] },
          { id: "AP-AS-09", title: "Copyright & Licensing Awareness", duration: "20 min", completed: false, level: "beginner", prerequisites: [] },
        ],
      },
      {
        id: "AP-AI",
        title: "AI Tools & Usage",
        description: "Master AI tools for app development workflows.",
        level: "intermediate",
        lessons: [
          { id: "AP-AI-01", title: "Writing Effective System Prompts", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["AP-IP-02"] },
          { id: "AP-AI-02", title: "Prompt Chaining for App Development", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["AP-AI-01"] },
          { id: "AP-AI-03", title: "Few-Shot & Example-Based Prompting", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["AP-AI-02"] },
          { id: "AP-AI-04", title: "Debugging Bad AI Outputs", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["AP-AI-03"] },
          { id: "AP-AI-05", title: "RAG for App Projects", duration: "35 min", completed: false, level: "advanced", prerequisites: ["AP-AI-04"] },
          { id: "AP-AI-06", title: "Versioning & Improving Prompts", duration: "25 min", completed: false, level: "advanced", prerequisites: ["AP-AI-05"] },
          { id: "AP-AI-07", title: "Evaluating AI Responses", duration: "25 min", completed: false, level: "advanced", prerequisites: ["AP-AI-06"] },
          { id: "AP-AI-08", title: "Security & Ethical Use of AI", duration: "25 min", completed: false, level: "advanced", prerequisites: ["AP-AI-07"] },
          { id: "AP-AI-09", title: "Building AI-Powered Features into Apps", duration: "35 min", completed: false, level: "advanced", prerequisites: ["AP-AI-08"] },
          { id: "AP-AI-10", title: "Lovable - AI Web App Builder", duration: "30 min", completed: false, level: "beginner", prerequisites: [] },
          { id: "AP-AI-11", title: "Bolt.new - Instant Full-Stack Apps", duration: "25 min", completed: false, level: "beginner", prerequisites: [] },
          { id: "AP-AI-12", title: "V0 by Vercel - UI Generation", duration: "25 min", completed: false, level: "beginner", prerequisites: [] },
          { id: "AP-AI-13", title: "Cursor - AI Code Editor", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["AP-AI-10"] },
          { id: "AP-AI-14", title: "Android Studio AI & Mobile Tools", duration: "30 min", completed: false, level: "intermediate", prerequisites: [] },
          { id: "AP-AI-15", title: "ChatGPT & Gemini AI", duration: "30 min", completed: false, level: "beginner", prerequisites: [] },
          { id: "AP-AI-16", title: "Grok AI by xAI", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["AP-AI-15"] },
          { id: "AP-AI-17", title: "AI Tools Comparison & Workflow", duration: "30 min", completed: false, level: "advanced", prerequisites: ["AP-AI-13", "AP-AI-15"] },
        ],
      },
    ],
  },

  // ==========================================
  // COURSE 3: GAME & SIMULATION DEVELOPMENT
  // ==========================================
  {
    id: "game-development",
    title: "Game & Simulation Development",
    description: "Create games, 3D simulations, and interactive experiences with AI.",
    icon: "Gamepad2",
    color: "destructive",
    modules: [
      {
        id: "GS-IP",
        title: "Idea → Prompts (Game Concept Design)",
        description: "Transform game ideas into comprehensive design documents.",
        level: "beginner",
        lessons: [
          { id: "GS-IP-01", title: "Introduction to Prompt Engineering", duration: "20 min", completed: false, level: "beginner", prerequisites: [] },
          { id: "GS-IP-02", title: "Anatomy of an Effective Prompt", duration: "25 min", completed: false, level: "beginner", prerequisites: ["GS-IP-01"] },
          { id: "GS-IP-03", title: "Defining Game Genre, Platform, and Audience", duration: "25 min", completed: false, level: "beginner", prerequisites: ["GS-IP-02"] },
          { id: "GS-IP-04", title: "Converting a Game Idea into a Clear Vision", duration: "25 min", completed: false, level: "beginner", prerequisites: ["GS-IP-03"] },
          { id: "GS-IP-05", title: "Core Gameplay Loop Generation", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["GS-IP-04"] },
          { id: "GS-IP-06", title: "Writing a Game Design Document (GDD)", duration: "40 min", completed: false, level: "intermediate", prerequisites: ["GS-IP-05"] },
          { id: "GS-IP-07", title: "Feature List & Mechanics Breakdown", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["GS-IP-06"] },
          { id: "GS-IP-08", title: "Player Objectives, Rewards, and Progression", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["GS-IP-07"] },
          { id: "GS-IP-09", title: "Simulation Rules & Constraints Definition", duration: "30 min", completed: false, level: "advanced", prerequisites: ["GS-IP-08"] },
          { id: "GS-IP-10", title: "Breaking the Game into Development Tasks", duration: "25 min", completed: false, level: "advanced", prerequisites: ["GS-IP-09"] },
          { id: "GS-IP-11", title: "Feasibility, Performance & Scope Estimation", duration: "30 min", completed: false, level: "advanced", prerequisites: ["GS-IP-10"] },
        ],
      },
      {
        id: "GS-FE",
        title: "Frontend Prompts (Game Logic & Client)",
        description: "Build game mechanics, physics, and client-side systems.",
        level: "intermediate",
        lessons: [
          { id: "GS-FE-01", title: "Player Movement & Control System", duration: "35 min", completed: false, level: "intermediate", prerequisites: ["GS-IP-06"] },
          { id: "GS-FE-02", title: "Camera Systems (First/Third-person, Top-down)", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["GS-FE-01"] },
          { id: "GS-FE-03", title: "Physics & Collision System Prompts", duration: "35 min", completed: false, level: "intermediate", prerequisites: ["GS-FE-02"] },
          { id: "GS-FE-04", title: "Player Stats (Health, Stamina, Mana)", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["GS-FE-01"] },
          { id: "GS-FE-05", title: "Input Handling (Keyboard, Touch, Controller)", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["GS-FE-01"] },
          { id: "GS-FE-06", title: "Game State Management (Pause, Save, Load)", duration: "30 min", completed: false, level: "advanced", prerequisites: ["GS-FE-04"] },
          { id: "GS-FE-07", title: "AI-Assisted Optimization for Game Scripts", duration: "30 min", completed: false, level: "advanced", prerequisites: ["GS-FE-06"] },
          { id: "GS-FE-08", title: "Debugging Gameplay Logic using Prompts", duration: "25 min", completed: false, level: "advanced", prerequisites: ["GS-FE-07"] },
          { id: "GS-FE-09", title: "Frontend Performance & Memory Optimization", duration: "30 min", completed: false, level: "advanced", prerequisites: ["GS-FE-08"] },
        ],
      },
      {
        id: "GS-UX",
        title: "UI/UX Prompts (Game Interfaces)",
        description: "Design HUDs, menus, and player-facing interfaces.",
        level: "intermediate",
        lessons: [
          { id: "GS-UX-01", title: "HUD Design (Health bar, Score, Mini-map)", duration: "30 min", completed: false, level: "beginner", prerequisites: ["GS-IP-06"] },
          { id: "GS-UX-02", title: "Menu Systems (Main menu, Settings, Pause)", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["GS-UX-01"] },
          { id: "GS-UX-03", title: "Inventory & Skill Tree UI", duration: "35 min", completed: false, level: "intermediate", prerequisites: ["GS-UX-02"] },
          { id: "GS-UX-04", title: "Quest, Mission, and Objective UI", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["GS-UX-02"] },
          { id: "GS-UX-05", title: "Game UI Animations & Transitions", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["GS-UX-03"] },
          { id: "GS-UX-06", title: "Accessibility in Games (Colorblind, subtitles)", duration: "25 min", completed: false, level: "advanced", prerequisites: ["GS-UX-05"] },
          { id: "GS-UX-07", title: "Mobile vs PC vs Console UI Differences", duration: "25 min", completed: false, level: "advanced", prerequisites: ["GS-UX-06"] },
          { id: "GS-UX-08", title: "Player Feedback & UX Testing Prompts", duration: "30 min", completed: false, level: "advanced", prerequisites: ["GS-UX-07"] },
          { id: "GS-UX-09", title: "UX Flow from Start Screen to Game Over", duration: "30 min", completed: false, level: "advanced", prerequisites: ["GS-UX-08"] },
        ],
      },
      {
        id: "GS-BE",
        title: "Backend Prompts (Game Servers & Logic)",
        description: "Build multiplayer servers, matchmaking, and game APIs.",
        level: "advanced",
        lessons: [
          { id: "GS-BE-01", title: "Game Backend Architecture (SP, MP, MMO)", duration: "35 min", completed: false, level: "intermediate", prerequisites: ["GS-IP-10"] },
          { id: "GS-BE-02", title: "Player Authentication & Profiles", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["GS-BE-01"] },
          { id: "GS-BE-03", title: "Multiplayer State Synchronization", duration: "40 min", completed: false, level: "advanced", prerequisites: ["GS-BE-02"] },
          { id: "GS-BE-04", title: "Matchmaking System Design", duration: "35 min", completed: false, level: "advanced", prerequisites: ["GS-BE-03"] },
          { id: "GS-BE-05", title: "Leaderboards & Ranking APIs", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["GS-BE-02"] },
          { id: "GS-BE-06", title: "In-Game Purchases & Economy APIs", duration: "35 min", completed: false, level: "advanced", prerequisites: ["GS-BE-05"] },
          { id: "GS-BE-07", title: "Anti-Cheat & Security Prompts", duration: "30 min", completed: false, level: "advanced", prerequisites: ["GS-BE-06"] },
          { id: "GS-BE-08", title: "Logging, Monitoring & Crash Reports", duration: "25 min", completed: false, level: "advanced", prerequisites: ["GS-BE-07"] },
          { id: "GS-BE-09", title: "Backend Testing & Load Simulation", duration: "30 min", completed: false, level: "advanced", prerequisites: ["GS-BE-08"] },
        ],
      },
      {
        id: "GS-DB",
        title: "DB Design (Game Data & Storage)",
        description: "Design databases for game saves, inventories, and player data.",
        level: "intermediate",
        lessons: [
          { id: "GS-DB-01", title: "Identifying Game Entities (Players, NPCs, Items)", duration: "25 min", completed: false, level: "beginner", prerequisites: ["GS-IP-07"] },
          { id: "GS-DB-02", title: "Player Progress & Save Data Schema", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["GS-DB-01"] },
          { id: "GS-DB-03", title: "Inventory, Skills & Achievements Schema", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["GS-DB-02"] },
          { id: "GS-DB-04", title: "World State & Simulation Data Storage", duration: "35 min", completed: false, level: "advanced", prerequisites: ["GS-DB-03"] },
          { id: "GS-DB-05", title: "SQL vs NoSQL for Games", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["GS-DB-02"] },
          { id: "GS-DB-06", title: "Caching & Real-Time Data", duration: "30 min", completed: false, level: "advanced", prerequisites: ["GS-DB-05"] },
          { id: "GS-DB-07", title: "Backup, Restore & Save Systems", duration: "25 min", completed: false, level: "advanced", prerequisites: ["GS-DB-06"] },
          { id: "GS-DB-08", title: "Analytics & Telemetry Storage", duration: "25 min", completed: false, level: "advanced", prerequisites: ["GS-DB-07"] },
          { id: "GS-DB-09", title: "Database Optimization for Large Player Bases", duration: "30 min", completed: false, level: "advanced", prerequisites: ["GS-DB-08"] },
        ],
      },
      {
        id: "GS-AS",
        title: "Assets & Creative Prompts",
        description: "Generate game art, audio, and world design assets.",
        level: "beginner",
        lessons: [
          { id: "GS-AS-01", title: "Game Logo & Branding Prompts", duration: "25 min", completed: false, level: "beginner", prerequisites: [] },
          { id: "GS-AS-02", title: "Character Concept Art Generation", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["GS-AS-01"] },
          { id: "GS-AS-03", title: "Environment & World Art Prompts", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["GS-AS-02"] },
          { id: "GS-AS-04", title: "Textures, Materials & Sprites", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["GS-AS-03"] },
          { id: "GS-AS-05", title: "UI Icon & HUD Asset Creation", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["GS-AS-01"] },
          { id: "GS-AS-06", title: "Music & Ambient Sound Generation", duration: "30 min", completed: false, level: "intermediate", prerequisites: [] },
          { id: "GS-AS-07", title: "Sound Effects (Footsteps, Weapons, UI)", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["GS-AS-06"] },
          { id: "GS-AS-08", title: "Asset Optimization for Performance", duration: "25 min", completed: false, level: "advanced", prerequisites: ["GS-AS-04"] },
          { id: "GS-AS-09", title: "Licensing & Copyright for Game Assets", duration: "20 min", completed: false, level: "beginner", prerequisites: [] },
        ],
      },
      {
        id: "GS-LV",
        title: "Level Development & Content Pipeline",
        description: "Design levels, quests, and procedural content systems.",
        level: "advanced",
        lessons: [
          { id: "GS-LV-01", title: "Level Design Prompting Basics", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["GS-IP-06"] },
          { id: "GS-LV-02", title: "Procedural Level Generation", duration: "35 min", completed: false, level: "advanced", prerequisites: ["GS-LV-01"] },
          { id: "GS-LV-03", title: "Difficulty Scaling Across Levels", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["GS-LV-01"] },
          { id: "GS-LV-04", title: "Enemy Placement & Spawn Logic", duration: "30 min", completed: false, level: "advanced", prerequisites: ["GS-LV-03"] },
          { id: "GS-LV-05", title: "Quest & Mission Design", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["GS-LV-03"] },
          { id: "GS-LV-06", title: "Integrating Levels into Unity/Unreal", duration: "35 min", completed: false, level: "advanced", prerequisites: ["GS-LV-04"] },
          { id: "GS-LV-07", title: "World Streaming & Chunk Loading", duration: "30 min", completed: false, level: "advanced", prerequisites: ["GS-LV-06"] },
          { id: "GS-LV-08", title: "Testing & Balancing Levels", duration: "30 min", completed: false, level: "advanced", prerequisites: ["GS-LV-07"] },
          { id: "GS-LV-09", title: "Level Optimization for FPS & Memory", duration: "30 min", completed: false, level: "advanced", prerequisites: ["GS-LV-08"] },
        ],
      },
      {
        id: "GS-MN",
        title: "Game Maintenance & Live Updates",
        description: "Maintain live games, balance updates, and new content.",
        level: "advanced",
        lessons: [
          { id: "GS-MN-01", title: "Bug Detection & Fixing using AI", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["GS-FE-08"] },
          { id: "GS-MN-02", title: "Game Balance Updates", duration: "25 min", completed: false, level: "advanced", prerequisites: ["GS-MN-01"] },
          { id: "GS-MN-03", title: "Adding New Content (Maps, Characters, Items)", duration: "30 min", completed: false, level: "advanced", prerequisites: ["GS-MN-02"] },
          { id: "GS-MN-04", title: "Performance Optimization in Live Games", duration: "30 min", completed: false, level: "advanced", prerequisites: ["GS-MN-03"] },
          { id: "GS-MN-05", title: "Patch Notes Generation", duration: "20 min", completed: false, level: "intermediate", prerequisites: ["GS-MN-02"] },
          { id: "GS-MN-06", title: "Player Feedback Analysis", duration: "25 min", completed: false, level: "advanced", prerequisites: ["GS-MN-05"] },
          { id: "GS-MN-07", title: "Server Scaling for Player Growth", duration: "30 min", completed: false, level: "advanced", prerequisites: ["GS-MN-06"] },
          { id: "GS-MN-08", title: "Event-Based Content Updates", duration: "25 min", completed: false, level: "advanced", prerequisites: ["GS-MN-07"] },
          { id: "GS-MN-09", title: "Long-Term Game Roadmap Planning", duration: "30 min", completed: false, level: "advanced", prerequisites: ["GS-MN-08"] },
        ],
      },
      {
        id: "GS-AI",
        title: "AI Tools & Usage (Games)",
        description: "Master AI tools for game development workflows.",
        level: "intermediate",
        lessons: [
          { id: "GS-AI-01", title: "System Prompts for Game Dev Roles", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["GS-IP-02"] },
          { id: "GS-AI-02", title: "Prompt Chaining for Full Game Pipelines", duration: "30 min", completed: false, level: "advanced", prerequisites: ["GS-AI-01"] },
          { id: "GS-AI-03", title: "Few-Shot Prompting for Game Mechanics", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["GS-AI-01"] },
          { id: "GS-AI-04", title: "Debugging AI-Generated Game Code", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["GS-AI-03"] },
          { id: "GS-AI-05", title: "RAG for Game Lore, Rules & Assets", duration: "35 min", completed: false, level: "advanced", prerequisites: ["GS-AI-04"] },
          { id: "GS-AI-06", title: "Evaluating AI Output for Playability", duration: "25 min", completed: false, level: "advanced", prerequisites: ["GS-AI-05"] },
          { id: "GS-AI-07", title: "AI for Procedural Content Generation", duration: "35 min", completed: false, level: "advanced", prerequisites: ["GS-AI-06"] },
          { id: "GS-AI-08", title: "AI Ethics & Player Safety", duration: "25 min", completed: false, level: "advanced", prerequisites: ["GS-AI-07"] },
          { id: "GS-AI-09", title: "Building AI-Powered Game Features", duration: "35 min", completed: false, level: "advanced", prerequisites: ["GS-AI-08"] },
          { id: "GS-AI-10", title: "Rosebud AI for Game Development", duration: "30 min", completed: false, level: "beginner", prerequisites: [] },
          { id: "GS-AI-11", title: "Core AI Game Engines & Systems", duration: "35 min", completed: false, level: "intermediate", prerequisites: [] },
          { id: "GS-AI-12", title: "World Building & Asset Generation Tools", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["GS-AI-11"] },
          { id: "GS-AI-13", title: "NPC Personality & Dialogue Tools", duration: "30 min", completed: false, level: "advanced", prerequisites: ["GS-AI-12"] },
          { id: "GS-AI-14", title: "Animation & Simulation AI Tools", duration: "30 min", completed: false, level: "advanced", prerequisites: ["GS-AI-12"] },
          { id: "GS-AI-15", title: "ChatGPT, Gemini & Grok for Games", duration: "30 min", completed: false, level: "beginner", prerequisites: [] },
          { id: "GS-AI-16", title: "AI Tools Comparison & Workflow", duration: "30 min", completed: false, level: "advanced", prerequisites: ["GS-AI-13", "GS-AI-14"] },
        ],
      },
    ],
  },
];

// ============================================
// LESSON LINKS (YouTube & Tutorial Resources)
// ============================================

export const lessonLinks: Record<string, LessonLink[]> = {
  // Web Development - Idea to Prompts
  "WP-IP-01": [
    { type: "video", title: "Prompt Engineering Tutorial", url: "https://www.youtube.com/watch?v=_ZvnD73m40o" },
    { type: "article", title: "OpenAI Prompt Engineering Guide", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
  ],
  "WP-IP-02": [
    { type: "video", title: "How to Write Perfect Prompts", url: "https://www.youtube.com/watch?v=jC4v5AS4RIM" },
    { type: "docs", title: "Prompting Guide", url: "https://www.promptingguide.ai/" },
  ],
  "WP-IP-03": [
    { type: "video", title: "Website Planning with AI", url: "https://www.youtube.com/watch?v=QGfWNj2eXQE" },
    { type: "article", title: "Project Scoping Guide", url: "https://learnprompting.org/docs/basics/decomposition" },
  ],
  "WP-IP-04": [
    { type: "video", title: "Types of Websites Explained", url: "https://www.youtube.com/watch?v=q3N0kJwLNB0" },
    { type: "article", title: "Website Types Guide", url: "https://www.wix.com/blog/types-of-websites" },
  ],
  "WP-IP-05": [
    { type: "video", title: "Feature List Creation", url: "https://www.youtube.com/watch?v=KwP-08VvJsU" },
    { type: "docs", title: "Product Features Guide", url: "https://www.atlassian.com/agile/product-management/requirements" },
  ],
  "WP-IP-06": [
    { type: "video", title: "Creating User Personas", url: "https://www.youtube.com/watch?v=u44pBnAn7cM" },
    { type: "article", title: "User Persona Templates", url: "https://www.hubspot.com/make-my-persona" },
  ],
  "WP-IP-07": [
    { type: "video", title: "Website Sitemap Tutorial", url: "https://www.youtube.com/watch?v=7SqTR0DpnLw" },
    { type: "article", title: "Information Architecture", url: "https://www.nngroup.com/articles/ia-101/" },
  ],
  "WP-IP-08": [
    { type: "video", title: "Writing Requirements Docs", url: "https://www.youtube.com/watch?v=s3JldKoA0zw" },
    { type: "docs", title: "Functional Requirements", url: "https://www.guru99.com/functional-requirement-specification-example.html" },
  ],
  "WP-IP-09": [
    { type: "video", title: "Content Strategy Guide", url: "https://www.youtube.com/watch?v=3qd-RHhYjOU" },
    { type: "article", title: "Content Planning", url: "https://contentmarketinginstitute.com/developing-a-strategy/" },
  ],
  "WP-IP-10": [
    { type: "video", title: "Breaking Down Projects", url: "https://www.youtube.com/watch?v=SYTxG69wqPo" },
    { type: "article", title: "Task Breakdown Structure", url: "https://www.atlassian.com/agile/project-management/user-stories" },
  ],
  "WP-IP-11": [
    { type: "video", title: "SEO for Beginners", url: "https://www.youtube.com/watch?v=xsVTqzratPs" },
    { type: "docs", title: "SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
  ],

  // Web Development - Frontend
  "WP-FE-01": [
    { type: "video", title: "HTML Crash Course", url: "https://www.youtube.com/watch?v=UB1O30fR-EE" },
    { type: "docs", title: "MDN HTML Guide", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML" },
  ],
  "WP-FE-02": [
    { type: "video", title: "Tailwind CSS Tutorial", url: "https://www.youtube.com/watch?v=dFgzHOX84xQ" },
    { type: "docs", title: "Tailwind Documentation", url: "https://tailwindcss.com/docs" },
  ],
  "WP-FE-03": [
    { type: "video", title: "Responsive Design Tutorial", url: "https://www.youtube.com/watch?v=srvUrASNj0s" },
    { type: "article", title: "Responsive Web Design", url: "https://web.dev/responsive-web-design-basics/" },
  ],
  "WP-FE-04": [
    { type: "video", title: "React Components Tutorial", url: "https://www.youtube.com/watch?v=bMknfKXIFA8" },
    { type: "docs", title: "React Documentation", url: "https://react.dev/learn" },
  ],
  "WP-FE-05": [
    { type: "video", title: "Navigation Design Tutorial", url: "https://www.youtube.com/watch?v=PwWHL3RyQgk" },
    { type: "article", title: "Navigation Best Practices", url: "https://www.nngroup.com/articles/navigation-ia-tests/" },
  ],
  "WP-FE-06": [
    { type: "video", title: "React Forms Tutorial", url: "https://www.youtube.com/watch?v=SdzMBWT2CDQ" },
    { type: "docs", title: "React Hook Form", url: "https://react-hook-form.com/get-started" },
  ],
  "WP-FE-07": [
    { type: "video", title: "CSS Animations Tutorial", url: "https://www.youtube.com/watch?v=YszONjKpgg4" },
    { type: "docs", title: "Framer Motion", url: "https://www.framer.com/motion/" },
  ],
  "WP-FE-08": [
    { type: "video", title: "Web Accessibility Guide", url: "https://www.youtube.com/watch?v=z8xUCzTv8Y0" },
    { type: "docs", title: "WCAG Guidelines", url: "https://www.w3.org/WAI/WCAG21/quickref/" },
  ],
  "WP-FE-09": [
    { type: "video", title: "Web Performance Optimization", url: "https://www.youtube.com/watch?v=0fONene3OIA" },
    { type: "docs", title: "Web Vitals", url: "https://web.dev/vitals/" },
  ],

  // Web Development - UI/UX
  "WP-UX-01": [
    { type: "video", title: "Wireframing Tutorial", url: "https://www.youtube.com/watch?v=qpH7-KFWZRI" },
    { type: "article", title: "Wireframe Guide", url: "https://www.figma.com/resource-library/what-is-wireframing/" },
  ],
  "WP-UX-02": [
    { type: "video", title: "Design Systems Tutorial", url: "https://www.youtube.com/watch?v=wIuVvCuiJhU" },
    { type: "docs", title: "Design Tokens", url: "https://www.designtokens.dev/" },
  ],
  "WP-UX-03": [
    { type: "video", title: "Color Theory for Designers", url: "https://www.youtube.com/watch?v=AvgCkHrcj90" },
    { type: "article", title: "Coolors Palette Generator", url: "https://coolors.co/" },
  ],
  "WP-UX-04": [
    { type: "video", title: "Figma Tutorial for Beginners", url: "https://www.youtube.com/watch?v=FTFaQWZBqQ8" },
    { type: "docs", title: "Figma Learn", url: "https://www.figma.com/resources/learn-design/" },
  ],
  "WP-UX-05": [
    { type: "video", title: "Hero Section Design", url: "https://www.youtube.com/watch?v=mJgBOIoGihA" },
    { type: "article", title: "Hero Section Best Practices", url: "https://uxplanet.org/hero-section-design-best-practices-6752c789a820" },
  ],
  "WP-UX-06": [
    { type: "video", title: "Conversion Optimization", url: "https://www.youtube.com/watch?v=kPKPrpQsaLk" },
    { type: "article", title: "CRO Guide", url: "https://www.optimizely.com/optimization-glossary/conversion-rate-optimization/" },
  ],
  "WP-UX-07": [
    { type: "video", title: "UX Accessibility Testing", url: "https://www.youtube.com/watch?v=cOmehxAU_4s" },
    { type: "docs", title: "A11y Project", url: "https://www.a11yproject.com/" },
  ],
  "WP-UX-08": [
    { type: "video", title: "UX Writing Tips", url: "https://www.youtube.com/watch?v=RNTXbsS7d4E" },
    { type: "article", title: "UX Copy Guidelines", url: "https://www.nngroup.com/articles/ux-writing-study-guide/" },
  ],
  "WP-UX-09": [
    { type: "video", title: "Usability Testing Guide", url: "https://www.youtube.com/watch?v=BrVnBdW6_rE" },
    { type: "article", title: "Usability Testing Methods", url: "https://www.nngroup.com/articles/usability-testing-101/" },
  ],

  // Web Development - Backend
  "WP-BE-01": [
    { type: "video", title: "Backend Architecture Basics", url: "https://www.youtube.com/watch?v=oJQTNq7y3-s" },
    { type: "article", title: "System Design Guide", url: "https://www.freecodecamp.org/news/systems-design-for-interviews/" },
  ],
  "WP-BE-02": [
    { type: "video", title: "REST API Design", url: "https://www.youtube.com/watch?v=-MTSQjw5DrM" },
    { type: "docs", title: "OpenAPI Specification", url: "https://swagger.io/specification/" },
  ],
  "WP-BE-03": [
    { type: "video", title: "Authentication Tutorial", url: "https://www.youtube.com/watch?v=2PPSXonhIck" },
    { type: "docs", title: "Auth0 Documentation", url: "https://auth0.com/docs" },
  ],
  "WP-BE-04": [
    { type: "video", title: "CMS Development Guide", url: "https://www.youtube.com/watch?v=Xprz8TQwn7w" },
    { type: "article", title: "Headless CMS Guide", url: "https://www.sanity.io/headless-cms" },
  ],
  "WP-BE-05": [
    { type: "video", title: "Frontend Backend Connection", url: "https://www.youtube.com/watch?v=Law7wfdg_ls" },
    { type: "docs", title: "Fetch API Guide", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" },
  ],
  "WP-BE-06": [
    { type: "video", title: "Email Integration Tutorial", url: "https://www.youtube.com/watch?v=Va1mN0FJpGM" },
    { type: "docs", title: "SendGrid Documentation", url: "https://docs.sendgrid.com/" },
  ],
  "WP-BE-07": [
    { type: "video", title: "Stripe Integration Tutorial", url: "https://www.youtube.com/watch?v=1r-F3FIONl8" },
    { type: "docs", title: "Stripe Documentation", url: "https://stripe.com/docs" },
  ],
  "WP-BE-08": [
    { type: "video", title: "Web Security Basics", url: "https://www.youtube.com/watch?v=F-sFp_0XR7c" },
    { type: "docs", title: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" },
  ],
  "WP-BE-09": [
    { type: "video", title: "API Testing Tutorial", url: "https://www.youtube.com/watch?v=VywxIQ2ZXw4" },
    { type: "docs", title: "Jest Testing", url: "https://jestjs.io/docs/getting-started" },
  ],

  // Web Development - Database
  "WP-DB-01": [
    { type: "video", title: "Database Design Basics", url: "https://www.youtube.com/watch?v=ztHopE5Wnpc" },
    { type: "article", title: "ER Diagrams Guide", url: "https://www.lucidchart.com/pages/er-diagrams" },
  ],
  "WP-DB-02": [
    { type: "video", title: "SQL Tutorial", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
    { type: "docs", title: "PostgreSQL Documentation", url: "https://www.postgresql.org/docs/" },
  ],
  "WP-DB-03": [
    { type: "video", title: "CMS Database Design", url: "https://www.youtube.com/watch?v=W2Z7fbCLSTw" },
    { type: "article", title: "Content Modeling", url: "https://www.contentful.com/help/content-modelling-basics/" },
  ],
  "WP-DB-04": [
    { type: "video", title: "MongoDB Tutorial", url: "https://www.youtube.com/watch?v=ofme2o29ngU" },
    { type: "docs", title: "MongoDB Documentation", url: "https://www.mongodb.com/docs/" },
  ],
  "WP-DB-05": [
    { type: "video", title: "Data Privacy Guide", url: "https://www.youtube.com/watch?v=9bZkp7q19f0" },
    { type: "article", title: "GDPR Compliance", url: "https://gdpr.eu/what-is-gdpr/" },
  ],
  "WP-DB-06": [
    { type: "video", title: "SQL Query Optimization", url: "https://www.youtube.com/watch?v=BHwzDmr6d7s" },
    { type: "article", title: "Query Optimization Guide", url: "https://www.sqlshack.com/query-optimization-techniques-in-sql-server/" },
  ],
  "WP-DB-07": [
    { type: "video", title: "Database Migrations Tutorial", url: "https://www.youtube.com/watch?v=K90gZq6fgXQ" },
    { type: "docs", title: "Prisma Migrate", url: "https://www.prisma.io/docs/concepts/components/prisma-migrate" },
  ],
  "WP-DB-08": [
    { type: "video", title: "Analytics Database Design", url: "https://www.youtube.com/watch?v=M8oi7nSaWps" },
    { type: "article", title: "Data Warehouse Design", url: "https://www.tableau.com/learn/articles/data-warehouse" },
  ],
  "WP-DB-09": [
    { type: "video", title: "Database Backup Strategies", url: "https://www.youtube.com/watch?v=rFv5q0xNJsQ" },
    { type: "docs", title: "PostgreSQL Backup", url: "https://www.postgresql.org/docs/current/backup.html" },
  ],

  // Web Development - Deployment
  "WP-DP-01": [
    { type: "video", title: "Preparing for Production", url: "https://www.youtube.com/watch?v=SBvmnHTQIPY" },
    { type: "docs", title: "Production Checklist", url: "https://web.dev/performance/" },
  ],
  "WP-DP-02": [
    { type: "video", title: "Docker Tutorial", url: "https://www.youtube.com/watch?v=fqMOX6JJhGo" },
    { type: "docs", title: "Docker Documentation", url: "https://docs.docker.com/" },
  ],
  "WP-DP-03": [
    { type: "video", title: "CI/CD Tutorial", url: "https://www.youtube.com/watch?v=scEDHsr3APg" },
    { type: "docs", title: "GitHub Actions", url: "https://docs.github.com/en/actions" },
  ],
  "WP-DP-04": [
    { type: "video", title: "Vercel Deployment Tutorial", url: "https://www.youtube.com/watch?v=yF5sHD9DUCA" },
    { type: "docs", title: "Vercel Documentation", url: "https://vercel.com/docs" },
  ],
  "WP-DP-05": [
    { type: "video", title: "Custom Domain Setup", url: "https://www.youtube.com/watch?v=bDtxF7qSofg" },
    { type: "docs", title: "DNS Configuration", url: "https://www.cloudflare.com/learning/dns/what-is-dns/" },
  ],
  "WP-DP-06": [
    { type: "video", title: "Environment Variables Guide", url: "https://www.youtube.com/watch?v=GZq3oh9meNM" },
    { type: "article", title: "12 Factor App Config", url: "https://12factor.net/config" },
  ],
  "WP-DP-07": [
    { type: "video", title: "SSL Certificate Tutorial", url: "https://www.youtube.com/watch?v=33VYnE7Bzpk" },
    { type: "docs", title: "Let's Encrypt", url: "https://letsencrypt.org/docs/" },
  ],
  "WP-DP-08": [
    { type: "video", title: "Website Monitoring Guide", url: "https://www.youtube.com/watch?v=8csL2BtVn_U" },
    { type: "docs", title: "Grafana Documentation", url: "https://grafana.com/docs/grafana/latest/" },
  ],
  "WP-DP-09": [
    { type: "video", title: "Web App Scaling Tutorial", url: "https://www.youtube.com/watch?v=sCR3SAVdyCc" },
    { type: "article", title: "Scaling Web Apps", url: "https://www.digitalocean.com/resources/articles/scalability" },
  ],

  // Web Development - Assets
  "WP-AS-01": [
    { type: "video", title: "AI Logo Design Tutorial", url: "https://www.youtube.com/watch?v=pmGhj6GHjfg" },
    { type: "article", title: "Logo Design Tips", url: "https://www.canva.com/learn/logo-design/" },
  ],
  "WP-AS-02": [
    { type: "video", title: "Hero Image with AI", url: "https://www.youtube.com/watch?v=jPmUJ7umT8g" },
    { type: "docs", title: "Midjourney Documentation", url: "https://docs.midjourney.com/" },
  ],
  "WP-AS-03": [
    { type: "video", title: "Icon Design Tutorial", url: "https://www.youtube.com/watch?v=FLiKfJlpnqs" },
    { type: "article", title: "SVG Icons Guide", url: "https://www.svgrepo.com/" },
  ],
  "WP-AS-04": [
    { type: "video", title: "Pattern Generation with AI", url: "https://www.youtube.com/watch?v=KYzlpRvWZ6c" },
    { type: "article", title: "Pattern Design", url: "https://www.patternpad.com/" },
  ],
  "WP-AS-05": [
    { type: "video", title: "AI Illustrations Tutorial", url: "https://www.youtube.com/watch?v=3qZ0g3xLKHI" },
    { type: "article", title: "Illustration Styles", url: "https://www.adobe.com/creativecloud/illustration.html" },
  ],
  "WP-AS-06": [
    { type: "video", title: "Social Media Images Tutorial", url: "https://www.youtube.com/watch?v=VJ7a8jN0Xo8" },
    { type: "docs", title: "Open Graph Protocol", url: "https://ogp.me/" },
  ],
  "WP-AS-07": [
    { type: "video", title: "Favicon Creation Tutorial", url: "https://www.youtube.com/watch?v=GPOsC6PCmQY" },
    { type: "article", title: "Favicon Generator", url: "https://favicon.io/" },
  ],
  "WP-AS-08": [
    { type: "video", title: "Image Optimization Guide", url: "https://www.youtube.com/watch?v=LUtqTLD1yX8" },
    { type: "docs", title: "Image Optimization", url: "https://web.dev/fast/#optimize-your-images" },
  ],
  "WP-AS-09": [
    { type: "video", title: "Copyright for Creators", url: "https://www.youtube.com/watch?v=1Jwo5qc78QU" },
    { type: "article", title: "Creative Commons", url: "https://creativecommons.org/about/cclicenses/" },
  ],

  // Web Development - AI Tools
  "WP-AI-01": [
    { type: "video", title: "Lovable Tutorial", url: "https://www.youtube.com/watch?v=9KHLTZaJcR8" },
    { type: "docs", title: "Lovable Documentation", url: "https://docs.lovable.dev/" },
  ],
  "WP-AI-02": [
    { type: "video", title: "Bolt.new Tutorial", url: "https://www.youtube.com/watch?v=dh0hEkc_0wQ" },
    { type: "docs", title: "Bolt.new Guide", url: "https://bolt.new/" },
  ],
  "WP-AI-03": [
    { type: "video", title: "Cursor AI Tutorial", url: "https://www.youtube.com/watch?v=tjFnifvEEcY" },
    { type: "docs", title: "Cursor Documentation", url: "https://cursor.sh/" },
  ],
  "WP-AI-04": [
    { type: "video", title: "AI Code Generation Tools", url: "https://www.youtube.com/watch?v=5yx5fPqWOcw" },
    { type: "article", title: "AI Coding Tools Comparison", url: "https://www.emergentmind.com/" },
  ],
  "WP-AI-05": [
    { type: "video", title: "Replit AI Tutorial", url: "https://www.youtube.com/watch?v=hPeOqvJr2oI" },
    { type: "docs", title: "Replit Documentation", url: "https://replit.com/" },
  ],
  "WP-AI-06": [
    { type: "video", title: "ChatGPT for Coding", url: "https://www.youtube.com/watch?v=VznoKyh6AXs" },
    { type: "docs", title: "ChatGPT Guide", url: "https://chat.openai.com/" },
  ],
  "WP-AI-07": [
    { type: "video", title: "Gemini AI Tutorial", url: "https://www.youtube.com/watch?v=UIZAiXYceBI" },
    { type: "docs", title: "Google AI Studio", url: "https://ai.google.dev/" },
  ],
  "WP-AI-08": [
    { type: "video", title: "Grok AI Overview", url: "https://www.youtube.com/watch?v=XF0yYxf2G3o" },
    { type: "docs", title: "Grok AI", url: "https://grok.x.ai/" },
  ],
  "WP-AI-09": [
    { type: "video", title: "AI Tools Comparison", url: "https://www.youtube.com/watch?v=bO7FQsCcbD8" },
    { type: "article", title: "AI Dev Tools Guide", url: "https://www.promptingguide.ai/tools" },
  ],

  // App Development - Idea to Prompts
  "AP-IP-01": [
    { type: "video", title: "Prompt Engineering Tutorial", url: "https://www.youtube.com/watch?v=_ZvnD73m40o" },
    { type: "article", title: "OpenAI Prompt Engineering Guide", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
  ],
  "AP-IP-02": [
    { type: "video", title: "How to Write Perfect Prompts", url: "https://www.youtube.com/watch?v=jC4v5AS4RIM" },
    { type: "docs", title: "Prompting Guide", url: "https://www.promptingguide.ai/" },
  ],
  "AP-IP-03": [
    { type: "video", title: "Problem Statement Writing", url: "https://www.youtube.com/watch?v=QGfWNj2eXQE" },
    { type: "article", title: "Problem Framing Guide", url: "https://designsprintkit.withgoogle.com/methodology/phase1-understand" },
  ],
  "AP-IP-04": [
    { type: "video", title: "Feature List Creation", url: "https://www.youtube.com/watch?v=KwP-08VvJsU" },
    { type: "docs", title: "Product Features Guide", url: "https://www.atlassian.com/agile/product-management/requirements" },
  ],
  "AP-IP-05": [
    { type: "video", title: "User Stories Tutorial", url: "https://www.youtube.com/watch?v=apOvF9NVguA" },
    { type: "article", title: "Writing User Stories", url: "https://www.atlassian.com/agile/project-management/user-stories" },
  ],
  "AP-IP-06": [
    { type: "video", title: "Task Breakdown Tutorial", url: "https://www.youtube.com/watch?v=SYTxG69wqPo" },
    { type: "article", title: "Work Breakdown Structure", url: "https://www.projectmanager.com/guides/work-breakdown-structure" },
  ],
  "AP-IP-07": [
    { type: "video", title: "Project Scoping Guide", url: "https://www.youtube.com/watch?v=3A7uWQJmZxc" },
    { type: "article", title: "Scope Definition", url: "https://www.pmi.org/learning/library/defining-project-scope-6182" },
  ],
  "AP-IP-08": [
    { type: "video", title: "PRD Writing Tutorial", url: "https://www.youtube.com/watch?v=yUOC-Y0f5ZQ" },
    { type: "article", title: "PRD Template", url: "https://www.notion.so/templates/product-requirement-document" },
  ],
  "AP-IP-09": [
    { type: "video", title: "App Flow Design", url: "https://www.youtube.com/watch?v=7SqTR0DpnLw" },
    { type: "article", title: "User Flow Design", url: "https://www.figma.com/resource-library/ux-flows/" },
  ],
  "AP-IP-10": [
    { type: "video", title: "Project Estimation Guide", url: "https://www.youtube.com/watch?v=AUW5ZqQP-qw" },
    { type: "article", title: "Software Estimation", url: "https://www.atlassian.com/agile/project-management/estimation" },
  ],
  "AP-IP-11": [
    { type: "video", title: "Market Research with AI", url: "https://www.youtube.com/watch?v=nU-IIXBWlS4" },
    { type: "article", title: "Idea Validation Guide", url: "https://www.ycombinator.com/library/5q-how-to-talk-to-users" },
  ],

  // App Development - Frontend (continued...)
  "AP-FE-01": [
    { type: "video", title: "App Layout Design", url: "https://www.youtube.com/watch?v=0-S5a0eXPoc" },
    { type: "docs", title: "React Native Layout", url: "https://reactnative.dev/docs/flexbox" },
  ],
  "AP-FE-02": [
    { type: "video", title: "React Components Tutorial", url: "https://www.youtube.com/watch?v=bMknfKXIFA8" },
    { type: "docs", title: "Flutter Widgets", url: "https://docs.flutter.dev/development/ui/widgets" },
  ],
  "AP-FE-03": [
    { type: "video", title: "State Management Guide", url: "https://www.youtube.com/watch?v=CVpUuw9XSjY" },
    { type: "docs", title: "Redux Toolkit", url: "https://redux-toolkit.js.org/" },
  ],
  "AP-FE-04": [
    { type: "video", title: "Responsive App Design", url: "https://www.youtube.com/watch?v=srvUrASNj0s" },
    { type: "article", title: "Responsive Patterns", url: "https://web.dev/responsive-web-design-basics/" },
  ],
  "AP-FE-05": [
    { type: "video", title: "Mobile Accessibility Guide", url: "https://www.youtube.com/watch?v=z8xUCzTv8Y0" },
    { type: "docs", title: "Mobile A11y Guidelines", url: "https://www.w3.org/TR/mobile-accessibility-mapping/" },
  ],
  "AP-FE-06": [
    { type: "video", title: "Micro-interactions Tutorial", url: "https://www.youtube.com/watch?v=YszONjKpgg4" },
    { type: "docs", title: "React Spring", url: "https://www.react-spring.dev/" },
  ],
  "AP-FE-07": [
    { type: "video", title: "API Integration Tutorial", url: "https://www.youtube.com/watch?v=Law7wfdg_ls" },
    { type: "docs", title: "TanStack Query", url: "https://tanstack.com/query/latest" },
  ],
  "AP-FE-08": [
    { type: "video", title: "Frontend Testing Tutorial", url: "https://www.youtube.com/watch?v=8Xwq35cPwYg" },
    { type: "docs", title: "Testing Library", url: "https://testing-library.com/docs/" },
  ],
  "AP-FE-09": [
    { type: "video", title: "App Performance Guide", url: "https://www.youtube.com/watch?v=0fONene3OIA" },
    { type: "docs", title: "React Performance", url: "https://react.dev/reference/react/memo" },
  ],

  // Game Development - Idea to Prompts
  "GS-IP-01": [
    { type: "video", title: "Prompt Engineering Tutorial", url: "https://www.youtube.com/watch?v=_ZvnD73m40o" },
    { type: "article", title: "OpenAI Prompt Engineering Guide", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
  ],
  "GS-IP-02": [
    { type: "video", title: "How to Write Perfect Prompts", url: "https://www.youtube.com/watch?v=jC4v5AS4RIM" },
    { type: "docs", title: "Prompting Guide", url: "https://www.promptingguide.ai/" },
  ],
  "GS-IP-03": [
    { type: "video", title: "Game Design Fundamentals", url: "https://www.youtube.com/watch?v=zQvWMdWhFCc" },
    { type: "article", title: "Game Genre Guide", url: "https://gamedesigning.org/gaming/game-genres/" },
  ],
  "GS-IP-04": [
    { type: "video", title: "Game Vision Document", url: "https://www.youtube.com/watch?v=PMXf0e8n2Oc" },
    { type: "article", title: "Game Concept Development", url: "https://gamedev.net/tutorials/game-design/" },
  ],
  "GS-IP-05": [
    { type: "video", title: "Gameplay Loop Design", url: "https://www.youtube.com/watch?v=H4kbJObhcHw" },
    { type: "article", title: "Core Loop Guide", url: "https://www.gamedeveloper.com/design/the-core-of-game-loops" },
  ],
  "GS-IP-06": [
    { type: "video", title: "GDD Tutorial", url: "https://www.youtube.com/watch?v=QIIa9ZVj0z8" },
    { type: "article", title: "GDD Template", url: "https://www.gamedeveloper.com/business/how-to-write-a-game-design-document" },
  ],
  "GS-IP-07": [
    { type: "video", title: "Game Mechanics Design", url: "https://www.youtube.com/watch?v=y_NgJlNRBqQ" },
    { type: "article", title: "Mechanics Framework", url: "https://www.gdcvault.com/play/1020174/30-Things-I-Hate-About" },
  ],
  "GS-IP-08": [
    { type: "video", title: "Progression Systems", url: "https://www.youtube.com/watch?v=tWtvrPTbQ_c" },
    { type: "article", title: "Reward Systems Guide", url: "https://www.gamedeveloper.com/design/decoding-player-motivation" },
  ],
  "GS-IP-09": [
    { type: "video", title: "Simulation Game Design", url: "https://www.youtube.com/watch?v=cRmihFU8m4g" },
    { type: "article", title: "Simulation Rules", url: "https://gamedev.net/tutorials/game-design/simulation/" },
  ],
  "GS-IP-10": [
    { type: "video", title: "Game Project Management", url: "https://www.youtube.com/watch?v=SYTxG69wqPo" },
    { type: "article", title: "Agile for Games", url: "https://www.gamedeveloper.com/production/using-agile-game-development" },
  ],
  "GS-IP-11": [
    { type: "video", title: "Game Scope Management", url: "https://www.youtube.com/watch?v=3A7uWQJmZxc" },
    { type: "article", title: "Feasibility Analysis", url: "https://gamedev.net/tutorials/business/project-management/" },
  ],

  // Game Development - Frontend (Game Logic)
  "GS-FE-01": [
    { type: "video", title: "Player Movement Tutorial", url: "https://www.youtube.com/watch?v=whzomFgjT50" },
    { type: "docs", title: "Unity Movement", url: "https://docs.unity3d.com/Manual/class-CharacterController.html" },
  ],
  "GS-FE-02": [
    { type: "video", title: "Camera Systems Tutorial", url: "https://www.youtube.com/watch?v=537B1kJp9YQ" },
    { type: "docs", title: "Cinemachine", url: "https://docs.unity3d.com/Packages/com.unity.cinemachine@2.9/manual/index.html" },
  ],
  "GS-FE-03": [
    { type: "video", title: "Physics in Games", url: "https://www.youtube.com/watch?v=nBkiSJ5z-hE" },
    { type: "docs", title: "Unity Physics", url: "https://docs.unity3d.com/Manual/PhysicsSection.html" },
  ],
  "GS-FE-04": [
    { type: "video", title: "Player Stats System", url: "https://www.youtube.com/watch?v=Wh_WGXjGNt4" },
    { type: "article", title: "RPG Stats Design", url: "https://gamedev.net/tutorials/game-design/game-mechanics/" },
  ],
  "GS-FE-05": [
    { type: "video", title: "Input System Tutorial", url: "https://www.youtube.com/watch?v=m5WsmlEOFiA" },
    { type: "docs", title: "Unity Input System", url: "https://docs.unity3d.com/Packages/com.unity.inputsystem@1.7/manual/index.html" },
  ],
  "GS-FE-06": [
    { type: "video", title: "Save System Tutorial", url: "https://www.youtube.com/watch?v=XOjd_qU2Ido" },
    { type: "article", title: "Game State Management", url: "https://gamedev.net/tutorials/programming/general-and-gameplay-programming/save-load-system/" },
  ],
  "GS-FE-07": [
    { type: "video", title: "Game Script Optimization", url: "https://www.youtube.com/watch?v=Q2tDcqc3nLU" },
    { type: "docs", title: "Unity Optimization", url: "https://docs.unity3d.com/Manual/BestPracticeUnderstandingPerformanceInUnity.html" },
  ],
  "GS-FE-08": [
    { type: "video", title: "Debugging Game Logic", url: "https://www.youtube.com/watch?v=bVc8SsZ4VVk" },
    { type: "docs", title: "Unity Debugging", url: "https://docs.unity3d.com/Manual/ManagedCodeDebugging.html" },
  ],
  "GS-FE-09": [
    { type: "video", title: "Memory Optimization", url: "https://www.youtube.com/watch?v=mQ2KTRn4BMI" },
    { type: "docs", title: "Unity Memory", url: "https://docs.unity3d.com/Manual/performance-memory.html" },
  ],

  // Game Development - UI/UX
  "GS-UX-01": [
    { type: "video", title: "Game HUD Design", url: "https://www.youtube.com/watch?v=EOjB4aOx2v8" },
    { type: "article", title: "HUD Design Best Practices", url: "https://www.gamedeveloper.com/design/designing-ui-for-games" },
  ],
  "GS-UX-02": [
    { type: "video", title: "Game Menu Design", url: "https://www.youtube.com/watch?v=NYabDLH7dNE" },
    { type: "docs", title: "Unity UI", url: "https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/index.html" },
  ],
  "GS-UX-03": [
    { type: "video", title: "Inventory System Tutorial", url: "https://www.youtube.com/watch?v=2WnAOV7nHW0" },
    { type: "article", title: "Inventory UI Design", url: "https://gamedevbeginner.com/how-to-make-an-inventory-system-in-unity/" },
  ],
  "GS-UX-04": [
    { type: "video", title: "Quest UI Design", url: "https://www.youtube.com/watch?v=bVLNip0X3G8" },
    { type: "article", title: "Objective Systems", url: "https://gamedev.net/tutorials/game-design/game-mechanics/quest-design/" },
  ],
  "GS-UX-05": [
    { type: "video", title: "UI Animation Tutorial", url: "https://www.youtube.com/watch?v=YqMpVCPX2Ks" },
    { type: "docs", title: "DoTween", url: "http://dotween.demigiant.com/documentation.php" },
  ],
  "GS-UX-06": [
    { type: "video", title: "Game Accessibility Guide", url: "https://www.youtube.com/watch?v=Ld4F5Ud5I_s" },
    { type: "docs", title: "Game Accessibility", url: "https://gameaccessibilityguidelines.com/" },
  ],
  "GS-UX-07": [
    { type: "video", title: "Multi-platform UI Design", url: "https://www.youtube.com/watch?v=Q2uMGnlxKlE" },
    { type: "article", title: "Cross-platform UI", url: "https://www.gamedeveloper.com/design/ui-design-for-multiple-platforms" },
  ],
  "GS-UX-08": [
    { type: "video", title: "Player Feedback Design", url: "https://www.youtube.com/watch?v=pmSAG51BybY" },
    { type: "article", title: "UX Testing for Games", url: "https://www.nngroup.com/articles/game-usability-testing/" },
  ],
  "GS-UX-09": [
    { type: "video", title: "Game UX Flow Design", url: "https://www.youtube.com/watch?v=C7307qRmlMI" },
    { type: "article", title: "Game User Experience", url: "https://www.interaction-design.org/literature/topics/game-design" },
  ],

  // Game Development - AI Tools
  "GS-AI-10": [
    { type: "video", title: "Rosebud AI Tutorial", url: "https://www.youtube.com/watch?v=OaGZL9KqhBk" },
    { type: "docs", title: "Rosebud AI", url: "https://www.rosebud.ai/" },
  ],
  "GS-AI-11": [
    { type: "video", title: "AI Game Engines Overview", url: "https://www.youtube.com/watch?v=3VGF_F4QFGc" },
    { type: "article", title: "AI Game Development", url: "https://www.gamedeveloper.com/ai/ai-in-games" },
  ],
  "GS-AI-12": [
    { type: "video", title: "AI Asset Generation", url: "https://www.youtube.com/watch?v=nVWH8KLMjEs" },
    { type: "article", title: "AI Game Assets", url: "https://www.unrealengine.com/en-US/blog/ai-and-machine-learning-in-unreal-engine" },
  ],
  "GS-AI-13": [
    { type: "video", title: "NPC Dialogue Systems", url: "https://www.youtube.com/watch?v=C3VCrx5ovK8" },
    { type: "article", title: "AI NPC Dialogue", url: "https://www.convai.com/" },
  ],
  "GS-AI-14": [
    { type: "video", title: "AI Animation Tools", url: "https://www.youtube.com/watch?v=6gvNQf68vCw" },
    { type: "docs", title: "AI Motion Capture", url: "https://deepmotion.com/" },
  ],
  "GS-AI-15": [
    { type: "video", title: "ChatGPT for Game Dev", url: "https://www.youtube.com/watch?v=VznoKyh6AXs" },
    { type: "docs", title: "Gemini AI", url: "https://ai.google.dev/" },
  ],
  "GS-AI-16": [
    { type: "video", title: "AI Game Dev Workflow", url: "https://www.youtube.com/watch?v=bO7FQsCcbD8" },
    { type: "article", title: "AI Tools Comparison", url: "https://www.promptingguide.ai/tools" },
  ],
};

// ============================================
// LESSON CONTENT
// ============================================

export const lessonContent: Record<string, LessonContent> = {
  // WEB DEVELOPMENT - Idea to Prompts
  "WP-IP-01": {
    objectives: [
      "Understand what prompt engineering is and why it matters",
      "Learn the core principles of effective prompts",
      "Write your first structured prompts",
    ],
    summary: "Prompt engineering is the skill of communicating effectively with AI to get the results you want. This lesson introduces the fundamentals.",
    theory: `**What is Prompt Engineering?**

Prompt engineering is the practice of crafting inputs (prompts) to get the best outputs from AI systems. Think of it like learning a new language—the better you communicate, the better the AI responds.

**Why does it matter?**
- AI can only work with what you tell it
- Good prompts = good results
- Bad prompts = wasted time and frustration

**The Three Pillars:**
1. **Clarity** - Be specific about what you want
2. **Context** - Give the AI relevant background
3. **Constraints** - Set boundaries and expectations

**Simple Example:**
Instead of "make a website", try "create a landing page for a coffee shop with a hero section, menu preview, and contact form."`,
    examples: [
      {
        title: "From Vague to Clear",
        before: "Help me make a website",
        after: `Create a single-page website for "Sunrise Coffee Shop" with:
- Hero section with tagline and CTA
- Featured menu items (3-4 items)
- Location and hours section
- Contact form
Style: Warm colors, modern, mobile-friendly`,
        explanation: "Adding specifics about the business, structure, and style gives the AI everything it needs to generate useful code.",
      },
    ],
    keywords: [
      { term: "Prompt", meaning: "The input text you give to an AI", usage: "Write a clear prompt to get better AI responses" },
      { term: "Context", meaning: "Background information that helps AI understand your request", usage: "Add context about your project so the AI knows what you're building" },
      { term: "Constraints", meaning: "Limits and rules for the AI to follow", usage: "Add constraints like 'use Tailwind CSS' or 'keep it under 100 lines'" },
    ],
    links: [
      { type: "video", title: "Prompt Engineering Tutorial", url: "https://www.youtube.com/watch?v=_ZvnD73m40o" },
      { type: "article", title: "OpenAI Prompt Engineering Guide", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
    ],
    instructorNotes: "Start with live examples. Show the same task with a bad prompt vs a good prompt. Let students see the difference in AI output quality.",
  },

  "WP-IP-02": {
    objectives: [
      "Learn the structure of an effective prompt",
      "Understand each component: role, task, context, constraints",
      "Practice building prompts step by step",
    ],
    summary: "Every effective prompt has key components. This lesson breaks down the anatomy of prompts so you can build them consistently.",
    theory: `**The Anatomy of a Great Prompt:**

1. **Role** - Who should the AI act as?
   Example: "You are a senior React developer..."

2. **Task** - What do you want done?
   Example: "Create a responsive navigation component..."

3. **Context** - What's the situation?
   Example: "For an e-commerce site targeting young adults..."

4. **Constraints** - What are the rules?
   Example: "Use Tailwind CSS, TypeScript, mobile-first..."

5. **Examples** (optional) - Show what you want
   Example: "Similar to Stripe's navigation bar..."

6. **Output Format** - How should it be delivered?
   Example: "Provide the code with comments explaining each section..."

**The CRISPE Framework:**
- **C**apacity: What role should the AI take?
- **R**equest: What is the specific task?
- **I**nformation: What context is needed?
- **S**tyle: What format or style?
- **P**ersona: Who is the audience?
- **E**xperiment: What variations to try?`,
    examples: [
      {
        title: "Building a Complete Prompt",
        before: "Make a login form",
        after: `**Role:** You are a senior frontend developer specializing in React and TypeScript.

**Task:** Create a login form component with email and password fields.

**Context:** This is for a SaaS dashboard. Users are professionals who value clean, efficient interfaces.

**Constraints:**
- Use React with TypeScript
- Style with Tailwind CSS
- Include form validation with react-hook-form
- Show loading state during submission
- Handle errors gracefully

**Output:** Provide the complete component code with comments.`,
        explanation: "Breaking down the prompt into clear sections ensures the AI addresses every requirement.",
      },
    ],
    keywords: [
      { term: "Role", meaning: "The persona or expertise the AI should adopt", usage: "Set the role to 'senior developer' for production-quality code" },
      { term: "Task", meaning: "The specific action you want the AI to perform", usage: "Make your task clear and actionable" },
      { term: "CRISPE", meaning: "A framework for structuring prompts", usage: "Use CRISPE to ensure you cover all aspects of your prompt" },
    ],
    links: [
      { type: "video", title: "How to Write Perfect Prompts", url: "https://www.youtube.com/watch?v=jC4v5AS4RIM" },
      { type: "docs", title: "Prompting Guide", url: "https://www.promptingguide.ai/" },
    ],
    instructorNotes: "Have students practice building prompts piece by piece. Start with just role + task, then add context, then constraints.",
  },

  // App Development - Idea to Prompts
  "AP-IP-01": {
    objectives: [
      "Understand what prompt engineering is and why it matters for app development",
      "Learn the core principles of effective prompts",
      "Write your first structured prompts for mobile apps",
    ],
    summary: "Prompt engineering is essential for building apps with AI. This lesson introduces the fundamentals specific to app development.",
    theory: `**Prompt Engineering for App Development**

Building apps with AI requires understanding both platforms (iOS, Android, Web) and how to communicate requirements clearly.

**Key Differences from Web:**
- Platform considerations (iOS vs Android)
- Native vs cross-platform decisions
- Mobile-specific UX patterns
- Performance constraints
- App store requirements

**Mobile-Specific Prompting:**
- Always specify the target platform
- Include device size considerations
- Mention offline capabilities if needed
- Consider touch interactions
- Think about permissions and privacy

**Example Context for App Prompts:**
"Building a cross-platform app using React Native / Flutter, targeting iOS and Android, for users aged 18-35 who want quick, gesture-based interactions."`,
    examples: [
      {
        title: "App-Specific Prompt",
        before: "Make a todo app",
        after: `Create a task management app with React Native that:

**Platform:** iOS and Android (cross-platform)

**Core Features:**
- Add, edit, delete tasks
- Mark tasks complete with swipe gesture
- Categorize tasks with color-coded tags
- Daily reminder notifications

**UX Requirements:**
- Bottom navigation (4 tabs max)
- Pull-to-refresh on task list
- Haptic feedback on interactions
- Support dark mode

**Technical:**
- Use Expo for easier development
- Local storage with AsyncStorage
- TypeScript for type safety`,
        explanation: "App prompts need platform specifics, mobile UX patterns, and consideration for device capabilities.",
      },
    ],
    keywords: [
      { term: "Cross-platform", meaning: "Apps that run on multiple operating systems from one codebase", usage: "Specify cross-platform when you want iOS and Android from one codebase" },
      { term: "Native", meaning: "Apps built specifically for one platform using its native language", usage: "Native apps have better performance but require separate codebases" },
      { term: "Expo", meaning: "A framework for building React Native apps more easily", usage: "Use Expo for faster development and easier deployment" },
    ],
    links: [
      { type: "video", title: "Prompt Engineering Tutorial", url: "https://www.youtube.com/watch?v=_ZvnD73m40o" },
      { type: "article", title: "OpenAI Prompt Engineering Guide", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
    ],
    instructorNotes: "Compare web vs app prompts. Show how mobile considerations change the prompt structure. Demo with a simple app idea.",
  },

  // Game Development - Idea to Prompts
  "GS-IP-01": {
    objectives: [
      "Understand prompt engineering for game development",
      "Learn game-specific prompt patterns",
      "Write prompts for different game development tasks",
    ],
    summary: "Game development requires specialized prompts that consider gameplay, mechanics, performance, and player experience.",
    theory: `**Prompt Engineering for Games**

Game development is complex—it combines art, code, design, and player psychology. Prompts need to address multiple disciplines.

**Game-Specific Considerations:**
- Game engine (Unity, Unreal, Godot)
- Genre and mechanics
- Target platform and performance
- Player experience goals
- Art style and audio needs

**Types of Game Prompts:**
1. **Design Prompts** - Game mechanics, levels, systems
2. **Code Prompts** - Scripts, AI behavior, physics
3. **Art Prompts** - Characters, environments, UI
4. **Audio Prompts** - Music, sound effects, voice

**Key Context to Include:**
- Game genre (RPG, FPS, puzzle, etc.)
- Target audience and platform
- Performance constraints
- Art style direction
- Reference games for inspiration`,
    examples: [
      {
        title: "Game Development Prompt",
        before: "Make a player movement script",
        after: `Create a player movement system for Unity (C#) for a 3D platformer:

**Game Type:** 3D platformer (similar to Mario Odyssey)

**Movement Features:**
- WASD/joystick movement
- Jump with variable height (hold for higher)
- Double jump ability
- Wall jump off vertical surfaces
- Sprint when holding shift

**Feel Requirements:**
- Responsive, snappy controls
- Slight acceleration/deceleration
- Coyote time for jump forgiveness
- Jump buffering

**Technical:**
- Use Unity's new Input System
- CharacterController component
- Smooth camera follow (Cinemachine compatible)
- Include comments for each section`,
        explanation: "Game prompts need specific mechanics details, feel descriptions, and technical requirements for the game engine.",
      },
    ],
    keywords: [
      { term: "Game Loop", meaning: "The core cycle of actions players repeat in a game", usage: "Define your game loop early to guide all other decisions" },
      { term: "Coyote Time", meaning: "A brief window after leaving a platform where jump is still allowed", usage: "Add coyote time to make platforming feel more forgiving" },
      { term: "Game Feel", meaning: "The intangible sense of how satisfying a game is to play", usage: "Describe the game feel you want: snappy, weighty, floaty, etc." },
    ],
    links: [
      { type: "video", title: "Prompt Engineering Tutorial", url: "https://www.youtube.com/watch?v=_ZvnD73m40o" },
      { type: "article", title: "OpenAI Prompt Engineering Guide", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
    ],
    instructorNotes: "Show examples from different game genres. Demonstrate how the same task (e.g., movement) varies drastically between an FPS and a puzzle game.",
  },
};

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getCourse(courseId: string): Course | undefined {
  return courses.find((c) => c.id === courseId);
}

export function getModule(moduleId: string): Module | undefined {
  for (const course of courses) {
    const module = course.modules.find((m) => m.id === moduleId);
    if (module) return module;
  }
  return undefined;
}

export function getLesson(lessonId: string): { lesson: Lesson; module: Module; course: Course } | undefined {
  for (const course of courses) {
    for (const module of course.modules) {
      const lesson = module.lessons.find((l) => l.id === lessonId);
      if (lesson) return { lesson, module, course };
    }
  }
  return undefined;
}

export function getLessonContent(lessonId: string): LessonContent | undefined {
  return lessonContent[lessonId];
}

export function getLessonLinks(lessonId: string): LessonLink[] {
  return lessonLinks[lessonId] || [];
}

export function getAdjacentLessons(lessonId: string): { prev: Lesson | null; next: Lesson | null } {
  const allLessons: Lesson[] = [];
  for (const course of courses) {
    for (const module of course.modules) {
      allLessons.push(...module.lessons);
    }
  }
  
  const currentIndex = allLessons.findIndex((l) => l.id === lessonId);
  
  return {
    prev: currentIndex > 0 ? allLessons[currentIndex - 1] : null,
    next: currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null,
  };
}

export function getCourseStats(courseId: string): { modules: number; lessons: number; hours: number } {
  const course = getCourse(courseId);
  if (!course) return { modules: 0, lessons: 0, hours: 0 };
  
  const modules = course.modules.length;
  const lessons = course.modules.reduce((sum, m) => sum + m.lessons.length, 0);
  const hours = Math.round(course.modules.reduce((sum, m) => 
    sum + m.lessons.reduce((lSum, l) => lSum + parseInt(l.duration) || 25, 0), 0) / 60);
  
  return { modules, lessons, hours };
}
