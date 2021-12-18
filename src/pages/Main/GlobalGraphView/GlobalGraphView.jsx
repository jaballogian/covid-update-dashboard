import React, { useState, useEffect } from 'react'

// APEX CHARTS
import ReactApexChart from 'react-apexcharts'

// CONFIGS
import { 
  getGraphOptions, 
  getGraphSeries, 
} from './globalGraphViewConfigurations'

// MUI
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

// SERVICES
import { getHistoricalCovidGlobalData } from 'services/covid/getCovidApi'

const GlobalGraphView = () => {
  const [ graphData, setGraphData ] = useState([])

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
                options={getGraphOptions(item.dateList)}
                series={getGraphSeries(item.title, item.valueList)}
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
