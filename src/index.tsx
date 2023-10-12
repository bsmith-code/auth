import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'App.jsx'

ReactDOM.createRoot(document.querySelector('#root') as Element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
