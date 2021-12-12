import React, { createContext, useState } from 'react'

const PageMainContext = createContext()

const PageMainContextProvider = (props) => {
  // ARRAY
  const [ covidCountryListData, setCovidCountryListData ] = useState([])

  // BOOLEAN
  const [ isAbbreviated, setIsAbbreviated ] = useState(true)

  // OBJECT
  const [ search, setSearch ] = useState(null)

  const changeCovidCountryListData = (inputListData) => {
    setCovidCountryListData(inputListData)
  }

  const changeIsAbbreviated = (inputState) => {
    setIsAbbreviated(inputState)
  }

  const changeSearch = (inputObject) => {
    setSearch(inputObject)
  }

  return (
    <PageMainContext.Provider
      value={{
        covidCountryListData, changeCovidCountryListData,
        isAbbreviated, changeIsAbbreviated,
        search, changeSearch,
      }}
    >
      {props['children']}
    </PageMainContext.Provider>
  )
}

export { PageMainContextProvider, PageMainContext }