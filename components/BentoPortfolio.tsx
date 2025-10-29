"use client"

import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';

const portfolioItems = [
  {
    id: 1,
    title: "Manhattan Penthouse",
    subtitle: "New York · $45M",
    image: "https://images.unsplash.com/photo-1634412114581-6376e49ef8e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBnbGFzcyUyMGJ1aWxkaW5nfGVufDF8fHx8MTc1ODU0ODk5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    className: "col-span-2 row-span-2",
    featured: true
  },
  {
    id: 2,
    title: "Marble Suite",
    subtitle: "Miami · Modern Luxury",
    image: "https://images.unsplash.com/photo-1758384077439-8282cc397b34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMG1hcmJsZSUyMGRldGFpbHN8ZW58MXx8fHwxNzU4NTk5NzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    className: "col-span-1 row-span-1"
  },
  {
    id: 3,
    title: "Infinity Pool",
    subtitle: "Los Angeles · $28M",
    image: "https://images.unsplash.com/photo-1757924330358-a48d65664dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mdG9wJTIwaW5maW5pdHklMjBwb29sJTIwbHV4dXJ5fGVufDF8fHx8MTc1ODU5OTczM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    className: "col-span-1 row-span-1"
  },
  {
    id: 4,
    title: "Spa Sanctuary",
    subtitle: "Beverly Hills · Private Resort",
    image: "https://images.unsplash.com/photo-1753605788101-04d1e653e74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMHNwYSUyMGRlc2lnbnxlbnwxfHx8fDE3NTg1OTk3MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    className: "col-span-1 row-span-2"
  },
  {
    id: 5,
    title: "Wine Cellar",
    subtitle: "Napa Valley · Collection",
    image: "https://images.unsplash.com/photo-1709747820764-ce13895aff05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3aW5lJTIwY2VsbGFyJTIwbHV4dXJ5fGVufDF8fHx8MTc1ODU5OTczM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    className: "col-span-2 row-span-1"
  }
];

export function BentoPortfolio() {
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
            PORTFOLIO
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
              className={`group relative ${item.className} overflow-hidden bg-gray-900 cursor-pointer`}
              data-cursor="hover"
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className={`${item.featured ? 'text-2xl' : 'text-xl'} font-light tracking-wide mb-2`}>
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm tracking-wider uppercase">
                    {item.subtitle}
                  </p>
                </motion.div>
              </div>

              {/* Hover Effect */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-8 h-8 border border-white/50 rounded-full flex items-center justify-center">
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    className="text-white text-lg"
                  >
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
            className="group relative px-8 py-3 bg-transparent border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-500 tracking-wider text-sm"
          >
            <span className="relative z-10">VIEW ALL PROJECTS</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}