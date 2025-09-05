import { Button } from "@/components/ui/button";
import { Heart, Stethoscope, Users, MessageCircle, Calendar } from "lucide-react";

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative isolate w-full min-h-screen flex items-center justify-center">
      {/* Background image */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <img
          src="/lovable-uploads/de7c1a3b-a586-4404-bce0-14c041d03a3b.png"
          alt=""
          className="h-full w-full object-cover object-[68%_50%]" 
          loading="eager"
          decoding="async"
        />
        {/* Soft white scrim for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-white/78 to-white/50 md:from-white/85 md:via-white/70 md:to-white/45" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl mb-6 animate-fade-in text-slate-950 font-bold md:text-6xl">
            Residencial para Idosos
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground mb-8 animate-fade-in text-center font-medium">Há mais de 15 anos cuidando do idoso com conforto, segurança e atenção personalizada</p>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in">
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-sm">
              <Heart className="w-12 h-12 text-accent mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Atenção Personalizada</h3>
              <p className="text-foreground/80 text-center">Cuidado com foco nas necessidades específicas de cada residente</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-sm">
              <Stethoscope className="w-12 h-12 text-accent mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Expertise Geriátrica</h3>
              <p className="text-foreground/80 text-center">Equipe especializada em gerontologia com mais de 15 anos de experiência</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-sm">
              <Users className="w-12 h-12 text-accent mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Ambiente Familiar</h3>
              <p className="text-foreground/80 text-center">Um lar acolhedor onde o idoso se sentem parte da família  Santa Ana</p>
            </div>
          </div>

        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};