import { ExternalLink, GitBranch } from "lucide-react";

interface Project {
  name: string;
  description: string;
  tech: string[];
  status: "production" | "development" | "archived";
}

const projects: Project[] = [
  {
    name: "vault-proxy",
    description: "Reverse proxy con rate limiting y detección de anomalías en tiempo real. Reduce ataques DDoS en un 94%.",
    tech: ["Go", "Redis", "Docker"],
    status: "production",
  },
  {
    name: "net-sentinel",
    description: "Sistema de monitoreo de red que analiza tráfico y genera alertas automáticas ante patrones sospechosos.",
    tech: ["Rust", "PostgreSQL", "Linux"],
    status: "production",
  },
  {
    name: "deploy-forge",
    description: "Pipeline de CI/CD personalizado con rollback automático y health checks integrados.",
    tech: ["Python", "Terraform", "K8s"],
    status: "development",
  },
  {
    name: "crypto-audit",
    description: "Herramienta de auditoría criptográfica para verificar implementaciones TLS/SSL en infraestructura.",
    tech: ["Rust", "Nmap", "OpenSSL"],
    status: "archived",
  },
];

const statusColors: Record<string, string> = {
  production: "text-primary",
  development: "text-warning",
  archived: "text-muted-foreground",
};

const statusDots: Record<string, string> = {
  production: "bg-primary",
  development: "bg-warning",
  archived: "bg-muted-foreground",
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <GitBranch className="w-5 h-5 text-warning" />
          <h2 className="text-2xl font-sans font-bold text-foreground">
            <span className="text-comment">// </span>projects/
          </h2>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group border border-border rounded-md p-5 hover:border-primary/40 hover:border-glow transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-base text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full ${statusDots[project.status]}`} />
                    <span className={`text-xs font-mono ${statusColors[project.status]}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <p className="text-sm text-muted-foreground mt-3 leading-6">
                {project.description}
              </p>

              <div className="flex gap-2 mt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
