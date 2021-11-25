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