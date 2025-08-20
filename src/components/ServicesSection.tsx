import { Heart, Stethoscope, UtensilsCrossed, Brain, Dumbbell, Users, Shirt, Cross } from "lucide-react";
export const ServicesSection = () => {
  const serviceCategories = [{
    category: "Médico & Terapia",
    color: "from-primary to-accent",
    services: [{
      icon: Stethoscope,
      title: "Cuidados Médicos",
      description: "Acompanhamento médico contínuo com especialistas em geriatria"
    }, {
      icon: Brain,
      title: "Gerontologia",
      description: "Equipe especializada em cuidado integral de idosos"
    }]
  }, {
    category: "Nutrição & Bem-estar",
    color: "from-primary to-accent",
    services: [{
      icon: UtensilsCrossed,
      title: "Nutrição Especializada",
      description: "Planos alimentares supervisionados por nutricionistas"
    }, {
      icon: Heart,
      title: "Apoio Psicológico",
      description: "Suporte emocional contínuo para bem-estar mental"
    }]
  }, {
    category: "Lazer & Cultura",
    color: "from-primary to-accent",
    services: [{
      icon: Dumbbell,
      title: "Atividade Física",
      description: "Exercícios adaptados promovendo mobilidade e força"
    }, {
      icon: Brain,
      title: "Estimulação Cognitiva",
      description: "Atividades para manter funções cognitivas ativas"
    }]
  }, {
    category: "Apoio Diário",
    color: "from-primary to-accent",
    services: [{
      icon: Cross,
      title: "Cuidado Espiritual",
      description: "Apoio espiritual respeitando crenças individuais"
    }, {
      icon: Shirt,
      title: "Serviços de Apoio",
      description: "Lavanderia e cuidado com pertences pessoais"
    }]
  }];
  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-500 text-white group-hover:bg-blue-600",
      purple: "bg-purple-500 text-white group-hover:bg-purple-600",
      green: "bg-green-500 text-white group-hover:bg-green-600",
      red: "bg-red-500 text-white group-hover:bg-red-600",
      orange: "bg-orange-500 text-white group-hover:bg-orange-600",
      indigo: "bg-indigo-500 text-white group-hover:bg-indigo-600",
      yellow: "bg-yellow-500 text-white group-hover:bg-yellow-600",
      teal: "bg-teal-500 text-white group-hover:bg-teal-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };
  return <section className="py-20 section-primary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-950">Nossos Cuidados</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Uma suíte completa para bem-estar físico, mental e social.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, categoryIndex) => <div key={categoryIndex} className="space-y-6">
                <div className={`bg-gradient-to-r ${category.color} p-6 rounded-lg text-white text-center`}>
                  <h3 className="text-xl font-bold mb-2 text-slate-950">{category.category}</h3>
                </div>
                {category.services.map((service, serviceIndex) => <div key={serviceIndex} className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-6 hover:-translate-y-1 cursor-pointer">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                      {service.title}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>)}
              </div>)}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <div className="text-center">
              <h3 className="font-semibold mb-4 text-slate-950 text-3xl">Cuidado Personalizado</h3>
              <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Cada residente recebe um plano de cuidados sob medida, co-criado com a família e nossa equipe multidisciplinar.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="bg-accent-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Equipe Multidisciplinar</h4>
                <p className="text-sm text-gray-600">Médicos, enfermeiros, fisioterapeutas, psicólogos e cuidadores especializados</p>
              </div>
              
              <div className="text-center">
                <div className="bg-accent-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Cuidado 24h</h4>
                <p className="text-sm text-gray-600">Monitoramento e assistência disponível 24 horas por dia, 7 dias por semana</p>
              </div>
              
              <div className="text-center">
                <div className="bg-accent-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Stethoscope className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Avaliação Contínua</h4>
                <p className="text-sm text-gray-600">Acompanhamento regular do estado de saúde e ajustes no plano de cuidados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};