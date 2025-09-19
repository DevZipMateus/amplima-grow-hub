import { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const images = [
    {
      src: "/lovable-uploads/santiago-empresa.jpg",
      alt: "Empresa Santiago - Exemplo de negócio organizado pela Amplima Consultoria"
    },
    {
      src: "/lovable-uploads/lucelia-sena.jpg", 
      alt: "Lucélia Sena - Cliente da Amplima Consultoria com negócio estruturado"
    },
    {
      src: "/lovable-uploads/frango-dourado.jpg",
      alt: "Frango Dourado - Restaurante com gestão financeira otimizada"
    },
    {
      src: "/lovable-uploads/natuflora.jpg",
      alt: "Natuflora - Loja de produtos naturais com controle financeiro eficiente"
    },
    {
      src: "/lovable-uploads/elegance-cabeleireiros.jpg",
      alt: "Elegance Cabeleireiros - Salão de beleza com planejamento financeiro inteligente"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 3000); // Troca a cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      {/* Main image container */}
      <div className="bg-gradient-primary rounded-3xl p-4 shadow-elegant">
        <div className="relative overflow-hidden rounded-2xl h-64">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-primary w-6' 
                : 'bg-primary/30 hover:bg-primary/60'
            }`}
            aria-label={`Ver imagem ${index + 1}`}
          />
        ))}
      </div>

      {/* Image counter */}
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
  );
};

export default ImageCarousel;