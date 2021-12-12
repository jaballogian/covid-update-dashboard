import React, { useState, useEffect } from 'react'

// MUI
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// SERVICES
import { getYesterdayCovidGlobalData } from 'services/covid/getCovidApi'

// UTILS
import { convertTimestampToStringDate } from 'utils/formatDate'

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
      title: 'Total Recovered',
      value: globalData.recovered,
    },
    {
      title: 'Updated At',
      value: convertTimestampToStringDate(globalData.updated / 1000),
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
            item
            xs={12}
            sm={6}
            md={3}
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
