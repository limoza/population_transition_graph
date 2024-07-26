import { createContext } from 'react';
import type { HandleSelectedPrefsAction, SelectedPrefsState } from '@/types';

export const SelectedPrefsContext = createContext<
  | {
      selectedPrefsState: SelectedPrefsState;
      selectedPrefsDispatch: React.Dispatch<HandleSelectedPrefsAction>;
    }
  | undefined
>(undefined);
