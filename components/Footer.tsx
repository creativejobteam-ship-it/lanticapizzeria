
import React from 'react';
import { Star, MapPin, Phone, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  // Generic map placeholder
  const mapImage = "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop";

  const socialLinks = {
    facebook: "https://www.facebook.com/lanticapizzeriamarengo",
    instagram: "https://www.instagram.com/lanticapizzeria31"
  };

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden text-mazzo-lime">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop" 
            alt="Pizzeria Interior Background" 
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-mazzo-green/95 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-mazzo-green/80"></div>
      </div>

      {/* Central Illustration / Typo */}
      <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
        
        {/* Sun/Madonna Layout Simulation */}
        <div className="relative mb-16 text-center">
            {/* Arch text - Curve adjusted to be parallel with the circle */}
            <div className="relative h-44 w-96 mx-auto">
                 <svg viewBox="0 0 300 150" className="w-full h-full overflow-visible">
                    <path id="curve" d="M 35 140 A 115 115 0 0 1 265 140" fill="none" />
                    <text width="300">
                        <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle" className="text-4xl font-bold fill-white tracking-widest font-sans uppercase">
                            L'ANTICA PIZZERIA
                        </textPath>
                    </text>
                </svg>
            </div>
            
            {/* Center Image/Icon Placeholder */}
            {/* Border and stars changed to white */}
            <div className="w-48 h-48 mx-auto -mt-20 bg-mazzo-lime/20 rounded-full flex items-center justify-center border-4 border-white relative backdrop-blur-sm">
                 <div className="absolute -left-12 top-1/2 text-white"><Star size={40} fill="white" /></div>
                 <div className="absolute -right-12 top-1/2 text-white"><Star size={40} fill="white" /></div>
                 <img 
                    src="https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=300&auto=format&fit=crop" 
                    alt="Footer Art" 
                    className="w-full h-full object-cover rounded-full opacity-60 mix-blend-overlay"
                 />
            </div>
        </div>

        {/* Address Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-20">
            {/* Card 1 - Marengo */}
            <a 
                href="https://maps.app.goo.gl/waq86RFWXrtrdcDVA"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#aebcb6]/90 backdrop-blur-md text-mazzo-green rounded-lg overflow-hidden h-48 md:h-44 shadow-lg border border-white/10 block cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
            >
                {/* Default Content */}
                <div className="p-6 transition-opacity duration-300 group-hover:opacity-0 h-full relative z-10">
                    <div className="absolute top-0 right-0 bg-[#00cf55] text-white px-3 py-1 text-xs font-bold rounded-bl-lg">Marengo</div>
                    <div className="mt-2">
                        <h4 className="text-xl font-serif font-bold">44 Rue du Gal Jean Compans</h4>
                        <p className="text-lg font-bold mt-1">09 81 31 01 02</p>
                    </div>
                    <div className="absolute bottom-4 left-6 text-xs mt-2 opacity-80">
                        <p>Lun-Dim: 11h30-14h / 18h-23h</p>
                        <p>Vendredi: 18h-00h</p>
                    </div>
                </div>

                {/* Hover Content (Map Background + Overlay) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                     {/* Map Background Image */}
                     <img src={mapImage} className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Map" />
                     <div className="absolute inset-0 bg-mazzo-green/80 flex flex-col items-center justify-center text-white">
                        <MapPin size={32} className="mb-2 text-[#00ff68]" />
                        <span className="text-xl font-serif font-bold tracking-wide">Voir l'itinéraire</span>
                        <span className="text-xs uppercase tracking-widest mt-1 opacity-80">Sur Google Maps</span>
                     </div>
                </div>
            </a>

             {/* Card 2 - Borderouge */}
             <a 
                href="https://maps.app.goo.gl/sURa2rardwTyQbXP7"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#aebcb6]/90 backdrop-blur-md text-mazzo-green rounded-lg overflow-hidden h-48 md:h-44 shadow-lg border border-white/10 block cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
            >
                {/* Default Content */}
                <div className="p-6 transition-opacity duration-300 group-hover:opacity-0 h-full relative z-10">
                    <div className="absolute top-0 right-0 bg-[#00cf55] text-white px-3 py-1 text-xs font-bold rounded-bl-lg">Borderouge</div>
                     <div className="mt-2">
                        <h4 className="text-xl font-serif font-bold">9 Av. M. Bourges Maunoury</h4>
                        <p className="text-lg font-bold mt-1">09 83 43 20 81</p>
                    </div>
                     <div className="absolute bottom-4 left-6 text-xs mt-2 opacity-80">
                        <p>Lun-Dim: 11h30-14h / 18h-23h</p>
                        <p>Vendredi: 18h-00h</p>
                    </div>
                </div>

                {/* Hover Content (Map Background + Overlay) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                     {/* Map Background Image */}
                     <img src={mapImage} className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Map" />
                     <div className="absolute inset-0 bg-mazzo-green/80 flex flex-col items-center justify-center text-white">
                        <MapPin size={32} className="mb-2 text-[#00ff68]" />
                        <span className="text-xl font-serif font-bold tracking-wide">Voir l'itinéraire</span>
                        <span className="text-xs uppercase tracking-widest mt-1 opacity-80">Sur Google Maps</span>
                     </div>
                </div>
            </a>
        </div>

        {/* Bottom Copyright */}
        <div className="w-full border-t border-mazzo-lime/20 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white/50 relative z-10 gap-4">
            <p>© L'ANTICA 2026 - Tous droits réservés</p>
            
            <div className="flex flex-col items-center gap-2">
                 <p className="font-script text-3xl text-white normal-case opacity-80">L'Antica Pizzeria</p>
                 <div className="flex gap-4">
                     <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-mazzo-lime transition-colors">
                        <Facebook size={18} />
                     </a>
                     <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-mazzo-lime transition-colors">
                        <Instagram size={18} />
                     </a>
                 </div>
            </div>

            <div className="flex gap-4">
                <button onClick={() => onNavigate('mentions')} className="hover:text-white transition-colors">Mentions légales</button>
                <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">Politique de confidentialité</button>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
