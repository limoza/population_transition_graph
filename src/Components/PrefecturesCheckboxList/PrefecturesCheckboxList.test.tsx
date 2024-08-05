import React, { act } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PrefecturesCheckboxList } from '@/Components/PrefecturesCheckboxList/PrefecturesCheckboxList';
import { SelectedPrefsProvider } from '@/lib/context/SelectedPrefsProvider';
import { HOKKAIDO, OSAKA, TOKYO } from '@/tests/jest.constants';

beforeAll(() => {
  (global.fetch as jest.Mock) = jest.fn((url) => {
    if (url.includes('prefectures')) {
      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            result: [HOKKAIDO, TOKYO, OSAKA],
          }),
      });
    }
    return Promise.reject(new Error('RESAS-APIへのリクエストが失敗しました'));
  });
});
describe('PrefecturesCheckboxList component', () => {
  const renderWithProviders = (ui: React.ReactElement) => {
    return render(<SelectedPrefsProvider>{ui}</SelectedPrefsProvider>);
  };

  it('チェックボックスリストが表示される', async () => {
    await act(async () => {
      renderWithProviders(<PrefecturesCheckboxList />);
    });
    expect(screen.getByText('北海道')).toBeInTheDocument();
    expect(screen.getByText('東京')).toBeInTheDocument();
    expect(screen.getByText('大阪')).toBeInTheDocument();
  });

  it('チェックボックスを選択できる', async () => {
    await act(async () => {
      renderWithProviders(<PrefecturesCheckboxList />);
    });

    const checkbox = screen.getByLabelText('北海道');
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });
});
