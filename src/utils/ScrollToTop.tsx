import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component handles scrolling to top when navigating between routes
// and also handles scroll restoration when using the browser's back/forward buttons
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  // Function to scroll to an element with a given ID
  const scrollToElement = (elementId: string) => {
    // Delay to ensure the DOM is fully loaded
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        // Get header height to offset scroll position
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;

        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerHeight - 20; // 20px extra padding

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 100);
  };

  // Handle hash changes in URL
  useEffect(() => {
    // If there's a hash in the URL (like #faq), scroll to that element
    if (hash) {
      scrollToElement(hash.substring(1));
    } else {
      // If no hash, scroll to top of the page
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Re-run when pathname or hash changes

  // Add click event listeners to all hash links
  useEffect(() => {
    const handleHashLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.pathname === window.location.pathname) {
        event.preventDefault();
        const elementId = link.hash.substring(1);
        scrollToElement(elementId);
        
        // Update the URL without triggering a page reload
        window.history.pushState(null, '', link.hash);
      }
    };

    // Add event listener to the document
    document.addEventListener('click', handleHashLinkClick);

    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener('click', handleHashLinkClick);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
