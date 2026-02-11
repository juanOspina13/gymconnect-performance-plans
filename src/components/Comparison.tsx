const Comparison = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            ¿Qué incluye el programa de 30 días?
          </h2>
          <p className="text-xl text-gray-400">
            Todo lo que necesitas para perder peso, mejorar tu salud y construir hábitos duraderos
          </p>
        </div>

        <div className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-700">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-700 w-full min-h-[60vh]">
            {/* Definitive Transformation */}
            <div className="p-8 lg:p-10 h-full">
              <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                Programa deja de empezar y abandonar
                </h3>
                <p className="text-primary text-lg font-semibold mb-6">
                Pierde peso, mejora tu salud y hábitos con todo incluido
                </p>

              <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">🔥</span>
                <span className="text-gray-300">
                <strong className="text-white">Quema Calorías Express (GRATIS):</strong> Rutinas probadas para maximizar la quema calórica en cada sesión
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">💪</span>
                <span className="text-gray-300">
                <strong className="text-white">Sistema Antiabandono ($130.000):</strong> Check-ins semanales, llamadas de inicio y cierre, recompensas por cumplimiento. ¡No lo haces solo!
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">⚡</span>
                <span className="text-gray-300">
                <strong className="text-white">Flexibilidad Total ($50.000):</strong> Ajusta tus entrenos según tu fatiga o energía, al mismo costo por sesión
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
            {/* 
            <div className="p-8 lg:p-10 bg-gradient-to-br from-gray-900 to-black h-full">
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
            */}
            </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-400 italic">
            "En 30 días puedes cambiar tu cuerpo, tu salud y tus hábitos. Solo necesitas dar el primer paso."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
