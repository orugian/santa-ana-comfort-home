import { Gift, Heart, Star } from "lucide-react";
import DomeGallery from "@/components/DomeGallery";

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
  const galleryImages = FEATURED_EVENTS.map((e) => ({
    src: e.imageSrc,
    alt: e.imageAlt
  }));

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

        {/* Featured Gallery (Dome) */}
        <div className="mb-16">
          <div className="rounded-2xl bg-[#120F17] p-2 overflow-hidden">
            <div className="relative w-full h-[480px] sm:h-[560px] md:h-[640px]">
              <DomeGallery
                images={galleryImages}
                grayscale={false}
                fit={0.6}
                minRadius={400}
                overlayBlurColor="#120F17"
                imageBorderRadius="20px"
                openedImageBorderRadius="20px"
              />
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