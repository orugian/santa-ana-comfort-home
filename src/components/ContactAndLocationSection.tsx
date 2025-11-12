import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { openWhatsApp, buildWhatsAppUrl } from "@/utils/whatsapp";
export const ContactAndLocationSection = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      type: "phone",
      items: [
        {
          content: "(11) 2537-2024",
          link: "tel:+551125372024",
          subtitle: "Atendimento das 9h às 18h"
        }
      ]
    },
    {
      icon: MessageCircle,
      title: "WhatsApp", 
      type: "whatsapp",
      items: [
        {
          content: "Cel: (11) 96024-3030",
          link: `https://wa.me/5511960243030?text=${encodeURIComponent('Olá! Vim do site Lar Santa Ana e preciso de informações.')}`,
          subtitle: "Resposta rápida 24h"
        },
        {
          content: "Cel: (11) 96139-1788", 
          link: `https://wa.me/5511961391788?text=${encodeURIComponent('Olá! Vim do site Lar Santa Ana e preciso de informações.')}`,
          subtitle: "Resposta rápida 24h"
        },
        {
          content: "Cel: (11) 98081-7690",
          link: `https://wa.me/5511980817690?text=${encodeURIComponent('Olá! Vim do site Lar Santa Ana e preciso de informações.')}`,
          subtitle: "Resposta rápida 24h"
        }
      ]
    },
    {
      icon: Mail,
      title: "Email",
      type: "email", 
      items: [
        {
          content: "dani.chimbata@outlook.com",
          link: "mailto:dani.chimbata@outlook.com",
          subtitle: "Resposta em até 24h"
        },
        {
          content: "fabi.gomes.fisio@gmail.com",
          link: "mailto:fabi.gomes.fisio@gmail.com", 
          subtitle: "Resposta em até 24h"
        }
      ]
    },
    {
      icon: MapPin,
      title: "Endereço",
      type: "address",
      items: [
        {
          content: "R. Santa Gertrudes, 59\nVila Gomes Cardim, São Paulo – SP\nCEP: 03408-020",
          subtitle: ""
        }
      ]
    },
    {
      icon: Clock,
      title: "Horário de Visitas", 
      type: "hours",
      items: [
        {
          content: "Visita Livre — Sem restrição de dia e horário",
          subtitle: ""
        }
      ]
    }
  ];
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o Lar Santa Ana.");
    window.open(`https://wa.me/5511961391788?text=${message}`, '_blank');
  };
  const handleGoogleMapsClick = () => {
    const address = encodeURIComponent("R. Santa Gertrudes, 59 - Vila Gomes Cardim, São Paulo - SP, 03408-020, Brasil");
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };
  return <section
    id="contact"
    className="py-12 bg-white scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32"
    aria-label="Vamos Conversar"
    data-section="contact"
  >
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Contact Information */}
          <div className="col-span-12 lg:col-span-5 space-y-6 animate-fade-in">
            {/* Section Header */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-950">
                Vamos Conversar!
              </h2>
              <p className="text-lg lg:text-xl text-[#6B7280] leading-relaxed">
                Agende uma visita ou tire suas dúvidas. Nossa equipe responderá com carinho.
              </p>
            </div>

            {/* WhatsApp Button */}
            <div className="flex justify-center lg:justify-start">
              <Button onClick={handleWhatsAppClick} className="w-full max-w-[320px] px-8 py-4 text-lg font-bold rounded-xl bg-[#25D366] hover:bg-[#1DA851] text-white border-0 transition-colors duration-200" aria-label="Falar via WhatsApp">
                <MessageCircle className="w-6 h-6 mr-3" aria-hidden="true" />
                WhatsApp
              </Button>
            </div>

            {/* Contact Information Card */}
            <Card className="bg-white border border-gray-300/25 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-semibold mb-6 text-slate-950">
                Informações de Contato
              </h3>
              
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2">
                    <Phone className="w-5 h-5 text-[#9DDDC1]" strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div className="flex-grow min-w-0 space-y-2">
                    <h4 className="font-semibold text-sm text-slate-950">
                      Telefone
                    </h4>
                    <a
                      href="tel:+551125372024"
                      className="text-[#6B7280] text-sm leading-relaxed hover:text-[#9DDDC1] transition-colors"
                      aria-label="Ligar para (11) 2537-2024"
                    >
                      (11) 2537-2024
                    </a>
                    <p className="text-[#6B7280] text-xs opacity-75">
                      Atendimento das 9h às 18h
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2">
                    <MessageCircle className="w-5 h-5 text-[#9DDDC1]" strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div className="flex-grow min-w-0 space-y-2">
                    <h4 className="font-semibold text-sm text-slate-950">
                      WhatsApp
                    </h4>
                    <ul className="space-y-1.5">
                      <li>
                        <a
                          href={buildWhatsAppUrl("(11) 96024-3030", "Olá! Vim do site Lar Santa Ana e preciso de informações.")}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => { e.preventDefault(); openWhatsApp("(11) 96024-3030", "Olá! Vim do site Lar Santa Ana e preciso de informações."); }}
                          className="text-[#6B7280] text-sm leading-relaxed hover:text-[#9DDDC1] transition-colors"
                          aria-label="Abrir conversa no WhatsApp para (11) 96024-3030"
                        >
                          Cel: (11) 96024-3030
                        </a>
                      </li>
                      <li>
                        <a
                          href={buildWhatsAppUrl("(11) 96139-1788", "Olá! Vim do site Lar Santa Ana e preciso de informações.")}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => { e.preventDefault(); openWhatsApp("(11) 96139-1788", "Olá! Vim do site Lar Santa Ana e preciso de informações."); }}
                          className="text-[#6B7280] text-sm leading-relaxed hover:text-[#9DDDC1] transition-colors"
                          aria-label="Abrir conversa no WhatsApp para (11) 96139-1788"
                        >
                          Cel: (11) 96139-1788
                        </a>
                      </li>
                      <li>
                        <a
                          href={buildWhatsAppUrl("(11) 98081-7690", "Olá! Vim do site Lar Santa Ana e preciso de informações.")}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => { e.preventDefault(); openWhatsApp("(11) 98081-7690", "Olá! Vim do site Lar Santa Ana e preciso de informações."); }}
                          className="text-[#6B7280] text-sm leading-relaxed hover:text-[#9DDDC1] transition-colors"
                          aria-label="Abrir conversa no WhatsApp para (11) 98081-7690"
                        >
                          Cel: (11) 98081-7690
                        </a>
                      </li>
                    </ul>
                    <p className="text-[#6B7280] text-xs opacity-75 mt-2">
                      Resposta rápida 24h
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2">
                    <Mail className="w-5 h-5 text-[#9DDDC1]" strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div className="flex-grow min-w-0 space-y-2">
                    <h4 className="font-semibold text-sm text-slate-950">
                      Email
                    </h4>
                    <ul className="space-y-1.5">
                      <li>
                        <a
                          href="mailto:dani.chimbata@outlook.com"
                          className="text-[#6B7280] text-sm leading-relaxed hover:text-[#9DDDC1] transition-colors"
                          aria-label="Enviar email para dani.chimbata@outlook.com"
                        >
                          dani.chimbata@outlook.com
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:fabi.gomes.fisio@gmail.com"
                          className="text-[#6B7280] text-sm leading-relaxed hover:text-[#9DDDC1] transition-colors"
                          aria-label="Enviar email para fabi.gomes.fisio@gmail.com"
                        >
                          fabi.gomes.fisio@gmail.com
                        </a>
                      </li>
                    </ul>
                    <p className="text-[#6B7280] text-xs opacity-75 mt-2">
                      Resposta em até 24h
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2">
                    <MapPin className="w-5 h-5 text-[#9DDDC1]" strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div className="flex-grow min-w-0 space-y-2">
                    <h4 className="font-semibold text-sm text-slate-950">
                      Endereço
                    </h4>
                    <p className="text-[#6B7280] text-sm leading-relaxed whitespace-pre-line">
                      R. Santa Gertrudes, 59
Vila Gomes Cardim, São Paulo – SP
CEP: 03408-020
                    </p>
                  </div>
                </div>

                {/* Visiting Hours */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2">
                    <Clock className="w-5 h-5 text-[#9DDDC1]" strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div className="flex-grow min-w-0 space-y-2">
                    <h4 className="font-semibold text-sm text-slate-950">
                      Horário de Visitas
                    </h4>
                    <p className="text-[#6B7280] text-sm leading-relaxed">
                      Visita Livre — Sem restrição de dia e horário
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Location */}
          <div className="col-span-12 lg:col-span-7 space-y-4 animate-fade-in">
            <Card className="bg-white border border-gray-300/25 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-semibold mb-6 text-slate-950">
                Nossa Localização
              </h3>
              
              {/* Google Maps Embed */}
              <div className="relative">
                <div className="h-[280px] md:h-[360px] lg:h-[420px] border border-gray-300/25 rounded-xl overflow-hidden">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.020635985289!2d-46.58127892407859!3d-23.536388061274624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5dd0f6c72a45%3A0x45b7a66b5b6b7b6b!2sR.%20Santa%20Gertrudes%2C%2059%20-%20Vila%20Gomes%20Cardim%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003408-020!5e0!3m2!1spt-BR!2sbr!4v1648000000000!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{
                  border: 0
                }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização do Lar Santa Ana" onLoad={() => setMapLoaded(true)} className={`transition-opacity duration-300 ${mapLoaded ? 'opacity-100' : 'opacity-75'}`} />
                </div>
                
                {/* Map Loading State */}
                {!mapLoaded && <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-xl">
                    <div className="text-center">
                      <MapPin className="w-8 h-8 text-[#9DDDC1] mx-auto mb-2" />
                      <p className="text-[#6B7280] text-sm">Carregando mapa...</p>
                    </div>
                  </div>}
              </div>

              {/* Google Maps Link */}
              <div className="mt-4 flex justify-center lg:justify-start">
                <Button onClick={handleGoogleMapsClick} variant="outline" className="border-2 border-[#2563EB] text-[#2563EB] bg-transparent hover:bg-[#9DDDC1]/15 transition-colors duration-200" aria-label="Abrir localização no Google Maps">
                  <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
                  Abrir no Google Maps
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};