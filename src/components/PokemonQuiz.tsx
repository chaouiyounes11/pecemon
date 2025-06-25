import {
  ArrowRight,
  CheckCircle,
  Gamepad2,
  RotateCcw,
  Star,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ herbe: 0, eau: 0, feu: 0 });
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const questions = [
    {
      id: 1,
      question: 'Pour commencer, tu comptes utiliser ton futur PC pour :',
      answers: [
        {
          text: '🌐 Aller sur Internet, Netflix, bureautique simple',
          type: 'herbe',
        },
        {
          text: '📂 Bureautique poussée, visios, un peu de montage / Canva',
          type: 'eau',
        },
        { text: '🎮 Développement, montage vidéo, design, jeux', type: 'feu' },
      ],
    },
    {
      id: 2,
      question: 'Tu préfères un ordinateur :',
      answers: [
        { text: '🔋 Léger, pratique à transporter', type: 'herbe' },
        { text: '💻 Équilibré entre confort et performance', type: 'eau' },
        { text: '⚡ Puissant, prêt à tout encaisser', type: 'feu' },
      ],
    },
    {
      id: 3,
      question: "Quelle taille d'écran te ferait plaisir ?",
      answers: [
        { text: "📱 13 pouces, c'est parfait pour le sac", type: 'herbe' },
        { text: '📐 14 pouces, le bon équilibre', type: 'eau' },
        { text: '📺 15 pouces ou plus, je veux du confort', type: 'feu' },
      ],
    },
    {
      id: 4,
      question: 'Ton budget est plutôt :',
      answers: [
        { text: '💸 Moins de 250 €', type: 'herbe' },
        { text: '💰 Entre 250 et 300 €', type: 'eau' },
        { text: '🔥 Je vise la performance à 349,99 €', type: 'feu' },
      ],
    },
    {
      id: 5,
      question: "Et ton style, c'est plutôt :",
      answers: [
        { text: '🌿 Tranquille, je veux que ça marche bien', type: 'herbe' },
        {
          text: "💧 Pro mais cool, j'aime les choses bien faites",
          type: 'eau',
        },
        { text: '🔥 Intense, je suis là pour performer', type: 'feu' },
      ],
    },
  ];

  const results = {
    herbe: {
      title: 'Tu es fait pour un Pécémon Herbe',
      emoji: '🌱',
      color: 'green',
      gradient: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      price: '199,99 €',
      description:
        'Un PC solide, léger, parfait pour les tâches du quotidien. 100% fonctionnel, garanti 12 mois, livré avec housse & chargeur !',
      features: [
        'Bureautique fluide',
        'Navigation web rapide',
        'Portable et léger',
        'Autonomie optimisée',
      ],
    },
    eau: {
      title: 'Le Pécémon Eau est ton allié',
      emoji: '💧',
      color: 'blue',
      gradient: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      price: '249,99 €',
      description:
        'Il combine performance et stabilité. Parfait pour bosser sérieusement, créer, visio-conférencer, et garder un super rapport qualité-prix.',
      features: [
        'Multitâche efficace',
        'Création occasionnelle',
        'Visioconférences HD',
        'Équilibre parfait',
      ],
    },
    feu: {
      title: "Ton âme est celle d'un Pécémon Feu",
      emoji: '🔥',
      color: 'red',
      gradient: 'from-red-400 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      price: '349,99 €',
      description:
        'La puissance entre tes mains. Un PC pro reconditionné haut de gamme, boosté pour les usages exigeants. Et en bonus : tu participes à notre tirage au sort du mois pour gagner un MacBook Pro 🔥',
      features: [
        'Performance maximale',
        'Développement pro',
        'Montage vidéo',
        'Gaming fluide',
      ],
      special: true,
    },
  };

  const handleAnswer = (answerType: string) => {
    const newScores = { ...scores };
    newScores[answerType as keyof typeof scores]++;
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      }, 500);
    } else {
      setTimeout(() => {
        setShowResult(true);
      }, 500);
    }
  };

  const getResult = () => {
    const maxScore = Math.max(scores.herbe, scores.eau, scores.feu);
    if (scores.feu === maxScore) return 'feu';
    if (scores.eau === maxScore) return 'eau';
    return 'herbe';
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({ herbe: 0, eau: 0, feu: 0 });
    setShowResult(false);
    setSelectedAnswer(null);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResult) {
    const resultType = getResult();
    const result = results[resultType];

    return (
      <section
        id="quiz"
        className="py-12 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <div className="bg-yellow-400 rounded-full p-2 md:p-4 mr-2 md:mr-4 animate-bounce">
                <Star className="h-6 w-6 md:h-12 md:w-12 text-gray-900" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                🎉 Résultat final
              </h2>
            </div>
          </div>

          <div
            className={`${result.bgColor} rounded-2xl md:rounded-3xl p-6 md:p-12 border-2 ${result.borderColor} shadow-2xl transform hover:scale-105 transition-all`}
          >
            <div className="text-center">
              <div className="text-4xl md:text-8xl mb-4 md:mb-6">
                {result.emoji}
              </div>

              <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                {result.title}
              </h3>

              <div className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                {result.price}
              </div>

              <p className="text-base md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto">
                {result.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                {result.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center bg-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-sm"
                  >
                    <CheckCircle
                      className={`h-4 w-4 md:h-5 md:w-5 text-${result.color}-600 mr-2 md:mr-3`}
                    />
                    <span className="text-gray-900 font-medium text-sm md:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                <Link to={`/#${resultType}`}>
                  <button
                    className={`bg-gradient-to-r ${result.gradient} hover:shadow-lg text-white py-3 md:py-4 px-6 md:px-8 rounded-full font-semibold text-base md:text-lg transition-all transform hover:scale-105`}
                  >
                    Réserver ce Pécémon
                  </button>
                </Link>

                <button
                  onClick={resetQuiz}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 md:py-4 px-6 md:px-8 rounded-full font-semibold text-base md:text-lg transition-all flex items-center justify-center"
                >
                  <RotateCcw className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                  Refaire le quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="quiz"
      className="py-12 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-4 md:mb-6">
            <Gamepad2 className="h-8 w-8 md:h-12 md:w-12 text-purple-600 mr-3 md:mr-4" />
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Quiz Pécémon
            </h2>
          </div>

          <h3 className="text-lg md:text-2xl font-semibold text-gray-700 mb-4 md:mb-6">
            Quel Pécémon te correspond ? Découvre le PC qui match avec ta
            mission numérique !
          </h3>

          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto mb-6 md:mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs md:text-sm font-medium text-gray-600">
                Question {currentQuestion + 1} sur {questions.length}
              </span>
              <span className="text-xs md:text-sm font-medium text-gray-600">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 md:h-3">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 md:h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 mb-6 md:mb-8">
          <h4 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            {questions[currentQuestion].question}
          </h4>

          <div className="space-y-3 md:space-y-4">
            {questions[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedAnswer(index);
                  handleAnswer(answer.type);
                }}
                className={`w-full p-4 md:p-6 rounded-xl md:rounded-2xl border-2 text-left transition-all transform hover:scale-105 hover:shadow-lg ${
                  selectedAnswer === index
                    ? 'border-purple-500 bg-purple-50 shadow-lg scale-105'
                    : 'border-gray-200 hover:border-purple-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm md:text-lg font-medium text-gray-900">
                    {answer.text}
                  </span>
                  <ArrowRight
                    className={`h-4 w-4 md:h-5 md:w-5 transition-all ${
                      selectedAnswer === index
                        ? 'text-purple-600 translate-x-2'
                        : 'text-gray-400'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PokemonQuiz;
