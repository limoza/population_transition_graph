import React from 'react';
import { POPULATION_CATEGORY_OPTIONS } from '@/constants';
import type { PopulationCategoryId } from '@/types';

type Props = {
  onChange: (_categoryId: PopulationCategoryId) => void;
};

export const PopulationCategorySelect = ({ onChange }: Props) => (
  <div>
    <select onChange={(e) => onChange(e.target.value as PopulationCategoryId)}>
      {POPULATION_CATEGORY_OPTIONS.map((option) => (
        <option key={option.id} value={option.id}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);
