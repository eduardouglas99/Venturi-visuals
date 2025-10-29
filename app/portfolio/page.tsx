import PortfolioPage from "@/pages/PortfolioPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio - Venturi Visuals",
  description: "Explore nossos projetos de vídeos cinematográficos para imóveis de luxo e marcas exclusivas",
};

export default function Portfolio() {
  return <PortfolioPage />;
}
