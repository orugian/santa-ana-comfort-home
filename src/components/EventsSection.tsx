
import { Calendar, Cake, Heart, Music, Gift, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const EventsSection = () => {
  const events = [
    {
      icon: Cake,
      title: "Aniversários",
      description: "Celebrações especiais mensais com bolo, música e muita alegria para todos os aniversariantes do mês",
      color: "bg-pink-500",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      icon: Heart,
      title: "Páscoa",
      description: "Celebração da Páscoa com decoração temática, chocolate e atividades especiais de confraternização",
      color: "bg-yellow-500",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      icon: Star,
      title: "Natal",
      description: "Festa natalina com árvore decorada, troca de presentes e ceia especial em família",
      color: "bg-red-500",
      image: "photo-1518770660439-4636190af475"
    },
    {
      icon: Music,
      title: "Festa Junina",
      description: "Arraial completo com decoração, quadrilha, comidas típicas e muita diversão",
      color: "bg-orange-500",
      image: "photo-1517022812141-23620dba5c23"
    },
    {
      icon: Gift,
      title: "Dia das Mães/Pais",
      description: "Homenagens especiais com apresentações, lembranças e momentos emocionantes",
      color: "bg-blue-500",
      image: "photo-1721322800607-8c38375eef04"
    },
    {
      icon: Calendar,
      title: "Eventos Temáticos",
      description: "Celebrações de datas especiais, feriados e eventos culturais durante todo o ano",
      color: "bg-purple-500",
      image: "photo-1473177104440-ffee2f376098"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Eventos e Celebrações</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Momentos especiais que trazem alegria, união e celebração para nossos residentes. 
              Cada evento é uma oportunidade de criar memórias felizes e fortalecer laços afetivos.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {events.map((event, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                  <img 
                    src={`https://images.unsplash.com/${event.image}?w=400&h=300&fit=crop`}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`${event.color} p-3 rounded-lg text-white shadow-lg`}>
                      <event.icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Event Philosophy */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Nossa Filosofia de Celebração</h3>
              <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Acreditamos que celebrar é fundamental para manter o espírito jovem e alegre. 
                Nossos eventos são planejados com carinho para proporcionar momentos de felicidade, 
                socialização e conexão emocional entre todos os residentes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Alegria</h4>
                <p className="text-sm text-gray-600">Momentos de felicidade e descontração</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Music className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Cultura</h4>
                <p className="text-sm text-gray-600">Preservação de tradições e costumes</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Memórias</h4>
                <p className="text-sm text-gray-600">Criação de recordações especiais</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Gift className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">União</h4>
                <p className="text-sm text-gray-600">Fortalecimento de laços afetivos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
