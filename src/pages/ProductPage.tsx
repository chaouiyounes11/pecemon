import {
  ChevronLeft,
  CreditCardIcon,
  Monitor,
  Shield,
  X,
  Zap,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import GenericSlider from '../components/GenericSlider';
import Peceball from '../components/Peceball';
import { Pecemon } from '../types/pecemon';
import { supabase } from '../utils/supabase';
import logo from '/img/pecemon-logo.png';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [pecemon, setPecemon] = useState<Pecemon | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    async function fetchPecemon() {
      try {
        setLoading(true);

        if (!id) {
          throw new Error('ID du Pecemon non spécifié');
        }

        const { data, error } = await supabase
          .from('Pecemon - n8n')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          throw new Error(error.message);
        }

        if (data) {
          // Map the Supabase data to match the Pecemon type
          const formattedPecemon: Pecemon = {
            id: data.id,
            type: data.type || 'herbe',
            link: data.link || '#',
            description: data.description || '',
            model: data.model || '',
            title: data.title || '',
            processor: data.processor || '',
            ram: data.ram || '',
            storage: data.storage || '',
            screen: data.screen || '',
            brand: data.brand || '',
            price: data.price || '',
            priceBeforeDiscount: data.priceBeforeDiscount || '',
            klarnaPrice: data.klarnaPrice || '',
            available: data.available,
            stock: data.stock,
            images: data.images || [],
            commentaires_clients: data.commentaires_clients || [],
          };

          setPecemon(formattedPecemon);
        } else {
          throw new Error('Pecemon non trouvé');
        }
      } catch (err) {
        console.error('Error fetching pecemon:', err);
        setError(
          err instanceof Error ? err.message : 'Failed to fetch pecemon'
        );
      } finally {
        setLoading(false);
      }
    }

    fetchPecemon();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-700">Chargement du Pecemon...</p>
        </div>
      </div>
    );
  }

  if (error || !pecemon) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <h3 className="text-red-700 font-semibold mb-2">Erreur</h3>
          <p className="text-red-600">{error || 'Pecemon non trouvé'}</p>
          <Link
            to="/"
            className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const typeConfig = {
    herbe: {
      gradient: 'from-green-400 to-green-600',
      bgGradient: 'from-green-50 to-emerald-50',
      accentColor: 'green',
      emoji: '🌿',
    },
    eau: {
      gradient: 'from-blue-400 to-blue-600',
      bgGradient: 'from-blue-50 to-cyan-50',
      accentColor: 'blue',
      emoji: '💧',
    },
    feu: {
      gradient: 'from-red-400 to-red-600',
      bgGradient: 'from-red-50 to-orange-50',
      accentColor: 'red',
      emoji: '🔥',
    },
  };

  const config = typeConfig[pecemon.type as 'herbe' | 'eau' | 'feu'];

  // Prepare images for the slider
  const typeColors = {
    herbe: '#6BB23A', // green-pecemon
    eau: '#115096', // blue-pecemon
    feu: '#dd0031', // red-pecemon
  };

  const sliderItems = pecemon.images.map((image, index: number) => ({
    id: `${pecemon.title}-${index}`,
    content: (
      <div
        className="relative rounded-2xl overflow-hidden shadow-lg flex justify-center items-center cursor-pointer"
        style={{
          backgroundColor: typeColors[pecemon.type as 'herbe' | 'eau' | 'feu'],
        }}
        onClick={() => setFullscreenImage(image)}
      >
        <div className="w-full h-full flex justify-center items-center">
          <img
            src={image}
            alt={`${pecemon.title} - Vue ${index + 1}`}
            width={1080}
            height={1350}
            className="object-contain h-[380px] md:h-[550px]"
            style={{
              width: '1080px',
              maxWidth: '100%',
              objectFit: 'contain',
            }}
          />
          <img
            src={logo}
            alt="logo pécémon"
            className="absolute -bottom-1 right-2 w-24 h-24"
          />
        </div>
      </div>
    ),
  }));

  return (
    <>
      {fullscreenImage && (
        <div
          onClick={() => setFullscreenImage(null)}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col justify-center items-center p-4 sm:p-8"
        >
          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Fermer l'aperçu"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="w-full h-full flex justify-center items-center">
            <img
              src={fullscreenImage}
              alt={`${pecemon.title} en plein écran`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="absolute bottom-4 text-white text-sm opacity-75">
            Cliquez n'importe où pour fermer
          </div>
        </div>
      )}

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
        {/* Header with breadcrumb */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <nav className="flex items-center text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-gray-700">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <Link
              to={`/category/${pecemon.type}`}
              className="hover:text-gray-700"
            >
              {pecemon.type === 'herbe'
                ? 'Herbe'
                : pecemon.type === 'feu'
                ? 'Feu'
                : 'Eau'}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">
              {pecemon.brand} - {pecemon.model}
            </span>
          </nav>
        </div>

        {/* Main product section */}
        <section
          className={`py-6 sm:py-10 bg-gradient-to-br ${config.bgGradient}`}
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left column: Product images */}
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/50">
                  {/* Image slider */}
                  <div className="mb-6 relative">
                    {pecemon.images.length > 0 ? (
                      <>
                        <GenericSlider
                          items={sliderItems}
                          slidesPerView={{ mobile: 1, tablet: 1, desktop: 1 }}
                          spaceBetween={{ mobile: 16, tablet: 16, desktop: 16 }}
                          showPagination={true}
                          loop={sliderItems.length > 1}
                          autoplay={false}
                          effect="slide"
                          className="rounded-2xl overflow-hidden w-full"
                          slideClassName="flex justify-center items-center h-full"
                          onSlideChange={(swiper) =>
                            setCurrentSlide(swiper.realIndex)
                          }
                        />
                        <div className="transform text-center mt-2 text-sm font-medium text-gray-700">
                          {currentSlide + 1} / {sliderItems.length}
                        </div>
                      </>
                    ) : (
                      <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <Monitor className="h-12 w-12 mx-auto mb-2" />
                          <div>Photos à venir</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right column: Product details */}
              <div className="space-y-6">
                {/* Product title and price */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                        {pecemon.brand} - {pecemon.model}
                      </h1>
                    </div>
                    <div className="mt-3 sm:mt-0">
                      <div className="line-through text-gray-500">
                        {pecemon.priceBeforeDiscount}€
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {pecemon.price}€
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        pecemon.available
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {pecemon.available
                        ? pecemon.stock
                          ? `Disponible (${pecemon.stock})`
                          : 'Disponible'
                        : 'Réservé'}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-600">Processeur</div>
                      <div className="font-semibold text-gray-900">
                        {pecemon.processor}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-600">Mémoire</div>
                      <div className="font-semibold text-gray-900">
                        {pecemon.ram}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-600">Stockage</div>
                      <div className="font-semibold text-gray-900">
                        {pecemon.storage}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-600">Écran</div>
                      <div className="font-semibold text-gray-900">
                        {pecemon.screen}
                      </div>
                    </div>
                  </div>

                  <button
                    disabled={!pecemon.available}
                    className={`w-full py-3 px-6 rounded-full font-semibold transition-all ${
                      pecemon.available
                        ? `bg-gradient-to-r ${config.gradient} text-white hover:shadow-lg transform hover:scale-105`
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {pecemon.available ? (
                      <a
                        href={pecemon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <Peceball size="xxs" />
                          <span>Capturer</span>
                        </div>
                      </a>
                    ) : (
                      'Non disponible'
                    )}
                  </button>
                  <div className="text-sm text-center block mt-3 text-gray-600">
                    <span className="font-semibold">
                      {pecemon.klarnaPrice}€/mois
                    </span>{' '}
                    en 3x sans frais avec{' '}
                    <span className="bg-pink-100 w-fit text-pink-800 px-2 py-1 rounded text-xs font-semibold">
                      klarna
                    </span>
                  </div>
                </div>

                {/* Product description */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Description
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {pecemon.description}
                  </p>
                </div>

                {/* Guarantees and advantages */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white rounded-2xl p-4 shadow-lg flex items-center">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Garantie 12 mois
                      </div>
                      <div className="text-sm text-gray-600">
                        Pièces et main d'œuvre
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-4 shadow-lg flex items-center">
                    <div className="bg-green-100 rounded-full p-3 mr-4">
                      <Zap className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Livraison 48h
                      </div>
                      <div className="text-sm text-gray-600">
                        Gratuite en France
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-4 shadow-lg flex items-center">
                    <div className="bg-yellow-100 rounded-full p-3 mr-4">
                      <CreditCardIcon className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Paiement sécurisé
                      </div>
                      <div className="text-sm text-gray-600">
                        avec Stripe, Apple Pay et Klarna
                      </div>
                    </div>
                  </div>
                </div>

                {/* Customer Reviews Section */}
                {pecemon.commentaires_clients &&
                  pecemon.commentaires_clients.length > 0 && (
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 mt-6">
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Avis clients
                      </h2>
                      <ul className="space-y-4">
                        {pecemon.commentaires_clients?.map((comment, index) => (
                          <li
                            key={index}
                            className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
                          >
                            <p className="text-gray-700 italic relative">
                              <span className="text-3xl text-gray-200 absolute -top-2 -left-1">
                                "
                              </span>
                              <span className="pl-6">{comment}</span>
                              <span className="text-3xl text-gray-200 absolute -bottom-5 right-0">
                                "
                              </span>
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductPage;
