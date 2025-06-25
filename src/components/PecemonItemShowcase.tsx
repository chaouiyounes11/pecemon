/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChevronDown,
  CreditCardIcon,
  Droplets,
  Flame,
  Leaf,
  Monitor,
  Shield,
  X,
  Zap,
} from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pecemon } from '../types/pecemon';
import GenericSlider from './GenericSlider';
import Peceball from './Peceball';
import logo from '/img/pecemon-logo.png';

interface PecemonItemShowcaseProps {
  pecemons: Pecemon[];
  className?: string;
}

const PecemonItemShowcase: React.FC<PecemonItemShowcaseProps> = ({
  pecemons,
  className = '',
}) => {
  const [selectedPecemonIndex, setSelectedPecemonIndex] = useState<number>(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const typeConfig = {
    herbe: {
      icon: Leaf,
      gradient: 'from-green-400 to-green-600',
      bgGradient: 'from-green-50 to-emerald-50',
      accentColor: 'green',
      emoji: '🌿',
    },
    eau: {
      icon: Droplets,
      gradient: 'from-blue-400 to-blue-600',
      bgGradient: 'from-blue-50 to-cyan-50',
      accentColor: 'blue',
      emoji: '💧',
    },
    feu: {
      icon: Flame,
      gradient: 'from-red-400 to-red-600',
      bgGradient: 'from-red-50 to-orange-50',
      accentColor: 'red',
      emoji: '🔥',
    },
  };

  // If no pecemons are provided, return null
  if (!pecemons || pecemons.length === 0) {
    return null;
  }

  const currentPecemon = pecemons[selectedPecemonIndex];
  const config = typeConfig[currentPecemon.type as 'herbe' | 'eau' | 'feu'];
  const IconComponent = config.icon;

  // Prepare images for the slider
  const typeColors = {
    herbe: '#6BB23A', // green-pecemon
    eau: '#115096', // blue-pecemon
    feu: '#dd0031', // red-pecemon
  };

  const sliderItems = currentPecemon.images.map((image, index) => ({
    id: `${currentPecemon.title}-${index}`,
    content: (
      <div
        className="relative rounded-2xl overflow-hidden shadow-lg flex justify-center items-center cursor-pointer"
        style={{
          backgroundColor:
            typeColors[currentPecemon.type as 'herbe' | 'eau' | 'feu'],
        }}
        onClick={() => setFullscreenImage(image)}
      >
        <div className="w-full flex justify-center items-center h-[380px] md:h-[450px]">
          <img
            src={image}
            alt={`${currentPecemon.title} - Vue ${index + 1}`}
            width={1080}
            height={1350}
            className="object-contain max-h-[80vh]"
            style={{
              width: '90%',
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
              alt={`${currentPecemon.title} en plein écran`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="absolute bottom-4 text-white text-sm opacity-75">
            Cliquez n'importe où pour fermer
          </div>
        </div>
      )}
      <section
        id="pecemon-item"
        className={`py-8 sm:py-12 md:py-16 bg-gradient-to-br ${config.bgGradient} ${className}`}
      >
        <div
          id={currentPecemon.type}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Header with dynamic title */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start mb-4 sm:mb-6">
              <div
                className={`w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 bg-gradient-to-r ${config.gradient} rounded-full flex items-center justify-center mb-3 sm:mb-0 sm:mr-4`}
              >
                <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                  {currentPecemon.brand} - {currentPecemon.model}
                </h2>
                <div className="flex items-center justify-center sm:justify-start mt-2">
                  <span
                    className={`text-${config.accentColor}-600 font-semibold`}
                  >
                    À partir de {currentPecemon.price}€
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
            {/* Left column: Description and features */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {/* Dropdown for pecemon selection */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 shadow-lg">
                <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                  Choisir un modèle :
                </label>

                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <div>
                      <div className="font-semibold text-gray-900">
                        {currentPecemon.brand} - {currentPecemon.model}
                      </div>
                      <div className="text-sm text-gray-600">
                        {currentPecemon.processor} • {currentPecemon.ram}
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-500 transition-transform ${
                        isDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-20 max-h-48 sm:max-h-64 overflow-y-auto">
                      {pecemons.map((pecemon, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedPecemonIndex(index);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                            selectedPecemonIndex === index ? 'bg-blue-50' : ''
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-gray-900">
                                {pecemon.brand} - {pecemon.model}
                              </div>
                              <div className="text-sm text-gray-600">
                                {pecemon.processor} • {pecemon.ram} •{' '}
                                {pecemon.storage}
                              </div>
                              <div className="text-xs text-gray-500">
                                {pecemon.brand}
                              </div>
                            </div>
                            <div className="text-left sm:text-right mt-1 sm:mt-0">
                              <div className="font-bold text-gray-900">
                                {pecemon.price}€
                              </div>
                              <div
                                className={`text-xs px-2 py-1 rounded-full ${
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
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Right column: Photo slider */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Main slider */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 shadow-lg border border-white/50">
                  {/* Image slider */}
                  <div className="mb-6 sm:mb-8 relative">
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
                  </div>

                  {sliderItems.length === 0 && (
                    <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <Monitor className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-2" />
                        <div>Photos à venir</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Marketing description */}
              <div className="md:hidden bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg border border-white/50">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Description
                  </h3>
                </div>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  {currentPecemon.description}
                </p>
                <Link to={`/product/${currentPecemon.id}`}>
                  Voir le produit
                </Link>
              </div>

              {/* Selected model information */}
              <div className="md:hidden bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {currentPecemon.brand} - {currentPecemon.model}
                </h3>
                <span className="text-sm text-gray-600">
                  {currentPecemon.brand}
                </span>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Processeur</div>
                    <div className="font-semibold text-gray-900">
                      {currentPecemon.processor}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Mémoire</div>
                    <div className="font-semibold text-gray-900">
                      {currentPecemon.ram}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Stockage</div>
                    <div className="font-semibold text-gray-900">
                      {currentPecemon.storage}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Écran</div>
                    <div className="font-semibold text-gray-900">
                      {currentPecemon.screen}
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-5 md:mb-6">
                  <div>
                    <div className="line-through text-gray-500">
                      {currentPecemon.priceBeforeDiscount}€
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {currentPecemon.price}€
                    </div>
                  </div>
                  <div className="text-left sm:text-right mt-2 sm:mt-0">
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        currentPecemon.available
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {currentPecemon.available
                        ? currentPecemon.stock
                          ? `Disponible (${currentPecemon.stock})`
                          : 'Disponible'
                        : 'Réservé'}
                    </div>
                  </div>
                </div>
                <button
                  disabled={!currentPecemon.available}
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-all ${
                    currentPecemon.available
                      ? `bg-gradient-to-r ${config.gradient} text-white hover:shadow-lg transform hover:scale-105`
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {currentPecemon.available ? (
                    <a
                      href={currentPecemon.link}
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
                  3x sans frais avec{' '}
                  <span className="bg-pink-100 w-fit text-pink-800 px-2 py-1 rounded text-xs font-semibold">
                    klarna
                  </span>
                </div>
              </div>
            </div>
            {/* Guarantees and advantages */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {/* Marketing description */}
              <div className="hidden md:block bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg border border-white/50">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Description
                  </h3>
                </div>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  {currentPecemon.description}
                </p>
                <Link
                  className="text-blue-500 hover:underline"
                  to={`/product/${currentPecemon.id}`}
                >
                  Voir le produit
                </Link>
              </div>

              {/* Selected model information */}
              <div className="hidden md:block bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {currentPecemon.brand} - {currentPecemon.model}
                </h3>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Processeur</div>
                    <div className="font-semibold text-gray-900">
                      {currentPecemon.processor}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Mémoire</div>
                    <div className="font-semibold text-gray-900">
                      {currentPecemon.ram}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Stockage</div>
                    <div className="font-semibold text-gray-900">
                      {currentPecemon.storage}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Écran</div>
                    <div className="font-semibold text-gray-900">
                      {currentPecemon.screen}
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-5 md:mb-6">
                  <div>
                    <div className="line-through text-gray-500">
                      {currentPecemon.priceBeforeDiscount}€
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {currentPecemon.price}€
                    </div>
                  </div>
                  <div className="text-left sm:text-right mt-2 sm:mt-0">
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        currentPecemon.available
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {currentPecemon.available
                        ? currentPecemon.stock
                          ? `Disponible (${currentPecemon.stock})`
                          : 'Disponible'
                        : 'Réservé'}
                    </div>
                  </div>
                </div>

                <button
                  disabled={!currentPecemon.available}
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-all ${
                    currentPecemon.available
                      ? `bg-gradient-to-r ${config.gradient} text-white hover:shadow-lg transform hover:scale-105`
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {currentPecemon.available ? (
                    <a
                      href={currentPecemon.link}
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
                    {currentPecemon.klarnaPrice}€/mois
                  </span>{' '}
                  en 3x sans frais avec{' '}
                  <span className="bg-pink-100 w-fit text-pink-800 px-2 py-1 rounded text-xs font-semibold">
                    klarna
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg flex items-center">
                <div className="bg-blue-100 rounded-full p-2 sm:p-3 mr-3 sm:mr-4">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
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
                <div className="bg-green-100 rounded-full p-2 sm:p-3 mr-3 sm:mr-4">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
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
                <div className="bg-yellow-100 rounded-full p-2 sm:p-3 mr-3 sm:mr-4">
                  <CreditCardIcon className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" />
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
          </div>
        </div>
      </section>
    </>
  );
};

export default PecemonItemShowcase;
