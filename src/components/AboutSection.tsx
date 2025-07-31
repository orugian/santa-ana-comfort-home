
import { Award, Clock, MapPin } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa Essência</h2>
          </div>

          {/* Mission, Vision, Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Missão</h3>
              <p className="text-gray-700 leading-relaxed">
                Proporcionar cuidados especializados e carinhosos em cada etapa da vida, 
                garantindo dignidade, segurança e bem-estar.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Visão</h3>
              <p className="text-gray-700 leading-relaxed">
                Ser referência em cuidados geriátricos na Zona Leste de São Paulo, 
                criando um lar onde residentes se sintam valorizados e parte da família Santa Ana.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-purple-800 mb-4">Valores</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Respeito à dignidade</li>
                <li>• Atenção personalizada</li>
                <li>• Ética e transparência</li>
                <li>• Excelência profissional</li>
                <li>• Ambiente acolhedor</li>
              </ul>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-[#FFB5A7] to-[#FF9F8F] p-8 rounded-lg text-white text-center shadow-sm">
              <Clock className="w-16 h-16 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-white/90 font-medium">Anos de Experiência</div>
            </div>

            <div className="bg-gradient-to-r from-[#A8E6CF] to-[#96D7B8] p-8 rounded-lg text-white text-center shadow-sm">
              <Award className="w-16 h-16 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-white/90 font-medium">Famílias Atendidas</div>
            </div>

            <div className="bg-gradient-to-r from-[#DDA0DD] to-[#D8BFD8] p-8 rounded-lg text-white text-center shadow-sm">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">Tatuapé</div>
              <div className="text-white/90 font-medium">Zona Leste - São Paulo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
