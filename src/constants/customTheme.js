// MATERIAL UI CORES
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let customTheme = createTheme({
  typography: {
    fontFamily: [
      // 'Cera Pro Medium', 'sans-serif',
      'Product Sans', 'sans-serif',
    ].join(','),
  },
})

customTheme = responsiveFontSizes(customTheme) 

export default customTheme