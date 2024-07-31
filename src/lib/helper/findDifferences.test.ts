import { describe, it, expect } from '@jest/globals';
import { findDifferences } from '@/lib/helper/findDifferences';
import {
  INITIAL_SELECTED_PREFS_STATE,
  POPULATION_DATA,
  PREF_POPULATION_DATA,
} from '@/tests/jest.constants';
import type { Prefectures, PopulationData } from '@/types';

describe('findDifferences', () => {
  const selectedPrefsState: Prefectures =
    INITIAL_SELECTED_PREFS_STATE.selectedPrefs;
  const populationData: PopulationData[] = POPULATION_DATA;

  it('初回ロード時に空の結果を返す', () => {
    const result = findDifferences([], []);
    expect(result.onlyInSelectedPrefsState).toBeUndefined();
    expect(result.onlyInPopulationData).toBeUndefined();
  });

  it('selectedPrefsStateが空の場合にonlyInPopulationDataを返す', () => {
    const result = findDifferences([], populationData);
    expect(result.onlyInSelectedPrefsState).toBeUndefined();
    expect(result.onlyInPopulationData).toBe(POPULATION_DATA[0].prefCode);
  });

  it('populationDataが空の場合にonlyInSelectedPrefsStateを返す', () => {
    const result = findDifferences(selectedPrefsState, []);
    expect(result.onlyInSelectedPrefsState).toBe(
      selectedPrefsState[0].prefCode,
    );
    expect(result.onlyInPopulationData).toBeUndefined();
  });

  it('selectedPrefsStateに存在し、populationDataに存在しないprefCodeを返すべき', () => {
    const selectedPrefsState = [
      { prefCode: 1, prefName: 'Prefecture 1' },
      { prefCode: 2, prefName: 'Prefecture 2' },
      { prefCode: 3, prefName: 'Prefecture 3' },
    ];
    const populationData = [
      { prefCode: 1, prefPopulationData: PREF_POPULATION_DATA },
      { prefCode: 3, prefPopulationData: PREF_POPULATION_DATA },
    ];
    const result = findDifferences(selectedPrefsState, populationData);
    expect(result.onlyInSelectedPrefsState).toBe(2);
  });

  it('populationDataに存在し、selectedPrefsStateに存在しないprefCodeを返すべき', () => {
    const selectedPrefsState = [
      { prefCode: 1, prefName: 'Prefecture 1' },
      { prefCode: 3, prefName: 'Prefecture 3' },
    ];
    const populationData = [
      { prefCode: 1, prefPopulationData: PREF_POPULATION_DATA },
      { prefCode: 2, prefPopulationData: PREF_POPULATION_DATA },
      { prefCode: 3, prefPopulationData: PREF_POPULATION_DATA },
    ];
    const result = findDifferences(selectedPrefsState, populationData);
    expect(result.onlyInPopulationData).toBe(2);
  });

  it('selectedPrefsStateのすべてのprefCodeがpopulationDataに存在する場合にundefinedを返すべき', () => {
    const selectedPrefsState = [
      { prefCode: 1, prefName: 'Prefecture 1' },
      { prefCode: 2, prefName: 'Prefecture 2' },
      { prefCode: 3, prefName: 'Prefecture 3' },
    ];
    const populationData = [
      { prefCode: 1, prefPopulationData: PREF_POPULATION_DATA },
      { prefCode: 2, prefPopulationData: PREF_POPULATION_DATA },
      { prefCode: 3, prefPopulationData: PREF_POPULATION_DATA },
    ];
    const result = findDifferences(selectedPrefsState, populationData);
    expect(result.onlyInSelectedPrefsState).toBeUndefined();
  });
});
