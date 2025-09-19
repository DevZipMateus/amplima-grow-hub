import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, Target, TrendingUp, UserCheck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: DollarSign,
    title: "Fechamento de mês",
    description: "Tenha total controle sobre entradas, saídas e saldo do seu negócio.",
    features: ["Controle de entradas", "Gestão de saídas", "Análise de saldo", "Relatórios mensais"],
    color: "primary"
  },
  {
    icon: Target,
    title: "Precificação inteligente",
    description: "Defina preços justos que garantam lucro e competitividade.",
    features: ["Análise de custos", "Margem de lucro", "Competitividade", "Estratégias de preços"],
    color: "secondary"
  },
  {
    icon: TrendingUp,
    title: "Gestão de descontos",
    description: "Saiba quando e quanto conceder sem comprometer o resultado.",
    features: ["Política de descontos", "Impacto no lucro", "Negociação estratégica", "Controle de margens"],
    color: "accent"
  },
  {
    icon: Users,
    title: "Cálculo do pró-labore",
    description: "Retire do negócio o que é justo, sem prejudicar a saúde financeira da empresa.",
    features: ["Retirada segura", "Saúde financeira", "Planejamento pessoal", "Sustentabilidade"],
    color: "primary"
  },
  {
    icon: UserCheck,
    title: "Planejamento financeiro personalizado",
    description: "Estratégias práticas para organizar e crescer seu negócio.",
    features: ["Estratégias personalizadas", "Crescimento sustentável", "Organização financeira", "Metas realistas"],
    color: "secondary"
  }
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            O que 
            <span className="text-gradient-primary"> oferecemos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos consultoria especializada em todas as áreas críticas para o sucesso 
            do seu empreendimento, com foco prático e resultados mensuráveis.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const colorClasses = {
              primary: "bg-primary/10 text-primary border-primary/20",
              secondary: "bg-secondary/10 text-secondary border-secondary/20", 
              accent: "bg-accent/10 text-accent border-accent/20"
            };

            return (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-bounce border-0 shadow-soft bg-white/80 backdrop-blur-sm animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 border-2 ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                    <IconComponent size={32} />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                    asChild
                  >
                    <a href="https://wa.me/5563999354511">
                      Saber mais
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-smooth" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-hero rounded-3xl p-12 text-center shadow-elegant animate-fade-in-up">
          <h3 className="text-3xl font-bold text-white mb-4">
            Pronto para transformar seu negócio?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossa consultoria pode 
            ajudar você a alcançar melhores resultados e organizar sua empresa.
          </p>
          <Button variant="hero" size="lg" asChild className="group">
            <a href="https://wa.me/5563999354511">
              Solicitar consultoria gratuita
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;