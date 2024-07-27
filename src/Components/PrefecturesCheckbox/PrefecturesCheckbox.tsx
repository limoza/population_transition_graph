import React from 'react';
import { useGetSelectedPrefs } from '@/lib/hooks/useGetSelectedPrefs';
import { isPrefSelected } from '@/lib/helper/isPrefSelected';
import { handlePrefSelect } from '@/lib/helper/handlePrefSelect';
import type { Prefecture } from '@/types';

type Props = {
  prefData: Prefecture;
};

export const PrefecturesCheckbox = ({ prefData }: Props) => {
  const { selectedPrefsState, selectedPrefsDispatch } = useGetSelectedPrefs();
  const { prefCode, prefName } = prefData;
  const isSelected = isPrefSelected(prefData, selectedPrefsState);

  return (
    <li>
      <label>
        <input
          type='checkbox'
          name={prefName}
          checked={isSelected}
          onChange={() =>
            handlePrefSelect(
              {
                prefCode: prefCode,
                prefName: prefName,
              },
              selectedPrefsState,
              selectedPrefsDispatch,
            )
          }
        />
        {prefName}
      </label>
    </li>
  );
};
