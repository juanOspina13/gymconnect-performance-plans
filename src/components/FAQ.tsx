const FAQ = () => {
  const faqs = [
    {
      question: '¿Realmente puedo recuperar el 100% de mi inversión?',
      answer:
        'Sí. Al inscribirte, definimos juntos hitos específicos y medibles adaptados a tu situación. Si los cumples en el tiempo acordado, recibes el reembolso completo. Es nuestra forma de apostar por tu compromiso.',
    },
    {
      question: '¿Qué pasa si no cumplo los hitos?',
      answer:
        'No hay penalización. Sigues recibiendo todo el valor del programa: coaching, entrenamientos, nutrición y acompañamiento. Los hitos son un incentivo adicional, no una obligación estresante.',
    },
    {
      question: '¿Puedo cambiar de Definitive Transformation a Mental Edge?',
      answer:
        'Absolutamente. De hecho, es la progresión natural. Muchos usuarios comienzan con Definitive Transformation para construir bases sólidas, y luego evolucionan a Mental Edge cuando están listos para más.',
    },
    {
      question: '¿Los entrenamientos son presenciales o virtuales?',
      answer:
        'Ambos planes incluyen acceso a gimnasios y estudios boutique aliados, pero también rutinas que puedes hacer donde quieras. El coaching es principalmente virtual para tu comodidad, con eventos presenciales exclusivos en Mental Edge.',
    },
    {
      question: '¿Hay contrato de permanencia?',
      answer:
        'No. Puedes pausar o cancelar cuando quieras. Confiamos en que el valor que entregas habla por sí mismo. Queremos que te quedes porque quieres, no porque estás atrapado.',
    },
    {
      question: '¿Cómo sé cuál plan elegir?',
      answer:
        'Si estás iniciando, retomando, o buscas equilibrio sin presión extrema: Definitive Transformation. Si ya tienes bases, buscas ventaja competitiva y estás dispuesto a ir más profundo: Mental Edge. ¿Aún dudas? Agenda una llamada y te ayudamos a decidir.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
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
          <button className="bg-primary hover:bg-primary-hover text-black font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
            Agenda una Llamada
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
