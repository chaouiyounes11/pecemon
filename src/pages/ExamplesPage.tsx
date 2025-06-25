import { Droplets, Flame, Leaf, Monitor } from 'lucide-react';
import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ExamplesPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const pecemons = [
    // 🌿 Pécécom Herbe – 199 €
    {
      id: 1,
      name: 'Dellgrass 7490',
      codeName: 'DGR-7490',
      type: 'herbe',
      specs: {
        cpu: 'Intel Core i5',
        ram: '8GB',
        storage: '256GB SSD',
        gpu: 'Intel UHD Graphics',
      },
      price: '199,99 €',
      klarnaPrice: '66,66 €',
      available: true,
      image: 'bg-green-500',
    },
    {
      id: 2,
      name: 'Dellroot 5410',
      codeName: 'DRT-5410',
      type: 'herbe',
      specs: {
        cpu: 'Intel Core i5',
        ram: '8GB',
        storage: '256GB SSD',
        gpu: 'Intel UHD Graphics',
      },
      price: '199,99 €',
      klarnaPrice: '66,66 €',
      available: false,
      image: 'bg-green-600',
    },

    // 💧 Pécécom Eau – 249 €
    {
      id: 3,
      name: 'Lenodrop X395',
      codeName: 'LND-X395',
      type: 'eau',
      specs: {
        cpu: 'Ryzen 5 PRO',
        ram: '8GB',
        storage: '256GB SSD',
        gpu: 'Radeon Vega Mobile',
      },
      price: '249,99 €',
      klarnaPrice: '83,33 €',
      available: true,
      image: 'bg-blue-500',
    },
    {
      id: 4,
      name: 'HP Aqua G6',
      codeName: 'HPA-G6',
      type: 'eau',
      specs: {
        cpu: 'Intel Core i5',
        ram: '16GB',
        storage: '256GB SSD',
        gpu: 'Intel UHD Graphics',
      },
      price: '249,99 €',
      klarnaPrice: '83,33 €',
      available: true,
      image: 'bg-blue-600',
    },

    // 🔥 Pécécom Feu – 349 €
    {
      id: 5,
      name: 'Thinkburn 14X',
      codeName: 'THB-14X',
      type: 'feu',
      specs: {
        cpu: 'Intel Core i5',
        ram: '8GB',
        storage: '256GB SSD',
        gpu: 'Intel UHD Graphics',
      },
      price: '349,99 €',
      klarnaPrice: '116,66 €',
      available: true,
      image: 'bg-red-500',
    },
    {
      id: 6,
      name: 'Firebook Elite',
      codeName: 'FBE-9510',
      type: 'feu',
      specs: {
        cpu: 'Intel Core i7',
        ram: '16GB',
        storage: '512GB SSD',
        gpu: 'Intel Iris Plus',
      },
      price: '349,99 €',
      klarnaPrice: '116,66 €',
      available: true,
      image: 'bg-red-600',
    },
    {
      id: 7,
      name: 'HP Blaze Pro',
      codeName: 'HPB-840G7',
      type: 'feu',
      specs: {
        cpu: 'Intel Core i5',
        ram: '16GB',
        storage: '512GB SSD',
        gpu: 'Intel UHD Graphics',
      },
      price: '349,99 €',
      klarnaPrice: '116,66 €',
      available: true,
      image: 'bg-red-700',
    },
  ];

  const filteredPecemons =
    activeFilter === 'all'
      ? pecemons
      : pecemons.filter((p) => p.type === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'herbe':
        return <Leaf className="h-5 w-5" />;
      case 'eau':
        return <Droplets className="h-5 w-5" />;
      case 'feu':
        return <Flame className="h-5 w-5" />;
      default:
        return <Monitor className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'herbe':
        return 'text-green-600 bg-green-100';
      case 'eau':
        return 'text-blue-600 bg-blue-100';
      case 'feu':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Pécécoms disponibles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Chaque mois, je récupère des lots de PC pro issus de grandes
            entreprises. Je ne sais jamais exactement ce que je vais recevoir.
            Par contre, je sais reconnaître une bonne machine.
            <br />
            <br />
            Après reconditionnement, je les classe selon trois niveaux de
            puissance : <strong>Herbe</strong> 🌿 (entrée de gamme),{' '}
            <strong>Eau</strong> 💧 (équilibré), et <strong>Feu</strong> 🔥
            (performance max).
            <br />
            <br />
            Tous les modèles que tu vois ici sont passés entre mes mains.
            Nettoyés, testés, remis à neuf. Et prêts pour leur deuxième vie.
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-colors ${
              activeFilter === 'all'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Tous les Pécémons
          </button>
          <button
            onClick={() => setActiveFilter('herbe')}
            className={`px-6 py-3 rounded-full font-semibold transition-colors flex items-center gap-2 ${
              activeFilter === 'herbe'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Leaf className="h-4 w-4" />
            Herbe
          </button>
          <button
            onClick={() => setActiveFilter('eau')}
            className={`px-6 py-3 rounded-full font-semibold transition-colors flex items-center gap-2 ${
              activeFilter === 'eau'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Droplets className="h-4 w-4" />
            Eau
          </button>
          <button
            onClick={() => setActiveFilter('feu')}
            className={`px-6 py-3 rounded-full font-semibold transition-colors flex items-center gap-2 ${
              activeFilter === 'feu'
                ? 'bg-red-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Flame className="h-4 w-4" />
            Feu
          </button>
        </div>

        {/* Grille des Pécémons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPecemons.map((pokemon) => (
            <div
              key={pokemon.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div
                className={`h-48 ${pokemon.image} flex items-center justify-center relative`}
              >
                <Monitor className="h-16 w-16 text-white" />
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 ${getTypeColor(
                    pokemon.type
                  )}`}
                >
                  {getTypeIcon(pokemon.type)}
                  {pokemon.type.charAt(0).toUpperCase() + pokemon.type.slice(1)}
                </div>
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                    pokemon.available
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {pokemon.available ? 'Disponible' : 'Réservé'}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {pokemon.name}
                    </h3>
                    <p className="text-sm text-gray-500">{pokemon.codeName}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      {pokemon.price}
                    </div>
                    <div className="text-sm text-gray-600">
                      ou {pokemon.klarnaPrice}/mois
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Processeur:</span>
                    <span className="text-gray-900 font-medium">
                      {pokemon.specs.cpu}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Mémoire:</span>
                    <span className="text-gray-900 font-medium">
                      {pokemon.specs.ram}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Stockage:</span>
                    <span className="text-gray-900 font-medium">
                      {pokemon.specs.storage}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Graphique:</span>
                    <span className="text-gray-900 font-medium">
                      {pokemon.specs.gpu}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <span className="text-gray-600">Paiement en 3x avec</span>
                    <div className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs font-semibold">
                      klarna
                    </div>
                    <span className="text-gray-600">sans frais</span>
                  </div>
                </div>

                <button
                  disabled={!pokemon.available}
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-all ${
                    pokemon.available
                      ? 'bg-gray-900 hover:bg-gray-800 text-white'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {pokemon.available ? 'Réserver ce modèle' : 'Non disponible'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPecemons.length === 0 && (
          <div className="text-center py-16">
            <Monitor className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Aucun Pécémon trouvé
            </h3>
            <p className="text-gray-600">
              Essaie un autre filtre ou reviens plus tard !
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ExamplesPage;
