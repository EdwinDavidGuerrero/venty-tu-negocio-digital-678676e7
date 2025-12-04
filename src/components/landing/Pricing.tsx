import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    monthlyPrice: "50.000",
    yearlyPrice: "40.000",
    description: "Ideal para pequeños negocios",
    features: [
      "1 Caja POS",
      "1 Usuario incluido",
      "1.000 documentos/año",
      "Facturación POS",
      "Reportes de ventas",
      "Cuadre de caja",
    ],
    popular: false,
  },
  {
    name: "Estándar",
    monthlyPrice: "100.000",
    yearlyPrice: "90.000",
    description: "Para negocios en crecimiento",
    features: [
      "2 Cajas POS",
      "2 Usuarios incluidos",
      "2.000 documentos/año",
      "Todo lo del plan Basic",
      "Facturación Electrónica",
      "Gestión de inventario",
    ],
    popular: true,
  },
  {
    name: "Full",
    monthlyPrice: "140.000",
    yearlyPrice: "100.000",
    description: "Solución completa empresarial",
    features: [
      "5 Cajas POS",
      "5 Usuarios incluidos",
      "3.000 documentos/año",
      "Todo lo del plan Estándar",
      "Nómina electrónica",
      "Documento soporte",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="planes" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Planes que se adaptan a{" "}
            <span className="text-gradient">tu negocio</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Todos los planes incluyen certificado digital, soporte técnico y capacitación.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg ${
                plan.popular
                  ? "border-primary shadow-glow scale-105 z-10"
                  : "border-border/50 hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-hero rounded-full text-primary-foreground text-sm font-medium">
                  Más Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-display font-bold text-foreground">
                    ${plan.yearlyPrice}
                  </span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  facturado anualmente · ${plan.monthlyPrice}/mes mensual
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                Comenzar Ahora
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Precios en COP. No incluyen IVA (19%).
        </p>
      </div>
    </section>
  );
};

export default Pricing;
