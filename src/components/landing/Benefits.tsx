import { 
  Shield, 
  Zap, 
  HeadphonesIcon, 
  RefreshCw, 
  Cloud, 
  GraduationCap 
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Fácil de Implementar",
    description: "Comienza en minutos, sin instalaciones complicadas ni conocimientos técnicos.",
  },
  {
    icon: Shield,
    title: "Certificado Digital Incluido",
    description: "Firma electrónica incluida sin costos adicionales en todos los planes.",
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte Técnico",
    description: "Equipo especializado disponible para resolver tus dudas y problemas.",
  },
  {
    icon: RefreshCw,
    title: "Migración Sin Costo",
    description: "Te ayudamos a migrar desde tu sistema actual sin cobros adicionales.",
  },
  {
    icon: Cloud,
    title: "100% en la Nube",
    description: "Accede desde cualquier lugar con backup diario y alta disponibilidad.",
  },
  {
    icon: GraduationCap,
    title: "Capacitación Incluida",
    description: "10 horas de capacitación remota para ti y tu equipo.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            ¿Por qué elegir{" "}
            <span className="text-gradient">Venty</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Más que un software, somos tu aliado tecnológico en la gestión empresarial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
