const configuration1 = {
  chart: {
    type: 'area',
    spaceTop: 20,
    events: {
      render: function () {
        const chart = this;
        const moveCursorTo = 'M';
        const drawLineTo = 'L';
        const alertPoint = chart.series[0].data[3];
        const alertPointX = alertPoint.plotX + chart.plotLeft;
        const alertPointY =
          alertPoint.plotY + configuration1.chart.spaceTop / 2;
        const bottomChartY = chart.plotHeight + chart.plotTop;

        const alertLinePath = [
          [moveCursorTo, alertPointX, alertPointY],
          [drawLineTo, alertPointX, bottomChartY],
        ];

        const alertLine = chart.renderer
          .path(alertLinePath)
          .attr({
            'stroke-width': 5,
            stroke: 'orange',
            'stroke-dasharray': 3,
            zIndex: 5,
          })
          .add();

        const alertIconCircumference = 50;

        const alertIcon = chart.renderer
          .image(
            `https://raw.githubusercontent.com/dfa1234/highcharts-gradients/master/circle.svg`,
            alertPointX - alertIconCircumference / 2,
            alertPointY - alertIconCircumference / 2,
            alertIconCircumference,
            alertIconCircumference
          )
          .attr({
            zIndex: 6,
          })
          .add();
      },
    },
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
      threshold: -15,
      fillColor: 'lightblue',
    },
  },
  series: [
    {
      name: 'Serie 1',
      zoneAxis: 'x',
      data: [5, 5, 6, 7, 6, 5, 5, 4],
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
