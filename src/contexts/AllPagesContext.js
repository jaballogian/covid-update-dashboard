import React, { createContext } from 'react'

// MATERIAL UI CORES
import useMediaQuery from '@mui/material/useMediaQuery'

const AllPagesContext = createContext()

const AllPagesContextProvider = (props) => {
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.only('xs'))
  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.only('sm'))
  const isMdScreen = useMediaQuery((theme) => theme.breakpoints.only('md'))
  const isLgScreen = useMediaQuery((theme) => theme.breakpoints.only('lg'))
  const isXlScreen = useMediaQuery((theme) => theme.breakpoints.only('xl'))

  let breakpointType
  isXsScreen && (breakpointType = 'xs')
  isSmScreen && (breakpointType = 'sm')
  isMdScreen && (breakpointType = 'md')
  isLgScreen && (breakpointType = 'lg')
  isXlScreen && (breakpointType = 'xl')

  console.log(breakpointType)

  return (
    <AllPagesContext.Provider
      value={{
        breakpointType,
      }}
    >
      {props['children']}
    </AllPagesContext.Provider>
  )
}

export { AllPagesContextProvider, AllPagesContext }