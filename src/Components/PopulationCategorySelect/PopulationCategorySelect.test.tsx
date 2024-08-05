import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PopulationCategorySelect } from '@/Components/PopulationCategorySelect/PopulationCategorySelect';

describe('PopulationCategorySelect component', () => {
  it('オプションを含むセレクトボックスがレンダリングされること', () => {
    const onChange = jest.fn();
    render(<PopulationCategorySelect onChange={onChange} />);

    const selectBox = screen.getByLabelText('区分選択:');
    expect(selectBox).toBeInTheDocument();
    expect(selectBox).toHaveValue('totalPopulation');

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(4);

    fireEvent.change(selectBox, { target: { value: 'youngPopulation' } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(selectBox).toHaveValue('youngPopulation');
  });
});
