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
  return <footer className="bg-white text-foreground border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-red-400" />
              <h3 className="text-2xl font-bold">Lar Santa Ana</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed">Mais de 15 anos dedicados ao cuidado de idosos com amor, respeito e profissionalismo no coração de Tatuapé.</p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/lar_santa_ana/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/residencialsantaana/?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <button onClick={() => scrollToSection('contact')} className="text-foreground/60 hover:text-accent transition-colors">
                <MessageCircle className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-950">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("home")} className="transition-colors text-inherit">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="text-foreground/70 hover:text-primary transition-colors">
                  Sobre Nós
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-foreground/70 hover:text-primary transition-colors">
                  Serviços
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("events")} className="text-foreground/70 hover:text-primary transition-colors">
                  Eventos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-foreground/70 hover:text-primary transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-4 font-semibold text-slate-950">Nossos Serviços</h4>
            <ul className="space-y-2 text-foreground/70">
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
            <h4 className="text-lg font-semibold mb-4 text-slate-950">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-foreground/80">(11) 2537-2024</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <div className="text-foreground/80">
                  <p>dani.chimbata@outlook.com</p>
                  <p>fabi.gomes.fisio@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div className="text-foreground/80">
                  <p>Rua Santa Gertrudes, 59</p>
                  <p>Tatuapé - São Paulo/SP</p>
                  <p>CEP: 03408-020</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm">© 2025 Lar Santa Ana. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};