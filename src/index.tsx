// Common
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

// Store
import store from 'store'

// Components
import App from 'App'

ReactDOM.createRoot(document.querySelector('#root') as Element).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
