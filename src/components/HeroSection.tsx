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
        {/* Gentle top gradient for enhanced contrast */}
        <div aria-hidden className="absolute inset-0 -z-0 bg-gradient-to-b from-white/50 via-white/30 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* New refined heading block */}
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]">
              Residencial para Idosos
            </h1>

            {/* Brand accent underline */}
            <div className="mx-auto mt-3 h-1.5 w-64 sm:w-80 md:w-96 rounded-full bg-gradient-to-r from-primary via-emerald-400 to-primary opacity-90"></div>

            {/* Subheading as a soft "glass chip" for contrast */}
            <p className="mt-5 mx-auto max-w-3xl text-base md:text-lg leading-relaxed text-slate-800/90 bg-white/60 md:bg-white/50 backdrop-blur-md rounded-xl px-4 py-2 ring-1 ring-white/60 shadow-sm">
              Há mais de 15 anos cuidando do idoso com conforto, segurança e atenção personalizada
            </p>
          </div>

          {/* Core Values */}
          <div className="mt-8 md:mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 mb-12 animate-fade-in">
            <div className="rounded-2xl bg-white/90 md:bg-white/80 backdrop-blur-md ring-1 ring-black/5 shadow-md hover:shadow-lg transition-shadow p-4 md:p-6 flex flex-col items-center">
              <Heart className="w-12 h-12 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Atenção Personalizada</h3>
              <p className="text-slate-700 text-center">Cuidado com foco nas necessidades específicas de cada residente</p>
            </div>
            
            <div className="rounded-2xl bg-white/90 md:bg-white/80 backdrop-blur-md ring-1 ring-black/5 shadow-md hover:shadow-lg transition-shadow p-4 md:p-6 flex flex-col items-center">
              <Stethoscope className="w-12 h-12 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Expertise Geriátrica</h3>
              <p className="text-slate-700 text-center">Equipe especializada em gerontologia com mais de 15 anos de experiência</p>
            </div>
            
            <div className="rounded-2xl bg-white/90 md:bg-white/80 backdrop-blur-md ring-1 ring-black/5 shadow-md hover:shadow-lg transition-shadow p-4 md:p-6 flex flex-col items-center">
              <Users className="w-12 h-12 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Ambiente Familiar</h3>
              <p className="text-slate-700 text-center">Um lar acolhedor onde o idoso se sentem parte da família  Santa Ana</p>
            </div>
          </div>

        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};