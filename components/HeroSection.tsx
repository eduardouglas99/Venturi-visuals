import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758448756350-3d0eec02ba37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3NTg1OTk1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury penthouse interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl text-white mb-6 tracking-wide">
          Portfólio Cinematográfico<br />de Alto Padrão
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Produções visuais que transformam imóveis e marcas de luxo<br />
          em experiências únicas.
        </p>
      </div>
    </section>
  );
}