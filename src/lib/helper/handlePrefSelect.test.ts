import { jest, describe, it, expect } from '@jest/globals';
import { handlePrefSelect } from '@/lib/helper/handlePrefSelect';
import {
  TOKYO,
  OSAKA,
  INITIAL_SELECTED_PREFS_STATE,
} from '@/tests/jest.constants';
import { ADD_PREFECTURE, REMOVE_PREFECTURE } from '@/lib/reducer/constants';
import type { SelectedPrefsState, HandleSelectedPrefsAction } from '@/types';

describe('handlePrefSelect', () => {
  const initialState: SelectedPrefsState = INITIAL_SELECTED_PREFS_STATE;

  it('既に選択されている都道府県を削除する', () => {
    const state: SelectedPrefsState = {
      ...initialState,
      selectedPrefs: [TOKYO],
    };
    const dispatch: React.Dispatch<HandleSelectedPrefsAction> = jest.fn();
    handlePrefSelect(TOKYO, state, dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: REMOVE_PREFECTURE,
      payload: TOKYO,
    });
  });

  it('選択されていない都道府県を追加する', () => {
    const state: SelectedPrefsState = {
      ...initialState,
      selectedPrefs: [TOKYO],
    };
    const dispatch: React.Dispatch<HandleSelectedPrefsAction> = jest.fn();
    handlePrefSelect(OSAKA, state, dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: ADD_PREFECTURE,
      payload: OSAKA,
    });
  });
});
