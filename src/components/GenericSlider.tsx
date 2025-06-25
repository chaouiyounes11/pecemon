/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { ReactNode } from 'react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SliderItem {
  id: string | number;
  content: ReactNode;
}

interface GenericSliderProps {
  items: SliderItem[];
  // Configuration mobile-first
  slidesPerView?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  spaceBetween?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  // Options de navigation
  showNavigation?: boolean;
  showPagination?: boolean;
  navigationStyle?: 'default' | 'minimal' | 'floating';
  paginationStyle?: 'bullets' | 'fraction' | 'progressbar';
  // Autoplay
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  // Effets
  effect?: 'slide' | 'fade' | 'cube' | 'coverflow';
  // Comportement
  loop?: boolean;
  centeredSlides?: boolean;
  grabCursor?: boolean;
  // Styling
  className?: string;
  slideClassName?: string;
  // Callbacks
  onSlideChange?: (swiper: any) => void;
  onSwiper?: (swiper: any) => void;
}

const GenericSlider: React.FC<GenericSliderProps> = ({
  items,
  slidesPerView = { mobile: 1, tablet: 2, desktop: 3 },
  spaceBetween = { mobile: 16, tablet: 24, desktop: 32 },
  showNavigation = true,
  showPagination = true,
  navigationStyle = 'default',
  paginationStyle = 'bullets',
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = true,
  effect = 'slide',
  loop = false,
  centeredSlides = false,
  grabCursor = true,
  className = '',
  slideClassName = '',
  onSlideChange,
  onSwiper,
}) => {
  const modules = [Navigation, Pagination];

  if (autoplay) modules.push(Autoplay);
  if (effect === 'fade') modules.push(EffectFade);

  const swiperConfig = {
    modules,
    spaceBetween: spaceBetween.mobile,
    slidesPerView: slidesPerView.mobile,
    grabCursor,
    loop: loop && items.length > slidesPerView.mobile,
    centeredSlides,
    effect,
    navigation: showNavigation
      ? {
          // These can be overridden by onSwiper if custom selectors are provided
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }
      : false,
    pagination: showPagination
      ? {
          el: '.swiper-pagination-custom',
          type: paginationStyle,
          clickable: true,
        }
      : false,
    autoplay: autoplay
      ? {
          delay: autoplayDelay,
          disableOnInteraction: false,
          pauseOnMouseEnter: pauseOnHover,
        }
      : false,
    breakpoints: {
      640: {
        slidesPerView: slidesPerView.tablet,
        spaceBetween: spaceBetween.tablet,
      },
      1024: {
        slidesPerView: slidesPerView.desktop,
        spaceBetween: spaceBetween.desktop,
      },
    },
    onSlideChange,
    onSwiper,
  };

  const getNavigationClasses = () => {
    const baseClasses =
      'absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer';

    switch (navigationStyle) {
      case 'minimal':
        return `${baseClasses} bg-white/80 hover:bg-white text-gray-700 hover:text-gray-900 shadow-sm hover:shadow-md`;
      case 'floating':
        return `${baseClasses} bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm`;
      default:
        return `${baseClasses} bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 shadow-lg hover:shadow-xl border border-gray-200`;
    }
  };

  const getPaginationClasses = () => {
    switch (paginationStyle) {
      case 'fraction':
        return 'text-gray-600 font-medium';
      case 'progressbar':
        return 'bg-gray-200 rounded-full overflow-hidden';
      default:
        return '';
    }
  };

  return (
    <div className={`relative ${className}`}>
      <Swiper {...swiperConfig} className="w-full">
        {items.map((item) => (
          <SwiperSlide key={item.id} className={slideClassName}>
            {item.content}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation personnalisée */}
      {showNavigation && (
        <>
          <button
            className={`swiper-button-prev-custom ${getNavigationClasses()} -left-5 hover:-left-6`}
            aria-label="Slide précédent"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            className={`swiper-button-next-custom ${getNavigationClasses()} -right-5 hover:-right-6`}
            aria-label="Slide suivant"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Pagination personnalisée */}
      {showPagination && (
        <div
          className={`swiper-pagination-custom mt-6 flex justify-center ${getPaginationClasses()}`}
        />
      )}

      {/* Styles CSS personnalisés */}
      <style>
        {`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #3b82f6;
          transform: scale(1.2);
        }

        .swiper-pagination-progressbar-fill {
          background: #3b82f6;
        }

        .swiper-pagination-fraction {
          bottom: 0;
          top: auto;
        }

        /* Masquer les boutons par défaut de Swiper */
        .swiper-button-next,
        .swiper-button-prev {
          display: none;
        }

        .swiper-pagination {
          display: none;
        }
        `}
      </style>
    </div>
  );
};

export default GenericSlider;
