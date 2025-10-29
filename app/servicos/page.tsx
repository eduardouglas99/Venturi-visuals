import ServicesPage from "@/pages/ServicesPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços - Venturi Visuals",
  description: "Nossos serviços especializados em produções cinematográficas de alta qualidade",
};

export default function Servicos() {
  return <ServicesPage />;
}
