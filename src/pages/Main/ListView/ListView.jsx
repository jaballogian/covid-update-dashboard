import React, { useContext } from 'react'

// CONTEXTS
import { PageMainContext } from 'contexts/PageMainContext'

// MUI
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// STYLES
import useStyles from './listViewUseStyles'

const ListView = () => {
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
        </Grid>
      ))}
    </Grid>
  )
}

export default ListView
