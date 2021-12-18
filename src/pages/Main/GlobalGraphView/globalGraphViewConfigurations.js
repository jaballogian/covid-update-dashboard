export const getGraphOptions = (inputXAxisData) => {
  return {
    chart: {
      group: 'sparks',
      type: 'area',
      height: 80,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 2,
        opacity: 0.2
      }
    },
    stroke: {
      curve: 'smooth'
    },
    markers: {
      size: 0
    },
    grid: {
      padding: {
        // top: 20,
        // bottom: 10,
        // left: 110
      }
    },
    colors: ['#ff00ff'],
    tooltip: {
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function formatter(val) {
            return ''
          }
        }
      },
      theme: 'dark'
    },
    xaxis: {
      categories: inputXAxisData,
    },
  }
}