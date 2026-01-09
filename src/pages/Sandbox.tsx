import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Play, Copy, RotateCcw } from "lucide-react";

const defaultPrompt = `# Role
Senior React developer

# Task
Create a button component

# Requirements
- TypeScript
- Tailwind CSS
- Multiple variants

# Output
React component`;

const Sandbox = () => {
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const runPrompt = async () => {
    setIsRunning(true);
    setOutput("");
    
    // Simulate output
    const mockOutput = `\`\`\`tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
}

export function Button({ 
  children, 
  variant = "primary", 
  onClick 
}: ButtonProps) {
  const styles = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    outline: "border border-gray-300",
  };

  return (
    <button 
      className={\`px-4 py-2 rounded \${styles[variant]}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
\`\`\``;

    // Simulate typing
    for (let i = 0; i < mockOutput.length; i += 10) {
      await new Promise((r) => setTimeout(r, 15));
      setOutput(mockOutput.slice(0, i + 10));
    }
    setOutput(mockOutput);
    setIsRunning(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-8">
        <div className="container px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">Sandbox</h1>
              <p className="text-sm text-muted-foreground">Test your prompts</p>
            </div>
            <Button onClick={runPrompt} disabled={isRunning}>
              <Play className="h-4 w-4 mr-2" />
              {isRunning ? "Running..." : "Run"}
            </Button>
          </div>

          {/* Editor */}
          <div className="grid lg:grid-cols-2 gap-6 min-h-[500px]">
            {/* Input */}
            <div className="flex flex-col rounded-xl bg-card border border-border/50 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/30">
                <span className="text-sm font-medium">Prompt</span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" onClick={() => setPrompt(defaultPrompt)}>
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
                placeholder="Enter your prompt..."
              />
            </div>

            {/* Output */}
            <div className="flex flex-col rounded-xl bg-card border border-border/50 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/30">
                <span className="text-sm font-medium">Output</span>
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
                  <p className="text-muted-foreground text-center mt-20">
                    Click Run to see output
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sandbox;
