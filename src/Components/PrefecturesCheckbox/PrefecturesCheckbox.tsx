import React from 'react';
import { useGetSelectedPrefs } from '@/lib/hooks/useGetSelectedPrefs';
import { isPrefSelected } from '@/lib/helper/isPrefSelected';
import { handlePrefSelect } from '@/lib/helper/handlePrefSelect';
import type { Prefecture } from '@/types';
import { css } from '@linaria/core';
import { colors, spacing } from '@/styles/variables';

type Props = {
  prefData: Prefecture;
};

export const PrefecturesCheckbox = ({ prefData }: Props) => {
  const { selectedPrefsState, selectedPrefsDispatch } = useGetSelectedPrefs();
  const { prefCode, prefName } = prefData;
  const isSelected = isPrefSelected(prefData, selectedPrefsState);

  return (
    <li>
      <label className={isSelected ? selectedLabel : label}>
        <input
          type='checkbox'
          name={prefName}
          className={hiddenCheckbox}
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

const hiddenCheckbox = css`
  border: 0;
  clip: rect(0, 0, 0, 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const labelBase = {
  width: '4rem',
  display: 'inline-block',
  cursor: 'pointer',
  padding: spacing[2],
  backgroundColor: colors.gray[100],
  borderRadius: spacing[1],
  textAlign: 'center',
};

const label = css`
  ${labelBase};
`;

const selectedLabel = css`
  ${labelBase};
  background-color: ${colors.green[800]};
  color: ${colors.white};
`;
