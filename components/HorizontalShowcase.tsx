"use client"

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const showcaseItems = [
  {
    id: 1,
    category: "COMMERCIAL",
    title: "Trump Tower Residences",
    location: "New York, NY",
    year: "2024",
    description: "Luxury residential showcase featuring panoramic city views and world-class amenities.",
    image: "https://images.unsplash.com/photo-1568115286680-d203e08a8be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NTg1OTk3MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    category: "RESIDENTIAL",
    title: "Beverly Hills Estate",
    location: "Los Angeles, CA",
    year: "2024",
    description: "Contemporary architectural masterpiece with infinity pool and panoramic views.",
    image: "https://images.unsplash.com/photo-1757924330358-a48d65664dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mdG9wJTIwaW5maW5pdHklMjBwb29sJTIwbHV4dXJ5fGVufDF8fHx8MTc1ODU5OTczM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    category: "INTERIOR",
    title: "Marble Sanctuary",
    location: "Miami, FL",
    year: "2023",
    description: "Minimalist interior design featuring premium marble finishes and natural lighting.",
    image: "https://images.unsplash.com/photo-1758384077439-8282cc397b34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMG1hcmJsZSUyMGRldGFpbHN8ZW58MXx8fHwxNzU4NTk5NzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    category: "WELLNESS",
    title: "Private Spa Retreat",
    location: "Aspen, CO",
    year: "2023",
    description: "Luxury spa experience with premium amenities and mountain views.",
    image: "https://images.unsplash.com/photo-1753605788101-04d1e653e74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMHNwYSUyMGRlc2lnbnxlbnwxfHx8fDE3NTg1OTk3MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function HorizontalShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section className="bg-white overflow-hidden">
      <div className="h-[50vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-7xl text-black font-light tracking-tight mb-4">
            TRABALHOS RECENTES
          </h2>
          <p className="text-lg text-gray-600 tracking-wide">
            Cinematografia imobiliária de alta qualidade que define novos padrões.
          </p>
        </motion.div>
      </div>

      <div ref={containerRef} className="h-[100vh] flex items-center">
        <motion.div
          style={{ x }}
          className="flex space-x-8 pl-8"
        >
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative w-[80vw] md:w-[60vw] lg:w-[50vw] h-[70vh] bg-black overflow-hidden cursor-pointer"
              data-cursor="hover"
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute top-8 left-8">
                <span className="text-white/60 text-xs tracking-[0.3em] uppercase">
                  {item.category}
                </span>
              </div>

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-3xl font-light tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-white/70 text-sm mb-4">
                    <span>{item.location}</span>
                    <span>·</span>
                    <span>{item.year}</span>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </motion.div>
              </div>

              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-12 h-12 border border-white/50 rounded-full flex items-center justify-center">
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    className="text-white text-xl"
                  >
                    ↗
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}