import React, { useEffect } from 'react'

// SERVICES
import { fotmatGetCovidCountryListApi } from 'services/covid/getCovidApi'

// STYLES
import useStyles from './dataGridUseStyles'

const DataGrid = () => {
  const classes = useStyles()

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
