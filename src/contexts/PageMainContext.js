import React, { createContext, useState } from 'react'

const PageMainContext = createContext()

const PageMainContextProvider = (props) => {
  // ARRAY
  const [ covidCountryListData, setCovidCountryListData ] = useState([])

  const changeCovidCountryListData = (inputListData) => {
    setCovidCountryListData(inputListData)
  }

  return (
    <PageMainContext.Provider
      value={{
        covidCountryListData, changeCovidCountryListData,
      }}
    >
      {props['children']}
    </PageMainContext.Provider>
  )
}

export { PageMainContextProvider, PageMainContext }