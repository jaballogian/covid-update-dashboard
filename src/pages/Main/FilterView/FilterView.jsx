import React, { useContext } from 'react'

// CONTEXTS
import { PageMainContext } from 'contexts/PageMainContext'

// MUI
import Autocomplete from '@mui/material/Autocomplete'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import TextField from '@mui/material/TextField'

const FilterView = () => {
  const { 
    covidCountryListData,
    search,
    changeSearch, 
    isAbbreviated, 
    changeIsAbbreviated,
  } = useContext(PageMainContext)

  return (
    <>
      {/* SEARCH */}
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

      {/* ABBREVIATED FILTER */}
      <FormGroup>
        <FormControlLabel 
          control={<Switch />} 
          label='Abbreviated' 
          checked={isAbbreviated}
          onChange={(event) => changeIsAbbreviated(event.target.checked)}
        />
      </FormGroup>
    </>
  )
}

export default FilterView
