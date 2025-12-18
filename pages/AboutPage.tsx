"use client"

import { motion } from "framer-motion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import Counter from "@/app/utils/AnimatedCounter";

export default function AboutPage() {
  const stats = [
    { number: "150", label: "Projetos Entregues", suffix: "+" },
    { number: "30", label: "Clientes Premium", suffix: "+" },
    { number: "5", label: "Países Alcançados", suffix: "+" },
    { number: "7", label: "Anos de Experiência" }
  ];

  const services = [
    {
      title: "Filmagem Cinematográfica",
      description: "Produções em 4K e 8K com equipamentos profissionais, capturando cada ambiente com técnicas cinematográficas de Hollywood.",
      features: ["Câmeras Cinema", "Lentes Premium", "Estabilização Profissional", "Grading Avançado"]
    },
    {
      title: "Fotografia Arquitetural",
      description: "Imagens de alta resolução que destacam design, lighting e atmosfera, criando um portfólio visual impactante.",
      features: ["HDR Professional", "Perspectiva Corrigida", "Iluminação Especializada", "Pós-produção Premium"]
    },
    {
      title: "Treinamento Cinematográfica",
      description: "Transformamos conteúdos técnicos em vídeos dinâmicos e didáticos, alinhados à identidade da sua marca. Produzimos materiais para treinamentos, integração de equipes, segurança do trabalho e desenvolvimento profissional.",
      features: ["Treinamentos comercias", "Treinamentos de criativos", "Captações manuais"]
    },
    {
      title: "Filmagem Aérea",
      description: "Perspectivas únicas através de drones profissionais, revelando propriedades em seu contexto completo.",
      features: ["Drones Certificados", "Filmagem 4K", "Estabilização Gimbal", "Licenças ANAC"]
    }
  ];

  const team = [
    {
      name: "Lucas Cardoso",
      role: "Diretor Criativo & Fundador",
      description: "7 anos de experiência em produção audiovisual premium, especializado em imóveis de luxo.",
      image: "/sobre-nos/foto-fundador.png"
    },
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-8xl mb-8 tracking-tight">
                Sobre
                <br />
                <span className="text-gray-500">Nós</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                A Venturi Visuals é uma empresa especializada em transformar marcas em experiências visuais de alto impacto.
                Há mais de cinco anos no mercado, unimos estética cinematográfica, estratégia e performance para elevar o valor percebido de cada cliente e posicionar marcas com autoridade.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="aspect-square rounded-3xl overflow-hidden">
                <ImageWithFallback
                  src="/sobre-nos/interlagos.jpg"
                  alt="Venturi Visuals Studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-black text-white p-6 rounded-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-2xl mb-1">7+</p>
                <p className="text-sm text-gray-300">Anos de Excelência</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="px-6 mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className="mb-3"><Counter to={+stat.number} classname="text-4xl md:text-6xl mb-3" suffix={stat?.suffix}/></div>
                <div className="text-gray-600 uppercase tracking-wider text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="px-6 mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="text-4xl md:text-6xl mb-6">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções completas para capturar e apresentar propriedades com o mais alto padrão de qualidade.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-gray-50 rounded-3xl p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-black rounded-full" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="px-6 mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <h2 className="text-4xl md:text-6xl mb-6">Nossa Equipe</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profissionais especializados que compartilham a paixão pela excelência visual.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
              >
                <div className="aspect-square rounded-3xl overflow-hidden mb-6 mx-auto max-w-sm">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl mb-2">{member.name}</h3>
                <p className="text-gray-600 uppercase tracking-wider text-sm mb-4">{member.role}</p>
                <p className="text-gray-700 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section 
        className="px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.6 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-black text-white rounded-3xl p-12">
            <h2 className="text-4xl md:text-6xl mb-6">Nossa Missão</h2>
            <p className="text-xl leading-relaxed">
              Transformar cada propriedade em uma experiência visual inesquecível, 
              combinando técnica cinematográfica de ponta com storytelling autêntico. 
              Acreditamos que cada espaço tem uma história única para contar.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}