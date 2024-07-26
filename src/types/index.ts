import { ADD_PREFECTURE, REMOVE_PREFECTURE } from '@/lib/reducer/constants';

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
