import { ADD_PREFECTURE, REMOVE_PREFECTURE } from '@/lib/reducer/constants';
import {
  TOTAL_POPULATION_ID,
  YOUNG_POPULATION_ID,
  WORKING_AGE_POPULATION_ID,
  ELDERLY_POPULATION_ID,
  TOTAL_POPULATION_LABEL,
  YOUNG_POPULATION_LABEL,
  WORKING_AGE_POPULATION_LABEL,
  ELDERLY_POPULATION_LABEL,
} from '@/constants';

export type Prefectures = Prefecture[];
export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type HandleSelectedPrefsAction =
  | { type: typeof ADD_PREFECTURE; payload: Prefecture }
  | { type: typeof REMOVE_PREFECTURE; payload: Prefecture };

export type SelectedPrefsState = {
  selectedPrefs: Prefectures | [];
};

export type PrefPopulationData = {
  label: string;
  data: {
    year: number;
    value: number;
    rate?: number;
  }[];
};

export type PopulationData = {
  prefCode: number;
  prefName: string;
  prefPopulationData: PrefPopulationData[];
};

export type PopulationCategoryId =
  | typeof TOTAL_POPULATION_ID
  | typeof YOUNG_POPULATION_ID
  | typeof WORKING_AGE_POPULATION_ID
  | typeof ELDERLY_POPULATION_ID;

type PopulationCategoryLabel =
  | typeof TOTAL_POPULATION_LABEL
  | typeof YOUNG_POPULATION_LABEL
  | typeof WORKING_AGE_POPULATION_LABEL
  | typeof ELDERLY_POPULATION_LABEL;

export type PopulationCategory = {
  id: PopulationCategoryId;
  label: PopulationCategoryLabel;
};

export type PopulationCategories = PopulationCategory[];

export type SelectedPopulationCategory = {
  categoryId: PopulationCategoryId;
  index: number;
};

export type HighchartsSeriesData = {
  name: string;
  type: string;
  data: [number, number][];
};
