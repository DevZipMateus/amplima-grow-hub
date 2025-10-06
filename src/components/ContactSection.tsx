import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide mb-4 block">
            Entre em Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Vamos conversar sobre o 
            <span className="text-gradient-primary"> seu negócio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para ajudar você a transformar sua empresa. 
            Entre em contato e agende uma conversa gratuita.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 animate-fade-in-up">
            <div className="space-y-6">
              
              {/* Phone */}
              <Card className="border-0 shadow-soft bg-white/80 backdrop-blur-sm hover:shadow-elegant transition-bounce">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Telefone</h3>
                      <a 
                        href="tel:6399354511"
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        (63) 9 9935-4511
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="border-0 shadow-soft bg-white/80 backdrop-blur-sm hover:shadow-elegant transition-bounce">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Email</h3>
                      <a 
                        href="mailto:anamarciaperes73@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-smooth break-all"
                      >
                        anamarciaperes73@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Instagram */}
              <Card className="border-0 shadow-soft bg-white/80 backdrop-blur-sm hover:shadow-elegant transition-bounce">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Instagram className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Instagram</h3>
                      <a 
                        href="https://instagram.com/anamarciaperes73"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        @anamarciaperes73
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Contact Form */}
            <Card className="border-0 shadow-soft bg-white/80 backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <MessageCircle className="text-primary" size={28} />
                  Envie sua mensagem
                </CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo ou entre em contato diretamente pelo WhatsApp.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome *
                    </label>
                    <Input 
                      placeholder="Seu nome completo"
                      className="border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Empresa
                    </label>
                    <Input 
                      placeholder="Nome da sua empresa"
                      className="border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input 
                      type="email"
                      placeholder="seu@email.com"
                      className="border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefone *
                    </label>
                    <Input 
                      type="tel"
                      placeholder="(00) 0 0000-0000"
                      className="border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <Textarea 
                    placeholder="Conte-nos sobre seu negócio e como podemos ajudar..."
                    rows={5}
                    className="border-border/50 focus:border-primary transition-smooth resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 group">
                    Enviar mensagem
                    <Mail className="ml-2 h-4 w-4 group-hover:scale-110 transition-smooth" />
                  </Button>
                  <Button variant="outline" asChild className="flex-1 group">
                    <a href="https://wa.me/5563999354511">
                      WhatsApp direto
                      <MessageCircle className="ml-2 h-4 w-4 group-hover:scale-110 transition-smooth" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;