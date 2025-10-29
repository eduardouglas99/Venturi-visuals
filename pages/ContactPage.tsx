"use client"

import { motion } from "framer-motion";
import { useState } from "react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      message: '',
      timeline: ''
    });

  };

  const contactInfo = [
    {
      title: "Telefone",
      value: "+55 (11) 9 9999-9999",
      icon: "📱"
    },
    {
      title: "Email",
      value: "contato@venturivisuals.com",
      icon: "✉️"
    },
    {
      title: "Endereço",
      value: "São Paulo, SP - Brasil",
      icon: "📍"
    },
    {
      title: "Horário",
      value: "Seg-Sex: 9h às 18h",
      icon: "⏰"
    }
  ];

  const projectTypes = [
    "Residencial de Luxo",
    "Comercial Premium",
    "Resort / Hospitalidade",
    "Desenvolvimento Imobiliário",
    "Marca / Corporativo",
    "Outro"
  ];

  const budgetRanges = [
    "R$ 5.000 - R$ 10.000",
    "R$ 10.000 - R$ 20.000",
    "R$ 20.000 - R$ 50.000",
    "R$ 50.000+"
  ];

  const offices = [
    {
      city: "São Paulo",
      address: "Av. Paulista, 1000 - Bela Vista",
      phone: "+55 (11) 9 9999-9999",
      image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&h=400&fit=crop"
    },
    {
      city: "Rio de Janeiro",
      address: "Ipanema, Zona Sul",
      phone: "+55 (21) 9 9999-9999",
      image: "https://images.unsplash.com/photo-1544984503-7ad532c2c816?w=600&h=400&fit=crop"
    },
    {
      city: "Miami",
      address: "Brickell Avenue, Downtown",
      phone: "+1 (305) 999-9999",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
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
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-8xl mb-8 tracking-tight">
                Vamos
                <br />
                <span className="text-gray-500">Conversar</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Pronto para transformar sua propriedade em uma experiência visual extraordinária? 
                Entre em contato e vamos criar algo memorável juntos.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <p className="text-gray-600 text-sm uppercase tracking-wider">{info.title}</p>
                      <p className="text-lg">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-gray-50 rounded-3xl p-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl mb-8">Solicitar Orçamento</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Nome Completo</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">Telefone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Tipo de Projeto</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10"
                      required
                    >
                      <option value="">Selecionar</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Orçamento</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10"
                    >
                      <option value="">Selecionar</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">Timeline Desejado</label>
                  <input
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    placeholder="Ex: Próximas 2 semanas"
                    className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">Detalhes do Projeto</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Conte-nos mais sobre sua propriedade e objetivos..."
                    className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 resize-none"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviar Solicitação
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Offices Section */}
      <motion.section 
        className="px-6 mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl mb-6">Nossos Escritórios</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Presença global para atender projetos em qualquer localização.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <img
                    src={office.image}
                    alt={office.city}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl mb-2">{office.city}</h3>
                <p className="text-gray-600 mb-2">{office.address}</p>
                <p className="text-gray-800">{office.phone}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="px-6 mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h2 className="text-4xl md:text-6xl mb-6">Perguntas Frequentes</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Qual é o prazo típico para entrega de um projeto?",
                answer: "Dependendo da complexidade, nossos projetos são entregues entre 5 a 14 dias úteis após a finalização da produção."
              },
              {
                question: "Vocês trabalham em outras cidades além de São Paulo?",
                answer: "Sim! Temos escritórios em São Paulo, Rio de Janeiro e Miami, e atendemos projetos em todo o Brasil e Estados Unidos."
              },
              {
                question: "É possível acompanhar a produção remotamente?",
                answer: "Absolutamente. Enviamos updates regulares, preview das filmagens e mantemos comunicação constante durante todo o processo."
              },
              {
                question: "Qual equipamento utilizam nas produções?",
                answer: "Utilizamos equipamentos cinema de última geração: câmeras 8K, lentes prime profissionais, drones certificados e sistemas de estabilização avançados."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
              >
                <h3 className="text-xl mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Emergency Contact */}
      <motion.section 
        className="px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-black text-white rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl mb-6">Projeto Urgente?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Para projetos com timeline apertado, entre em contato direto conosco. 
              Temos soluções express disponíveis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+5511999999999"
                className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-colors duration-300 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ligar Agora
              </motion.a>
              <motion.a
                href="https://wa.me/5511999999999"
                className="px-8 py-4 border border-white/30 rounded-full hover:border-white/50 transition-colors duration-300 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}