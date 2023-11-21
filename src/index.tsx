import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { App } from 'App'
import { SnackbarProvider } from 'notistack'

import store from 'store'

import CssBaseline from '@mui/material/CssBaseline'
import Grow from '@mui/material/Grow'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'

import { lightTheme } from 'styles'

ReactDOM.createRoot(document.querySelector('#root') as Element).render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <SnackbarProvider maxSnack={4} TransitionComponent={Grow}>
            <App />
          </SnackbarProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>
)
