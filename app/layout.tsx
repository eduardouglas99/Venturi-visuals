// app/layout.tsx
import type { Metadata } from "next";
import "../styles/globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

export const metadata: Metadata = {
  title: "Venturi Visuals - Produções Cinematográficas de Luxo",
  description: "Especializada em produções cinematográficas de imóveis de luxo e marcas exclusivas. Vídeos premium para imóveis de alto padrão e marcas sofisticadas.",
  keywords: ["vídeos de luxo", "imóveis premium", "produção cinematográfica", "real estate videos", "luxury properties"],
  authors: [{ name: "Venturi Visuals" }],
  openGraph: {
    title: "Venturi Visuals - Produções Cinematográficas de Luxo",
    description: "Especializada em produções cinematográficas de imóveis de luxo e marcas exclusivas",
    type: "website",
    locale: "pt_BR",
  },
  icons: {
    icon: "/favicon/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen cursor-none">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
