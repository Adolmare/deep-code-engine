import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Terminal, User, Code, Briefcase, Mail, FileText } from "lucide-react";

interface CommandPaletteProps {
  onNavigate: (section: string) => void;
}

const commands = [
  { id: "hero", label: "~/home", icon: Terminal, group: "Navigate" },
  { id: "about", label: "~/about", icon: User, group: "Navigate" },
  { id: "tech", label: "~/tech-stack", icon: Code, group: "Navigate" },
  { id: "projects", label: "~/projects", icon: Briefcase, group: "Navigate" },
  { id: "contact", label: "~/contact", icon: Mail, group: "Navigate" },
  { id: "resume", label: "download resume.pdf", icon: FileText, group: "Actions" },
];

export function CommandPalette({ onNavigate }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (id: string) => {
    setOpen(false);
    if (id === "resume") return;
    onNavigate(id);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 text-xs text-muted-foreground border border-border rounded-md hover:border-primary/50 hover:text-primary transition-colors"
      >
        <Terminal className="w-3 h-3" />
        <span>Ctrl+K</span>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigate">
            {commands
              .filter((c) => c.group === "Navigate")
              .map((cmd) => (
                <CommandItem key={cmd.id} onSelect={() => handleSelect(cmd.id)}>
                  <cmd.icon className="mr-2 h-4 w-4 text-primary" />
                  <span className="font-mono text-sm">{cmd.label}</span>
                </CommandItem>
              ))}
          </CommandGroup>
          <CommandGroup heading="Actions">
            {commands
              .filter((c) => c.group === "Actions")
              .map((cmd) => (
                <CommandItem key={cmd.id} onSelect={() => handleSelect(cmd.id)}>
                  <cmd.icon className="mr-2 h-4 w-4 text-warning" />
                  <span className="font-mono text-sm">{cmd.label}</span>
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
