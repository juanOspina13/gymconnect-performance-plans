const FAQ = () => {
  const faqs = [
    {
      question: '¿Realmente puedo recuperar el 100% de mi inversión?',
      answer:
        'Sí. Al inscribirte, definimos juntos hitos específicos y medibles adaptados a tu situación. Si los cumples en los 30 días, te reembolsamos el 100% dividido en 5 descuentos mensuales del 20% sobre tu siguiente ciclo. Es nuestra forma de apostar por tu compromiso.',
    },
    {
      question: '¿Qué pasa si no cumplo los hitos?',
      answer:
        'No hay penalización. Sigues disfrutando de todo el programa: Quema Calorías Express (GRATIS), Sistema Antiabandono ($130.000), Flexibilidad ($50.000) y acompañamiento. Los hitos son un incentivo para premiarte por tu constancia, no una obligación.',
    },
    {
      question: '¿Qué resultados puedo esperar en 30 días?',
      answer:
        'Dependiendo de tu punto de partida, puedes esperar pérdida de peso visible, mejora en energía y sueño, y hábitos sólidos de entrenamiento y nutrición. Tu accountability manager te ayudará a establecer metas realistas para tu caso particular.',
    },
    {
      question: '¿Los entrenamientos son presenciales o virtuales?',
      answer:
        'El programa incluye rutinas que puedes hacer en gimnasio, casa o donde prefieras. El acompañamiento es virtual para tu comodidad, adaptándose a tu agenda y espacios disponibles.',
    },
    {
      question: '¿Hay contrato de permanencia?',
      answer:
        'No. Puedes pausar o cancelar cuando quieras. Confiamos en que el valor que entregas habla por sí mismo. Queremos que te quedes porque quieres, no porque estás atrapado.',
    },
    {
      question: '¿Para quién es este programa de 30 días?',
      answer:
        'Para cualquier persona que quiera perder peso, mejorar su salud y construir hábitos sostenibles. Ya sea que estés iniciando, retomando o buscando un sistema que no te deje abandonar. ¿Aún dudas? Escríbenos y te ayudamos a decidir.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-400">
            Todo lo que necesitas saber antes de comenzar
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-gray-800 rounded-2xl border border-gray-700 hover:border-primary/30 transition-all overflow-hidden"
            >
              <summary className="cursor-pointer p-6 flex items-center justify-between font-semibold text-white text-lg list-none">
                <span className="flex-1 pr-4">{faq.question}</span>
                <span className="text-primary transition-transform group-open:rotate-180">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">¿Tienes otra pregunta?</p>
            <a 
            href="https://wa.me/573169847703?text=hola!%20me%20gustaría%20saber%20más%20del%20programa%20de%2030%20días" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-hover text-black font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
            Escríbenos por WhatsApp
            </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
