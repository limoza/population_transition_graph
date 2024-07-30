import { fetchData } from '@/lib/helper/fetchData';
import type { PopulationData } from '@/types';

export const fetchPopulationData = async (
  prefCode: number,
): Promise<PopulationData> => {
  const URL = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`;
  const result = await fetchData(URL);

  return {
    prefCode,
    prefPopulationData: result.result?.data,
  };
};
