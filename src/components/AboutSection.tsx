import { Users, Award, Target, Heart } from "lucide-react";

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
            <div className="relative">
              {/* Main image container */}
              <div className="bg-gradient-primary rounded-3xl p-4 shadow-elegant">
                <img 
                  src="/lovable-uploads/ee5e8107-6bb9-42e1-a12a-4357b6b9dc6a.png"
                  alt="Equipe da Amplima Consultoria trabalhando em reunião de planejamento estratégico"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-elegant p-6 border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">+50</div>
                  <div className="text-muted-foreground text-sm">Empresários atendidos</div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-elegant p-6 border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">100%</div>
                  <div className="text-muted-foreground text-sm">Foco em resultados</div>
                </div>
              </div>

              {/* Background elements */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse-slow" />
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1.5s'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;