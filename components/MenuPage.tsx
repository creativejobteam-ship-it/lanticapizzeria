
import React, { useState, useEffect, useRef } from 'react';
import { Leaf, Wheat } from 'lucide-react';
import { menuItems, categories } from '../data/menuData';

interface MenuPageProps {
  initialCategory: string;
  onBack: () => void;
}

const MenuPage: React.FC<MenuPageProps> = ({ initialCategory }) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const cursorImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  // Gestion du mouvement de la souris pour l'image flottante
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorImageRef.current) {
        // On décale légèrement l'image pour qu'elle ne soit pas pile sous le curseur (lecture du texte)
        const x = e.clientX + 20;
        const y = e.clientY + 20;

        // Utilisation de transform pour la performance (évite le re-layout)
        cursorImageRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  const getCategorySubtitle = (cat: string) => {
    switch (cat) {
      case "Pizzas Rouges": return "Nos pizzas sauce tomate";
      case "Pizzas Blanches": return "Nos pizzas alla crema";
      case "Calzones": return "Nos Chaussons";
      case "Salades": return "Nos Salades Fraîches";
      case "Desserts": return "Douceurs Sucrées";
      default: return "La Carte";
    }
  };

  return (
    <div className="min-h-screen bg-mazzo-cream text-gray-800 font-sans pt-24 pb-20 cursor-default">

      {/* FLOATING CURSOR IMAGE (Hidden on mobile via md:block) */}
      <div
        ref={cursorImageRef}
        className={`hidden md:block fixed top-0 left-0 w-[175px] h-[175px] rounded-full border-4 border-white shadow-2xl overflow-hidden pointer-events-none z-[60] transition-opacity duration-300 ease-out ${hoveredImage ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        style={{ willChange: 'transform' }}
      >
        {hoveredImage && (
          <img
            src={hoveredImage}
            alt="Preview"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "/assets/images/no-image-available.png";
            }}
          />
        )}
      </div>

      {/* Titre Page */}
      <div className="text-center mb-12 relative px-4">
        <h1 className="text-4xl md:text-6xl font-serif mb-2 text-mazzo-green">{getCategorySubtitle(activeCategory)}</h1>
        <div className="w-16 h-1 bg-mazzo-red mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Filtres Catégories */}
      <div className="sticky top-20 z-40 bg-mazzo-cream/95 border-b border-gray-200 mb-12 shadow-sm transition-all duration-300">
        {/* Filler pour combler l'espace vide au-dessus lors du scroll */}
        <div className="absolute bottom-full left-0 w-full h-12 bg-mazzo-cream/95"></div>
        <div className="container mx-auto px-4 overflow-x-auto hide-scrollbar">
          <div className="flex justify-start md:justify-center gap-8 min-w-max pb-4 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-lg font-serif transition-all duration-300 relative px-4 py-2 rounded-full ${activeCategory === cat
                  ? 'bg-mazzo-green text-white shadow-md'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Liste des Plats */}
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative"
              onMouseEnter={() => setHoveredImage(item.image)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              {/* === VERSION MOBILE (Image à droite, fixe) === */}
              <div className="flex md:hidden gap-4 items-start pb-6 border-b border-dashed border-gray-300 last:border-0">
                <div className="flex-1 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold font-serif text-gray-900 leading-tight">
                        {item.name}
                      </h3>
                      {item.isVegetarian && (
                        <Leaf size={14} className="text-green-600 shrink-0" aria-label="Végétarien" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 leading-snug line-clamp-2 mb-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-1">
                    {item.prices.map((p, idx) => (
                      <span key={idx} className="text-sm font-bold text-mazzo-green bg-white px-2 py-1 rounded border border-gray-200 shadow-sm">
                        {p.label && <span className="text-gray-400 font-normal mr-1 text-xs">{p.label}</span>}
                        {p.value}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Image Thumbnail Mobile */}
                <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/images/no-image-available.png";
                    }}
                  />
                </div>
              </div>

              {/* === VERSION DESKTOP (Image au survol, design épuré, layout original) === */}
              <div className="hidden md:flex flex-col gap-4">
                {/* Header Item */}
                <div className="flex justify-between items-center border-b border-dashed border-gray-300 pb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-3xl font-bold font-serif text-gray-900 group-hover:text-mazzo-red transition-colors">
                      {item.name}
                    </h3>
                    {item.isVegetarian && (
                      <Leaf size={16} className="text-green-600" aria-label="Végétarien" />
                    )}
                  </div>

                  {/* Prix Display */}
                  <div className="flex flex-col items-end text-lg font-bold text-mazzo-green">
                    {item.prices.map((p, idx) => (
                      <span key={idx} className="whitespace-nowrap">
                        {p.label && <span className="text-sm text-gray-400 font-normal mr-1">{p.label}</span>}
                        {p.value}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="flex gap-4">
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Suppléments Footer Section */}
        <div className="mt-20 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          {activeCategory.includes("Pizza") && (
            <div className="flex items-center justify-center gap-2">
              <Wheat size={16} />
              <span>Supplément Pâte aux 7 céréales : <span className="font-bold text-mazzo-red">+1,50€</span></span>
            </div>
          )}
          {activeCategory === "Salades" && (
            <span>Supplément Pain à pizza : <span className="font-bold text-mazzo-red">+1,50€</span></span>
          )}
          {filteredItems.length === 0 && (
            <p>Aucun plat disponible pour le moment.</p>
          )}
        </div>
      </div>

    </div>
  );
};

export default MenuPage;
