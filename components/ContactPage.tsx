
import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-mazzo-cream text-gray-800 font-sans pt-24 pb-20">
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-mazzo-red font-script text-3xl block mb-2">Une question ?</span>
          <h1 className="text-5xl md:text-6xl font-serif text-mazzo-green mb-6">Contactez-nous</h1>
          <div className="w-24 h-1 bg-mazzo-green mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-lg overflow-hidden border border-[#eee8dc]">
            
            {/* Formulaire */}
            <div className="p-8 md:p-12">
                <h3 className="text-2xl font-serif mb-6 text-mazzo-green">Envoyez-nous un message</h3>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Nom</label>
                            <input type="text" className="w-full bg-mazzo-cream border-none p-4 rounded-lg focus:ring-2 focus:ring-[#0d2922] outline-none transition-all" placeholder="Votre nom" />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
                            <input type="email" className="w-full bg-mazzo-cream border-none p-4 rounded-lg focus:ring-2 focus:ring-[#0d2922] outline-none transition-all" placeholder="Votre email" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Sujet</label>
                        <select className="w-full bg-mazzo-cream border-none p-4 rounded-lg focus:ring-2 focus:ring-[#0d2922] outline-none transition-all">
                            <option>Réservation de groupe</option>
                            <option>Privatisation</option>
                            <option>Renseignement</option>
                            <option>Recrutement</option>
                            <option>Autre</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                        <textarea rows={5} className="w-full bg-mazzo-cream border-none p-4 rounded-lg focus:ring-2 focus:ring-[#0d2922] outline-none transition-all" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                    </div>
                    <button type="button" className="w-full bg-mazzo-green text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-[#00cf55] hover:text-white transition-all shadow-md">
                        Envoyer le message
                    </button>
                </form>
            </div>

            {/* Infos Contact */}
            <div className="bg-mazzo-green text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-2xl font-serif mb-8 text-[#00cf55]">Nos Coordonnées</h3>
                    
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <MapPin className="text-[#00cf55] mt-1 shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg">Marengo</h4>
                                <p className="opacity-70 mb-1">44 Rue du général Jean Compans, 31500 Toulouse</p>
                                <p className="font-bold text-[#00cf55]">09 81 31 01 02</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <MapPin className="text-[#00cf55] mt-1 shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg">Borderouge</h4>
                                <p className="opacity-70 mb-1">9 Avenue Maurice Bourges Maunoury, 31200 Toulouse</p>
                                <p className="font-bold text-[#00cf55]">09 83 43 20 81</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/10">
                            <Mail className="text-[#00cf55]" />
                            <p>contact@lanticapizzeria.fr</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 relative z-10">
                    <h4 className="flex items-center gap-2 font-bold mb-4 text-[#00cf55]"><Clock size={18} /> Horaires</h4>
                    <div className="text-sm opacity-80 space-y-2">
                        <div>
                            <p className="font-bold text-white">Lundi au Dimanche</p>
                            <p>11h30 - 14h00 / 18h00 - 23h00</p>
                        </div>
                        <div>
                            <p className="font-bold text-white">Vendredi</p>
                            <p>18h00 - 00h00</p>
                        </div>
                    </div>
                </div>

                {/* Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff68] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-mazzo-red rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
