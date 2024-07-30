import React from 'react';
import { PrefecturesCheckboxList } from '@/Components/PrefecturesCheckboxList/PrefecturesCheckboxList';
import { PopulationChartContainer } from '@/Components/PopulationChartContainer/PopulationChartContainer';

export const Application = () => {
  return (
    <div>
      <PrefecturesCheckboxList />
      <PopulationChartContainer />
    </div>
  );
};
