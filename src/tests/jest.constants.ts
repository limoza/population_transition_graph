export const HOKKAIDO = { prefCode: 1, prefName: '北海道' };
export const TOKYO = { prefCode: 13, prefName: '東京' };
export const OSAKA = { prefCode: 27, prefName: '大阪' };
export const INITIAL_SELECTED_PREFS_STATE = {
  selectedPrefs: [HOKKAIDO, TOKYO],
};

export const PREF_POPULATION_DATA = [
  {
    label: '総人口',
    data: [
      { year: 2020, value: 5381733 },
      { year: 2015, value: 5381733 },
      { year: 2010, value: 5381733 },
    ],
  },
  {
    label: '若年人口',
    data: [
      { year: 2020, value: 5381733 },
      { year: 2015, value: 5381733 },
      { year: 2010, value: 5381733 },
    ],
  },
  {
    label: '生産年齢人口',
    data: [
      { year: 2020, value: 5381733 },
      { year: 2015, value: 5381733 },
      { year: 2010, value: 5381733 },
    ],
  },
  {
    label: '老年人口',
    data: [
      { year: 2020, value: 5381733 },
      { year: 2015, value: 5381733 },
      { year: 2010, value: 5381733 },
    ],
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
