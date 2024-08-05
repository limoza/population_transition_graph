import { jest, describe, expect, it, beforeAll, afterAll } from '@jest/globals';
import { fetchData } from '@/lib/helper/fetchData';
import { PREF_POPULATION_DATA } from '@/tests/jest.constants';

const URL =
  'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=1';

describe('fetchData', () => {
  beforeAll(() => {
    (global.fetch as jest.Mock) = jest.fn();
  });

  afterAll(() => {
    (global.fetch as jest.Mock).mockRestore();
  });

  it('データをフェッチし、正しいレスポンスを返す', async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(
      () =>
        Promise.resolve({
          json: jest.fn().mockResolvedValueOnce({
            result: PREF_POPULATION_DATA,
          } as never),
          ok: true,
        }) as unknown as Response,
    );

    const data = await fetchData(URL);
    expect(data).toEqual({ result: PREF_POPULATION_DATA });
  });

  it('フェッチエラーを正しく処理する', async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(
      () =>
        Promise.resolve({
          json: jest.fn().mockResolvedValueOnce({
            message: 'RESAS-APIへのリクエストが失敗しました',
          } as never),
          ok: false,
          status: 404,
        }) as unknown as Response,
    );

    await expect(fetchData(URL)).rejects.toThrow(
      'RESAS-APIへのリクエストが失敗しました',
    );
  });

  it('should handle fetch error correctly', async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(
      () =>
        Promise.resolve({
          json: jest.fn().mockResolvedValueOnce({
            message: 'RESAS-APIへのリクエストが失敗しました',
          } as never),
          ok: false,
          status: 404,
        }) as unknown as Response,
    );

    await expect(fetchData(URL)).rejects.toThrow(
      'RESAS-APIへのリクエストが失敗しました',
    );
  });
});
