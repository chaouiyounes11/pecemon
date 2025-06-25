import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';

interface CookieConsentProps {
  onAccept: () => void;
  onDecline: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onDecline }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent === null) {
      // Si aucun choix n'a été fait, afficher la bannière
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
    onAccept();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setVisible(false);
    onDecline();
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-2xl overflow-hidden transform transition-all animate-fade-in-up">
        <div className="relative">
          {/* Décoration graphique */}
          <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-blue-500 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500 rounded-full opacity-20 translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="p-5 md:p-8 md:flex md:items-center md:justify-between relative z-10">
            <div className="flex items-start mb-6 md:mb-0 md:mr-8">
              <div className="hidden md:flex mr-5 bg-white bg-opacity-20 p-3 rounded-full">
                <Cookie className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Améliorez votre expérience avec les cookies</h3>
                <p className="text-white text-opacity-90 mb-2">
                  Nous utilisons des cookies pour personnaliser votre expérience et vous offrir le meilleur service possible.
                  En acceptant, vous nous aidez à améliorer notre site et à vous proposer du contenu pertinent.
                </p>
                <Link to="/politique-de-confidentialite" className="text-white underline hover:text-blue-200 text-sm inline-block">
                  En savoir plus sur notre politique de confidentialité
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 md:min-w-[200px]">
              <button
                onClick={handleDecline}
                className="px-5 py-2.5 border border-white border-opacity-30 rounded-lg text-sm font-medium text-white hover:bg-white hover:bg-opacity-10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                Refuser
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2.5 bg-white border border-transparent rounded-lg text-sm font-medium text-blue-700 hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 shadow-lg"
              >
                <span className="flex items-center justify-center">
                  <Cookie className="h-4 w-4 mr-2" />
                  Accepter
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
