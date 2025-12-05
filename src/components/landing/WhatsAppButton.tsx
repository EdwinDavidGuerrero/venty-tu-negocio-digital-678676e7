import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "573054292583";
const DEFAULT_MESSAGE = "Hola, quiero hablar con un asesor de Venty";

export const getWhatsAppUrl = (message?: string) => {
  const text = encodeURIComponent(message || DEFAULT_MESSAGE);
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${text}&type=phone_number&app_absent=0`;
};

const WhatsAppButton = () => {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;