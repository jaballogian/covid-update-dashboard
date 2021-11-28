import React, { useState, useEffect } from 'react'

// MATERIAL UI
import { DataGrid } from '@mui/x-data-grid'

// SERVICES
import { fotmatGetCovidCountryListApi } from 'services/covid/getCovidApi'

// STYLES
import useStyles from './dataGridUseStyles'

const TableAndListView = () => {
  const classes = useStyles()

  const [ tableData, setTableData ] = useState([])

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
    setTableData(data)
  }

  useEffect(() => {
    fetchFormatGetCovidCountryListApi()
  }, [])

  return (
    <div className={classes.dataGridroot}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pagination
        rowsPerPageOptions={[ 10, 25, 50 ]}
      />
    </div>
  )
}

export default TableAndListView
