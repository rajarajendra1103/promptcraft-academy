import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { stats } from "@/data/courseData";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary text-sm font-medium mb-8 animate-pulse-glow">
            <Sparkles className="h-4 w-4" />
            Free & Open Source
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Master the Art of
            <span className="block text-gradient mt-2">Prompt Engineering</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            {stats.totalModules} modules, {stats.totalLessons} lessons. 
            Transform your ideas into production-ready code with AI.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="h-14 px-8 text-lg rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/25" asChild>
              <Link to="/curriculum">
                Start Learning
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-xl border-2 hover:bg-secondary/50" asChild>
              <Link to="/library">
                Browse Templates
              </Link>
            </Button>
          </div>

          {/* Preview */}
          <div className="max-w-2xl mx-auto rounded-2xl bg-card/80 backdrop-blur border border-border/50 overflow-hidden text-left shadow-elevated">
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-muted-foreground font-mono ml-2">prompt.md</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <p><span className="text-primary font-semibold"># Role</span></p>
              <p className="text-muted-foreground">Senior React developer</p>
              <p className="mt-3"><span className="text-primary font-semibold"># Task</span></p>
              <p className="text-muted-foreground">Create a dashboard with:</p>
              <p className="text-muted-foreground">• Data visualization</p>
              <p className="text-muted-foreground">• Dark mode support</p>
              <p className="text-muted-foreground">• Responsive design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
