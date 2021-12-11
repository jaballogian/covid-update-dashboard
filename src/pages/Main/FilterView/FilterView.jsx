import React, { useState, useContext } from 'react'

// CONTEXTS
import { PageMainContext } from 'contexts/PageMainContext'

// MUI
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

const FilterView = () => {
  const { 
    covidCountryListData,
    search,
    changeSearch, 
  } = useContext(PageMainContext)

  return (
    <>
      <Autocomplete
        value={search}
        onChange={(event, newValue) => changeSearch(newValue)}
        options={covidCountryListData}
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
