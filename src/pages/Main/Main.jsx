import React, { useContext } from 'react'

// COMPONENTS
import GlobalDataView from './GlobalDataView/GlobalDataView'
import FilterView from './FilterView/FilterView'
import ListView from './ListView/ListView'
import TableView from './TableView/TableView'

// CONTEXTS
import { AllPagesContext } from 'contexts/AllPagesContext'

const Main = () => {
  const { breakpointType } = useContext(AllPagesContext)

  return (
    <div>
      <GlobalDataView/>
      <FilterView/>
      {(breakpointType === 'xs' || breakpointType === 'sm') ?
      <ListView/> :
      <TableView/>}
    </div>
  )
}

export default Main
