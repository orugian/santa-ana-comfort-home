
import { Sun, Coffee, UtensilsCrossed, Activity, Gamepad2, Moon, Heart, Users } from "lucide-react";

export const DailyRoutineSection = () => {
  const routineItems = [
    {
      time: "07:00",
      icon: Sun,
      title: "Despertar e Cuidados Matinais",
      description: "Acordar suave, higiene pessoal assistida e preparo para o café da manhã",
      color: "bg-yellow-100 text-yellow-700"
    },
    {
      time: "08:00",
      icon: Coffee,
      title: "Café da Manhã Nutritivo",
      description: "Refeição balanceada supervisionada por nutricionista, adaptada às necessidades individuais",
      color: "bg-orange-100 text-orange-700"
    },
    {
      time: "09:30",
      icon: Activity,
      title: "Atividades Físicas",
      description: "Exercícios adaptados para idosos, fisioterapia e atividades de mobilidade",
      color: "bg-green-100 text-green-700"
    },
    {
      time: "11:00",
      icon: Gamepad2,
      title: "Estimulação Cognitiva",
      description: "Jogos de memória, palavras cruzadas, leitura e atividades para manter a mente ativa",
      color: "bg-purple-100 text-purple-700"
    },
    {
      time: "12:00",
      icon: UtensilsCrossed,
      title: "Almoço e Descanso",
      description: "Refeição principal do dia seguida de momento de relaxamento e descanso",
      color: "bg-blue-100 text-blue-700"
    },
    {
      time: "15:00",
      icon: Heart,
      title: "Atividades Sociais",
      description: "Momentos de convivência, música, dança e interação social com outros residentes",
      color: "bg-pink-100 text-pink-700"
    },
    {
      time: "18:00",
      icon: UtensilsCrossed,
      title: "Jantar em Família",
      description: "Refeição noturna em ambiente acolhedor, promovendo socialização",
      color: "bg-indigo-100 text-indigo-700"
    },
    {
      time: "20:00",
      icon: Moon,
      title: "Preparação para Descanso",
      description: "Atividades relaxantes, higiene noturna e preparo para uma noite tranquila",
      color: "bg-slate-100 text-slate-700"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa Rotina Diária</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atividades pensadas para promover saúde, conforto e alegria a cada momento do dia.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-green-200 to-purple-200 transform md:-translate-x-0.5"></div>

            <div className="space-y-12">
              {routineItems.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Time Circle */}
                  <div className="absolute left-8 md:left-1/2 w-16 h-16 rounded-full bg-white border-4 border-[#FFB5A7] flex items-center justify-center transform md:-translate-x-8 z-10">
                    <span className="text-sm font-bold text-[#FFB5A7]">{item.time}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-24 md:ml-0 w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div className="bg-gradient-to-r from-white to-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg ${item.color}`}>
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#FFB5A7] to-[#FF9F8F] p-6 rounded-full text-center text-white hover:scale-105 transition-transform cursor-pointer" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Flexibilidade</h4>
            </div>
            
            <div className="bg-gradient-to-br from-[#A8E6CF] to-[#96D7B8] p-6 rounded-full text-center text-white hover:scale-105 transition-transform cursor-pointer" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Suporte</h4>
            </div>
            
            <div className="bg-gradient-to-br from-[#DDA0DD] to-[#D8BFD8] p-6 rounded-full text-center text-white hover:scale-105 transition-transform cursor-pointer" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Activity className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Personalização</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
