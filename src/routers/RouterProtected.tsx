// Common
import { ReactNode } from 'react'
import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom'

// Hooks
import { useIdleSession } from 'hooks/useIdleSession'

// Components
import ViewApps from 'views/ViewApps'
import ViewUsers from 'views/ViewUsers'
import LayoutDefault from 'layouts/LayoutDefault'

const PreparedView = ({ view }: { view: ReactNode }) => (
  <LayoutDefault>{view}</LayoutDefault>
)
const RouterProtected = () => {
  useIdleSession()

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PreparedView view={<ViewApps />} />} />
        <Route path="users" element={<PreparedView view={<ViewUsers />} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterProtected
