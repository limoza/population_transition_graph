import { describe, it, expect } from '@jest/globals';
import {
  addPrefecture,
  removePrefecture,
} from '@/lib/actions/selectedPrefsActions';
import {
  TOKYO,
  OSAKA,
  INITIAL_SELECTED_PREFS_STATE,
} from '@/tests/jest.constants';
import type { SelectedPrefsState, Prefecture } from '@/types';

describe('selectedPrefs test', () => {
  const initialState: SelectedPrefsState = INITIAL_SELECTED_PREFS_STATE;

  it('新しい都道府県が選択された場合に追加される', () => {
    const state: SelectedPrefsState = initialState;
    const payload: Prefecture = OSAKA;
    const newState = addPrefecture(state, payload);
    expect(newState.selectedPrefs).toHaveLength(3);
    expect(newState.selectedPrefs).toContainEqual(payload);
  });

  it('既にある都道府県が選択された場合に削除される', () => {
    const state: SelectedPrefsState = initialState;
    const payload: Prefecture = TOKYO;
    const newState = removePrefecture(state, payload);
    expect(newState.selectedPrefs).toHaveLength(1);
    expect(newState.selectedPrefs).not.toContainEqual(payload);
  });
});
