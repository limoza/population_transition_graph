import React, { useReducer, ReactNode } from 'react';
import { selectedPrefsReducer } from '@/lib/reducer/selectedPrefsReducer';
import { SelectedPrefsContext } from '@/lib/context/SelectedPrefsContext';
import type { HandleSelectedPrefsAction, SelectedPrefsState } from '@/types';

type Props = { children: ReactNode };

export const SelectedPrefsProvider = ({ children }: Props) => {
  const [selectedPrefsState, selectedPrefsDispatch] = useReducer<
    React.Reducer<SelectedPrefsState, HandleSelectedPrefsAction>
  >(selectedPrefsReducer, {
    selectedPrefs: [],
  });

  return (
    <SelectedPrefsContext.Provider
      value={{ selectedPrefsState, selectedPrefsDispatch }}
    >
      {children}
    </SelectedPrefsContext.Provider>
  );
};
