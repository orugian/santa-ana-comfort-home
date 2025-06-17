
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users } from "lucide-react";

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Cuidado com{" "}
            <span className="text-blue-600">Amor</span> e{" "}
            <span className="text-green-600">Experiência</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in">
            No Lar Santa Ana, oferecemos mais de 10 anos de dedicação ao cuidado de idosos,
            proporcionando conforto, segurança e carinho em cada momento.
          </p>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in">
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-sm">
              <Heart className="w-12 h-12 text-red-500 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Compassão</h3>
              <p className="text-gray-600 text-center">Cuidado personalizado com amor e atenção a cada residente</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-sm">
              <Shield className="w-12 h-12 text-blue-500 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Confiança</h3>
              <p className="text-gray-600 text-center">Mais de uma década de experiência em cuidados geriátricos</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-sm">
              <Users className="w-12 h-12 text-green-500 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Família</h3>
              <p className="text-gray-600 text-center">Um ambiente acolhedor onde todos se sentem em casa</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              onClick={scrollToContact}
            >
              Agendar Visita
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg"
              onClick={() => document.getElementById("tour")?.scrollIntoView({ behavior: "smooth" })}
            >
              Tour Virtual
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};
