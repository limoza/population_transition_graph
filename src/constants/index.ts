import { PopulationCategories } from '@/types';

export const TOTAL_POPULATION_ID = 'totalPopulation';
export const YOUNG_POPULATION_ID = 'youngPopulation';
export const WORKING_AGE_POPULATION_ID = 'workingAgePopulation';
export const ELDERLY_POPULATION_ID = 'elderlyPopulation';

export const TOTAL_POPULATION_LABEL = '総人口';
export const YOUNG_POPULATION_LABEL = '年少人口';
export const WORKING_AGE_POPULATION_LABEL = '生産年齢人口';
export const ELDERLY_POPULATION_LABEL = '老年人口';

export const POPULATION_CATEGORY_OPTIONS: PopulationCategories = [
  {
    id: TOTAL_POPULATION_ID,
    label: TOTAL_POPULATION_LABEL,
  },
  {
    id: YOUNG_POPULATION_ID,
    label: YOUNG_POPULATION_LABEL,
  },
  {
    id: WORKING_AGE_POPULATION_ID,
    label: WORKING_AGE_POPULATION_LABEL,
  },
  {
    id: ELDERLY_POPULATION_ID,
    label: ELDERLY_POPULATION_LABEL,
  },
];
