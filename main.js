const configuration1 = {
  chart: {
    type: 'line',
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
    min: -9,
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    area: {
      marker: {
        radius: 5,
        fillColor: '#2e67b2',
        lineWidth: 2,
        lineColor: '#abc2e0',
      },
      allowPointSelect: true,
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1,
        },
        stops: [
          [0, 'rgba(214,237,254,0.90)'],
          [1, 'rgba(255,255,255,0.00)'],
        ],
      },
      lineWidth: 1,
      states: {
        hover: {
          lineWidth: 1,
        },
      },
      threshold: null,
    },
  },
  series: [
    {
      name: 'Serie 1',
      type: 'areaspline',
      data: [8, 8, 8, 8, 8, 8, 8, 8],
      zones: [
        // {
        //   value: 6,
        //   color: 'blue',
        //   fillColor: {
        //     stops: [
        //       [0, 'yellow'],
        //       [1, 'red'],
        //     ],
        //     linearGradient: {
        //       x1: 0, // LEFT
        //       y1: 1, // TOP
        //       x2: 0, // RIGHT
        //       y2: 0, // BOTTOM
        //     },
        //   },
        //   threshold: null,
        // },
      ],
      zoneAxis: 'x',
    },
  ],
};

////////////////
console.warn('Start');
Highcharts.chart('container1', configuration1);
const configuration2 = JSON.parse(JSON.stringify(configuration1));
configuration2.series[0].data[4] = -8;
Highcharts.chart('container2', configuration2);
