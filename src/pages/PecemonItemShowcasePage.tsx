import { useEffect, useState } from 'react';
import PecemonItemShowcase from '../components/PecemonItemShowcase';
import { Pecemon } from '../types/pecemon';
import { supabase } from '../utils/supabase';

const PecemonItemShowcasePage = () => {
  // Combine all pecemon data for demonstration
  const [pecemons, setPecemons] = useState<Pecemon[]>([]);

  useEffect(() => {
    const getAllPecemons = async () => {
      const { data, error } = await supabase.from('Pecemon - n8n').select('*');
      if (error) {
        console.error('Error fetching pecemons:', error);
      } else {
        setPecemons(data);
      }
    };
    getAllPecemons();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-8">
        {/* <h1 className="text-3xl font-bold text-center mb-8">
          Pecemon Showcase
        </h1> */}

        {/* You can also display specific categories */}
        {pecemons.filter((pecemon) => pecemon.type === 'herbe').length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-6">
              Pecemon Herbe
            </h2>
            <PecemonItemShowcase
              pecemons={pecemons.filter((pecemon) => pecemon.type === 'herbe')}
            />
          </div>
        )}

        {pecemons.filter((pecemon) => pecemon.type === 'eau').length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-6">Pecemon Eau</h2>
            <PecemonItemShowcase
              pecemons={pecemons.filter((pecemon) => pecemon.type === 'eau')}
            />
          </div>
        )}

        {pecemons.filter((pecemon) => pecemon.type === 'feu').length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-6">Pecemon Feu</h2>
            <PecemonItemShowcase
              pecemons={pecemons.filter((pecemon) => pecemon.type === 'feu')}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PecemonItemShowcasePage;
