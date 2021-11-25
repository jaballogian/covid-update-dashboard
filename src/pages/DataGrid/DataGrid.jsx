import React, { useEffect } from 'react'

// SERVICES
import { getCovidCountryListApi } from 'services/covid/getCovidApi'

// STYLES
import useStyles from './dataGridUseStyles'

const DataGrid = () => {
  const classes = useStyles()

  const fetchGetCovidCountryListApi = async () => {
    const data = await getCovidCountryListApi()
    console.log(data)
  }

  useEffect(() => {
    fetchGetCovidCountryListApi()
  }, [])

  return (
    <div className={classes.dataGridroot}>
      Data Grid
    </div>
  )
}

export default DataGrid
