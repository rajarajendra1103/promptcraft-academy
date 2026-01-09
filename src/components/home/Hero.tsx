import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-glow opacity-60 animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">New: AI Asset Generation Module</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Master Prompt Engineering for{' '}
            <span className="text-gradient">Production Apps</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Go from idea to deployed application. Learn to craft prompts that generate 
            code, design systems, databases, and creative assets.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/curriculum">
                Start Free Course
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="xl">
              <Play className="h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Code Preview */}
          <div className="relative max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="absolute -inset-4 bg-gradient-primary opacity-10 blur-2xl rounded-3xl" />
            <div className="relative glass rounded-xl overflow-hidden shadow-elevated">
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/50" />
                  <div className="w-3 h-3 rounded-full bg-intermediate/50" />
                  <div className="w-3 h-3 rounded-full bg-beginner/50" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2">prompt.md</span>
              </div>
              <div className="p-6 font-mono text-sm text-left">
                <p className="text-muted-foreground">
                  <span className="text-primary"># Role</span>
                </p>
                <p className="text-foreground">
                  You are a senior React developer specializing in...
                </p>
                <p className="mt-4 text-muted-foreground">
                  <span className="text-primary"># Task</span>
                </p>
                <p className="text-foreground">
                  Create a responsive dashboard with:
                </p>
                <p className="text-accent">• Real-time data visualization</p>
                <p className="text-accent">• Dark/light theme support</p>
                <p className="text-accent">• Accessibility compliance</p>
                <p className="mt-4 text-muted-foreground">
                  <span className="text-primary"># Output</span>
                </p>
                <p className="text-foreground">
                  TypeScript React components with Tailwind CSS<span className="animate-pulse">▊</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
