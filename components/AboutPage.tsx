
import React, { useEffect } from 'react';
import { Star, Heart, Award } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-mazzo-cream text-gray-800 font-sans pt-24 pb-20">
      
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-mazzo-lime font-script text-3xl block mb-2">Depuis 2018</span>
          <h1 className="text-5xl md:text-7xl font-serif text-mazzo-green mb-8">Notre Histoire</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            L'ANTICA est née d'une passion simple : celle de la véritable pizza napolitaine, celle qui rassemble, celle qui a du goût.
          </p>
        </div>

        {/* Image Principale */}
        <div className="mb-20 relative rounded-3xl overflow-hidden shadow-2xl h-[50vh]">
            <img 
                src="/assets/images/pizzeria-marengo.png" 
                alt="Chef Pizza" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                    <p className="font-script text-4xl mb-2 text-[#00cf55]">La Tradition</p>
                    <p className="uppercase tracking-widest text-sm opacity-90">Un savoir-faire authentique</p>
                </div>
            </div>
        </div>

        {/* Content Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div>
                <h2 className="text-3xl font-serif text-mazzo-green mb-6">Des produits d'exception</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                    Nous ne faisons aucun compromis sur la qualité. Nos farines viennent d'Italie, nos tomates sont des San Marzano gorgées de soleil, et notre Mozzarella est une Fior di Latte fraîche reçue plusieurs fois par semaine.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-mazzo-green text-white flex items-center justify-center shrink-0">
                            <Award size={20} />
                        </div>
                        <span className="font-serif text-lg">Farine Italienne Type 00</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-mazzo-green text-white flex items-center justify-center shrink-0">
                            <Heart size={20} />
                        </div>
                        <span className="font-serif text-lg">Tomates San Marzano DOP</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-mazzo-green text-white flex items-center justify-center shrink-0">
                            <Star size={20} />
                        </div>
                        <span className="font-serif text-lg">Huile d'olive Extra Vierge</span>
                    </li>
                </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=600&auto=format&fit=crop" alt="Ingredients" className="rounded-2xl w-full h-64 object-cover mt-8 shadow-md" />
                <img src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop" alt="Oven" className="rounded-2xl w-full h-64 object-cover mb-8 shadow-md" />
            </div>
        </div>

        {/* Team Section */}
        <div className="bg-white p-10 rounded-3xl border border-[#eee8dc] text-center">
            <h2 className="text-3xl font-serif text-mazzo-green mb-6">L'équipe</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                En cuisine comme en salle, notre équipe partage la même envie : vous faire passer un bon moment. Souriants, dynamiques et passionnés, nous sommes là pour vous.
            </p>
            <div className="mt-8 pt-8 border-t border-gray-100 font-script text-2xl text-mazzo-red">
                Buon Appetito !
            </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
