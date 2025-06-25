import { useEffect } from 'react';

const ShapoWidget = () => {
  useEffect(() => {
    // Check if the script is already loaded
    const existingScript = document.getElementById('shapo-embed-js');

    if (!existingScript) {
      // Create and load the script if it doesn't exist
      const script = document.createElement('script');
      script.id = 'shapo-embed-js';
      script.type = 'text/javascript';
      script.src = 'https://cdn.shapo.io/js/embed.js';
      script.defer = true;

      document.body.appendChild(script);
    }

    // The script might need to be reinitialized when the component mounts
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="mt-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Nos avis Truspilot
        </h2>
      </div>
      <div id="shapo-widget-98746be6f3a7c9d4e5f3"></div>
    </div>
  );
};

export default ShapoWidget;
