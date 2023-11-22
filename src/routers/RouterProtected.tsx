import { Navigate, Route, Routes } from 'react-router-dom'

import { useAppRouter } from 'hooks/useAppRouter'
import { useIdleSession } from 'hooks/useIdleSession'

const RouterProtected = () => {
  useIdleSession()
  const { availableRoutes } = useAppRouter()

  return (
    <Routes>
      {availableRoutes.map(props => (
        <Route key={props.path} {...props} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default RouterProtected
