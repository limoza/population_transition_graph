import React, { useEffect, useState } from 'react';
import { useGetPrefsData } from '@/lib/hooks/useGetPrefsData';
import { PrefecturesCheckbox } from '@/Components/PrefecturesCheckbox/PrefecturesCheckbox';
import type { Prefectures } from '@/types';

export const PrefecturesCheckboxList = () => {
  const [prefsData, setPrefsData] = useState<Prefectures>([]);
  const { data, loading, error } = useGetPrefsData();
  useEffect(() => {
    if (!loading && !error && data) {
      setPrefsData(data);
    }
  }, [data, error, loading]);
  return (
    <ul>
      {prefsData.map((prefData) => (
        <PrefecturesCheckbox key={prefData.prefCode} prefData={prefData} />
      ))}
    </ul>
  );
};
