import React from 'react'
import ReactDOM from 'react-dom'

// COMPONENTS
import App from './App'

// CONSTANTS
import customTheme from 'constants/customTheme'

// CONTEXTS
import { AllPagesContextProvider } from 'contexts/AllPagesContext'

// MATERIAL UI
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'

// STYLES
import './index.css'

ReactDOM.render(
  <ThemeProvider theme={customTheme}>
    <StyledEngineProvider injectFirst>
      <AllPagesContextProvider>
        <App/>
      </AllPagesContextProvider>
    </StyledEngineProvider>
  </ThemeProvider>,
  document.getElementById('root')
)