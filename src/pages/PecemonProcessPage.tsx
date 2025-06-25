import {
  Building2,
  CheckCircle,
  Heart,
  Package,
  Recycle,
  Search,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const PecemonProcessPage = () => {
  const steps = [
    {
      number: '1',
      icon: Building2,
      title: 'On récupère ce que les pros ne gardent pas',
      description:
        "Chaque mois, nous récupérons des lots d'ordinateurs portables auprès de grandes entreprises, souvent après 2 ou 3 ans de location.",
      details: [
        'Ces machines de gamme professionnelle sont bien plus robustes que les PC du grand public.',
        'Plutôt que de finir dans un placard ou à la benne, elles arrivent chez nous pour une deuxième vie.',
      ],
      color: 'blue',
    },
    {
      number: '2',
      icon: Search,
      title: 'Contrôle technique complet dans notre atelier',
      description:
        'Chaque PC passe entre les mains du Professeur Alim (ou presque).',
      details: [
        'On les teste, on les nettoie, on les démonte parfois, puis on vérifie plus de 50 points de contrôle :',
        "batterie, stockage, ports, clavier, écran, ventilation… Rien ne sort de l'atelier sans être 100 % fonctionnel.",
      ],
      color: 'green',
    },
    {
      number: '3',
      icon: Wrench,
      title: 'Reconfiguration et remise à zéro',
      description:
        "Une fois le matériel validé, on réinstalle un système propre, on met à jour les pilotes, on optimise l'ensemble.",
      details: [
        "Chaque Pécémon est préparé avec la même exigence qu'un PC neuf, mais sans le prix ni l'impact environnemental.",
      ],
      color: 'orange',
    },
    {
      number: '4',
      icon: Package,
      title: 'Housse, chargeur, garantie, et en route vers toi',
      description: 'Ton Pécémon est soigneusement emballé, accompagné de :',
      details: [
        '🔌 un chargeur vérifié',
        '🎒 une housse de transport',
        '✅ une garantie de 12 mois',
        'Tu le reçois chez toi en 48h, prêt à servir ta mission.',
      ],
      color: 'purple',
    },
  ];

  const whyWeDoIt = [
    {
      icon: Recycle,
      title: "Un bon PC ne mérite pas d'être jeté",
      description:
        "Chaque ordinateur reconditionné évite la production d'un nouveau et réduit les déchets électroniques.",
    },
    {
      icon: Heart,
      title: 'Tu mérites un ordinateur fiable et abordable',
      description:
        "Reconditionné en France avec la même exigence qu'un produit neuf, mais à prix accessible.",
    },
    {
      icon: CheckCircle,
      title: 'Chaque Pécémon réutilisé compte',
      description:
        "C'est un pas de plus contre le gaspillage électronique et pour une tech plus responsable.",
    },
  ];

  const getStepColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'from-blue-500 to-blue-600';
      case 'green':
        return 'from-green-500 to-green-600';
      case 'orange':
        return 'from-orange-500 to-orange-600';
      case 'purple':
        return 'from-purple-500 to-purple-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getStepBg = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-50';
      case 'green':
        return 'bg-green-50';
      case 'orange':
        return 'bg-orange-50';
      case 'purple':
        return 'bg-purple-50';
      default:
        return 'bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section - Design sobre */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Recycle className="h-8 w-8 text-gray-700 mr-3" />
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Comment naît un Pécémon
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvre le processus de reconditionnement qui transforme un
              ordinateur professionnel en ton futur compagnon numérique.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 1;

              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Contenu */}
                  <div className={isEven ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${getStepColor(
                          step.color
                        )} rounded-full flex items-center justify-center text-white font-bold text-xl mr-4`}
                      >
                        {step.number}
                      </div>
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-gray-600" />
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h2>

                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700 leading-relaxed">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Illustration */}
                  <div className={isEven ? 'lg:col-start-1' : ''}>
                    <div
                      className={`${getStepBg(
                        step.color
                      )} rounded-3xl p-8 shadow-lg`}
                    >
                      <div className="aspect-square bg-white rounded-2xl flex items-center justify-center shadow-sm">
                        <div className="text-center">
                          <div
                            className={`w-20 h-20 bg-gradient-to-r ${getStepColor(
                              step.color
                            )} rounded-full flex items-center justify-center mx-auto mb-4`}
                          >
                            <IconComponent className="h-10 w-10 text-white" />
                          </div>
                          <div className="text-lg font-semibold text-gray-900">
                            Étape {step.number}
                          </div>
                          <div className="text-sm text-gray-600 mt-2 max-w-xs">
                            {step.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why We Do It Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-red-500 mr-3" />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Pourquoi on fait ça ?
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Notre mission va au-delà du simple reconditionnement. C'est un
              engagement pour une technologie plus responsable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyWeDoIt.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-gray-700" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {reason.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-gray-900 rounded-3xl p-12 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à adopter ton Pécémon ?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Chaque Pécémon que tu choisis contribue à réduire l'impact
              environnemental tout en te offrant une machine performante et
              fiable.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/#pecemon">
                <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Voir nos Pécémons
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Pécémons reconditionnés</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">
                Points de contrôle par machine
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
              <div className="text-gray-600">Mois de garantie incluse</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PecemonProcessPage;
