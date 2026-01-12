import { Button } from "./ui/button";

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
            Suscripción Fast Track
            <br />
            <span className="bg-gradient-to-r from-primary text-white via-primary-300 to-primary bg-clip-text text-transparent">
              Tu transformación guiada
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Acompañamiento virtual de un coach profesional en nutrición y entrenamiento.
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Incluye diagnóstico inicial, check-in semanal, feedback personalizado y seguimiento de tu progreso.
          </p>
          <p className="text-md text-primary font-medium mb-8 max-w-2xl mx-auto">
            Costo: <span className="font-bold">$400.000</span> COP
          </p>
          {/* Location notice x
          <p className="text-md text-primary font-medium mb-8 max-w-2xl mx-auto">
            📍 Disponible solo en Pereira
          </p>
          */}
          <div className="flex justify-center items-center">
            <Button
              asChild
              className="bg-primary hover:bg-primary-hover text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/20"
            >
              <a href="#plans">Ver Plan Fast Track</a>
            </Button>
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
