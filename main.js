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
      color: 'blue',
      threshold: null,
      fillColor: 'lightblue',
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

const chart = Highcharts.chart('container1', configuration1);
