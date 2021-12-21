// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  countryTableRoot: {
    width: '100%',
    padding: '0px 40px 40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tableContainer: {
    width: '100%',
    overflowX: 'auto',
  },
  itemListRoot: {
    width: '100%',
    minWidth: 'fit-content',
    display: 'flex',
    border: '1px solid gray',
    borderRadius: 4,
    marginBottom: 8,
    '&:last-child': {
      marginBottom: 0,
    },
  },
  itemTitleRowRoot: {
    cursor: 'pointer',
  },
  itemDataRowRoot: {
    '&:hover': {
      backgroundColor: 'gainsboro',
    },
  },
  itemTextBold: {
    fontWeight: 600,
  },
  itemListCountryFlag: {
    width: 46,
    height: 46,
    minWidth: 46,
    borderRadius: '50%',
    marginRight: 20,
    padding: 8,
    margin: 'auto 20px auto 0px'
  },
  itemListCountry: {
    minWidth: 266,
    padding: 8,
  },
  itemListCountryName: {
    flex: 1,
    minWidth: 150,
    padding: 8,
    lineHeight: 1.5,
    display: 'flex',
    alignItems: 'center',
  },
  itemListNumber: {
    flex: 1,
    minWidth: 110,
    padding: 8,
    lineHeight: 1.5,
    display: 'flex',
    alignItems: 'center',
  },
}))

export default useStyles