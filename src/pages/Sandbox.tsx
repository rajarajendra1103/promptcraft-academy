import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Play,
  Save,
  Copy,
  RotateCcw,
  Settings,
  Sparkles,
  ChevronDown,
  Clock,
  Zap,
} from "lucide-react";

const examplePrompt = `# Role
You are a senior React developer specializing in TypeScript and modern component patterns.

# Context
Building a dashboard application with real-time data updates and responsive design.

# Task
Create a reusable data card component that:
- Displays a metric with title, value, and trend indicator
- Supports loading and error states
- Uses Tailwind CSS for styling
- Includes proper TypeScript types

# Output Format
TypeScript React functional component with:
- Props interface
- JSDoc comments
- Responsive design
- Accessibility attributes`;

const models = [
  { id: "gpt-4", name: "GPT-4", speed: "fast", quality: "highest" },
  { id: "gpt-4-turbo", name: "GPT-4 Turbo", speed: "faster", quality: "high" },
  { id: "claude-3", name: "Claude 3 Opus", speed: "fast", quality: "highest" },
  { id: "gemini-pro", name: "Gemini Pro", speed: "fastest", quality: "high" },
];

const Sandbox = () => {
  const [prompt, setPrompt] = useState(examplePrompt);
  const [output, setOutput] = useState("");
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [temperature, setTemperature] = useState(0.7);
  const [isRunning, setIsRunning] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const runPrompt = async () => {
    setIsRunning(true);
    setOutput("");
    
    // Simulate streaming output
    const mockOutput = `\`\`\`tsx
interface DataCardProps {
  /** Title displayed above the metric value */
  title: string;
  /** The main metric value to display */
  value: string | number;
  /** Percentage change from previous period */
  trend?: number;
  /** Whether data is currently loading */
  isLoading?: boolean;
  /** Error message if data fetch failed */
  error?: string;
}

/**
 * DataCard - A reusable component for displaying metrics
 * with trend indicators and loading states.
 */
export function DataCard({
  title,
  value,
  trend,
  isLoading = false,
  error,
}: DataCardProps) {
  if (error) {
    return (
      <div className="p-6 rounded-xl bg-destructive/10 border border-destructive/20">
        <p className="text-sm text-destructive">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-xl bg-card border border-border">
      {isLoading ? (
        <div className="animate-pulse space-y-3">
          <div className="h-4 w-24 bg-muted rounded" />
          <div className="h-8 w-32 bg-muted rounded" />
        </div>
      ) : (
        <>
          <p className="text-sm text-muted-foreground mb-1">
            {title}
          </p>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold">
              {value}
            </span>
            {trend !== undefined && (
              <span
                className={\`text-sm font-medium \${
                  trend >= 0 ? "text-green-500" : "text-red-500"
                }\`}
                aria-label={\`\${trend >= 0 ? "Up" : "Down"} \${Math.abs(trend)}%\`}
              >
                {trend >= 0 ? "↑" : "↓"} {Math.abs(trend)}%
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
}
\`\`\`

**Usage Example:**
\`\`\`tsx
<DataCard
  title="Monthly Revenue"
  value="$24,500"
  trend={12.5}
/>
\`\`\``;

    // Simulate streaming
    for (let i = 0; i < mockOutput.length; i += 5) {
      await new Promise((r) => setTimeout(r, 10));
      setOutput(mockOutput.slice(0, i + 5));
    }
    setOutput(mockOutput);
    setIsRunning(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-8">
        <div className="container px-4">
          {/* Toolbar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-1">Prompt Sandbox</h1>
              <p className="text-sm text-muted-foreground">
                Test and refine your prompts with instant feedback
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => setShowSettings(!showSettings)}>
                <Settings className="h-4 w-4" />
                Settings
              </Button>
              <Button variant="outline" size="sm">
                <Save className="h-4 w-4" />
                Save
              </Button>
              <Button
                variant="hero"
                size="sm"
                onClick={runPrompt}
                disabled={isRunning}
              >
                {isRunning ? (
                  <>
                    <Sparkles className="h-4 w-4 animate-spin" />
                    Running...
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4" />
                    Run Prompt
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Settings Panel */}
          {showSettings && (
            <div className="mb-6 p-4 rounded-xl bg-gradient-card border border-border/50 animate-fade-in">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Model Selection */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Model</label>
                  <div className="relative">
                    <select
                      className="w-full h-10 px-3 rounded-lg bg-secondary border border-border text-sm appearance-none cursor-pointer"
                      value={selectedModel.id}
                      onChange={(e) =>
                        setSelectedModel(models.find((m) => m.id === e.target.value) || models[0])
                      }
                    >
                      {models.map((model) => (
                        <option key={model.id} value={model.id}>
                          {model.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                  <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Zap className="h-3 w-3" /> {selectedModel.speed}
                    </span>
                    <span className="flex items-center gap-1">
                      <Sparkles className="h-3 w-3" /> {selectedModel.quality}
                    </span>
                  </div>
                </div>

                {/* Temperature */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Temperature: {temperature}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="2"
                    step="0.1"
                    value={temperature}
                    onChange={(e) => setTemperature(parseFloat(e.target.value))}
                    className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                    <span>Precise</span>
                    <span>Creative</span>
                  </div>
                </div>

                {/* System Message */}
                <div>
                  <label className="text-sm font-medium mb-2 block">System Message</label>
                  <input
                    type="text"
                    placeholder="Optional system context..."
                    className="w-full h-10 px-3 rounded-lg bg-secondary border border-border text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Editor Panels */}
          <div className="grid lg:grid-cols-2 gap-6 min-h-[600px]">
            {/* Prompt Editor */}
            <div className="flex flex-col rounded-xl bg-gradient-card border border-border/50 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/30">
                <span className="text-sm font-medium">Prompt</span>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" onClick={() => setPrompt(examplePrompt)}>
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => navigator.clipboard.writeText(prompt)}>
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex-1 p-4 bg-transparent font-mono text-sm resize-none focus:outline-none"
                placeholder="Enter your prompt here..."
              />
            </div>

            {/* Output Panel */}
            <div className="flex flex-col rounded-xl bg-gradient-card border border-border/50 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/30">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium">Output</span>
                  {isRunning && (
                    <span className="flex items-center gap-1 text-xs text-primary">
                      <Sparkles className="h-3 w-3 animate-spin" />
                      Generating...
                    </span>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigator.clipboard.writeText(output)}
                  disabled={!output}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex-1 p-4 overflow-auto">
                {output ? (
                  <pre className="font-mono text-sm whitespace-pre-wrap">{output}</pre>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                    <Sparkles className="h-12 w-12 mb-4 opacity-20" />
                    <p className="text-sm">Run your prompt to see output</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-sm text-muted-foreground">Quick templates:</span>
            <Button variant="outline" size="sm" onClick={() => setPrompt("# Role\nYou are a React developer.\n\n# Task\n")}>
              React Component
            </Button>
            <Button variant="outline" size="sm" onClick={() => setPrompt("# Task\nGenerate a REST API endpoint for:\n\n# Requirements\n")}>
              API Endpoint
            </Button>
            <Button variant="outline" size="sm" onClick={() => setPrompt("# Database\nPostgreSQL\n\n# Task\nCreate a schema for:\n\n# Tables\n")}>
              SQL Schema
            </Button>
            <Button variant="outline" size="sm" onClick={() => setPrompt("# Style\nModern, minimal\n\n# Subject\n")}>
              Image Prompt
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sandbox;
