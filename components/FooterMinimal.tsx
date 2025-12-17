"use client"

import { motion } from 'framer-motion';

export function FooterMinimal() {
  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/venturi_visuals/', icon: 'IG' },
    // { name: 'Facebook', url: '#', icon: 'FB' },
    // { name: 'Youtube', url: '#', icon: 'YT' },
    // { name: 'Linkedin', url: '#', icon: 'IN' }
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl tracking-[0.3em] font-light mb-4">
              VENTURI
            </div>
            <div className="text-sm tracking-[0.5em] opacity-60 ml-8 mb-8">
              VISUALS
            </div>
            <p className="text-white/60 leading-relaxed text-sm">
              Excelência cinematográfica no marketing imobiliário de luxo.
              Criando narrativas visuais que transcendem expectativas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white/80 tracking-wider uppercase text-sm mb-6">
              Serviços
            </h3>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>
                <a href="/servicos" className="hover:text-white transition-colors duration-300" data-cursor="hover">
                  Produção de Fotos e Vídeos Profissionais
                </a>
              </li>
              <li>
                <a href="/servicos" className="hover:text-white transition-colors duration-300" data-cursor="hover">
                  Gestão de Mídias Sociais
                </a>
              </li>
              <li>
                <a href="/servicos" className="hover:text-white transition-colors duration-300" data-cursor="hover">
                  Tráfego Pago e Estratégia de Performance
                </a>
              </li>
              <li>
                <a href="/servicos" className="hover:text-white transition-colors duration-300" data-cursor="hover">
                  Branding e Posicionamento de Marca
                </a>
              </li>
              <li>
                <a href="/servicos" className="hover:text-white transition-colors duration-300" data-cursor="hover">
                  Consultoria de Comunicação Visual
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white/80 tracking-wider uppercase text-sm mb-6">
              Conectar
            </h3>
            <div className="space-y-4">
              <div className="text-white/60 text-sm">
              <a href="mailto:contato@venturivisuals.com.br">
                contato@venturivisuals.com.br
              </a>
              </div>
              <div className="text-white/60 text-sm">
              <a      
                href="https://wa.me/5521980963359?text=Ol%C3%A1%20Venturi%20Visuals!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20grava%C3%A7%C3%B5es%20de%20alto%20padr%C3%A3o.%0ATenho%20interesse%20em%20elevar%20a%20comunica%C3%A7%C3%A3o%20da%20minha%20marca%20com%20produ%C3%A7%C3%B5es%20de%20excel%C3%AAncia."
                target="_blank">
                +55 (21) 98096-3359
              </a>
              </div>
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                  target='_blank'
                    key={social.name}
                    href={social.url}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center text-xs tracking-wider hover:bg-white hover:text-black transition-all duration-300"
                    data-cursor="hover"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-white/40 text-xs tracking-wider mb-4 md:mb-0">
            © { new Date().getFullYear() } VENTURI VISUALS. TODOS OS DIREITOS RESERVADOS. <br />
            Desenvolvido por <a rel="stylesheet" className="hover:text-white/70 transition-colors duration-300" target='_blank' href="https://www.linkedin.com/in/eduardo-douglas/" >eduardouglas99</a> | <a rel="stylesheet" className="hover:text-white/70 transition-colors duration-300" target='_blank' href="https://www.linkedin.com/in/cesarmousinho26/" >cesarmousinho26</a>
          </div>
          <div className="flex space-x-8 text-white/40 text-xs tracking-wider">
            <a href="/politica-de-privacidade" className="hover:text-white/70 transition-colors duration-300" data-cursor="hover">
              POLÍTICA DE PRIVACIDADE
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}