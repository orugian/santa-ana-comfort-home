import { useState, useEffect } from "react";
import { Gift, Heart, Star, ChevronLeft, ChevronRight } from "lucide-react";

const FEATURED_EVENTS = [
  {
    key: "atividades-externas",
    title: "Atividades ao Ar Livre",
    description:
      "Momentos de convivência e atividades recreativas em nosso espaço externo.",
    imageSrc: "/lovable-uploads/7cfe7575-31ab-4c49-8a2b-e57e48d42b4d.png",
    imageAlt: "Residentes participando de atividades ao ar livre",
    icon: "heart"
  },
  {
    key: "festa-junina",
    title: "Festa Junina",
    description:
      "Celebração tradicional com comidas típicas, decoração festiva e apresentações.",
    imageSrc: "/lovable-uploads/ff0e6325-70d8-40fb-8bae-ef672adad5b0.png",
    imageAlt: "Residentes reunidos na Festa Junina",
    icon: "star"
  },
  {
    key: "aniversarios",
    title: "Aniversários",
    description:
      "Comemorações mensais com bolo, música e muita alegria.",
    imageSrc: "/lovable-uploads/829a5ff3-6346-4a44-87a5-16db902eef9e.png",
    imageAlt: "Aniversário — moradora celebrando com bolo e decoração",
    icon: "gift"
  },
  {
    key: "pascoa",
    title: "Celebração de Páscoa",
    description:
      "Reunião especial com almoço festivo e atividades temáticas.",
    imageSrc: "/lovable-uploads/048ee364-a008-422d-9478-820302894534.png",
    imageAlt: "Celebração de Páscoa com residentes no jardim",
    icon: "heart"
  },
  {
    key: "natal",
    title: "Ceia de Natal",
    description:
      "Ceia natalina, troca de presentes e momentos emocionantes em família.",
    imageSrc: "/lovable-uploads/2530bc44-4069-43df-a5d8-d99056e86075.png",
    imageAlt: "Atividade de Natal com residentes e equipe",
    icon: "gift"
  }
];

const CELEBRATION_TYPES = [
  {
    key: "aniversario",
    title: "Festa de Aniversário",
    description:
      "Celebramos cada aniversário com festa temática, bolo personalizado e muita alegria.",
    icon: "gift"
  },
  {
    key: "pascoa",
    title: "Celebração de Páscoa",
    description:
      "Almoço festivo, atividades temáticas e confraternização.",
    icon: "heart"
  },
  {
    key: "junina",
    title: "Festa Junina",
    description:
      "Comidas típicas, decoração colorida e apresentações especiais.",
    icon: "star"
  },
  {
    key: "natal",
    title: "Ceia de Natal",
    description:
      "Ceia natalina, troca de presentes e momentos emocionantes.",
    icon: "gift"
  }
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "gift":
      return Gift;
    case "heart":
      return Heart;
    case "star":
      return Star;
    default:
      return Star;
  }
};

const getBadgeStyles = (key: string) => {
  switch (key) {
    case "aniversario":
      return "bg-primary/10 text-primary shadow-[inset_0_0_0_1px_rgba(37,99,235,0.12)]";
    case "pascoa":
      return "bg-[#9DDDC1]/30 text-primary shadow-[inset_0_0_0_1px_rgba(157,221,193,0.38)]";
    case "junina":
      return "bg-primary/10 text-primary shadow-[inset_0_0_0_1px_rgba(37,99,235,0.12)]";
    case "natal":
      return "bg-[#9DDDC1]/30 text-primary shadow-[inset_0_0_0_1px_rgba(157,221,193,0.38)]";
    default:
      return "bg-primary/10 text-primary shadow-[inset_0_0_0_1px_rgba(37,99,235,0.12)]";
  }
};

export const EventsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentSlide((prev) => (prev === 0 ? FEATURED_EVENTS.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentSlide((prev) => (prev === FEATURED_EVENTS.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === FEATURED_EVENTS.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? FEATURED_EVENTS.length - 1 : prev - 1));
  };

  const currentEvent = FEATURED_EVENTS[currentSlide];
  const IconComponent = getIcon(currentEvent.icon);

  return (
    <section id="eventos" className="py-20 section-secondary-bg">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-950">Eventos e Celebrações</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Momentos especiais que trazem alegria, união e memórias inesquecíveis para nossos residentes e suas famílias.
          </p>
        </div>

        {/* Featured Carousel */}
        <div className="mb-16">
          <div className="rounded-2xl bg-white/60 backdrop-blur-[1px] p-2">
            <div className="grid grid-cols-12 gap-6">
              {/* Image */}
              <div className="col-span-12 lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden bg-muted/20">
                  <img
                    src={currentEvent.imageSrc}
                    alt={currentEvent.imageAlt}
                    className="w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] xl:h-[380px] rounded-xl object-cover"
                    style={
                      currentEvent.title === "Celebração de Páscoa" 
                        ? { objectPosition: "50% 40%" } 
                        : currentEvent.title === "Ceia de Natal" || currentEvent.title?.includes("Natal")
                        ? { objectPosition: "50% 45%" }
                        : undefined
                    }
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="col-span-12 lg:col-span-6 rounded-2xl p-6 md:p-8 bg-gradient-to-br from-[#F7F7FF] to-[#F7FBFF] border border-black/5 shadow-sm flex flex-col gap-4">
                {/* Icon Badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shadow-[inset_0_0_0_1px_rgba(37,99,235,0.12)]">
                  <IconComponent className="w-6 h-6" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-slate-950">{currentEvent.title}</h3>

                {/* Description */}
                <p className="text-[#6B7280] leading-relaxed flex-1">{currentEvent.description}</p>

                {/* Controls */}
                <div className="mt-auto flex items-center gap-3">
                  <button
                    onClick={prevSlide}
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/5 transition-colors"
                    aria-label="Slide anterior"
                  >
                    <ChevronLeft className="w-5 h-5 text-[#6B7280]" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/5 transition-colors"
                    aria-label="Próximo slide"
                  >
                    <ChevronRight className="w-5 h-5 text-[#6B7280]" />
                  </button>

                  {/* Dots */}
                  <div className="flex gap-2 ml-3">
                    {FEATURED_EVENTS.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 w-2 rounded-full transition-colors ${
                          index === currentSlide ? "bg-[#2563EB]" : "bg-[#D1D5DB]"
                        }`}
                        aria-label={`Ir para slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Types of Celebrations */}
        <div>
          <h4 className="text-2xl font-semibold text-center mb-8 text-slate-950">Tipos de Celebrações</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CELEBRATION_TYPES.map((celebration) => {
              const IconComponent = getIcon(celebration.icon);
              const badgeStyles = getBadgeStyles(celebration.key);
              
              return (
                <div key={celebration.key} className="bg-white rounded-2xl border border-black/5 shadow-xs p-5 flex flex-col h-full">
                  {/* Icon Badge */}
                  <div className={`flex items-center justify-center w-10 h-10 rounded-xl mb-4 ${badgeStyles}`}>
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </div>

                  {/* Title */}
                  <h5 className="text-lg font-semibold mb-3 text-slate-950">{celebration.title}</h5>

                  {/* Description */}
                  <div className="flex-1">
                    <p className="text-[#6B7280] leading-relaxed">{celebration.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};