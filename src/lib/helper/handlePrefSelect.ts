import type {
  Prefecture,
  SelectedPrefsState,
  HandleSelectedPrefsAction,
} from '@/types';
import { isPrefSelected } from '@/lib/helper/isPrefSelected';

export const handlePrefSelect = (
  prefData: Prefecture,
  state: SelectedPrefsState,
  dispatch: React.Dispatch<HandleSelectedPrefsAction>,
) => {
  if (isPrefSelected(prefData, state)) {
    dispatch({ type: 'REMOVE_PREFECTURE', payload: prefData });
  } else {
    dispatch({ type: 'ADD_PREFECTURE', payload: prefData });
  }
};
