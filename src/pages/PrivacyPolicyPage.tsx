import {
  ArrowLeft,
  Clock,
  Cookie,
  Database,
  Eye,
  Mail,
  Package,
  Phone,
  Shield,
  User,
  Users,
} from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const PrivacyPolicyPage = () => {
  const dataTypes = [
    {
      category: "Données d'identification",
      items: ['nom', 'prénom', 'adresse', 'e-mail', 'téléphone'],
    },
    {
      category: 'Données de commande et de livraison',
      items: ['historique des achats', 'adresses de livraison', 'préférences'],
    },
    {
      category: 'Informations de paiement',
      items: [
        'traitées de manière sécurisée par nos partenaires : Stripe, PayPal, Klarna',
      ],
    },
    {
      category: 'Données de navigation',
      items: [
        "via cookies et outils de mesure d'audience (Google Analytics, Meta Pixel)",
      ],
    },
  ];

  const purposes = [
    {
      icon: Package,
      title: 'Gérer les commandes et les livraisons',
      description: 'Traitement et expédition de vos Pécémons',
    },
    {
      icon: Phone,
      title: 'Fournir un service client',
      description: 'Support par email et WhatsApp',
    },
    {
      icon: Database,
      title: 'Assurer la facturation et le suivi comptable',
      description: 'Gestion administrative et comptable',
    },
    {
      icon: Eye,
      title: "Améliorer l'expérience utilisateur et le site",
      description: 'Optimisation de nos services',
    },
    {
      icon: Mail,
      title: 'Mener des campagnes marketing et publicitaires',
      description: 'Emailing et retargeting personnalisés',
    },
  ];

  const legalBases = [
    {
      basis: 'Exécution du contrat',
      purpose: 'pour traiter et expédier les commandes',
    },
    { basis: 'Obligation légale', purpose: 'pour la facturation' },
    { basis: 'Intérêt légitime', purpose: "pour l'amélioration du site" },
    {
      basis: 'Consentement',
      purpose: 'pour les cookies et opérations marketing',
    },
  ];

  const recipients = [
    { name: 'Pécémon', role: 'Responsable de traitement' },
    { name: 'Vercel', role: 'Hébergement' },
    { name: 'Stripe, Klarna, PayPal', role: 'Paiement' },
    { name: 'Google Analytics', role: 'Analyse' },
    { name: 'Meta', role: 'Publicité' },
  ];

  const retentionPeriods = [
    { type: 'Données clients', duration: '3 ans à partir du dernier contact' },
    { type: 'Données de facturation', duration: '10 ans (obligation légale)' },
    { type: 'Cookies', duration: '13 mois maximum' },
  ];

  const rights = [
    'Accès à vos données',
    'Rectification',
    'Suppression',
    'Opposition ou limitation du traitement',
    'Portabilité',
  ];

  const cookiesPurposes = [
    { purpose: "Mesurer l'audience du site", tool: 'Google Analytics' },
    { purpose: 'Diffuser de la publicité ciblée', tool: 'Meta Pixel' },
    { purpose: 'Faciliter le paiement', tool: 'Stripe, Klarna' },
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
              <Shield className="h-8 w-8 text-gray-700 mr-3" />
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Politique de confidentialité
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nous nous engageons à protéger et respecter votre vie privée.
              Cette politique explique comment nous collectons, utilisons et
              protégeons vos données personnelles.
            </p>
          </div>
        </div>
      </section>

      {/* Responsable de traitement */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-3 mr-4 shadow-sm">
                  <User className="h-6 w-6 text-gray-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  1. Identité du responsable de traitement
                </h2>
              </div>
            </div>

            <div className="px-8 py-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-gray-900">
                      Entreprise :
                    </span>
                    <p className="text-gray-700">Pécémon – Micro-entreprise</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">
                      Adresse :
                    </span>
                    <p className="text-gray-700">
                      879 Avenue de la République
                      <br />
                      Marcq-en-Baroeul, France
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Email :</span>
                    <a
                      href="mailto:pecemon.contact@gmail.com"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      pecemon.contact@gmail.com
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-gray-900">SIRET :</span>
                    <p className="text-gray-700">82281490100051</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">RCS :</span>
                    <p className="text-gray-700">Lille</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">
                      Responsable de traitement :
                    </span>
                    <p className="text-gray-700">
                      Younes Chaoui, responsable de la communication
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Données collectées */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl border border-blue-200 overflow-hidden">
            <div className="bg-blue-100 px-8 py-6 border-b border-blue-200">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-3 mr-4 shadow-sm">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  2. Données collectées
                </h2>
              </div>
            </div>

            <div className="px-8 py-6">
              <p className="text-gray-700 mb-6">
                Nous collectons et traitons les données suivantes dans le cadre
                de notre activité :
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {dataTypes.map((dataType, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-sm"
                  >
                    <h3 className="font-semibold text-gray-900 mb-3">
                      {dataType.category}
                    </h3>
                    <ul className="space-y-2">
                      {dataType.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-gray-700 text-sm flex items-center"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finalités du traitement */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-3 mr-4 shadow-sm">
                  <Eye className="h-6 w-6 text-gray-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  3. Finalités du traitement
                </h2>
              </div>
            </div>

            <div className="px-8 py-6">
              <p className="text-gray-700 mb-6">
                Les données personnelles sont collectées pour :
              </p>

              <div className="space-y-4">
                {purposes.map((purpose, index) => {
                  const IconComponent = purpose.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="bg-white rounded-full p-2 mr-4">
                        <IconComponent className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {purpose.title}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {purpose.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Base légale */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 rounded-2xl border border-green-200 overflow-hidden">
            <div className="bg-green-100 px-8 py-6 border-b border-green-200">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-3 mr-4 shadow-sm">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  4. Base légale
                </h2>
              </div>
            </div>

            <div className="px-8 py-6">
              <div className="grid md:grid-cols-2 gap-4">
                {legalBases.map((base, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-sm"
                  >
                    <div className="font-semibold text-green-800">
                      {base.basis}
                    </div>
                    <div className="text-green-700 text-sm">{base.purpose}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinataires */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-3 mr-4 shadow-sm">
                  <Users className="h-6 w-6 text-gray-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  5. Destinataires des données
                </h2>
              </div>
            </div>

            <div className="px-8 py-6">
              <p className="text-gray-700 mb-6">
                Les données sont uniquement destinées à :
              </p>

              <div className="space-y-3 mb-6">
                {recipients.map((recipient, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="font-medium text-gray-900">
                      {recipient.name}
                    </span>
                    <span className="text-gray-600 text-sm">
                      {recipient.role}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 font-semibold">
                  Les données ne sont jamais vendues ni cédées à des tiers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Durée de conservation */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 rounded-2xl border border-orange-200 overflow-hidden">
            <div className="bg-orange-100 px-8 py-6 border-b border-orange-200">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-3 mr-4 shadow-sm">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  6. Durée de conservation
                </h2>
              </div>
            </div>

            <div className="px-8 py-6">
              <div className="space-y-4">
                {retentionPeriods.map((period, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
                  >
                    <span className="font-medium text-gray-900">
                      {period.type}
                    </span>
                    <span className="text-orange-700 font-semibold">
                      {period.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vos droits */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-purple-50 rounded-2xl border border-purple-200 overflow-hidden">
            <div className="bg-purple-100 px-8 py-6 border-b border-purple-200">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-3 mr-4 shadow-sm">
                  <User className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  7. Vos droits
                </h2>
              </div>
            </div>

            <div className="px-8 py-6">
              <p className="text-gray-700 mb-6">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {rights.map((right, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-white rounded-lg shadow-sm"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-gray-900">{right}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Pour exercer vos droits :
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-purple-600 mr-3" />
                    <a
                      href="mailto:pecemon.contact@gmail.com"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      pecemon.contact@gmail.com
                    </a>
                  </div>
                  <div className="text-gray-600 text-sm">
                    Vous pouvez également contacter la CNIL (www.cnil.fr) pour
                    toute réclamation.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 rounded-2xl border border-yellow-200 overflow-hidden">
            <div className="bg-yellow-100 px-8 py-6 border-b border-yellow-200">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-3 mr-4 shadow-sm">
                  <Cookie className="h-6 w-6 text-yellow-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">8. Cookies</h2>
              </div>
            </div>

            <div className="px-8 py-6">
              <p className="text-gray-700 mb-6">
                Nous utilisons des cookies pour :
              </p>

              <div className="space-y-4 mb-6">
                {cookiesPurposes.map((cookie, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
                  >
                    <span className="text-gray-900">{cookie.purpose}</span>
                    <span className="text-yellow-700 font-semibold text-sm">
                      ({cookie.tool})
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-gray-700">
                  Un bandeau de consentement vous permet de les accepter ou
                  refuser lors de votre première visite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
            <div className="flex items-center justify-center mb-6">
              <Mail className="h-8 w-8 text-white mr-3" />
              <h2 className="text-2xl font-bold">
                Questions sur vos données ?
              </h2>
            </div>

            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Pour toute question concernant le traitement de vos données
              personnelles ou pour exercer vos droits RGPD
            </p>

            <a
              href="mailto:pecemon.contact@gmail.com"
              className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-gray-100 border-t border-gray-200">
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

export default PrivacyPolicyPage;
