"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function ContactLink({ className }: { className?: string }) {
  const PHONE_DISPLAY = "+55 (21) 97454-4332";
  const PHONE_LINK = "5521980963359";
  const WHATSAPP_URL =
    "https://api.whatsapp.com/send?phone=5521974544332&text=Ol%C3%A1%20*Venturi%20Visuals*!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20grava%C3%A7%C3%B5es%20de%20alto%20padr%C3%A3o.%20Tenho%20interesse%20em%20elevar%20a%20comunica%C3%A7%C3%A3o%20da%20minha%20marca%20com%20produ%C3%A7%C3%B5es%20de%20excel%C3%AAncia.";

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const mobileRegex =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(mobileRegex.test(navigator.userAgent));
    }
  }, []);

  const link = isMobile ? `tel:${PHONE_LINK}` : WHATSAPP_URL;
  const label = isMobile ? "Ligar agora" : "Falar no WhatsApp";
  const Icon = isMobile ? Phone : MessageCircle;

  return (
    <motion.a
      href={link}
      target={isMobile ? "_self" : "_blank"}
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors duration-300 ${className}`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </motion.a>
  );
}
