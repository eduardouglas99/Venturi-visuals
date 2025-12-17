"use client"

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={containerRef} className="min-h-screen bg-black text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ y, opacity }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-white/60 text-sm tracking-[0.3em] uppercase">
                Sobre a Venturi Visuals
              </span>
              <h2 className="text-5xl md:text-6xl font-light tracking-tight mt-4 mb-8">
                REDEFININDO
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                  O MARKETING DE LUXO
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-white/80 leading-relaxed"
            >
              <p>
                Somos um estúdio criativo especializado em cinematografia imobiliária de alto padrão.
                Nossa abordagem combina narrativa arquitetônica com excelência cinematográfica para criar histórias visuais que transcendem o marketing imobiliário tradicional.
              </p>
              <p>
                Cada projeto é meticulosamente elaborado para capturar não apenas o espaço físico, mas também o estilo de vida e a conexão emocional que definem a vida de luxo. Trabalhamos exclusivamente com imóveis de alto padrão, garantindo que cada fotograma reflita a sofisticação que nossos clientes esperam.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8 pt-8"
            >
              <div>
                <div className="text-3xl font-light mb-2">150+</div>
                <div className="text-white/60 text-sm tracking-wider uppercase">Propriedades Filmadas</div>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">100+</div>
                <div className="text-white/60 text-sm tracking-wider uppercase">Projetos Criativos</div>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">7+</div>
                <div className="text-white/60 text-sm tracking-wider uppercase">Anos de Atuação</div>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">5★</div>
                <div className="text-white/60 text-sm tracking-wider uppercase">Satisfação do Cliente</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 border border-white/20 rounded-full mb-8 mx-auto flex items-center justify-center"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-full"></div>
                  </motion.div>

                  <video
                    src="/videos/cutrim-maramar.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-white/10 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-6 w-6 h-6 bg-white/5 rounded-full"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}