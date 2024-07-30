import React, { useState, useEffect } from 'react';
import { useGetPopulationData } from '@/lib/hooks/useGetPopulationData';
import { useGetSelectedPrefs } from '@/lib/hooks/useGetSelectedPrefs';
import { findDifferences } from '@/lib/helper/findDifferences';
import type { PopulationCategoryId, PopulationData } from '@/types';

type Props = {
  populationCategory: PopulationCategoryId;
};

export const PopulationChart = ({ populationCategory }: Props) => {
  const { selectedPrefsState } = useGetSelectedPrefs();
  const [populationData, setPopulationData] = useState<PopulationData[]>([]);
  const { onlyInSelectedPrefsState, onlyInPopulationData } = findDifferences(
    selectedPrefsState.selectedPrefs,
    populationData,
  );
  const { data, loading, error } = useGetPopulationData(
    onlyInSelectedPrefsState,
  );

  useEffect(() => {
    if (!onlyInPopulationData) return;
    setPopulationData((prev) => {
      const filteredUnselectedPrefs = prev.filter(
        (b: { prefCode: number }) => b.prefCode !== onlyInPopulationData,
      );
      return filteredUnselectedPrefs;
    });
  }, [onlyInPopulationData]);

  useEffect(() => {
    if (data && data[0].prefPopulationData) {
      setPopulationData((prev) => [...prev, ...data]);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>WIP</div>;
};
