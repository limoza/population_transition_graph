import type { PopulationData } from '@/types';

export const createHighchartsData = (
  populationData: PopulationData[],
  categoryIndex: number,
) => {
  const result = populationData.map((data) => {
    const currentCategoryPopulationData =
      data.prefPopulationData[categoryIndex];
    const transformToHighchartsData: [number, number][] =
      currentCategoryPopulationData.data.map((item) => [item.year, item.value]);
    return {
      name: data.prefName,
      type: 'line',
      data: transformToHighchartsData,
    };
  });

  return result;
};
