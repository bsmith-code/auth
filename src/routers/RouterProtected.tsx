// Common
import { Routes, BrowserRouter, Route } from 'react-router-dom'

// Constants
import { ROUTE_APPS_PATH, ROUTE_USERS_PATH } from 'constants/index'

// Components
import ViewApps from 'views/ViewApps'
import LayoutDefault from 'layouts/LayoutDefault'

const RouterProtected = () => (
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

export default RouterProtected
