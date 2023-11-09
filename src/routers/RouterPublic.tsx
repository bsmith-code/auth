// Common
import { ReactNode } from 'react'
import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom'

// Components
import ViewPublic from 'views/ViewPublic'
import LayoutDefault from 'layouts/LayoutDefault'

const PreparedView = ({ view }: { view: ReactNode }) => (
  <LayoutDefault>{view}</LayoutDefault>
)
const RouterPublic = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<PreparedView view={<ViewPublic />} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
)

export default RouterPublic
