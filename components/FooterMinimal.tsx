"use client"

import { motion } from 'framer-motion';

export function FooterMinimal() {
  const socialLinks = [
    { name: 'Instagram', url: '#', icon: 'IG' },
    { name: 'Vimeo', url: '#', icon: 'VM' },
    { name: 'LinkedIn', url: '#', icon: 'LI' }
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
              Cinematic excellence in luxury real estate marketing. 
              Creating visual narratives that transcend expectations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white/80 tracking-wider uppercase text-sm mb-6">
              Services
            </h3>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>
                <a href="/servicos" className="hover:text-white transition-colors duration-300" data-cursor="hover">
                  Property Cinematography
                </a>
              </li>
              <li>
                <a href="/servicos" className="hover:text-white transition-colors duration-300" data-cursor="hover">
                  Architectural Photography
                </a>
              </li>
              <li>
                <a href="/servicos" className="hover:text-white transition-colors duration-300" data-cursor="hover">
                  Brand Content Creation
                </a>
              </li>
              <li>
                <a href="/servicos" className="hover:text-white transition-colors duration-300" data-cursor="hover">
                  Virtual Tours
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
              Connect
            </h3>
            <div className="space-y-4">
              <div className="text-white/60 text-sm">
                hello@venturivisuals.com
              </div>
              <div className="text-white/60 text-sm">
                +1 (212) 555-1234
              </div>
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
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
            © { new Date().getFullYear() } VENTURI VISUALS. ALL RIGHTS RESERVED. <br />
            Powered by <a rel="stylesheet" target='_blank' href="https://www.linkedin.com/in/eduardo-douglas/" >eduardouglas99</a>
          </div>
          <div className="flex space-x-8 text-white/40 text-xs tracking-wider">
            <a href="#" className="hover:text-white/70 transition-colors duration-300" data-cursor="hover">
              PRIVACY POLICY
            </a>
            <a href="#" className="hover:text-white/70 transition-colors duration-300" data-cursor="hover">
              TERMS OF SERVICE
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}