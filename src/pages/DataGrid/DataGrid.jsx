import React, { useEffect } from 'react'

// SERVICES
import { fotmatGetCovidCountryListApi } from 'services/covid/getCovidApi'

// STYLES
import useStyles from './dataGridUseStyles'

const DataGrid = () => {
  const classes = useStyles()

  const columns = [
    {
      field: 'no',
      headerName: '#',
      flex: 0,
      width: 100,
    },
    // FORMATTED COUNTRY HERE,
    {
      field: 'formatted_latest_confirmed',
      headerName: 'Total Cases',
      flex: 1,
      minWidth: 200,
    },
    {
      field: 'formatted_today_confirmed',
      headerName: 'Today New Cases',
      flex: 1,
      minWidth: 200,
    },
    {
      field: 'formatted_latest_deaths',
      headerName: 'Total Deaths',
      flex: 1,
      minWidth: 200,
    },
    {
      field: 'formatted_today_deaths',
      headerName: 'Today New Deaths',
      flex: 1,
      minWidth: 200,
    },
    {
      field: 'formatted_latest_recovered',
      headerName: 'Total Recovered',
      flex: 1,
      minWidth: 200,
    },
    {
      field: 'formatted_death_rate',
      headerName: 'Death Rate',
      flex: 1,
      minWidth: 200,
    },
    {
      field: 'formatted_recovery_rate',
      headerName: 'Recovery Rate',
      flex: 1,
      minWidth: 200,
    },
    {
      field: 'population',
      headerName: 'Population',
      flex: 1,
      minWidth: 200,
    },
  ]

  const fetchFormatGetCovidCountryListApi = async () => {
    let data = await fotmatGetCovidCountryListApi()

    data = data.map((item, index) => {
      return {
        ...item,
        no: index + 1,
      }
    })
    console.log(data)
  }

  useEffect(() => {
    fetchFormatGetCovidCountryListApi()
  }, [])

  return (
    <div className={classes.dataGridroot}>
      Data Grid
    </div>
  )
}

export default DataGrid
