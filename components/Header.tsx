export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl tracking-wide text-black">
          Venturi Visuals
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-black hover:text-yellow-600 transition-colors duration-300">
            Home
          </a>
          <a href="#portfolio" className="text-black hover:text-yellow-600 transition-colors duration-300">
            Portfólio
          </a>
          <a href="#services" className="text-black hover:text-yellow-600 transition-colors duration-300">
            Serviços
          </a>
          <a href="#contact" className="text-black hover:text-yellow-600 transition-colors duration-300">
            Contato
          </a>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-black">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}