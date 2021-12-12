import React, { createContext, useState } from 'react'

const PageMainContext = createContext()

const PageMainContextProvider = (props) => {
  // ARRAY
  const [ covidCountryListData, setCovidCountryListData ] = useState([])

  // OBJECT
  const [ search, setSearch ] = useState(null)

  // STRING
  const [ abbreviatedOrDetail, setAbbreviatedOrDetail ] = useState('abbreviated')

  const changeCovidCountryListData = (inputListData) => {
    setCovidCountryListData(inputListData)
  }

  const changeSearch = (inputObject) => {
    setSearch(inputObject)
  }

  const changeAbbreviatedOrDetail = (inputState) => {
    setAbbreviatedOrDetail(inputState)
  }

  return (
    <PageMainContext.Provider
      value={{
        covidCountryListData, changeCovidCountryListData,
        search, changeSearch,
        abbreviatedOrDetail, changeAbbreviatedOrDetail,
      }}
    >
      {props['children']}
    </PageMainContext.Provider>
  )
}

export { PageMainContextProvider, PageMainContext }