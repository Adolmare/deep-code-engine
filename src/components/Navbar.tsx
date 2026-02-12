import { Terminal } from "lucide-react";
import { CommandPalette } from "./CommandPalette";

interface NavbarProps {
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "about", label: "about" },
  { id: "tech", label: "tech" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

export function Navbar({ onNavigate }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        <button
          onClick={() => onNavigate("hero")}
          className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
        >
          <Terminal className="w-4 h-4 text-primary" />
          <span className="font-mono text-sm font-semibold">cm<span className="text-primary">.</span>dev</span>
        </button>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="px-3 py-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors rounded-sm hover:bg-secondary/50"
              >
                ~/{item.label}
              </button>
            ))}
          </div>
          <CommandPalette onNavigate={onNavigate} />
        </div>
      </div>
    </nav>
  );
}
