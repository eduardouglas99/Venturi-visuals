"use client"

import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { usePathname, useRouter } from 'next/navigation';

const portfolioItems = [
  {
    id: 1,
    title: "Condomínio Alphaville",
    subtitle: "Barra da Tijuca · Residencial em Condomínio Fechado",
    className: "col-span-2 row-span-2",
    image: "/portfolio/condominio-alphaville.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Santa Mônica Jardins",
    subtitle: "Barra da Tijuca · R$22M",
    className: "col-span-1 row-span-1",
    image: "/portfolio/santa-monica-jardins.jpg"
  },
  {
    id: 3,
    title: "Joá",
    subtitle: "Rio de Janeiro · R$75M",
    className: "col-span-1 row-span-1",
    image: "/portfolio/joa.jpg"
  },
  {
    id: 4,
    title: "Alphaville",
    subtitle: "Residencial Contemporâneo",
    className: "col-span-1 row-span-2",
    image: "/portfolio/alphaville.jpg"
  },
  {
    id: 5,
    title: "Condomínio Del Lago",
    subtitle: "Barra da Tijuca · Residência Waterfront",
    className: "col-span-2 row-span-1",
    image: "/portfolio/del-lago.jpg"
  }
];

export function BentoPortfolio() {
  const router = useRouter();

  return (
    <section id="works" className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl text-white font-light tracking-tight mb-4">
            PORTFÓLIO
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-white to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 h-[800px]">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative ${item.className} overflow-hidden rounded-2xl bg-black cursor-pointer`}
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 p-6 text-white z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className={`${item.featured ? 'text-2xl' : 'text-xl'} font-light tracking-wide mb-2`}>
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm tracking-wider uppercase">
                  {item.subtitle}
                </p>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                <div className="w-8 h-8 border border-white/50 rounded-full flex items-center justify-center">
                  <motion.div whileHover={{ rotate: 45 }} className="text-white text-lg">
                    ↗
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            data-cursor="hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/portfolio")}
            className="group relative px-8 py-3 bg-transparent border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-500 tracking-wider text-sm"
          >
            <span className="relative z-10">VER TODOS OS PROJETOS</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}