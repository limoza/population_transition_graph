import { isPrefSelected } from '@/lib/helper/isPrefSelected';
import { ADD_PREFECTURE, REMOVE_PREFECTURE } from '@/lib/reducer/constants';
import type {
  Prefecture,
  SelectedPrefsState,
  HandleSelectedPrefsAction,
} from '@/types';

export const handlePrefSelect = (
  prefData: Prefecture,
  state: SelectedPrefsState,
  dispatch: React.Dispatch<HandleSelectedPrefsAction>,
) => {
  if (isPrefSelected(prefData, state)) {
    dispatch({ type: REMOVE_PREFECTURE, payload: prefData });
  } else {
    dispatch({ type: ADD_PREFECTURE, payload: prefData });
  }
};
