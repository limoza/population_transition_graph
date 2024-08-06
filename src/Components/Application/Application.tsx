import React from 'react';
import { PrefecturesCheckboxList } from '@/Components/PrefecturesCheckboxList/PrefecturesCheckboxList';
import { PopulationChartContainer } from '@/Components/PopulationChartContainer/PopulationChartContainer';
import { css } from '@linaria/core';
import { colors, fontSize, spacing } from '@/styles/variables';

export const Application = () => {
  return (
    <div className={base}>
      <PrefecturesCheckboxList />
      <PopulationChartContainer />
    </div>
  );
};

const base = css`
  max-width: 820px;
  margin-right: auto;
  margin-left: auto;
  padding: ${spacing[4]};
  font-size: ${fontSize.base.fontSize};
  line-height: ${fontSize.base.lineHeight};
  color: ${colors.gray[900]};
`;
