import React, { useEffect } from 'react';

interface PolitiqueConfidentialiteProps {
  onBack: () => void;
}

const PolitiqueConfidentialite: React.FC<PolitiqueConfidentialiteProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-mazzo-cream text-gray-800 font-sans pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-3xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#eee8dc]">
        <h1 className="text-4xl font-serif text-mazzo-green mb-8 text-center">Politique de Confidentialité</h1>
        
        <div className="space-y-6 text-sm leading-relaxed text-gray-600">
          <section>
            <h2 className="text-lg font-bold text-mazzo-green mb-2 uppercase tracking-wide">1. Collecte des données</h2>
            <p>
              L'ANTICA Pizzeria est soucieuse de la protection des données personnelles. Nous collectons des informations lorsque vous utilisez notre formulaire de contact, passez une commande ou réservez une table. Les informations collectées incluent votre nom, votre adresse e-mail, votre numéro de téléphone et, dans le cas d'une livraison, votre adresse postale.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-mazzo-green mb-2 uppercase tracking-wide">2. Utilisation des données</h2>
            <p>
              Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Personnaliser votre expérience et répondre à vos besoins individuels.</li>
                <li>Améliorer notre site Web.</li>
                <li>Améliorer le service client et vos besoins de prise en charge.</li>
                <li>Vous contacter par e-mail ou téléphone concernant votre commande ou réservation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-mazzo-green mb-2 uppercase tracking-wide">3. Confidentialité du commerce en ligne</h2>
            <p>
              Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n'importe quelle raison, sans votre consentement, en dehors de ce qui est nécessaire pour répondre à une demande et / ou une transaction, comme par exemple pour expédier une commande.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-mazzo-green mb-2 uppercase tracking-wide">4. Protection des informations</h2>
            <p>
              Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-mazzo-green mb-2 uppercase tracking-wide">5. Cookies</h2>
            <p>
              Nos cookies améliorent l'accès à notre site et identifient les visiteurs réguliers. En outre, nos cookies améliorent l'expérience d'utilisateur grâce au suivi et au ciblage de ses intérêts. Cependant, cette utilisation des cookies n'est en aucune façon liée à des informations personnelles identifiables sur notre site.
            </p>
          </section>
          
          <section>
            <h2 className="text-lg font-bold text-mazzo-green mb-2 uppercase tracking-wide">6. Consentement</h2>
            <p>
              En utilisant notre site, vous consentez à notre politique de confidentialité.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;