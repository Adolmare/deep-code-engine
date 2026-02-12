import { useState, useEffect } from "react";

const lines = [
  { num: 1, content: <><span className="text-keyword">const</span> <span className="text-function">developer</span> = {"{"}</>, delay: 0 },
  { num: 2, content: <>&nbsp;&nbsp;name: <span className="text-string">"Carlos Mendoza"</span>,</>, delay: 100 },
  { num: 3, content: <>&nbsp;&nbsp;role: <span className="text-string">"Systems Engineer & Backend Developer"</span>,</>, delay: 200 },
  { num: 4, content: <>&nbsp;&nbsp;focus: [<span className="text-string">"Backend"</span>, <span className="text-string">"Cybersecurity"</span>, <span className="text-string">"Systems"</span>],</>, delay: 300 },
  { num: 5, content: <>&nbsp;&nbsp;status: <span className="text-string">"Building robust systems"</span>,</>, delay: 400 },
  { num: 6, content: <>{"}"}</>, delay: 500 },
];

export function HeroSection() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= lines.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-3xl">
        {/* Terminal window */}
        <div className="border border-border rounded-lg overflow-hidden border-glow">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary/50 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/70" />
              <div className="w-3 h-3 rounded-full bg-warning/70" />
              <div className="w-3 h-3 rounded-full bg-primary/70" />
            </div>
            <span className="text-xs text-muted-foreground ml-2 font-mono">~/portfolio/main.ts</span>
          </div>
          {/* Code area */}
          <div className="p-6 font-mono text-sm leading-7 scanline">
            {lines.map((line, i) => (
              <div
                key={line.num}
                className={`flex transition-all duration-300 ${
                  i < visibleLines ? "opacity-100" : "opacity-0"
                } ${i === visibleLines - 1 ? "line-highlight" : ""}`}
              >
                <span className="text-line-number w-8 text-right mr-6 select-none text-xs leading-7">
                  {line.num}
                </span>
                <span>{line.content}</span>
              </div>
            ))}
            <div className={`flex ${visibleLines >= lines.length ? "opacity-100" : "opacity-0"} transition-opacity`}>
              <span className="text-line-number w-8 text-right mr-6 select-none text-xs leading-7">
                {lines.length + 1}
              </span>
              <span className="text-primary cursor-blink">▊</span>
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-1.5 bg-primary/10 border border-t-0 border-border rounded-b-lg text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="text-primary">● main</span>
            <span>UTF-8</span>
            <span>TypeScript</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Ln 6, Col 1</span>
            <span className="text-primary">✓ Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}
