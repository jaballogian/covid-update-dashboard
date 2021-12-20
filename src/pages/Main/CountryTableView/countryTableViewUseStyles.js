// MATERIAL UI STYLES
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  dataGridroot: {
    width: '100vw',
    // height: '100vh',
    // overflow: 'hidden',
  },
  flexContainer: {
    display: 'flex',
  },
  itemListRoot: {
    display: 'flex',
  },
  dataGridCountryFlag: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    marginRight: 20,
  },
}))

export default useStyles