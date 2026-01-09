import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, BookOpen, Copy } from "lucide-react";
import { getLesson, getAdjacentLessons } from "@/data/courseData";

const Lesson = () => {
  const { lessonId } = useParams();
  const lesson = lessonId ? getLesson(lessonId) : null;
  const adjacent = lessonId ? getAdjacentLessons(lessonId) : { prev: null, next: null };

  if (!lesson) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container px-4 text-center">
            <h1 className="text-2xl font-bold mb-4">Lesson Not Found</h1>
            <p className="text-muted-foreground mb-6">
              This lesson doesn't exist or content is coming soon.
            </p>
            <Button asChild>
              <Link to="/curriculum">Back to Curriculum</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container px-4 max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/curriculum" className="hover:text-primary">Curriculum</Link>
            <ChevronRight className="h-4 w-4" />
            <span>{lesson.moduleTitle}</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{lesson.title}</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className={`badge-${lesson.level}`}>{lesson.level}</span>
              <span className="text-sm text-muted-foreground">{lesson.duration}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">{lesson.title}</h1>
          </div>

          {/* Objectives */}
          {lesson.content?.objectives && (
            <div className="p-6 rounded-xl bg-card border border-border/50 mb-8">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                What you'll learn
              </h3>
              <ul className="space-y-2">
                {lesson.content.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Summary */}
          {lesson.content?.summary && (
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 mb-8">
              <p className="text-muted-foreground">{lesson.content.summary}</p>
            </div>
          )}

          {/* Theory */}
          {lesson.content?.theory && (
            <div className="prose prose-invert max-w-none mb-8">
              <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                {lesson.content.theory}
              </div>
            </div>
          )}

          {/* Examples */}
          {lesson.content?.examples?.map((example, i) => (
            <div key={i} className="mb-8">
              <h3 className="text-lg font-semibold mb-4">{example.title || `Example ${i + 1}`}</h3>
              
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-destructive mb-2 block">❌ Before</span>
                  <div className="p-4 rounded-lg bg-muted font-mono text-sm">
                    {example.before}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary">✓ After</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigator.clipboard.writeText(example.after)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 font-mono text-sm whitespace-pre-wrap">
                    {example.after}
                  </div>
                </div>

                {example.explanation && (
                  <p className="text-sm text-muted-foreground italic">{example.explanation}</p>
                )}
              </div>
            </div>
          ))}

          {/* Exercises */}
          {lesson.content?.exercises && lesson.content.exercises.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Exercises</h3>
              <div className="space-y-4">
                {lesson.content.exercises.map((exercise, i) => (
                  <div key={i} className="p-4 rounded-lg bg-card border border-border">
                    <h4 className="font-medium mb-2">{exercise.title}</h4>
                    <p className="text-muted-foreground text-sm mb-3">{exercise.instructions}</p>
                    {exercise.starterPrompt && (
                      <div className="p-3 rounded bg-muted font-mono text-sm">
                        Start: "{exercise.starterPrompt}"
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Instructor Notes */}
          {lesson.content?.instructorNotes && (
            <div className="p-4 rounded-lg bg-accent/10 border border-accent/20 mb-8">
              <h4 className="font-medium mb-2 text-accent">💡 Instructor Notes</h4>
              <p className="text-sm text-muted-foreground">{lesson.content.instructorNotes}</p>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-12 flex items-center justify-between pt-8 border-t border-border">
            {adjacent.prev ? (
              <Link
                to={`/lesson/${adjacent.prev.id}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary"
              >
                <ChevronLeft className="h-5 w-5" />
                <div>
                  <div className="text-xs">Previous</div>
                  <div className="font-medium">{adjacent.prev.title}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {adjacent.next && (
              <Link
                to={`/lesson/${adjacent.next.id}`}
                className="flex items-center gap-2 text-right text-muted-foreground hover:text-primary"
              >
                <div>
                  <div className="text-xs">Next</div>
                  <div className="font-medium">{adjacent.next.title}</div>
                </div>
                <ChevronRight className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Lesson;
