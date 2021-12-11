import React, { useState, useContext } from 'react'

// CONTEXTS
import { PageMainContext } from 'contexts/PageMainContext'

// MUI
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

// MUI ICONS
import IconVisibility from '@mui/icons-material/Visibility'
import IconVisibilityOff from '@mui/icons-material/VisibilityOff'

const FilterView = () => {
  const { 
    covidCountryListData,
    search,
    changeSearch, 
  } = useContext(PageMainContext)

  const [ generalOrDetail, setGeneralOrDetail ] = useState('general')

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

      {/* GENERAL AND DETAIL FILTER */}
      <ToggleButtonGroup
        color='primary'
        exclusive
        value={generalOrDetail}
        onChange={(event, newValue) => setGeneralOrDetail(newValue)}
      >
        <ToggleButton value='general'>
          <IconVisibilityOff/>
          General
        </ToggleButton>
        <ToggleButton value='detail'>
          <IconVisibility/>
          Detail
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  )
}

export default FilterView
