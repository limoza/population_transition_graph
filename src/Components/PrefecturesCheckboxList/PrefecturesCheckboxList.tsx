import React from 'react';
import type { Prefectures } from '@/types';
import { PrefecturesCheckbox } from '@/Components/PrefecturesCheckbox/PrefecturesCheckbox';

type Props = {
  prefsData: Prefectures;
};

export const PrefecturesCheckboxList = ({ prefsData }: Props) => (
  <ul>
    {prefsData.map((prefData) => (
      <PrefecturesCheckbox key={prefData.prefCode} prefData={prefData} />
    ))}
  </ul>
);
