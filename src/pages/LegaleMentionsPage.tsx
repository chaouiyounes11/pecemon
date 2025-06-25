import {
  Building,
  Globe,
  Mail,
  MapPin,
  Shield,
  ShoppingCart,
} from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const LegalMentionsPage = () => {
  const sections = [
    {
      icon: Building,
      title: 'Éditeur du site',
      content: [
        { label: "Nom de l'entreprise", value: 'Pécémon' },
        { label: 'Statut', value: 'Micro-entreprise' },
        {
          label: 'Responsable de la publication',
          value: 'Le fondateur de Pécémon',
        },
        { label: 'SIRET', value: '82281490100051' },
        {
          label: 'TVA',
          value:
            "TVA applicable – Numéro généré automatiquement selon la validation d'option au réel simplifié (à demander auprès du service des impôts si non encore attribué)",
        },
        { label: 'RCS', value: 'Lille' },
        {
          label: 'Adresse du siège',
          value: '879 Avenue de la République, 59700 Marcq-en-Barœul, France',
        },
        { label: 'Email de contact', value: 'pecemon.contact@gmail.com' },
      ],
    },
    {
      icon: Globe,
      title: 'Hébergement',
      content: [
        { label: 'Hébergeur', value: 'Vercel Inc.' },
        {
          label: 'Adresse',
          value: '340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis',
        },
        { label: 'Site web', value: 'https://vercel.com' },
      ],
    },
    {
      icon: ShoppingCart,
      title: 'Activité',
      content: [
        {
          label: "Nature de l'activité",
          value:
            'Vente en ligne de matériel informatique reconditionné (ordinateurs portables professionnels)',
        },
      ],
    },
  ];

  const cookiesTools = [
    { name: 'Google Analytics', purpose: 'analyse de fréquentation' },
    { name: 'Stripe', purpose: 'paiement sécurisé' },
    { name: 'Meta Pixel / Facebook Pixel', purpose: 'publicité ciblée' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-gray-700 mr-3" />
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Mentions légales
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conformément aux dispositions des articles 6-III et 19 de la Loi
              n°2004-575 du 21 juin 2004 pour la Confiance dans l'Économie
              Numérique (LCEN), il est porté à la connaissance des utilisateurs
              et clients du site les informations suivantes :
            </p>
          </div>
        </div>
      </section>

      {/* Legal Information Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="bg-white rounded-full p-3 mr-4 shadow-sm">
                      <IconComponent className="h-6 w-6 text-gray-700" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                </div>

                <div className="px-8 py-6">
                  <div className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="grid md:grid-cols-3 gap-4 py-3 border-b border-gray-100 last:border-b-0"
                      >
                        <div className="font-semibold text-gray-700">
                          {item.label} :
                        </div>
                        <div className="md:col-span-2 text-gray-900">
                          {item.value.includes('@') ? (
                            <a
                              href={`mailto:${item.value}`}
                              className="text-blue-600 hover:text-blue-700 underline"
                            >
                              {item.value}
                            </a>
                          ) : item.value.includes('http') ? (
                            <a
                              href={item.value}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-700 underline"
                            >
                              {item.value}
                            </a>
                          ) : (
                            item.value
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Data Protection & Cookies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl border border-blue-200 overflow-hidden">
            <div className="bg-blue-100 px-8 py-6 border-b border-blue-200">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-3 mr-4 shadow-sm">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Données personnelles & cookies
                </h2>
              </div>
            </div>

            <div className="px-8 py-6">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Ce site utilise des cookies à des fins de mesure d'audience,
                  de personnalisation de contenu et de suivi marketing. En
                  naviguant sur le site, vous acceptez l'utilisation des outils
                  suivants :
                </p>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Outils utilisés :
                  </h3>
                  <div className="space-y-3">
                    {cookiesTools.map((tool, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="font-medium text-gray-900">
                          {tool.name}
                        </span>
                        <span className="text-gray-600 text-sm">
                          ({tool.purpose})
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">
                    Vos droits RGPD
                  </h3>
                  <p className="text-green-700 mb-4">
                    Les données collectées sont exclusivement destinées à
                    l'usage interne de Pécémon.
                  </p>
                  <p className="text-green-700">
                    Conformément au RGPD, vous pouvez exercer vos droits
                    d'accès, de rectification ou de suppression en écrivant à{' '}
                    <a
                      href="mailto:pecemon.contact@gmail.com"
                      className="font-semibold text-green-800 underline hover:text-green-900"
                    >
                      pecemon.contact@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Informations de contact
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <a
                  href="mailto:pecemon.contact@gmail.com"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  pecemon.contact@gmail.com
                </a>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Adresse</h3>
                <p className="text-gray-600 text-sm">
                  879 Avenue de la République
                  <br />
                  59700 Marcq-en-Barœul
                  <br />
                  France
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Entreprise</h3>
                <p className="text-gray-600 text-sm">
                  SIRET: 82281490100051
                  <br />
                  RCS Lille
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500">
            Dernière mise à jour : Juillet 2025
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalMentionsPage;
