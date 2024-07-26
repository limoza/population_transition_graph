export type Prefectures = Prefecture[];
export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type HandleSelectedPrefsAction =
  | { type: 'ADD_PREFECTURE'; payload: Prefecture }
  | { type: 'REMOVE_PREFECTURE'; payload: Prefecture };

export type SelectedPrefsState = {
  selectedPrefs: Prefectures | [];
};
