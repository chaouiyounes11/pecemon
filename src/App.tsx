import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CookieConsent from './components/CookieConsent';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

import PokemonQuiz from './components/PokemonQuiz';
import ShapoWidget from './components/ShapoWidget';
import WhatsAppButton from './components/WhatsAppButton';
import CGVPage from './pages/CGVPage';
import ExamplesPage from './pages/ExamplesPage';
import LegalMentionsPage from './pages/LegaleMentionsPage';
import PecemonItemShowcasePage from './pages/PecemonItemShowcasePage';
import PecemonProcessPage from './pages/PecemonProcessPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ProductPage from './pages/ProductPage';
import ThankYouPage from './pages/ThankYouPage';
import { CookieManager } from './utils/CookieManager';
import ScrollToTop from './utils/ScrollToTop';
const HomePage = () => (
  <>
    <Header />
    <Hero />
    <PecemonItemShowcasePage />
    <ShapoWidget />
    <PokemonQuiz />
    <FAQ />
    <Footer />
    <WhatsAppButton phoneNumber="+33756830317" />
  </>
);

function App() {
  useEffect(() => {
    // Vérifier le consentement des cookies au chargement de l'application
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent === 'accepted') {
      CookieManager.enableTracking();
    } else if (cookieConsent === 'declined') {
      CookieManager.disableTracking();
    }
  }, []);

  const handleAcceptCookies = () => {
    CookieManager.enableTracking();
  };

  const handleDeclineCookies = () => {
    CookieManager.disableTracking();
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exemples" element={<ExamplesPage />} />
          <Route path="/process" element={<PecemonProcessPage />} />
          <Route path="/mentions-legales" element={<LegalMentionsPage />} />
          <Route path="/cgv" element={<CGVPage />} />
          <Route path="/merci" element={<ThankYouPage />} />
          <Route
            path="/politique-de-confidentialite"
            element={<PrivacyPolicyPage />}
          />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/category/:type" element={<ExamplesPage />} />
        </Routes>
      </div>
      <CookieConsent
        onAccept={handleAcceptCookies}
        onDecline={handleDeclineCookies}
      />
    </Router>
  );
}

export default App;
