import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorBox } from '@/Components/ErrorBox/ErrorBox';

describe('ErrorBox component', () => {
  it('ErrorBoxコンポーネントがレンダリングされる', () => {
    render(<ErrorBox>This is an error message</ErrorBox>);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});
