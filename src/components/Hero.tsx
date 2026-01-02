const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fadeIn">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Tu Transformación
            <br />
            <span className="bg-gradient-to-r from-primary via-primary-300 to-primary bg-clip-text text-transparent">
              Empieza Ahora
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Dos caminos. Una misión: convertirte en tu mejor versión.
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Elige el plan que se adapta a tu momento de vida. Ambos con acompañamiento humano real, 
            y la posibilidad de ser <span className="text-primary font-semibold">100% GRATIS</span> al cumplir tus hitos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#plans"
              className="bg-primary hover:bg-primary-hover text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/20"
            >
              Ver Planes
            </a>
            <a
              href="#how-it-works"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Cómo Funciona
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
