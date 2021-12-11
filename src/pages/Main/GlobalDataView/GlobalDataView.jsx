import React, { useState, useEffect } from 'react'

// MUI
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// SERVICES
import { getYesterdayCovidGlobalData } from 'services/covid/getCovidApi'

const GlobalDataView = () => {
  const [ globalData, setGlobalData ] = useState(null)

  const fetchGetYesterdayCovidGlobalData = async () => {
    const data = await getYesterdayCovidGlobalData()
    setGlobalData(data)
  }

  const cardList = globalData &&
  [
    {
      title: 'Total Cases',
      value: globalData.cases,
    },
    {
      title: 'Total Deaths',
      value: globalData.deaths,
    },
    {
      title: 'Total Recovery',
      value: globalData.recovered,
    },
  ]

  useEffect(() => {
    fetchGetYesterdayCovidGlobalData()
  }, [])

  return (
    <>
      {cardList &&
      <Grid container>
        {cardList.map((item, index) => (
          <Grid 
            key={index}
            xs={12}
            md={4}
          >
            <Card>
              {/* TITLE */}
              <Typography>
                {item.title}
              </Typography>

              {/* VAlUE */}
              <Typography>
                {item.value}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>}
    </>
  )
}

export default GlobalDataView
