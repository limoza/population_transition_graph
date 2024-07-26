import type { Prefecture, SelectedPrefsState } from '@/types';

export const addPrefecture = (
  state: SelectedPrefsState,
  payload: Prefecture,
): SelectedPrefsState => {
  return {
    ...state,
    selectedPrefs: [...state.selectedPrefs, payload],
  };
};

export const removePrefecture = (
  state: SelectedPrefsState,
  payload: Prefecture,
): SelectedPrefsState => {
  return {
    ...state,
    selectedPrefs: state.selectedPrefs.filter(
      (item) => item.prefCode !== payload.prefCode,
    ),
  };
};
