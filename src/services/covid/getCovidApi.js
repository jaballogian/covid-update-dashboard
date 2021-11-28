export const getCovidCountryListApi = async () => {
  const baseUrl = process.env.REACT_APP_API_CORONA_BASE_URL
  const completeUrl = `${baseUrl}/countries`
  
  const response = await fetch(completeUrl, {
    method: 'GET',
  })

  const responseJson = await response.json()
  console.log('responseJson', responseJson)
  return responseJson
}

export const fotmatGetCovidCountryListApi = async () => {
  const rawData = await getCovidCountryListApi()
  const output = rawData.data.map(item => {
    return {
      ...item,
      today_deaths: item.today.deaths,
      today_confirmed: item.today.confirmed,
      latest_deaths: item.latest_data.deaths,
      latest_confirmed: item.latest_data.confirmed,
      latest_recovered: item.latest_data.recovered,
      latest_critical: item.latest_data.critical,
    }
  })
  return output
}