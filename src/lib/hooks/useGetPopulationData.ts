import { useState, useEffect } from 'react';
import { fetchPopulationData } from '@/lib/helper/fetchPopulationData';
import type { PopulationData } from '@/types';

type Result = {
  data: PopulationData[] | null;
  loading: boolean;
  error: Error | null;
};

export const useGetPopulationData = (
  onlyInSelectedPrefsState: number | undefined,
): Result => {
  const [data, setData] = useState<PopulationData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchPopulationData(
          onlyInSelectedPrefsState as number,
        );
        setData([fetchedData]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [onlyInSelectedPrefsState]);

  return { data, loading, error };
};
