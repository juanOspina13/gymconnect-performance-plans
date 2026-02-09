import { useState, type FC } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import UserCreateEdit from "./UserCreateEdit/UserCreateEdit";

interface Feature {
  category: string;
  title: string;
  items: string[];
}

interface PlanCardProps {
  emoji: string;
  title: string;
  subtitle: string;
  promise: string;
  price: number;
  points: number;
  originalPrice?: number;
  features: Feature[];
  idealFor: string[];
  isPremium?: boolean;
}

const PlanCard: FC<PlanCardProps> = ({
  emoji,
  title,
  subtitle,
  promise,
  price,
  originalPrice,
  features,
  idealFor,
  isPremium = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  /* const [formData, setFormData] = useState<FormData>({
    nombre: "",
    celular: "",
    email: "",
    password: "",
    trabajo: "",
    objetivo: "",
    descripcion: "",
  });
  /*
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  */
  /*
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { plan: title, ...formData });

    // TODO: Send data to your API
    // await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ plan: title, ...formData }) });

    // Reset form and close modal
    setFormData({
      nombre: "",
      celular: "",
      email: "",
      password: "",
      trabajo: "",
      objetivo: "",
      descripcion: "",
    });
    setIsModalOpen(false);
  };
  */
  return (
    <div
      className={`relative rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
        isPremium
          ? "bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-primary/30"
          : "bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
      }`}
    >
      {isPremium && (
        <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-4 py-2 rounded-bl-2xl">
          ULTRA EXCLUSIVO
        </div>
      )}

      {/* Location notice 
      <div className="absolute top-0 left-0 bg-gray-700 text-white text-xs font-medium px-3 py-1 rounded-br-xl">
        📍 Solo Pereira
      </div>
*/}
      <div className="p-8 lg:p-10">
        {/* Header */}
        <div className="mb-6">
          <div className="text-5xl mb-4">{emoji}</div>
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-400 text-lg">{subtitle}</p>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-3">
            <span className="text-5xl lg:text-6xl font-bold text-white">
              ${price.toLocaleString()}
            </span>
            <span className="text-gray-400 text-lg">/mes</span>
          </div>
          {originalPrice && (
            <div className="flex items-center gap-2 mt-2">
              <span className="text-gray-500 line-through text-xl">
                ${originalPrice.toLocaleString()}/mes
              </span>
              <span className="bg-green-500/20 text-green-400 text-sm font-semibold px-3 py-1 rounded-full">
                Ahorra ${(originalPrice - price).toLocaleString()}
              </span>
            </div>
          )}
          <p className="text-sm text-gray-500 mt-2">
            Suscripción mensual • Cancela cuando quieras
          </p>
        </div>

        {/* Promise */}
        <div className="mb-8 p-6 bg-black/40 rounded-2xl border border-primary/20">
          <p className="text-sm text-primary uppercase font-semibold mb-2">
            🎯 Promesa
          </p>
          <p className="text-white text-lg font-medium italic">"{promise}"</p>
        </div>

        {/* Features */}
        <div className="mb-8 space-y-6">
          <h4 className="text-xl font-bold text-white mb-4">¿Qué incluye?</h4>
          {features.map((feature, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <h5 className="text-lg font-semibold text-primary">
                  {feature.category}
                </h5>
              </div>
              {feature.title && (
                <p className="text-gray-300 text-sm ml-4">{feature.title}</p>
              )}
              <ul className="ml-4 space-y-2">
                {feature.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-gray-400 text-sm flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Fit Points Included 
        <div className="mb-8 p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🏋️</div>
            <div>
              <p className="text-white font-bold text-lg">
                {points} Puntos Fit incluidos
              </p>
              <p className="text-gray-400 text-sm">
                Accede a gimnasios, estudios y espacios fitness/wellness que
                apunten a cumplir tu objetivo
              </p>
            </div>
          </div>
        </div>
*/}
        {/* Ideal For */}
        <div className="mb-8">
          <h4 className="text-lg font-bold text-white mb-4">Ideal para:</h4>
          <ul className="space-y-2">
            {idealFor.map((item, index) => (
              <li
                key={index}
                className="text-gray-300 text-sm flex items-start gap-2"
              >
                <span className="text-primary">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Button
          onClick={() => setIsModalOpen(true)}
          className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
            isPremium
              ? "bg-primary text-black hover:bg-primary-hover shadow-lg shadow-primary/20"
              : "bg-primary text-black hover:bg-primary-hover"
          }`}
        >
          {"Solicitar suscripción"}
        </Button>

        {/* Subscription Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="bg-gray-900 border border-gray-700 text-white max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                Solicitar Suscripción
              </DialogTitle>
              {/*}
              <p className="text-sm text-yellow-400 mt-2">
                ⚠️ Tus datos serán evaluados y te contactaremos en un periodo
                máximo de 10 días. Si son aprobados, tu suscripción iniciará en
                ese mismo plazo.
              </p>*/}
              <DialogDescription className="text-gray-400">
                El proceso consta de dos pasos: primero ingresa tus datos
                personales y luego completa la solicitud de suscripción. Nuestro
                equipo revisará tu información y te contactará para finalizar el
                proceso.
              </DialogDescription>
            </DialogHeader>
            <UserCreateEdit
              onSuccess={() => {
                setIsModalOpen(false);
              }}
              planTitle={title}
            />
          </DialogContent>
        </Dialog>
        {/* Refund info */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            💎 100% reembolsable: cumple tus hitos y te devolvemos tu inversión en 5 cuotas mensuales
          </p>
          {/* Location notice 
          <p className="text-xs text-gray-500 mt-1">
            📍 Disponible únicamente en Pereira
          </p>
          */}
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
