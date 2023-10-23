// Common
import { Routes, BrowserRouter, Route } from 'react-router-dom'

// Constants
import { ROUTE_APPS_PATH, ROUTE_USERS_PATH } from 'constants/index'

// Components
import ViewPublic from 'views/ViewPublic'
import LayoutDefault from 'layouts/LayoutDefault'

const RouterPublic = () => (
  <BrowserRouter>
    <Routes>
      <Route
        index
        element={
          <LayoutDefault>
            <ViewPublic />
          </LayoutDefault>
        }
      />
    </Routes>
  </BrowserRouter>
)

export default RouterPublic
