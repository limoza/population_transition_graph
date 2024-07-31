import { describe, it, expect } from '@jest/globals';
import { createHighchartsOptions } from '@/lib/helper/createHighchartsOptions';
import { HIGHCHARTS_SERIES_DATA } from '@/tests/jest.constants';

describe('createHighchartsOptions', () => {
  it('正しいoptionが返される', () => {
    const expected = {
      title: {
        text: '都道府県別 総人口推移グラフ',
        align: 'left',
      },
      yAxis: {
        title: {
          text: '人口',
        },
        accessibility: {
          rangeDescription: '人口',
        },
      },
      xAxis: {
        title: {
          text: '年度',
        },
        accessibility: {
          rangeDescription: 'Range: 1980 to 2045',
        },
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
      },
      plotOptions: {
        series: {
          pointStart: 1960,
          pointInterval: 5,
        },
      },
      series: HIGHCHARTS_SERIES_DATA,
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
              },
            },
          },
        ],
      },
      accessibility: {
        enabled: false,
      },
    };

    const result = createHighchartsOptions(HIGHCHARTS_SERIES_DATA);

    expect(result).toEqual(expected);
  });
});
