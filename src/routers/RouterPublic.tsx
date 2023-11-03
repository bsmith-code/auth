// Common
import { Routes, BrowserRouter, Route } from 'react-router-dom'

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
