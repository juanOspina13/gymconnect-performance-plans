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
             Deja de empezar y abandonar
            <br />
          
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Conviértete en la persona que entrena incluso cuando no tiene ganas en 30 días. Este es un programa integral con acompañamiento, rutinas efectivas y un sistema que te mantiene motivado hasta el final.
          </p>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Incluye premios y recompensas por tu disciplina, coach humano + clon AI 24/7 y una comunidad que te impulsa.
          </p>

          {/* Included packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {/* Package 1 - Coach humano + AI */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-left hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🗓️</span>
                <h3 className="text-lg font-bold text-white">Coach humano + clon AI 24/7</h3>
              </div>
                <p className="text-gray-400 text-sm mb-3">
                  Acompañamiento semanal con tu coach y soporte 24/7 con IA entrenada con su metodología. Incluye:
                </p>
                <ul className="text-gray-400 text-sm mb-3 list-disc pl-5">
                <li>Sesión semanal personalizada con tu coach humano</li>
                <li>Revisión de progreso y ajuste de plan</li>
                <li>Clon AI disponible 24/7 para dudas inmediatas</li>
                <li>Motivación y seguimiento continuo sin esperas</li>
              </ul>
            </div>

            {/* Package 2 - Premios y recompensas */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-left hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">💪</span>
                <h3 className="text-lg font-bold text-white">Premios y recompensas por tu disciplina</h3>
              </div>
                <p className="text-gray-400 text-sm mb-3">
                El sistema que hará que no abandones y ames entrenar. Incluye:
                </p>
                <ul className="text-gray-400 text-sm mb-3 list-disc pl-5">
                <li>Check-ins semanales los viernes</li>
                <li>Llamada de inicio y cierre con feedback de tu transformación</li>
                <li>Recompensas por cumplimiento</li>
                <li>¡No lo haces solo!</li>
                </ul>
              <p className="text-primary text-xs font-medium">Valor: $130.000 COP</p>
            </div>

            {/* Package 3 - Comunidad */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-left hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🌟</span>
                <h3 className="text-lg font-bold text-white">Beneficios de la comunidad</h3>
              </div>
                <p className="text-gray-400 text-sm mb-3">
                No entrenas solo. Obtén beneficios exclusivos por estar en la comunidad. Incluye:
                </p>
                <ul className="text-gray-400 text-sm mb-3 list-disc pl-5">
                <li>Comunidad privada con otros participantes</li>
                <li>Retos mensuales para mantenerte motivado</li>
                <li>Contenido exclusivo de entrenamiento y bienestar</li>
                <li>Apoyo y motivación entre compañeros</li>
              </ul>
            </div>
          </div>

          {/* Total value highlight */}
          <div className="bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 border border-primary/30 rounded-xl py-4 px-8 max-w-md mx-auto mb-8">
            <p className="text-gray-300 text-sm mb-1">Valor total de los paquetes: <span className="line-through">$180.000</span></p>
            <p className="text-white text-xl font-bold">
              Tu precio: <span className="text-primary">$66.000</span> COP
            </p>
            <p className="text-primary text-sm font-medium mt-1">¡Ahorras más del 63%!</p>
          </div>
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
              <a href="#plans">Quiero empezar </a>
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
