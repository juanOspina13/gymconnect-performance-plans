import Hero from "./components/Hero";
import PlanCard from "./components/PlanCard";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  const innerTransformationFeatures = [
    {
      category: "🔥 Quema Calorías Express",
      title: "",
      items: [
        "Elegimos juntos las clases ideales para ti, enfocadas en quemar muchas calorías en poco tiempo",
        "Cada semana puedes incorporar una sesión especial que acelera tu pérdida de peso (se pagan adicional)",
        "Selección de ejercicios según tu preferencia",
        "Las sesiones en el espacio son adicionales",
      ],
    },
    {
      category: "💪 Sistema Antiabandono",
      title: "Valor: $180.000 COP",
      items: [
        "El sistema que hará que no abandones y ames entrenar",
        "Check-ins semanales los viernes",
        "Llamada de inicio y cierre con feedback de tu transformación",
        "Recompensas por cumplimiento",
        "¡No lo haces solo!",
      ],
    },
    {
      category: "⚡ Nos adaptamos a tu vida",
      title: "Valor: $80.000 COP",
      items: [
        "Tu día a día puede cambiar, y el sistema se adapta a tus horarios, niveles de energía y lugares de entrenamiento",
        "Sigue avanzando sin importar las circunstancias",
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
              Conviertete en la persona que entrena sin pensarlo 30 días
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Conviertete en la persona que entrena sin pensarlo 30 días. Rutinas efectivas, acompañamiento real y un sistema que no te deja abandonar.
            </p>
          </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <PlanCard
              emoji="🔥"
              title="Programa deja de empezar y abandonar"
              subtitle="Conviertete en la persona que entrena sin pensarlo 30 días"
              promise="30 días, resultados reales: transforma tu cuerpo, tu salud, tus hábitos y tu relación con el ejercicio. Con rutinas efectivas, recompensas y acompañamiento que no te deja abandonar."
              price={150000}
              originalPrice={340000}
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
            ¿Listo para tu reto de 30 días?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Escríbenos por WhatsApp y empieza a transformar tu peso, salud y hábitos hoy.
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
