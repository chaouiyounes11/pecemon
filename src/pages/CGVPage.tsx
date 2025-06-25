import {
  ArrowLeft,
  CreditCard,
  FileText,
  Headphones,
  MapPin,
  Package,
  RotateCcw,
  Shield,
} from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const CGVPage = () => {
  const sections = [
    {
      id: '1',
      icon: FileText,
      title: 'Informations générales',
      content: [
        'Pécémon est une micro-entreprise enregistrée sous le SIRET 82281490100051 au RCS de Lille, située au 879 Avenue de la République, 59700 Marcq-en-Baroeul.',
        'Email de contact : pecemon.contact@gmail.com',
        'Responsable de la publication : Le Fondateur',
        'Hébergeur du site : Vercel',
        'Activité : vente exclusive de PC portables reconditionnés fournis avec housse et chargeur, garantis 1 an.',
      ],
    },
    {
      id: '2',
      icon: MapPin,
      title: 'Zone de livraison',
      content: [
        'Les livraisons sont assurées en France et en Europe via Chronopost, avec expédition sous 48h après validation de la commande.',
        'Un numéro de suivi est systématiquement transmis.',
      ],
    },
    {
      id: '3',
      icon: Package,
      title: 'Produits',
      content: [
        "Tous les PC sont issus de parc d'entreprise.",
        'Nous avons fait le choix de sélectionner les 3 meilleures marques de PC: HP, Dell, Lenovo',
        'Chaque PC vendu est fonctionnel, testé et classé par gamme (Herbe, Eau, Feu) selon ses performances techniques et son état esthétique.',
        "Aucune fiche technique individuelle n'est fournie.",
        'Tous les modèles sont livrés avec housse et chargeur, garantis 1 an.',
      ],
    },
  ];

  const paymentMethods = [
    { name: 'Carte bancaire', provider: 'Stripe' },
    { name: 'PayPal', provider: 'PayPal' },
    { name: 'Apple Pay', provider: 'Apple' },
    { name: 'Paiement 3x', provider: 'Klarna' },
  ];

  const pecemonPrices = [
    { type: 'Pécémon Herbe', price: '199,99 €' },
    { type: 'Pécémon Eau', price: '249,99 €' },
    { type: 'Pécémon Feu', price: '349,99 €' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <a
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </a>
          </div>

          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <FileText className="h-8 w-8 text-gray-700 mr-3" />
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Conditions Générales de Vente
            </h1>

            <div className="bg-gray-100 rounded-lg px-4 py-2 inline-block mb-6">
              <p className="text-sm text-gray-600">
                Date de mise à jour :{' '}
                <span className="font-semibold text-gray-900">Juin 2025</span>
              </p>
            </div>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Les présentes conditions générales de vente régissent les
              relations contractuelles entre Pécémon et ses clients.
            </p>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <div
                key={section.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="bg-white rounded-full p-3 mr-4 shadow-sm">
                      <IconComponent className="h-6 w-6 text-gray-700" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {section.id}. {section.title}
                    </h2>
                  </div>
                </div>

                <div className="px-8 py-6">
                  <div className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <p
                        key={itemIndex}
                        className="text-gray-700 leading-relaxed"
                      >
                        {item.includes('@') ? (
                          <>
                            {item.split('pecemon.contact@gmail.com')[0]}
                            <a
                              href="mailto:pecemon.contact@gmail.com"
                              className="text-blue-600 hover:text-blue-700 underline"
                            >
                              pecemon.contact@gmail.com
                            </a>
                            {item.split('pecemon.contact@gmail.com')[1]}
                          </>
                        ) : (
                          item
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl border border-blue-200 overflow-hidden">
            <div className="bg-blue-100 px-8 py-6 border-b border-blue-200">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-3 mr-4 shadow-sm">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  4. Modalités de paiement
                </h2>
              </div>
            </div>

            <div className="px-8 py-6 space-y-8">
              {/* Acompte et réservation */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Acompte et réservation
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Le client peut choisir de réserver un Pécémon en versant un{' '}
                    <span className="font-semibold text-gray-900">
                      acompte de 50 €
                    </span>
                    . Ce versement lui permet de bloquer son tarif actuel
                    jusqu'au{' '}
                    <span className="font-semibold text-gray-900">
                      30 septembre 2025
                    </span>
                    . Il pourra choisir son modèle à tout moment avant cette
                    date dans la limite des stocks disponibles.
                  </p>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-yellow-800">
                      <span className="font-semibold">Important :</span>{' '}
                      L'acompte est non remboursable, sauf en cas
                      d'indisponibilité définitive du produit.
                    </p>
                  </div>

                  <p>
                    Si aucun modèle correspondant n'est proposé avant le 30
                    septembre 2025, l'acompte sera intégralement remboursé sous
                    7 jours ouvrés.
                  </p>

                  <p>
                    En cas d'annulation par le client sans motif valable ou hors
                    délai, l'acompte est conservé à titre de dédommagement.
                  </p>
                </div>
              </div>

              {/* Paiement comptant */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Paiement comptant
                </h3>
                <p className="text-gray-700 mb-4">
                  Les clients peuvent également acheter leur Pécémon directement
                  au prix affiché :
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {pecemonPrices.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 text-center"
                    >
                      <div className="font-semibold text-gray-900">
                        {item.type}
                      </div>
                      <div className="text-2xl font-bold text-blue-600 mt-2">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-3">
                    Moyens de paiement acceptés :
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {paymentMethods.map((method, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-white rounded-lg p-3"
                      >
                        <span className="text-gray-900 font-medium">
                          {method.name}
                        </span>
                        <span className="text-sm text-gray-600">
                          ({method.provider})
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surprise Pikabook */}
      {/* <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 rounded-2xl border border-yellow-200 overflow-hidden">
            <div className="bg-yellow-100 px-8 py-6 border-b border-yellow-200">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-3 mr-4 shadow-sm">
                  <Gift className="h-6 w-6 text-yellow-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Surprise Pikabook
                </h2>
              </div>
            </div>

            <div className="px-8 py-6">
              <p className="text-gray-700 leading-relaxed">
                Chaque mois, un Pécémon Feu est remplacé par un MacBook Pro
                d'une valeur supérieure à 400 €. Il ne s'agit ni d'un concours,
                ni d'une loterie : c'est une surprise offerte à un client sans
                condition, dans le cadre de notre engagement qualité.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Returns and SAV */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Rétractation */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-3 mr-4 shadow-sm">
                  <RotateCcw className="h-6 w-6 text-gray-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  5. Rétractation et retours
                </h2>
              </div>
            </div>

            <div className="px-8 py-6 space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Le client dispose d'un délai de{' '}
                <span className="font-semibold text-gray-900">14 jours</span> à
                compter de la réception pour exercer son droit de rétractation.
                Le produit doit être renvoyé dans son état d'origine, non
                utilisé, avec son emballage.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 mb-2">
                    Frais de retour :
                  </h3>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>
                      • Pris en charge par Pécémon si le produit reçu est non
                      conforme ou défectueux
                    </li>
                    <li>• À la charge du client en cas de changement d'avis</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">
                    Remboursement :
                  </h3>
                  <p className="text-green-700 text-sm">
                    Effectué dans un délai de 7 jours après réception et
                    validation du retour.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SAV */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-3 mr-4 shadow-sm">
                  <Headphones className="h-6 w-6 text-gray-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  6. Service après-vente (SAV)
                </h2>
              </div>
            </div>

            <div className="px-8 py-6">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Toute demande de SAV peut être faite via email à{' '}
                  <a
                    href="mailto:pecemon.contact@gmail.com"
                    className="text-blue-600 hover:text-blue-700 underline font-semibold"
                  >
                    pecemon.contact@gmail.com
                  </a>{' '}
                  ou par WhatsApp.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="bg-blue-100 rounded-full p-2 mr-3">
                      <Headphones className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-blue-800">
                        Délai de réponse garanti
                      </div>
                      <div className="text-blue-700 text-sm">24h maximum</div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm">
                  Adresse de retour communiquée sur demande.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Données personnelles */}
          <div className="bg-blue-50 rounded-2xl border border-blue-200 p-8">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">
                7. Données personnelles & cookies
              </h2>
            </div>
            <p className="text-gray-700">
              Pécémon utilise des cookies de navigation, ainsi que les services
              d'Analytics, Stripe, Facebook et Meta Pixel à des fins
              statistiques et de marketing.
            </p>
          </div>

          {/* Acceptation */}
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <div className="flex items-center justify-center mb-4">
              <FileText className="h-8 w-8 text-white mr-3" />
              <h2 className="text-2xl font-bold">8. Acceptation des CGV</h2>
            </div>
            <p className="text-gray-300 text-lg">
              Toute commande implique l'acceptation sans réserve des présentes
              Conditions Générales de Vente.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Besoin d'aide ?
            </h2>

            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Pour toute question concernant ces conditions générales de vente
              </p>
              <a
                href="mailto:pecemon.contact@gmail.com"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                <Headphones className="h-5 w-5 mr-2" />
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-gray-100 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500">
            Dernière mise à jour : Juin 2025
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CGVPage;
