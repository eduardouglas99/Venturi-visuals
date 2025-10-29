"use client"

import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = [
  { id: '/', label: 'Home', icon: '◉' },
  { id: '/portfolio', label: 'Portfolio', icon: '⬒' },
  { id: '/sobre', label: 'About', icon: '◐' },
  { id: '/servicos', label: 'Services', icon: '◇' },
  { id: '/contato', label: 'Contact', icon: '◈' }
];

export function NavigationDock() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState(pathname);

  useEffect(() => {
    setActiveSection(pathname);
  }, [pathname]);

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-black/80 backdrop-blur-xl rounded-full px-6 py-3 border border-white/10">
        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              data-cursor="hover"
              onClick={() => {
                setActiveSection(item.id);
                router.push(item.id);
              }}
              className={`flex flex-col items-center space-y-1 transition-colors duration-300 ${
                activeSection === item.id ? 'text-white' : 'text-white/50 hover:text-white/80'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-xs tracking-wider uppercase">{item.label}</span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="w-1 h-1 bg-white rounded-full"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}