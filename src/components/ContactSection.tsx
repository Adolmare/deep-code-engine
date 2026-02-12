import { Mail, Github, Linkedin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Mail className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-sans font-bold text-foreground">
            <span className="text-comment">// </span>contact.sh
          </h2>
        </div>

        <div className="border border-border rounded-lg overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border">
            <span className="text-xs text-muted-foreground font-mono">$ ./reach-out.sh</span>
          </div>
          <div className="p-6 font-mono text-sm space-y-4">
            <p className="text-muted-foreground">
              <span className="text-primary">→</span> ¿Tienes un problema complejo que necesita solución?
            </p>
            <p className="text-muted-foreground">
              <span className="text-primary">→</span> Hablemos de arquitectura, seguridad o sistemas.
            </p>

            <div className="flex flex-col gap-3 mt-8">
              {[
                { icon: Mail, label: "contacto@cmendoza.dev", href: "mailto:contacto@cmendoza.dev" },
                { icon: Github, label: "github.com/cmendoza", href: "https://github.com" },
                { icon: Linkedin, label: "linkedin.com/in/cmendoza", href: "https://linkedin.com" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <link.icon className="w-4 h-4" />
                  <span className="group-hover:text-glow-primary">{link.label}</span>
                  <span className="text-line-number text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    ← click
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-mono">
            <span className="text-comment">/*</span> Built with precision.
            <span className="text-comment"> */</span>
          </p>
          <p className="text-xs text-line-number mt-2 font-mono">
            © 2026 Carlos Mendoza — All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
}
