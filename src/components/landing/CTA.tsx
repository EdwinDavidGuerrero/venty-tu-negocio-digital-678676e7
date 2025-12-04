import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-primary-foreground/30 rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-primary-foreground/20 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-primary-foreground/10 rounded-full blur-xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Comienza a simplificar tu facturación hoy
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10">
            Únete a cientos de empresas colombianas que confían en Venty para su gestión de documentos electrónicos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              Prueba Gratis por 30 Días
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Hablar con un Asesor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
