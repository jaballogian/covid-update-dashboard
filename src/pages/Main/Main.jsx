import React from 'react'

// COMPONENTS
import GlobalDataView from './GlobalDataView/GlobalDataView'
import FilterView from './FilterView/FilterView'
import ListView from './ListView/ListView'
import TableView from './TableView/TableView'

const Main = () => {
  return (
    <div>
      <GlobalDataView/>
      <FilterView/>
      <ListView/>
      <TableView/>
    </div>
  )
}

export default Main
