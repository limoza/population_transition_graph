import type { PopulationData } from '@/types';

export const fetchPopulationData = async (
  prefCode: number,
): Promise<PopulationData> => {
  const response = await fetch(
    `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
    {
      headers: {
        'X-API-KEY': `${process.env.NEXT_PUBLIC_REASAS_API_KEY}`,
      },
    },
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const result = await response.json();
  return {
    prefCode,
    prefPopulationData: result.result?.data,
  };
};
