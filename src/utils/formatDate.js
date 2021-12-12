import moment from 'moment'

export const convertTimestampToStringDate = (inputTimestamp) => {
  return moment.unix(inputTimestamp).format('DD MMM YYYY HH:mm:ss A')
} 