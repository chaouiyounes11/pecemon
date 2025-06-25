import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Pourquoi ne proposez-vous que 3 marques de PC ?',
      answer:
        'Parce qu’on préfère la fiabilité à la quantité. Lenovo, HP et Dell sont les marques les plus robustes et durables du marché pro. On les connaît par cœur et on te garantit un achat sans mauvaise surprise.',
    },
    {
      question: 'Pourquoi avoir créé seulement 3 gammes ?',
      answer:
        'Parce que la majorité des différences entre les PC sont cosmétiques ou marketing. Nous, on va à l’essentiel : performance, qualité et budget. Nos 3 gammes sont simples, efficaces, et adaptées à ton usage réel.',
    },
    {
      question: 'Est-ce que les claviers sont bien en français ?',
      answer:
        'Oui, tous nos Pécémons sont équipés de claviers AZERTY français. Aucun piège.',
    },
    {
      question: "Qu'est-ce qui est inclus avec mon Pécémon ?",
      answer:
        'Un PC reconditionné haut de gamme, une housse de protection stylée, et un chargeur adapté. Tout ce qu’il faut pour l’utiliser dès réception.',
    },
    {
      question: 'Comment choisir le modèle exact ?',
      answer:
        'Juste avant de payer, tu pourras choisir précisément le modèle. Ton Pécémon est sélectionné par toi, pas au hasard.',
    },
    {
      question: 'Quelle garantie est incluse ?',
      answer:
        '12 mois de garantie complète pièces et main d’œuvre. Et si jamais tu changes d’avis, tu as 14 jours pour être remboursé, sans discuter.',
    },
    {
      question: 'Quand vais-je recevoir mon Pécémon ?',
      answer:
        'Tu le reçois entre 5 et 10 jours ouvrés. Tu es informé par email à chaque étape, avec un numéro de suivi dès l’expédition.',
    },
    {
      question: 'Comment fonctionne le paiement en 3 fois ?',
      answer:
        'Tu peux régler en 3 mensualités sans frais via Klarna. C’est automatique, sécurisé et sans aucun papier à remplir.',
    },
    {
      question: 'Et si j’ai une question ou un souci après l’achat ?',
      answer:
        'Notre support est ultra réactif. Tu peux nous écrire sur WhatsApp, on te répond en moins de 24h. On est là pour t’aider, pas pour disparaître.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Tout ce que tu dois savoir sur les Pécémons
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
