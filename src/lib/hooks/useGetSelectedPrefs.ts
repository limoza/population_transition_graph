import { useContext } from 'react';
import { SelectedPrefsContext } from '@/lib/context/SelectedPrefsContext';

export const useGetSelectedPrefs = () => {
  const context = useContext(SelectedPrefsContext);
  if (!context) {
    throw new Error(
      'error: useGetSelectedPrefs must be used within a SelectedPrefsProvider',
    );
  }
  return context;
};
