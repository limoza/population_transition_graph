import React, { useEffect, useState } from 'react';
import { useGetPrefsData } from '@/lib/hooks/useGetPrefsData';
import { PrefecturesCheckboxList } from '@/Components/PrefecturesCheckboxList/PrefecturesCheckboxList';
import type { Prefectures } from '@/types';

export const Application = () => {
  const [prefsData, setPrefsData] = useState<Prefectures>([]);
  const { data, loading, error } = useGetPrefsData();

  useEffect(() => {
    if (!loading && !error && data) {
      setPrefsData(data);
    }
  }, [data, error, loading]);

  return (
    <div>
      <PrefecturesCheckboxList prefsData={prefsData} />
    </div>
  );
};
