
import { Award, Clock, MapPin } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Nossa Essência</h2>
          </div>

          {/* Mission, Vision, Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-accent-light p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Missão</h3>
              <p className="text-foreground/80 leading-relaxed">
                Proporcionar cuidados especializados e carinhosos em cada etapa da vida, 
                garantindo dignidade, segurança e bem-estar.
              </p>
            </div>

            <div className="bg-accent-light p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Visão</h3>
              <p className="text-foreground/80 leading-relaxed">
                Ser referência em cuidados geriátricos na Zona Leste de São Paulo, 
                criando um lar onde residentes se sintam valorizados e parte da família Santa Ana.
              </p>
            </div>

            <div className="bg-accent-light p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Valores</h3>
              <ul className="text-foreground/80 space-y-2">
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
            <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-lg text-white text-center shadow-sm">
              <Clock className="w-16 h-16 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-white/90 font-medium">Anos de Experiência</div>
            </div>

            <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-lg text-white text-center shadow-sm">
              <Award className="w-16 h-16 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-white/90 font-medium">Famílias Atendidas</div>
            </div>

            <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-lg text-white text-center shadow-sm">
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
