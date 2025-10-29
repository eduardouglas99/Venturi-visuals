import { ContactPage } from "@/pages/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato - Venturi Visuals",
  description: "Entre em contato para discutir seu próximo projeto de vídeo cinematográfico",
};

export default function Contato() {
  return <ContactPage />;
}
