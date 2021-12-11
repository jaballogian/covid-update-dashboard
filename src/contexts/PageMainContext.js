import React, { createContext, useState } from 'react'

const PageMainContext = createContext()

const PageMainContextProvider = (props) => {
  // ARRAY
  const [ covidCountryListData, setCovidCountryListData ] = useState([])

  // OBJECT
  const [ search, setSearch ] = useState(null)

  // STRING
  const [ generalOrDetail, setGeneralOrDetail ] = useState('general')

  const changeCovidCountryListData = (inputListData) => {
    setCovidCountryListData(inputListData)
  }

  const changeSearch = (inputObject) => {
    setSearch(inputObject)
  }

  const changeGeneralOrDetail = (inputState) => {
    setGeneralOrDetail(inputState)
  }

  return (
    <PageMainContext.Provider
      value={{
        covidCountryListData, changeCovidCountryListData,
        search, changeSearch,
        generalOrDetail, changeGeneralOrDetail,
      }}
    >
      {props['children']}
    </PageMainContext.Provider>
  )
}

export { PageMainContextProvider, PageMainContext }