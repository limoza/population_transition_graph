import React from 'react';
import { PrefecturesCheckboxList } from '@/Components/PrefecturesCheckboxList/PrefecturesCheckboxList';
import { PopulationChartContainer } from '@/Components/PopulationChartContainer/PopulationChartContainer';

export const Application = () => {
  return (
    <div>
      <h1>人口推移グラフ</h1>
      <PrefecturesCheckboxList />
      <PopulationChartContainer />
    </div>
  );
};
