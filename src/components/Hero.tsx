import { Computer } from 'lucide-react';
const Hero = () => {
  return (
    <section className="relative bg-white pt-16  overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-50"></div>

      {/* Minimal Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-3 h-3 bg-gray-400 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-32 left-20 w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center mb-8">
            <Computer className="h-5 w-5 text-gray-600 mr-2" />
            <span className="text-gray-700 font-medium bg-gray-100 px-4 py-2 rounded-full border border-gray-200">
              PC pros garantis 1 an
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-3xl font-bold text-gray-900 mb-8 leading-tight max-w-5xl mx-auto">
            Des ordinateurs pros reconditionnés, testés et 30% moins chers que
            chez BackMarket.
          </h1>

          {/* Subheadline */}
          <div className="max-w-4xl mx-auto mb-12 text-lef">
            <p className="text-l lg:text-2xl text-gray-600 mb-6 leading-relaxed">
              <span className="font-semibold text-gray-900">
                Livrés avec chargeur, housse et garantie 12 mois. ⚡ Attrape le
                bon plan comme un vrai dresseur !
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
