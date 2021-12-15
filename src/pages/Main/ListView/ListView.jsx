import React, { useContext } from 'react'

// CONTEXTS
import { PageMainContext } from 'contexts/PageMainContext'

const ListView = () => {
  const { covidCountryListData } = useContext(PageMainContext)

  return (
    <div>
      List View
    </div>
  )
}

export default ListView
