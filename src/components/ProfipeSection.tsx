import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, BarChart3, Calculator, Target, Users, ArrowRight } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Controle Financeiro Completo",
    description: "Aprenda a organizar e controlar todas as finanças do seu negócio"
  },
  {
    icon: TrendingUp,
    title: "Análise de Resultados",
    description: "Entenda os números do seu negócio e identifique oportunidades"
  },
  {
    icon: Calculator,
    title: "Ferramentas Práticas",
    description: "Utilize planilhas e métodos testados para gestão eficiente"
  },
  {
    icon: Target,
    title: "Metas e Indicadores",
    description: "Defina objetivos claros e acompanhe o progresso do negócio"
  }
];

const benefits = [
  "Controle total sobre as finanças da empresa",
  "Redução de custos desnecessários",
  "Aumento da lucratividade",
  "Tomada de decisões baseada em dados",
  "Planejamento financeiro estratégico",
  "Organização de processos financeiros"
];

const ProfipeSection = () => {
  return (
    <section id="profipe" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-secondary opacity-10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-full mb-6 shadow-elegant">
            <Calculator size={20} />
            <span className="font-semibold">Programa Especializado</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Programa 
            <span className="text-gradient-primary"> Profipe</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Um programa completo de gestão financeira desenvolvido especialmente para pequenos empresários 
            que querem ter controle total sobre suas finanças e aumentar a eficiência do negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          
          {/* Features */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              O que você vai aprender no Profipe:
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card 
                    key={index} 
                    className="border-0 shadow-soft bg-white/60 backdrop-blur-sm hover:shadow-elegant transition-bounce group"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                        <IconComponent className="text-primary" size={24} />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="bg-gradient-primary rounded-2xl p-8 text-white shadow-elegant">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Users size={24} />
                Resultados Comprovados
              </h4>
              <p className="text-white/90 mb-4">
                Empresários que passaram pelo Programa Profipe relatam:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-1">85%</div>
                  <div className="text-white/80">Melhoria no controle financeiro</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-1">70%</div>
                  <div className="text-white/80">Aumento da lucratividade</div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="bg-muted/50 rounded-3xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Benefícios do Programa:
              </h3>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 animate-fade-in-up" 
                    style={{animationDelay: `${0.4 + index * 0.1}s`}}
                  >
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-secondary rounded-2xl p-6 text-white text-center shadow-elegant">
                <h4 className="text-xl font-bold mb-2">Investimento</h4>
                <div className="text-3xl font-bold mb-2">Consulte-nos</div>
                <p className="text-white/80 text-sm mb-4">
                  Valor especial para primeiros participantes
                </p>
                <Button variant="hero" asChild className="group">
                  <a href="https://wa.me/5563999354511">
                    Quero participar do Profipe
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center animate-fade-in-up">
          <div className="bg-white rounded-3xl p-12 shadow-elegant border">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Transforme a gestão financeira do seu negócio
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Junte-se aos empresários que já estão colhendo os frutos de uma gestão financeira 
              profissional e organizada com o Programa Profipe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild className="group">
                <a href="https://wa.me/5563999354511">
                  Solicitar informações
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:6399354511">
                  Ligar agora: (63) 9 9935-4511
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfipeSection;