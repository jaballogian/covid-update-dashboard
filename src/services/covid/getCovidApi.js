export const getYesterdayCovidCountryListApi = async () => {
  const baseUrl = process.env.REACT_APP_API_CORONA_BASE_URL
  const completeUrl = `${baseUrl}countries?yesterday&sort`
  
  const response = await fetch(completeUrl, {
    method: 'GET',
  })

  const responseJson = await response.json()
  return responseJson
}

export const getYesterdayCovidGlobalData = async () => {
  const baseUrl = process.env.REACT_APP_API_CORONA_BASE_URL
  const completeUrl = `${baseUrl}all?yesterday`
  
  const response = await fetch(completeUrl, {
    method: 'GET',
  })

  const responseJson = await response.json()
  return responseJson
}

export const getHistoricalCovidGlobalData = async () => {
  const firstRecordDate = '01/01/2020'
  const timeDifference = new Date().getTime() - new Date(firstRecordDate).getTime()
  const totalDaysCount = Math.ceil(timeDifference / (1000 * 3600 * 24))

  const baseUrl = process.env.REACT_APP_API_CORONA_BASE_URL
  const completeUrl = `${baseUrl}historical/all?lastdays=${totalDaysCount}`
  
  const response = await fetch(completeUrl, {
    method: 'GET',
  })

  const responseJson = await response.json()
  return responseJson
}