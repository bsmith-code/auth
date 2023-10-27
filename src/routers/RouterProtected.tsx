// Common
import { Routes, BrowserRouter, Route } from 'react-router-dom'

// Hooks
import { useIdleSession } from 'hooks/useIdleSession'

// Components
import ViewApps from 'views/ViewApps'
import LayoutDefault from 'layouts/LayoutDefault'

const RouterProtected = () => {
  useIdleSession()

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <LayoutDefault>
              <ViewApps />
            </LayoutDefault>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterProtected
