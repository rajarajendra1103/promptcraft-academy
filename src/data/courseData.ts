// Centralized course data - Open Source and Free to Use

// Stats for display
export const stats = {
  totalModules: 11,
  totalLessons: 67,
  totalTemplates: 250,
  hours: 18,
};

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  level: "beginner" | "intermediate" | "advanced";
  prerequisites: string[];
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

export interface LessonContent {
  objectives: string[];
  summary: string;
  theory: string;
  examples: LessonExample[];
  keywords: KeywordDefinition[];
  instructorNotes: string;
}

// All course modules with lessons
export const modules: Module[] = [
  {
    id: 1,
    title: "Idea to Prompts",
    description: "Transform raw ideas into structured, effective prompts.",
    lessons: [
      { id: "1-1", title: "Introduction to Prompt Engineering", duration: "15 min", completed: false, level: "beginner", prerequisites: [] },
      { id: "1-2", title: "Anatomy of an Effective Prompt", duration: "20 min", completed: false, level: "beginner", prerequisites: ["1-1"] },
      { id: "1-3", title: "Problem Decomposition", duration: "25 min", completed: false, level: "beginner", prerequisites: ["1-2"] },
      { id: "1-4", title: "Context and Role Setting", duration: "20 min", completed: false, level: "beginner", prerequisites: ["1-2"] },
      { id: "1-5", title: "Output Format Specification", duration: "15 min", completed: false, level: "beginner", prerequisites: ["1-3"] },
      { id: "1-6", title: "Iteration and Refinement", duration: "20 min", completed: false, level: "beginner", prerequisites: ["1-4", "1-5"] },
    ],
    level: "beginner",
  },
  {
    id: 2,
    title: "Frontend Prompts",
    description: "Generate React components, forms, and UI logic.",
    lessons: [
      { id: "2-1", title: "Component Generation Basics", duration: "20 min", completed: false, level: "intermediate", prerequisites: ["1-6"] },
      { id: "2-2", title: "Props and TypeScript Types", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["2-1"] },
      { id: "2-3", title: "State Management Prompts", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["2-2"] },
      { id: "2-4", title: "Form Generation", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["2-2"] },
      { id: "2-5", title: "Responsive Design Prompts", duration: "20 min", completed: false, level: "intermediate", prerequisites: ["2-1"] },
    ],
    level: "intermediate",
  },
  {
    id: 3,
    title: "UI/UX Design Prompts",
    description: "Create design systems, colors, layouts, and user flows.",
    lessons: [
      { id: "3-1", title: "Design Token Generation", duration: "20 min", completed: false, level: "intermediate", prerequisites: ["1-6"] },
      { id: "3-2", title: "Color Palette Creation", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["3-1"] },
      { id: "3-3", title: "Typography Systems", duration: "20 min", completed: false, level: "intermediate", prerequisites: ["3-1"] },
      { id: "3-4", title: "Layout and Spacing", duration: "20 min", completed: false, level: "intermediate", prerequisites: ["3-1"] },
      { id: "3-5", title: "User Flow Description", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["3-4"] },
    ],
    level: "intermediate",
  },
  {
    id: 4,
    title: "Backend & API Prompts",
    description: "Generate server code, REST APIs, and integrations.",
    lessons: [
      { id: "4-1", title: "API Design Fundamentals", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["1-6"] },
      { id: "4-2", title: "REST Endpoint Generation", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["4-1"] },
      { id: "4-3", title: "Authentication Patterns", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["4-2"] },
      { id: "4-4", title: "Error Handling Prompts", duration: "20 min", completed: false, level: "intermediate", prerequisites: ["4-2"] },
      { id: "4-5", title: "Third-Party API Integration", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["4-2"] },
    ],
    level: "intermediate",
  },
  {
    id: 5,
    title: "Database Design Prompts",
    description: "Generate schemas, migrations, and SQL queries.",
    lessons: [
      { id: "5-1", title: "Data Modeling Basics", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["1-6"] },
      { id: "5-2", title: "SQL Schema Generation", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["5-1"] },
      { id: "5-3", title: "Query Writing Prompts", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["5-2"] },
      { id: "5-4", title: "Migration Scripts", duration: "20 min", completed: false, level: "intermediate", prerequisites: ["5-2"] },
      { id: "5-5", title: "Database Relationships", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["5-2"] },
    ],
    level: "intermediate",
  },
  {
    id: 6,
    title: "DevOps & Deployment",
    description: "Docker, CI/CD, cloud deployment, and infrastructure.",
    lessons: [
      { id: "6-1", title: "Docker Configuration", duration: "30 min", completed: false, level: "advanced", prerequisites: ["4-2"] },
      { id: "6-2", title: "CI/CD Pipeline Setup", duration: "25 min", completed: false, level: "advanced", prerequisites: ["6-1"] },
      { id: "6-3", title: "Cloud Deployment", duration: "30 min", completed: false, level: "advanced", prerequisites: ["6-1"] },
      { id: "6-4", title: "Environment Variables", duration: "15 min", completed: false, level: "advanced", prerequisites: ["6-1"] },
      { id: "6-5", title: "Monitoring and Logging", duration: "20 min", completed: false, level: "advanced", prerequisites: ["6-3"] },
    ],
    level: "advanced",
  },
  {
    id: 7,
    title: "Assets & Creative Prompts",
    description: "Generate logos, images, icons, and audio with AI.",
    lessons: [
      { id: "7-1", title: "Image Generation Basics", duration: "20 min", completed: false, level: "beginner", prerequisites: ["1-3"] },
      { id: "7-2", title: "Logo and Brand Assets", duration: "25 min", completed: false, level: "beginner", prerequisites: ["7-1"] },
      { id: "7-3", title: "Icon Generation", duration: "20 min", completed: false, level: "beginner", prerequisites: ["7-1"] },
      { id: "7-4", title: "Background and Patterns", duration: "20 min", completed: false, level: "beginner", prerequisites: ["7-1"] },
      { id: "7-5", title: "Music and Audio Prompts", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["1-3"] },
    ],
    level: "beginner",
  },
  {
    id: 8,
    title: "AI Tools & Advanced Usage",
    description: "Popular AI tools for building apps, websites, and creative projects.",
    lessons: [
      { id: "8-1", title: "Lovable - AI Web App Builder", duration: "25 min", completed: false, level: "beginner", prerequisites: ["1-3"] },
      { id: "8-2", title: "Bolt.new - Instant Full-Stack Apps", duration: "20 min", completed: false, level: "beginner", prerequisites: ["1-3"] },
      { id: "8-3", title: "V0 by Vercel - UI Generation", duration: "20 min", completed: false, level: "beginner", prerequisites: ["1-3"] },
      { id: "8-4", title: "Cursor - AI Code Editor", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["1-6"] },
      { id: "8-5", title: "Emergent AI & Anti Gravity", duration: "20 min", completed: false, level: "intermediate", prerequisites: ["1-6"] },
      { id: "8-6", title: "Android Studio AI & Mobile Tools", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["1-6"] },
      { id: "8-7", title: "Replit AI & Windsurf", duration: "20 min", completed: false, level: "beginner", prerequisites: ["1-3"] },
      { id: "8-8", title: "ChatGPT - Conversational AI", duration: "25 min", completed: false, level: "beginner", prerequisites: ["1-3"] },
      { id: "8-9", title: "Gemini AI & Google AI Studio", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["1-3"] },
      { id: "8-10", title: "Grok AI by xAI", duration: "20 min", completed: false, level: "intermediate", prerequisites: ["1-3"] },
      { id: "8-11", title: "AI Tools Comparison & Workflow", duration: "25 min", completed: false, level: "advanced", prerequisites: ["8-1", "8-2", "8-3"] },
    ],
    level: "intermediate",
  },
  {
    id: 9,
    title: "App Development with AI",
    description: "Build mobile and web applications using AI-powered development tools.",
    lessons: [
      { id: "9-1", title: "Flutter & FlutterFlow Basics", duration: "30 min", completed: false, level: "beginner", prerequisites: ["1-3"] },
      { id: "9-2", title: "React Native with AI", duration: "25 min", completed: false, level: "intermediate", prerequisites: ["2-1"] },
      { id: "9-3", title: "Building iOS Apps with AI", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["9-1"] },
      { id: "9-4", title: "Android App Development", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["9-1"] },
      { id: "9-5", title: "Cross-Platform Strategies", duration: "25 min", completed: false, level: "advanced", prerequisites: ["9-2"] },
    ],
    level: "intermediate",
  },
  {
    id: 10,
    title: "Game & Simulation Development",
    description: "Create games, 3D simulations, and interactive experiences with AI.",
    lessons: [
      { id: "10-1", title: "Unity AI Integration", duration: "35 min", completed: false, level: "intermediate", prerequisites: ["1-6"] },
      { id: "10-2", title: "Unreal Engine with AI", duration: "35 min", completed: false, level: "intermediate", prerequisites: ["1-6"] },
      { id: "10-3", title: "2D Game Development", duration: "30 min", completed: false, level: "beginner", prerequisites: ["1-3"] },
      { id: "10-4", title: "3D Simulation Basics", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["10-1"] },
      { id: "10-5", title: "Game Asset Generation", duration: "25 min", completed: false, level: "beginner", prerequisites: ["7-1"] },
    ],
    level: "intermediate",
  },
  {
    id: 11,
    title: "Images & Videos Development",
    description: "Generate, edit, and enhance images and videos using AI tools.",
    lessons: [
      { id: "11-1", title: "Midjourney Masterclass", duration: "30 min", completed: false, level: "beginner", prerequisites: ["1-3"] },
      { id: "11-2", title: "DALL-E & Image Editing", duration: "25 min", completed: false, level: "beginner", prerequisites: ["11-1"] },
      { id: "11-3", title: "Stable Diffusion Guide", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["11-1"] },
      { id: "11-4", title: "AI Video Generation", duration: "35 min", completed: false, level: "intermediate", prerequisites: ["11-1"] },
      { id: "11-5", title: "Video Editing with AI", duration: "30 min", completed: false, level: "intermediate", prerequisites: ["11-4"] },
    ],
    level: "intermediate",
  },
];

// All lesson content with full details
export const lessonContent: Record<string, LessonContent> = {
  // ============ MODULE 1: Idea to Prompts ============
  "1-1": {
    objectives: [
      "Understand what a prompt is and how AI uses it",
      "Learn why clear prompts produce better results",
      "Recognize the difference between good and bad prompts",
    ],
    summary: "Prompt engineering is the skill of writing clear instructions for AI. Good prompts tell the AI exactly what you want, while bad prompts are vague and leave too much to interpretation.",
    theory: `A **prompt** is the text you give to an AI model. Think of it like giving directions to someone. The clearer your directions, the better they can help you.

AI models do not read minds. They only know what you tell them. If you say "make a website," the AI has to guess what kind of website, what colors, what features. But if you say "create a landing page for a coffee shop with a brown color scheme and a menu section," the AI knows exactly what to do.

**Three rules for good prompts:**
1. **Be specific** - say exactly what you want
2. **Give context** - explain the situation
3. **Show the format** - describe how the output should look

Think of prompts like recipes. A recipe that says "cook some food" is useless. A recipe that says "bake chocolate chip cookies at 350°F for 12 minutes" is useful.

**Why does this matter?**
- Better prompts = less back-and-forth
- Better prompts = more accurate outputs
- Better prompts = faster development

The difference between a beginner and an expert is often just how well they write their prompts.`,
    examples: [
      {
        title: "Simple Task Prompt",
        before: "Write code for a button",
        after: `Create a React button component with Tailwind CSS.

Requirements:
- Primary and secondary variants
- Accept a "label" prop for the text
- Accept an "onClick" handler
- Include hover and focus states
- Use TypeScript`,
        explanation: "The improved prompt specifies the technology (React, Tailwind), variants, props, and interactions. The AI now knows exactly what to build.",
      },
      {
        title: "Feature Request",
        before: "Help with my app",
        after: `I am building a todo list app in React with TypeScript.

Current state: I have a basic list that shows tasks.

Need help with:
- Adding ability to mark tasks complete
- Storing tasks in localStorage
- Filtering by status (all/active/completed)

Please provide the updated component code.`,
        explanation: "The improved prompt gives context (todo app, React, TypeScript), current state, specific features needed, and expected output format.",
      },
    ],
    keywords: [
      {
        term: "Prompt",
        meaning: "The text instruction you give to an AI to get a response",
        usage: "Write a clear prompt to generate a login form component",
      },
      {
        term: "Context",
        meaning: "Background information that helps AI understand your situation",
        usage: "Add context like 'I am building an e-commerce site' before asking for code",
      },
      {
        term: "Iteration",
        meaning: "The process of improving prompts step by step based on results",
        usage: "If the AI output is not right, iterate by refining your prompt",
      },
    ],
    instructorNotes: "Focus on the 'why' before the 'how.' Students often try to write complex prompts too early. Start with simple examples and build up. Emphasize that iteration is normal—your first prompt rarely produces perfect results.",
  },
  "1-2": {
    objectives: [
      "Learn the CREST framework for structuring prompts",
      "Understand each component of an effective prompt",
      "Apply the framework to create consistent outputs",
    ],
    summary: "The CREST framework provides a repeatable structure for writing prompts: Context, Role, Examples, Specifics, and Tone. Using this framework ensures you never forget important details.",
    theory: `The **CREST Framework** gives you a checklist for every prompt:

**C - Context**
What is the background? What are you building? What is the current state?
Example: "I am building an e-commerce site with React and Supabase."

**R - Role**
Who should the AI pretend to be? This shapes the response style.
Example: "Act as a senior React developer with 10 years of experience."

**E - Examples**
Show what you want. Examples are worth 1000 words.
Example: "Here is a similar component for reference: [code]"

**S - Specifics**
What are the requirements? Be explicit about constraints.
Example: "Must use TypeScript, handle loading states, follow WCAG accessibility."

**T - Tone**
What style should the response use? Code comments? Explanations?
Example: "Include brief comments explaining complex logic."

Not every prompt needs all five parts. A simple prompt might only need Specifics. A complex architecture discussion might need all five.

Rule of thumb: If you get unexpected results, you probably forgot one of the CREST components.`,
    examples: [
      {
        title: "Login Form with CREST",
        before: "Write a login form",
        after: `# Context
Building a SaaS dashboard with React 18, Tailwind CSS, and Supabase auth.

# Role
Senior React developer focused on security best practices.

# Example
Similar to the Vercel dashboard login—clean, minimal, focused.

# Specifics
- Email and password fields
- Client-side validation with Zod
- Error messages below inputs
- Loading state on submit
- "Forgot password" link
- TypeScript with proper types

# Tone
Production-ready code with brief inline comments.`,
        explanation: "Each CREST component adds clarity. Context sets the stack, Role shapes the security focus, Example provides visual reference, Specifics list requirements, Tone defines code style.",
      },
    ],
    keywords: [
      {
        term: "CREST",
        meaning: "A framework for prompts: Context, Role, Examples, Specifics, Tone",
        usage: "Use CREST to structure your prompts for better AI responses",
      },
      {
        term: "Role",
        meaning: "The persona you ask AI to adopt when responding",
        usage: "Ask AI to act as a senior developer for more professional code",
      },
      {
        term: "Specifics",
        meaning: "Detailed requirements and constraints for the output",
        usage: "Add specifics like 'use TypeScript' and 'include error handling'",
      },
    ],
    instructorNotes: "Have students memorize CREST by practicing with real prompts. Create a CREST checklist they can reference. Common mistake: students skip Examples because they think it takes too long—show them how examples dramatically improve output quality.",
  },
  "1-3": {
    objectives: [
      "Break complex problems into smaller, manageable prompts",
      "Understand the divide and conquer approach",
      "Learn to sequence prompts for complex features",
    ],
    summary: "Large features should not be built in one prompt. Decomposition means breaking a big task into smaller prompts that each do one thing well. This leads to better results and easier debugging.",
    theory: `**Why decompose?**
AI works best on focused tasks. Asking for a "complete e-commerce site" will give mediocre results. Asking for "a product card component" gives excellent results.

**The Decomposition Process:**
1. **Identify the goal** - What is the end result?
2. **List the parts** - What components make up the whole?
3. **Order by dependency** - What needs to exist first?
4. **Create focused prompts** - One prompt per part

**Example: Building a Blog**
Bad approach: "Build me a complete blog with posts, comments, and admin."

Good approach:
- Prompt 1: Create the blog post data model
- Prompt 2: Build the post list component
- Prompt 3: Build the single post view
- Prompt 4: Add the comment section
- Prompt 5: Create the admin CRUD interface

Rule of thumb: If your prompt has more than 3 "and" statements, break it up.

**Benefits:**
- Easier to test each piece
- Easier to spot what went wrong
- Can reuse components
- Better quality per piece`,
    examples: [
      {
        title: "Decomposing a User Profile Feature",
        before: "Build a user profile page with avatar upload, bio editing, settings, password change, and notification preferences",
        after: `Step 1: Create ProfileHeader component with avatar display and edit button

Step 2: Build AvatarUpload component with:
- File picker
- Image preview
- Upload to storage
- Error handling

Step 3: Create BioEditor component with:
- Textarea for bio
- Character counter
- Save/cancel buttons

Step 4: Build SettingsForm for general settings
Step 5: Build PasswordChangeForm
Step 6: Build NotificationPreferences
Step 7: Combine all in ProfilePage layout`,
        explanation: "Each step is now a focused prompt. You can test the avatar upload independently. If the bio editor has issues, you know exactly where to look.",
      },
    ],
    keywords: [
      {
        term: "Decomposition",
        meaning: "Breaking a large task into smaller, manageable pieces",
        usage: "Use decomposition to split a dashboard into header, sidebar, and content prompts",
      },
      {
        term: "Component",
        meaning: "A reusable piece of UI that does one specific thing",
        usage: "Create a Button component that can be reused across your app",
      },
      {
        term: "Dependency",
        meaning: "When one part requires another part to exist first",
        usage: "The cart page has a dependency on the product component",
      },
    ],
    instructorNotes: "Use a real feature and decompose it live with students. Show how easy it is to spot the problem when something breaks in a focused component vs. a monolithic prompt.",
  },
  "1-4": {
    objectives: [
      "Set proper context for AI prompts",
      "Use role-playing to shape AI responses",
      "Understand how context affects output quality",
    ],
    summary: "Context and role setting tell the AI who it should be and what situation it is in. This dramatically changes the quality and style of responses.",
    theory: `**Context Setting:**
Context is the background information that helps AI understand your situation. Good context includes:

- What you are building (app type, purpose)
- Technology stack (React, TypeScript, Tailwind)
- Current state (what exists already)
- Constraints (must work on mobile, needs to be fast)

**Role Setting:**
Roles give AI a persona to adopt. Different roles produce different outputs:

- "Act as a senior developer" → More robust, production-ready code
- "Act as a teacher" → More explanations, simpler examples
- "Act as a code reviewer" → Focus on improvements and issues

**Combining Context and Role:**
The best prompts combine both:
"You are a senior React developer. I am building a SaaS dashboard and need help with..."

**Common Roles:**
- Senior [Technology] Developer
- UI/UX Designer
- Security Expert
- Performance Specialist
- Technical Writer`,
    examples: [
      {
        title: "Context and Role Combined",
        before: "Help me with authentication",
        after: `Role: You are a senior full-stack developer with expertise in security and authentication patterns.

Context:
- Building a B2B SaaS application
- Using React 18, TypeScript, Supabase
- Need enterprise-grade security
- Must support SSO in the future
- Currently have basic email/password

Request: Design the authentication flow including signup, login, password reset, and session management.`,
        explanation: "The role (security expert) shapes the response toward best practices. The context (B2B SaaS, future SSO) ensures the solution scales appropriately.",
      },
    ],
    keywords: [
      {
        term: "Context",
        meaning: "Background information about your project and situation",
        usage: "Provide context like tech stack and project type before asking questions",
      },
      {
        term: "Role",
        meaning: "The persona or expertise level you want AI to adopt",
        usage: "Ask AI to act as a senior developer for production-quality code",
      },
      {
        term: "Persona",
        meaning: "A character or identity that AI takes on when responding",
        usage: "Create a helpful assistant persona for customer support bots",
      },
    ],
    instructorNotes: "Show the same prompt with different roles and compare outputs. The difference is often dramatic and makes the concept click for students.",
  },
  "1-5": {
    objectives: [
      "Specify output formats clearly",
      "Use structured output for reliable parsing",
      "Control code style and documentation level",
    ],
    summary: "Output format specification tells AI exactly how to structure its response. This makes outputs predictable and easier to use in your workflow.",
    theory: `**Why specify format?**
Without format specification, AI guesses what you want. Sometimes you get prose when you need code. Sometimes you get code when you need a list.

**Format types:**
- **Code blocks** - Specify language, file structure
- **JSON** - For structured data extraction
- **Markdown** - For documentation
- **Lists** - For step-by-step instructions
- **Tables** - For comparisons

**Code format specifics:**
- File name and location
- Include imports or not
- Comments level (none, brief, detailed)
- TypeScript types inline or separate

**Example format instructions:**
"Return only the code, no explanations."
"Return as JSON with keys: title, description, steps"
"Format as a markdown table with columns: Feature, Description, Priority"

**Pro tip:** Use few-shot examples to show exact format:
"Format like this example: { task: 'Buy milk', done: false }"`,
    examples: [
      {
        title: "Structured Output Request",
        before: "Give me some color ideas",
        after: `Generate a color palette for a professional finance app.

Return as JSON with this exact structure:
{
  "primary": "#hex",
  "secondary": "#hex",
  "accent": "#hex",
  "background": "#hex",
  "text": "#hex",
  "error": "#hex",
  "success": "#hex",
  "warning": "#hex"
}

Include only the JSON, no other text.`,
        explanation: "The exact JSON structure ensures the output can be directly used in code without parsing or reformatting.",
      },
    ],
    keywords: [
      {
        term: "Format",
        meaning: "The structure and layout of AI output (code, JSON, list, etc.)",
        usage: "Specify format as JSON to get structured, parseable data",
      },
      {
        term: "JSON",
        meaning: "A data format using key-value pairs that code can easily read",
        usage: "Ask AI to return data as JSON for easy integration",
      },
      {
        term: "Structured Output",
        meaning: "AI response organized in a specific, predictable format",
        usage: "Request structured output for reliable parsing in your app",
      },
    ],
    instructorNotes: "Show how ambiguous format requests lead to inconsistent outputs. Then show how specific format requests give exactly what you need every time.",
  },
  "1-6": {
    objectives: [
      "Improve prompts through iteration",
      "Debug and refine AI outputs",
      "Build a systematic improvement process",
    ],
    summary: "Iteration is the process of improving prompts based on results. Great prompts are rarely written on the first try. Learning to iterate efficiently is a key skill.",
    theory: `**The Iteration Cycle:**
1. **Write** - Create your initial prompt
2. **Run** - Get the AI output
3. **Analyze** - What is wrong or missing?
4. **Refine** - Add clarity where needed
5. **Repeat** - Until satisfied

**Common problems and fixes:**

**Output too generic:**
- Add more specifics
- Include examples
- Set a role

**Output wrong format:**
- Be explicit about format
- Show an example of desired format

**Missing requirements:**
- List requirements explicitly
- Use numbered lists
- Say "must include" for critical items

**Too long/short:**
- Specify length: "in 3 sentences" or "detailed explanation"

**Wrong tone:**
- Set tone explicitly: "professional", "casual", "technical"

**Iteration tips:**
- Save your prompts and their results
- Note what changes improved output
- Build a library of working prompts
- Learn from failures`,
    examples: [
      {
        title: "Iterating on a Prompt",
        before: "Make a navbar → (result: too basic, no mobile, no styling)",
        after: `Iteration 1: "Make a navbar"
Result: Basic HTML list of links

Iteration 2: "Make a React navbar with Tailwind"
Result: Better, but no mobile menu

Iteration 3: "Make a React navbar with Tailwind, include mobile hamburger menu"
Result: Good, but links are hardcoded

Final: "Create a React navbar component with Tailwind CSS.
- Accept 'links' prop as array of {label, href}
- Desktop: horizontal links
- Mobile: hamburger icon that opens vertical menu
- Include logo on the left
- TypeScript with proper types
- Add smooth transition for mobile menu"

Result: Exactly what was needed`,
        explanation: "Each iteration added specifics based on what was missing. The final prompt is detailed because we learned what details matter.",
      },
    ],
    keywords: [
      {
        term: "Iteration",
        meaning: "Repeating a process to improve results each time",
        usage: "Use iteration to refine prompts until you get the desired output",
      },
      {
        term: "Refine",
        meaning: "To improve by adding clarity or removing ambiguity",
        usage: "Refine your prompt by adding specific requirements",
      },
      {
        term: "Debug",
        meaning: "Finding and fixing problems in code or prompts",
        usage: "Debug your prompt by analyzing why the output was wrong",
      },
    ],
    instructorNotes: "Walk through a live iteration session. Show raw, unedited prompting where things go wrong and you fix them. Students learn most from seeing the process, not just the final result.",
  },

  // ============ MODULE 2: Frontend Prompts ============
  "2-1": {
    objectives: [
      "Generate React components with AI",
      "Structure component generation prompts",
      "Get production-ready component code",
    ],
    summary: "Component generation is one of the most common uses of AI in frontend development. Learning to prompt for components saves hours of boilerplate coding.",
    theory: `**Component prompt structure:**

1. **Component type** - Button, Card, Modal, Form, etc.
2. **Technology** - React, TypeScript, CSS framework
3. **Props** - What data does it accept?
4. **States** - Loading, error, empty, etc.
5. **Behavior** - Click handlers, animations
6. **Styling** - Design tokens, responsive breakpoints

**Good component prompts include:**
- Clear component name
- Explicit prop interface
- All variants needed
- Accessibility requirements
- Example usage

**Common mistakes:**
- Not specifying TypeScript
- Forgetting loading/error states
- No accessibility considerations
- Hardcoded values instead of props`,
    examples: [
      {
        title: "Card Component Prompt",
        before: "Make a card component",
        after: `Create a React Card component with TypeScript and Tailwind CSS.

Props interface:
- title: string
- description: string (optional)
- image: string (optional, URL)
- onClick: function (optional)
- variant: "default" | "featured" | "compact"

Requirements:
- Hover effect with subtle shadow increase
- If image exists, show at top
- If onClick exists, cursor pointer and clickable
- Responsive: full width on mobile, fixed width on desktop
- Include aria-label for accessibility when clickable

Return the component code with the interface.`,
        explanation: "Every prop is typed, variants are defined, behavior is clear, and accessibility is considered.",
      },
    ],
    keywords: [
      {
        term: "Component",
        meaning: "A reusable piece of UI code that accepts data and renders HTML",
        usage: "Create a Button component to reuse across all pages",
      },
      {
        term: "Props",
        meaning: "Data passed into a component to customize its behavior",
        usage: "Pass a title prop to display different headings in the Card",
      },
      {
        term: "Render",
        meaning: "The process of displaying a component on the screen",
        usage: "The component will render a button when the page loads",
      },
    ],
    instructorNotes: "Start with simple components and build complexity. Show the difference between prompting for a button vs a complex form. Emphasize that good prompts prevent refactoring later.",
  },
  "2-2": {
    objectives: [
      "Generate proper TypeScript interfaces",
      "Prompt for type-safe components",
      "Handle complex prop types",
    ],
    summary: "TypeScript types make components safer and easier to use. Prompting for proper types from the start saves debugging time later.",
    theory: `**Why TypeScript in prompts:**
- Catches errors at compile time
- Better autocomplete in editors
- Self-documenting code
- Easier refactoring

**Prompting for types:**
- Ask for interface definitions
- Specify optional vs required props
- Include union types for variants
- Request generic types when needed

**Type patterns to request:**
- Props interface (component inputs)
- State types (component internal data)
- Event handler types (onClick, onChange)
- API response types (data from server)

**Example type patterns:**
"Include a Props interface with proper types"
"Use union types for the status: 'idle' | 'loading' | 'error' | 'success'"
"Make the onClick prop optional but typed as () => void"`,
    examples: [
      {
        title: "Typed Data Table",
        before: "Make a table component",
        after: `Create a generic DataTable component with TypeScript and Tailwind.

Type requirements:
interface Column<T> {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (row: T) => void;
  loading?: boolean;
  emptyMessage?: string;
}

The component should:
- Accept any data shape via generic T
- Support custom cell rendering
- Handle loading and empty states
- Be fully type-safe

Include example usage with a User type.`,
        explanation: "Generic types make the table reusable for any data. The Column interface allows custom rendering while maintaining type safety.",
      },
    ],
    keywords: [
      {
        term: "TypeScript",
        meaning: "A programming language that adds types to JavaScript for safety",
        usage: "Use TypeScript to catch errors before running your code",
      },
      {
        term: "Interface",
        meaning: "A definition of what properties an object must have",
        usage: "Create an interface for User with name and email properties",
      },
      {
        term: "Generic",
        meaning: "A type that works with any data type, specified when used",
        usage: "Use a generic type to make the table work with any data",
      },
    ],
    instructorNotes: "Show how TypeScript errors catch bugs early. Demonstrate autocomplete benefits. Generics can be confusing—start with simple examples.",
  },
  "2-3": {
    objectives: [
      "Prompt for state management solutions",
      "Generate hooks for complex state",
      "Handle form state and validation",
    ],
    summary: "State management is crucial for interactive UIs. Good prompts for state logic result in predictable, testable code.",
    theory: `**State types to prompt for:**

**Local state (useState):**
- Simple toggles, counters
- Form field values
- UI state (open/closed, selected tab)

**Complex state (useReducer):**
- Multiple related values
- Complex update logic
- State machines

**Custom hooks:**
- Reusable state logic
- API calls with loading/error
- Form handling

**Prompting for state:**
- Describe the data being managed
- List all possible state transitions
- Specify initial values
- Define error states

**State prompt checklist:**
- What data needs to be stored?
- What actions change the state?
- What are the loading/error states?
- Should state persist (localStorage)?`,
    examples: [
      {
        title: "Shopping Cart State",
        before: "Add cart functionality",
        after: `Create a useCart custom hook with TypeScript.

State structure:
- items: CartItem[] (id, name, price, quantity)
- isOpen: boolean (cart drawer visibility)
- loading: boolean
- error: string | null

Actions:
- addItem(product: Product) - add or increment quantity
- removeItem(itemId: string) - remove completely
- updateQuantity(itemId: string, quantity: number)
- clearCart()
- toggleCart()

Derived values:
- itemCount: total number of items
- subtotal: sum of (price * quantity)

Include:
- Persist to localStorage
- Optimistic updates
- Error handling for invalid operations`,
        explanation: "The prompt specifies state shape, all actions, derived values, and persistence. This results in a complete, production-ready hook.",
      },
    ],
    keywords: [
      {
        term: "State",
        meaning: "Data that changes over time and affects what the UI shows",
        usage: "Use state to track if a modal is open or closed",
      },
      {
        term: "Hook",
        meaning: "A function that lets you use React features like state in components",
        usage: "Create a custom hook to share cart logic across components",
      },
      {
        term: "Reducer",
        meaning: "A function that takes current state and action, returns new state",
        usage: "Use a reducer for complex state with many update actions",
      },
    ],
    instructorNotes: "State management is where many apps get complicated. Emphasize starting simple and only adding complexity when needed. Show how good prompts prevent spaghetti state.",
  },
  "2-4": {
    objectives: [
      "Generate form components with validation",
      "Handle complex form state",
      "Create accessible form UIs",
    ],
    summary: "Forms are complex—they need validation, error handling, accessibility, and good UX. Detailed prompts help generate forms that handle all edge cases.",
    theory: `**Form prompt components:**

**Fields:**
- Input types (text, email, password, number)
- Select dropdowns
- Checkboxes and radios
- Textareas
- Custom inputs (date picker, file upload)

**Validation:**
- Required fields
- Format validation (email, phone)
- Length constraints
- Custom rules
- When to validate (blur, submit, change)

**UX considerations:**
- Error message placement
- Loading states on submit
- Success feedback
- Field grouping
- Progressive disclosure

**Accessibility:**
- Labels linked to inputs
- Error announcements
- Keyboard navigation
- Focus management`,
    examples: [
      {
        title: "Registration Form",
        before: "Make a signup form",
        after: `Create a registration form with React Hook Form, Zod, and Tailwind.

Fields:
- Full name (required, 2-50 chars)
- Email (required, valid email format)
- Password (required, min 8 chars, 1 uppercase, 1 number)
- Confirm password (must match password)
- Terms checkbox (required)

Features:
- Show validation errors below each field
- Validate on blur
- Disable submit until form is valid
- Show loading spinner on submit
- Success toast on completion
- Accessible: proper labels, aria-describedby for errors

Include:
- Zod schema
- Form component with react-hook-form
- All TypeScript types`,
        explanation: "The prompt covers fields, validation rules, UX requirements, and accessibility. This creates a complete, production-ready form.",
      },
    ],
    keywords: [
      {
        term: "Validation",
        meaning: "Checking if user input meets required rules before accepting it",
        usage: "Add validation to ensure email fields contain a valid email",
      },
      {
        term: "Form State",
        meaning: "The current values, errors, and status of a form",
        usage: "Track form state to show errors and control submit button",
      },
      {
        term: "Accessible",
        meaning: "Designed so people with disabilities can use it",
        usage: "Make forms accessible by linking labels to inputs",
      },
    ],
    instructorNotes: "Forms have many edge cases. Walk through a real form being built, showing how each prompt addition handles another edge case.",
  },
  "2-5": {
    objectives: [
      "Prompt for responsive layouts",
      "Generate mobile-first components",
      "Handle breakpoints effectively",
    ],
    summary: "Responsive design ensures your UI works on all screen sizes. Good prompts specify behavior at each breakpoint.",
    theory: `**Responsive prompting:**

**Breakpoints to consider:**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

**Common responsive patterns:**
- Stack to grid (vertical on mobile, grid on desktop)
- Show/hide elements (mobile menu vs desktop nav)
- Change spacing (smaller padding on mobile)
- Adjust font sizes
- Reorder content

**Prompt structure:**
1. Describe mobile layout first (mobile-first)
2. Describe tablet changes
3. Describe desktop layout

**Tailwind breakpoint prefixes:**
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

**What to specify:**
- Layout changes (flex direction, grid columns)
- Visibility changes (show/hide)
- Size changes (padding, font size)
- Interaction changes (hover on desktop only)`,
    examples: [
      {
        title: "Responsive Product Grid",
        before: "Make a product grid",
        after: `Create a responsive ProductGrid component with Tailwind.

Layout:
- Mobile (< 640px): Single column, full-width cards
- Tablet (640px-1024px): 2 columns
- Desktop (> 1024px): 3-4 columns

Card behavior:
- Mobile: Stack image above content
- Desktop: Add hover effect with shadow and slight scale

Props:
- products: Product[] (id, name, price, image)
- loading: boolean
- onProductClick: (id: string) => void

Include:
- Gap between items that adjusts per breakpoint
- Loading skeleton grid
- Empty state message`,
        explanation: "Each breakpoint has explicit layout rules. The card also changes behavior between mobile and desktop.",
      },
    ],
    keywords: [
      {
        term: "Responsive",
        meaning: "Design that adjusts layout based on screen size",
        usage: "Make the layout responsive so it works on phones and desktops",
      },
      {
        term: "Breakpoint",
        meaning: "A screen width where the layout changes",
        usage: "At the tablet breakpoint, switch from 1 column to 2 columns",
      },
      {
        term: "Mobile-first",
        meaning: "Designing for small screens first, then adding larger layouts",
        usage: "Use mobile-first approach: start with stack, add grid for desktop",
      },
    ],
    instructorNotes: "Show the same component at different screen sizes. Resize the browser live to demonstrate breakpoint transitions. Mobile-first is the key concept.",
  },

  // ============ MODULE 3: UI/UX Design Prompts ============
  "3-1": {
    objectives: [
      "Generate design token systems",
      "Create consistent design variables",
      "Build scalable design foundations",
    ],
    summary: "Design tokens are the building blocks of a design system—colors, spacing, typography, and more stored as variables. Prompting for tokens creates consistent, maintainable designs.",
    theory: `**What are design tokens?**
Design tokens are named values that store design decisions:
- Colors: primary, secondary, error, success
- Spacing: xs, sm, md, lg, xl
- Typography: heading sizes, body text, fonts
- Shadows: subtle, medium, strong
- Borders: radius, width

**Why use tokens?**
- Change one value, update everywhere
- Consistent spacing and colors
- Easy dark/light mode switching
- Better communication with designers

**Token categories:**
- **Primitive tokens**: Raw values (blue-500: #3B82F6)
- **Semantic tokens**: Purpose-based (primary: blue-500)
- **Component tokens**: Specific use (button-bg: primary)

**Token format options:**
- CSS custom properties (--color-primary)
- JavaScript objects (theme.colors.primary)
- JSON files (design-tokens.json)
- Tailwind config (extend: { colors: {} })`,
    examples: [
      {
        title: "Complete Token System",
        before: "Give me some design tokens",
        after: `Create a comprehensive design token system for a fintech app.

Format as Tailwind config extending the theme.

Colors:
- Primary: Professional blue (trust, stability)
- Secondary: Slate gray
- Accent: Subtle gold (premium feel)
- Semantic: success, warning, error, info
- Neutrals: 10-step gray scale

Spacing:
- Base unit: 4px
- Scale: 0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64

Typography:
- Font families: sans (Inter), mono (JetBrains Mono)
- Sizes: xs, sm, base, lg, xl, 2xl, 3xl, 4xl
- Line heights and letter spacing per size

Shadows:
- sm, md, lg, xl for elevation levels

Border radius:
- none, sm, md, lg, full

Include both light and dark mode values.`,
        explanation: "This prompt creates a complete, professional token system. The app type (fintech) guides the color psychology and overall feel.",
      },
    ],
    keywords: [
      {
        term: "Design Token",
        meaning: "A named variable storing a design value like color or spacing",
        usage: "Use design tokens so changing --primary updates all buttons",
      },
      {
        term: "Semantic",
        meaning: "Named for purpose rather than appearance",
        usage: "Use semantic token 'error' instead of 'red' for error messages",
      },
      {
        term: "Theme",
        meaning: "A collection of design tokens that define an app's look",
        usage: "Switch themes to change from light mode to dark mode",
      },
    ],
    instructorNotes: "Show how changing one token value cascades through the entire app. Demonstrate light/dark mode switching with semantic tokens.",
  },
  "3-2": {
    objectives: [
      "Generate effective color palettes",
      "Understand color psychology",
      "Create accessible color combinations",
    ],
    summary: "Color palettes set the emotional tone of an app. Good color prompts consider psychology, accessibility, and practical usage.",
    theory: `**Color psychology:**
- Blue: Trust, stability, professionalism (finance, healthcare)
- Green: Growth, nature, success (eco, finance)
- Red: Urgency, energy, warning (alerts, sales)
- Purple: Luxury, creativity (premium, creative)
- Orange: Friendly, energetic (food, social)
- Black: Sophisticated, premium (luxury, fashion)

**Palette components:**
- Primary: Main brand color
- Secondary: Supporting color
- Accent: Highlights and CTAs
- Neutrals: Text, backgrounds, borders
- Semantic: Error, success, warning, info

**Accessibility:**
- Minimum contrast ratio 4.5:1 for normal text
- 3:1 for large text and icons
- Never rely on color alone for meaning

**Palette generation:**
- Start with primary brand color
- Generate complementary/analogous colors
- Create 5-10 shades per color (50-950)
- Test on real UI elements`,
    examples: [
      {
        title: "SaaS Palette Generation",
        before: "Give me colors",
        after: `Generate a color palette for a project management SaaS.

Brand personality: Professional but approachable, modern, trustworthy

Primary: A confident blue that works for dashboards
- Generate shades from 50 (lightest) to 950 (darkest)

Secondary: A complementary neutral
- Cool gray scale for text and backgrounds

Accent: An energetic color for CTAs and highlights
- Should pop against both light and dark backgrounds

Semantic:
- Success: Green (completed tasks)
- Warning: Amber (deadlines approaching)
- Error: Red (failed actions)
- Info: Blue (notifications)

Requirements:
- All text colors must pass WCAG AA contrast
- Include hover state shades
- Provide both hex and HSL values
- Include dark mode variants`,
        explanation: "The prompt considers the app type, required contrast, dark mode, and provides clear guidance for each color purpose.",
      },
    ],
    keywords: [
      {
        term: "Palette",
        meaning: "A set of colors chosen to work well together",
        usage: "Create a palette with primary, secondary, and accent colors",
      },
      {
        term: "Contrast",
        meaning: "The difference in brightness between two colors",
        usage: "Ensure enough contrast between text and background for readability",
      },
      {
        term: "Semantic Colors",
        meaning: "Colors named for their meaning, like error or success",
        usage: "Use semantic colors so error messages always appear in red",
      },
    ],
    instructorNotes: "Use a contrast checker tool live. Show how colors that look good can fail accessibility tests. Demonstrate the importance of semantic naming.",
  },
  "3-3": {
    objectives: [
      "Create typography systems",
      "Choose font pairings",
      "Define type scales",
    ],
    summary: "Typography systems ensure consistent, readable text throughout an app. Good typography prompts specify fonts, sizes, weights, and spacing.",
    theory: `**Typography components:**

**Font families:**
- Heading font: Often bold, distinctive
- Body font: Readable, neutral
- Mono font: For code blocks

**Type scale:**
A set of related font sizes:
- xs, sm, base, lg, xl, 2xl, 3xl, 4xl
- Use a ratio (1.25, 1.333, 1.5) for harmony

**Line height:**
- Headings: Tighter (1.1-1.3)
- Body text: Looser (1.5-1.7)

**Font weights:**
- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

**Letter spacing:**
- Headings: Slightly tighter
- All caps: Wider spacing

**Best practices:**
- Limit to 2-3 fonts max
- Use variable fonts for performance
- Set max line length (60-75 characters)`,
    examples: [
      {
        title: "Typography System",
        before: "What fonts should I use",
        after: `Create a typography system for a modern blog platform.

Fonts:
- Headings: A distinctive serif that feels editorial
- Body: A highly readable sans-serif
- Code: A mono font for code snippets

Suggest 3 pairings with Google Fonts links.

Type scale (base 16px, ratio 1.25):
- xs: 12px
- sm: 14px
- base: 16px
- lg: 20px
- xl: 24px
- 2xl: 30px
- 3xl: 38px
- 4xl: 48px

For each size, provide:
- Font size in rem
- Line height
- Letter spacing
- Recommended font weight

Include Tailwind config for the typography system.`,
        explanation: "This prompt asks for specific pairings, provides a mathematical scale, and requests all the values needed for implementation.",
      },
    ],
    keywords: [
      {
        term: "Type Scale",
        meaning: "A set of related font sizes that work together",
        usage: "Use a type scale to ensure consistent heading and body sizes",
      },
      {
        term: "Line Height",
        meaning: "The vertical space between lines of text",
        usage: "Increase line height for body text to improve readability",
      },
      {
        term: "Font Pairing",
        meaning: "Two or more fonts chosen to complement each other",
        usage: "Pair a bold serif for headings with a clean sans-serif for body",
      },
    ],
    instructorNotes: "Show examples of good and bad typography. Demonstrate how line height affects readability. Let students experiment with different type scales.",
  },
  "3-4": {
    objectives: [
      "Create consistent spacing systems",
      "Design responsive layouts",
      "Use grid and flexbox effectively",
    ],
    summary: "Layout and spacing create visual hierarchy and organization. Consistent spacing makes UIs feel polished and professional.",
    theory: `**Spacing systems:**

**Base unit approach:**
Pick a base unit (4px or 8px) and multiply:
- 4px: 4, 8, 12, 16, 24, 32, 48, 64, 96
- This creates harmonious relationships

**Spacing applications:**
- Padding: Space inside elements
- Margin: Space between elements
- Gap: Space in flex/grid layouts

**Layout patterns:**
- Container with max-width
- Grid systems (12-column, auto-fit)
- Stack (vertical) and cluster (horizontal)
- Sidebar + content layouts

**Responsive spacing:**
- Smaller spacing on mobile
- Larger spacing on desktop
- Consistent ratios across breakpoints

**Visual hierarchy:**
- Related items = smaller spacing
- Separate groups = larger spacing
- Use spacing to group content`,
    examples: [
      {
        title: "Dashboard Layout System",
        before: "Layout for a dashboard",
        after: `Create a layout system for an admin dashboard.

Spacing scale (base 4px):
- 0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32 (in Tailwind units)

Page structure:
- Sidebar: 240px fixed, collapsible to 64px on mobile
- Header: 64px height, sticky
- Content: Fluid, max-width 1440px, centered
- Padding: 24px desktop, 16px mobile

Grid system:
- Dashboard cards: Auto-fit, min 280px
- Gap: 24px desktop, 16px mobile

Components:
- Card padding: 24px
- Section spacing: 48px
- Related items: 16px
- Form fields: 24px between groups, 12px within

Include responsive breakpoints for all values.`,
        explanation: "The prompt establishes a mathematical spacing system and applies it to specific layout components with responsive considerations.",
      },
    ],
    keywords: [
      {
        term: "Spacing",
        meaning: "The empty space between and around elements",
        usage: "Use consistent spacing tokens like 8px, 16px, 24px throughout",
      },
      {
        term: "Grid",
        meaning: "A layout system that divides space into columns and rows",
        usage: "Use a 12-column grid to align elements consistently",
      },
      {
        term: "Visual Hierarchy",
        meaning: "Arranging elements to show importance and relationships",
        usage: "Create visual hierarchy with larger headings and grouped content",
      },
    ],
    instructorNotes: "Show how inconsistent spacing makes UIs feel amateurish. Demonstrate the 4px/8px base unit system. Use visual examples of good vs bad spacing.",
  },
  "3-5": {
    objectives: [
      "Describe user flows in prompts",
      "Generate multi-step interfaces",
      "Create connected user experiences",
    ],
    summary: "User flows describe how users move through your app to complete tasks. Clear flow descriptions help AI understand the full context when generating related components.",
    theory: `**User flow components:**

**Entry points:**
- How does the user start this flow?
- From navigation, button, link, or deep link

**Steps:**
- What actions does the user take?
- What information is collected or displayed?

**Decision points:**
- Where might the user choose different paths?
- What conditions change the flow?

**End states:**
- Success: What happens when complete?
- Failure: What happens on error?
- Exit: How can users leave mid-flow?

**Flow documentation:**
- Start state and requirements
- Each step with inputs and outputs
- Transitions between steps
- Edge cases and error handling

**Common flows:**
- Onboarding/signup
- Checkout/purchase
- Settings/configuration
- Content creation`,
    examples: [
      {
        title: "Checkout Flow Description",
        before: "Build a checkout",
        after: `Create a multi-step checkout flow.

Entry: User clicks "Checkout" from cart (minimum 1 item)

Step 1: Shipping Address
- Form: name, address, city, zip, country
- Option: save address for future
- If logged in: show saved addresses
- Validation: all fields required

Step 2: Shipping Method
- Display available methods based on address
- Show price and estimated delivery
- Default select cheapest option

Step 3: Payment
- Credit card form (Stripe Elements)
- Show order summary sidebar
- Apply promo code option
- Show final total with tax

Step 4: Review
- Display all info from previous steps
- Edit buttons to return to each step
- Confirm button

Success: Order confirmation page with:
- Order number
- Email confirmation sent
- Expected delivery date
- Continue shopping button

Error handling:
- Payment failure: Show error, stay on payment step
- Out of stock: Alert and return to cart
- Session timeout: Save progress, prompt to login`,
        explanation: "This flow describes every step, decision point, and error case. An AI can generate each component knowing how it connects to others.",
      },
    ],
    keywords: [
      {
        term: "User Flow",
        meaning: "The path a user takes to complete a task in your app",
        usage: "Map the user flow from login to checkout to find pain points",
      },
      {
        term: "Multi-step",
        meaning: "A process broken into several screens or stages",
        usage: "Use a multi-step form for complex processes like checkout",
      },
      {
        term: "Edge Case",
        meaning: "An unusual situation that still needs to be handled",
        usage: "Handle edge cases like empty cart or expired session",
      },
    ],
    instructorNotes: "Diagram a flow on a whiteboard first, then translate to prompts. Show how complete flow descriptions result in more connected, coherent components.",
  },

  // ============ MODULE 4: Backend & API Prompts ============
  "4-1": {
    objectives: [
      "Design APIs with AI assistance",
      "Understand RESTful principles",
      "Create API documentation",
    ],
    summary: "Good API design makes applications easier to build and maintain. Clear API prompts help generate consistent, well-documented endpoints.",
    theory: `**REST principles:**
- Resources (nouns): /users, /posts, /comments
- Methods (verbs): GET, POST, PUT, PATCH, DELETE
- Status codes: 200 OK, 201 Created, 400 Bad Request, 404 Not Found

**API design considerations:**
- Consistent naming conventions
- Versioning strategy
- Authentication method
- Error response format
- Pagination for lists

**What to include in API prompts:**
- Resource name and purpose
- All endpoints (CRUD operations)
- Request/response schemas
- Authentication requirements
- Error handling

**API documentation:**
- Endpoint URL and method
- Request parameters and body
- Response format with examples
- Error codes and messages`,
    examples: [
      {
        title: "Task API Design",
        before: "API for tasks",
        after: `Design a REST API for a task management system.

Base URL: /api/v1

Resources:
- /tasks - Task collection
- /tasks/:id - Single task
- /projects/:projectId/tasks - Tasks in a project

Endpoints:

GET /tasks
- Query params: status, assignee, projectId, page, limit
- Response: { data: Task[], meta: { total, page, limit } }

GET /tasks/:id
- Response: Task object

POST /tasks
- Body: { title, description?, projectId, assigneeId?, dueDate? }
- Response: 201 with created Task

PUT /tasks/:id
- Body: Full task object
- Response: Updated Task

PATCH /tasks/:id
- Body: Partial update
- Response: Updated Task

DELETE /tasks/:id
- Response: 204 No Content

Task schema:
{
  id: string,
  title: string,
  description: string,
  status: "todo" | "in_progress" | "done",
  projectId: string,
  assigneeId: string | null,
  dueDate: string | null,
  createdAt: string,
  updatedAt: string
}

Include standard error response format.`,
        explanation: "This prompt covers all CRUD operations, query parameters, response schemas, and the data model. An AI can generate complete API code from this.",
      },
    ],
    keywords: [
      {
        term: "API",
        meaning: "Application Programming Interface - how apps talk to each other",
        usage: "Build an API to let the frontend fetch user data from the server",
      },
      {
        term: "REST",
        meaning: "A style of API using HTTP methods and resource URLs",
        usage: "Use REST conventions: GET to read, POST to create, DELETE to remove",
      },
      {
        term: "Endpoint",
        meaning: "A specific URL where an API receives requests",
        usage: "Create a /users endpoint to return the list of users",
      },
    ],
    instructorNotes: "Show how consistent API design makes frontend development easier. Demonstrate the difference between well-designed and poorly-designed APIs.",
  },
  "4-2": {
    objectives: [
      "Generate REST endpoint code",
      "Handle request validation",
      "Implement proper error handling",
    ],
    summary: "REST endpoint generation is a common backend task. Good prompts specify routes, validation, database operations, and error handling.",
    theory: `**Endpoint components:**

**Route definition:**
- HTTP method (GET, POST, etc.)
- URL path with parameters
- Middleware (auth, validation)

**Request handling:**
- Parse body, query, params
- Validate input data
- Check authorization

**Business logic:**
- Database queries
- Data transformation
- Side effects (emails, notifications)

**Response:**
- Status code
- Response body
- Headers (pagination, cache)

**Error handling:**
- Validation errors (400)
- Not found (404)
- Server errors (500)
- Consistent error format`,
    examples: [
      {
        title: "CRUD Endpoints Generation",
        before: "Make endpoints for products",
        after: `Generate REST endpoints for products using Express and TypeScript.

Stack: Express, Prisma, Zod validation

Product schema (Prisma):
- id: String @id
- name: String
- description: String?
- price: Float
- categoryId: String
- createdAt: DateTime
- updatedAt: DateTime

Endpoints to generate:

GET /products
- Query: category, minPrice, maxPrice, search, page, limit
- Sorting: sortBy (name, price, createdAt), order (asc, desc)
- Response: Paginated list

GET /products/:id
- 404 if not found
- Include category relation

POST /products
- Zod validation for body
- Return 201 with created product

PUT /products/:id
- Full update, validate all fields
- 404 if not found

DELETE /products/:id
- Return 204 on success
- 404 if not found

Include:
- Zod schemas for validation
- Error handling middleware
- TypeScript types
- Prisma queries`,
        explanation: "This prompt specifies the tech stack, validation library, all endpoints with details, and requests reusable patterns like middleware.",
      },
    ],
    keywords: [
      {
        term: "CRUD",
        meaning: "Create, Read, Update, Delete - the four basic data operations",
        usage: "Build CRUD endpoints to manage products in the database",
      },
      {
        term: "Middleware",
        meaning: "Code that runs before the main request handler",
        usage: "Add auth middleware to check if user is logged in before access",
      },
      {
        term: "Validation",
        meaning: "Checking that input data meets expected rules",
        usage: "Use Zod validation to ensure price is a positive number",
      },
    ],
    instructorNotes: "Build an endpoint live, showing each layer (route, validation, logic, response). Demonstrate how validation prevents bugs and security issues.",
  },
  "4-3": {
    objectives: [
      "Implement authentication flows",
      "Generate secure auth code",
      "Handle sessions and tokens",
    ],
    summary: "Authentication is security-critical. Detailed prompts help generate secure, complete auth implementations.",
    theory: `**Authentication types:**
- Session-based: Cookie with session ID
- Token-based: JWT in header
- OAuth: Third-party login (Google, GitHub)

**Auth flows to implement:**
- Registration with email verification
- Login with password
- Password reset
- Session management
- Logout

**Security considerations:**
- Password hashing (bcrypt)
- Token expiration
- Refresh tokens
- Rate limiting
- HTTPS only

**What to specify:**
- Auth method (JWT, session, OAuth)
- Token lifetime
- Refresh strategy
- Required user fields
- Verification requirements`,
    examples: [
      {
        title: "JWT Auth Implementation",
        before: "Add login to my app",
        after: `Implement JWT authentication for an Express API with TypeScript.

Stack: Express, Prisma, bcrypt, jsonwebtoken

User model:
- id, email, passwordHash, name, createdAt, verified

Endpoints:

POST /auth/register
- Input: email, password, name
- Hash password with bcrypt (10 rounds)
- Create user (verified: false)
- Send verification email
- Return: { message: "Check email" }

POST /auth/verify
- Input: token (from email link)
- Set verified: true
- Return: { message: "Email verified" }

POST /auth/login
- Input: email, password
- Check password with bcrypt
- If not verified, return error
- Generate JWT (15min expiry)
- Generate refresh token (7 days)
- Set refresh token in httpOnly cookie
- Return: { accessToken, user }

POST /auth/refresh
- Read refresh token from cookie
- Verify and issue new access token
- Return: { accessToken }

POST /auth/logout
- Clear refresh token cookie
- Invalidate refresh token in database
- Return: { message: "Logged out" }

Middleware:
- requireAuth: Verify JWT, attach user to request

Include:
- All TypeScript types
- Error handling
- Environment variable usage`,
        explanation: "This prompt covers the complete auth lifecycle with security best practices like httpOnly cookies and token refresh.",
      },
    ],
    keywords: [
      {
        term: "JWT",
        meaning: "JSON Web Token - a secure way to transmit user identity",
        usage: "Use JWT to authenticate API requests from the frontend",
      },
      {
        term: "Hash",
        meaning: "Converting password to unreadable text for safe storage",
        usage: "Hash passwords with bcrypt before storing in database",
      },
      {
        term: "Refresh Token",
        meaning: "A long-lived token used to get new access tokens",
        usage: "Use refresh tokens so users stay logged in without re-entering password",
      },
    ],
    instructorNotes: "Security is critical here. Show why each security measure matters. Demonstrate what happens without proper hashing or token expiration.",
  },
  "4-4": {
    objectives: [
      "Handle errors consistently",
      "Create error response formats",
      "Log errors effectively",
    ],
    summary: "Good error handling makes debugging easier and improves user experience. Consistent error formats help frontend developers handle failures gracefully.",
    theory: `**Error handling layers:**

**Validation errors:**
- Input doesn't match expected format
- Return 400 with field-specific errors

**Business logic errors:**
- Duplicate email, insufficient funds
- Return 400/409 with clear message

**Not found errors:**
- Resource doesn't exist
- Return 404 with resource type

**Authorization errors:**
- Not logged in: 401
- Not permitted: 403

**Server errors:**
- Unexpected failures
- Return 500, log details, hide internals

**Error response format:**
{
  error: {
    code: "VALIDATION_ERROR",
    message: "Human readable message",
    details: { field: "email", issue: "Already exists" }
  }
}`,
    examples: [
      {
        title: "Error Handling System",
        before: "Add error handling",
        after: `Create a comprehensive error handling system for Express with TypeScript.

Error response format:
{
  success: false,
  error: {
    code: string (e.g., "VALIDATION_ERROR"),
    message: string (user-friendly),
    details?: object (field-specific errors),
    requestId: string (for debugging)
  }
}

Error classes to create:
- AppError (base class)
- ValidationError (400)
- NotFoundError (404)
- UnauthorizedError (401)
- ForbiddenError (403)
- ConflictError (409)
- InternalError (500)

Error middleware:
- Catch all errors
- Log with context (requestId, user, path)
- Format response based on error type
- In production: Hide stack traces
- In development: Include stack traces

Integration with Zod:
- Transform Zod errors into ValidationError format

Logging:
- Error level for 500s
- Warn level for 400s
- Include request context

Example usage in routes.`,
        explanation: "This creates a complete error handling system with custom error classes, middleware, logging, and consistent response format.",
      },
    ],
    keywords: [
      {
        term: "Error Handler",
        meaning: "Code that catches errors and formats them for response",
        usage: "Add an error handler to catch all errors and return proper status codes",
      },
      {
        term: "Status Code",
        meaning: "A number indicating the result of an HTTP request",
        usage: "Return status code 404 when a resource is not found",
      },
      {
        term: "Logging",
        meaning: "Recording information about what happens in your app",
        usage: "Log errors with request details for debugging production issues",
      },
    ],
    instructorNotes: "Show how bad error handling frustrates developers and hides bugs. Demonstrate the difference between good and poor error messages.",
  },
  "4-5": {
    objectives: [
      "Integrate third-party APIs",
      "Handle API keys securely",
      "Manage rate limits and errors",
    ],
    summary: "Third-party API integration adds external capabilities to your app. Good prompts specify the API, required operations, error handling, and security.",
    theory: `**Integration considerations:**

**API selection:**
- Which API to use?
- What operations are needed?
- Rate limits and pricing

**Security:**
- Store keys in environment variables
- Never expose keys to frontend
- Use server-side requests

**Implementation:**
- Create service wrapper
- Handle authentication (API key, OAuth)
- Parse and transform responses

**Error handling:**
- API errors (invalid key, rate limit)
- Network errors (timeout, DNS)
- Retry logic for transient failures

**Best practices:**
- Cache responses when appropriate
- Implement circuit breaker for failures
- Log API usage for debugging
- Mock for development/testing`,
    examples: [
      {
        title: "Stripe Integration",
        before: "Add Stripe payments",
        after: `Create a Stripe integration service with TypeScript.

Operations needed:
1. Create customer
2. Create payment intent
3. List customer payments
4. Handle webhooks

Service structure:

class StripeService {
  // Create or retrieve Stripe customer for user
  async getOrCreateCustomer(userId: string, email: string): Promise<Customer>
  
  // Create payment intent for checkout
  async createPaymentIntent(
    customerId: string,
    amount: number,
    currency: string,
    metadata?: object
  ): Promise<PaymentIntent>
  
  // List payment history
  async listPayments(
    customerId: string,
    limit?: number
  ): Promise<Payment[]>
}

Webhook handler:
- POST /webhooks/stripe
- Verify signature
- Handle events:
  - payment_intent.succeeded
  - payment_intent.failed
  - customer.subscription.updated

Include:
- Environment variable usage
- Error handling for Stripe errors
- TypeScript types
- Idempotency keys for safe retries`,
        explanation: "This prompt specifies exact operations, webhook handling, security considerations, and best practices for payment integration.",
      },
    ],
    keywords: [
      {
        term: "Integration",
        meaning: "Connecting your app to an external service or API",
        usage: "Add Stripe integration to process credit card payments",
      },
      {
        term: "Webhook",
        meaning: "A URL that receives notifications when events happen",
        usage: "Set up a webhook to receive Stripe payment confirmations",
      },
      {
        term: "Rate Limit",
        meaning: "A restriction on how many API requests you can make",
        usage: "Handle rate limits by waiting and retrying requests",
      },
    ],
    instructorNotes: "Walk through a real API integration. Show how to read API documentation and translate it into implementation prompts. Demonstrate webhook testing.",
  },

  // ============ MODULE 5: Database Design Prompts ============
  "5-1": {
    objectives: [
      "Design database schemas",
      "Model entities and relationships",
      "Normalize data appropriately",
    ],
    summary: "Good data models are the foundation of reliable applications. Clear prompts help generate well-structured, normalized database schemas.",
    theory: `**Data modeling process:**
1. Identify entities (nouns)
2. Define attributes (properties)
3. Establish relationships (connections)
4. Normalize to reduce redundancy

**Entity types:**
- Core entities: Users, Products, Orders
- Junction tables: OrderItems, UserRoles
- Lookup tables: Categories, Statuses

**Relationship types:**
- One-to-One: User has one Profile
- One-to-Many: User has many Posts
- Many-to-Many: Posts have many Tags

**Common fields:**
- id: Primary key
- createdAt, updatedAt: Timestamps
- Foreign keys for relationships

**What to specify:**
- All entities and their purpose
- Field types and constraints
- Required vs optional fields
- Unique constraints
- Indexes for performance`,
    examples: [
      {
        title: "E-commerce Data Model",
        before: "Database for a store",
        after: `Design a database schema for an e-commerce platform.

Entities:

User
- id: UUID, primary key
- email: String, unique, not null
- passwordHash: String, not null
- name: String, not null
- createdAt: DateTime
- updatedAt: DateTime

Product
- id: UUID, primary key
- name: String, not null
- description: Text
- price: Decimal(10,2), not null
- stock: Integer, default 0
- categoryId: UUID, foreign key
- createdAt, updatedAt

Category
- id: UUID, primary key
- name: String, unique, not null
- slug: String, unique, not null
- parentId: UUID, self-reference (optional)

Order
- id: UUID, primary key
- userId: UUID, foreign key
- status: Enum (pending, paid, shipped, delivered, cancelled)
- total: Decimal(10,2)
- shippingAddress: JSON
- createdAt, updatedAt

OrderItem
- id: UUID, primary key
- orderId: UUID, foreign key
- productId: UUID, foreign key
- quantity: Integer, not null
- priceAtTime: Decimal(10,2), not null

Indexes:
- User: email
- Product: categoryId, name
- Order: userId, status, createdAt

Generate as Prisma schema.`,
        explanation: "This prompt lists all entities, their fields with types, relationships, and performance indexes. The output is directly usable.",
      },
    ],
    keywords: [
      {
        term: "Schema",
        meaning: "The structure that defines tables and their relationships",
        usage: "Design a schema with users, posts, and comments tables",
      },
      {
        term: "Foreign Key",
        meaning: "A field that references the primary key of another table",
        usage: "Add a userId foreign key to connect posts to their author",
      },
      {
        term: "Normalization",
        meaning: "Organizing data to reduce redundancy and improve integrity",
        usage: "Normalize by moving categories to a separate table",
      },
    ],
    instructorNotes: "Start with real-world examples. Show how poor data modeling leads to bugs and performance issues. Demonstrate normalization step by step.",
  },
  "5-2": {
    objectives: [
      "Generate SQL CREATE statements",
      "Define constraints and indexes",
      "Create Prisma/ORM schemas",
    ],
    summary: "SQL schema generation creates the actual database structure. Detailed prompts ensure proper types, constraints, and performance optimization.",
    theory: `**SQL schema components:**

**CREATE TABLE:**
- Column definitions
- Data types
- Constraints (NOT NULL, UNIQUE, CHECK)
- Default values

**Keys:**
- PRIMARY KEY: Unique identifier
- FOREIGN KEY: Relationship reference
- UNIQUE: No duplicates allowed

**Indexes:**
- Speed up queries
- Composite indexes for multiple columns
- Partial indexes for filtered queries

**ORM alternatives:**
- Prisma: schema.prisma file
- TypeORM: Decorators on classes
- Drizzle: TypeScript schema

**What to include:**
- Exact column types
- All constraints
- Foreign key actions (CASCADE, SET NULL)
- Index definitions`,
    examples: [
      {
        title: "SQL Schema with Constraints",
        before: "SQL for blog",
        after: `Generate PostgreSQL schema for a blog platform.

Tables:

users
- id: UUID, primary key, default gen_random_uuid()
- email: VARCHAR(255), unique, not null
- username: VARCHAR(50), unique, not null
- password_hash: VARCHAR(255), not null
- avatar_url: TEXT
- bio: TEXT
- created_at: TIMESTAMP, default NOW()
- updated_at: TIMESTAMP, default NOW()

posts
- id: UUID, primary key
- author_id: UUID, foreign key -> users(id) ON DELETE CASCADE
- title: VARCHAR(200), not null
- slug: VARCHAR(200), unique, not null
- content: TEXT, not null
- excerpt: VARCHAR(500)
- status: VARCHAR(20), check (status IN ('draft', 'published', 'archived'))
- published_at: TIMESTAMP
- created_at, updated_at

tags
- id: UUID, primary key
- name: VARCHAR(50), unique, not null
- slug: VARCHAR(50), unique, not null

post_tags (junction table)
- post_id: UUID, foreign key -> posts(id) ON DELETE CASCADE
- tag_id: UUID, foreign key -> tags(id) ON DELETE CASCADE
- PRIMARY KEY (post_id, tag_id)

Indexes:
- posts: author_id, slug, status, published_at DESC
- post_tags: both columns

Include trigger for updated_at timestamp.`,
        explanation: "This prompt specifies PostgreSQL-specific syntax, all constraints, cascade behavior, and performance indexes.",
      },
    ],
    keywords: [
      {
        term: "Constraint",
        meaning: "A rule that limits what data can be stored in a column",
        usage: "Add a NOT NULL constraint so email is always required",
      },
      {
        term: "Index",
        meaning: "A database structure that speeds up searches on specific columns",
        usage: "Create an index on email to make login queries faster",
      },
      {
        term: "CASCADE",
        meaning: "Automatically delete related records when parent is deleted",
        usage: "Use CASCADE so deleting a user removes their posts too",
      },
    ],
    instructorNotes: "Show EXPLAIN ANALYZE to demonstrate index impact. Create tables without indexes, then add them and show the speed difference.",
  },
  "5-3": {
    objectives: [
      "Write effective SQL queries",
      "Use joins and aggregations",
      "Optimize query performance",
    ],
    summary: "SQL queries retrieve and manipulate data. Good query prompts specify the exact data needed, filters, and performance requirements.",
    theory: `**Query types:**
- SELECT: Read data
- INSERT: Create records
- UPDATE: Modify records
- DELETE: Remove records

**Query components:**
- FROM/JOIN: Which tables
- WHERE: Filter conditions
- GROUP BY: Aggregations
- ORDER BY: Sorting
- LIMIT/OFFSET: Pagination

**Join types:**
- INNER JOIN: Only matching rows
- LEFT JOIN: All left + matching right
- RIGHT JOIN: All right + matching left

**Aggregations:**
- COUNT, SUM, AVG, MIN, MAX
- GROUP BY for categories
- HAVING for filtering groups

**Performance:**
- Use indexes on filtered columns
- Avoid SELECT *
- Limit result sets
- Use EXPLAIN to analyze`,
    examples: [
      {
        title: "Complex Query Generation",
        before: "Query for dashboard stats",
        after: `Generate SQL queries for an e-commerce dashboard.

Query 1: Sales by category (last 30 days)
- Group by category name
- Sum of order totals
- Count of orders
- Average order value
- Only include completed orders
- Sort by total sales descending

Query 2: Top customers
- Customer name and email
- Total spent (all time)
- Order count
- Most recent order date
- Top 10 by total spent

Query 3: Low stock products
- Products where stock < 10
- Include category name
- Current stock level
- Last sale date
- Sort by stock ascending

Query 4: Monthly revenue trend
- Last 12 months
- Group by month
- Total revenue
- Order count
- Comparison to previous period (% change)

Include:
- Optimized joins
- Index recommendations
- For PostgreSQL syntax`,
        explanation: "Each query is clearly specified with required fields, filters, aggregations, and sorting. The prompt also requests optimization advice.",
      },
    ],
    keywords: [
      {
        term: "Query",
        meaning: "A request to retrieve or modify data in a database",
        usage: "Write a query to get all users who signed up this month",
      },
      {
        term: "JOIN",
        meaning: "Combining rows from two or more tables based on a related column",
        usage: "Use JOIN to get posts along with their author names",
      },
      {
        term: "Aggregation",
        meaning: "Calculating values like SUM, COUNT, or AVG across groups",
        usage: "Use aggregation to get total sales per category",
      },
    ],
    instructorNotes: "Write queries live and show results. Use EXPLAIN to show query plans. Demonstrate how indexes affect performance.",
  },
  "5-4": {
    objectives: [
      "Create database migrations",
      "Handle schema changes safely",
      "Maintain data integrity",
    ],
    summary: "Migrations are version-controlled changes to your database schema. Good migration prompts ensure safe, reversible changes that preserve data.",
    theory: `**Migration concepts:**
- Forward migration: Apply changes
- Rollback: Undo changes
- Version control for schema

**Safe migration practices:**
- Never delete data without backup
- Add columns as nullable first
- Backfill data before adding constraints
- Test on copy of production data

**Common migrations:**
- Add table
- Add/modify/remove column
- Add/remove index
- Add/modify constraint
- Rename table/column

**Migration tools:**
- Prisma Migrate
- Flyway
- Knex migrations
- Raw SQL files

**What to include:**
- Up migration (apply)
- Down migration (rollback)
- Data transformation if needed
- Order of operations`,
    examples: [
      {
        title: "Adding a Feature Migration",
        before: "Add comments to posts",
        after: `Create a migration to add comments feature to blog.

Context: Existing posts and users tables

Migration: add_comments_table

Up migration:
1. Create comments table
   - id: UUID, primary key
   - post_id: UUID, foreign key -> posts(id) ON DELETE CASCADE
   - user_id: UUID, foreign key -> users(id) ON DELETE SET NULL
   - parent_id: UUID, foreign key -> comments(id) ON DELETE CASCADE (for replies)
   - content: TEXT, not null
   - created_at, updated_at
   
2. Add indexes
   - post_id (for loading comments on post)
   - user_id (for user comment history)
   - parent_id (for loading replies)

3. Add comments_count column to posts
   - Default 0
   - Add trigger to increment/decrement on comment add/delete

Down migration:
1. Remove trigger
2. Remove comments_count from posts
3. Drop comments table

Generate for:
- PostgreSQL SQL
- Prisma schema update
- Migration file`,
        explanation: "This migration adds a new feature with proper indexes, a trigger for denormalized count, and a complete rollback strategy.",
      },
    ],
    keywords: [
      {
        term: "Migration",
        meaning: "A version-controlled change to your database structure",
        usage: "Create a migration to add the comments table",
      },
      {
        term: "Rollback",
        meaning: "Undoing a migration to return to the previous state",
        usage: "Write a rollback to remove the table if the migration fails",
      },
      {
        term: "Backfill",
        meaning: "Populating data for a new column based on existing data",
        usage: "Backfill the full_name column by combining first and last names",
      },
    ],
    instructorNotes: "Show a failed migration and recovery. Demonstrate the importance of rollback scripts. Practice on a test database before production.",
  },
  "5-5": {
    objectives: [
      "Model complex relationships",
      "Use junction tables effectively",
      "Handle hierarchical data",
    ],
    summary: "Complex relationships require careful modeling. Proper relationship design prevents data anomalies and enables efficient queries.",
    theory: `**Relationship types:**

**One-to-One:**
- User has one Profile
- Use when splitting large tables
- Foreign key on either side

**One-to-Many:**
- User has many Posts
- Foreign key on the "many" side
- Most common relationship

**Many-to-Many:**
- Posts have many Tags
- Requires junction table
- Junction can have extra fields

**Hierarchical:**
- Self-referencing relationship
- Categories with subcategories
- Comments with replies

**Polymorphic:**
- Comments on posts OR products
- Use type + id columns
- Or separate junction tables

**Common patterns:**
- Soft delete (deletedAt)
- Audit trail (createdBy, updatedBy)
- Versioning (version, previousId)`,
    examples: [
      {
        title: "Complex Relationship Model",
        before: "Users and permissions",
        after: `Design a role-based access control (RBAC) system.

Entities and relationships:

User (one-to-many with UserRole)
- id, email, name

Role (many-to-many with Permission via RolePermission)
- id, name, description
- Examples: admin, editor, viewer

Permission
- id, name, resource, action
- Examples: posts:create, posts:read, users:delete

UserRole (junction: User <-> Role)
- user_id: FK
- role_id: FK
- assigned_at: TIMESTAMP
- assigned_by: FK -> users(id)
- expires_at: TIMESTAMP (optional, for temp roles)
- PRIMARY KEY (user_id, role_id)

RolePermission (junction: Role <-> Permission)
- role_id: FK
- permission_id: FK
- PRIMARY KEY (role_id, permission_id)

Additional:
- Roles can inherit from other roles (parent_role_id)
- Create query to check if user has permission
- Create query to get all permissions for user

Include:
- Prisma schema with relations
- PostgreSQL CREATE statements
- Helper queries`,
        explanation: "This models a complete RBAC system with role inheritance, temporary roles, and audit fields on the junction table.",
      },
    ],
    keywords: [
      {
        term: "Junction Table",
        meaning: "A table that connects two other tables in a many-to-many relationship",
        usage: "Use a post_tags junction table to connect posts and tags",
      },
      {
        term: "Self-Reference",
        meaning: "A table that references itself for hierarchical data",
        usage: "Add parent_id self-reference for category subcategories",
      },
      {
        term: "RBAC",
        meaning: "Role-Based Access Control - permissions assigned through roles",
        usage: "Implement RBAC to control what users can do in the app",
      },
    ],
    instructorNotes: "Draw relationship diagrams. Show how junction tables enable many-to-many. Demonstrate queries that traverse relationships.",
  },

  // ============ MODULE 6: DevOps & Deployment Prompts ============
  "6-1": {
    objectives: [
      "Create Docker configurations",
      "Containerize applications",
      "Optimize Docker images",
    ],
    summary: "Docker containers package your application with its dependencies. Good Dockerfiles are small, secure, and build quickly.",
    theory: `**Docker components:**
- Dockerfile: Build instructions
- Image: Built package
- Container: Running instance
- docker-compose: Multi-container apps

**Dockerfile best practices:**
- Use official base images
- Multi-stage builds
- Order layers for caching
- Don't run as root
- Minimize image size

**What to include in prompts:**
- Application type (Node, Python, etc.)
- Required dependencies
- Build vs runtime steps
- Port exposure
- Environment variables
- Volume mounts`,
    examples: [
      {
        title: "Node.js App Dockerfile",
        before: "Docker for my app",
        after: `Create a production Dockerfile for a Node.js application.

Stack: Node.js 20, TypeScript, Prisma ORM

Requirements:
- Multi-stage build (build + production)
- Minimal final image size
- Run as non-root user
- Handle Prisma binary generation
- Use npm ci for reproducible installs

Stages:

1. deps: Install production dependencies
2. build: Compile TypeScript, generate Prisma
3. production: Copy only needed files

Include:
- .dockerignore file
- Health check command
- Proper signal handling
- Layer caching optimization

Also create docker-compose.yml with:
- App service
- PostgreSQL service
- Volume for database data
- Environment variables from .env`,
        explanation: "This prompt specifies multi-stage builds, security practices, and includes docker-compose for local development.",
      },
    ],
    keywords: [
      {
        term: "Docker",
        meaning: "A tool that packages apps into containers that run anywhere",
        usage: "Use Docker to ensure your app runs the same in dev and production",
      },
      {
        term: "Container",
        meaning: "An isolated environment running your application",
        usage: "Deploy your app as a container on any cloud platform",
      },
      {
        term: "Image",
        meaning: "A snapshot of your app and dependencies used to create containers",
        usage: "Build a Docker image and push it to a registry for deployment",
      },
    ],
    instructorNotes: "Build and run a container live. Show the difference between dev and production Dockerfiles. Demonstrate image size optimization.",
  },
  "6-2": {
    objectives: [
      "Set up CI/CD pipelines",
      "Automate testing and deployment",
      "Configure GitHub Actions",
    ],
    summary: "CI/CD pipelines automate testing and deployment. Good pipeline prompts specify triggers, stages, and deployment targets.",
    theory: `**CI/CD concepts:**
- Continuous Integration: Auto test on every push
- Continuous Deployment: Auto deploy on merge

**Pipeline stages:**
1. Install dependencies
2. Run linters
3. Run tests
4. Build application
5. Deploy to staging/production

**Triggers:**
- Push to branch
- Pull request
- Manual trigger
- Schedule

**What to include:**
- Platform (GitHub Actions, GitLab CI)
- Triggers and branches
- Environment variables/secrets
- Build steps
- Test commands
- Deployment target`,
    examples: [
      {
        title: "GitHub Actions Pipeline",
        before: "CI/CD for my project",
        after: `Create GitHub Actions workflow for a React + Node.js app.

Triggers:
- Push to main: Deploy to production
- Push to develop: Deploy to staging
- Pull request: Run tests only

Jobs:

1. test (runs on all triggers)
   - Checkout code
   - Setup Node.js 20
   - Install dependencies (npm ci)
   - Run linter (npm run lint)
   - Run type check (npm run typecheck)
   - Run tests (npm test)
   - Upload coverage to Codecov

2. build (runs after test passes)
   - Build frontend (npm run build)
   - Build backend (npm run build:server)
   - Upload artifacts

3. deploy-staging (only develop branch)
   - Download artifacts
   - Deploy to staging environment
   - Run smoke tests
   - Notify Slack on success/failure

4. deploy-production (only main branch)
   - Require manual approval
   - Download artifacts
   - Deploy to production
   - Run health checks
   - Notify team

Include:
- Caching for node_modules
- Environment secrets usage
- Conditional job execution
- Failure notifications`,
        explanation: "This pipeline covers testing, building, and deploying with environment-specific behavior and proper notifications.",
      },
    ],
    keywords: [
      {
        term: "CI/CD",
        meaning: "Continuous Integration and Deployment - automating test and deploy",
        usage: "Set up CI/CD to automatically test code on every pull request",
      },
      {
        term: "Pipeline",
        meaning: "A series of automated steps that run when code changes",
        usage: "The pipeline runs tests, builds, and deploys to production",
      },
      {
        term: "Workflow",
        meaning: "A configuration file defining CI/CD pipeline steps",
        usage: "Create a workflow file to run tests on every push",
      },
    ],
    instructorNotes: "Set up a real pipeline and trigger it. Show how it catches bugs before they reach production. Demonstrate deployment automation.",
  },
  "6-3": {
    objectives: [
      "Deploy to cloud platforms",
      "Configure cloud services",
      "Manage infrastructure",
    ],
    summary: "Cloud deployment makes your application available to users. Good deployment prompts specify the platform, services, and configuration needs.",
    theory: `**Deployment options:**
- Serverless: Vercel, Netlify, AWS Lambda
- Containers: AWS ECS, Google Cloud Run
- VMs: EC2, Digital Ocean Droplets
- Kubernetes: EKS, GKE, AKS

**What to specify:**
- Platform and services
- Resource requirements
- Scaling configuration
- Domain and SSL
- Database connection
- Environment variables

**Common cloud services:**
- Compute: Where code runs
- Database: Managed PostgreSQL, MongoDB
- Storage: S3, Cloud Storage
- CDN: CloudFront, Cloudflare
- Secrets: AWS Secrets Manager

**Deployment considerations:**
- Zero-downtime deployment
- Rollback strategy
- Health checks
- Monitoring and alerts`,
    examples: [
      {
        title: "Vercel Deployment Config",
        before: "Deploy to Vercel",
        after: `Create Vercel deployment configuration for a Next.js app.

vercel.json configuration:
- Build command: npm run build
- Output directory: .next
- Node.js version: 20.x

Environment variables needed:
- DATABASE_URL: PostgreSQL connection string
- NEXTAUTH_SECRET: Auth secret
- NEXTAUTH_URL: Site URL
- STRIPE_SECRET_KEY: Payment processing

Edge functions:
- /api/edge/* routes run on edge

Rewrites:
- /blog/:slug -> /posts/:slug (legacy URLs)

Headers:
- Cache-Control for static assets
- Security headers (CSP, X-Frame-Options)

Regions:
- Primary: iad1 (US East)
- Failover: sfo1 (US West)

Preview deployments:
- Enabled for all branches
- Separate preview database

Production:
- Custom domain with SSL
- Analytics enabled
- Web Vitals monitoring

Include GitHub integration setup instructions.`,
        explanation: "This covers Vercel-specific configuration including edge functions, rewrites, security headers, and multi-region deployment.",
      },
    ],
    keywords: [
      {
        term: "Deployment",
        meaning: "Making your application available on the internet",
        usage: "Deploy to Vercel to make your site live for users",
      },
      {
        term: "Serverless",
        meaning: "Running code without managing servers - scales automatically",
        usage: "Use serverless functions to run backend code without a server",
      },
      {
        term: "CDN",
        meaning: "Content Delivery Network - serves content from nearby locations",
        usage: "Use a CDN to make your site load faster worldwide",
      },
    ],
    instructorNotes: "Deploy an app live during the lesson. Show the deployment logs and domain configuration. Demonstrate rollback for a failed deploy.",
  },
  "6-4": {
    objectives: [
      "Manage environment variables",
      "Handle secrets securely",
      "Configure different environments",
    ],
    summary: "Environment variables separate configuration from code. Proper secret management prevents security breaches and makes deployments flexible.",
    theory: `**Environment types:**
- Development: Local machine
- Staging: Test environment
- Production: Live users

**Variable categories:**
- Config: API URLs, feature flags
- Secrets: API keys, database passwords
- Runtime: Node environment, port

**Secret management:**
- Never commit secrets to git
- Use .env files for local
- Use secret managers for production
- Rotate secrets regularly

**Best practices:**
- Document all required variables
- Provide example .env file
- Validate variables on startup
- Use different values per environment`,
    examples: [
      {
        title: "Environment Configuration",
        before: "Set up env variables",
        after: `Create environment variable management for a full-stack app.

Required variables:

# App
NODE_ENV: development | staging | production
PORT: Server port
APP_URL: Full application URL

# Database
DATABASE_URL: PostgreSQL connection string
REDIS_URL: Redis for caching/sessions

# Auth
JWT_SECRET: 32+ character secret
SESSION_SECRET: Session encryption

# Third-party
STRIPE_SECRET_KEY: Payment processing
STRIPE_WEBHOOK_SECRET: Webhook verification
SENDGRID_API_KEY: Email sending
S3_ACCESS_KEY: File storage
S3_SECRET_KEY: File storage
S3_BUCKET: Bucket name

Create:
1. .env.example with placeholder values
2. .env.local for development defaults
3. Environment validation on startup (Zod schema)
4. Type-safe env access utility

Validation:
- Check all required vars exist
- Validate URL formats
- Fail fast with clear error messages

Documentation:
- README section explaining each variable
- Setup instructions for new developers`,
        explanation: "This creates a complete environment management system with validation, documentation, and type-safe access.",
      },
    ],
    keywords: [
      {
        term: "Environment Variable",
        meaning: "A setting stored outside code that changes per environment",
        usage: "Use environment variables for API keys and database URLs",
      },
      {
        term: "Secret",
        meaning: "Sensitive data like passwords or API keys that must be protected",
        usage: "Store secrets in a secret manager, not in code",
      },
      {
        term: ".env File",
        meaning: "A file storing environment variables for local development",
        usage: "Create a .env file with your local database connection",
      },
    ],
    instructorNotes: "Show what happens when secrets leak. Demonstrate proper secret rotation. Set up validation that fails fast on missing variables.",
  },
  "6-5": {
    objectives: [
      "Set up application monitoring",
      "Configure logging systems",
      "Create alerts for issues",
    ],
    summary: "Monitoring and logging help you understand what's happening in production. Good prompts specify what to track, how to log, and when to alert.",
    theory: `**Monitoring types:**
- Infrastructure: CPU, memory, disk
- Application: Response times, error rates
- Business: Signups, purchases, usage

**What to monitor:**
- HTTP response times
- Error rates
- Database query times
- Queue lengths
- User activity

**Logging levels:**
- Error: Something broke
- Warn: Something concerning
- Info: Normal operations
- Debug: Development details

**Alerting:**
- Define thresholds
- Avoid alert fatigue
- Include context
- Route to right people`,
    examples: [
      {
        title: "Monitoring Setup",
        before: "Add monitoring",
        after: `Create monitoring and logging setup for a Node.js API.

Logging:
- Use structured logging (JSON format)
- Include: timestamp, level, message, requestId, userId
- Log levels: error, warn, info, debug
- Environment-based level (debug in dev, info in prod)

Request logging:
- Log all requests: method, path, duration, status
- Log slow requests (> 1s) as warnings
- Log errors with stack trace

Application metrics:
- Request rate
- Response time (p50, p95, p99)
- Error rate by endpoint
- Active connections
- Memory usage

Database metrics:
- Query count
- Query duration
- Connection pool status
- Slow queries (> 100ms)

Alerts (with thresholds):
- Error rate > 5% for 5 minutes
- p99 latency > 2s
- Memory usage > 80%
- Database connections > 90%

Include:
- Winston logger configuration
- Prometheus metrics middleware
- Grafana dashboard JSON
- Alert rules`,
        explanation: "This creates comprehensive observability with structured logs, metrics, and actionable alerts.",
      },
    ],
    keywords: [
      {
        term: "Monitoring",
        meaning: "Watching your app to detect problems and understand behavior",
        usage: "Set up monitoring to know when the API is slow or failing",
      },
      {
        term: "Logging",
        meaning: "Recording events and errors that happen in your application",
        usage: "Add logging to track user actions and debug issues",
      },
      {
        term: "Alert",
        meaning: "A notification when something needs attention",
        usage: "Create an alert when error rate exceeds 5 percent",
      },
    ],
    instructorNotes: "Show real monitoring dashboards. Create an alert and trigger it. Demonstrate how good logging helps debug production issues.",
  },

  // ============ MODULE 7: Assets & Creative Prompts ============
  "7-1": {
    objectives: [
      "Write effective image generation prompts",
      "Understand image AI capabilities",
      "Control style and composition",
    ],
    summary: "Image generation AI creates visuals from text descriptions. Good prompts specify subject, style, composition, and technical details.",
    theory: `**Prompt components:**
- Subject: What is in the image
- Style: Art style, medium, technique
- Composition: Framing, angle, layout
- Lighting: Natural, studio, dramatic
- Mood: Emotion, atmosphere
- Technical: Resolution, aspect ratio

**Style keywords:**
- Photography: cinematic, portrait, landscape
- Art: watercolor, oil painting, digital art
- Design: minimalist, isometric, flat

**Quality modifiers:**
- High quality, detailed, sharp
- 4K, 8K resolution
- Professional, polished

**Common mistakes:**
- Too vague: "a nice picture"
- Too complex: cramming everything
- Conflicting styles
- Ignoring aspect ratio`,
    examples: [
      {
        title: "Product Photography",
        before: "Picture of headphones",
        after: `Professional product photography of premium wireless headphones.

Subject:
- Modern over-ear headphones
- Matte black with silver accents
- Subtle brand logo visible

Style:
- Clean product photography
- Magazine advertisement quality
- Apple-style minimalism

Composition:
- 3/4 angle view
- Floating in frame
- Negative space on right for text

Lighting:
- Soft studio lighting
- Subtle gradient background (white to light gray)
- Gentle reflection below

Mood:
- Premium, luxurious, aspirational
- Clean and sophisticated

Technical:
- Aspect ratio: 16:9
- High resolution
- Sharp focus on product`,
        explanation: "This prompt gives specific guidance on every aspect of the image, resulting in consistent, usable product shots.",
      },
    ],
    keywords: [
      {
        term: "Prompt",
        meaning: "Text description telling AI what image to create",
        usage: "Write a detailed prompt to get the exact image you need",
      },
      {
        term: "Composition",
        meaning: "How elements are arranged within the image frame",
        usage: "Specify composition like centered subject with space for text",
      },
      {
        term: "Style",
        meaning: "The artistic look and feel of the generated image",
        usage: "Add style keywords like minimalist or photorealistic",
      },
    ],
    instructorNotes: "Generate images live and iterate on prompts. Show how small changes affect output. Compare vague vs specific prompts.",
  },
  "7-2": {
    objectives: [
      "Generate logo concepts",
      "Create brand asset prompts",
      "Maintain brand consistency",
    ],
    summary: "Logo and brand asset generation requires understanding of brand identity. Good prompts communicate brand values and visual style clearly.",
    theory: `**Logo types:**
- Wordmark: Company name as logo
- Lettermark: Initials only
- Icon/Symbol: Abstract or pictorial
- Combination: Icon + wordmark
- Emblem: Badge-style design

**Brand elements:**
- Logo variations (full, icon, mono)
- Color palette
- Typography
- Iconography style
- Pattern/texture

**What to specify:**
- Brand personality
- Industry context
- Target audience
- Visual preferences
- Usage context (digital, print)

**Logo prompts should include:**
- Business type
- Style direction
- Color preferences
- Format needs`,
    examples: [
      {
        title: "Tech Startup Logo",
        before: "Logo for my app",
        after: `Design a logo for "Flowbase" - a workflow automation SaaS.

Brand personality:
- Modern and innovative
- Approachable, not intimidating
- Efficient and smart
- Trustworthy

Visual direction:
- Minimalist, geometric
- Clean lines, no gradients
- Works well at small sizes

Concepts to explore:
1. Abstract flow/movement symbol
2. Connected nodes/workflow
3. Stylized "F" lettermark

Color:
- Primary: Deep blue (trust, tech)
- Accent: Vibrant teal (energy, innovation)
- Works on both light and dark backgrounds

Requirements:
- Vector format
- Horizontal and stacked versions
- Icon-only version for favicon
- Black and white version

Avoid:
- Overly complex details
- Literal workflow diagrams
- Generic tech cliches (gears, lightbulbs)`,
        explanation: "This prompt provides brand context, specific directions, multiple concepts to explore, and practical requirements.",
      },
    ],
    keywords: [
      {
        term: "Brand Identity",
        meaning: "The visual and emotional elements that define a brand",
        usage: "Define brand identity before creating logos and marketing materials",
      },
      {
        term: "Wordmark",
        meaning: "A logo that is the company name in stylized text",
        usage: "Create a wordmark for a text-based logo design",
      },
      {
        term: "Vector",
        meaning: "Graphics that scale to any size without losing quality",
        usage: "Export logos as vectors so they work at any size",
      },
    ],
    instructorNotes: "Show logo evolution from prompt to final asset. Discuss what makes logos work at different sizes. Generate variations and compare.",
  },
  "7-3": {
    objectives: [
      "Generate consistent icon sets",
      "Match icon style to UI",
      "Create custom icons with AI",
    ],
    summary: "Icons need to be consistent in style, size, and meaning. Good icon prompts specify style, stroke weight, and functional purpose.",
    theory: `**Icon styles:**
- Outlined: Clean, modern, light
- Filled: Bold, prominent, solid
- Duo-tone: Accent color highlight
- Hand-drawn: Casual, friendly

**Consistency factors:**
- Stroke weight (1px, 2px)
- Corner radius
- Grid alignment
- Visual weight
- Level of detail

**What to specify:**
- Icon list (all needed icons)
- Style reference (Lucide, Phosphor)
- Size (24px, 32px base)
- Color behavior
- Animation needs

**Icon categories:**
- Navigation (home, menu, back)
- Actions (edit, delete, save)
- Objects (file, folder, image)
- Status (success, warning, error)`,
    examples: [
      {
        title: "Dashboard Icon Set",
        before: "Icons for my dashboard",
        after: `Create an icon set for a project management dashboard.

Style:
- Outlined (2px stroke)
- Rounded corners (2px radius)
- 24px base grid
- Similar to Lucide Icons

Icons needed:
1. Dashboard - grid/overview view
2. Projects - folder with badge
3. Tasks - checklist
4. Calendar - date picker
5. Team - people group
6. Messages - chat bubble
7. Settings - gear
8. Notifications - bell
9. Search - magnifying glass
10. Add new - plus circle

Variations needed:
- Default (gray)
- Active (primary color)
- Filled version for selected state

Requirements:
- SVG format
- Consistent visual weight
- Clear at small sizes (16px)
- Work on both light and dark backgrounds

Style consistency:
- Same stroke weight throughout
- Aligned to pixel grid
- Uniform corner rounding`,
        explanation: "This prompt specifies style details, lists all needed icons, and ensures consistency across the set.",
      },
    ],
    keywords: [
      {
        term: "Icon",
        meaning: "A small graphic representing an action, object, or concept",
        usage: "Use icons to make navigation and actions easy to understand",
      },
      {
        term: "Stroke Weight",
        meaning: "The thickness of lines in an outlined icon",
        usage: "Use consistent 2px stroke weight across all icons",
      },
      {
        term: "SVG",
        meaning: "Scalable Vector Graphics - a format for icons that scales perfectly",
        usage: "Export icons as SVG for crisp display at any size",
      },
    ],
    instructorNotes: "Generate icons and test in actual UI. Show how inconsistent styles break visual harmony. Demonstrate size testing.",
  },
  "7-4": {
    objectives: [
      "Generate background graphics",
      "Create seamless patterns",
      "Design abstract visuals",
    ],
    summary: "Backgrounds and patterns set the visual foundation of designs. Good prompts specify pattern type, colors, and intended usage.",
    theory: `**Background types:**
- Solid colors
- Gradients (linear, radial)
- Patterns (geometric, organic)
- Textures (noise, grain)
- Abstract shapes

**Pattern considerations:**
- Seamless tiling
- Density and scale
- Color harmony
- Visual hierarchy

**Usage contexts:**
- Website backgrounds
- Card backgrounds
- Hero sections
- Social media

**What to specify:**
- Pattern type
- Colors from palette
- Tile size
- Density/complexity
- Where it will be used`,
    examples: [
      {
        title: "Website Background Pattern",
        before: "Background for website",
        after: `Create a subtle background pattern for a tech company website.

Pattern type:
- Geometric, abstract
- Connected lines and dots (network/tech feel)
- Very low contrast (subtle)

Colors:
- Base: Near-white (#FAFAFA)
- Pattern: Light gray (#E5E5E5)
- Occasional accent dots: Primary blue (10% opacity)

Characteristics:
- Seamlessly tileable
- Works at 1920x1080+
- Non-distracting (content stays focus)
- Professional, not playful

Technical:
- SVG format for quality
- Tile size: 400x400px
- Opacity: Pattern at 30-40%

Usage:
- Main page background
- Behind hero sections
- Card container backgrounds

Also create:
- Darker version for dark mode
- Higher contrast version for section breaks`,
        explanation: "This prompt considers the functional use (background, subtle) and provides specific technical requirements for implementation.",
      },
    ],
    keywords: [
      {
        term: "Pattern",
        meaning: "A repeated design that creates visual texture",
        usage: "Add a subtle pattern to backgrounds for visual interest",
      },
      {
        term: "Seamless",
        meaning: "A pattern that tiles without visible edges or breaks",
        usage: "Create a seamless pattern that repeats without showing lines",
      },
      {
        term: "Gradient",
        meaning: "A smooth transition between two or more colors",
        usage: "Use a gradient from blue to purple for the hero background",
      },
    ],
    instructorNotes: "Show patterns in context. Demonstrate seamless tiling. Compare busy vs subtle backgrounds and their effect on readability.",
  },
  "7-5": {
    objectives: [
      "Generate music and audio with AI",
      "Write effective audio prompts",
      "Understand audio generation tools",
    ],
    summary: "Audio generation AI creates music, sound effects, and ambient sounds. Good prompts specify mood, tempo, instruments, and technical requirements.",
    theory: `**Audio types:**
- Background music
- Sound effects
- Ambient/atmosphere
- Voice/speech
- Jingles/intros

**Music prompt elements:**
- Genre/style
- Tempo (BPM)
- Mood/emotion
- Instruments
- Structure

**Sound effect elements:**
- Type (click, whoosh, notification)
- Duration
- Intensity
- Variations needed

**What to specify:**
- Purpose (background, notification)
- Length
- Loop requirements
- Format (MP3, WAV)
- Licensing needs`,
    examples: [
      {
        title: "App Notification Sounds",
        before: "Make notification sounds",
        after: `Create a set of notification sounds for a productivity app.

Sound set:
1. Success/Complete
   - Pleasant, affirming
   - Short chime or bell
   - 0.5-1 second

2. New message
   - Gentle attention-grab
   - Soft bubble or ping
   - Not jarring
   - 0.3 seconds

3. Error/Warning
   - Noticeable but not alarming
   - Lower tone
   - 0.5 seconds

4. Timer complete
   - Celebratory
   - Slightly longer (1-2 seconds)
   - Clear completion signal

Style:
- Modern, clean
- Similar to iOS/Material sounds
- Not 8-bit or retro
- Professional feel

Technical:
- Format: WAV and MP3
- Sample rate: 44.1kHz
- Volume normalized
- Clean start and end (no pops)

All sounds should:
- Feel related (same family)
- Be distinct from each other
- Work at low volumes
- Not be annoying with repetition`,
        explanation: "This prompt creates a cohesive sound set with specific purposes, style guidelines, and technical requirements.",
      },
    ],
    keywords: [
      {
        term: "BPM",
        meaning: "Beats Per Minute - the tempo or speed of music",
        usage: "Set BPM to 90 for a relaxed, calm background track",
      },
      {
        term: "Loop",
        meaning: "Audio that repeats seamlessly from end to start",
        usage: "Create a loopable ambient track for the meditation feature",
      },
      {
        term: "Normalized",
        meaning: "Audio adjusted to a consistent volume level",
        usage: "Normalize all sounds so they play at similar volumes",
      },
    ],
    instructorNotes: "Play audio examples and discuss what works. Generate sounds and test in context. Show how audio enhances UX.",
  },

  // ============ MODULE 8: AI Tools & Advanced Usage ============
  "8-1": {
    objectives: [
      "Understand what Lovable is and how to use it",
      "Write effective prompts for Lovable",
      "Build full web applications with AI",
    ],
    summary: "Lovable is an AI-powered platform that builds complete web applications from natural language prompts. It handles frontend, backend, database, and deployment automatically.",
    theory: `**What is Lovable?**
Lovable is an AI web app builder that creates full-stack applications from text prompts. You describe what you want, and it generates React code, connects databases, and deploys your app.

**Key features:**
- Generates React + TypeScript + Tailwind code
- Connects to Supabase for database and auth
- Handles deployment automatically
- Real-time preview as you build
- Edit by prompting or by code

**Best prompts for Lovable:**
- Describe the app purpose clearly
- List key features
- Mention design preferences
- Specify user flows

**Lovable strengths:**
- Rapid prototyping
- Full-stack apps in minutes
- No setup or configuration needed
- Good for MVPs and side projects

**Prompting tips:**
- Start with the big picture
- Add features incrementally
- Be specific about UI/UX
- Reference similar apps for clarity`,
    examples: [
      {
        title: "Building with Lovable",
        before: "Make me an app",
        after: `Build a habit tracking app with the following:

Core features:
- Users can add habits to track (name, frequency: daily/weekly)
- Daily check-in screen to mark habits complete
- Streak tracking for each habit
- Simple analytics showing completion rates

User flow:
1. Landing page with sign up
2. Dashboard showing today's habits
3. Add habit button with form
4. Habit detail page with history
5. Profile with settings

Design:
- Clean, minimal UI
- Soft colors (avoid harsh contrasts)
- Mobile-first layout
- Celebratory animation when completing habits

Tech preferences:
- Use Supabase for auth and database
- Store habit data per user`,
        explanation: "This prompt gives Lovable clear direction on features, user flow, and design. It will generate a complete working app.",
      },
    ],
    keywords: [
      {
        term: "Lovable",
        meaning: "An AI platform that builds full web apps from text descriptions",
        usage: "Use Lovable to create a complete app without writing code yourself",
      },
      {
        term: "Full-stack",
        meaning: "Both frontend (what users see) and backend (server and database)",
        usage: "Lovable creates full-stack apps with frontend and database",
      },
      {
        term: "Supabase",
        meaning: "A backend service providing database, auth, and storage",
        usage: "Connect Supabase to store user data and handle login",
      },
    ],
    instructorNotes: "Demo building an app live in Lovable. Show how iterative prompting refines the result. Emphasize that it generates real, editable code.",
  },
  "8-2": {
    objectives: [
      "Understand what Bolt.new is and how it works",
      "Write prompts for full-stack app generation",
      "Compare Bolt.new with other AI builders",
    ],
    summary: "Bolt.new by StackBlitz creates full-stack applications in the browser. It uses AI to generate code and runs everything in a web container without local setup.",
    theory: `**What is Bolt.new?**
Bolt.new is an AI app builder from StackBlitz. It creates full-stack applications entirely in the browser using WebContainers technology. No installation needed.

**Key features:**
- Full Node.js environment in browser
- Generates React, Vue, Svelte, etc.
- Backend with Express, Fastify
- Database connections
- One-click deployment

**Best for:**
- Quick prototypes
- Full-stack experiments
- Learning and exploration
- Sharing runnable demos

**Prompting Bolt.new:**
- State the framework preference
- Describe the app functionality
- Mention API integrations needed
- Specify styling preferences

**Bolt.new strengths:**
- No local setup needed
- Instant shareable links
- Full backend support
- Great for experimentation`,
    examples: [
      {
        title: "Building with Bolt.new",
        before: "Create an app",
        after: `Create a recipe sharing app with React and Express.

Frontend:
- Recipe list with search and filter by cuisine
- Recipe detail page with ingredients and steps
- Add recipe form with image upload
- User favorites functionality

Backend:
- Express API with RESTful endpoints
- SQLite database for simplicity
- Image upload handling

API endpoints:
- GET /recipes - list with filters
- GET /recipes/:id - single recipe
- POST /recipes - create new
- PUT /recipes/:id - update
- POST /recipes/:id/favorite - toggle favorite

Styling:
- Tailwind CSS
- Clean, food-blog aesthetic
- Card-based layout`,
        explanation: "This prompt specifies frontend, backend, and API requirements. Bolt.new will generate and run everything in the browser.",
      },
    ],
    keywords: [
      {
        term: "Bolt.new",
        meaning: "AI app builder that runs full-stack code in the browser",
        usage: "Use Bolt.new to prototype ideas without any local setup",
      },
      {
        term: "WebContainers",
        meaning: "Technology that runs Node.js entirely in the browser",
        usage: "WebContainers let you run backend code without a server",
      },
      {
        term: "Prototype",
        meaning: "A quick working version to test an idea",
        usage: "Create a prototype in Bolt.new before building the full app",
      },
    ],
    instructorNotes: "Build something live in Bolt.new. Show how it runs Node.js in the browser. Compare the experience to local development.",
  },
  "8-3": {
    objectives: [
      "Understand V0 by Vercel",
      "Generate UI components with V0",
      "Use V0 for rapid UI prototyping",
    ],
    summary: "V0 by Vercel is an AI tool that generates React UI components from text descriptions. It creates beautiful, production-ready components using shadcn/ui and Tailwind.",
    theory: `**What is V0?**
V0 is Vercel's AI UI generator. You describe a component or page, and it generates high-quality React code using modern best practices.

**Key features:**
- Generates React + TypeScript
- Uses shadcn/ui components
- Tailwind CSS styling
- Multiple variations per prompt
- Copy code directly into projects

**Best for:**
- UI component generation
- Landing page designs
- Dashboard layouts
- Form designs
- Marketing pages

**V0 strengths:**
- Beautiful, polished output
- Production-ready code
- Consistent with modern UI patterns
- Great for design inspiration

**Prompting V0:**
- Describe the component visually
- Reference similar designs
- Specify interactive behaviors
- Mention responsive needs`,
    examples: [
      {
        title: "V0 Component Prompt",
        before: "Make a pricing section",
        after: `Create a pricing section for a SaaS product.

Layout:
- 3 tier cards side by side
- Highlight the middle tier (recommended)
- Toggle for monthly/annual pricing

Tiers:
1. Starter - $9/mo, basic features
2. Pro - $29/mo, most popular, more features
3. Enterprise - Custom pricing, all features

Card content:
- Tier name and price
- Feature list with checkmarks
- CTA button
- "Save 20%" badge for annual

Design:
- Clean, minimal
- Subtle shadows
- Rounded corners
- Primary color for CTA buttons
- Gray for non-recommended tiers

Responsive:
- Stack vertically on mobile
- Keep highlight on Pro tier`,
        explanation: "V0 will generate multiple variations of this pricing section. You can pick the best one or iterate further.",
      },
    ],
    keywords: [
      {
        term: "V0",
        meaning: "Vercel's AI tool that generates React UI components",
        usage: "Use V0 to quickly generate beautiful UI component code",
      },
      {
        term: "shadcn/ui",
        meaning: "A collection of reusable React components built with Tailwind",
        usage: "V0 generates components using shadcn/ui for consistency",
      },
      {
        term: "Component",
        meaning: "A reusable piece of UI that can be used throughout an app",
        usage: "Generate a pricing component with V0 and use it on your site",
      },
    ],
    instructorNotes: "Generate components in V0 and show the different variations. Demonstrate copying code into a real project. Compare V0 output quality.",
  },
  "8-4": {
    objectives: [
      "Understand Cursor AI code editor",
      "Use AI-assisted coding effectively",
      "Write better code with Cursor",
    ],
    summary: "Cursor is an AI-powered code editor built on VS Code. It provides intelligent code completion, chat assistance, and codebase understanding for faster development.",
    theory: `**What is Cursor?**
Cursor is a code editor with AI built in. It understands your entire codebase and helps you write, edit, and understand code through natural language.

**Key features:**
- AI code completion (Tab)
- Chat with your codebase (Cmd+L)
- Edit code with instructions (Cmd+K)
- Understands project context
- Uses Claude, GPT-4, and more

**Best for:**
- Professional developers
- Complex codebases
- Refactoring tasks
- Learning new codebases
- Debugging

**Cursor commands:**
- Tab: Accept completion
- Cmd+K: Edit selection with AI
- Cmd+L: Open chat
- @file: Reference specific files
- @codebase: Search entire project

**Cursor strengths:**
- Codebase awareness
- Multi-file edits
- Fast completions
- Familiar VS Code interface`,
    examples: [
      {
        title: "Using Cursor Effectively",
        before: "Write some code",
        after: `Cursor workflow examples:

Cmd+K (Edit with instructions):
Select a function, press Cmd+K, type:
"Add error handling and TypeScript types"

Chat with codebase (Cmd+L):
"How does authentication work in this project?"
"Where is the user data being fetched?"
"What components use the Button component?"

Tab completion:
Start typing a function and Cursor suggests
the complete implementation based on context.

Multi-file edits:
"Update all API calls to use the new error handler"
Cursor will find and modify relevant files.

Refactoring:
"Split this 200-line component into smaller parts"
"Convert this class component to functional"

Best practices:
- Give context in your prompts
- Reference files with @filename
- Review AI changes carefully
- Use for repetitive tasks`,
        explanation: "These examples show how to leverage Cursor's AI features for common development tasks.",
      },
    ],
    keywords: [
      {
        term: "Cursor",
        meaning: "An AI-powered code editor based on VS Code",
        usage: "Use Cursor for AI-assisted coding and codebase chat",
      },
      {
        term: "Code Completion",
        meaning: "AI suggesting code as you type",
        usage: "Press Tab to accept Cursor's code completion suggestions",
      },
      {
        term: "Codebase Chat",
        meaning: "Asking questions about your project using natural language",
        usage: "Ask Cursor how authentication works in the chat sidebar",
      },
    ],
    instructorNotes: "Demo Cursor live with a real project. Show the difference between regular coding and AI-assisted. Highlight codebase understanding.",
  },
  "8-5": {
    objectives: [
      "Understand emerging AI tools",
      "Learn about Emergent AI and Anti Gravity",
      "Stay current with AI development tools",
    ],
    summary: "New AI tools are constantly emerging. Emergent AI and Anti Gravity represent newer entrants in the AI development space, each with unique approaches to building software.",
    theory: `**Emergent AI:**
An AI-powered development platform focusing on building applications through conversation. It emphasizes iterative development and learning from user feedback.

**Anti Gravity:**
A newer AI tool for rapid application development. It focuses on zero-friction development, letting users describe ideas and see working applications quickly.

**What to look for in new tools:**
- Speed of development
- Quality of generated code
- Integration capabilities
- Learning curve
- Pricing model
- Community support

**Staying current:**
- Follow AI tool launches
- Test new tools on side projects
- Compare outputs between tools
- Share findings with community

**Evaluation criteria:**
- Does it solve a real problem?
- Is the output production-ready?
- How quickly can you iterate?
- What are the limitations?`,
    examples: [
      {
        title: "Evaluating New AI Tools",
        before: "Which tool should I use?",
        after: `Framework for evaluating AI development tools:

1. Build the same test project in each tool:
   - Simple todo app
   - Note: speed, code quality, features

2. Test specific capabilities:
   - Database integration
   - Authentication
   - API calls
   - Styling/design

3. Compare outputs:
   - Code readability
   - Best practices followed
   - Error handling
   - TypeScript support

4. Consider practical factors:
   - Pricing for your use case
   - Export/ownership of code
   - Learning resources
   - Community activity

5. Match to use case:
   - Prototyping → Speed matters most
   - Production → Quality matters most
   - Learning → Explanations matter most

Keep a comparison document as you test.`,
        explanation: "This framework helps systematically evaluate new AI tools rather than following hype.",
      },
    ],
    keywords: [
      {
        term: "AI Tool",
        meaning: "Software that uses AI to help with development tasks",
        usage: "Evaluate AI tools by building the same project in each",
      },
      {
        term: "Iteration",
        meaning: "Repeatedly improving through cycles of feedback",
        usage: "Fast iteration speed makes prototyping more efficient",
      },
      {
        term: "Zero-friction",
        meaning: "Development with minimal setup or barriers",
        usage: "Zero-friction tools let you start building immediately",
      },
    ],
    instructorNotes: "The AI tool landscape changes rapidly. Update examples with current tools. Encourage students to explore and share discoveries.",
  },
  "8-6": {
    objectives: [
      "Understand AI tools for mobile development",
      "Use Android Studio AI features",
      "Explore mobile-specific AI tools",
    ],
    summary: "Mobile development has its own AI tools and features. Android Studio includes AI assistance, and specialized tools help build mobile apps faster.",
    theory: `**Android Studio AI Features:**
- Gemini integration for code help
- AI-powered code completion
- Generate UI from descriptions
- Debug assistance
- Performance suggestions

**Mobile AI Tools:**
- FlutterFlow: Visual Flutter builder
- Draftbit: React Native builder
- Bravo Studio: Design to app
- BuildFire: No-code app builder

**AI for Mobile:**
- Layout generation
- Component creation
- API integration
- Testing suggestions
- Performance optimization

**Mobile-specific considerations:**
- Platform differences (iOS/Android)
- Performance constraints
- Offline capability
- Device testing

**What to prompt for:**
- Screen layouts
- Navigation flows
- Data persistence
- Push notifications
- App store assets`,
    examples: [
      {
        title: "Mobile App with AI",
        before: "Make a mobile app",
        after: `Create a workout tracking app for Android.

Screens:
1. Home - Today's workout, streak count
2. Exercises - Browse/search exercise library
3. Workout - Active workout with timer
4. History - Past workouts with stats
5. Profile - Settings and achievements

Features:
- Timer for rest periods
- Rep and set tracking
- Progress photos
- Workout reminders (notifications)
- Offline functionality

UI Design:
- Material You design system
- Dynamic color theming
- Large touch targets
- Dark mode support

Data:
- Local storage for workouts
- Sync with Google Fit (optional)
- Export workout history

Technical:
- Kotlin + Jetpack Compose
- Room database for local storage
- WorkManager for reminders`,
        explanation: "This prompt is specific to Android development, mentioning Android-specific technologies and design systems.",
      },
    ],
    keywords: [
      {
        term: "Android Studio",
        meaning: "The official development environment for Android apps",
        usage: "Use Android Studio with Gemini AI for faster development",
      },
      {
        term: "Jetpack Compose",
        meaning: "Modern Android UI toolkit for building native interfaces",
        usage: "Build UI with Jetpack Compose for declarative Android layouts",
      },
      {
        term: "Flutter",
        meaning: "Cross-platform framework for iOS and Android apps",
        usage: "Use Flutter to build one app that works on both platforms",
      },
    ],
    instructorNotes: "Demo Android Studio AI features. Show FlutterFlow for visual app building. Compare native vs cross-platform approaches.",
  },
  "8-7": {
    objectives: [
      "Understand Replit AI features",
      "Learn about Windsurf editor",
      "Compare browser-based AI tools",
    ],
    summary: "Replit and Windsurf represent different approaches to AI-assisted development. Replit offers a browser-based IDE with AI, while Windsurf is a dedicated AI code editor.",
    theory: `**Replit:**
An online IDE with AI features built in. Run code in any language directly in the browser with AI assistance.

Features:
- Ghostwriter AI assistant
- Multi-language support
- Instant deployment
- Collaboration built-in
- Learning-friendly

**Windsurf:**
A newer AI code editor focused on deep codebase understanding and agentic workflows.

Features:
- Cascade agentic workflow
- Deep context awareness
- Multi-file editing
- Works with any project
- Alternative to Cursor

**When to use Replit:**
- Learning to code
- Quick experiments
- Sharing runnable code
- Hackathons
- Teaching

**When to use Windsurf:**
- Professional development
- Large codebases
- Complex refactoring
- Team projects`,
    examples: [
      {
        title: "Replit AI Usage",
        before: "Help me code",
        after: `Using Replit effectively:

Starting a project:
"Create a Python web scraper that collects
news headlines from 3 different sites and
saves them to a JSON file"

Replit will:
- Set up the project
- Install dependencies
- Write the code
- You can run it immediately

Ghostwriter chat:
"Explain how the BeautifulSoup selector works"
"Add error handling for network failures"
"Make this run on a schedule"

Collaboration:
- Share link for instant access
- Others can fork and modify
- Real-time multiplayer editing

Best for:
- Python scripts
- API experiments
- Learning projects
- Quick demos`,
        explanation: "Replit is excellent for quick projects and learning because everything runs in the browser.",
      },
    ],
    keywords: [
      {
        term: "Replit",
        meaning: "Browser-based IDE with AI and instant code running",
        usage: "Use Replit to code and run projects without local setup",
      },
      {
        term: "Windsurf",
        meaning: "AI code editor with deep codebase understanding",
        usage: "Try Windsurf as an alternative to Cursor for AI coding",
      },
      {
        term: "Ghostwriter",
        meaning: "Replit's AI assistant for code generation and help",
        usage: "Ask Ghostwriter to explain or generate code in Replit",
      },
    ],
    instructorNotes: "Demo Replit for quick projects. Show Windsurf's Cascade feature. Compare the different tool philosophies.",
  },
  "8-8": {
    objectives: [
      "Master ChatGPT for code generation",
      "Use effective prompting techniques",
      "Understand ChatGPT's strengths and limitations",
    ],
    summary: "ChatGPT by OpenAI is one of the most popular AI assistants. It excels at explaining concepts, generating code, and helping with a wide range of development tasks.",
    theory: `**ChatGPT** is OpenAI's conversational AI model. It understands context, remembers conversation history, and can help with coding, writing, and problem-solving.

**Strengths:**
- Excellent at explanations
- Great code generation
- Multi-language support
- Large context window
- Plugins and tools

**Best uses for coding:**
- Explaining concepts
- Debugging code
- Writing functions
- Code reviews
- Learning new technologies

**Prompting ChatGPT:**
- Be specific about what you want
- Provide code context
- Ask for step-by-step explanations
- Request specific formats

**GPT-4 vs GPT-3.5:**
- GPT-4 is more accurate
- Better at complex tasks
- Follows instructions better
- GPT-3.5 is faster and free

**Tips:**
- Use system messages for role-setting
- Break complex tasks into steps
- Ask for alternative approaches
- Request tests along with code`,
    examples: [
      {
        title: "ChatGPT for Code Generation",
        before: "Write a sort function",
        after: `I need a TypeScript function that sorts an array of products.

Product interface:
interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  createdAt: Date;
}

Requirements:
- Sort by multiple fields (primary and secondary)
- Support ascending and descending order
- Handle null values gracefully
- Return a new array (don't mutate original)

Example usage:
sortProducts(products, { field: 'price', order: 'asc' })
sortProducts(products, { field: 'rating', order: 'desc' }, { field: 'name', order: 'asc' })

Please include:
1. TypeScript types for the sort options
2. The sort function
3. 2-3 test cases`,
        explanation: "ChatGPT works best with clear context, specific requirements, and examples of expected usage.",
      },
    ],
    keywords: [
      {
        term: "ChatGPT",
        meaning: "OpenAI's conversational AI assistant for coding and more",
        usage: "Ask ChatGPT to explain code, generate functions, or debug issues",
      },
      {
        term: "GPT-4",
        meaning: "OpenAI's most capable model with advanced reasoning",
        usage: "Use GPT-4 for complex coding tasks requiring accuracy",
      },
      {
        term: "System Message",
        meaning: "Instructions that set the AI's behavior for a conversation",
        usage: "Use system messages to tell ChatGPT to act as a senior developer",
      },
    ],
    instructorNotes: "Demo ChatGPT's code generation and explanation abilities. Show how conversation context improves results. Compare GPT-3.5 and GPT-4 outputs.",
  },
  "8-9": {
    objectives: [
      "Use Google's Gemini AI for development",
      "Navigate Google AI Studio",
      "Leverage Gemini's multimodal capabilities",
    ],
    summary: "Gemini is Google's AI model family. It excels at multimodal tasks (text + images), has large context windows, and integrates with Google services.",
    theory: `**Google Gemini** is a family of AI models from Google, designed to be multimodal and highly capable.

**Model variants:**
- Gemini Ultra: Most powerful
- Gemini Pro: Balanced performance
- Gemini Flash: Fast and efficient

**Strengths:**
- Long context window (1M+ tokens)
- Image understanding
- Code generation
- Integration with Google tools
- Competitive pricing

**Google AI Studio:**
A web interface to experiment with Gemini:
- Test prompts quickly
- Tune parameters
- Create AI applications
- Generate API keys

**Best for:**
- Large codebase analysis
- Image-to-code tasks
- Documentation review
- Multi-file understanding
- Long document processing

**Using Gemini for code:**
- Upload images of designs
- Analyze error screenshots
- Process long documentation
- Compare multiple files

**Integration:**
- API access via Google AI
- Available in Android Studio
- Works with Vertex AI
- MakerSuite for experiments`,
    examples: [
      {
        title: "Gemini for Image-to-Code",
        before: "Make this design",
        after: `[Attach screenshot of UI design]

Convert this design to React + Tailwind CSS.

Details I can see in the image:
- Header with navigation and logo
- Hero section with gradient background
- 3-column feature cards
- Footer with newsletter signup

Requirements:
- Match the colors and spacing closely
- Use semantic HTML
- Make it fully responsive
- Add subtle hover animations

Questions:
- What font appears to be used?
- Are there any micro-interactions shown?

Please provide:
1. Component structure outline
2. Main page component
3. Individual sub-components
4. Tailwind classes matching the design`,
        explanation: "Gemini's image understanding lets you upload designs and get accurate code that matches the visual.",
      },
    ],
    keywords: [
      {
        term: "Gemini",
        meaning: "Google's multimodal AI model for text, code, and images",
        usage: "Use Gemini to analyze images and generate matching code",
      },
      {
        term: "Google AI Studio",
        meaning: "Web interface to experiment with Gemini models",
        usage: "Test prompts in Google AI Studio before using the API",
      },
      {
        term: "Multimodal",
        meaning: "AI that understands multiple types of input (text, images, audio)",
        usage: "Use multimodal AI to convert design screenshots to code",
      },
    ],
    instructorNotes: "Demo Google AI Studio interface. Show image-to-code with a design screenshot. Compare context window sizes between models.",
  },
  "8-10": {
    objectives: [
      "Understand Grok AI capabilities",
      "Use Grok for real-time information",
      "Compare Grok with other AI assistants",
    ],
    summary: "Grok is xAI's AI assistant, created by Elon Musk's AI company. It has access to real-time information from X (Twitter) and takes a more direct, unfiltered approach.",
    theory: `**Grok** is an AI assistant from xAI, designed to be helpful, truthful, and direct.

**Unique features:**
- Real-time X/Twitter access
- Current events knowledge
- Direct, witty responses
- Less restrictive than others
- Fast response times

**Best for:**
- Current trends and news
- Real-time market info
- Social media analysis
- Unfiltered opinions
- Quick, direct answers

**For developers:**
- Trending tech discussions
- Community sentiment
- Quick code snippets
- Debugging help
- Library recommendations

**Access:**
- X Premium subscription
- Available on x.com
- API access available
- Mobile app

**When to use Grok:**
- Need current information
- Want quick, direct answers
- Researching trends
- Social context matters

**Limitations:**
- Smaller context window
- Less coding depth than GPT-4
- X-focused knowledge
- Newer, still evolving`,
    examples: [
      {
        title: "Grok for Tech Research",
        before: "What's the best frontend framework?",
        after: `What are developers on X/Twitter saying about React vs Vue vs Svelte in 2024?

I want to understand:
1. Current community sentiment
2. Recent major updates or announcements
3. What problems people are complaining about
4. What features people are excited about
5. Any trending migrations (e.g., React to X)

Context: I'm choosing a framework for a new project and want to understand the current landscape beyond just documentation.

Please include:
- Recent tweets or discussions you're aware of
- Any notable developer opinions
- Practical recommendations based on what you see`,
        explanation: "Grok's access to real-time X data makes it useful for understanding current developer sentiment and trends.",
      },
    ],
    keywords: [
      {
        term: "Grok",
        meaning: "xAI's AI assistant with real-time X/Twitter access",
        usage: "Use Grok to research current developer trends and sentiment",
      },
      {
        term: "xAI",
        meaning: "Elon Musk's AI company that created Grok",
        usage: "xAI focuses on building helpful and truthful AI assistants",
      },
      {
        term: "Real-time",
        meaning: "Access to current, up-to-date information",
        usage: "Grok's real-time access helps answer questions about current events",
      },
    ],
    instructorNotes: "Demo Grok's real-time capabilities. Show how it differs from ChatGPT and Gemini. Discuss when real-time information matters for development.",
  },
  "8-11": {
    objectives: [
      "Compare AI development tools",
      "Choose the right tool for each task",
      "Build efficient AI-assisted workflows",
    ],
    summary: "Different AI tools excel at different tasks. Understanding their strengths helps you choose the right tool and build efficient development workflows.",
    theory: `**Tool comparison:**

**For full apps from scratch:**
- Lovable: Best for web apps with database
- Bolt.new: Best for experimenting
- V0: Best for UI components only

**For coding assistance:**
- Cursor: Best overall editor
- Windsurf: Best for complex projects
- Replit: Best for learning/sharing

**For conversational AI:**
- ChatGPT: Best for explanations
- Gemini: Best for large context
- Grok: Best for real-time info

**For mobile:**
- FlutterFlow: Visual Flutter
- Android Studio + Gemini: Native Android

**Choosing criteria:**
1. What are you building?
2. How much do you know?
3. Do you need to edit code?
4. Will it go to production?

**Workflow tips:**
- Use V0 for UI components
- Use Lovable/Bolt for MVPs
- Use Cursor for refinement
- Combine tools strategically

**Common workflows:**
1. V0 → Lovable (design then build)
2. Lovable → Cursor (generate then refine)
3. V0 → Cursor (components then integrate)`,
    examples: [
      {
        title: "Tool Selection Guide",
        before: "Which AI tool should I use?",
        after: `Decision framework for AI tools:

Building a landing page?
→ V0 for components
→ Lovable to deploy quickly

Building an MVP for feedback?
→ Lovable (fastest to deployed app)
→ Or Bolt.new (more control)

Learning to code?
→ Replit (run code instantly)
→ Cursor with explanations

Working on existing codebase?
→ Cursor or Windsurf
→ Never start-from-scratch tools

Need mobile app?
→ FlutterFlow for visual building
→ Android Studio + AI for native

Need code explanations?
→ ChatGPT or Gemini
→ Ask for step-by-step breakdowns

Researching trends?
→ Grok for real-time info
→ Check what developers are saying

Workflow example:
1. Sketch idea on paper
2. V0 for key UI components
3. Lovable for full app with DB
4. Cursor for customizations
5. Deploy via Lovable

Key insight: Tools are not mutually exclusive.
Use each for what it does best.`,
        explanation: "This guide helps choose the right tool based on your specific needs and project stage.",
      },
    ],
    keywords: [
      {
        term: "MVP",
        meaning: "Minimum Viable Product - simplest version to test an idea",
        usage: "Use AI tools to build an MVP quickly and get user feedback",
      },
      {
        term: "Workflow",
        meaning: "A series of steps to complete a task efficiently",
        usage: "Build an AI workflow that combines multiple tools",
      },
      {
        term: "Tool Chain",
        meaning: "Multiple tools used together in a development process",
        usage: "Create a tool chain: design in V0, build in Lovable, refine in Cursor",
      },
    ],
    instructorNotes: "Show a real workflow using multiple tools. Let students try different combinations. Discuss how the landscape will evolve.",
  },
  // ============ MODULE 9: App Development with AI ============
  "9-1": {
    objectives: [
      "Understand Flutter and FlutterFlow basics",
      "Build mobile apps with AI assistance",
      "Create cross-platform applications",
    ],
    summary: "Flutter is Google's UI toolkit for building beautiful, natively compiled applications. FlutterFlow adds visual, AI-powered development on top.",
    theory: `**Flutter** is an open-source UI framework from Google for building cross-platform apps from a single codebase.

**FlutterFlow** is a visual builder that generates Flutter code, making app development faster and more accessible.

**Why Flutter?**
- One codebase for iOS, Android, web, desktop
- Beautiful, customizable widgets
- Fast development with hot reload
- Strong performance

**FlutterFlow advantages:**
- Visual drag-and-drop interface
- AI-powered code generation
- Direct Supabase/Firebase integration
- Export clean Flutter code

**Getting started:**
1. Design your app visually
2. Connect your data sources
3. Add logic and navigation
4. Test on multiple platforms
5. Export or deploy`,
    examples: [
      {
        title: "Building a Mobile App",
        before: "Make me an app",
        after: `Build a task management app using FlutterFlow.

Features needed:
- User authentication (email/password)
- Task list with add, edit, delete
- Categories for organizing tasks
- Due dates with notifications
- Dark/light theme toggle

Design requirements:
- Clean, minimal interface
- Bottom navigation with 3 tabs
- Floating action button to add tasks
- Swipe gestures for quick actions

Backend:
- Use Supabase for database
- Real-time sync across devices`,
        explanation: "Specific features, design requirements, and backend choices help FlutterFlow generate a complete, functional app.",
      },
    ],
    keywords: [
      {
        term: "Flutter",
        meaning: "Google's cross-platform UI framework for mobile, web, and desktop apps",
        usage: "Use Flutter to build apps for iOS and Android from one codebase",
      },
      {
        term: "FlutterFlow",
        meaning: "Visual app builder that generates Flutter code with AI assistance",
        usage: "Use FlutterFlow to build apps faster without writing all the code manually",
      },
      {
        term: "Widget",
        meaning: "A building block of Flutter UI - everything is a widget",
        usage: "Combine widgets like Container, Column, and Button to build your UI",
      },
    ],
    instructorNotes: "Demo FlutterFlow's visual builder. Show how to connect Supabase. Build a simple app in real-time.",
  },
  "9-2": {
    objectives: [
      "Build React Native apps with AI",
      "Understand Expo development workflow",
      "Create native mobile experiences",
    ],
    summary: "React Native lets you build mobile apps using JavaScript and React. Combined with AI tools, you can rapidly prototype and build native mobile apps.",
    theory: `**React Native** uses React to build native mobile apps. If you know React, you can build mobile apps.

**Expo** simplifies React Native development with managed workflow, OTA updates, and easy deployment.

**AI-assisted React Native:**
- Use ChatGPT/Gemini for component code
- Use Cursor for editing RN projects
- Copilot for autocomplete

**Key differences from web React:**
- View instead of div
- Text component for all text
- StyleSheet instead of CSS
- Platform-specific code

**Development workflow:**
1. Initialize with Expo
2. Develop with hot reload
3. Test on simulators/devices
4. Build with EAS Build
5. Deploy to app stores`,
    examples: [
      {
        title: "React Native Screen",
        before: "Create a profile screen",
        after: `Create a React Native profile screen using Expo.

Requirements:
- Profile picture with edit option
- User info (name, email, bio)
- Settings list (notifications, privacy, help)
- Logout button at bottom

Styling:
- Use NativeWind (Tailwind for RN)
- Support dark mode
- iOS and Android optimized

Navigation:
- Using React Navigation
- Stack navigator for nested screens
- Bottom tabs for main sections`,
        explanation: "Specify the navigation library, styling approach, and platform considerations for React Native.",
      },
    ],
    keywords: [
      {
        term: "React Native",
        meaning: "Framework for building native mobile apps using React and JavaScript",
        usage: "Use React Native to build iOS and Android apps with your React knowledge",
      },
      {
        term: "Expo",
        meaning: "Development platform that simplifies React Native development",
        usage: "Start with Expo to avoid native build configuration complexity",
      },
      {
        term: "Native Module",
        meaning: "Bridge to access native platform features from JavaScript",
        usage: "Use native modules for camera, GPS, and other device features",
      },
    ],
    instructorNotes: "Compare React Native to Flutter. Show Expo development workflow. Demonstrate AI-assisted component generation.",
  },
  "9-3": {
    objectives: [
      "Build iOS apps with SwiftUI and AI",
      "Understand Apple development ecosystem",
      "Use Xcode with AI assistants",
    ],
    summary: "SwiftUI is Apple's modern framework for building iOS apps. AI tools can help generate SwiftUI code even if you're new to Swift.",
    theory: `**SwiftUI** is Apple's declarative UI framework, similar to React in concept but built for Apple platforms.

**AI for iOS development:**
- ChatGPT/Gemini for SwiftUI code
- GitHub Copilot in Xcode
- Claude for architecture advice

**SwiftUI basics:**
- Declarative syntax
- State-driven UI updates
- Preview canvas for instant feedback
- Built-in accessibility

**When to choose iOS-only:**
- Apple Watch/TV apps
- Deep iOS integration
- Performance-critical apps
- Apple ecosystem features

**Development tools:**
- Xcode (required)
- Swift Playgrounds for learning
- TestFlight for beta testing
- App Store Connect for publishing`,
    examples: [
      {
        title: "SwiftUI View Generation",
        before: "Make a settings page",
        after: `Create a SwiftUI Settings view for an iOS app.

Structure:
- Use List with sections
- Profile section with avatar
- Preferences section with toggles
- About section with app info

Features needed:
- @AppStorage for persisting settings
- NavigationStack for drill-down
- Toggle for notifications, dark mode
- Button to clear cache
- Link to privacy policy

Styling:
- Follow Human Interface Guidelines
- System colors for proper dark mode
- SF Symbols for icons`,
        explanation: "Reference Apple's guidelines and use SwiftUI-specific patterns like @AppStorage and NavigationStack.",
      },
    ],
    keywords: [
      {
        term: "SwiftUI",
        meaning: "Apple's declarative framework for building UIs across all Apple platforms",
        usage: "Use SwiftUI to build modern iOS apps with less code than UIKit",
      },
      {
        term: "Xcode",
        meaning: "Apple's IDE for developing iOS, macOS, and other Apple platform apps",
        usage: "Use Xcode to write, test, and deploy iOS applications",
      },
      {
        term: "@State",
        meaning: "Property wrapper that creates mutable state in SwiftUI views",
        usage: "Use @State to track values that change and trigger UI updates",
      },
    ],
    instructorNotes: "Show Xcode and SwiftUI previews. Demonstrate AI code generation for SwiftUI. Discuss when to choose native iOS vs cross-platform.",
  },
  "9-4": {
    objectives: [
      "Build Android apps with Jetpack Compose",
      "Use Android Studio AI features",
      "Understand Material Design 3",
    ],
    summary: "Jetpack Compose is Android's modern UI toolkit. Android Studio now includes AI assistants to help you write Kotlin code faster.",
    theory: `**Jetpack Compose** is Android's declarative UI framework, similar to SwiftUI and React.

**Android Studio AI:**
- Studio Bot for code help
- Gemini integration
- Code completion
- Error explanations

**Compose advantages:**
- Less code than XML layouts
- Reactive UI updates
- Better preview tooling
- Material Design 3 built-in

**Material Design 3:**
- Dynamic color from wallpaper
- Updated components
- Better accessibility
- Consistent cross-device UI

**Development workflow:**
1. Design in Figma with Material plugin
2. Generate Compose code with AI
3. Test with Preview annotations
4. Build with Gradle
5. Publish to Play Store`,
    examples: [
      {
        title: "Compose Screen with AI",
        before: "Build a home screen",
        after: `Create a Jetpack Compose home screen for a news app.

Layout:
- TopAppBar with search icon
- LazyColumn for article list
- FloatingActionButton for filters

Each article card should have:
- Image (AsyncImage with Coil)
- Title and source
- Time ago and bookmark icon
- Click to navigate to detail

Styling:
- Material Design 3 components
- Dynamic color support
- Light and dark themes
- Proper content padding`,
        explanation: "Use Compose-specific components and libraries like Coil. Reference Material Design 3 for modern Android styling.",
      },
    ],
    keywords: [
      {
        term: "Jetpack Compose",
        meaning: "Android's modern declarative UI toolkit for building native interfaces",
        usage: "Use Compose to build Android UIs with Kotlin instead of XML",
      },
      {
        term: "Android Studio",
        meaning: "Google's official IDE for Android app development",
        usage: "Use Android Studio to develop, test, and debug Android applications",
      },
      {
        term: "Material Design",
        meaning: "Google's design system for building consistent, beautiful apps",
        usage: "Follow Material Design guidelines for standard Android UI patterns",
      },
    ],
    instructorNotes: "Demo Android Studio with Gemini. Show Compose previews. Compare with XML-based development. Demonstrate AI code generation.",
  },
  "9-5": {
    objectives: [
      "Choose the right cross-platform strategy",
      "Understand trade-offs of each approach",
      "Build maintainable multi-platform apps",
    ],
    summary: "Different cross-platform approaches have different trade-offs. Choose based on your team's skills, app requirements, and long-term goals.",
    theory: `**Cross-platform options:**

**Flutter:**
- Best UI consistency
- Single codebase
- Good performance
- Learning Dart required

**React Native:**
- Use existing React skills
- Large ecosystem
- OTA updates
- Native feel with effort

**Web-based (Capacitor/Ionic):**
- Use web technologies
- Easy to start
- Lower performance
- Limited native access

**Decision factors:**
1. Team expertise
2. App complexity
3. Performance needs
4. Time to market
5. Maintenance plan

**When to go native:**
- Performance critical
- Heavy native features
- Platform-specific design
- Long-term investment`,
    examples: [
      {
        title: "Platform Decision Framework",
        before: "Should I use Flutter or React Native?",
        after: `Help me choose between Flutter and React Native for my project.

Project details:
- E-commerce app with catalog and checkout
- Need push notifications
- Payment integration (Stripe)
- User authentication
- Offline support for cart

Team situation:
- 2 developers, both know React
- 6 month timeline
- MVP first, then iterate

Constraints:
- Must work on iOS and Android
- Needs to feel native
- Budget for one codebase only

Please compare:
1. Development speed
2. Performance for our use case
3. Long-term maintainability
4. Library availability`,
        explanation: "Provide project specifics, team skills, and constraints to get tailored cross-platform recommendations.",
      },
    ],
    keywords: [
      {
        term: "Cross-Platform",
        meaning: "Code that runs on multiple platforms (iOS, Android, web) from one source",
        usage: "Use cross-platform frameworks to reduce development time and maintenance",
      },
      {
        term: "Native",
        meaning: "Code written specifically for one platform using its official tools",
        usage: "Go native when you need maximum performance or platform-specific features",
      },
      {
        term: "PWA",
        meaning: "Progressive Web App - web app with native-like capabilities",
        usage: "Consider PWA if your app is content-focused and doesn't need deep native access",
      },
    ],
    instructorNotes: "Present a decision matrix. Discuss real-world examples of each approach. Have students evaluate their own project needs.",
  },
  // ============ MODULE 10: Game & Simulation Development ============
  "10-1": {
    objectives: [
      "Integrate AI into Unity projects",
      "Use ML-Agents for game AI",
      "Generate game assets with AI",
    ],
    summary: "Unity is the most popular game engine. AI can help generate code, create assets, and even train game AI behaviors using machine learning.",
    theory: `**Unity + AI:**
Unity is a powerful game engine that can be enhanced with AI in multiple ways.

**AI for Unity development:**
- ChatGPT/Gemini for C# scripts
- Copilot in Visual Studio
- AI asset generation
- ML-Agents for NPC behavior

**Unity ML-Agents:**
- Train AI using reinforcement learning
- Create intelligent NPCs
- Game testing automation
- Procedural content

**Asset generation:**
- Midjourney for textures
- AI 3D model generation
- Sound effects with AI
- Music generation

**Common Unity AI uses:**
- Pathfinding (NavMesh)
- Behavior trees
- State machines
- Procedural generation`,
    examples: [
      {
        title: "Unity Script with AI",
        before: "Make a player controller",
        after: `Create a Unity C# script for a 3D platformer player controller.

Features:
- WASD/Arrow keys movement
- Space to jump (with coyote time)
- Camera-relative movement
- Ground detection with raycast
- Smooth acceleration/deceleration

Technical requirements:
- Use CharacterController component
- Serialize fields for tuning
- Support gamepad input
- Implement gravity properly

Parameters to expose:
- Move speed (default 5)
- Jump height (default 2)
- Gravity multiplier (default 2)
- Coyote time (default 0.15s)`,
        explanation: "Specify Unity components, input methods, and expose parameters for designer tuning.",
      },
    ],
    keywords: [
      {
        term: "Unity",
        meaning: "Popular game engine for 2D and 3D games across all platforms",
        usage: "Use Unity to build games for mobile, PC, console, and VR",
      },
      {
        term: "ML-Agents",
        meaning: "Unity toolkit for training game AI using machine learning",
        usage: "Use ML-Agents to create intelligent NPCs that learn behaviors",
      },
      {
        term: "C#",
        meaning: "Programming language used for Unity game scripting",
        usage: "Write C# scripts to control game objects and implement game logic",
      },
    ],
    instructorNotes: "Demo Unity with AI code generation. Show ML-Agents training. Generate game assets with Midjourney or DALL-E.",
  },
  "10-2": {
    objectives: [
      "Use AI with Unreal Engine",
      "Generate Blueprints and C++",
      "Create realistic game environments",
    ],
    summary: "Unreal Engine powers AAA games and realistic simulations. AI can help with Blueprint logic, C++ code, and creating stunning visual assets.",
    theory: `**Unreal Engine + AI:**
Unreal Engine 5 offers cutting-edge graphics and can benefit from AI assistance.

**AI for Unreal development:**
- ChatGPT for C++ and Blueprints
- GitHub Copilot in VS/Rider
- AI texture generation
- Procedural world building

**Unreal strengths:**
- Photorealistic rendering
- Nanite (geometry streaming)
- Lumen (global illumination)
- MetaHumans

**Blueprint AI assistance:**
- Describe logic in plain English
- Convert to Blueprint node setup
- Debug complex node graphs
- Optimize performance

**AI asset creation:**
- AI-generated textures
- Environment concept art
- Sound and music
- Animation assistance`,
    examples: [
      {
        title: "Unreal Blueprint Logic",
        before: "Make an inventory system",
        after: `Create an Unreal Engine Blueprint for an inventory system.

Core functionality:
- Array of item structs (ID, name, quantity, icon)
- Add and remove items
- Stack same items
- Weight limit check

UI integration:
- Update widget on change
- Show/hide inventory panel with I key
- Drag and drop support
- Context menu for items

Events needed:
- OnItemAdded
- OnItemRemoved
- OnInventoryFull
- OnWeightExceeded

Please provide:
1. Item struct definition
2. Inventory component Blueprint
3. Key function descriptions
4. Widget binding approach`,
        explanation: "Describe the data structure, UI needs, and events for complete Blueprint architecture guidance.",
      },
    ],
    keywords: [
      {
        term: "Unreal Engine",
        meaning: "Epic Games' AAA game engine known for stunning graphics",
        usage: "Use Unreal for high-fidelity games, simulations, and virtual production",
      },
      {
        term: "Blueprint",
        meaning: "Unreal's visual scripting system - programming without code",
        usage: "Use Blueprints to create game logic visually with connected nodes",
      },
      {
        term: "Nanite",
        meaning: "Unreal 5's virtualized geometry system for film-quality assets",
        usage: "Nanite lets you use highly detailed 3D models without performance hit",
      },
    ],
    instructorNotes: "Compare Unity and Unreal. Show Blueprint generation with AI. Demonstrate MetaHumans and Nanite for realistic content.",
  },
  "10-3": {
    objectives: [
      "Build 2D games efficiently",
      "Use AI for game art and sprites",
      "Implement common 2D mechanics",
    ],
    summary: "2D game development is great for learning and indie games. AI can generate pixel art, sprites, and help with game logic.",
    theory: `**2D Game Development:**
2D games are faster to develop and perfect for learning game design fundamentals.

**Popular 2D engines:**
- Unity 2D
- Godot
- GameMaker
- Phaser (web)

**AI for 2D games:**
- Pixel art generation
- Sprite sheet creation
- Tile map generation
- Sound effects

**Common 2D mechanics:**
- Platformer physics
- Top-down movement
- Tile-based levels
- Collision detection

**Art generation tools:**
- Midjourney for concepts
- PixelLab for sprites
- Remove.bg for assets
- Soundraw for music`,
    examples: [
      {
        title: "2D Platformer Mechanics",
        before: "Make a platformer",
        after: `Create a 2D platformer character controller in Godot 4.

Player mechanics:
- Smooth horizontal movement with acceleration
- Variable jump height (hold for higher)
- Wall slide and wall jump
- Coyote time (jump after leaving platform)
- Jump buffering

Animation states:
- Idle, Run, Jump, Fall, Wall slide
- Blend between states smoothly
- Flip sprite based on direction

Physics settings:
- Gravity: 1200
- Max fall speed: 400
- Move speed: 200
- Jump velocity: 500

Please provide GDScript code with comments.`,
        explanation: "Include specific physics values and animation states for a polished 2D character controller.",
      },
    ],
    keywords: [
      {
        term: "Sprite",
        meaning: "2D image used to represent game objects, characters, or items",
        usage: "Create sprite sheets with AI tools for animated game characters",
      },
      {
        term: "Tilemap",
        meaning: "Grid-based system for building 2D game levels from reusable tiles",
        usage: "Use tilemaps to efficiently build and modify 2D game levels",
      },
      {
        term: "Godot",
        meaning: "Free, open-source game engine popular for 2D games",
        usage: "Use Godot for 2D games with its intuitive scene system and GDScript",
      },
    ],
    instructorNotes: "Build a simple platformer live. Generate pixel art with AI. Show how to create a sprite sheet for animations.",
  },
  "10-4": {
    objectives: [
      "Create 3D simulations",
      "Use physics engines effectively",
      "Build training and visualization tools",
    ],
    summary: "3D simulations are used for training, visualization, and testing. AI can help create realistic environments and behaviors.",
    theory: `**3D Simulation use cases:**
- Training simulations
- Architectural visualization
- Scientific modeling
- Digital twins
- VR experiences

**Building simulations:**
1. Define the scenario
2. Create the environment
3. Add physics and interactions
4. Implement behaviors
5. Collect data/feedback

**AI applications:**
- Environment generation
- Realistic NPC behavior
- Physics optimization
- Data analysis

**Tools for simulation:**
- Unity with HDRP
- Unreal Engine
- Blender for assets
- NVIDIA Omniverse

**Physics considerations:**
- Rigid body dynamics
- Soft body simulation
- Fluid dynamics
- Particle systems`,
    examples: [
      {
        title: "Training Simulation",
        before: "Make a driving simulator",
        after: `Design a driving training simulation in Unity.

Simulation requirements:
- Realistic vehicle physics (wheel colliders)
- Traffic system with AI vehicles
- Weather effects (rain, fog, night)
- Various road types and scenarios

Training scenarios:
- Highway merging
- City navigation
- Emergency braking
- Parking (parallel, perpendicular)

Metrics to track:
- Speed violations
- Lane departures
- Reaction times
- Near-miss events

Technical needs:
- VR support (optional)
- Session recording
- Performance report generation
- Adjustable difficulty`,
        explanation: "Define training objectives, scenarios, and metrics for an effective simulation design.",
      },
    ],
    keywords: [
      {
        term: "Physics Engine",
        meaning: "Software that simulates realistic physical interactions in games",
        usage: "Use physics engines for realistic collisions, gravity, and object behavior",
      },
      {
        term: "Digital Twin",
        meaning: "Virtual replica of a physical system for simulation and analysis",
        usage: "Create digital twins to test scenarios without real-world risk",
      },
      {
        term: "HDRP",
        meaning: "Unity's High Definition Render Pipeline for photorealistic graphics",
        usage: "Use HDRP for realistic lighting and materials in simulations",
      },
    ],
    instructorNotes: "Show real-world simulation examples. Demonstrate basic physics setup. Discuss data collection and analysis.",
  },
  "10-5": {
    objectives: [
      "Generate game assets with AI",
      "Create consistent art styles",
      "Optimize assets for games",
    ],
    summary: "AI can generate textures, sprites, 3D models, and audio for games. Learning to prompt for game assets saves time and enables solo development.",
    theory: `**AI asset generation:**
AI tools can create many types of game assets quickly.

**Visual assets:**
- Textures and materials
- Character sprites
- Environment art
- UI elements
- Icons and items

**Audio assets:**
- Sound effects
- Background music
- Voice (with care)
- Ambient sounds

**3D assets (emerging):**
- AI 3D model generation
- Texture to 3D
- Model variations

**Best practices:**
- Maintain style consistency
- Generate variations
- Use as base, then refine
- Respect licensing

**Workflow:**
1. Define art style
2. Generate base assets
3. Edit and refine
4. Import to engine
5. Optimize for performance`,
    examples: [
      {
        title: "Game Art Style Guide",
        before: "Make game sprites",
        after: `Generate a consistent set of game assets for a fantasy RPG.

Art style:
- Pixel art, 32x32 base size
- Limited palette (16 colors max)
- Slightly desaturated, earthy tones
- Clear silhouettes

Assets needed:
1. Player character (4 directions, idle + walk)
2. 5 enemy types (slime, skeleton, bat, wolf, boss)
3. Tileset (grass, dirt, stone, water edges)
4. Items (sword, potion, key, chest)
5. UI elements (hearts, mana, buttons)

Technical requirements:
- Transparent backgrounds
- Consistent lighting direction (top-left)
- No anti-aliasing on edges
- Power-of-2 dimensions

Please generate prompts for each asset type.`,
        explanation: "Define a clear art style, palette, and technical requirements for consistent game assets.",
      },
    ],
    keywords: [
      {
        term: "Sprite Sheet",
        meaning: "Single image containing multiple sprites for animation or variation",
        usage: "Organize character animations in a sprite sheet for efficient loading",
      },
      {
        term: "Tileset",
        meaning: "Collection of tiles used to build game levels and environments",
        usage: "Create reusable tilesets for efficient level design",
      },
      {
        term: "Art Style",
        meaning: "Visual aesthetic that defines the look and feel of a game",
        usage: "Maintain consistent art style by using the same prompts and parameters",
      },
    ],
    instructorNotes: "Generate assets live with AI tools. Show import and optimization process. Discuss maintaining consistency across assets.",
  },
  // ============ MODULE 11: Images & Videos Development ============
  "11-1": {
    objectives: [
      "Master Midjourney for image generation",
      "Understand prompt engineering for images",
      "Create consistent visual styles",
    ],
    summary: "Midjourney is one of the most powerful AI image generators. Learning its prompting syntax unlocks stunning visual creation.",
    theory: `**Midjourney basics:**
Midjourney generates images from text prompts with exceptional artistic quality.

**Prompt structure:**
/imagine [subject], [style], [details], [parameters]

**Key parameters:**
- --ar (aspect ratio)
- --v (version)
- --stylize (creativity level)
- --chaos (variation)
- --no (exclude elements)

**Effective prompting:**
1. Be specific about subject
2. Describe style and mood
3. Add lighting and color
4. Reference artists or genres
5. Use quality boosters

**Style consistency:**
- Save successful prompts
- Use --sref for style reference
- Create prompt templates
- Document what works`,
    examples: [
      {
        title: "Midjourney Prompt",
        before: "A fantasy castle",
        after: `/imagine A majestic fantasy castle perched on a cliff overlooking a misty valley, Gothic architecture with tall spires and flying buttresses, warm sunset lighting with dramatic clouds, oil painting style, rich colors, detailed stonework, fantasy art, epic scale, cinematic composition --ar 16:9 --v 6 --stylize 750`,
        explanation: "Include subject, setting, architecture, lighting, style, and technical parameters for best results.",
      },
    ],
    keywords: [
      {
        term: "Midjourney",
        meaning: "AI image generator known for artistic, high-quality outputs",
        usage: "Use Midjourney for concept art, illustrations, and creative visuals",
      },
      {
        term: "Aspect Ratio",
        meaning: "Width to height proportion of an image",
        usage: "Use --ar 16:9 for cinematic, --ar 1:1 for social media",
      },
      {
        term: "Stylize",
        meaning: "Parameter controlling how artistic vs. literal the output is",
        usage: "Higher stylize values (750-1000) give more artistic interpretation",
      },
    ],
    instructorNotes: "Show live Midjourney generation. Compare different parameter settings. Create a style guide for a project.",
  },
  "11-2": {
    objectives: [
      "Use DALL-E for image generation",
      "Edit existing images with AI",
      "Integrate DALL-E via API",
    ],
    summary: "DALL-E is OpenAI's image generator with strong editing capabilities. It excels at following instructions and can edit specific parts of images.",
    theory: `**DALL-E features:**
- Natural language understanding
- Image editing (inpainting)
- Outpainting (extend images)
- Variations of images
- API access

**Strengths:**
- Follows instructions well
- Good at text in images
- Editing capabilities
- Easy API integration

**Use cases:**
- Product mockups
- Social media graphics
- Content illustrations
- Photo editing

**API integration:**
- OpenAI API access
- Generate from text
- Edit existing images
- Create variations

**Best practices:**
- Be descriptive and clear
- Specify style explicitly
- Use editing for refinement
- Generate multiple options`,
    examples: [
      {
        title: "DALL-E Image Edit",
        before: "Fix this image",
        after: `Edit this product photo:

Original: [upload product image]

Changes needed:
1. Replace the background with a clean white studio backdrop
2. Add soft shadow beneath the product
3. Enhance the lighting to look professional
4. Keep the product exactly as is

Output requirements:
- Same dimensions as original
- High resolution
- Clean, e-commerce ready style`,
        explanation: "Describe exactly what to change and what to preserve when editing images.",
      },
    ],
    keywords: [
      {
        term: "DALL-E",
        meaning: "OpenAI's AI image generator with strong instruction following",
        usage: "Use DALL-E for precise image generation and editing tasks",
      },
      {
        term: "Inpainting",
        meaning: "AI technique to edit or fill in parts of an existing image",
        usage: "Use inpainting to remove objects or change specific areas of an image",
      },
      {
        term: "Outpainting",
        meaning: "Extending an image beyond its original borders",
        usage: "Use outpainting to expand an image while maintaining consistency",
      },
    ],
    instructorNotes: "Demonstrate DALL-E editing features. Show API integration. Compare with Midjourney for different use cases.",
  },
  "11-3": {
    objectives: [
      "Set up and use Stable Diffusion",
      "Understand local vs. cloud generation",
      "Create custom models and LoRAs",
    ],
    summary: "Stable Diffusion is an open-source image generator you can run locally. It offers unlimited generation and can be customized with your own trained models.",
    theory: `**Stable Diffusion advantages:**
- Free and open source
- Run locally (unlimited)
- Highly customizable
- Custom model training

**Setup options:**
- Automatic1111 WebUI
- ComfyUI (node-based)
- Cloud services
- API providers

**Key concepts:**
- Checkpoints (base models)
- LoRA (small trained additions)
- VAE (image quality)
- Samplers (generation methods)

**Customization:**
- Train on your own images
- Style transfer with LoRA
- ControlNet for guidance
- Custom embeddings

**Best for:**
- High volume generation
- Custom styles needed
- Privacy concerns
- Technical users`,
    examples: [
      {
        title: "Stable Diffusion Prompt",
        before: "Professional headshot",
        after: `Positive prompt:
professional corporate headshot, 35mm photograph, sharp focus, natural lighting, neutral background, confident expression, business attire, high resolution, professional photography

Negative prompt:
blurry, distorted face, bad anatomy, low quality, cartoon, illustration, painting, multiple people, text, watermark

Settings:
- Sampler: DPM++ 2M Karras
- Steps: 30
- CFG Scale: 7
- Size: 512x768`,
        explanation: "Include positive and negative prompts with technical settings for consistent results.",
      },
    ],
    keywords: [
      {
        term: "Stable Diffusion",
        meaning: "Open-source AI image generator that can run locally",
        usage: "Use Stable Diffusion for unlimited local image generation",
      },
      {
        term: "LoRA",
        meaning: "Small trained model that adds specific styles or subjects",
        usage: "Use LoRAs to generate images in specific art styles or of specific subjects",
      },
      {
        term: "ControlNet",
        meaning: "Tool that guides image generation using reference images",
        usage: "Use ControlNet for precise pose, depth, or edge control in generation",
      },
    ],
    instructorNotes: "Demo local Stable Diffusion setup. Show LoRA application. Compare cloud vs local generation trade-offs.",
  },
  "11-4": {
    objectives: [
      "Generate videos with AI",
      "Understand video AI tools",
      "Create animations and motion",
    ],
    summary: "AI video generation is rapidly evolving. Tools can now create short videos from text, animate images, and generate motion graphics.",
    theory: `**Video AI tools:**
- Runway Gen-3
- Pika Labs
- Kling AI
- Sora (OpenAI)
- Luma Dream Machine

**Video types:**
- Text to video
- Image to video
- Video to video
- Motion graphics

**Current capabilities:**
- Short clips (4-16 seconds)
- Consistent characters (improving)
- Camera movements
- Style transfer

**Use cases:**
- Social media content
- Concept visualization
- Music videos
- Advertising previews
- Product animations

**Best practices:**
- Start with strong prompts
- Use image-to-video for control
- Generate multiple options
- Edit and combine clips`,
    examples: [
      {
        title: "AI Video Prompt",
        before: "Make a video of nature",
        after: `Create a cinematic video clip:

Scene: A serene mountain lake at golden hour, mist rising from the water, pine trees in silhouette

Camera movement: Slow dolly forward toward the lake, gentle parallax on trees

Duration: 5 seconds

Style: Cinematic, film grain, warm color grading, 24fps

Mood: Peaceful, contemplative, nature documentary feel

Elements to include:
- Subtle water ripples
- Light rays through mist
- Bird flying across frame`,
        explanation: "Describe scene, camera movement, duration, and style for cohesive video generation.",
      },
    ],
    keywords: [
      {
        term: "Runway",
        meaning: "AI creative suite with powerful video generation tools",
        usage: "Use Runway Gen-3 for high-quality AI video generation",
      },
      {
        term: "Text to Video",
        meaning: "Generating video directly from text descriptions",
        usage: "Use text-to-video for quick concept visualization and prototyping",
      },
      {
        term: "Image to Video",
        meaning: "Animating a still image into a video clip",
        usage: "Use image-to-video for more control over the starting frame",
      },
    ],
    instructorNotes: "Demo multiple video AI tools. Compare quality and use cases. Show workflow for combining generated clips.",
  },
  "11-5": {
    objectives: [
      "Edit videos using AI tools",
      "Automate video workflows",
      "Enhance footage with AI",
    ],
    summary: "AI video editing tools can upscale, stabilize, remove objects, generate captions, and automate tedious editing tasks.",
    theory: `**AI video editing tools:**
- Runway (effects, removal)
- Topaz Video AI (upscaling)
- Descript (transcript editing)
- CapCut (auto-editing)
- Adobe Premiere AI

**AI editing features:**
- Object removal
- Background replacement
- Upscaling and enhancement
- Automatic captions
- Transcript-based editing

**Workflow automation:**
- Auto-generate clips from long content
- Silence and filler removal
- Color matching
- Audio enhancement

**Enhancement:**
- Upscaling (4K, 8K)
- Frame interpolation
- Noise reduction
- Stabilization

**Best workflow:**
1. Rough edit traditionally
2. Apply AI enhancements
3. Fine-tune results
4. Export and review`,
    examples: [
      {
        title: "AI Video Enhancement",
        before: "Make my video better",
        after: `Enhance this video footage:

Current issues:
- Shot on phone, 1080p
- Some shaky handheld shots
- Audio has background noise
- No captions

Enhancement requests:
1. Upscale to 4K using Topaz
2. Apply stabilization to shaky clips
3. Reduce background noise, enhance voice
4. Auto-generate captions (burn in or SRT)
5. Color grade for consistent look

Output specs:
- 4K resolution
- H.264 codec
- Separate SRT caption file
- Color graded LUT applied`,
        explanation: "List specific issues and desired enhancements with output specifications.",
      },
    ],
    keywords: [
      {
        term: "Upscaling",
        meaning: "AI enhancement of video resolution (e.g., 1080p to 4K)",
        usage: "Use AI upscaling to improve quality of older or lower-resolution footage",
      },
      {
        term: "Transcript Editing",
        meaning: "Editing video by editing its text transcript",
        usage: "Use Descript to edit videos by deleting or rearranging text",
      },
      {
        term: "Frame Interpolation",
        meaning: "AI-generated frames to increase video smoothness",
        usage: "Use frame interpolation to convert 30fps video to smooth 60fps",
      },
    ],
    instructorNotes: "Demo multiple AI editing tools. Show before/after comparisons. Discuss when AI enhancement is appropriate.",
  },
};

// Library templates
export const promptTemplates: PromptTemplate[] = [
  {
    id: "1",
    title: "React Component",
    description: "Generate a React component with TypeScript and Tailwind",
    category: "Frontend",
    level: "intermediate",
    template: `Create a {componentType} component with TypeScript and Tailwind.

Props:
{props}

Features:
{features}

Include proper TypeScript types and Tailwind styling.`,
    variables: ["componentType", "props", "features"],
  },
  {
    id: "2",
    title: "API Endpoint",
    description: "Generate a REST API endpoint",
    category: "Backend",
    level: "intermediate",
    template: `Create a {method} endpoint for {resource}.

Route: {route}

Request body:
{requestBody}

Response:
{response}

Include validation and error handling.`,
    variables: ["method", "resource", "route", "requestBody", "response"],
  },
  {
    id: "3",
    title: "Database Schema",
    description: "Generate a database table schema",
    category: "Database",
    level: "intermediate",
    template: `Create a database schema for {tableName}.

Fields:
{fields}

Relationships:
{relationships}

Include indexes for common queries.`,
    variables: ["tableName", "fields", "relationships"],
  },
];

// Helper functions
export function getLesson(lessonId: string) {
  for (const module of modules) {
    const lesson = module.lessons.find((l) => l.id === lessonId);
    if (lesson) {
      return {
        ...lesson,
        moduleTitle: module.title,
        content: lessonContent[lessonId],
      };
    }
  }
  return null;
}

export function getAdjacentLessons(lessonId: string) {
  const allLessons = modules.flatMap((m) => m.lessons);
  const currentIndex = allLessons.findIndex((l) => l.id === lessonId);
  
  return {
    prev: currentIndex > 0 ? allLessons[currentIndex - 1] : null,
    next: currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null,
  };
}
