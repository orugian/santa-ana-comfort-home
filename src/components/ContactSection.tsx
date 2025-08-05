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
  return <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vamos Conversar!</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Agende uma visita ou tire suas dúvidas. Nossa equipe responderá com carinho.
            </p>
            <div className="mt-8">
              <button className="bg-gradient-to-r from-[#FFB5A7] to-[#A8E6CF] hover:from-[#FF9F8F] hover:to-[#96D7B8] text-gray-800 px-12 py-4 rounded-lg text-xl font-semibold w-full max-w-md">
                <MessageCircle className="w-6 h-6 mr-3 inline" />
                WhatsApp
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            {/* Contact Information */}
            <div className="w-full max-w-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Informações de Contato</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefone</h4>
                    <p className="text-gray-600">(11) 9-9999-9999</p>
                    <p className="text-sm text-gray-500">Atendimento das 8h às 18h</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">(11) 9-9999-9999</p>
                    <p className="text-sm text-gray-500">Resposta rápida 24h</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">contato@larsantaana.com.br</p>
                    <p className="text-sm text-gray-500">Resposta em até 24h</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Endereço</h4>
                    <p className="text-gray-600">
                      Rua das Flores, 123<br />
                      Tatuapé - São Paulo/SP<br />
                      CEP: 03010-000
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Horário de Visitas</h4>
                    <p className="text-gray-600">
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
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Nossa Localização</h3>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-gray-600 mb-2">Mapa Interativo</h4>
                  <p className="text-gray-500">
                    Rua das Flores, 123 - Tatuapé, São Paulo/SP
                  </p>
                  <Button variant="outline" className="mt-4">
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