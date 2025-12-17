import PrivacyPolicyPage from "@/pages/PoliticaDePrivacidade";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade - Venturi Visuals",
  description: "Saiba como a Venturi Visuals coleta, utiliza e protege as informações fornecidas pelos visitantes do site. Transparência e segurança em cada interação.",
};

export default function Portfolio() {
  return <PrivacyPolicyPage />
}