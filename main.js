const configuration1 = {
  chart: {
    type: 'area',
  },
  title: null,
  credits: {
    enabled: false,
  },
  accessibility: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  xAxis: {
    categories: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
  },
  yAxis: {
    title: null,
    min: -20,
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    area: {
      color: 'gray',
      fillColor: {
        stops: [
          [0, 'blue'],
          [1, 'purple'],
        ],
        linearGradient: {
          x1: 0, // LEFT
          y1: 1, // TOP
          x2: 0, // RIGHT
          y2: 0, // BOTTOM
        },
      },
      threshold: null,
    },
  },
  series: [
    {
      name: 'Serie 1',
      zoneAxis: 'x',
      data: [8, 8, 8, 8, 8, 8, 8, 7],
      zones: [
        {
          value: 6,
          color: 'black',
          fillColor: {
            stops: [
              [0, 'yellow'],
              [1, 'red'],
            ],
            linearGradient: {
              x1: 0, // LEFT
              y1: 1, // TOP
              x2: 0, // RIGHT
              y2: 0, // BOTTOM
            },
          },
        },
      ],
    },
  ],
};

////////////////
console.warn('Start');
Highcharts.chart('container1', configuration1);
const configuration2 = JSON.parse(JSON.stringify(configuration1));
configuration2.series[0].data[4] = -8;
Highcharts.chart('container2', configuration2);
