import React, { createContext } from 'react'

const PageMainContext = createContext()

const PageMainContextProvider = (props) => {
  return (
    <PageMainContext.Provider
      value={{
      }}
    >
      {props['children']}
    </PageMainContext.Provider>
  )
}

export { PageMainContextProvider, PageMainContext }