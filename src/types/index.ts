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

export type PopulationData = {
  prefCode: number;
  prefPopulationData: {
    label: string;
    data: {
      year: number;
      value: number;
    };
  };
};
