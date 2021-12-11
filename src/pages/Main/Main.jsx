import React from 'react'

// COMPONENTS
import GlobalDataView from './GlobalDataView/GlobalDataView'
import FilterView from './FilterView/FilterView'
import TableView from './TableView/TableView'

const Main = () => {
  return (
    <div>
      <GlobalDataView/>
      <FilterView/>
      <TableView/>
    </div>
  )
}

export default Main
