import React from 'react'

// STYLES
import useStyles from './dataGridUseStyles'

const DataGrid = () => {
  const classes = useStyles()

  return (
    <div className={classes.dataGridroot}>
      Data Grid
    </div>
  )
}

export default DataGrid
