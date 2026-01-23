
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToLocations = () => {
    const element = document.getElementById('locations-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <iframe 
          className="absolute top-1/2 left-1/2 w-[177.77vh] h-full min-w-full min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2 object-cover"
          src="https://www.youtube.com/embed/OJmVs416a78?autoplay=1&mute=1&loop=1&playlist=OJmVs416a78&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playsinline=1&iv_load_policy=3" 
          title="Background Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style={{ border: 'none' }}
        ></iframe>
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <span className="text-white/80 text-sm uppercase tracking-widest mb-4">Pizzas • Sandwichs • Pâtes • Bowls</span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif italic max-w-4xl leading-tight">
          Des saveurs, du goût <br/>
          <span className="not-italic">et du plaisir surtout.</span>
        </h1>
      </div>

      {/* Bottom CTA */}
      <div 
        onClick={scrollToLocations}
        className="absolute bottom-10 left-0 w-full flex flex-col items-center text-white cursor-pointer animate-bounce hover:text-[#00cf55] transition-colors"
      >
        <span className="text-xs uppercase tracking-widest mb-2">Découvrez nos adresses</span>
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
