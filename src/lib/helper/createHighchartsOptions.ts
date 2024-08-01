import type { HighchartsSeriesData } from '@/types';

export const createHighchartsOptions = (
  highchartsSeriesData: HighchartsSeriesData[],
) => {
  return {
    title: {
      text: '',
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
    series: highchartsSeriesData,
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
};
