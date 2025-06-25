import PecemonCategoryShowcase from '../components/PecemonCategoryShowcase';
import {
  pecemonEauData,
  pecemonFeuData,
  pecemonHerbeData,
} from '../data/PecemonCategoryData';

const ExampleCategoryPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Pécémon Herbe */}
      <PecemonCategoryShowcase {...pecemonHerbeData} />

      {/* Pécémon Eau */}
      <PecemonCategoryShowcase {...pecemonEauData} />

      {/* Pécémon Feu */}
      <PecemonCategoryShowcase {...pecemonFeuData} />
    </div>
  );
};

export default ExampleCategoryPage;
