import { Mail, Phone, MapPin } from "lucide-react";
import ventyLogo from "@/assets/venty-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={ventyLogo} alt="Venty" className="h-10 w-auto brightness-0 invert mb-4" />
            <p className="text-background/70 max-w-md mb-6">
              Plataforma SaaS diseñada para ofrecer soluciones tecnológicas modernas y eficientes en la gestión comercial y documentos electrónicos en Colombia.
            </p>
            <div className="space-y-3">
              <a href="mailto:mercadeo@venty.com.co" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                <Mail className="w-5 h-5" />
                mercadeo@venty.com.co
              </a>
              <a href="tel:+573054292583" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                <Phone className="w-5 h-5" />
                +57 305 429 2583
              </a>
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="w-5 h-5" />
                San Juan de Pasto, Colombia
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Servicios</h4>
            <ul className="space-y-3">
              <li><a href="#servicios" className="text-background/70 hover:text-background transition-colors">Factura Electrónica</a></li>
              <li><a href="#servicios" className="text-background/70 hover:text-background transition-colors">POS Electrónico</a></li>
              <li><a href="#servicios" className="text-background/70 hover:text-background transition-colors">Nómina Electrónica</a></li>
              <li><a href="#servicios" className="text-background/70 hover:text-background transition-colors">Documento Soporte</a></li>
              <li><a href="#servicios" className="text-background/70 hover:text-background transition-colors">Tienda Nube</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Recursos</h4>
            <ul className="space-y-3">
              <li><a href="#planes" className="text-background/70 hover:text-background transition-colors">Planes y Precios</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Documentación</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © {currentYear} Venty. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/50 hover:text-background transition-colors">
              Términos de Servicio
            </a>
            <a href="#" className="text-background/50 hover:text-background transition-colors">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
