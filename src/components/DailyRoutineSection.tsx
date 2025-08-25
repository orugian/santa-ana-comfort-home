import { Sun, Coffee, UtensilsCrossed, Activity, Gamepad2, Moon, Heart, Users } from "lucide-react";
export const DailyRoutineSection = () => {
  const routineItems = [{
    time: "07:00",
    icon: Sun,
    title: "Despertar e Cuidados Matinais",
    description: "Acordar suave, higiene pessoal assistida e preparo para o café da manhã.",
    color: "bg-[#2A70D6]/10 text-[#2A70D6]",
    iconBg: "bg-[#2A70D6]"
  }, {
    time: "08:30",
    icon: Coffee,
    title: "Café da Manhã Nutritivo",
    description: "Refeição balanceada supervisionada por nutricionista, adaptada às necessidades individuais.",
    color: "bg-[#85C441]/10 text-[#85C441]",
    iconBg: "bg-[#85C441]"
  }, {
    time: "10:00",
    icon: Activity,
    title: "Atividades Físicas no Jardim",
    description: "Exercícios adaptados ao ar livre: alongamentos, mobilidade e fisioterapia leve.",
    color: "bg-[#005BAC]/10 text-[#005BAC]",
    iconBg: "bg-[#005BAC]"
  }, {
    time: "12:00",
    icon: UtensilsCrossed,
    title: "Almoço e Descanso",
    description: "Refeição principal do dia seguida de um momento de relaxamento.",
    color: "bg-[#85C441]/10 text-[#85C441]",
    iconBg: "bg-[#85C441]"
  }, {
    time: "15:00",
    icon: Coffee,
    title: "Lanche da Tarde",
    description: "Lanche leve e hidratação para repor as energias antes das atividades da tarde.",
    color: "bg-[#2A70D6]/10 text-[#2A70D6]",
    iconBg: "bg-[#2A70D6]"
  }, {
    time: "16:00",
    icon: Heart,
    title: "Convívio & Estímulo Cognitivo",
    description: "Atividades sociais com jogos de memória, leitura, música e interação em grupo.",
    color: "bg-[#005BAC]/10 text-[#005BAC]",
    iconBg: "bg-[#005BAC]"
  }, {
    time: "18:00",
    icon: UtensilsCrossed,
    title: "Jantar",
    description: "Refeição noturna em ambiente acolhedor, promovendo socialização.",
    color: "bg-[#2A70D6]/10 text-[#2A70D6]",
    iconBg: "bg-[#2A70D6]"
  }, {
    time: "20:00",
    icon: Moon,
    title: "Preparação para Descanso",
    description: "Higiene noturna e preparo para uma noite tranquila.",
    color: "bg-[#C1C1C1]/20 text-[#005BAC]",
    iconBg: "bg-[#C1C1C1]"
  }];
  return <section className="py-20 bg-gradient-to-br from-[#C1C1C1]/5 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-950">Nossa Rotina Diária</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atividades pensadas para promover saúde, conforto e alegria a cada momento do dia.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2A70D6] via-[#85C441] to-[#005BAC] transform md:-translate-x-0.5"></div>

            <div className="space-y-12">
              {routineItems.map((item, index) => <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Time Circle */}
                  <div className="absolute left-8 md:left-1/2 w-16 h-16 rounded-full bg-white border-4 border-[#2A70D6] flex items-center justify-center transform md:-translate-x-8 z-10 shadow-lg">
                    <span className="text-sm font-bold text-slate-950">{item.time}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-24 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border-l-4 border-[#85C441] hover:border-[#2A70D6]">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg ${item.color} relative overflow-hidden`}>
                          <div className={`absolute inset-0 ${item.iconBg} opacity-20`}></div>
                          <item.icon className="w-6 h-6 relative z-10 text-white" style={{
                        filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
                      }} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2 text-slate-950">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Additional Info */}
          
        </div>
      </div>
    </section>;
};