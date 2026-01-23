import React, { useEffect } from 'react';

interface MentionsLegalesProps {
  onBack: () => void;
}

const MentionsLegales: React.FC<MentionsLegalesProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-mazzo-cream text-gray-800 font-sans pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-3xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#eee8dc]">
        <h1 className="text-4xl font-serif text-mazzo-green mb-8 text-center">Mentions Légales</h1>
        
        <div className="space-y-6 text-sm leading-relaxed text-gray-600">
          <section>
            <h2 className="text-lg font-bold text-mazzo-green mb-2 uppercase tracking-wide">1. Éditeur du site</h2>
            <p>
              Le site internet <strong>L'ANTICA PIZZERIA</strong> est édité par la société L'ANTICA, Société par Actions Simplifiée (SAS) au capital de 1 000 euros.<br/>
              <strong>Siège social :</strong> 44 Rue du général Jean Compans, 31500 Toulouse, France.<br/>
              <strong>Immatriculation :</strong> RCS Toulouse B 123 456 789.<br/>
              <strong>Numéro de TVA Intracommunautaire :</strong> FR 12 123456789.<br/>
              <strong>Téléphone :</strong> 09 81 31 01 02<br/>
              <strong>Email :</strong> contact@lanticapizzeria.fr
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-mazzo-green mb-2 uppercase tracking-wide">2. Directeur de la publication</h2>
            <p>
              Le directeur de la publication est Monsieur le Gérant de L'ANTICA.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-mazzo-green mb-2 uppercase tracking-wide">3. Hébergement</h2>
            <p>
              Le site est hébergé par Vercel Inc.<br/>
              Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-mazzo-green mb-2 uppercase tracking-wide">4. Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-mazzo-green mb-2 uppercase tracking-wide">5. Responsabilité</h2>
            <p>
              Les informations communiquées sur le site sont fournies à titre indicatif, elles sont non contractuelles et ne sauraient engager la responsabilité de L'ANTICA. L'ANTICA se réserve le droit de modifier le contenu du site à tout moment et sans préavis.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;