import React, { useState, useEffect } from 'react'

// SERVICES
import { getYesterdayCovidGlobalData } from 'services/covid/getCovidApi'

const GlobalDataView = () => {
  const [ globalData, setGlobalData ] = useState(null)

  const fetchGetYesterdayCovidGlobalData = async () => {
    const data = await getYesterdayCovidGlobalData()
    setGlobalData(data)
  }

  useEffect(() => {
    fetchGetYesterdayCovidGlobalData()
  }, [])

  return (
    <div>
      Global Data View
    </div>
  )
}

export default GlobalDataView
