import React, { useEffect } from 'react'

// SERVICES
import { getHistoricalCovidGlobalData } from 'services/covid/getCovidApi'

const GlobalGraphView = () => {
  const fetchGetHistoricalCovidGlobalData = async () => {
    const data = await getHistoricalCovidGlobalData()
    console.log(data)
  }

  useEffect(() => {
    fetchGetHistoricalCovidGlobalData()

    return () => fetchGetHistoricalCovidGlobalData()
  }, [])
  
  return (
    <div>
      Global Graph View
    </div>
  )
}

export default GlobalGraphView
