import React from 'react';
import { render, screen } from '@testing-library/react';
import { NoteBox } from '@/Components/NoteBox/NoteBox';

describe('NoteBox component', () => {
  it('NoteBoxコンポーネントがレンダリングされる', () => {
    render(<NoteBox>都道府県を選択してください</NoteBox>);
    expect(screen.getByText('都道府県を選択してください')).toBeInTheDocument();
  });
});
