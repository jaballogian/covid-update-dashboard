import React, { useState, useEffect, useContext } from 'react'

// CONTEXTS
import { PageMainContext } from 'contexts/PageMainContext'

// MATERIAL UI
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'

// SERVICES
import { getYesterdayCovidCountryListApi } from 'services/covid/getCovidApi'

// STYLES
import useStyles from './tableViewUseStyles'

// UTILS
import { abbreviateNumber } from 'utils/formatNumberView'

const TableView = () => {
  const { 
    covidCountryListData, 
    changeCovidCountryListData, 
    search,
    abbreviatedOrDetail,
  } = useContext(PageMainContext)

  const classes = useStyles()

  const [ pageSize, setPageSize ] = useState(25)
  const [ filteredData, setFilteredData ] = useState([])

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
          {params.row.countryInfo._id &&
          <img
            src={params.row.countryInfo.flag}
            alt=''
            className={classes.dataGridCountryFlag}
          />}
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
      renderCell: (params) => (
        <Typography variant='subtitle2'>
          {abbreviatedOrDetail === 'abbreviated' ?
          abbreviateNumber(params.value) :
          params.value}
        </Typography>
      ),
    },
    {
      field: 'todayCases',
      headerName: 'Today New Cases',
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <Typography variant='subtitle2'>
          {abbreviatedOrDetail === 'abbreviated' ?
          abbreviateNumber(params.value) :
          params.value}
        </Typography>
      ),
    },
    {
      field: 'deaths',
      headerName: 'Total Deaths',
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <Typography variant='subtitle2'>
          {abbreviatedOrDetail === 'abbreviated' ?
          abbreviateNumber(params.value) :
          params.value}
        </Typography>
      ),
    },
    {
      field: 'todayDeaths',
      headerName: 'Today New Deaths',
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <Typography variant='subtitle2'>
          {abbreviatedOrDetail === 'abbreviated' ?
          abbreviateNumber(params.value) :
          params.value}
        </Typography>
      ),
    },
    {
      field: 'recovered',
      headerName: 'Total Recovered',
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <Typography variant='subtitle2'>
          {abbreviatedOrDetail === 'abbreviated' ?
          abbreviateNumber(params.value) :
          params.value}
        </Typography>
      ),
    },
    {
      field: 'todayRecovered',
      headerName: 'Today Recovered',
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <Typography variant='subtitle2'>
          {abbreviatedOrDetail === 'abbreviated' ?
          abbreviateNumber(params.value) :
          params.value}
        </Typography>
      ),
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

  const fetchGetYesterdayCovidCountryListApi = async () => {
    let data = await getYesterdayCovidCountryListApi()
    
    data = data.map((item, index) => {
      return {
        ...item,
        id: item.country,
        no: index + 1,
      }
    })
    changeCovidCountryListData(data)
  }

  useEffect(() => {
    if(search) {
      const newData = covidCountryListData.filter(item => item.country === search.country)
      setFilteredData(newData)
    }
  }, [search])

  useEffect(() => {
    fetchGetYesterdayCovidCountryListApi()
  }, [])

  return (
    <div className={classes.dataGridroot}>
      <DataGrid
        rows={search ? filteredData : covidCountryListData}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[ 10, 25, 50, 100 ]}
        disableColumnMenu
      />
    </div>
  )
}

export default TableView
