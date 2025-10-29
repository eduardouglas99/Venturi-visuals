import AboutPage from "@/pages/AboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre - Venturi Visuals",
  description: "Conheça a Venturi Visuals e nossa missão de criar produções cinematográficas memoráveis",
};

export default function Sobre() {
  return <AboutPage />;
}
