// MUI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  globalDataRoot: {
    width: '100%',
    padding: 40,
    [theme.breakpoints.only('md')]: {
      padding: 32,
    },
    [theme.breakpoints.only('sm')]: {
      padding: 24,
    },
  },
  lastUpdatedText: {
    marginBottom: 8,
  },
  itemCard: {
    height: '100%',
    padding: 16,
    [theme.breakpoints.only('md')]: {
      padding: '16px 8px',
    },
    [theme.breakpoints.only('sm')]: {
      padding: '16px 8px',
    },
  },
  cardText: {
    textAlign: 'center',
  },
}))

export default useStyles