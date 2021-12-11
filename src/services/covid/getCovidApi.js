export const getYesterdayCovidCountryListApi = async () => {
  const baseUrl = process.env.REACT_APP_API_CORONA_BASE_URL
  const completeUrl = `${baseUrl}countries?yesterday&sort`
  
  const response = await fetch(completeUrl, {
    method: 'GET',
  })

  const responseJson = await response.json()
  return responseJson
}

export const fotmatGetYesterdayCovidCountryListApi = (inputData) => {
  const output = inputData.map(item => {
    return {
      ...item,
      id: item.country,
    }
  })
  return output
}