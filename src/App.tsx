// Common
import { lazy, Suspense } from 'react'
import { SnackbarProvider } from 'notistack'

// Store
import { useSessionQuery } from 'store/server'

// MUI
import Grow from '@mui/material/Grow'
import { lightTheme } from 'styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'

// Components
import ViewLoader from 'views/ViewLoader'

const App = () => {
  const { data: user } = useSessionQuery()

  const RouterPublic = lazy(() => import('routers/RouterPublic'))
  const RouterProtected = lazy(() => import('routers/RouterProtected'))

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={4} TransitionComponent={Grow}>
          <Suspense fallback={<ViewLoader />}>
            {user ? <RouterProtected /> : <RouterPublic />}
          </Suspense>
        </SnackbarProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
