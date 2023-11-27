import { ReactNode } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { LayoutDefault } from 'layouts/LayoutDefault'
import { ViewPublic } from 'views/ViewPublic'

const PreparedView = ({ view }: { view: ReactNode }) => (
  <LayoutDefault>{view}</LayoutDefault>
)
const RouterPublic = () => (
  <Routes>
    <Route index element={<PreparedView view={<ViewPublic />} />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
)

export default RouterPublic
