import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
export const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "Mensagem Enviada!",
      description: "Entraremos em contato em breve. Obrigado pelo interesse no nosso trabalho."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section className="py-20 section-primary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-950">Vamos Conversar!</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Agende uma visita ou tire suas dúvidas. Nossa equipe responderá com carinho.
            </p>
            <div className="mt-8">
              <Button variant="whatsapp" className="px-12 py-4 text-xl w-full max-w-md font-bold rounded-xl">
                <MessageCircle className="w-6 h-6 mr-3" />
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            {/* Contact Information */}
            <div className="w-full max-w-md">
              <h3 className="text-2xl font-semibold mb-6 text-center text-slate-950">Informações de Contato</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-accent-light p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-950">Telefone</h4>
                    <p className="text-base text-slate-950">(11) 9-9999-9999</p>
                    <p className="text-sm text-zinc-600">Atendimento das 8h às 18h</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="bg-accent-light p-3 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-950">WhatsApp</h4>
                    <p className="text-zinc-700">(11) 9-9999-9999</p>
                    <p className="text-sm text-zinc-700">Resposta rápida 24h</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-accent-light p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-950">Email</h4>
                    <p className="text-zinc-700">contato@larsantaana.com.br</p>
                    <p className="text-sm text-zinc-700">Resposta em até 24h</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-accent-light p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-950">Endereço</h4>
                    <p className="text-zinc-700">
                      Rua das Flores, 123<br />
                      Tatuapé - São Paulo/SP<br />
                      CEP: 03010-000
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-accent-light p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-950">Horário de Visitas</h4>
                    <p className="text-zinc-700">
                      Segunda a Sexta: 9h às 17h<br />
                      Sábados: 9h às 15h<br />
                      Domingos: Mediante agendamento
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6 text-center text-slate-950">Nossa Localização</h3>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-foreground/60 mx-auto mb-3 rounded-none bg-transparent" />
                  <h4 className="text-lg mb-2 text-slate-950 font-medium">Mapa Interativo</h4>
                  <p className="text-zinc-700">
                    Rua das Flores, 123 - Tatuapé, São Paulo/SP
                  </p>
                  <Button variant="secondary" className="mt-4 bg-black/0 font-bold text-[#25d366]">
                    Abrir no Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};