import { useState, useEffect } from 'react';
import { fetchData } from '@/lib/helper/fetchData';

const URL = 'https://opendata.resas-portal.go.jp/api/v1/prefectures';

export const useGetPrefsData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPrefsData = async () => {
      try {
        const result = await fetchData(URL);
        setData(result.result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrefsData();
  }, []);

  return { data, loading, error };
};
