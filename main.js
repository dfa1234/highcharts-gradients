let svgElements = [];

const configuration1 = {
  chart: {
    type: 'area',
    spaceTop: 20,
    events: {
      render: function () {
        const chart = this;

        svgElements.forEach((element) => element.destroy());
        svgElements = [];

        const moveCursorTo = 'M';
        const drawLineTo = 'L';
        const moonPoint = chart.series[0].data[3];
        const moonPointX = moonPoint.plotX + chart.plotLeft;
        const moonPointY = moonPoint.plotY + configuration1.chart.spaceTop / 2;
        const bottomChartY = chart.plotHeight + chart.plotTop;

        const moonLine = chart.renderer
          .path([
            [moveCursorTo, moonPointX, moonPointY],
            [drawLineTo, moonPointX, bottomChartY],
          ])
          .attr({
            'stroke-width': 5,
            stroke: 'orange',
            'stroke-dasharray': 3,
            zIndex: 3,
          });

        const moonCircumference = 50;
        const moonImage = chart.renderer
          .image(
            `https://raw.githubusercontent.com/dfa1234/highcharts-gradients/master/circle.svg`,
            moonPointX - moonCircumference / 2,
            moonPointY - moonCircumference / 2,
            moonCircumference,
            moonCircumference
          )
          .attr({
            zIndex: 4,
          });

        svgElements.push(moonLine);
        svgElements.push(moonImage);
        svgElements.forEach((element) => element.add());
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
