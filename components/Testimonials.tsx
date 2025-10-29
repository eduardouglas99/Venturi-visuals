const testimonials = [
  {
    id: 1,
    quote: "A Venturi Visuals transformou completamente a percepção do nosso empreendimento. As produções são verdadeiras obras de arte.",
    name: "Marina Alves",
    role: "Diretora de Marketing, Grupo Patrimar"
  },
  {
    id: 2,
    quote: "Profissionalismo excepcional e resultados que superam qualquer expectativa. Nossos clientes ficam impressionados.",
    name: "Roberto Silva",
    role: "CEO, Luxury Properties"
  },
  {
    id: 3,
    quote: "A qualidade cinematográfica dos vídeos elevou nossa marca a um novo patamar. Parceria fundamental para nosso sucesso.",
    name: "Ana Beatriz",
    role: "Fundadora, Elite Incorporações"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-black mb-4 tracking-wide">
            Referências no Mercado
          </h2>
          <div className="w-24 h-0.5 bg-yellow-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-6">
                <svg className="w-8 h-8 text-yellow-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t pt-4">
                <p className="text-black">{testimonial.name}</p>
                <p className="text-gray-600 text-sm mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}