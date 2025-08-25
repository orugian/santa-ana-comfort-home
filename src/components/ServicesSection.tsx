import { Heart, Stethoscope, UtensilsCrossed, Brain, Dumbbell, Users, Shirt, Cross } from "lucide-react";

export const ServicesSection = () => {
  const SERVICES = [
    {
      key: "medico-terapia",
      title: "Médico & Terapia",
      color: "from-primary to-accent",
      items: [
        {
          key: "cuidados-medicos",
          icon: Stethoscope,
          title: "Cuidados Médicos",
          description: "Acompanhamento médico com especialistas em geriatria"
        },
        {
          key: "fisioterapia-enfermagem-fonoterapia",
          icon: Brain,
          title: "Fisioterapia, Enfermagem e Fonoterapia",
          description: "Equipe especializada em cuidado integral de idosos"
        }
      ]
    },
    {
      key: "nutricao-bemestar",
      title: "Nutrição & Bem-estar",
      color: "from-primary to-accent",
      items: [
        {
          key: "nutricao-especializada",
          icon: UtensilsCrossed,
          title: "Nutrição Especializada",
          description: "Planos alimentares supervisionados por nutricionistas"
        },
        {
          key: "apoio-psicologico",
          icon: Heart,
          title: "Apoio Psicológico",
          description: "Suporte emocional para bem-estar mental"
        }
      ]
    },
    {
      key: "lazer-cultura",
      title: "Lazer & Cultura",
      color: "from-primary to-accent",
      items: [
        {
          key: "atividade-fisica",
          icon: Dumbbell,
          title: "Atividade Física",
          description: "Exercícios adaptados promovendo mobilidade e força"
        },
        {
          key: "estimulacao-cognitiva",
          icon: Brain,
          title: "Estimulação Cognitiva",
          description: "Atividades para manter funções cognitivas ativas"
        }
      ]
    },
    {
      key: "apoio-diario",
      title: "Apoio Diário",
      color: "from-primary to-accent",
      items: [
        {
          key: "cuidado-espiritual",
          icon: Cross,
          title: "Cuidado Espiritual",
          description: "Apoio espiritual respeitando crenças individuais"
        },
        {
          key: "servicos-de-apoio",
          icon: Shirt,
          title: "Serviços de Apoio",
          description: "Lavanderia e cuidado com pertences pessoais"
        }
      ]
    }
  ];

  return <section id="servicos" className="py-20 section-primary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-950">Nossos Cuidados</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              A moradia completa e segura que você procura e o idoso merece. No nosso residencial você encontra bem estar físico, mental e social.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
            {SERVICES.map((column) => (
              <div key={column.key} className="flex flex-col gap-4">
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${column.color} rounded-xl text-center min-h-16 flex items-center justify-center p-4`}>
                  <h3 className="text-xl font-bold text-slate-950">{column.title}</h3>
                </div>

                {/* Cards */}
                {column.items.map((service) => (
                  <div key={service.key} className="group bg-white border border-gray-400/20 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col min-h-[220px]">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors min-h-12 line-clamp-2">
                      {service.title}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed text-sm flex-1 line-clamp-4">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            ))}
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