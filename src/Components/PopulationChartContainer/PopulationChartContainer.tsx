import React, { useState } from 'react';
import { PopulationChart } from '@/Components/PopulationChart/PopulationChart';
import {
  POPULATION_CATEGORY_OPTIONS,
  POPULATION_CATEGORY_INDEX,
} from '@/constants';
import { PopulationCategorySelect } from '@/Components/PopulationCategorySelect/PopulationCategorySelect';
import type { PopulationCategoryId } from '@/types';

export const PopulationChartContainer = () => {
  const [populationCategory, setPopulationCategory] = useState<{
    categoryId: PopulationCategoryId;
    index: number;
  }>({ categoryId: POPULATION_CATEGORY_OPTIONS[0].id, index: 0 });

  const handlePopulationCategoryChange = (categoryId: PopulationCategoryId) =>
    setPopulationCategory({
      categoryId: categoryId,
      index: POPULATION_CATEGORY_INDEX[categoryId],
    });

  return (
    <div>
      <h2>Population Chart</h2>
      <PopulationCategorySelect onChange={handlePopulationCategoryChange} />
      <PopulationChart populationCategory={populationCategory} />
    </div>
  );
};
