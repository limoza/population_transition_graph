import React, { useState } from 'react';
import { PopulationChart } from '@/Components/PopulationChart/PopulationChart';
import { POPULATION_CATEGORY_OPTIONS } from '@/constants';
import { PopulationCategorySelect } from '@/Components/PopulationCategorySelect/PopulationCategorySelect';
import type { PopulationCategoryId } from '@/types';

export const PopulationChartContainer = () => {
  const [populationCategory, setPopulationCategory] = useState(
    POPULATION_CATEGORY_OPTIONS[0].id,
  );
  const handlePopulationCategoryChange = (categoryId: string) =>
    setPopulationCategory(categoryId as PopulationCategoryId);

  return (
    <div>
      <h2>Population Chart</h2>
      <PopulationCategorySelect onChange={handlePopulationCategoryChange} />
      <PopulationChart populationCategory={populationCategory} />
    </div>
  );
};
