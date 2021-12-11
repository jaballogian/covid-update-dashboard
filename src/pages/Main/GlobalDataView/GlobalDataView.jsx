import React, { useEffect } from 'react'

// SERVICES
import { getYesterdayCovidGlobalData } from 'services/covid/getCovidApi'

const GlobalDataView = () => {
  const fetchGetYesterdayCovidGlobalData = async () => {
    const data = await getYesterdayCovidGlobalData()
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
