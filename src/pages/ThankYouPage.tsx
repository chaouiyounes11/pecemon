import {
  Gift,
  Heart,
  Mail,
  MessageCircle,
  Package,
  Phone,
  Shield,
  Sparkles,
  Truck,
  Users,
  Zap,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ThankYouPage = () => {
  const [selectedPokemon, setSelectedPokemon] = useState('feu');
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Animation de confettis au chargement
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const pokemonTypes = {
    herbe: {
      name: 'Pécémon Herbe',
      color: 'green',
      gradient: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      emoji: '🌱',
    },
    eau: {
      name: 'Pécémon Eau',
      color: 'blue',
      gradient: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      emoji: '💧',
    },
    feu: {
      name: 'Pécémon Feu',
      color: 'red',
      gradient: 'from-red-400 to-red-600',
      bgColor: 'bg-red-50',
      emoji: '🔥',
    },
  };

  const deliverySteps = [
    {
      icon: Heart,
      title: 'Préparation avec amour',
      description: 'Ton Pécémon est nettoyé et testé une dernière fois',
      status: 'active',
    },
    {
      icon: Package,
      title: 'Emballage soigné',
      description: 'Housse et chargeur inclus dans un colis sécurisé',
      status: 'pending',
    },
    {
      icon: Truck,
      title: 'Expédition express',
      description: 'Livraison sous 48h via Chronopost avec suivi',
      status: 'pending',
    },
    {
      icon: Zap,
      title: "Prêt à l'action !",
      description: "Ton nouveau compagnon numérique t'attend",
      status: 'pending',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Garantie 1 an',
      description: "Pièces et main d'œuvre incluses",
    },
    {
      icon: Truck,
      title: 'Livraison gratuite',
      description: 'Partout en France métropolitaine',
    },
    {
      icon: MessageCircle,
      title: 'Support 24h',
      description: 'Réponse garantie sous 24h',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-green-50 to-blue-50 relative overflow-hidden">
      <Header />

      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 ${
                ['bg-yellow-400', 'bg-red-400', 'bg-blue-400', 'bg-green-400'][
                  i % 4
                ]
              } rounded-full animate-bounce`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-yellow-400 rounded-full p-6 mr-6 animate-pulse">
                <Gift className="h-16 w-16 text-gray-900" />
              </div>
              <div className="text-left">
                <h1 className="text-6xl font-bold text-gray-900 mb-4">
                  🥳 Merci, <span className="text-yellow-500">Dresseur</span> !
                </h1>
                <div className="flex items-center text-2xl text-gray-700">
                  <Sparkles className="h-6 w-6 mr-2 text-yellow-500" />
                  <span>
                    Tu viens de capturer un Pécémon... et pas n'importe lequel !
                  </span>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-2xl text-gray-700 leading-relaxed mb-8">
                💻✨ Ton nouveau{' '}
                <span className="font-bold text-gray-900">
                  compagnon numérique
                </span>{' '}
                est prêt à t'accompagner dans toutes tes aventures :
                <br />
                <span className="text-blue-600 font-semibold">
                  boulot, études, créativité ou gaming léger.
                </span>
              </p>

              <div className="bg-white rounded-3xl shadow-xl p-8 inline-block">
                <div className="flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-red-500 mr-3" />
                  <span className="text-xl font-semibold text-gray-900">
                    L'équipe Pécémon est en train de le préparer avec amour
                  </span>
                </div>
                <div className="text-gray-600">(et un chiffon microfibre)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pokemon Selection & Order Details */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Pokemon Selection */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center mb-8">
                <Package className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">
                  📦 Livraison express en chemin !
                </h2>
              </div>

              {/* Pokemon Type Selector */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Modèle choisi :
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(pokemonTypes).map(([type, config]) => (
                    <button
                      key={type}
                      onClick={() => setSelectedPokemon(type)}
                      className={`p-4 rounded-2xl border-2 transition-all ${
                        selectedPokemon === type
                          ? `border-${config.color}-500 ${config.bgColor} shadow-lg`
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-3xl mb-2">{config.emoji}</div>
                      <div
                        className={`font-semibold ${
                          selectedPokemon === type
                            ? `text-${config.color}-800`
                            : 'text-gray-700'
                        }`}
                      >
                        {config.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Order Details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <span className="font-medium text-gray-700">
                    Accessoires inclus :
                  </span>
                  <span className="text-gray-900 font-semibold">
                    Chargeur & housse de transport
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                  <span className="font-medium text-gray-700">Garantie :</span>
                  <span className="text-green-800 font-semibold">
                    1 an – parce qu'on prend soin de nos Pécémons
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                  <span className="font-medium text-gray-700">
                    Expédition :
                  </span>
                  <span className="text-blue-800 font-semibold">
                    sous 48h via Chronopost avec suivi
                  </span>
                </div>
              </div>
            </div>

            {/* Delivery Timeline */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Suivi de ton Pécémon
              </h3>

              <div className="space-y-6">
                {deliverySteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="flex items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                          step.status === 'active'
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-200 text-gray-500'
                        }`}
                      >
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div
                          className={`font-semibold ${
                            step.status === 'active'
                              ? 'text-green-800'
                              : 'text-gray-700'
                          }`}
                        >
                          {step.title}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {step.description}
                        </div>
                      </div>
                      {step.status === 'active' && (
                        <div className="text-green-600 font-semibold">
                          En cours...
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pikabook Section */}
      {selectedPokemon === 'feu' && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-12 text-white text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-yellow-400 rounded-full p-4 mr-4">
                  <Gift className="h-12 w-12 text-gray-900" />
                </div>
                <h2 className="text-4xl font-bold">
                  🔥 Si tu as choisi un Pécémon Feu...
                </h2>
              </div>

              <p className="text-2xl text-red-100 mb-8">
                Tu es automatiquement inscrit à notre loterie mensuelle pour
                tenter de gagner un vrai
                <span className="font-bold text-white"> MacBook Pro</span> 🧑‍💻🔥
              </p>

              <div className="bg-white/20 rounded-2xl p-6 inline-block">
                <div className="text-3xl font-bold text-yellow-300 mb-2">
                  Nom de code : Pikabook
                </div>
                <div className="text-red-100">
                  Peut-être que le tien contiendra la surprise !
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Support Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Support */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center mb-8">
                <MessageCircle className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">
                  💬 Besoin d'aide ou envie de papoter ?
                </h2>
              </div>

              <p className="text-lg text-gray-700 mb-8">
                Notre support est dispo par WhatsApp ou email, réponse sous 24h
                max :
              </p>

              <div className="space-y-4">
                <a
                  href="tel:+33600000000"
                  className="flex items-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
                >
                  <Phone className="h-6 w-6 text-green-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      📱 WhatsApp
                    </div>
                    <div className="text-green-600">+33 6 58 01 88 44</div>
                  </div>
                </a>

                <a
                  href="mailto:pecemon.contact@gmail.com"
                  className="flex items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                >
                  <Mail className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">📩 Email</div>
                    <div className="text-blue-600">
                      pecemon.contact@gmail.com
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Referral Program */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center mb-8">
                <Users className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">
                  💡 Astuce de Dresseur
                </h2>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                Parle de ton Pécémon autour de toi ! Chaque vente grâce à ton
                lien te rapporte
                <span className="font-bold text-green-600">
                  {' '}
                  10 € en cashback
                </span>
                .
              </p>

              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transition-all transform hover:scale-105 mb-4">
                👉 Activer mon lien parrain
              </button>

              <div className="bg-purple-50 rounded-xl p-4">
                <div className="text-purple-800 font-semibold mb-2">
                  Comment ça marche ?
                </div>
                <div className="text-purple-700 text-sm">
                  Partage ton lien unique, tes amis économisent 5€ et tu gagnes
                  10€ par vente !
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 text-center"
                >
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Merci de faire partie de l'aventure.
          </h2>
          <p className="text-2xl text-gray-300 mb-8">
            À très vite, et surtout…{' '}
            <span className="font-bold text-yellow-400">attrape-les tous</span>{' '}
            (mais version reconditionnée) !
          </p>

          <div className="text-6xl mb-6">🎮</div>

          <div className="text-xl font-semibold text-blue-300">
            L'équipe Pécémon
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThankYouPage;
