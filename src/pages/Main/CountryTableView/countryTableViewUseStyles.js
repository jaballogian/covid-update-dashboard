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
  itemListCountryFlag: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    marginRight: 20,
  },
  itemListCountryName: {
    width: 250,
  },
  itemListNumber: {
    width: 100,
  },
}))

export default useStyles