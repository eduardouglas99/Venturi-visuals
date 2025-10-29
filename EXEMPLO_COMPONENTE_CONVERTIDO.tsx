/**
 * EXEMPLO: Como converter NavigationDock para Next.js
 * 
 * Este é um exemplo de como seus componentes devem ser convertidos
 */

"use client"; // ← IMPORTANTE: Adicione isso no topo de componentes com interatividade

import { useState, useEffect } from "react";
import Link from "next/link"; // ← MUDANÇA: next/link ao invés de react-router-dom
import { usePathname } from "next/navigation"; // ← MUDANÇA: Para saber a rota atual
import { motion } from "framer-motion";
import { Home, Briefcase, User, Settings, Mail } from "lucide-react";

export function NavigationDock() {
  const pathname = usePathname(); // ← MUDANÇA: usePathname() ao invés de useLocation()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Portfólio", href: "/portfolio", icon: Briefcase },
    { name: "Sobre", href: "/sobre", icon: User },
    { name: "Serviços", href: "/servicos", icon: Settings },
    { name: "Contato", href: "/contato", icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="bg-black/80 backdrop-blur-xl rounded-2xl border border-white/10 px-6 py-3 shadow-2xl">
        <div className="flex items-center gap-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname === item.href; // ← MUDANÇA: pathname ao invés de location.pathname

            return (
              <Link
                key={item.href}
                href={item.href} // ← MUDANÇA: href ao invés de to
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-white text-black"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon size={20} />
                </motion.div>

                {/* Tooltip */}
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-black px-3 py-1 rounded-lg"
                  >
                    {item.name}
                  </motion.div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}

/**
 * RESUMO DAS MUDANÇAS:
 * 
 * 1. Adicionar "use client" no topo
 * 2. Trocar: import { Link } from "react-router-dom" 
 *    Por: import Link from "next/link"
 * 3. Trocar: import { useLocation } from "react-router-dom"
 *    Por: import { usePathname } from "next/navigation"
 * 4. Trocar: const location = useLocation()
 *    Por: const pathname = usePathname()
 * 5. Trocar: location.pathname
 *    Por: pathname
 * 6. Trocar: <Link to="/rota">
 *    Por: <Link href="/rota">
 */
