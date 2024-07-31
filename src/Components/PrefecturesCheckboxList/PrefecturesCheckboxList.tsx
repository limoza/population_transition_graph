import React, { useEffect, useState } from 'react';
import { useGetPrefsData } from '@/lib/hooks/useGetPrefsData';
import { PrefecturesCheckbox } from '@/Components/PrefecturesCheckbox/PrefecturesCheckbox';
import type { Prefectures } from '@/types';

export const PrefecturesCheckboxList = () => {
  const [prefsData, setPrefsData] = useState<Prefectures>([]);
  const { data, loading, error } = useGetPrefsData();

  useEffect(() => {
    if (data) setPrefsData(data);
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {prefsData.map((prefData) => (
        <PrefecturesCheckbox key={prefData.prefCode} prefData={prefData} />
      ))}
    </ul>
  );
};
