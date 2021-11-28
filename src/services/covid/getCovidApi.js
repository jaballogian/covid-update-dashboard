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
      formatted_country: {
        name: item.name,
        code: item.code,
      },
      formatted_today_deaths: item.today.deaths,
      formatted_today_confirmed: item.today.confirmed,
      formatted_latest_deaths: item.latest_data.deaths,
      formatted_latest_confirmed: item.latest_data.confirmed,
      formatted_latest_recovered: item.latest_data.recovered,
      formatted_latest_critical: item.latest_data.critical,
      formatted_death_rate: item.latest_data.death_rate,
      formatted_recovery_rate: item.latest_data.recovery_rate,
    }
  })
  return output
}