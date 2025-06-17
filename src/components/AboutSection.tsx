
import { Award, Clock, MapPin } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa História</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Há mais de uma década dedicando nossa vida ao cuidado de idosos com amor, 
              respeito e profissionalismo no coração de Tatuapé, São Paulo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Story Content */}
            <div className="space-y-6">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">Nossa Missão</h3>
                <p className="text-gray-700 leading-relaxed">
                  Proporcionar cuidados especializados e carinhosos para idosos, oferecendo um ambiente 
                  seguro, confortável e acolhedor que promova qualidade de vida, dignidade e bem-estar 
                  em cada etapa da vida.
                </p>
              </div>

              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Nossa Visão</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ser reconhecido como referência em cuidados geriátricos na Zona Leste de São Paulo, 
                  criando um lar onde cada residente se sinta valorizado, respeitado e amado como parte 
                  de nossa grande família.
                </p>
              </div>

              <div className="bg-purple-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-purple-800 mb-4">Nossos Valores</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Respeito à dignidade humana</li>
                  <li>• Cuidado personalizado e humanizado</li>
                  <li>• Transparência e ética profissional</li>
                  <li>• Compromisso com a excelência</li>
                  <li>• Ambiente familiar e acolhedor</li>
                </ul>
              </div>
            </div>

            {/* Statistics and Info */}
            <div className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white text-center">
                  <Clock className="w-12 h-12 mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-1">10+</div>
                  <div className="text-blue-100">Anos de Experiência</div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg text-white text-center">
                  <Award className="w-12 h-12 mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-1">100+</div>
                  <div className="text-green-100">Famílias Atendidas</div>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-lg text-white text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-3" />
                  <div className="text-lg font-bold mb-1">Tatuapé</div>
                  <div className="text-purple-100">Zona Leste - São Paulo</div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Por que escolher o Lar Santa Ana?</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Equipe multidisciplinar especializada em geriatria
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Instalações modernas e adaptadas para idosos
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Localização privilegiada em Tatuapé
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Acompanhamento médico e psicológico contínuo
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Atividades personalizadas e estimulação cognitiva
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
