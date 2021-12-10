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

export const fotmatGetCovidCountryListApi = (inputData) => {
  const output = inputData.map(item => {
    return {
      ...item,
      id: item.code,
      formatted_today_deaths: item.today.deaths,
      formatted_today_confirmed: item.today.confirmed,
      formatted_latest_deaths: item.latest_data.deaths,
      formatted_latest_confirmed: item.latest_data.confirmed,
      formatted_latest_recovered: item.latest_data.recovered,
      formatted_death_rate: item.latest_data.calculated.death_rate,
      formatted_recovery_rate: item.latest_data.calculated.recovery_rate,
    }
  })
  return output
}