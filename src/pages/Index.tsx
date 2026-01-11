import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Link } from "react-router-dom";
import { ArrowRight, Lock, Gamepad2, Video } from "lucide-react";
import { modules, stats } from "@/data/courseData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />

        {/* Stats */}
        <section className="py-16 border-y border-border/50 bg-muted/20">
          <div className="container px-4">
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
              <div className="p-6 rounded-2xl bg-card/50 border border-border/50">
                <div className="text-5xl font-bold text-gradient">{stats.totalModules}</div>
                <div className="text-sm text-muted-foreground mt-2">Modules</div>
              </div>
              <div className="p-6 rounded-2xl bg-card/50 border border-border/50">
                <div className="text-5xl font-bold text-gradient">{stats.totalLessons}</div>
                <div className="text-sm text-muted-foreground mt-2">Lessons</div>
              </div>
              <div className="p-6 rounded-2xl bg-card/50 border border-border/50">
                <div className="text-5xl font-bold text-gradient">{stats.totalTemplates}+</div>
                <div className="text-sm text-muted-foreground mt-2">Templates</div>
              </div>
            </div>
          </div>
        </section>

        {/* Modules Preview */}
        <section className="py-20">
          <div className="container px-4">
            <h2 className="text-4xl font-bold text-center mb-4">What You'll Learn</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              From basic prompts to advanced AI workflows. Everything you need to build with AI.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {modules.map((module) => {
                const isComingSoon = module.lessons[0]?.title === "Coming Soon";
                
                return (
                  <div
                    key={module.id}
                    className={`p-6 rounded-2xl bg-card border border-border/50 transition-all group relative overflow-hidden ${
                      isComingSoon ? "opacity-70" : "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                    }`}
                  >
                    {isComingSoon && (
                      <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full bg-accent/20 text-accent">
                        <Lock className="h-3 w-3" />
                        Coming Soon
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl font-bold text-muted-foreground/20">
                        {String(module.id).padStart(2, "0")}
                      </span>
                      <span className={`badge-${module.level}`}>{module.level}</span>
                    </div>
                    <h3 className={`text-lg font-semibold mb-2 ${!isComingSoon && "group-hover:text-primary"} transition-colors`}>
                      {module.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{module.description}</p>
                    {!isComingSoon ? (
                      <Link
                        to={`/lesson/${module.lessons[0].id}`}
                        className="flex items-center text-sm text-primary font-medium"
                      >
                        {module.lessons.length} lessons
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    ) : (
                      <span className="flex items-center text-sm text-muted-foreground">
                        {module.id === 9 ? <Gamepad2 className="h-4 w-4 mr-1" /> : <Video className="h-4 w-4 mr-1" />}
                        Launching soon
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Start Your Journey Today</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Free, open source, no signup required. Join thousands learning prompt engineering.
            </p>
            <Link
              to="/curriculum"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium text-lg hover:from-primary/90 hover:to-primary/70 transition-all shadow-lg shadow-primary/25"
            >
              View Full Curriculum
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
