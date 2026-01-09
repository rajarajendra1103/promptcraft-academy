import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { modules, stats } from "@/data/courseData";

const Curriculum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Full <span className="text-gradient">Curriculum</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {stats.totalModules} modules, {stats.totalLessons} lessons. Free and open source.
            </p>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">{stats.totalLessons} Lessons</span>
            </div>
          </div>

          {/* Modules */}
          <div className="space-y-6">
            {modules.map((module) => (
              <div
                key={module.id}
                className="rounded-xl border bg-card border-border/50 hover:border-primary/30 transition-all"
              >
                {/* Module Header */}
                <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-bold text-muted-foreground/30">
                      {String(module.id).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-xl font-semibold">{module.title}</h2>
                        <span className={`badge-${module.level}`}>{module.level}</span>
                      </div>
                      <p className="text-muted-foreground">{module.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">
                      {module.lessons.length} lessons
                    </span>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/lesson/${module.lessons[0].id}`}>
                        Start
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Lessons List */}
                <div className="border-t border-border/50 divide-y divide-border/30">
                  {module.lessons.map((lesson) => (
                    <Link
                      key={lesson.id}
                      to={`/lesson/${lesson.id}`}
                      className="flex items-center justify-between px-6 py-4 hover:bg-secondary/50 transition-colors"
                    >
                      <span>{lesson.title}</span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {lesson.duration}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Curriculum;
