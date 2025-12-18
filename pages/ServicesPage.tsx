"use client"

import { motion } from "framer-motion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function ServicesPage() {
  const mainServices = [
    {
      title: "Produção de Fotos e Vídeos Profissionais",
      subtitle: "Hollywood-level production",
      description: "Criamos imagens que não apenas mostram, mas transmitem valor, desejo e propósito. Da fotografia de alto padrão ao vídeo cinematográfico, cada produção é pensada para fortalecer o posicionamento visual da marca e gerar conexão imediata com o público.",
      features: [
        "Filmagem em 4K/8K HDR",
        "Câmeras cinema profissionais",
        "Lentes prime de alta qualidade",
        "Estabilização avançada",
        "Color grading cinematográfico",
        "Trilha sonora original"
      ],
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop"
    },
    {
      title: "Gestão de Mídias Sociais",
      subtitle: "Architectural excellence",
      description: "Assumimos o comando da presença digital dos nossos clientes com planejamento, curadoria visual e estratégia de conteúdo. Cada publicação é guiada por dados, estética e propósito, garantindo uma comunicação coerente e impactante em todas as plataformas.",
      features: [
        "Imagens em alta resolução",
        "HDR e exposure blending",
        "Correção de perspectiva",
        "Iluminação profissional",
        "Edição avançada",
        "Delivery em múltiplos formatos"
      ],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
    },
    {
      title: "Tráfego Pago e Estratégia de Performance",
      subtitle: "Immersive experiences",
      description: "Transformamos visibilidade em resultado. Utilizamos campanhas segmentadas e otimizadas para atrair o público certo, aumentar conversões e fortalecer o retorno sobre investimento, unindo criatividade e análise estratégica.",
      features: [
        "Captura em resolução 8K",
        "Navegação fluida e intuitiva",
        "Hotspots informativos",
        "Compatibilidade VR",
        "Integração web/mobile",
        "Analytics detalhados"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
    },
    {
      title: "Branding e Posicionamento de Marca",
      subtitle: "Elevated perspectives",
      description: "Desenvolvemos identidades visuais e narrativas sólidas, que expressam a essência e os diferenciais de cada marca. Nosso foco é construir posicionamentos premium que despertem reconhecimento, desejo e valor de mercado.",
      features: [
        "Drones certificados ANAC",
        "Filmagem 4K estabilizada",
        "Múltiplas perspectivas aéreas",
        "Shots cinematográficos",
        "Seguros e licenças inclusos",
        "Edição e finalização"
      ],
      image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=600&fit=crop"
    },
    {
      title: "Consultoria de Comunicação Visual",
      subtitle: "Elevated perspectives",
      description: "Ajudamos empresas a enxergar seu próprio potencial criativo e estratégico. Com uma visão 360° do audiovisual e do marketing digital, orientamos marcas a alinhar estética, mensagem e performance, criando uma presença marcante e coerente em todos os pontos de contato.",
      features: [
        "Drones certificados ANAC",
        "Filmagem 4K estabilizada",
        "Múltiplas perspectivas aéreas",
        "Shots cinematográficos",
        "Seguros e licenças inclusos",
        "Edição e finalização"
      ],
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop"
    }
  ];

  const addOnServices = [
    {
      title: "Edição para conteudos próprios",
      description: "Transforme suas gravações em produções com estética profissional. Cuidamos da montagem, cor e ritmo para valorizar sua identidade visual e entregar um resultado de alto impacto."
    },
    {
      title: "Mentoria de criação para corretores",
      description: "Auxílio criativo e técnico para quem deseja elevar a qualidade das próprias produções. Orientamos desde o planejamento até a pós-produção, com foco em vídeos envolventes e eficientes para o mercado imobiliário."
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
                  {/* <span className="text-lg">{service.price}</span> */}
                </div>
                <p className="text-gray-700">{service.description}</p>
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
              <motion.a
                href="https://api.whatsapp.com/send?phone=5521980963359&text=Ol%C3%A1%20*Venturi%20Visuals*!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20grava%C3%A7%C3%B5es%20de%20alto%20padr%C3%A3o.%20Tenho%20interesse%20em%20elevar%20a%20comunica%C3%A7%C3%A3o%20da%20minha%20marca%20com%20produ%C3%A7%C3%B5es%20de%20excel%C3%AAncia."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 inline-block text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Orçamento
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}