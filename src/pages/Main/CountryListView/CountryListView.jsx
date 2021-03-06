import React, { useContext } from 'react'

// CONTEXTS
import { PageMainContext } from 'contexts/PageMainContext'

// MUI
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// STYLES
import useStyles from './countryListViewUseStyles'

const CountryListView = () => {
  const { covidCountryListData } = useContext(PageMainContext)

  const classes = useStyles()

  return (
    <Grid container>
      {covidCountryListData.map((item, index) => (
        <Grid
          key={index}
          item
          xs={12} sm={6}
        >
          {/* FLAG AND COUNTRY */}
          <div className={classes.flexContainer}>
            {item.countryInfo._id &&
            <img
              src={item.countryInfo.flag}
              alt=''
              className={classes.dataGridCountryFlag}
            />}
            <Typography>
              {item.country}
            </Typography>
          </div>

          {/* TOTAL AND TODAY CASES */}
          <div className={`${classes.flexContainer} ${classes.justifyContentSpaceBetween}`}>
            <Typography>
              {item.cases}
            </Typography>
            <Typography>
              {item.todayCases}
            </Typography>
          </div>

          {/* TOTAL AND TODAY DEATHS */}
          <div className={`${classes.flexContainer} ${classes.justifyContentSpaceBetween}`}>
            <Typography>
              {item.deaths}
            </Typography>
            <Typography>
              {item.todayDeaths}
            </Typography>
          </div>

          {/* TOTAL AND TODAY RECOVERED */}
          <div className={`${classes.flexContainer} ${classes.justifyContentSpaceBetween}`}>
            <Typography>
              {item.recovered}
            </Typography>
            <Typography>
              {item.todayRecovered}
            </Typography>
          </div>

          {/* TOTAL TESTS AND POPULATION */}
          <div className={`${classes.flexContainer} ${classes.justifyContentSpaceBetween}`}>
            <Typography>
              {item.tests}
            </Typography>
            <Typography>
              {item.population}
            </Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  )
}

export default CountryListView
