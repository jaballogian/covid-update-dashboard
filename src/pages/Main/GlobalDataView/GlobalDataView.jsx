import React, { useState, useEffect } from 'react'

// MUI
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// SERVICES
import { getYesterdayCovidGlobalData } from 'services/covid/getCovidApi'

// STYLES
import useStyles from './globalDataUseStyles'

// UTILS
import { abbreviateNumber } from 'utils/formatNumberView'

const GlobalDataView = () => {
  const classes = useStyles()

  const [ globalData, setGlobalData ] = useState(null)

  const fetchGetYesterdayCovidGlobalData = async () => {
    const data = await getYesterdayCovidGlobalData()
    setGlobalData(data)
  }

  const cardList = globalData &&
  [
    {
      title: 'Total Cases',
      value: abbreviateNumber(globalData.cases),
    },
    {
      title: 'Total Actives',
      value: abbreviateNumber(globalData.active),
    },
    {
      title: 'Total Deaths',
      value: abbreviateNumber(globalData.deaths),
    },
    {
      title: 'Total Recovered',
      value: abbreviateNumber(globalData.recovered),
    },
  ]

  useEffect(() => {
    fetchGetYesterdayCovidGlobalData()
  }, [])

  return (
    <div className={classes.globalDataRoot}>
      {cardList &&
      <Grid container spacing={'24px'}>
        {cardList.map((item, index) => (
          <Grid 
            key={index}
            item
            xs={12}
            sm={6}
            md={3}
          >
            <Card className={classes.itemCard}>
              {/* TITLE */}
              <Typography 
                variant='h5' 
                className={classes.cardText}
              >
                {item.title}
              </Typography>

              {/* VAlUE */}
              <Typography 
                variant='h3' 
                className={classes.cardText}
              >
                {item.value}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>}
    </div>
  )
}

export default GlobalDataView
