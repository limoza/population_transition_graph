import type { Prefecture, SelectedPrefsState } from '@/types';

export const isPrefSelected = (
  prefData: Prefecture,
  state: SelectedPrefsState,
) => {
  const result = state.selectedPrefs.some(
    (pref: Prefecture) =>
      pref.prefCode === prefData.prefCode &&
      pref.prefName === prefData.prefName,
  );

  return result;
};
