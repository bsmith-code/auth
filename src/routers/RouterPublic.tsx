import { ReactNode } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LayoutDefault from 'layouts/LayoutDefault'

import ViewPublic from 'views/ViewPublic'

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
