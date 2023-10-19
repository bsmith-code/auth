// Common
import { lazy, Suspense } from 'react'

// Store
import { useGetUserQuery } from 'store'

// MUI
import { lightTheme } from 'styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'

// Components
import ViewLoader from 'views/ViewLoader'

const App = () => {
  const { data: user } = useGetUserQuery()

  const ViewPublic = lazy(() => import('views/ViewPublic'))
  const ViewProtected = lazy(() => import('views/ViewProtected'))

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Suspense fallback={<ViewLoader />}>
          {user ? <ViewProtected /> : <ViewPublic />}
        </Suspense>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
