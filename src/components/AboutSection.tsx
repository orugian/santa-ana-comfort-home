import { Award, Clock, MapPin } from "lucide-react";
export const AboutSection = () => {
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-950">Nossa Essência</h2>
          </div>

          {/* Mission, Vision, Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-accent-light p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">Missão</h3>
              <p className="text-foreground/80 leading-relaxed">Proporcionar cuidado integral aos idosos, unindo amor, segurança e excelência técnica, em um ambiente acolhedor e humanizado. Nossa missão é garantir qualidade de vida aos residentes, tranquilidade às famílias e engajamento da equipe, transformando o ato de cuidar em um gesto de amor diário.   </p>
            </div>

            <div className="bg-accent-light p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">Visão</h3>
              <p className="text-foreground/80 leading-relaxed text-left">Ser reconhecido como uma instituição em São Paulo e no Brasil no cuidado humanizado ao idoso, evidenciando que é possivel oferecer atendimento técnico de alto nível em um ambiente familiar, onde cada idoso se sente valorizado, amado e respeitado.</p>
            </div>

            <div className="bg-accent-light p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">Valores</h3>
              <ul className="text-foreground/80 space-y-2">
                <li>• Amor e cuidado: cada gesto e atendimento nasce do coração.</li>
                <li>• Respeito e dignidade: honramos a vida, a história e a individualidade de cada residente.</li>
                <li>• Excelência técnica: garantimos segurança e qualidade com equipe multiprofissional capacitada.</li>
                <li>• Excelência profissional</li>
                <li>• Família: acolhemos e apoiamos familiares, oferecendo serenidade e confiança</li>
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
    </section>;
};