import React, { useState, useEffect } from 'react'

// MUI
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

// SERVICES
import { getHistoricalCovidGlobalData } from 'services/covid/getCovidApi'

const GlobalGraphView = () => {
  const [ graphData, setGraphData ] = useState([])

  const fetchGetHistoricalCovidGlobalData = async () => {
    const data = await getHistoricalCovidGlobalData()
    setGraphData([data.cases, data.deaths, data.recovered])
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
              item
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default GlobalGraphView
