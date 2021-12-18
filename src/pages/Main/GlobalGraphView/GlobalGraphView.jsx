import React, { useState, useEffect } from 'react'

// APEX CHARTS
import ReactApexChart from 'react-apexcharts'

// MUI
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

// SERVICES
import { getHistoricalCovidGlobalData } from 'services/covid/getCovidApi'

const GlobalGraphView = () => {
  const [ graphData, setGraphData ] = useState([])

  const options = {
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
    }
  }

  const series = [
    {
      name: 'Desktops',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }
  ]

  const fetchGetHistoricalCovidGlobalData = async () => {
    let data = await getHistoricalCovidGlobalData()
    data = [
      {
        title: 'Daily Cases',
        dateList: Object.keys(data.cases).map(key => key),
        valueList: Object.keys(data.cases).map(key => data.cases[key]),
      },
      {
        title: 'Daily Deaths',
        dateList: Object.keys(data.deaths).map(key => key),
        valueList: Object.keys(data.deaths).map(key => data.deaths[key]),
      },
      {
        title: 'Daily Recovered',
        dateList: Object.keys(data.recovered).map(key => key),
        valueList: Object.keys(data.recovered).map(key => data.recovered[key]),
      },
    ]
    setGraphData(data)
  }

  useEffect(() => {
    fetchGetHistoricalCovidGlobalData()

    return () => fetchGetHistoricalCovidGlobalData()
  }, [])

  return (
    <div>
      <Grid container>
        {graphData.map((item, index) => (
          <Grid 
            key={index}
            item
            xs={12}
            md={4}
          >
            <Card>
              <ReactApexChart
                options={options}
                series={series}
                type='area'
                height={200}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default GlobalGraphView
