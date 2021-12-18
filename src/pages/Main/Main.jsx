import React, { useContext } from 'react'

// COMPONENTS
import GlobalDataView from './GlobalCardView/GlobalCardView'
import GlobalGraphView from './GlobalGraphView/GlobalGraphView'
import FilterView from './FilterView/FilterView'
import ListView from './CountryListView/CountryListView'
import TableView from './CountryTableView/CountryTableView'

// CONTEXTS
import { AllPagesContext } from 'contexts/AllPagesContext'

const Main = () => {
  const { breakpointType } = useContext(AllPagesContext)

  return (
    <div>
      <GlobalDataView/>
      <GlobalGraphView/>
      <FilterView/>
      {(breakpointType === 'xs' || breakpointType === 'sm') ?
      <ListView/> :
      <TableView/>}
    </div>
  )
}

export default Main
