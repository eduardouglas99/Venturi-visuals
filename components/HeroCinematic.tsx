"use client"

import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroCinematic() {
  return (
    <section id="hero" className="relative h-screen overflow-hidden bg-black ">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1568115286680-d203e08a8be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NTg1OTk3MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury penthouse with city skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
      </motion.div>

      {/* Animated Brand Identity */}
      <div className="absolute top-8 left-8 z-30">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white"
        >
          <div className="text-2xl tracking-[0.3em] font-light">VENTURI</div>
          <div className="text-sm tracking-[0.5em] opacity-60 ml-8">VISUALS</div>
        </motion.div>
      </div>

      {/* Central Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="text-center max-w-6xl px-8">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl text-white font-light tracking-tight leading-[0.9] mb-6">
              CINEMATIC
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                LUXURY
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/80 font-light tracking-wide max-w-3xl mx-auto leading-relaxed"
          >
            Transformando imóveis de luxo em narrativas visuais que transcendem as fronteiras tradicionais do marketing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="mt-12"
          >
            <motion.button
              data-cursor="hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-4 bg-transparent border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-500 tracking-wider text-sm"
              onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">EXPLORE NOSSO PORTFÓLIO</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border border-white/40 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}