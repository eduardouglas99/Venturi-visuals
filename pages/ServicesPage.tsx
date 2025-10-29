"use client"

import { motion } from "framer-motion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function ServicesPage() {
  const mainServices = [
    {
      title: "Filmagem Cinematográfica",
      subtitle: "Hollywood-level production",
      description: "Produções cinematográficas em 4K e 8K que capturam a essência e o luxury lifestyle de cada propriedade através de técnicas avançadas de storytelling visual.",
      features: [
        "Filmagem em 4K/8K HDR",
        "Câmeras cinema profissionais",
        "Lentes prime de alta qualidade",
        "Estabilização avançada",
        "Color grading cinematográfico",
        "Trilha sonora original"
      ],
      price: "A partir de R$ 8.500",
      duration: "2-3 dias de produção",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop"
    },
    {
      title: "Fotografia Arquitetural",
      subtitle: "Architectural excellence",
      description: "Fotografias de alta resolução que destacam design, iluminação e atmosfera, criando um portfólio visual que valoriza cada detalhe arquitetônico.",
      features: [
        "Imagens em alta resolução",
        "HDR e exposure blending",
        "Correção de perspectiva",
        "Iluminação profissional",
        "Edição avançada",
        "Delivery em múltiplos formatos"
      ],
      price: "A partir de R$ 4.200",
      duration: "1 dia de produção",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
    },
    {
      title: "Tours Virtuais 360°",
      subtitle: "Immersive experiences",
      description: "Experiências imersivas que permitem explorar cada ambiente remotamente com qualidade fotorrealística e navegação intuitiva.",
      features: [
        "Captura em resolução 8K",
        "Navegação fluida e intuitiva",
        "Hotspots informativos",
        "Compatibilidade VR",
        "Integração web/mobile",
        "Analytics detalhados"
      ],
      price: "A partir de R$ 3.800",
      duration: "1-2 dias de captura",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
    },
    {
      title: "Filmagem Aérea",
      subtitle: "Elevated perspectives",
      description: "Perspectivas únicas através de drones profissionais certificados, revelando propriedades em seu contexto paisagístico completo.",
      features: [
        "Drones certificados ANAC",
        "Filmagem 4K estabilizada",
        "Múltiplas perspectivas aéreas",
        "Shots cinematográficos",
        "Seguros e licenças inclusos",
        "Edição e finalização"
      ],
      price: "A partir de R$ 2.800",
      duration: "Meio dia de filmagem",
      image: "https://images.unsplash.com/photo-1473445830658-2bb67d015c6b?w=800&h=600&fit=crop"
    }
  ];

  const addOnServices = [
    {
      title: "Direção de Arte",
      description: "Styling e preparação de ambientes para maximizar o apelo visual",
      price: "R$ 1.500/dia"
    },
    {
      title: "Edição Premium",
      description: "Pós-produção avançada com efeitos especiais e motion graphics",
      price: "R$ 2.200/projeto"
    },
    {
      title: "Trilha Sonora",
      description: "Composição musical original para vídeos de propriedades",
      price: "R$ 1.800/música"
    },
    {
      title: "Delivery Express",
      description: "Entrega em 48h com equipe dedicada",
      price: "R$ 800/projeto"
    }
  ];

  const packages = [
    {
      name: "Essential",
      description: "Perfeito para propriedades residenciais",
      price: "R$ 6.500",
      includes: [
        "Fotografia arquitetural (30 imagens)",
        "Tour virtual básico",
        "Edição profissional",
        "Entrega em 5 dias úteis"
      ],
      popular: false
    },
    {
      name: "Premium",
      description: "Ideal para imóveis de luxo",
      price: "R$ 12.800",
      includes: [
        "Filmagem cinematográfica (2 min)",
        "Fotografia premium (50 imagens)",
        "Tour virtual avançado",
        "Filmagem aérea",
        "Edição premium",
        "Entrega em 7 dias úteis"
      ],
      popular: true
    },
    {
      name: "Platinum",
      description: "Para projetos exclusivos e resorts",
      price: "R$ 22.500",
      includes: [
        "Produção cinematográfica completa",
        "Fotografia especializada (80 imagens)",
        "Tour virtual 8K",
        "Múltiplas perspectivas aéreas",
        "Direção de arte inclusa",
        "Trilha sonora original",
        "Delivery express"
      ],
      popular: false
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
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl mb-8 tracking-tight">
              Serviços
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Soluções completas em produção audiovisual para imóveis de luxo. 
              Cada serviço é projetado para maximizar o valor e o apelo visual da sua propriedade.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Services */}
      <motion.section 
        className="px-6 mb-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="space-y-6">
                    <div>
                      <p className="text-gray-500 uppercase tracking-wider text-sm mb-2">
                        {service.subtitle}
                      </p>
                      <h3 className="text-4xl md:text-5xl mb-4">{service.title}</h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-black rounded-full flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <div className="bg-gray-50 rounded-xl p-4 flex-1">
                        <p className="text-sm text-gray-600 mb-1">Investimento</p>
                        <p className="text-xl">{service.price}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 flex-1">
                        <p className="text-sm text-gray-600 mb-1">Duração</p>
                        <p className="text-xl">{service.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Add-on Services */}
      <motion.section 
        className="px-6 mb-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h2 className="text-4xl md:text-6xl mb-6">Serviços Complementares</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Eleve ainda mais sua produção com nossos serviços especializados.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {addOnServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl">{service.title}</h3>
                  <span className="text-lg">{service.price}</span>
                </div>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Package Section */}
      <motion.section 
        className="px-6 mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <h2 className="text-4xl md:text-6xl mb-6">Pacotes Completos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções integradas que combinam múltiplos serviços com economia e eficiência.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className={`relative rounded-3xl p-8 ${
                  pkg.popular 
                    ? 'bg-black text-white scale-105' 
                    : 'bg-gray-50'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.4 + index * 0.1 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-white text-black rounded-full text-sm">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl mb-2">{pkg.name}</h3>
                    <p className={`mb-4 ${pkg.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                      {pkg.description}
                    </p>
                    <div className="text-3xl mb-6">{pkg.price}</div>
                  </div>

                  <div className="space-y-3">
                    {pkg.includes.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          pkg.popular ? 'bg-white' : 'bg-black'
                        }`} />
                        <span className={pkg.popular ? 'text-gray-200' : 'text-gray-700'}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    className={`w-full py-3 rounded-xl transition-colors duration-300 ${
                      pkg.popular
                        ? 'bg-white text-black hover:bg-gray-100'
                        : 'bg-black text-white hover:bg-gray-800'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Escolher Pacote
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12">
            <h2 className="text-4xl md:text-6xl mb-6">Projeto Personalizado?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Cada propriedade é única. Vamos criar uma solução sob medida que capture 
              perfeitamente a essência do seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Orçamento
              </motion.button>
              <motion.button
                className="px-8 py-4 border border-gray-300 rounded-full hover:border-gray-400 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agendar Reunião
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}