"use client"

import { motion } from "framer-motion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
// import { unsplash_tool } from "unsplash";

export function PortfolioPage() {
  const portfolioItems = [
    {
      id: 1,
      title: "Villa Sunset",
      category: "Residencial de Luxo",
      description: "Propriedade única com vista panorâmica para o oceano, capturada em golden hour.",
      year: "2024",
      services: ["Filmagem Aérea", "Tour Virtual", "Fotografia"],
      featured: true
    },
    {
      id: 2,
      title: "Penthouse Metropolitan",
      category: "Comercial Premium",
      description: "Espaço corporativo sofisticado no coração da cidade.",
      year: "2024",
      services: ["Produção Cinematográfica", "Fotografia Arquitetural"]
    },
    {
      id: 3,
      title: "Resort Paradise",
      category: "Hospitalidade",
      description: "Complexo resort com foco na experiência imersiva.",
      year: "2023",
      services: ["Filmagem Aérea", "Produção de Conteúdo", "Direção de Arte"]
    },
    {
      id: 4,
      title: "Loft Industrial",
      category: "Residencial Moderno",
      description: "Transformação arquitetônica de espaço industrial em residência premium.",
      year: "2023",
      services: ["Tour Virtual", "Fotografia"]
    },
    {
      id: 5,
      title: "Marina Luxury",
      category: "Waterfront",
      description: "Propriedade exclusiva à beira-mar com pier privativo.",
      year: "2024",
      services: ["Filmagem Aérea", "Fotografia Especializada"]
    },
    {
      id: 6,
      title: "Corporate Plaza",
      category: "Comercial",
      description: "Edifício corporativo icônico com arquitetura contemporânea.",
      year: "2023",
      services: ["Produção Cinematográfica", "Fotografia Corporativa"]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <motion.section 
        className="px-6 mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl mb-6 tracking-tight">
              Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Uma coleção cuidadosamente curada de nossas produções mais impactantes, 
              criadas para marcas que valorizam a excelência visual.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Project */}
      <motion.section 
        className="px-6 mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-black rounded-3xl overflow-hidden relative h-[70vh]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&h=900&fit=crop"
              alt="Villa Sunset - Projeto em Destaque"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                  Projeto em Destaque
                </span>
                <span className="text-white/80">2024</span>
              </div>
              <h2 className="text-4xl md:text-6xl text-white mb-4">Villa Sunset</h2>
              <p className="text-white/90 text-lg max-w-2xl mb-6">
                Propriedade única com vista panorâmica para o oceano, capturada em golden hour 
                através de técnicas cinematográficas avançadas e direção de arte impecável.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Filmagem Aérea", "Tour Virtual", "Fotografia"].map((service) => (
                  <span key={service} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                    {service}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Portfolio Grid */}
      <motion.section 
        className="px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.slice(1).map((item, index) => (
              <motion.div
                key={item.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="bg-gray-50 rounded-2xl overflow-hidden mb-6 aspect-[4/3] relative">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-${
                      [
                        "1600596397947-af57df90b8ce", // Penthouse
                        "1571019613454-1cb2f99b2d8b", // Resort
                        "1600210492486-724fe5c67fb0", // Loft
                        "1600607687939-ce8a6c25118c", // Marina
                        "1600566753899-2693f4ead3ba"  // Corporate
                      ][index]
                    }?w=800&h=600&fit=crop`}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/20 backdrop-blur-sm rounded-full text-white text-sm">
                      {item.year}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl">{item.title}</h3>
                    <svg 
                      className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  
                  <p className="text-gray-600 text-sm uppercase tracking-wider">{item.category}</p>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.services.map((service) => (
                      <span key={service} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="px-6 mt-32"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl mb-6">
            Pronto para elevar seu projeto?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Cada propriedade tem sua história única. Vamos criá-la juntos através de uma produção 
            cinematográfica que valoriza cada detalhe.
          </p>
          <motion.button
            className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Iniciar Projeto
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}