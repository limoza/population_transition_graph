import type { Prefectures, PopulationData } from '@/types';

type Result = {
  onlyInSelectedPrefsState: number | undefined;
  onlyInPopulationData: number | undefined;
};

export const findDifferences = (
  selectedPrefsState: Prefectures,
  populationData: PopulationData[],
): Result => {
  const isSelectedPrefsStateEmpty = selectedPrefsState.length === 0;
  const isPopulationDataEmpty = populationData.length === 0;

  const isInitialLoad = isSelectedPrefsStateEmpty && isPopulationDataEmpty;
  if (isInitialLoad) {
    const result = {
      onlyInSelectedPrefsState: undefined,
      onlyInPopulationData: undefined,
    };
    return result;
  }

  const isPrefUnchecked = isSelectedPrefsStateEmpty && !isPopulationDataEmpty;
  if (isPrefUnchecked) {
    const result = {
      onlyInSelectedPrefsState: undefined,
      onlyInPopulationData: populationData[0].prefCode,
    };
    return result;
  }

  const onlyInSelectedPrefsState = selectedPrefsState.find(
    (a) => !populationData.some((b) => b.prefCode === a.prefCode),
  )?.prefCode;

  const onlyInPopulationData = populationData.find(
    (b) => !selectedPrefsState.some((a) => a.prefCode === b.prefCode),
  )?.prefCode;

  const result = {
    onlyInSelectedPrefsState,
    onlyInPopulationData,
  };
  return result;
};
