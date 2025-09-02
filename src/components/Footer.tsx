import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src="/lovable-uploads/4c990c9b-a3b2-4e9d-9d30-233fe423761c.png"
              alt="Amplima Consultoria"
              className="h-8 w-auto mb-4"
            />
            <p className="text-white/80 mb-6 leading-relaxed">
              Consultoria organizacional especializada em ajudar pequenos empresários a organizarem seus negócios e alcançarem melhores resultados.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/anamarciaperes73"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-smooth"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3 text-white/80">
              <li>
                <a href="#servicos" className="hover:text-white transition-smooth">
                  Consultoria em Liderança
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-smooth">
                  Gestão Financeira
                </a>
              </li>
              <li>
                <a href="#profipe" className="hover:text-white transition-smooth">
                  Programa Profipe
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-smooth">
                  Planejamento Estratégico
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-smooth">
                  Acompanhamento Personalizado
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3 text-white/80">
              <li>
                <a href="#inicio" className="hover:text-white transition-smooth">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-smooth">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-smooth">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#profipe" className="hover:text-white transition-smooth">
                  Programa Profipe
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-smooth">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contato</h3>
            <div className="space-y-4 text-white/80">
              <div className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:6399354511" className="hover:text-white transition-smooth">
                  (63) 9 9935-4511
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:anamarciaperes73@gmail.com" className="hover:text-white transition-smooth break-all">
                  anamarciaperes73@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <div>
                  Av Cônego João Lima 289<br />
                  Palmas - TO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Amplima Consultoria. Todos os direitos reservados.
            </p>
            <p className="text-white/60 text-sm">
              CNPJ: 403.305.833-87
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;