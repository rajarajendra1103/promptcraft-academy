import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Search, Copy, X } from "lucide-react";
import { promptTemplates } from "@/data/courseData";

const categories = ["all", "frontend", "backend", "design", "devops"];

const Library = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedPrompt, setSelectedPrompt] = useState<typeof promptTemplates[0] | null>(null);

  const filtered = promptTemplates.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          {/* Header */}
          <div className="max-w-3xl mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Prompt <span className="text-gradient">Library</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Free prompt templates. Copy and customize.
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-md mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search templates..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-12 pl-10 pr-4 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((prompt) => (
              <div
                key={prompt.id}
                onClick={() => setSelectedPrompt(prompt)}
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`badge-${prompt.level}`}>{prompt.level}</span>
                  <span className="text-xs text-muted-foreground">{prompt.category}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{prompt.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{prompt.description}</p>
                <div className="flex flex-wrap gap-2">
                  {prompt.variables.map((v) => (
                    <span key={v} className="text-xs px-2 py-1 rounded bg-secondary font-mono">
                      {`{{${v}}}`}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedPrompt && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedPrompt(null)}
            >
              <div
                className="w-full max-w-2xl max-h-[80vh] overflow-auto rounded-xl bg-card border border-border"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 border-b border-border flex justify-between">
                  <div>
                    <span className={`badge-${selectedPrompt.level} mb-2`}>{selectedPrompt.level}</span>
                    <h2 className="text-2xl font-bold">{selectedPrompt.title}</h2>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setSelectedPrompt(null)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{selectedPrompt.description}</p>
                  <h4 className="text-sm font-medium mb-2">Template</h4>
                  <pre className="p-4 rounded-lg bg-muted font-mono text-sm whitespace-pre-wrap mb-4">
                    {selectedPrompt.template}
                  </pre>
                  <Button onClick={() => navigator.clipboard.writeText(selectedPrompt.template)}>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Template
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Library;
