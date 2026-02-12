import { useState } from "react";
import { Code } from "lucide-react";

interface Tech {
  name: string;
  description: string;
  category: string;
}

const techStack: Tech[] = [
  { name: "Python", description: "APIs REST con FastAPI, automatización, scripting de seguridad.", category: "languages" },
  { name: "Go", description: "Microservicios de alto rendimiento y herramientas CLI.", category: "languages" },
  { name: "Rust", description: "Sistemas de bajo nivel, parsers y herramientas de red.", category: "languages" },
  { name: "TypeScript", description: "Backend con Node.js y herramientas de desarrollo.", category: "languages" },
  { name: "C/C++", description: "Programación de sistemas embebidos y drivers.", category: "languages" },
  { name: "PostgreSQL", description: "Diseño de esquemas complejos, optimización de queries.", category: "infra" },
  { name: "Redis", description: "Caching distribuido, colas de mensajes y sesiones.", category: "infra" },
  { name: "Docker", description: "Containerización de microservicios y CI/CD pipelines.", category: "infra" },
  { name: "Kubernetes", description: "Orquestación de clusters en producción.", category: "infra" },
  { name: "Linux", description: "Administración de servidores, hardening y scripting bash.", category: "infra" },
  { name: "Terraform", description: "Infrastructure as Code para AWS y GCP.", category: "infra" },
  { name: "Wireshark", description: "Análisis de tráfico de red y forensics.", category: "security" },
  { name: "Burp Suite", description: "Pentesting de aplicaciones web.", category: "security" },
  { name: "Nmap", description: "Reconocimiento de redes y auditoría de puertos.", category: "security" },
];

export function TechSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  const categories = [
    { key: "languages", label: "Languages" },
    { key: "infra", label: "Infrastructure" },
    { key: "security", label: "Security Tools" },
  ];

  return (
    <section id="tech" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Code className="w-5 h-5 text-accent" />
          <h2 className="text-2xl font-sans font-bold text-foreground">
            <span className="text-comment">// </span>tech_stack.yml
          </h2>
        </div>

        <div className="space-y-8">
          {categories.map((cat) => (
            <div key={cat.key}>
              <div className="text-xs text-comment mb-3 font-mono">
                # {cat.label}
              </div>
              <div className="space-y-0">
                {techStack
                  .filter((t) => t.category === cat.key)
                  .map((tech, i) => (
                    <div
                      key={tech.name}
                      className="group relative"
                      onMouseEnter={() => setHovered(tech.name)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <div
                        className={`flex items-center py-2 px-3 font-mono text-sm transition-all cursor-default rounded-sm ${
                          hovered === tech.name
                            ? "line-highlight text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        <span className="text-line-number w-6 text-right mr-4 select-none text-xs">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-keyword">-</span>
                        <span className="ml-2">{tech.name}</span>
                        {hovered === tech.name && (
                          <span className="ml-4 text-xs text-comment animate-fade-in">
                            {tech.description}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
