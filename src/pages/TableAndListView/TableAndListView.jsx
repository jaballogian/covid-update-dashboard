import React, { useState, useEffect } from 'react'

// MATERIAL UI
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'

// SERVICES
import { 
  getCovidCountryListApi, 
  fotmatGetCovidCountryListApi, 
} from 'services/covid/getCovidApi'

// STYLES
import useStyles from './tableAndListViewUseStyles'

const TableAndListView = () => {
  const classes = useStyles()

  const [ tableData, setTableData ] = useState([])

  const columns = [
    {
      field: 'no',
      headerName: '#',
      flex: 0,
      width: 50,
    },
    {
      field: 'name',
      headerName: 'Country',
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <div className={classes.flexContainer}>
          <img
            src={`https://flagcdn.com/w20/${params.row.code.toLowerCase()}.png`}
            alt=''
            className={classes.dataGridCountryName}
          />
          <Typography variant='subtitle2'>
            {params.value}
          </Typography>
        </div>
      ),
    },
    {
      field: 'formatted_latest_confirmed',
      headerName: 'Total Cases',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'formatted_today_confirmed',
      headerName: 'Today New Cases',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'formatted_latest_deaths',
      headerName: 'Total Deaths',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'formatted_today_deaths',
      headerName: 'Today New Deaths',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'formatted_latest_recovered',
      headerName: 'Total Recovered',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'formatted_death_rate',
      headerName: 'Death Rate',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'formatted_recovery_rate',
      headerName: 'Recovery Rate',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'population',
      headerName: 'Population',
      flex: 1,
      minWidth: 150,
    },
  ]

  const fetchFormatGetCovidCountryListApi = async () => {
    let data = await getCovidCountryListApi()
    data = fotmatGetCovidCountryListApi(data.data)

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
        disableColumnMenu
      />
    </div>
  )
}

export default TableAndListView
