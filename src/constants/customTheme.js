// MATERIAL UI CORES
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let customTheme = createTheme({})

customTheme = responsiveFontSizes(customTheme) 

export default customTheme