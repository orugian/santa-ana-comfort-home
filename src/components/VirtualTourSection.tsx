
import { Play, Eye, Home, Camera, UtensilsCrossed, Activity, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";

export const VirtualTourSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tour Virtual</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça nossas instalações confortáveis e acolhedoras através de um tour virtual 
              interativo. Veja de perto os espaços onde seus entes queridos receberão todo o cuidado e carinho.
            </p>
          </div>

          {/* Virtual Tour Player */}
          <div className="mb-16">
            <div className="relative bg-gradient-to-br from-blue-100 to-green-100 rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-white p-6 rounded-full shadow-lg mb-4 inline-block">
                    <Play className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Tour Virtual Interativo</h3>
                  <p className="text-gray-600 mb-6">Clique para iniciar o tour pelas nossas instalações</p>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Play className="w-5 h-5 mr-2" />
                    Iniciar Tour Virtual
                  </Button>
                </div>
              </div>
              
              {/* Tour Controls */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      Vista 360°
                    </Button>
                    <Button variant="outline" size="sm">
                      <Home className="w-4 h-4 mr-2" />
                      Quartos
                    </Button>
                    <Button variant="outline" size="sm">
                      <Camera className="w-4 h-4 mr-2" />
                      Áreas Comuns
                    </Button>
                  </div>
                  <span className="text-sm text-gray-600">Use as setas para navegar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tour Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Quartos Confortáveis</h4>
              <p className="text-gray-600 text-sm">Ambientes aconchegantes e adaptados para o conforto dos residentes</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <UtensilsCrossed className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Refeitório</h4>
              <p className="text-gray-600 text-sm">Espaço amplo e acolhedor para refeições em ambiente familiar</p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Sala de Atividades</h4>
              <p className="text-gray-600 text-sm">Espaços dedicados à recreação e terapias ocupacionais</p>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Jardim</h4>
              <p className="text-gray-600 text-sm">Área verde para relaxamento e atividades ao ar livre</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-semibold mb-4">Gostaria de uma Visita Presencial?</h3>
            <p className="text-lg mb-6 opacity-90">
              Nada substitui conhecer pessoalmente nosso ambiente acolhedor. 
              Agende uma visita e veja como podemos cuidar do seu ente querido.
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-blue-600 hover:bg-gray-50 border-white"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Agendar Visita Presencial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
