// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  dataGridroot: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  },
  flexContainer: {
    display: 'flex',
  },
  dataGridCountryFlag: {
    width: 30,
    marginRight: 20,
  },
}))

export default useStyles