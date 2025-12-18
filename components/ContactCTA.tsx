"use client"

import { motion } from 'framer-motion';
import { useState } from 'react';

export function ContactCTA() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="contact" className="min-h-screen bg-white text-black flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="fill-current text-black">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-4xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-4 block">
            Pronto para elevar o nível do seu imóvel?
          </span>
          <h2 className="text-5xl md:text-7xl font-light tracking-tight leading-[0.9] mb-8">
            VAMOS CRIAR
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500">
              ALGO EXTRAORDINÁRIO
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transforme seu imóvel de luxo em uma obra-prima cinematográfica que cativa, inspira e gera resultados excepcionais.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.a
            data-cursor="hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative inline-block px-16 py-6 bg-black text-white hover:bg-gray-900 transition-all duration-500 tracking-wider text-lg overflow-hidden"
            href="https://api.whatsapp.com/send?phone=5521980963359&text=Ol%C3%A1%20*Venturi%20Visuals*!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20grava%C3%A7%C3%B5es%20de%20alto%20padr%C3%A3o.%20Tenho%20interesse%20em%20elevar%20a%20comunica%C3%A7%C3%A3o%20da%20minha%20marca%20com%20produ%C3%A7%C3%B5es%20de%20excel%C3%AAncia."
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="relative z-10">COMECE SEU PROJETO</span>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: isHovered ? "0%" : "-100%" }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black"
            />
          </motion.a>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 text-gray-600">
            <motion.a
              href="mailto:contato@venturivisuals.com.br"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 group"
              data-cursor="hover"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <span className="tracking-wide">contato@venturivisuals.com.br</span>
            </motion.a>

            <motion.a
              href="tel:+12125551234"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 group"
              data-cursor="hover"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>

              <a      
                href="https://wa.me/5521980963359?text=Ol%C3%A1%20Venturi%20Visuals!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20grava%C3%A7%C3%B5es%20de%20alto%20padr%C3%A3o.%0ATenho%20interesse%20em%20elevar%20a%20comunica%C3%A7%C3%A3o%20da%20minha%20marca%20com%20produ%C3%A7%C3%B5es%20de%20excel%C3%AAncia."
                target="_blank"
                className="tracking-wide">
                +55 (21) 98096-3359
              </a>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <p className="text-sm text-gray-500 tracking-wide">
              Atendemos propriedades de luxo por todos os lugares do mundo.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-4 h-4 bg-black/5 rounded-full"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -3, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-32 left-16 w-6 h-6 bg-black/3 rounded-full"
      />
    </section>
  );
}