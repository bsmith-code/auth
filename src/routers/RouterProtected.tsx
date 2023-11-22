import { ReactNode } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LayoutDefault from 'layouts/LayoutDefault'

import { useIdleSession } from 'hooks/useIdleSession'

import ViewApps from 'views/ViewApps'
import ViewUsers from 'views/ViewUsers'

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
