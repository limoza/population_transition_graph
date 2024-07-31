import React, { useState, useEffect } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useGetPopulationData } from '@/lib/hooks/useGetPopulationData';
import { useGetSelectedPrefs } from '@/lib/hooks/useGetSelectedPrefs';
import { findDifferences } from '@/lib/helper/findDifferences';
import { createHighchartsData } from '@/lib/helper/createHighchartsData';
import { createHighchartsOptions } from '@/lib/helper/createHighchartsOptions';
import type { PopulationData, HighchartsSeriesData } from '@/types';

type Props = {
  populationCategoryIndex: number;
};

export const PopulationChart = ({ populationCategoryIndex }: Props) => {
  const { selectedPrefsState } = useGetSelectedPrefs();
  const [populationData, setPopulationData] = useState<PopulationData[]>([]);
  const [highchartsSeriesData, setHighchartsSeriesData] = useState<
    HighchartsSeriesData[]
  >([]);

  const { onlyInSelectedPrefsState, onlyInPopulationData } = findDifferences(
    selectedPrefsState.selectedPrefs,
    populationData,
  );

  const { data, loading, error } = useGetPopulationData(
    onlyInSelectedPrefsState,
  );

  if (onlyInPopulationData) {
    setPopulationData((prev) => {
      const filteredUnselectedPrefs = prev.filter(
        (b: { prefCode: number }) => b.prefCode !== onlyInPopulationData,
      );
      return filteredUnselectedPrefs;
    });
  }

  useEffect(() => {
    if (data && data[0].prefPopulationData) {
      setPopulationData((prev) => [...prev, ...data]);
    }
  }, [data]);

  useEffect(() => {
    const highchartsData = createHighchartsData(
      populationData,
      populationCategoryIndex,
    );
    setHighchartsSeriesData(highchartsData);
  }, [populationCategoryIndex, populationData]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={createHighchartsOptions(highchartsSeriesData)}
      />
    </div>
  );
};
