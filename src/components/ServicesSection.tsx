
import { Heart, Stethoscope, UtensilsCrossed, Brain, Dumbbell, Users, Shirt, Cross } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Cuidados Médicos Profissionais",
      description: "Acompanhamento médico contínuo com profissionais especializados em geriatria e suporte psiquiátrico quando necessário.",
      color: "blue"
    },
    {
      icon: Brain,
      title: "Especialistas em Gerontologia",
      description: "Equipe de gerontólogos experientes dedicados ao cuidado integral e personalizado de cada residente.",
      color: "purple"
    },
    {
      icon: UtensilsCrossed,
      title: "Nutrição Especializada",
      description: "Planos alimentares supervisionados por nutricionistas, adaptados às necessidades individuais de cada idoso.",
      color: "green"
    },
    {
      icon: Heart,
      title: "Apoio Psicológico",
      description: "Acompanhamento psicológico e suporte emocional contínuo para promover bem-estar mental e qualidade de vida.",
      color: "red"
    },
    {
      icon: Dumbbell,
      title: "Atividade Física Adaptada",
      description: "Exercícios físicos especializados para a terceira idade, promovendo mobilidade, força e independência.",
      color: "orange"
    },
    {
      icon: Brain,
      title: "Estimulação Cognitiva",
      description: "Atividades e jogos desenvolvidos para manter e estimular as funções cognitivas e a memória.",
      color: "indigo"
    },
    {
      icon: Cross,
      title: "Cuidado Espiritual",
      description: "Grupos de oração e apoio espiritual respeitando as crenças e tradições de cada residente.",
      color: "yellow"
    },
    {
      icon: Shirt,
      title: "Serviços de Apoio",
      description: "Lavanderia, limpeza e manutenção das roupas e pertences pessoais com cuidado e atenção.",
      color: "teal"
    }
  ];

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

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços especializados para garantir o 
              bem-estar físico, mental e emocional de nossos residentes.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-6 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-lg ${getColorClasses(service.color)} flex items-center justify-center mb-4 transition-colors duration-300`}>
                  <service.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cuidado Personalizado</h3>
              <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Cada residente recebe um plano de cuidados personalizado, desenvolvido por nossa 
                equipe multidisciplinar. Trabalhamos em estreita colaboração com as famílias para 
                garantir que todas as necessidades específicas sejam atendidas com carinho e profissionalismo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Equipe Multidisciplinar</h4>
                <p className="text-sm text-gray-600">Médicos, enfermeiros, fisioterapeutas, psicólogos e cuidadores especializados</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Cuidado 24h</h4>
                <p className="text-sm text-gray-600">Monitoramento e assistência disponível 24 horas por dia, 7 dias por semana</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Stethoscope className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Avaliação Contínua</h4>
                <p className="text-sm text-gray-600">Acompanhamento regular do estado de saúde e ajustes no plano de cuidados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
