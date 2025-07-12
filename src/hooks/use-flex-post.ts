import { useState, useCallback } from 'react';
import { getRandomFlex } from '@/data/flexData';

export interface FlexPost {
  image: string;
  caption: string;
}

export const useFlexPost = () => {
  const [currentFlex, setCurrentFlex] = useState<FlexPost>(() => getRandomFlex());

  const generateNewFlex = useCallback(() => {
    setCurrentFlex(getRandomFlex());
  }, []);

  return { currentFlex, generateNewFlex };
}; 