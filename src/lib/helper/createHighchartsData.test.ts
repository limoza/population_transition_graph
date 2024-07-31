import { describe, it, expect } from '@jest/globals';
import { createHighchartsData } from '@/lib/helper/createHighchartsData';
import {
  POPULATION_DATA,
  HIGHCHARTS_SERIES_DATA,
} from '@/tests/jest.constants';

describe('createHighchartsData', () => {
  it('人口データをHighchartsのデータ形式に変換する', () => {
    const categoryIndex = 0;
    const expected = HIGHCHARTS_SERIES_DATA;

    const result = createHighchartsData(POPULATION_DATA, categoryIndex);

    expect(result).toEqual(expected);
  });
});
