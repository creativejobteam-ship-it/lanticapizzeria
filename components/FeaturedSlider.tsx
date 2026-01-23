import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620374645310-f9d97e733268?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=80&w=2000&auto=format&fit=crop"
];

const titles = [
  { subtitle: "Nos italian bowls", title: "Parma & Gorgonzola" },
  { subtitle: "Nos pizzas signatures", title: "La Truffe Noire" },
  { subtitle: "Nos pâtes fraîches", title: "Linguine aux Palourdes" }
];

const FeaturedSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] bg-gray-900 overflow-hidden group">
      {/* Background Images with Transition */}
      {images.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ backgroundImage: `url("${img}")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>
      ))}

      {/* Top Label - Centered & Stacked */}
      <div className="absolute top-10 inset-x-0 z-10 flex flex-col items-center justify-center gap-4">
        <span className="text-gray-900 text-sm font-bold uppercase tracking-widest bg-white/90 px-4 py-1 rounded-full backdrop-blur-sm shadow-sm">
          Ces recettes font carton plein
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-gray-900 bg-white/90 px-6 py-2 rounded-lg backdrop-blur-sm shadow-lg text-center">
          À déguster en ce moment
        </h2>
      </div>

      {/* Bottom Content (Dynamic) */}
      <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col items-center text-center text-white z-10 transition-all duration-500">
        <span className="text-sm text-gray-300 uppercase tracking-widest mb-2 block animate-in slide-in-from-bottom-2 fade-in duration-700 key={currentIndex}">
            {titles[currentIndex].subtitle}
        </span>
        <h3 className="text-4xl md:text-6xl font-serif mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-100 key={currentIndex + '-title'}">
            {titles[currentIndex].title}
        </h3>
        
        {/* Indicators */}
        <div className="flex gap-2 mb-4">
            {images.map((_, idx) => (
                <div 
                    key={idx} 
                    className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
                />
            ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-4 md:left-10 transform -translate-y-1/2 z-20">
        <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all backdrop-blur-sm"
        >
          <ArrowLeft size={20} />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 md:right-10 transform -translate-y-1/2 z-20">
        <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all backdrop-blur-sm"
        >
          <ArrowRight size={20} />
        </button>
      </div>
      
    </section>
  );
};

export default FeaturedSlider;