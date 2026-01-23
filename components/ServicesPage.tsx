
import React, { useEffect } from 'react';
import { Utensils, ShoppingBag, Bike, PartyPopper } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ServicesPageProps {
  onBack: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onBack }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Utensils size={40} />,
      title: "Restauration sur place",
      description: "Profitez de notre ambiance chaleureuse et de notre décoration soignée pour déguster nos pizzas sortant tout juste du four. Un service attentionné pour un moment de détente à l'italienne.",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <ShoppingBag size={40} />,
      title: "À emporter",
      description: "Passez commande par téléphone ou sur place et repartez avec vos pizzas chaudes en quelques minutes. Idéal pour une soirée à la maison sans cuisiner.",
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Bike size={40} />,
      title: "Livraison",
      description: "Retrouvez L'ANTICA chez vous grâce à nos partenaires UberEats et Deliveroo. La qualité de nos produits, livrée directement à votre porte.",
      image: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <PartyPopper size={40} />,
      title: "Événements & Privatisations",
      description: "Un anniversaire ? Un repas d'entreprise ? Privatisez une partie de notre restaurant ou commandez en grande quantité pour vos événements. Contactez-nous pour un devis.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-mazzo-cream text-gray-800 font-sans pt-24 pb-20">
      
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-mazzo-red font-script text-3xl block mb-2">Notre savoir-faire</span>
          <h1 className="text-5xl md:text-6xl font-serif text-mazzo-green mb-6">Nos Services</h1>
          <div className="w-24 h-1 bg-mazzo-green mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#eee8dc]">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-full text-mazzo-green shadow-md">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-mazzo-green mb-4 group-hover:text-mazzo-red transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center bg-mazzo-green text-white p-12 rounded-3xl relative overflow-hidden">
            <div className="relative z-10">
                <h3 className="text-3xl font-serif mb-4">Besoin d'un service particulier ?</h3>
                <p className="mb-8 opacity-80 max-w-2xl mx-auto">N'hésitez pas à nous contacter pour toute demande spécifique, nous ferons notre possible pour répondre à vos attentes.</p>
                <button onClick={() => navigate('/contact')} className="bg-[#00cf55] text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-mazzo-green transition-colors shadow-lg">
                    Nous contacter
                </button>
            </div>
            {/* Decorative pattern opacity */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;
