import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Não deixe suas finanças no escuro.
          </h2>
          
          <p className="text-2xl md:text-3xl text-white/90 mb-12 leading-relaxed">
            Transforme seu negócio com planejamento financeiro inteligente.
          </p>

          <Button 
            variant="hero" 
            size="lg" 
            asChild 
            className="group text-xl px-12 py-6 h-auto"
          >
            <a href="https://wa.me/5563999354511">
              Agendar Consultoria
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-smooth" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;