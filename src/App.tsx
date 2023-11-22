import { lazy, Suspense } from 'react'
import { SnackbarProvider } from 'notistack'

import { useSessionQuery } from 'store/server'

import CssBaseline from '@mui/material/CssBaseline'
import Grow from '@mui/material/Grow'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'

import { ViewLoader } from 'views/ViewLoader'

import { lightTheme } from 'styles'

export const App = () => {
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
