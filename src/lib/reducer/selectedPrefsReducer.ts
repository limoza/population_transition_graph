import {
  addPrefecture,
  removePrefecture,
} from '@/lib/actions/selectedPrefsActions';
import { ADD_PREFECTURE, REMOVE_PREFECTURE } from '@/lib/reducer/constants';
import type { HandleSelectedPrefsAction, SelectedPrefsState } from '@/types';

export const selectedPrefsReducer = (
  state: SelectedPrefsState,
  action: HandleSelectedPrefsAction,
): SelectedPrefsState => {
  switch (action.type) {
    case ADD_PREFECTURE:
      return addPrefecture(state, action.payload);
    case REMOVE_PREFECTURE:
      return removePrefecture(state, action.payload);
    default:
      return state;
  }
};
