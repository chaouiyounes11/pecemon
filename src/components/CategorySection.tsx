import { useEffect, useState } from 'react';
import { Pecemon } from '../data/PecemonCategoryData';
import { supabase } from '../utils/supabase';
import PecemonItemShowcase from './PecemonItemShowcase';

const ExampleCategoryPage = () => {
  const [pecemons, setPecemons] = useState<Pecemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPecemons() {
      try {
        setLoading(true);
        // Use the correct table name from Supabase
        const { data, error } = await supabase
          .from('Pecemon - n8n')
          .select('*');

        if (error) {
          throw new Error(error.message);
        }

        if (data && data.length > 0) {
          // Map the Supabase data to match the Pecemon type
          const formattedPecemons: Pecemon[] = data.map((item: Pecemon) => ({
            id: item.id,
            type: item.type || 'herbe',
            link: item.link || '#',
            description: item.description || '',
            title: item.title || '',
            processor: item.processor || '',
            ram: item.ram || '',
            storage: item.storage || '',
            screen: item.screen || '',
            brand: item.brand || '',
            price: item.price || '',
            priceBeforeDiscount: item.priceBeforeDiscount || '',
            klarnaPrice: item.klarnaPrice || '',
            available: item.available,
            stock: item.stock ? Number(item.stock) : undefined,
            images: item.images,
          }));

          setPecemons(formattedPecemons);
        }
      } catch (err) {
        console.error('Error fetching pecemons:', err);
        setError(
          err instanceof Error ? err.message : 'Failed to fetch pecemons'
        );
      } finally {
        setLoading(false);
      }
    }

    fetchPecemons();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-700">Chargement des Pecemons...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <h3 className="text-red-700 font-semibold mb-2">Erreur</h3>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {pecemons.length > 0 ? (
        <>
          <PecemonItemShowcase
            pecemons={pecemons.filter((pecemon) => pecemon.type === 'herbe')}
          />
          <PecemonItemShowcase
            pecemons={pecemons.filter((pecemon) => pecemon.type === 'feu')}
          />
          <PecemonItemShowcase
            pecemons={pecemons.filter((pecemon) => pecemon.type === 'eau')}
          />
        </>
      ) : (
        <div className="flex items-center justify-center py-20">
          <p className="text-gray-600 font-medium">
            Aucun Pecemon disponible pour le moment.
          </p>
        </div>
      )}
    </div>
  );
};

export default ExampleCategoryPage;
