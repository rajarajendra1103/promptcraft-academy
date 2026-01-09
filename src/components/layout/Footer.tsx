import { Link } from "react-router-dom";
import { Terminal, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Terminal className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                Prompt<span className="text-primary">Forge</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Free and open source. Learn prompt engineering.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h4 className="font-semibold mb-3">Learn</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/curriculum" className="hover:text-primary">Curriculum</Link></li>
                <li><Link to="/sandbox" className="hover:text-primary">Sandbox</Link></li>
                <li><Link to="/library" className="hover:text-primary">Library</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://github.com" className="hover:text-primary flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          Open source under MIT License
        </div>
      </div>
    </footer>
  );
}
