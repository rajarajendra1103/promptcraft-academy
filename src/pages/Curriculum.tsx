import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { BookOpen, Clock, ArrowRight, PlayCircle, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { modules, stats } from "@/data/courseData";

// Learn more links - YouTube tutorials and articles
const learnMoreLinks: Record<string, { url: string; type: "youtube" | "article" }> = {
  // Module 1
  "1-1": { url: "https://www.youtube.com/watch?v=_ZvnD73m40o", type: "youtube" },
  "1-2": { url: "https://www.youtube.com/watch?v=jC4v5AS4RIM", type: "youtube" },
  "1-3": { url: "https://www.youtube.com/watch?v=eTmiyLPWfQw", type: "youtube" },
  "1-4": { url: "https://learnprompting.org/docs/basics/roles", type: "article" },
  "1-5": { url: "https://www.youtube.com/watch?v=aOkS_X6PBjc", type: "youtube" },
  "1-6": { url: "https://www.youtube.com/watch?v=wbGKfPBRqJ4", type: "youtube" },
  // Module 2
  "2-1": { url: "https://www.youtube.com/watch?v=Tn6-PIqc4UM", type: "youtube" },
  "2-2": { url: "https://www.youtube.com/watch?v=gp5H0Vw39yw", type: "youtube" },
  "2-3": { url: "https://www.youtube.com/watch?v=O6P86uwfdR0", type: "youtube" },
  "2-4": { url: "https://www.youtube.com/watch?v=RkXv4AXXZE4", type: "youtube" },
  "2-5": { url: "https://www.youtube.com/watch?v=lZqKmFCVOzE", type: "youtube" },
  // Module 3
  "3-1": { url: "https://www.youtube.com/watch?v=wRnHd9mYEX4", type: "youtube" },
  "3-2": { url: "https://www.youtube.com/watch?v=HJxBLwbryFI", type: "youtube" },
  "3-3": { url: "https://www.youtube.com/watch?v=arfDRUIZOiw", type: "youtube" },
  "3-4": { url: "https://www.youtube.com/watch?v=wDCaNZksgKM", type: "youtube" },
  "3-5": { url: "https://www.youtube.com/watch?v=TlyxERC1XkE", type: "youtube" },
  // Module 4
  "4-1": { url: "https://www.youtube.com/watch?v=-MTSQjw5DrM", type: "youtube" },
  "4-2": { url: "https://www.youtube.com/watch?v=fgTGADljAeg", type: "youtube" },
  "4-3": { url: "https://www.youtube.com/watch?v=7Q17ubqLfaM", type: "youtube" },
  "4-4": { url: "https://www.youtube.com/watch?v=nSKp2StlS6s", type: "youtube" },
  "4-5": { url: "https://www.youtube.com/watch?v=GZvSYJDk-us", type: "youtube" },
  // Module 5
  "5-1": { url: "https://www.youtube.com/watch?v=ztHopE5Wnpc", type: "youtube" },
  "5-2": { url: "https://www.youtube.com/watch?v=zsjvFFKOm3c", type: "youtube" },
  "5-3": { url: "https://www.youtube.com/watch?v=7S_tz1z_5bA", type: "youtube" },
  "5-4": { url: "https://www.youtube.com/watch?v=rLnY7LNFOXY", type: "youtube" },
  "5-5": { url: "https://www.youtube.com/watch?v=WpXrBwCVTXY", type: "youtube" },
  // Module 6
  "6-1": { url: "https://www.youtube.com/watch?v=pg19Z8LL06w", type: "youtube" },
  "6-2": { url: "https://www.youtube.com/watch?v=R8_veQiYBjI", type: "youtube" },
  "6-3": { url: "https://www.youtube.com/watch?v=SBfXkJkZ3LI", type: "youtube" },
  "6-4": { url: "https://www.youtube.com/watch?v=M2hLXnAvRxw", type: "youtube" },
  "6-5": { url: "https://www.youtube.com/watch?v=9TJx7QTrTyc", type: "youtube" },
  // Module 7
  "7-1": { url: "https://www.youtube.com/watch?v=TyoqGLbWO7w", type: "youtube" },
  "7-2": { url: "https://www.youtube.com/watch?v=EBXpH9rq2nE", type: "youtube" },
  "7-3": { url: "https://www.youtube.com/watch?v=cuxAaQSVEVY", type: "youtube" },
  "7-4": { url: "https://www.youtube.com/watch?v=u-RLu_8kwA0", type: "youtube" },
  "7-5": { url: "https://www.youtube.com/watch?v=kS-HFCZN9zE", type: "youtube" },
  // Module 8 - AI Tools
  "8-1": { url: "https://www.youtube.com/watch?v=9KHLTZaJcR8", type: "youtube" },
  "8-2": { url: "https://www.youtube.com/watch?v=gWkVWA_2g4o", type: "youtube" },
  "8-3": { url: "https://www.youtube.com/watch?v=x6e_n0OkBnA", type: "youtube" },
  "8-4": { url: "https://www.youtube.com/watch?v=yk9lXobJ95E", type: "youtube" },
  "8-5": { url: "https://www.youtube.com/watch?v=sHK1RDBqDLM", type: "youtube" },
  "8-6": { url: "https://www.youtube.com/watch?v=i-RVZ1mhHo8", type: "youtube" },
  "8-7": { url: "https://www.youtube.com/watch?v=uqMRnLOp7Ac", type: "youtube" },
  "8-8": { url: "https://www.youtube.com/watch?v=JTxsNm9IdYU", type: "youtube" },
  "8-9": { url: "https://www.youtube.com/watch?v=btY8CL6GF_M", type: "youtube" },
  "8-10": { url: "https://www.youtube.com/watch?v=BFASwmLuH7E", type: "youtube" },
  "8-11": { url: "https://www.youtube.com/watch?v=3lbMQ9kWZDA", type: "youtube" },
  // Module 9 - App Development
  "9-1": { url: "https://www.youtube.com/watch?v=VPvVD8t02U8", type: "youtube" },
  "9-2": { url: "https://www.youtube.com/watch?v=0-S5a0eXPoc", type: "youtube" },
  "9-3": { url: "https://www.youtube.com/watch?v=09TeUXjzpKs", type: "youtube" },
  "9-4": { url: "https://www.youtube.com/watch?v=fis26HvvDII", type: "youtube" },
  "9-5": { url: "https://www.youtube.com/watch?v=MnZqPl_1KEk", type: "youtube" },
  // Module 10 - Game Development
  "10-1": { url: "https://www.youtube.com/watch?v=pwZpJzpE2lQ", type: "youtube" },
  "10-2": { url: "https://www.youtube.com/watch?v=DzSpuazCsqE", type: "youtube" },
  "10-3": { url: "https://www.youtube.com/watch?v=LOhfqjmasi0", type: "youtube" },
  "10-4": { url: "https://www.youtube.com/watch?v=hME6Z3cz9RA", type: "youtube" },
  "10-5": { url: "https://www.youtube.com/watch?v=nF9AfkPfqKE", type: "youtube" },
  // Module 11 - Images & Videos
  "11-1": { url: "https://www.youtube.com/watch?v=lG9rXnl6tgM", type: "youtube" },
  "11-2": { url: "https://www.youtube.com/watch?v=2Xb9gXm5x2o", type: "youtube" },
  "11-3": { url: "https://www.youtube.com/watch?v=onmqbI5XPH8", type: "youtube" },
  "11-4": { url: "https://www.youtube.com/watch?v=NJk8pDbt7es", type: "youtube" },
  "11-5": { url: "https://www.youtube.com/watch?v=ZLAbQ8TLkxk", type: "youtube" },
};

const Curriculum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          {/* Header */}
          <div className="max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              Complete Learning Path
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Full <span className="text-gradient">Curriculum</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Master prompt engineering from basics to advanced techniques. Practical, hands-on lessons with real examples.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-card border border-border/50 shadow-sm">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stats.totalLessons}</div>
                  <div className="text-xs text-muted-foreground">Lessons</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-card border border-border/50 shadow-sm">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stats.hours}+</div>
                  <div className="text-xs text-muted-foreground">Hours</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-card border border-border/50 shadow-sm">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                  <PlayCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stats.totalModules}</div>
                  <div className="text-xs text-muted-foreground">Modules</div>
                </div>
              </div>
            </div>
          </div>

          {/* Modules Grid */}
          <div className="space-y-8">
            {modules.map((module) => (
              <div
                key={module.id}
                className="group rounded-3xl border bg-card border-border/50 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Module Header */}
                <div className="p-8 bg-gradient-to-r from-muted/30 to-transparent">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex items-start gap-5">
                      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20">
                        <span className="text-2xl font-bold text-gradient">
                          {String(module.id).padStart(2, "0")}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                            {module.title}
                          </h2>
                          <span className={`badge-${module.level}`}>{module.level}</span>
                        </div>
                        <p className="text-muted-foreground max-w-xl">{module.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-center px-4">
                        <div className="text-2xl font-bold text-primary">{module.lessons.length}</div>
                        <div className="text-xs text-muted-foreground">lessons</div>
                      </div>
                      <Button size="lg" className="rounded-xl shadow-lg shadow-primary/20" asChild>
                        <Link to={`/lesson/${module.lessons[0].id}`}>
                          Start Learning
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Lessons List */}
                <div className="border-t border-border/50">
                  {module.lessons.map((lesson, idx) => (
                    <div
                      key={lesson.id}
                      className={`flex items-center justify-between px-8 py-5 hover:bg-muted/30 transition-colors ${
                        idx !== module.lessons.length - 1 ? "border-b border-border/30" : ""
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted text-sm font-medium text-muted-foreground">
                          {idx + 1}
                        </div>
                        <Link
                          to={`/lesson/${lesson.id}`}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {lesson.title}
                        </Link>
                        <span className={`badge-${lesson.level} scale-90`}>{lesson.level}</span>
                      </div>
                      <div className="flex items-center gap-5">
                        {learnMoreLinks[lesson.id] && (
                          <a
                            href={learnMoreLinks[lesson.id].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                          >
                            {learnMoreLinks[lesson.id].type === "youtube" ? (
                              <>
                                <PlayCircle className="h-4 w-4" />
                                Watch
                              </>
                            ) : (
                              <>
                                <FileText className="h-4 w-4" />
                                Read
                              </>
                            )}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {lesson.duration}
                        </span>
                      </div>
                    </div>
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
