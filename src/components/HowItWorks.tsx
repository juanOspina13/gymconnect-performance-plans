const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Cumple tus hitos y{' '}
            <span className="text-primary">te devolvemos todo</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Si cumples con los objetivos que definimos juntos, te reembolsamos el 100% de tu inversión. Así de simple.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-primary/30 transition-all">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-3">
              1. Cumple estos requisitos
            </h3>
            <ul className="text-gray-400 text-sm space-y-2 mb-3">
              <li>✓ Asistir al 85% de las clases sugeridas</li>
              <li>✓ Realizar 4 check-ins semanales al mes</li>
              <li>✓ Medición corporal inicial y final</li>
              <li>✓ Fotos de antes y después</li>
              <li>✓ Autorizar el uso de tu progreso para testimonios</li>
            </ul>
            <p className="text-gray-400">
              Junto con tu coach, establecemos objetivos realistas y medibles específicos para ti 
              (peso, fuerza, hábitos, consistencia).
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-primary/30 transition-all">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-white mb-3">
              2. Trackea tu progreso
            </h3>
            <p className="text-gray-400">
              Seguimos tu avance semanal y mensual. Cada logro te acerca a tu objetivo 
              y a recuperar tu inversión.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-primary/30 transition-all">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-white mb-3">
              3. Recibe tu reembolso
            </h3>
            <p className="text-gray-400">
              Al cumplir tus hitos, te devolvemos el 100% de tu inversión dividido en 5 descuentos mensuales del 20% cada uno sobre tu siguiente ciclo. Tu esfuerzo se convierte en tu recompensa.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">
                No es magia, es compromiso inteligente
              </h3>
              <p className="text-gray-300">
                Apostamos por tu éxito. Si te comprometes de verdad, nosotros también. 
                Simple, justo, poderoso.
              </p>
            </div>
            <div className="text-6xl">🤝</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
