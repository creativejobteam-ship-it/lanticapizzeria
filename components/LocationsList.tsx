import React from 'react';
import LocationCard from './LocationCard';
import { Location } from '../types';

const locationsData: Location[] = [
  {
    id: 1,
    name: "Marengo",
    address: "44 Rue du général Jean Compans, 31500 Toulouse",
    phone: "09 81 31 01 02",
    type: "Sur place",
    hours: "Lun-Dim: 11h30-14h / 18h-23h\nLe Vendredi: 18h-00h",
    image: "/assets/images/pizzeria-marengo.png",
    mapImage: "https://i.postimg.cc/HWfZprd8/marengo.png",
    link: "https://maps.app.goo.gl/waq86RFWXrtrdcDVA"
  },
  {
    id: 2,
    name: "Borderouge",
    address: "9 Avenue Maurice Bourges Maunoury, 31200 Toulouse",
    phone: "09 83 43 20 81",
    type: "Sur place",
    hours: "Lun-Dim: 11h30-14h / 18h-23h\nLe Vendredi: 18h-00h",
    image: "/assets/images/pizzeria-borderouge.jpg",
    mapImage: "https://i.postimg.cc/pVgG2mRh/borderouge.png",
    link: "https://maps.app.goo.gl/sURa2rardwTyQbXP7"
  }
];

const LocationsList: React.FC = () => {
  return (
    <section id="locations-section" className="py-20 px-4 bg-mazzo-cream">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm mb-2">Nos restaurants à Toulouse</p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Venez nous voir</h2>
        </div>

        <div className="flex flex-col gap-8">
          {locationsData.map((loc) => (
            <LocationCard key={loc.id} location={loc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsList;