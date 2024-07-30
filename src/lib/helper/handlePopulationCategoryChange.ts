import type { PopulationCategoryId } from '@/types';

export const handlePopulationCategoryChange = (
  setPopulationCategory: React.Dispatch<PopulationCategoryId>,
  categoryId: string,
) => setPopulationCategory(categoryId as PopulationCategoryId);
