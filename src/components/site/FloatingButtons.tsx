import { Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Button - Left */}
      <a
        href="https://wa.me/YOUR_PHONE_NUMBER"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp"
      >
        <SiWhatsapp size={24} />
      </a>

      {/* Call Button - Right */}
      <a
        href="tel:YOUR_PHONE_NUMBER"
        className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
        aria-label="Call"
      >
        <Phone size={24} />
      </a>
    </>
  );
}
