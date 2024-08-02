import React from 'react';
import { POPULATION_CATEGORY_OPTIONS } from '@/constants';
import type { PopulationCategoryId } from '@/types';
import { css } from '@linaria/core';
import { spacing } from '@/styles/variables';

type Props = {
  onChange: (_categoryId: PopulationCategoryId) => void;
};

export const PopulationCategorySelect = ({ onChange }: Props) => (
  <div className={selectBoxWrap}>
    <label htmlFor='populationCategory'>区分選択: </label>
    <select
      id='populationCategory'
      className={selectBox}
      onChange={(e) => onChange(e.target.value as PopulationCategoryId)}
    >
      {POPULATION_CATEGORY_OPTIONS.map((option) => (
        <option key={option.id} value={option.id}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const selectBoxWrap = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const selectBox = css`
  margin-left: ${spacing[2]};
  padding: ${spacing[1]};
`;
