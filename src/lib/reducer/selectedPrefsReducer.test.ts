import { describe, it, expect } from '@jest/globals';
import { selectedPrefsReducer } from '@/lib/reducer/selectedPrefsReducer';
import { ADD_PREFECTURE, REMOVE_PREFECTURE } from '@/lib/reducer/constants';
import {
  TOKYO,
  OSAKA,
  INITIAL_SELECTED_PREFS_STATE,
} from '@/tests/jest.constants';
import type {
  SelectedPrefsState,
  Prefecture,
  HandleSelectedPrefsAction,
} from '@/types';

describe('selectedPrefsReducer', () => {
  const initialState: SelectedPrefsState = INITIAL_SELECTED_PREFS_STATE;

  it('ADD_PREFECTUREアクションがdispatchされたときに新しい都道府県が追加されること', () => {
    const payload: Prefecture = OSAKA;
    const action: HandleSelectedPrefsAction = {
      type: ADD_PREFECTURE,
      payload,
    };
    const newState = selectedPrefsReducer(initialState, action);
    expect(newState.selectedPrefs).toHaveLength(3);
    expect(newState.selectedPrefs).toContainEqual(payload);
  });

  it('REMOVE_PREFECTUREアクションがdispatchされたときに既存の都道府県が削除されること', () => {
    const payload: Prefecture = TOKYO;
    const action: HandleSelectedPrefsAction = {
      type: REMOVE_PREFECTURE,
      payload,
    };
    const newState = selectedPrefsReducer(initialState, action);
    expect(newState.selectedPrefs).toHaveLength(1);
    expect(newState.selectedPrefs).not.toContainEqual(payload);
  });
});
