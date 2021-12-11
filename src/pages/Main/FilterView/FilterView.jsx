import React, { useState } from 'react'

// MUI
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

const FilterView = () => {
  const [ search, setSearch ] = useState(null)

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
    <>
      <Autocomplete
        value={search}
        onChange={(event, newValue) => setSearch(newValue)}
        options={dummyCountryList}
        getOptionLabel={(option) => option.country}
        renderOption={(props, option) => (
          <div {...props}>
            <img
              src={option.countryInfo.flag}
              alt=''
            />
            {option.country} ({option.countryInfo.iso3})
          </div>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Search'
          />
        )}
      />
    </>
  )
}

export default FilterView
