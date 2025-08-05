import { Heart, Phone, Mail, MapPin, MessageCircle, Instagram, Facebook } from "lucide-react";
export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-red-400" />
              <h3 className="text-2xl font-bold">Lar Santa Ana</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Mais de 10 anos dedicados ao cuidado de idosos com amor, 
              respeito e profissionalismo no coração de Tatuapé.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("home")} className="text-gray-300 hover:text-white transition-colors">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nós
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-gray-300 hover:text-white transition-colors">
                  Serviços
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("events")} className="text-gray-300 hover:text-white transition-colors">
                  Eventos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-gray-300 hover:text-white transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Cuidados Médicos</li>
              <li>Nutrição Especializada</li>
              <li>Atividades Físicas</li>
              <li>Estimulação Cognitiva</li>
              <li>Apoio Psicológico</li>
              <li>Cuidado Espiritual</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">(11) 9-9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">contato@larsantaana.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div className="text-gray-300">
                  <p>Rua das Flores, 123</p>
                  <p>Tatuapé - São Paulo/SP</p>
                  <p>CEP: 03010-000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Lar Santa Ana. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};