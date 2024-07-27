import { describe, it, expect } from '@jest/globals';
import { isPrefSelected } from '@/lib/helper/isPrefSelected';
import {
  TOKYO,
  OSAKA,
  INITIAL_SELECTED_PREFS_STATE,
} from '@/tests/jest.constants';
import type { Prefecture, SelectedPrefsState } from '@/types';

describe('isPrefSelectedのテスト', () => {
  const initialState: SelectedPrefsState = INITIAL_SELECTED_PREFS_STATE;

  it('都道府県が選択されている場合にtrueを返す', () => {
    const state: SelectedPrefsState = initialState;
    const prefData: Prefecture = TOKYO;
    const result = isPrefSelected(prefData, state);
    expect(result).toBe(true);
  });

  it('都道府県が選択されていない場合にfalseを返す', () => {
    const state: SelectedPrefsState = initialState;
    const prefData: Prefecture = OSAKA;
    const result = isPrefSelected(prefData, state);
    expect(result).toBe(false);
  });
});
