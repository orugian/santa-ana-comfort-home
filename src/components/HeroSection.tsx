
import { Button } from "@/components/ui/button";
import { Heart, Stethoscope, Users, MessageCircle, Calendar } from "lucide-react";

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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="text-[#F8B4C8]">Ternura</span> e{" "}
            <span className="text-[#6B7280]">Excelência</span>{" "}
            em Cada Detalhe
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in">
            Há mais de 10 anos, oferecendo conforto, segurança e atenção personalizada aos nossos residentes.
          </p>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in">
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-sm">
              <Heart className="w-12 h-12 text-[#FFB5A7] mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Atenção Personalizada</h3>
              <p className="text-gray-600 text-center">Cuidado individualizado com foco nas necessidades específicas de cada residente</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-sm">
              <Stethoscope className="w-12 h-12 text-[#A8E6CF] mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expertise Geriátrica</h3>
              <p className="text-gray-600 text-center">Equipe especializada em gerontologia com mais de uma década de experiência</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-sm">
              <Users className="w-12 h-12 text-[#DDA0DD] mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ambiente Familiar</h3>
              <p className="text-gray-600 text-center">Um lar acolhedor onde residentes se sentem parte da família Santa Ana</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#FFB5A7] to-[#A8E6CF] hover:from-[#FF9F8F] hover:to-[#96D7B8] text-gray-800 px-8 py-3 text-lg"
              onClick={scrollToContact}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#FFB5A7] text-[#FFB5A7] hover:bg-[#FFB5A7]/10 px-8 py-3 text-lg"
              onClick={scrollToContact}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agendar Visita
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};
