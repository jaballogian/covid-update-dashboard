import React, { createContext, useState } from 'react'

const PageMainContext = createContext()

const PageMainContextProvider = (props) => {
  // ARRAY
  const [ covidCountryListData, setCovidCountryListData ] = useState([])

  // OBJECT
  const [ search, setSearch ] = useState(null)

  const changeCovidCountryListData = (inputListData) => {
    setCovidCountryListData(inputListData)
  }

  const changeSearch = (inputObject) => {
    setSearch(inputObject)
  }

  return (
    <PageMainContext.Provider
      value={{
        covidCountryListData, changeCovidCountryListData,
        search, changeSearch,
      }}
    >
      {props['children']}
    </PageMainContext.Provider>
  )
}

export { PageMainContextProvider, PageMainContext }