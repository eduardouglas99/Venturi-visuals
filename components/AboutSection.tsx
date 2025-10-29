"use client"

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={containerRef} className="min-h-screen bg-black text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ y, opacity }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-white/60 text-sm tracking-[0.3em] uppercase">
                About Venturi Visuals
              </span>
              <h2 className="text-5xl md:text-6xl font-light tracking-tight mt-4 mb-8">
                REDEFINING
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                  LUXURY MARKETING
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-white/80 leading-relaxed"
            >
              <p>
                We are a boutique creative studio specializing in premium real estate cinematography. 
                Our approach combines architectural storytelling with cinematic excellence to create 
                visual narratives that transcend traditional property marketing.
              </p>
              <p>
                Each project is meticulously crafted to capture not just the physical space, but the 
                lifestyle and emotional connection that defines luxury living. We work exclusively with 
                high-end properties, ensuring every frame reflects the sophistication our clients expect.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8 pt-8"
            >
              <div>
                <div className="text-3xl font-light mb-2">150+</div>
                <div className="text-white/60 text-sm tracking-wider uppercase">Properties Filmed</div>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">$2.5B+</div>
                <div className="text-white/60 text-sm tracking-wider uppercase">Total Property Value</div>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">25+</div>
                <div className="text-white/60 text-sm tracking-wider uppercase">Award Recognitions</div>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">5★</div>
                <div className="text-white/60 text-sm tracking-wider uppercase">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 border border-white/20 rounded-full mb-8 mx-auto flex items-center justify-center"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-full"></div>
                  </motion.div>
                  <p className="text-white/60 text-sm tracking-wider uppercase">
                    Cinematic Excellence
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-white/10 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-6 w-6 h-6 bg-white/5 rounded-full"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}