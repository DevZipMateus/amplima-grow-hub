import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Target } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                Consultoria Especializada
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Organize seu negócio e 
              <span className="text-gradient-primary"> alcance melhores resultados</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-lg">
              Apoiamos pequenos empresários com consultoria em liderança, gestão financeira e planejamento estratégico para decisões mais seguras e lucratividade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="lg" asChild className="group">
                <a href="https://wa.me/5563999354511">
                  Quero uma consultoria
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                </a>
              </Button>
              
              <Button variant="outline-light" size="lg" asChild>
                <a href="#sobre">
                  Conhecer a Amplima
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">+50</div>
                <div className="text-white/80 text-sm">Empresários atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">5+</div>
                <div className="text-white/80 text-sm">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-white/80 text-sm">Foco em resultados</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              {/* Main graphic container */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-elegant">
                <div className="grid grid-cols-2 gap-6">
                  
                  {/* Leadership card */}
                  <div className="bg-white/20 rounded-2xl p-6 text-center transition-bounce hover:scale-105">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Users className="text-white" size={24} />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Liderança</h3>
                    <p className="text-white/80 text-sm">Desenvolva habilidades de gestão</p>
                  </div>

                  {/* Growth card */}
                  <div className="bg-white/20 rounded-2xl p-6 text-center transition-bounce hover:scale-105" style={{animationDelay: '0.1s'}}>
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="text-white" size={24} />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Crescimento</h3>
                    <p className="text-white/80 text-sm">Aumente sua lucratividade</p>
                  </div>

                  {/* Strategy card - spans both columns */}
                  <div className="col-span-2 bg-white/20 rounded-2xl p-6 text-center transition-bounce hover:scale-105" style={{animationDelay: '0.2s'}}>
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Target className="text-white" size={24} />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Planejamento Estratégico</h3>
                    <p className="text-white/80 text-sm">Defina metas e tome decisões com segurança</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary/20 rounded-full animate-pulse-slow" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/20 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;