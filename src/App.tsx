import Hero from "./components/Hero";
import PlanCard from "./components/PlanCard";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  const innerTransformationFeatures = [
    {
      category: "Fitness",
      title: "",
      items: [
        // "Acceso a entrenamientos (gimnasio, estudios boutique, clases funcionales)", // Eliminado
        "Entrenamiento personalizado: rutinas adaptadas a tus objetivos (pérdida de grasa, ganancia muscular, movilidad) y a tus espacios (gimnasio, casa, estudios boutique, clases funcionales)",
        "Sesión inicial virtual 1:1 con tu coach para diseñar y ajustar tu plan de entrenamiento",
        "Acompañamiento semanal: revisión de avances y ajustes con tu coach",
            ],
          },
          {
            category: "Nutrición",
            title: "",
            items: [
        "Sesión inicial virtual 1:1 con coach especializado en nutrición",
        "Plan nutricional flexible, enfocado en hábitos sostenibles (sin restricciones extremas)",
        "Ajuste mensual del plan según tus avances y necesidades",
            ],
          },
          {
            category: "Coaching",
            title: "",
            items: [
        "Seguimiento personalizado de tu progreso y adherencia al entrenamiento",
        "Feedback mensual sobre tu transformación y recomendaciones para potenciar resultados",
            ],
          },
    /*{
      category: "Experiencia",
      title: "",
      items: [
        "Comunidad privada (WhatsApp / Slack)",
        "Retos suaves mensuales (30 días de movimiento, hidratación, etc.)",
        "Contenido guiado: respiración, journaling, mindfulness",
      ],
    },
    */
  ];
  /*
  const mentalEdgeFeatures = [
    {
      category: "Fitness Performance",
      title: "",
      items: [
        // "Entrenamientos orientados a rendimiento (fuerza, HIIT, movilidad avanzada)", // Eliminado
        "Acceso prioritario a aliados top",
        "Programación según objetivos personales",
      ],
    },
    {
      category: "Nutrición de alto rendimiento",
      title: "",
      items: [
        "Evaluación profunda (energía, enfoque, recuperación)",
        "Estrategia nutricional para foco mental y rendimiento",
        "Suplementación sugerida (sin vender humo)",
      ],
    },
    {
      category: "Mental Coaching",
      title: "",
      items: [
        "Sesiones 1:1 quincenales con coach mental",
        "Trabajo en: Disciplina, Gestión del estrés, Enfoque y toma de decisiones",
        "Protocolos de mañana y noche",
      ],
    },
    {
      category: "Bio & Lifestyle Optimization",
      title: "",
      items: [
        "Optimización de sueño",
        "Técnicas de respiración y regulación emocional",
        "Rutinas antiestrés para ejecutivos",
      ],
    },
    {
      category: "Experiencia Ultra",
      title: "",
      items: [
        "Grupo muy reducido",
        "Eventos presenciales exclusivos (breathwork, ice bath, workshops)",
        "Atención prioritaria tipo concierge",
      ],
    },
  ];
  */
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />

      <section id="plans" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Impulsa tu transformación
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transforma tu cuerpo y tus hábitos con un plan flexible,
              acompañamiento real y resultados sostenibles, con la posibilidad
              de ser{" "}
              <span className="bg-primary text-black px-2 py-1 rounded font-extrabold text-lg inline-block shadow-md animate-pulse">
                100% GRATIS
              </span>
            </p>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
             Alcanza tus metas en menos tiempo, con un plan claro y acompañamiento experto. Deja de improvisar y obtén resultados reales.
          </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <PlanCard
              emoji="🔥"
              title="FAST TRACK"
              subtitle="Cuerpo + hábitos + bienestar integral"
              promise="Transforma tu cuerpo desde adentro hacia afuera, con acompañamiento real."
              price={200000}
              originalPrice={400000}
              features={innerTransformationFeatures}
              points={120}
              idealFor={[
                "Ejecutivos, emprendedores, personas con agenda ocupada",
                "Personas que ya entrenan pero no ven resultados sostenibles",
              ]}
            />
            {/*
            <PlanCard
              emoji="🧠🔥"
              title="MENTAL EDGE"
              subtitle="Alto rendimiento físico + mental"
              promise="Desarrolla un cuerpo fuerte y una mente imparable."
              price={597000}
              originalPrice={797000}
              points={165}
              features={mentalEdgeFeatures}
              idealFor={[
                "Founders, C-level, atletas amateurs, high performers",
                "Personas que pagan por ventaja, no por motivación",
                "Usuarios que ya probaron algo tipo Definitive Transformation",
              ]}
              isPremium
            />
            */}
          </div>
        </div>
      </section>

      <HowItWorks />
      {/*
      <Comparison />
      */}

      <section id="faq">
        <FAQ />
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Escríbenos por WhatsApp y descubre cuál plan es perfecto para ti.
          </p>
          <button className="bg-primary hover:bg-primary-hover text-black font-bold py-4 px-12 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/20">
            <a
              href="https://wa.me/573001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-primary-hover underline ml-1"
            >
              Contáctanos aquí
            </a>
          </button>
          <p className="text-sm text-gray-500 mt-6">
            Sin presión. Sin compromiso. Solo una conversación honesta.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
