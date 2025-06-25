import { Droplets, Flame, Leaf, Monitor } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Pecemon } from '../types/pecemon';
import { supabase } from '../utils/supabase';

const ExamplesPage = () => {
  const { type } = useParams<{ type?: string }>();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<string>(type || 'all');
  const [pecemons, setPecemons] = useState<Pecemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Update activeFilter when URL parameter changes
  useEffect(() => {
    // Update the active filter based on the URL parameter
    const newFilter = type || 'all';
    setActiveFilter(newFilter);
    console.log('URL parameter changed, updating filter to:', newFilter);
  }, [type]);

  // Fetch pecemons from Supabase
  useEffect(() => {
    const fetchPecemons = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('Pecemon - n8n')
          .select('*');

        if (error) {
          throw new Error(error.message);
        }

        if (data) {
          setPecemons(data as Pecemon[]);
        }
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'An error occurred while fetching pecemons'
        );
        console.error('Error fetching pecemons:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPecemons();
  }, []);

  // Use useMemo to recalculate filtered pecemons when dependencies change
  const filteredPecemons = useMemo(() => {
    console.log('Recalculating filtered pecemons with filter:', activeFilter);
    return activeFilter === 'all'
      ? pecemons
      : pecemons.filter((p) => p.type === activeFilter);
  }, [pecemons, activeFilter]);

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
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Une erreur est survenue
            </h3>
            <p className="text-gray-600">{error}</p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Nos Pécécoms disponibles
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Chaque mois, je récupère des lots de PC pro issus de grandes
                entreprises. Je ne sais jamais exactement ce que je vais
                recevoir. Par contre, je sais reconnaître une bonne machine.
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
                onClick={() => {
                  setActiveFilter('all');
                  navigate('/category/all');
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  activeFilter === 'all'
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Tous les Pécémons
              </button>
              <button
                onClick={() => {
                  setActiveFilter('herbe');
                  navigate('/category/herbe');
                }}
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
                onClick={() => {
                  setActiveFilter('eau');
                  navigate('/category/eau');
                }}
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
                onClick={() => {
                  setActiveFilter('feu');
                  navigate('/category/feu');
                }}
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

            <div className="space-y-12">
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {activeFilter === 'all'
                    ? 'Tous les Pécémons'
                    : `Pécémons ${
                        activeFilter.charAt(0).toUpperCase() +
                        activeFilter.slice(1)
                      }`}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPecemons.map((pokemon) => (
                    <div
                      key={pokemon.id}
                      className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
                    >
                      <div
                        className={`h-48 ${
                          pokemon.type === 'herbe'
                            ? 'bg-green-500'
                            : pokemon.type === 'eau'
                            ? 'bg-blue-500'
                            : 'bg-red-500'
                        } flex items-center justify-center relative`}
                      >
                        {pokemon.images && pokemon.images.length > 0 && (
                          <img
                            src={pokemon.images[0]}
                            alt={pokemon.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        )}
                        <div
                          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 ${getTypeColor(
                            pokemon.type
                          )}`}
                        >
                          {getTypeIcon(pokemon.type)}
                          {pokemon.type.charAt(0).toUpperCase() +
                            pokemon.type.slice(1)}
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
                              {pokemon.title || pokemon.model}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {pokemon.model}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">
                              {pokemon.price}€
                            </div>
                            <div className="text-sm text-gray-600">
                              ou {pokemon.klarnaPrice}€/mois
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Processeur:</span>
                            <span className="text-gray-900 font-medium">
                              {pokemon.processor}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Mémoire:</span>
                            <span className="text-gray-900 font-medium">
                              {pokemon.ram}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Stockage:</span>
                            <span className="text-gray-900 font-medium">
                              {pokemon.storage}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Écran:</span>
                            <span className="text-gray-900 font-medium">
                              {pokemon.screen}
                            </span>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-3 mb-4">
                          <div className="flex items-center justify-center space-x-2 text-sm">
                            <span className="text-gray-600">
                              Paiement en 3x avec
                            </span>
                            <div className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs font-semibold">
                              klarna
                            </div>
                            <span className="text-gray-600">sans frais</span>
                          </div>
                        </div>

                        <Link
                          to={`/pecemon/${pokemon.id}`}
                          className={`w-full py-3 px-6 rounded-full font-semibold transition-all ${
                            pokemon.available
                              ? 'bg-gray-900 hover:bg-gray-800 text-white'
                              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          }`}
                        >
                          {pokemon.available
                            ? 'Réserver ce modèle'
                            : 'Non disponible'}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ExamplesPage;
