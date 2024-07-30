import React from 'react';
import { POPULATION_CATEGORY_OPTIONS } from '@/constants';

type Props = {
  onChange: (_categoryId: string) => void;
};

export const PopulationCategorySelect = ({ onChange }: Props) => (
  <div>
    <select onChange={(e) => onChange(e.target.value)}>
      {POPULATION_CATEGORY_OPTIONS.map((option) => (
        <option key={option.id} value={option.id}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);
