import { useState, useEffect } from 'react';
import { fetchData } from '@/lib/helper/fetchData';
import { useGetSelectedPrefs } from '@/lib/hooks/useGetSelectedPrefs';
import type { PopulationData } from '@/types';

type Result = {
  data: PopulationData[] | null;
  loading: boolean;
  error: Error | null;
};

export const useGetPopulationData = (
  onlyInSelectedPrefsState: number | undefined,
): Result => {
  const { selectedPrefsState } = useGetSelectedPrefs();
  const [data, setData] = useState<PopulationData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const URL = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${onlyInSelectedPrefsState}`;

    const fetchPopulationData = async () => {
      try {
        if (!onlyInSelectedPrefsState) return;
        const fetchedData = await fetchData(URL);
        const prefName =
          selectedPrefsState.selectedPrefs.find(
            (pref) => pref.prefCode === onlyInSelectedPrefsState,
          )?.prefName || '';
        const result = [
          {
            prefCode: onlyInSelectedPrefsState,
            prefName: prefName,
            prefPopulationData: fetchedData.result.data,
          },
        ];
        setData(result);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchPopulationData();
  }, [onlyInSelectedPrefsState, selectedPrefsState.selectedPrefs]);

  return { data, loading, error };
};
