import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { stats } from "@/data/courseData";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-16">
      <div className="container px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            Free & Open Source
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Learn Prompt Engineering
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-10">
            {stats.totalModules} modules, {stats.totalLessons} lessons. 
            Go from idea to code with AI.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" asChild>
              <Link to="/curriculum">
                Start Learning
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/library">
                Browse Templates
              </Link>
            </Button>
          </div>

          {/* Preview */}
          <div className="max-w-2xl mx-auto rounded-xl bg-card border border-border/50 overflow-hidden text-left">
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="text-xs text-muted-foreground font-mono ml-2">prompt.md</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <p><span className="text-primary"># Role</span></p>
              <p className="text-muted-foreground">Senior React developer</p>
              <p className="mt-3"><span className="text-primary"># Task</span></p>
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
