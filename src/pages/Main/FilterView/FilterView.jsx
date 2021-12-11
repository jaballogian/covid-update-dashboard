import React from 'react'

const FilterView = () => {
  const dummyCountryList = [
    {
      country: 'Afghanistan',
      countryInfo: {
        '_id': 4,
        'iso2': 'AF',
        'iso3': 'AFG',
        'lat': 33,
        'long': 65,
        'flag': 'https://disease.sh/assets/img/flags/af.png'
      },
    },
    {
      country: 'Albania',
      countryInfo: {
        '_id': 8,
        'iso2': 'AL',
        'iso3': 'ALB',
        'lat': 41,
        'long': 20,
        'flag': 'https://disease.sh/assets/img/flags/al.png'
      },
    },
  ]

  return (
    <div>
      Filter View
    </div>
  )
}

export default FilterView
