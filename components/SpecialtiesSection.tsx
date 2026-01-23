
import React from 'react';
import { ArrowRight } from 'lucide-react';

// Mapping entre les titres affichés et les clés de filtres du MenuPage
const categories = [
  {
    id: 1,
    title: "Nos Pizzas sauce tomate",
    subtitle: "La tradition Rouge",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000&auto=format&fit=crop",
    colSpan: "md:col-span-2",
    filterKey: "Pizzas Rouges"
  },
  {
    id: 2,
    title: "Nos Pizzas alla crema",
    subtitle: "La douceur Blanche",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop",
    colSpan: "md:col-span-1",
    filterKey: "Pizzas Blanches"
  },
  {
    id: 3,
    title: "Nos Chaussons",
    subtitle: "Calzones gourmands",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1000&auto=format&fit=crop",
    colSpan: "md:col-span-1",
    filterKey: "Calzones"
  },
  {
    id: 4,
    title: "Nos Salades",
    subtitle: "Fraîcheur italienne",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop",
    colSpan: "md:col-span-1",
    filterKey: "Salades"
  },
  {
    id: 5,
    title: "Nos Desserts",
    subtitle: "Dolce Vita",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1000&auto=format&fit=crop",
    colSpan: "md:col-span-1",
    filterKey: "Desserts"
  }
];

interface SpecialtiesSectionProps {
  onCategoryClick: (category: string) => void;
}

const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({ onCategoryClick }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-mazzo-red font-script text-3xl block mb-2">Découvrir</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Nos Spécialités</h2>
          <div className="w-24 h-1 bg-mazzo-green mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => onCategoryClick(cat.filterKey)}
              className={`relative group overflow-hidden rounded-2xl h-80 ${cat.colSpan} cursor-pointer shadow-sm`}
            >
              {/* Background Image with Zoom Effect */}
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#00cf55] px-3 py-1 rounded-full mb-3 inline-block opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300 shadow-md">
                  {cat.subtitle}
                </span>
                <div className="flex justify-between items-end">
                  <h3 className="text-2xl md:text-3xl font-serif leading-tight">
                    {cat.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-black">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
            <button 
                onClick={() => onCategoryClick('Pizzas Rouges')}
                className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-mazzo-red hover:border-mazzo-red transition-colors"
            >
                Voir toute la carte
            </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
