import React, { useState, useEffect } from 'react'

// SERVICES
import { getYesterdayCovidGlobalData } from 'services/covid/getCovidApi'

const GlobalDataView = () => {
  const [ globalData, setGlobalData ] = useState(null)

  const fetchGetYesterdayCovidGlobalData = async () => {
    const data = await getYesterdayCovidGlobalData()
    setGlobalData(data)
  }

  const cardList = globalData &&
  [
    {
      title: 'Total Cases',
      value: globalData.cases,
    },
    {
      title: 'Total Deaths',
      value: globalData.deaths,
    },
    {
      title: 'Total Recovery',
      value: globalData.recovered,
    },
  ]

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
