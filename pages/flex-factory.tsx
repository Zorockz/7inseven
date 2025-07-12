import React from 'react';
import { FlexCard } from '@/components/FlexFactory/FlexCard';
import { useFlexPost } from '@/hooks/use-flex-post';

// Main container component
const FlexFactoryContainer: React.FC = () => {
  const { currentFlex, generateNewFlex } = useFlexPost();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <FlexCard 
        image={currentFlex.image}
        caption={currentFlex.caption}
        onFlexAgain={generateNewFlex}
      />
    </div>
  );
};

const FlexFactory: React.FC = () => {
  return <FlexFactoryContainer />;
};

export default FlexFactory; 