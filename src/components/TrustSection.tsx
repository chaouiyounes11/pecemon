import { Award, CreditCard, Shield, Star, Truck, Users } from 'lucide-react';

const TrustSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Garantie 12 mois',
      description: "Pièces et main d'œuvre",
    },
    {
      icon: Truck,
      title: 'Livraison en 48h',
      description: 'Partout en France',
    },
    {
      icon: CreditCard,
      title: 'Paiement flexible',
      description: '3x sans frais avec Klarna',
    },
  ];

  const stats = [
    { icon: Users, number: '500+', label: 'Pécémons adoptés' },
    { icon: Star, number: '4.9/5', label: 'Satisfaction client' },
    { icon: Award, number: '12 mois', label: 'Garantie incluse' },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pourquoi nous faire confiance ?
          </h2>
          <p className="text-xl text-gray-600">
            Plus de 500 clients satisfaits nous font déjà confiance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Témoignages clients
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Mon Pécémon Eau fonctionne parfaitement ! Livraison rapide et
                produit conforme. Le paiement en 3x avec Klarna m'a bien aidé."
              </p>
              <div className="text-sm text-gray-500">Marie L. - Paris</div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "J'ai eu la surprise du Pikabook ! Incroyable, merci pour cette
                belle attention. Le paiement échelonné était parfait."
              </p>
              <div className="text-sm text-gray-500">Thomas R. - Lyon</div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="flex justify-center items-center space-x-8 opacity-60 flex-wrap">
            <div className="text-2xl font-bold">VISA</div>
            <div className="text-2xl font-bold">Mastercard</div>
            <div className="text-2xl font-bold">PayPal</div>
            <div className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-lg font-bold mt-2">
              klarna
            </div>
            <div className="text-2xl font-bold">Apple Pay</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
