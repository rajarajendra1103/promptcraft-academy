import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { BookOpen, Clock, ArrowRight, Lock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { modules, stats, lessonContent } from "@/data/courseData";

// Learn more links for lessons
const learnMoreLinks: Record<string, string> = {
  "1-1": "https://platform.openai.com/docs/guides/prompt-engineering",
  "1-2": "https://www.promptingguide.ai/",
  "1-3": "https://learnprompting.org/docs/basics/decomposition",
  "1-4": "https://www.promptingguide.ai/techniques/chain-of-thought",
  "1-5": "https://www.promptingguide.ai/techniques/structured-outputs",
  "1-6": "https://learnprompting.org/docs/basics/iteration",
  "2-1": "https://react.dev/learn",
  "2-2": "https://www.typescriptlang.org/docs/handbook/2/types-from-types.html",
  "2-3": "https://react.dev/learn/managing-state",
  "2-4": "https://react-hook-form.com/",
  "2-5": "https://tailwindcss.com/docs/responsive-design",
  "3-1": "https://www.designtokens.dev/",
  "3-2": "https://coolors.co/",
  "3-3": "https://fonts.google.com/",
  "3-4": "https://every-layout.dev/",
  "3-5": "https://www.figma.com/resource-library/ux-flows/",
  "4-1": "https://restfulapi.net/",
  "4-2": "https://swagger.io/resources/open-api/",
  "4-3": "https://auth0.com/docs",
  "4-4": "https://www.rfc-editor.org/rfc/rfc7807",
  "4-5": "https://developers.google.com/apis-explorer",
  "5-1": "https://www.lucidchart.com/pages/er-diagrams",
  "5-2": "https://www.postgresql.org/docs/current/ddl.html",
  "5-3": "https://www.sqlshack.com/",
  "5-4": "https://www.prisma.io/docs/concepts/components/prisma-migrate",
  "5-5": "https://www.postgresql.org/docs/current/tutorial-fk.html",
  "6-1": "https://docs.docker.com/",
  "6-2": "https://docs.github.com/en/actions",
  "6-3": "https://vercel.com/docs",
  "6-4": "https://12factor.net/config",
  "6-5": "https://grafana.com/docs/grafana/latest/",
  "7-1": "https://openai.com/dall-e-3",
  "7-2": "https://www.midjourney.com/",
  "7-3": "https://www.svgrepo.com/",
  "7-4": "https://www.patternpad.com/",
  "7-5": "https://www.suno.ai/",
  "8-1": "https://lovable.dev/",
  "8-2": "https://bolt.new/",
  "8-3": "https://v0.dev/",
  "8-4": "https://cursor.sh/",
  "8-5": "https://www.emergentmind.com/",
  "8-6": "https://developer.android.com/studio/intro",
  "8-7": "https://replit.com/",
  "8-8": "https://chat.openai.com/",
  "8-9": "https://ai.google.dev/",
  "8-10": "https://grok.x.ai/",
  "8-11": "https://www.promptingguide.ai/tools",
};

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
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{stats.totalLessons} Lessons</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">{stats.hours}+ Hours</span>
              </div>
            </div>
          </div>

          {/* Modules */}
          <div className="space-y-6">
            {modules.map((module) => {
              const isComingSoon = module.lessons[0]?.title === "Coming Soon";
              
              return (
                <div
                  key={module.id}
                  className={`rounded-2xl border bg-card border-border/50 transition-all ${
                    isComingSoon ? "opacity-60" : "hover:border-primary/30"
                  }`}
                >
                  {/* Module Header */}
                  <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl font-bold text-muted-foreground/20">
                        {String(module.id).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-xl font-semibold">{module.title}</h2>
                          <span className={`badge-${module.level}`}>{module.level}</span>
                          {isComingSoon && (
                            <span className="flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-accent/20 text-accent">
                              <Lock className="h-3 w-3" />
                              Coming Soon
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground">{module.description}</p>
                      </div>
                    </div>
                    {!isComingSoon && (
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">
                          {module.lessons.length} lessons
                        </span>
                        <Button variant="default" size="sm" className="rounded-lg" asChild>
                          <Link to={`/lesson/${module.lessons[0].id}`}>
                            Start
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Lessons List */}
                  {!isComingSoon && (
                    <div className="border-t border-border/50 divide-y divide-border/30">
                      {module.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className="flex items-center justify-between px-6 py-4 hover:bg-secondary/50 transition-colors"
                        >
                          <Link
                            to={`/lesson/${lesson.id}`}
                            className="flex-1 hover:text-primary transition-colors"
                          >
                            {lesson.title}
                          </Link>
                          <div className="flex items-center gap-4">
                            {learnMoreLinks[lesson.id] && (
                              <a
                                href={learnMoreLinks[lesson.id]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-xs text-primary hover:underline"
                              >
                                Learn more
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            )}
                            <span className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              {lesson.duration}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Curriculum;
