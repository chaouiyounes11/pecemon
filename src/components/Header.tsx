import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/img/pecemon-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).dataLayer.push({
      event: 'click_order_now_navbar',
    });
  };

  const toggleMenuAndHandleClick = () => {
    setIsMenuOpen(!isMenuOpen);
    handleClick();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <div className="flex items-center space-x-2 w-32">
              <img src={logo} alt="Pécémons" />
            </div>
          </Link>
          {/* Menu pour desktop - reste inchangé */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Accueil
            </Link>
            <Link to="/#pecemon" className="text-blue-pecemon font-medium">
              Pécémon
            </Link>
            <Link
              to="/#faq"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              FAQ
            </Link>
          </nav>

          {/* Bouton Commander pour desktop */}
          <Link
            to="/#pecemon"
            onClick={handleClick}
            className="hidden md:inline-block bg-blue-pecemon text-sm hover:bg-blue-pecemon/80 text-yellow-pecemon px-6 py-2 rounded-full font-semibold transition-colors text-center"
          >
            Commander maintenant
          </Link>

          {/* Bouton menu pour mobile */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu mobile qui s'affiche lorsque isMenuOpen est true */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              {/* <Link
                to="/pikabook"
                className="text-gray-700 hover:text-blue-600 font-medium px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Pikabook
              </Link> */}
              <Link to="/#pecemon" className="text-blue-pecemon font-medium">
                Pécémon
              </Link>
              <Link
                to="/#faq"
                className="text-gray-700 hover:text-blue-600 font-medium px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                to="/#pecemon"
                className="bg-blue-pecemon text-sm hover:bg-blue-pecemon/80 text-yellow-pecemon px-6 py-2 rounded-full font-semibold transition-colors inline-block text-center mx-4 my-2"
                onClick={toggleMenuAndHandleClick}
              >
                Commander maintenant
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
