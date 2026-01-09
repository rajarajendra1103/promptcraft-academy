import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { modules, stats } from "@/data/courseData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />

        {/* Stats */}
        <section className="py-16 border-y border-border/50">
          <div className="container px-4">
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
              <div>
                <div className="text-4xl font-bold text-primary">{stats.totalModules}</div>
                <div className="text-sm text-muted-foreground">Modules</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">{stats.totalLessons}</div>
                <div className="text-sm text-muted-foreground">Lessons</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">{stats.totalTemplates}</div>
                <div className="text-sm text-muted-foreground">Templates</div>
              </div>
            </div>
          </div>
        </section>

        {/* Modules Preview */}
        <section className="py-20">
          <div className="container px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {modules.map((module) => (
                <Link
                  key={module.id}
                  to={`/lesson/${module.lessons[0].id}`}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-bold text-muted-foreground/30">
                      {String(module.id).padStart(2, "0")}
                    </span>
                    <span className={`badge-${module.level}`}>{module.level}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{module.description}</p>
                  <div className="flex items-center text-sm text-primary">
                    {module.lessons.length} lessons
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Learning Today</h2>
            <p className="text-muted-foreground mb-8">Free, open source, no signup required.</p>
            <Link
              to="/curriculum"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              View Curriculum
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
