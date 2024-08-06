import React, { useState } from 'react';
import { PopulationChart } from '@/Components/PopulationChart/PopulationChart';
import {
  POPULATION_CATEGORY_OPTIONS,
  POPULATION_CATEGORY_INDEX,
} from '@/constants';
import { PopulationCategorySelect } from '@/Components/PopulationCategorySelect/PopulationCategorySelect';
import type { PopulationCategoryId } from '@/types';
import { css } from '@linaria/core';
import { spacing } from '@/styles/variables';

const initialPopulationCategory = {
  categoryId: POPULATION_CATEGORY_OPTIONS[0].id,
  index: 0,
};

export const PopulationChartContainer = () => {
  const [populationCategory, setPopulationCategory] = useState(
    initialPopulationCategory,
  );

  const handlePopulationCategoryChange = (categoryId: PopulationCategoryId) =>
    setPopulationCategory({
      categoryId: categoryId,
      index: POPULATION_CATEGORY_INDEX[categoryId],
    });

  return (
    <section className={chartContainer}>
      <PopulationCategorySelect onChange={handlePopulationCategoryChange} />
      <PopulationChart populationCategoryIndex={populationCategory.index} />
    </section>
  );
};

const chartContainer = css`
  margin-top: ${spacing[4]};
`;
