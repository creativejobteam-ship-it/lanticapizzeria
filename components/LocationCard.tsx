import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { Location } from '../types';

interface LocationCardProps {
  location: Location;
}

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  return (
    <a 
      href={location.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative bg-[#FDFBF7] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full md:h-64 group border border-[#eee8dc]"
    >
      <div className="flex flex-col md:flex-row h-full">
        
        {/* === Left Side: Image that swaps to Map === */}
        <div className="w-full md:w-2/5 h-48 md:h-full relative overflow-hidden bg-gray-100">
          {/* Default Restaurant Image */}
          <img 
            src={location.image} 
            alt={location.name} 
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
          {/* Map Image (Hidden by default, shown on hover) */}
          <img 
            src={location.mapImage} 
            alt="Map View" 
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* === Right Side: Content that swaps to CTA === */}
        <div className="flex-1 p-6 relative flex flex-col justify-center">
          
          {/* Default Text Content */}
          <div className="transition-opacity duration-300 group-hover:opacity-0 flex flex-col h-full justify-center">
            <span className="text-xs text-gray-500 uppercase tracking-wide mb-1 block">{location.address}</span>
            
            {location.phone && (
                <div className="flex items-center gap-2 text-mazzo-green mb-3">
                    <Phone size={14} />
                    <span className="text-sm font-bold">{location.phone}</span>
                </div>
            )}

            <div className="flex items-baseline gap-2 mb-2 flex-wrap">
              <h3 className="text-3xl font-serif text-gray-900">{location.name}</h3>
              <span className={`font-script text-2xl ${location.type === 'Prochainement' ? 'text-mazzo-lime' : 'text-mazzo-red'}`}>
                {location.type === 'Prochainement' ? 'Ouverture prochaine' : 'Ouvert'}
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-2 border-t border-gray-100 pt-2 leading-relaxed whitespace-pre-line">{location.hours}</p>
          </div>

          {/* Hover CTA Content (Overlay) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#FDFBF7]/50 backdrop-blur-sm z-10">
              <div className="bg-mazzo-green text-white p-4 rounded-full mb-3 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                 <MapPin size={32} className="text-[#00ff68]" />
              </div>
              <span className="text-xl font-serif font-bold tracking-wide text-mazzo-green">Voir l'itinéraire</span>
              <span className="text-xs uppercase tracking-widest mt-1 text-gray-500 font-bold">Sur Google Maps</span>
          </div>

        </div>
      </div>
    </a>
  );
};

export default LocationCard;