// Store
import { useGetUserQuery } from 'store'

// MUI
import { lightTheme } from 'styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'

// Components
import ViewPublic from 'views/ViewPublic'
import ViewProtected from 'views/ViewProtected'

const App = () => {
  const { data: user } = useGetUserQuery()

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        {user ? <ViewProtected /> : <ViewPublic />}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
