import { 
  FileText, 
  ShoppingCart, 
  Users, 
  Download, 
  FileCheck, 
  Store 
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Factura Electrónica",
    description: "Emite facturas electrónicas válidas ante la DIAN con todos los requisitos legales.",
  },
  {
    icon: ShoppingCart,
    title: "POS Electrónico",
    description: "Punto de venta integrado con facturación electrónica y cuadre de caja automático.",
  },
  {
    icon: Users,
    title: "Nómina Electrónica",
    description: "Gestiona la nómina de tu empresa cumpliendo con la normatividad vigente.",
  },
  {
    icon: Download,
    title: "Recepción de Documentos",
    description: "Recibe y gestiona documentos electrónicos de tus proveedores de forma organizada.",
  },
  {
    icon: FileCheck,
    title: "Documento Soporte",
    description: "Genera documentos soporte para adquisiciones sin factura electrónica.",
  },
  {
    icon: Store,
    title: "Tienda Nube",
    description: "Tienda web integrada para ampliar tu presencia digital y vender en línea.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Todo lo que necesitas en{" "}
            <span className="text-gradient">una sola plataforma</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluciones completas para la gestión de documentos electrónicos de tu empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-subtle flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
