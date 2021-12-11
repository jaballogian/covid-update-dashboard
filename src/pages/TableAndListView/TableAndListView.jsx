import React, { useState, useEffect } from 'react'

// MATERIAL UI
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'

// SERVICES
import { 
  getYesterdayCovidCountryListApi, 
  fotmatGetYesterdayCovidCountryListApi, 
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
      field: 'country',
      headerName: 'Country',
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <div className={classes.flexContainer}>
          <img
            src={params.row.countryInfo.flag}
            alt=''
            className={classes.dataGridCountryFlag}
          />
          <Typography variant='subtitle2'>
            {params.value}
          </Typography>
        </div>
      ),
    },
    {
      field: 'cases',
      headerName: 'Total Cases',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'todayCases',
      headerName: 'Today New Cases',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'deaths',
      headerName: 'Total Deaths',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'todayDeaths',
      headerName: 'Today New Deaths',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'recovered',
      headerName: 'Total Recovered',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'todayRecovered',
      headerName: 'Today Recovered',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'tests',
      headerName: 'Total Test',
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

  const fetchFotmatGetYesterdayCovidCountryListApi = async () => {
    let data = await getYesterdayCovidCountryListApi()
    data = fotmatGetYesterdayCovidCountryListApi(data)
    
    data = data.map((item, index) => {
      return {
        ...item,
        no: index + 1,
      }
    })
    setTableData(data)
  }

  useEffect(() => {
    fetchFotmatGetYesterdayCovidCountryListApi()
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
