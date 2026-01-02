import { FC } from 'react';

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
  features: Feature[];
  idealFor: string[];
  isPremium?: boolean;
}

const PlanCard: FC<PlanCardProps> = ({
  emoji,
  title,
  subtitle,
  promise,
  features,
  idealFor,
  isPremium = false,
}) => {
  return (
    <div
      className={`relative rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
        isPremium
          ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-primary/30'
          : 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700'
      }`}
    >
      {isPremium && (
        <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-4 py-2 rounded-bl-2xl">
          ULTRA EXCLUSIVO
        </div>
      )}

      <div className="p-8 lg:p-10">
        {/* Header */}
        <div className="mb-6">
          <div className="text-5xl mb-4">{emoji}</div>
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-400 text-lg">{subtitle}</p>
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
        <button
          className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
            isPremium
              ? 'bg-primary text-black hover:bg-primary-hover shadow-lg shadow-primary/20'
              : 'bg-primary text-black hover:bg-primary-hover'
          }`}
        >
          {isPremium ? 'Solicitar Acceso Exclusivo' : 'Comenzar Transformación'}
        </button>

        {/* Free milestone info */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            💎 Puede ser GRATIS al cumplir con tus hitos personalizados
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
