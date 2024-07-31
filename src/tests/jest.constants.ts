import type { HighchartsSeriesData } from '@/types';

export const HOKKAIDO = { prefCode: 1, prefName: '北海道' };
export const TOKYO = { prefCode: 13, prefName: '東京' };
export const OSAKA = { prefCode: 27, prefName: '大阪' };
export const INITIAL_SELECTED_PREFS_STATE = {
  selectedPrefs: [HOKKAIDO, TOKYO],
};

export const PREF_POPULATION_DATA_ITEM = [
  { year: 2020, value: 5381733 },
  { year: 2015, value: 5381733 },
  { year: 2010, value: 5381733 },
];

export const PREF_POPULATION_DATA = [
  {
    label: '総人口',
    data: PREF_POPULATION_DATA_ITEM,
  },
  {
    label: '若年人口',
    data: PREF_POPULATION_DATA_ITEM,
  },
  {
    label: '生産年齢人口',
    data: PREF_POPULATION_DATA_ITEM,
  },
  {
    label: '老年人口',
    data: PREF_POPULATION_DATA_ITEM,
  },
];

export const POPULATION_DATA = [
  {
    prefCode: 1,
    prefName: '北海道',
    prefPopulationData: PREF_POPULATION_DATA,
  },
  {
    prefCode: 13,
    prefName: '東京',
    prefPopulationData: PREF_POPULATION_DATA,
  },
  {
    prefCode: 27,
    prefName: '大阪',
    prefPopulationData: PREF_POPULATION_DATA,
  },
];

export const HIGHCHARTS_SERIES_DATA_ITEM: [number, number][] = [
  [2020, 5381733],
  [2015, 5381733],
  [2010, 5381733],
];

export const HIGHCHARTS_SERIES_DATA: HighchartsSeriesData[] = [
  {
    name: '北海道',
    type: 'line',
    data: HIGHCHARTS_SERIES_DATA_ITEM,
  },
  {
    name: '東京',
    type: 'line',
    data: HIGHCHARTS_SERIES_DATA_ITEM,
  },
  {
    name: '大阪',
    type: 'line',
    data: HIGHCHARTS_SERIES_DATA_ITEM,
  },
];
