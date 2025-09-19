import { Users, Award, Target, Heart } from "lucide-react";
import ImageCarousel from "./ImageCarousel";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                Quem Somos
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Sobre a 
              <span className="text-gradient-primary"> Amplima Consultoria</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Na Amplima Consultoria, ajudamos pequenos empresários a organizar suas finanças e transformar números em decisões inteligentes. Nossa missão é dar clareza sobre o fluxo de dinheiro do seu negócio, ensinar precificação correta, gestão de descontos e cálculo seguro do pró-labore, para que você possa crescer com confiança e segurança.
            </p>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Experiência Prática</h3>
                  <p className="text-muted-foreground text-sm">
                    Conhecimento real do dia a dia do pequeno empresário
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Award className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Formação Sólida</h3>
                  <p className="text-muted-foreground text-sm">
                    Especialização em marketing e gestão financeira
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Target className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Foco em Resultados</h3>
                  <p className="text-muted-foreground text-sm">
                    Orientação prática para decisões mais assertivas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Heart className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Compromisso</h3>
                  <p className="text-muted-foreground text-sm">
                    Dedicação genuína ao sucesso do seu negócio
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual element */}
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <ImageCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;