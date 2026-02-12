import { Terminal } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Terminal className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-sans font-bold text-foreground">
            <span className="text-comment">// </span>about.md
          </h2>
        </div>

        <div className="space-y-4 text-sm leading-7 font-mono">
          <p className="text-muted-foreground">
            <span className="text-line-number mr-4 select-none">01</span>
            Ingeniero de Sistemas con +5 años de experiencia diseñando
          </p>
          <p className="text-muted-foreground">
            <span className="text-line-number mr-4 select-none">02</span>
            arquitecturas backend robustas y soluciones de infraestructura.
          </p>
          <p className="text-muted-foreground">
            <span className="text-line-number mr-4 select-none">03</span>
            Especializado en sistemas distribuidos, seguridad informática
          </p>
          <p className="text-muted-foreground">
            <span className="text-line-number mr-4 select-none">04</span>
            y optimización de rendimiento a nivel de sistema.
          </p>
          <p className="text-muted-foreground mt-6">
            <span className="text-line-number mr-4 select-none">05</span>
            <span className="text-primary">→</span> Resuelvo los problemas complejos bajo el capó.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4">
          {[
            { label: "Años exp.", value: "5+", color: "text-primary" },
            { label: "Proyectos", value: "30+", color: "text-accent" },
            { label: "Contribuciones OSS", value: "120+", color: "text-warning" },
          ].map((stat) => (
            <div key={stat.label} className="border border-border rounded-md p-4 hover:border-primary/40 transition-colors">
              <div className={`text-2xl font-sans font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
