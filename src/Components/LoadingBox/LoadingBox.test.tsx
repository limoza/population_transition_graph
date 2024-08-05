import React from 'react';
import { render, screen } from '@testing-library/react';
import { LoadingBox } from '@/Components/LoadingBox/LoadingBox';

describe('LoadingBox component', () => {
  it('LoadingBoxコンポーネントがレンダリングされる', () => {
    render(<LoadingBox />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
