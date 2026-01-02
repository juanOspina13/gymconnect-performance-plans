const Comparison = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            ¿Cuál es para ti?
          </h2>
          <p className="text-xl text-gray-400">
            Una comparación directa para ayudarte a decidir
          </p>
        </div>

        <div className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-700">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-700">
            {/* Definitive Transformation */}
            <div className="p-8 lg:p-10">
              <div className="text-4xl mb-4">🧘‍♀️</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                DEFINITIVE TRANSFORMATION
              </h3>
              <p className="text-primary text-lg font-semibold mb-6">
                Tu puerta de entrada
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-gray-300">
                    Estructura flexible sin presión extrema
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-gray-300">
                    Coaching de hábitos + nutrición básica
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-gray-300">
                    Comunidad activa y retos suaves
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-gray-300">
                    Ideal para iniciar o retomar
                  </span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 uppercase mb-2">
                  Ideal para
                </p>
                <p className="text-white font-semibold">
                  Ejecutivos, emprendedores, personas con agenda ocupada
                </p>
              </div>
            </div>

            {/* Mental Edge */}
            <div className="p-8 lg:p-10 bg-gradient-to-br from-gray-900 to-black">
              <div className="text-4xl mb-4">🧠🔥</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                MENTAL EDGE
              </h3>
              <p className="text-primary text-lg font-semibold mb-6">
                Ventaja competitiva total
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-gray-300">
                    Alto rendimiento físico + mental
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-gray-300">
                    Coaching mental 1:1 quincenal
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                    <span className="text-gray-300">
                    Bio & lifestyle optimization
                    </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-gray-300">
                    Eventos exclusivos presenciales
                  </span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 uppercase mb-2">
                  Ideal para
                </p>
                <p className="text-white font-semibold">
                  Founders, C-level, atletas amateurs, high performers
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-400 italic">
            "No todos necesitan Mental Edge. Pero quienes lo hacen, lo saben."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
