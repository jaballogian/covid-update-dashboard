import React, { useState, useEffect, useContext } from 'react'

// CONTEXTS
import { PageMainContext } from 'contexts/PageMainContext'

// MATERIAL UI
import Typography from '@mui/material/Typography'

// SERVICES
import { getYesterdayCovidCountryListApi } from 'services/covid/getCovidApi'

// STYLES
import useStyles from './countryTableViewUseStyles'

// UTILS
import { abbreviateNumber } from 'utils/formatNumberView'

const CountryTableView = () => {
  const { 
    covidCountryListData, 
    changeCovidCountryListData, 
    search,
    isAbbreviated,
  } = useContext(PageMainContext)

  const classes = useStyles()

  const [ filteredData, setFilteredData ] = useState([])
  const [ selectedSort, setSelectedSort ] = useState({
    column: null,
    sort: null,
  })

  const fetchGetYesterdayCovidCountryListApi = async () => {
    let data = await getYesterdayCovidCountryListApi()
    
    data = data.map((item, index) => {
      return {
        ...item,
        id: item.country,
        // no: index + 1,
      }
    })
    changeCovidCountryListData(data)
  }

  const onTitleRowIsClicked = (inputItem) => {
    let tempSort = null
    if(selectedSort.column === inputItem.title) {
      if(!selectedSort.sort) tempSort = { column: inputItem.title, sort: 'asc' }
      else if(selectedSort.sort === 'asc') tempSort = { column: inputItem.title, sort: 'desc' }
      else if(selectedSort.sort === 'desc') tempSort = { column: null, sort: null }
    }
    else {
      tempSort = { column: inputItem.title, sort: 'asc' }
    }
    setSelectedSort(tempSort)
  }

  useEffect(() => {
    if(search) {
      const newData = covidCountryListData.filter(item => item.country === search.country)
      setFilteredData(newData)
    }
  }, [search])

  useEffect(() => {
    fetchGetYesterdayCovidCountryListApi()
  }, [])

  const textListRowData = (inputItem) => [
    {
      title: 'Country Flag',
      className: classes.itemListCountryFlag,
      value: inputItem.countryInfo.flag,
    },
    {
      title: 'Country Name',
      className: classes.itemListCountryName,
      value: inputItem.country,
    },
    {
      title: 'Total Cases',
      className: classes.itemListNumber,
      value: isAbbreviated ?
      abbreviateNumber(inputItem.cases) :
      inputItem.cases.toLocaleString(),
    },
    {
      title: 'Today Cases',
      className: classes.itemListNumber,
      value: isAbbreviated ?
      abbreviateNumber(inputItem.todayCases) :
      inputItem.todayCases.toLocaleString(),
    },
    {
      title: 'Total Deaths',
      className: classes.itemListNumber,
      value: isAbbreviated ?
      abbreviateNumber(inputItem.deaths) :
      inputItem.deaths.toLocaleString(),
    },
    {
      title: 'Today Deaths',
      className: classes.itemListNumber,
      value: isAbbreviated ?
      abbreviateNumber(inputItem.todayDeaths) :
      inputItem.todayDeaths.toLocaleString(),
    },
    {
      title: 'Total Recovered',
      className: classes.itemListNumber,
      value: isAbbreviated ?
      abbreviateNumber(inputItem.recovered) :
      inputItem.recovered.toLocaleString(),
    },
    {
      title: 'Today Recovered',
      className: classes.itemListNumber,
      value: isAbbreviated ?
      abbreviateNumber(inputItem.todayRecovered) :
      inputItem.todayRecovered.toLocaleString(),
    },
    {
      title: 'Total Tests',
      className: classes.itemListNumber,
      value: isAbbreviated ?
      abbreviateNumber(inputItem.tests) :
      inputItem.tests.toLocaleString(),
    },
    {
      title: 'Population',
      className: classes.itemListNumber,
      value: isAbbreviated ?
      abbreviateNumber(inputItem.population) :
      inputItem.population.toLocaleString(),
    },
  ]

  return (
    <div className={classes.countryTableRoot}>
      <div className={classes.tableContainer}>
        {/* TITLE ROWS */}
        <div className={classes.itemListRoot}>
          {covidCountryListData[0] &&
          textListRowData(covidCountryListData[0]).map((item, index) => (
            index === 0 ?
            <div 
              key={index}
              className={item.className}
            /> :
            <Typography 
              key={index}
              variant='subtitle1'
              className={`${item.className} ${classes.itemTextBold} ${classes.itemTitleRowRoot}`}
              onClick={() => onTitleRowIsClicked(item)}
            >
              {item.title}
            </Typography>
          ))}
        </div>

        {/* DATA ROWS */}
        {covidCountryListData.map((item, index) => (
          // ROWS
          <div 
            key={index}
            className={`${classes.itemListRoot} ${classes.itemDataRowRoot}`}
          >
            {/* COLUMNS */}
            {textListRowData(item).map((columnItem, columnIndex) => (
              columnIndex === 0 ?
              // FLAG COLUMN
              (item.countryInfo._id ?
              <img
                key={columnIndex}
                src={columnItem.value}
                alt=''
                className={columnItem.className}
              /> :
              <div 
                key={columnIndex}
                className={columnItem.className}
              />) :
              // NUMBER COLUMN
              <Typography 
                key={columnIndex}
                variant='subtitle1'
                className={
                  columnIndex === 1 ?
                  `${columnItem.className} ${classes.itemTextBold}` :
                  columnItem.className
                }
              >
                {columnItem.value}
              </Typography>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CountryTableView
