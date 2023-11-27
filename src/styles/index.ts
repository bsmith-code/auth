import { Box } from '@mui/material'
import { createTheme, styled } from '@mui/material/styles'

export const lightTheme = createTheme({
  typography: {
    fontFamily: 'Open Sans',
    fontWeightMedium: 600
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#7ebaeb'
    },
    secondary: {
      main: '#efefef'
    }
  }
})

export const StyledAbsoluteCenter = styled(Box)`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
