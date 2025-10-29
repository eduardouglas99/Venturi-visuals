export function FeaturedVideo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/20 transition-colors cursor-pointer">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-white/80 text-lg">Clique para reproduzir</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-gray-600 text-lg">
            Produção para empreendimento de luxo no Rio de Janeiro.
          </p>
        </div>
      </div>
    </section>
  );
}