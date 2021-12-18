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
import Typography from '@mui/material/Typography'

// SERVICES
import { getHistoricalCovidGlobalData } from 'services/covid/getCovidApi'

// STYLES
import useStyles from './globalGraphViewUseStyles'

const GlobalGraphView = () => {
  const classes = useStyles()

  const [ graphData, setGraphData ] = useState([])

  const fetchGetHistoricalCovidGlobalData = async () => {
    let data = await getHistoricalCovidGlobalData()
    data = [
      {
        title: 'Historical Cases',
        dateList: Object.keys(data.cases).map(key => key),
        valueList: Object.keys(data.cases).map(key => data.cases[key]),
      },
      {
        title: 'Historical Deaths',
        dateList: Object.keys(data.deaths).map(key => key),
        valueList: Object.keys(data.deaths).map(key => data.deaths[key]),
      },
    ]
    setGraphData(data)
  }

  useEffect(() => {
    fetchGetHistoricalCovidGlobalData()

    return () => fetchGetHistoricalCovidGlobalData()
  }, [])

  return (
    <div className={classes.globalGraphViewRoot}>
      <Grid 
        container
        spacing={'24px'}
      >
        {graphData.map((item, index) => (
          <Grid 
            key={index}
            item
            xs={12}
            md={6}
          >
            <Card className={classes.itemCard}>
              {/* TITLE */}
              <Typography 
                variant='h5' 
                className={classes.cardText}
              >
                {item.title}
              </Typography>

              {/* CHART */}
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
