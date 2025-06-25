import { Instagram, Mail, MapPin } from 'lucide-react';
import logo from '/img/pecemon-logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-2 h-8 w-32">
              <img src={logo} alt="Pécémons" />
            </div>
            <p className="text-gray-400 mb-6">
              Des PC reconditionnés de qualité avec la chance exceptionnelle de
              recevoir un MacBook Pro.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/pecemon.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.tiktok.com/@pecemon_official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Accueil
                </a>
              </li>
              {/* <li>
                <a
                  href="/pikabook"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pikabook
                </a>
              </li> */}
              <li>
                <a
                  href="/process"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Processus
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Informations</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/process"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              {/* <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Garantie
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Légaux</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/cgv"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  CGV
                </a>
              </li>

              <li>
                <a
                  href="/mentions-legales"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mentions légales
                </a>
              </li>

              <li>
                <a
                  href="/politique-de-confidentialite"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="">
                <Mail className="h-5 w-5 mb-2 text-gray-400" />
                <span className="text-gray-400">pecemon.contact@gmail.com</span>
              </div>

              <div className="">
                <MapPin className="h-5 w-5 mb-2 text-gray-400" />
                <span className="text-gray-400">Marcq en Baroeul, France</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© 2025 Pécémon. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
